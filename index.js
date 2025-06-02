import {createServer, request} from 'http'
import data from './data.js';
import { getList } from './list.js';
import { deleteAddress } from './delete.js';
import { getForm } from './form.js';
import { parse } from 'querystring';
import { saveAddress } from './save.js';
import { readFile } from 'fs';

const options = new URL('http://localhost:8080/')

request(options, (res) => {
    let body = ''
    res.on('data', (chunk) => { body += chunk});
    res.on('end', () => {
        console.log(body)
    })
}).end()


createServer((req, res) => {
    const parts = req.url.split('/');
    if(parts.includes('delete')){
         data.addresses = deleteAddress(data.addresses, parts[2]);
        redirect(res, '/')
    } else if (parts.includes('new')){
        send(res, getForm())
    } else if (parts.includes('edit')){
        send(res, getForm(data.addresses, parts[2]));
    } else if (parts.includes('save') && req.method === 'POST'){
        let body = ''
        req.on('readable', () => {
            const data = req.read();
            body += data !== null ? data : '';
        });
        req.on('end', () => {
            const address = parse(body);
            data.addresses = saveAddress(data.addresses, address);
            redirect(res, '/')
        })
    } else if(req.url === '/style.css') {
        readFile('public/style.css', 'utf-8', (err, data) => {
            if(err){
                res.statusCode = 404;
                res.end()
            }else {
                res.end(data)
            }
        })

    } else if(req.url === '/form.css') {
    readFile('public/form.css', 'utf-8', (err, data) => {
        if(err){
            res.statusCode = 404;
            res.end()
        }else {
            res.writeHead(200, {'content-type': 'text/css'});
            res.end(data)
        }
    })
}

    else{
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

