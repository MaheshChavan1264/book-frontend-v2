 <template>
   <div class="container">
     <div class="row">
       <div class="col-12 text-center">
         <h4 class="pt-3">Add new Author</h4>
       </div>
     </div>

     <div class="row">
       <div class="col-3"></div>
       <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Author Name</label>
            <input type="text" class="form-control" v-model="name" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="imageURL" required>
          </div>
          <button type="button" class="btn btn-primary" @click="addAuthor">Submit</button>
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
      name : null,
      email : null,
      imageURL : "src/assets/author.jpg",
    }
  },
  props : ["baseURL", "authors"],
  methods : {
    async addAuthor() {
      const newAuthor = {
        name : this.name,
        email : this.email,
        imageUrl : this.imageURL,
      }
      console.log(newAuthor)
      await axios({
        method: 'post',
        url: this.baseURL+"author/create",
        data : JSON.stringify(newAuthor),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        //sending the event to parent to handle
        this.$emit("fetchData");
        this.$router.push({name:'AdminAuthor'});
        swal({
          text: "Author Added Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted(){
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
