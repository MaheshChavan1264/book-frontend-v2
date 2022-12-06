<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add new Book</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Author</label>
            <select class="form-control" v-model="authorId" required>
              <option v-for="author of authors" :key="author.id" :value="author.id">{{author.name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="title" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageURL" required>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="price" required>
          </div>
          <button type="button" class="btn btn-primary" @click="addBook">Submit</button>
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
      authorId : null,
      title : null,
      description : null,
      imageURL : "../../assets/java.png",
      price : null
    }
  },
  props : ["baseURL", "books", "authors"],
  methods : {
    async addBook() {
      const newBook = {
        id : this.id,
        authorId : this.authorId,
        title : this.title,
        description : this.description,
        imageURL : this.imageURL,
        price : this.price
      }

      await axios({
        method: 'post',
        url: this.baseURL+"book/add",
        data : JSON.stringify(newBook),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        //sending the event to parent to handle
        this.$emit("fetchData");
        this.$router.push({name : 'AdminBook'});
        swal({
          text: "Book Added Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
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

</style>
