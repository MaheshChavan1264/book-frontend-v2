<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="book.imageURL"
        alt="Book Image"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowBookDetails', params: { id: book.id } }"
        ><h5 class="card-title">{{ book.title }}</h5></router-link
      >
      <p class="card-text"><sup>$</sup>{{ book.price }}</p>
      <p class="card-text font-italic">
        {{ book.description.substring(0, 65) }}...
      </p>
      <router-link
        id="edit-product"
        :to="{ name: 'EditBook', params: { id: book.id } }"
        v-show="$route.name === 'AdminBook'"
      >
        Edit
      </router-link>
      <a href="#" class="text-right"  v-show="$route.name === 'AdminBook'" @click="deleteBook(book.id)">Delete Book</a>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      token: null,
      url:"http://localhost:8081/book/delete/",
    };
  },
  name: "BookBox",
  props: ["book",'baseURL'],
  methods: {
    deleteBook(bookId) {
      axios
          .delete(`${this.url}${bookId}/?token=${this.token} `)
          .then(
              (response) => {
                console.log(response)
                if (response.status == 200) {
                  this.$router.go(0);
                }
                this.$emit('fetchData');
              },
              (error) => {
                console.log(error);
              }
          );
    },
    showDetails() {
      this.$router.push({
        name: "ShowBookDetails",
        params: { id: this.book.id },
      });
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
  },
};
</script>

<style scoped>
.embed-responsive .card-img-top {
  object-fit: cover;
}

a {
  text-decoration: none;
}

.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}

.card-title:hover {
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}

#edit-product {
  float: right;
}
</style>
