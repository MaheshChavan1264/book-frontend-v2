<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your WishList</h4>
      </div>
    </div>

    <div class="row">
      <div v-for="book of books" :key="book.id"
      class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <BookBox :book="book">
        </BookBox>
      </div>
    </div>
  </div>
</template>

<script>
import BookBox from '../../components/Books/BookBox';
export default {
  data() {
      return {
          books:null,
          token:null
      }
  },
  name: 'Book',
  components : {BookBox},
  props : [ "baseURL"],
  methods : {
    fetchWishlist() {

      // fetch books
      axios.get(`${this.baseURL}wishlist/${this.token}`)
        .then(data => this.books = data.data)
        .catch(err => console.log(err));
    }
  },
  mounted() {
        this.token = localStorage.getItem('token');
        this.fetchWishlist();
    }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>
