<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="author.imageUrl"
        alt="Author Image"
      />
    </div>

    <div class="card-body">
      <router-link :to="{ name: 'ListBooks', params: { id: author.id } }"
        ><h5 class="card-title">{{ author.name }}</h5></router-link
      >
      <p class="card-text font-italic">
        {{ author.email.substring(0, 65) }}...
      </p>
      <router-link
        id="edit-category"
        :to="{ name: 'EditAuthor', params: { id: author.id } }"
        v-show="$route.name === 'AdminAuthor'"
      >
        Edit
      </router-link>
      <a href="#" class="text-right"  v-show="$route.name === 'AdminAuthor'" @click="deleteAuthor(author.id)">Delete</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token: null,
      url:"http://localhost:8081/author/delete/",
    };
  },
  name: "AuthorBox",
  props: ["author", 'baseURL'],
  methods: {
    deleteAuthor(authorId) {
      axios
          .delete(`${this.url}${authorId}/?token=${this.token} `)
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
    listBooks() {
      this.$router.push({
        name: "ListBooks",
        params: { id: this.author.id },
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

#edit-category {
  float: right;
}
</style>
