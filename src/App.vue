<template>
  <Navbar
    :cartCount="cartCount"
    @resetCartCount="resetCartCount"
    v-if="!['Signup', 'Signin'].includes($route.name)"
  />
  <div style="min-height: 60vh">
    <router-view
      v-if="books && authors"
      :baseURL="baseURL"
      :books="books"
      :authors="authors"
      @fetchData="fetchData"
    >
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {
      baseURL: "http://localhost:8081/",
      books: null,
      authors: null,
      key: 0,
      token: null,
      cartCount: 0,
    };
  },

  components: { Navbar },
  methods: {
    async fetchData() {
      // fetch book
      await axios
        .get(this.baseURL + "book/")
        .then((res) => (this.books = res.data))
        .catch((err) => console.log(err));
      console.log(this.books)
      //fetch authors
      await axios
        .get(this.baseURL + "author/")
        .then((res) => (this.authors = res.data))
        .catch((err) => console.log(err));

      //fetch cart items
      if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
