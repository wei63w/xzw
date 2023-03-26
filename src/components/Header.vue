<template>

    <div class="container-fluid" style="background-color: #9e1f21;">
      <div class="container-xl">
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
        
    </div>

    <!-- fixed-top  bg-light-->
    <nav  class="navbar  navbar-light navbar-expand-lg" v-bind:class="{'fixed-top':isNeedFixed}" style="padding:0px;background-color: #fff;">
      <div class="container-xl">
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
                <a  v-bind:class="{active:currentSelect == index ? true : false}" class="nav-link" aria-current="page" href="#">{{item.showTitle}}</a>
                <div  class="dropdown-menue">
                  <a v-for="(citem,cindex) of item.secondTitle" :key="cindex" :href="citem.url">{{citem.showTitle}}</a>
                </div>
              </li>
              <li  class="nav-search">
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

    <!-- <div class="container-fluid " :style="{'marginTop':isNeedFixed ? '110px' : '0px',color:true?'red':'blue',fontSize:true ? '10px' : '5px'}">
      <div class="row bannerParent">
        <img src="@/assets/banner.jpg" alt="">
      </div>
    </div> -->

    <div class="container-fluid" :style="{'marginTop':isNeedFixed ? '110px' : '0px',color:true?'red':'blue',fontSize:true ? '10px' : '5px'}">
      <div id="myCarousel" class="carousel slide"  data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/lba.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/lbb.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/lbc.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
     

  </template>

  <script>
  
  import * as bootstrap from 'bootstrap'

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
        // this.navList = ['网站首页','走进八建','新闻动态','工程服务','企业文化','交流学习','联系我们'];

        this.navList = [
          {showTitle:'网站首页',secondTitle:[]},
          {showTitle:'走进八建',secondTitle:[
            {showTitle:'集团简介',url:''},
            {showTitle:'资质荣誉',url:''},
            {showTitle:'企业风采',url:''},
            {showTitle:'组织架构',url:''},
            {showTitle:'经营网络',url:''}
          ]},
          {showTitle:'新闻动态',secondTitle:[
            {showTitle:'集团新闻',url:''},
            {showTitle:'公司动态',url:''},
            {showTitle:'行业动态',url:''},
            {showTitle:'视频中心',url:''},
            {showTitle:'转发文件',url:''}
          ]},
          {showTitle:'工程服务',secondTitle:[
            {showTitle:'工程案例',url:''},
            {showTitle:'标准化管理',url:''},
            {showTitle:'供应采购资源库',url:''},
            {showTitle:'劳务分包资源库',url:''},
            {showTitle:'办事指南',url:''},
            {showTitle:'下载中心',url:''}
          ]},
          {showTitle:'企业文化',secondTitle:[]},
          {showTitle:'交流学习',secondTitle:[
            {showTitle:'学习交流',url:''},
            {showTitle:'标准规范',url:''},
            {showTitle:'个人才艺',url:''}
          ]},
          {showTitle:'联系我们',secondTitle:[
            {showTitle:'联系我们',url:''},
            {showTitle:'人才招聘',url:''},
            {showTitle:'在线留言',url:''}
          ]}
        ];

        window.addEventListener('scroll', this.MylistenScroll);

        const myCarouselElement = document.querySelector('#myCarousel')
        const carousel = new bootstrap.Carousel(myCarouselElement, {
          interval: 2000,
          wrap: true,
          touch:true,

        });

    
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
  <style lang="scss" scoped>
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
    .nav-item .active{
      /* background-color: red;
      color: white !important; */
    }

    .nav-search{
      min-height: 100px;
      align-items: center;
      justify-content: center;
      display: flex;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
      position: relative;
      text-align: left;
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
      position: relative;
      text-align: left;
      .dropdown-menue{
        display: none;
        position: absolute;
        background-color: white;
        top: 106px;
        z-index: 9;
        left: 0;
        width: 150px;
        a{
          display: block;
          padding: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          color: black;
          &:hover{
            background-color: #999;
            color: black;
          }
        }
      }
      &:hover{
        .dropdown-menue{
          display: block;
        }
      }
      .nav-link{
        height: 100%;
        display:flex;
        text-decoration: none;
        line-height: 90px;
        color: black;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        &:hover{
          background-color: #9e1f21;
          color: white !important;
        }
      }
      
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
      padding: 0 20px;
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
      padding-left: 10px;
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