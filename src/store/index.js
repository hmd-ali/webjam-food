import { reactive, readonly } from 'vue'

const state = reactive({
    navMenuToggled: false,
    products:[
        {
            id: 1,
            name: 'muffin',
            imageUrl: 'muffin.jpg',
            price: 3.99,
        },
        {
            id: 2,
            name: 'cupcake',
            imageUrl: 'cupcake.jpg',
            price: 4.99,
        },
        {
            id: 3,
            name: 'ginger bread',
            imageUrl: 'gingerbread.jpg',
            price: 5.99,
        },
        {
            id: 4,
            name: 'marshmallow cake',
            imageUrl: 'marshmallow-cake.jpg',
            price: 7.99
        }

    ]
})

const methods = {
    navMenu:{
        open(){
            state.navMenuToggled = true
        },
        close(){
            state.navMenuToggled = false
        }
    }
}

export default {
    state: readonly(state),
    methods,
}