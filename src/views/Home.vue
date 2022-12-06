<template>
  <div id="home">
    <!-- Page Wrapper -->
    <div id="start-shopping" class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3">Top Authors</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.author_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <AuthorBox :author="authors[index - 1]"> </AuthorBox>
        </div>
      </div>
    </div>

    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3">Top Books</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.book_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <BookBox :book="books[index - 1]"> </BookBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookBox from "@/components/Books/BookBox";
import AuthorBox from "@/components/Author/AuthorBox";

export default {
  name: "Home",
  components: { BookBox, AuthorBox },
  props: ["baseURL", "books", "authors"],
  data() {
    return {
      author_size: 0,
      book_size: 0,
    };
  },
  mounted() {
    this.author_size = this.authors.length;
    this.author_size = Math.min(6, this.author_size);
    this.book_size = this.books.length;
    this.book_size = Math.min(8, this.book_size);
  },
};
</script>

<style>
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url(../assets/home.png);
}

#heading {
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: "Josefin Sans", sans-serif;
}

#content {
  opacity: 0.8;
}

h2 {
  font-family: "Josefin Sans", sans-serif;
}
</style>
