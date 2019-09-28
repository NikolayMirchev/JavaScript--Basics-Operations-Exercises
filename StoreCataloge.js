function solve(input) {
    let cataloge = {};
    const alphaSort = (a, b) => a.localeCompare(b);

    for (let line of input) {
        let[name,price] = line.split(' : ');
        price = Number(price);
        let initial = name[0];

        if (!cataloge.hasOwnProperty(initial)) {
            cataloge[initial] = {};
        }
        let products = cataloge[initial];

        if (!products.hasOwnProperty(name)) {
            products[name] = price;
        }
    }
    let sortedInitals = Object.keys(cataloge).sort(alphaSort);

    for (let initial of sortedInitals) {
        console.log(initial);
        let products = cataloge[initial];
        let sortedProducts = Object.keys(products).sort(alphaSort);
        
        for (let p of sortedProducts){
            console.log(` ${p}: ${products[p]}`);
        }
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)