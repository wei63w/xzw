<template>
    <nav class="navbar navbar-light bg-light fixed-top navbar-expand-lg" style="padding:0px;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="my-header-img-parent">
            <img class="my-header-img" src="@/assets/bj_logo.png" alt="">
          </div>  
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasLightNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLightNavbarLabel">河南八建集团</h5>
            <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <li v-for="(item,index) of navList" :key="index" class="nav-item">
                <a  v-bind:class="{active:currentSelect == index ? true : false}" class="nav-link" aria-current="page" href="#">{{item}}</a>
              </li>
              <li  class="nav-item">
                <div class="nav-link searchdiv" aria-current="page" href="#">
                  <div @click="toSearch();" class="search-parent">
                    <i class="bi bi-search" style="font-size: 1rem;"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <s3-layer v-model="visible" title="搜索" area="500px">
        <div  class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <i class="bi bi-search" style="font-size: 1rem;"></i>
          </span>
          <input type="text" class="form-control" placeholder="Please input search content" aria-label="" aria-describedby="addon-wrapping">
        </div>
      </s3-layer>

    </nav>
  </template>

  <script>
  
  import { ref } from "vue";
  import { layer } from "vue3-layer";

  // const visible1 = ref(false);

  export default {
    name: 'Header',
    props: {
      
    },
    data(){
      return {
        navList: Array,
        currentSelect:0,
        visible: ref(false)
      }
    },
    mounted(){
        this.navList = ['网站首页','走进八建','新闻动态','工程服务','企业文化','交流学习','联系我们'];
    },
    methods: {
      toSearch(){
        this.visible = true;
    },

  }



}
  </script>
  <style>
    .my-header-img-parent{
      /* padding: 10px 0; */
      height: inherit;
      overflow: hidden;
      font-size: 0;
    }
    .my-header-img{
      vertical-align: middle;
      border: 0;
    }
    .nav-item{
      min-height: 100px;
      align-items: center;
      justify-content: center;
      display: flex;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
    }
    .nav-item .active{
      /* background-color: red;
      color: white !important; */
    }
    .nav-item a:hover{
      background-color: red;
      color: white !important;
    }
    .nav-item a{
      height: 100%;
      display:block;
      text-decoration: none;
      line-height: 90px;
      color: black;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
    }
    .search-parent{
      height: 40px;
      width: 40px;
      border: 1px solid black;
      border-radius: 50%;
      line-height: 40px;
      text-align: center;
      font-size: 1rem;
      color: #999;
      cursor: pointer;
    }
    .searchdiv{
      display: flex;align-items: center;justify-content: center;

    }

  </style>