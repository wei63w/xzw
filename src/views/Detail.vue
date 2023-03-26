
<template>
    <div  class="main pagebox">
      <Header></Header>
      <div>
        this is detail
      </div>
      <Footer></Footer>
    </div>
  </template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Main from '@/views/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
      Header,
      Main,
      Footer
  },
  data(){
    return{

    };
  },
  mounted(){
    let moduleName = this.$route.params.moduleName;
    let id = this.$route.params.id;
    console.log(`moduleName:${moduleName},id:${id}`);
  },
  methods: {
    
  }

}
</script>


<style scoped lang="scss">




</style>
