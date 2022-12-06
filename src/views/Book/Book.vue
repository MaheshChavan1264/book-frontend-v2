<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Our Books</h4>
        <router-link id="add-book" :to="{name : 'AddBook'}" v-show="$route.name==='AdminBook'">
          <button class="btn">Add a new Book</button>
        </router-link>
      </div>
    </div>
    <div class="row">
        <div v-for="book of books" :key="book.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <BookBox :book="book">
          </BookBox>
        </div>
    </div>
  </div>
</template>

<script>
import BookBox from '../../components/Books/BookBox';
export default {
  name: 'Book',
  components : {BookBox},
  props : [ "baseURL" , "books" ],
  mounted(){
    if (this.$route.name==='AdminBook' && !localStorage.getItem('token')) {
      this.$router.push({name : 'Signin'});
    }
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-product {
  float: right;
  font-weight: 500;
}
</style>
