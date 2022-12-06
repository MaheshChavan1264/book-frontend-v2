<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Our Authors</h4>
        <router-link id="add-category" :to="{name : 'AddAuthor'}" v-show="$route.name==='AdminAuthor'">
          <button class="btn">Add a new Author</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="author of authors" :key="author.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <AuthorBox :author="author">
        </AuthorBox>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorBox from '../../components/Author/AuthorBox';
export default {
  name: 'Author',
  components : {AuthorBox},
  props : [ "baseURL" , "authors" ],
  mounted(){
    if (this.$route.name==='AdminAuthor' && !localStorage.getItem('token')) {
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

#add-category {
  float: right;
  font-weight: 500;
}
</style>
