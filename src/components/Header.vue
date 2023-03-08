<template>

    <div class="container-fluid">
        <div class="topdiv">
          <div class="tdleft">
            <span style="font-size: 14px;">传承工匠精神   筑造一流企业</span>
          </div>
          <div class="tdright d-none d-md-flex">
            <div class="tpbox">
              <i class="bi bi-wechat"></i>
              <a class="icparent" style="" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
                官方微信
                <div class="icbox">
                  <div class="secondbox">
                    <img src="@/assets/wx.jpg" height="90" width="90" alt="">
                  </div>
                </div>
              </a>
            </div>
           

            <div class="tpbox">
              <i class="bi bi-sina-weibo"></i>
              <a class="icparent" style="" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
                官方微博
                <div class="icbox">
                  <div class="secondbox">
                    <img src="@/assets/wx.jpg" height="90" width="90" alt="">
                  </div>
                </div>
              </a>
            </div>
            <div class="tpbox">
              <i class="bi bi-person-workspace"></i>
              <a class="icparent" target="_blank" href="https://cloud.hecom.cn/login">OA办公</a>
            </div>
            <div class="tpbox">
              <i class="bi bi-arrow-down-circle"></i>
              <a class="icparent">下载中心</a>
            </div>
          </div>
        </div>
    </div>

    <!-- fixed-top -->
    <nav  class="navbar navbar-light bg-light  navbar-expand-lg" v-bind:class="{'fixed-top':isNeedFixed}" style="padding:0px;">
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

    <div class="container-fluid " :style="{'marginTop':isNeedFixed ? '110px' : '0px',color:true?'red':'blue',fontSize:true ? '10px' : '5px'}">
      <div class="row bannerParent">
        <img src="@/assets/banner.jpg" alt="">
      </div>
      
    </div>

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
        visible: ref(false),
        isNeedFixed:false,
        distanceTop:0,
      }
    },
    mounted(){
        this.navList = ['网站首页','走进八建','新闻动态','工程服务','企业文化','交流学习','联系我们'];
        window.addEventListener('scroll', this.MylistenScroll);
    },
    methods: {
      MylistenScroll(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 45){
          this.isNeedFixed = true;
          this.distanceTop = 0;
        }else{
          this.isNeedFixed = false;
          this.distanceTop = 110;
        }
      },
      toSearch(){
        this.visible = true;
      },
      addActive(e){
        e.currentTarget.classList = 'icparent active';
      },
      removeActive(e){
        e.currentTarget.classList = 'icparent';
      }

   }



}
  </script>
  <style>
  .container-fluid{
    padding: 0px !important;
  }
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
    .bannerParent{
      height: 100%;
      width: 100%;
      /* margin: 110px 0 0 0 !important; */
    }
    .bannerParent img{
      vertical-align: middle;
      border: 0;
      padding: 0 !important;
    }

    .topdiv{
      background-color: #9e1f21;
      color: #ffe2e2;
      height: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
    }
    .tdright{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .tpbox{
      padding: 0 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    .icparent{
      color: #ffe2e2;
      font-size: 14px;
      font-family: "微软雅黑";
      position: relative;text-decoration: none;
      padding-left: 5px;
    }
    .icparent:hover{
      color: #ffe2e2;
    }
    .icbox{
      display:none;
      position: absolute;
      width: 113px;
      height: 119px;
      left: -35px;
      top: 20px;
      z-index: 999;
      background: url(../assets/down_img6.png) no-repeat;
    }
    .secondbox{
      float: left;
      width: 90px;
      height: 90px;
      margin: 15px 12px;
    }
    .icparent,.active > .icbox{
      display: block !important;
    }
    .icparent > .icbox{
      display: none;
    }

  </style>