const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            brand: "Vue Mastery",
            // description: "abc",
            // image: "./assets/images/socks_green.jpg",
            selectedVariant: 0,
            url: "https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3",
            // inStock: false,
            inVentory: 5,
            onSale: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {
                    id: 2234,
                    color: "#218753",
                    image: "./assets/images/socks_green.jpg",
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: "#495d77",
                    image: "./assets/images/socks_blue.jpg",
                    quantity: 0,
                },
            ],
            sizes: ["8", "9", "10", "11", "12"],
        };
    },
    methods: {
        addToCart() {
            // tham chiếu đến cái cart trong data, thực hiện tính năng
            this.cart += 1;
        },
        // viết hàm truyền vào ảnh
        // updateImage(variantImage) {
        //     // gán giá trị truyền vào cho this.image để tham chiếu vào data của image
        //     this.image = variantImage;
        // },
        updateVariant(index) {
            this.selectedVariant = index;
            console.log(index)
        },
        decrementCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if(this.onSale && this.variants[this.selectedVariant].quantity){
                return this.brand + " " + this.product + "is on sale."
            }
            return "Discounts no longer available"
        }
    }
});
