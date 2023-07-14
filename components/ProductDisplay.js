app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /*html*/
        ` <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img
                    :src="image"
                    :class="!inStock ? 'out-of-stock-img' : ''"
                    alt=""
                />
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                 
                <p>Shipping: {{shipping}}</p>
                
                <p>{{sale}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{backgroundColor: variant.color}"
                ></div>
                <div>
                    <div
                        style="display: inline-block; padding: 10px"
                        v-for="size in sizes"
                    >
                        {{size}}
                    </div>
                    <button
                        class="button"
                        v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}"
                    >
                        Add to cart
                    </button>
                    <button class="button" @click="decrementCart">
                        Remove item.
                    </button>
                </div>
            </div>
        </div>
    </div>`,
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
            console.log(index);
        },
        decrementCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        sale() {
            if (this.onSale && this.variants[this.selectedVariant].quantity) {
                return this.brand + " " + this.product + "is on sale.";
            }
            return "Discounts no longer available";
        },
        shipping() {
            if (this.premium) {
                return "Free";
            }
            return 2.99 + '$';
        },
    },
});
