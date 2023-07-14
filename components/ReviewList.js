app.component("review-list", {
    props: {
        reviews: {
            type: Array,
            required: true,
        },
    },
    template:
    /*html*/
    `
      <div className="review-container">
        <h3>Reivews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                User: {{review.name}} gave this {{review.rating}} stars 
                <br />
                Comment: "{{review.review}}"
                <br />
                Recommend:  {{review.recommend}}
            </li>
        </ul>
      </div>
    `

});
