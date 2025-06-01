import {createServer} from 'http'
import data from './data.js';
import { getList } from './list.js';
import { deleteAddress } from './delete.js';
import { getForm } from './form.js';

createServer((req, res) => {
    const parts = req.url.split('/');
    if(parts.includes('delete')){
         data.addresses = deleteAddress(data.addresses, parts[2]);
        redirect(res, '/')
    } else if (parts.includes('new')){
        send(res, getForm())
    } else if (parts.includes('edit')){
        send(res, getForm(data.addresses, parts[2]));
    } else{
        send(res, getList(data.addresses))
    }
}).listen(8080, () => {
    console.log('Address book reachable via http://localhost:8080')
});

function send(res, responseBody){
    res.writeHead(200, {'content-type': 'text/html'})
    res.end(responseBody)
}

function redirect(res, to){
    res.writeHead(302, {location: to, 'content-type': 'text/plain'});
    res.end(`302 Redirecting to ${to} `)
}

