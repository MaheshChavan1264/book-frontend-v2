<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Author</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form v-if="author">
          <div class="form-group">
            <label>Author Name</label>
            <input type="text" class="form-control" v-model="author.name" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="author.email" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="author.imageUrl" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editAuthor">Submit</button>
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
      author: null
    }
  },
  props : ["baseURL", "authors"],
  methods : {
    async editAuthor() {
      delete this.author["books"]
      await axios.post(this.baseURL+"author/update/"+this.id, this.author)
      .then(res => {
          //sending the event to parent to handle
        this.$emit("fetchData");
        this.$router.push({name:'AdminAuthor'});
        swal({
          text: "Author Updated Successfully!",
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
      return;
    }
    this.id = this.$route.params.id;
    console.log(this.id)
    this.author = this.authors.find(author => author.id == this.id);
    console.log('author', this.author);
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
