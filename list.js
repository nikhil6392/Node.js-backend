export function getList(addresses){
    return `<!DOCTYPE html>
        <html>
            <head>
                <title>Address Book</title>
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
                    </tr>
                    </thead>
                    <tbody>
                    ${addresses.map(createRow).join('')}
                    </tbody>
                    </table>
            </body>
        </html>`
}

function createRow(address){
    return `<tr>
    <td>${address.id}</td>
    <td>${address.firstName}</td>
    <td>${address.lastName}</td>
    <td><a href = "/delete/${address.id}">delete</a></td>
    </tr>`;
}