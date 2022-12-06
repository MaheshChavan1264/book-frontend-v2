<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">{{author.name}}</h4>
        <h5>{{msg}}</h5>
      </div>
    </div>

    <div class="row">
      <img v-show="len == 0" class="book-fluid" src="../../assets/sorry.jpg" alt="Sorry">
      <div v-for="book of author.books" :key="book.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <BookBox :book="book">
        </BookBox>
      </div>
    </div>
  </div>
</template>

<script>
import BookBox from '../../components/Books/BookBox'
export default {
  name: 'ListBooks',
  data(){
    return {
      id : null,
      authorIndex : null,
      author : {},
      len : 0,
      msg : null
    }
  },
  components : {BookBox},
  props : [ "baseURL" , "authors" ],
  mounted() {
    this.id = this.$route.params.id;
    this.authorIndex = this.authors.findIndex(author => author.id == this.id);
    this.author = this.authors[this.authorIndex];
    this.len = this.author.books.length;
    if(this.len === 0) {
      this.msg = "Sorry, no books found";
    } else if(this.len === 1) {
      this.msg = "Only 1 book found";
    } else {
      this.msg = this.len + " books found";
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

h5 {
  font-family: 'Roboto', sans-serif;
  color: #686868;
  font-weight: 300;
}
</style>
