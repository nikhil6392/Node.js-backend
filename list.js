export function getList(addresses){
    return `<!DOCTYPE html>
        <html>
            <head>
                <title>Address Book</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <h1>Address Book</h1>
                <table>
                    <thead>
                    <tr>
                    <th>ID  </th>
                    <th>First Name  </th>
                    <th>Last Name   </th>
                    <th>delete</th>
                    <th>edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${addresses.map(createRow).join('')}
                    </tbody>
                    </table>
               <a href = "/new">create new record </a>  
            </body>
           
        </html>`
}

function createRow(address){
    return `<tr>
    <td>${address.id}</td>
    <td>${address.firstName}</td>
    <td>${address.lastName}</td>
    <td><a href = "/delete/${address.id}">Delete</a></td>
    <td><a href ="/edit/${address.id}">Edit</a></td>
    </tr>`;
}