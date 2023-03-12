<template>
  <div class="container-fluid" style="background-color: #f7f7f7;">


    <!-- 喜报 消息 -->
    <div class="container-xl  d-none d-md-block" style="height: 100px;">
      <div class="message-box">
          <div class="mbleft">
            <i class="bi bi-chat-left-dots"></i>
            <span style="padding-left: 10px;">
              重要通知
            </span>
          </div>
          <a class="mbright">
            <span>喜报！河南八建集团地基基础工程专业承包资质荣升一级</span>
            <span>2023-3-10</span>
          </a>
      </div>
    </div>

    <div class="container-xl" >


      <div class="row pic-row">
        <!-- 六宫格 -->
        <div class="col-lg-7 col-md-7 col-sm-12" style="margin-top:25px;">
          <div class="picpar row">
            <div class="picbox col-4">
              <img src="//img3.yun300.cn/img/tu1.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe91d;</i></div>
                  <div><span>集团简介</span></div>
              </div>
            </div>
            <div class="picbox col-4">
              <img src="//img3.yun300.cn/img/tu2.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe668;</i></div>
                  <div><span>荣誉资质</span></div>
              </div>
            </div>
            <div class="picbox col-4">
              <img src="//img3.yun300.cn/img/tu3.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe618;</i></div>
                  <div><span>企业风采</span></div>
              </div>
            </div>
            <div class="picbox col-4">
              <img src="//img3.yun300.cn/img/tu4.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe62e;</i></div>
                  <div><span>经营网络</span></div>
              </div>
            </div>
            <div class="picbox col-4">
              <img src="//img3.yun300.cn/img/tu5.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe62b;</i></div>
                  <div><span>加入我们</span></div>
              </div>
            </div>
            <div class="picbox col-4">
              <img src="//img3.yun300.cn/img/tu1.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe8d0;</i></div>
                  <div><span>办事指南</span></div>
              </div>
            </div>
          </div>

        </div>
        <!-- tab切换 -->
        <div class="col-lg-5 col-md-5 col-sm-12" style="margin-top:25px;">
          <div class="tab-par">

            <div class="tab nav nav-tabs"  id="myTab" role="tablist">
              <div class="item nav-item" @click="active = 1">
                <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                  <i class="iconfont">&#xe91d;</i>
                  公司动态
                </button>
              </div>
              <div class="item nav-item"  :class="{'ac':active == 2}" @click="active = 2">
                <button class="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                  <i class="iconfont">&#xe631;</i>
                  转发文件
                </button>
              </div>
              <div class="bg nav-item" :class="{'left1':active == 2}"></div>
            </div>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                
                <figure v-for="item of 3" class="text-end shadow-sm p-3  bg-body rounded mfigure">
                  <blockquote class="blockquote">
                    <p>喜报！河南101集团基础工程承包资质荣升一级</p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    <i class="bi bi-calendar2-day" style="color:#9e1f21;"></i> <cite title="Source Title">2023-03-12</cite>
                  </figcaption>
                </figure>

            


              </div>
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                profile content
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


    <div class="container-xl">
      <h1 v-for="item of 40">This is Main {{ item }}</h1>
      <span> main will over</span>
    </div>


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
        active:1,
      }
    },
    mounted(){
   
      
    },
    methods: {
 
    }
  }
  </script>
  <style scoped lang="scss">
  .message-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: #fff;
    height: 60px;
    margin: 50px 0 25px 0px;
  }
  .mbleft{
    background: #9e1f21;
    color: white;
    height: 100%;
    line-height: 30px;
    display: flex;
    width: 200px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    font-size: 20px;
  }
  .mbright{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .mbright:hover{
    color: #9e1f21;
  }
  .mbright span{
    height: 100%;
    line-height: 60px;
  }
  .pic-row{

  }
  .pic-row .col{
    padding: 0;
    margin: 0;
  }
  .picpar{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .picpar i{
    font-size: 30px;
    display: block;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out
  }
  .picbox{
    cursor: pointer;
    padding: 0;
    img{
      width: 100%;
      height: auto;
    }
  }
  .picbox:hover .pic-content-box{ 
    background-color: #9e1f21;
  }
  .picbox:hover .iconfont{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }


  .picpar .picbox{
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
  }
  .picpar a{
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
  }
  .pic-content-box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    transition: all 0.6s ease-in-out;
    -webkit-transition: all 0.6s ease-in-out;
    -moz-transition: all 0.6s ease-in-out;
    -o-transition: all 0.6s ease-in-out
  }

  #myTab{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .nav-item {
    min-height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: 0.5s;
    width: 100%;
  }
  .nav-item button{
    width: 100%;
  }



  // .nav-link + .active {
  //   color: #fff !important;
  // }


  .tab{
    width: 100;
    height: 80px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .item{
      text-align: center;
      width: 100%;
      height: 80px;
      line-height: 80px;
      border: 1px solid #9e1f21;
      position: relative;
      z-index: 2;
      .nav-link{
        background-color: transparent;
        height: 100%;
        padding: 0;
        border: 0;
        color: black;
        font-size: 18px;
        &.active{
          color: #fff;
        }
        i{
          font-size: 18px;
        }
      }
    }
    .ac{
      color: #fff;
    }
    .bg{
      position: absolute;
      left: 0;
      top: -0;
      z-index: 1;
      width: 50%;
      height: 80px;
      background: #9e1f21;
      transition: all .5s;
      -webkit-transition: all .5s;
      -moz-transition:  all .5s;
      -o-transition:  all .5s;
    }
    .left1{
      left: 50%;
    }
  }

  .mfigure{
    cursor: pointer;
    margin-top: 15px;
    &:hover{
      box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
      color: #9e1f21;
    }
  }

</style>