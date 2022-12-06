<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Book</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form v-if="book">
          <div class="form-group">
            <label>Author</label>
            <select class="form-control" v-model="book.authorId" required>
              <option v-for="author of authors" :key="author.id" :value="author.id">{{author.name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="book.title" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="book.description" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="book.imageURL" required>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="book.price" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editBook">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      book: null
    }
  },
  props : ["baseURL", "books", "authors"],
  methods : {
    async editBook() {
      axios.post(this.baseURL+"book/update/"+this.id, this.book)
      .then(res => {
        //sending the event to parent to handle
        this.$emit("fetchData");
        this.$router.push({name : 'AdminBook'});
        swal({
          text: "Book Updated Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log("err", err));
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push({name : 'Signin'});
      return;
    }
    this.id = this.$route.params.id;
    this.book = this.books.find(book => book.id == this.id);
    console.log(this.authors)
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
