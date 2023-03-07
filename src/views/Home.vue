<template>
    <div  class="main pagebox">
      <Header></Header>
      <Main></Main>
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
    }
  }
  </script>
  
<style>

html,body {
    margin: 0;
    padding: 0;
}

.pagebox {
    position: relative;
}

* {
    font-family: "Microsoft YaHei";
}

#w_grid-1561339044537 .p_gridbox {
    overflow: visible;
}

a:hover, a:active, a:focus {
    text-decoration: none;
}
</style>