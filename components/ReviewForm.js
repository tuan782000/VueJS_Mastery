app.component("review-form", {
    template:
        /* html */
        `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" v-model="name" />
            <label htmlFor="review">Review</label>
            <input type="text" id="review" v-model="review" />
            <label htmlFor="rating">Rating</label>
            <select type="text" id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <br />
            <label htmlFor="recommend">Recommend</label>
            <select type="text" id="recommend" v-model="recommend">
                <option>Yes</option>
                <option>No</option>
            </select>
            <input class="button" type="submit" value="submit"/>
        </form>
    `,
    data() {
        return {
            name: "",
            review: "",
            rating: null,
            recommend: null,
        };
    },
    methods: {
        // lắng nghe sự kiện onSubmit
        onSubmit() {
            if (
                this.name === "" ||
                this.review === "" ||
                this.rating === null ||
                this.recommend === null

            ) {
                alert("Review is inComplete. Please fill out every field.");
                return;
            }
            // gán các giá trị mới vào biến productReview, bằng cách tham chiếu đến các giá trị name review ratting
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend,
            };
            // dùng emit để phát sự kiện cho thằng cha tiếp nhận, kèm theo biến productReview
            this.$emit("review-submitted", productReview);
            // sau khi phát xong xét lại các ô input cho giá trị nó là rỗng
            this.name = "";
            this.review = "";
            this.rating = null;
            this.recommend = null;
        },
    },
});

// Mô tả  @submit.prevent ngăn chặn việc form hành động the mặc định submit xong load lại trang
// lắng nghe sự kiện submit để gọi hàm onSubmit bằng @submit <=> v-on:submit
// v-model là two ways bindings lấy dữ liệu từ form đưa xuống data và ngược lại lấy dữ liệu từ data đưa lên lại input

// data là tới việc xử lý hiển thị dữ liệu

// methods là nơi liên quan đến việc viết các hàm xử lý
