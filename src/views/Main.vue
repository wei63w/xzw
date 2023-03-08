<template>
    <div class="about" style="">
      <h1 v-for="item of 40">This is Main {{ item }}</h1>
    </div>
  </template>

  <script>
  export default {
    name: 'Main',
    props: {
      msg: String
    },
    data(){
      return {
        dataArr:Array,
      }
    },
    mounted(){
      
    },
    methods: {

    }
  }
  </script>