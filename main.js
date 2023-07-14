const app = Vue.createApp({
    data() {
        return {
            // cart: 0,
            cart: [],
            premium: true,
        };
    },
    methods: {
        updateCart(id) {
            // this.cart += 1;
            this.cart.push(id);
        },
        minusCart(id) {
            // truyền vào id, mảng thì có số 0 nên đặt điều kiện > -1
            const index = this.cart.indexOf(id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },
    },
});
