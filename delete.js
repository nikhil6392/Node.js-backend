export function deleteAddress(addresses, id){
    const parsedID = parseInt(id, 10);
    const filteredAddresses = addresses.filter(
        (address) => address.id !== parsedID
    )

    return filteredAddresses
}