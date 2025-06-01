export function getForm(addresses, id){
    let address = {
        id : '',
        firstName: '',
        lastName: '',
        street: '',
        city:   '',
        country:  '',
    };

    if(id){
        address = addresses.find((adr) => adr.id === parseInt(id, 10))
    }
    
    const form = `<!DOCTYPE html>
    <html>
        <head>
            <title>Address Book </title>
            <meta charset = "utf-8>
        </head>
        <body>
            <form action = "/save" method = "POST>
                <input type = "hidden" id ="id" name = "id" value = "${address.id} />
                <div>
                    <label for = "firstName"> First Name </label>
                    <input type = "text" id = "firstName" name = "firstName: value = "${address.firstName} />
                </div>
                <div>
                    <label for = "lastName"> Last Name </label>
                    <input type = "text" id = "lastName" name = "lastName"
                    value = "${address.lastName}" />
                </div>
                <div>
                    <label for = "street">Street </label>
                    <input type = "text" id = "street" name = "street" value = "${address.street}" />
                </div>
                <div>
                    <label for = "city">City </label>
                    <input type = "text" id = "city" name = "city" value = "${address.city}" />
                </div>
                <div>
                    <label for = "country">Country </label>
                    <input type = "text" id = "country" name = "country" value = "${address.country}" />
                </div>
                <div>
                    <button type = "submit">save</button>
                </div>
            </form>
        </body>
    </html>`;

    return form
}



