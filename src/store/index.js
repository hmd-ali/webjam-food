import { reactive, readonly } from 'vue'

const state = reactive({
    navMenuToggled: false,
    cartContainerToggled: false,
    cart: [],
    error: false,
    products:[
        {
            id: 1,
            name: 'muffin',
            imageUrl: 'muffin.jpg',
            price: 399,
        },
        {
            id: 2,
            name: 'cupcake',
            imageUrl: 'cupcake.jpg',
            price: 499,
        },
        {
            id: 3,
            name: 'ginger bread',
            imageUrl: 'gingerbread.jpg',
            price: 599,
        },
        {
            id: 4,
            name: 'marshmallow cake',
            imageUrl: 'marshmallow-cake.jpg',
            price: 799,
        },
        {
            id: 5,
            name: 'cherry cream cheese cake',
            imageUrl: 'cherry-cream-cheese-cake.jpg',
            price: 1099,
        },
        {
            id: 6,
            name: 'chocolate mousse',
            imageUrl: 'chocolate-mousse.jpeg',
            price: 899,
        },
        {
            id: 7,
            name: 'donuts',
            imageUrl: 'donut.jpg',
            price: 599,
        },
        {
            id: 8,
            name: 'fried ice cream',
            imageUrl: 'fried-ice-cream.jpg',
            price: 999,
        },
        {
            id: 9,
            name: 'molten dark chocolate cake',
            imageUrl: 'molten-dark-chocolate.jpg',
            price: 1299,
        }

    ]
})

const methods = {
    navMenu:{
        open(){
            state.navMenuToggled = true
            state.cartContainerToggled = false
        },
        close(){
            state.navMenuToggled = false
        }
    },
    cart:{
        add(id){
            if( state.cart.some(item => item.id === id) ){
                state.error = true
                return
            } else {
                state.cart.push( {...state.products.find((x) => x.id === id), quantity: 1} )
                console.log(state.cart)
            }
        },
        remove(id){
            state.cart = state.cart.filter((product) => product.id !== id)
        },
        addItem(id){
            state.cart.find(item => item.id === id).quantity += 1
        },
        removeItem(id){
            state.cart.find(item => item.id === id).quantity <= 1 ? {} : state.cart.find(item => item.id === id).quantity -= 1
        }
    },
    cartContainer:{
        open(){
            state.cartContainerToggled = true
            state.navMenuToggled = false
        },
        close(){
            state.cartContainerToggled = false
        }
    },
    error:{
        close(){
            state.error = false
        }
    }
}

export default {
    state: readonly(state),
    methods,
}