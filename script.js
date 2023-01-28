alert('Добро пожаловать в MacDonalds')

let menu = 'burger cheeseburger doubleburger'

let menuDrinck = 'coca-cola fanta sprite'

let menuDessert = 'cake donut ice-cream'

let client = prompt('меню burger cheeseburger doubleburger').trim().toLowerCase()

if(menu.includes(client)) {
    alert('подождите почти готова')
    let drinck = confirm('хотите купить напиток')
    if(drinck === true) {
        let clientDrinck = prompt('меню coca-cola fanta sprite').trim().toLowerCase()
        if(menuDrinck.includes(clientDrinck)) {
            alert('подождите почти готова')
        } else {
            alert('у нас нет такого в меню')
        }
    } else {
        console.log('ждем в следующий раз');
    }
    let dessert = confirm('хотите купить десерт')
    if(dessert === true) {
        let clientDessert = prompt('меню cake donut ice-cream').trim().toLowerCase()
        if(menuDessert.includes(clientDessert)) {
            alert('подождите почти готова')
        } else {
            alert('у нас нет такого в меню')
        }
    }   
} else {
    alert('go home bratishka')
}

