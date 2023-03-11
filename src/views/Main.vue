<template>
  <div class="container-fluid" style="background-color: #f7f7f7;">


    <!-- 喜报 消息 -->
    <div class="container-xl  d-none d-md-block" style="height: 130px;">
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

    <div class="container-xl">


      <div class="row pic-row">
        <div class="col-7">
          <div class="picpar">
            <div class="picbox">
              <img src="//img3.yun300.cn/img/tu1.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe668;</i></div>
                  <div><span>集团简介</span></div>
              </div>
            </div>
            <div class="picbox">
              <img src="//img3.yun300.cn/img/tu2.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe62b;</i></div>
                  <div><span>荣誉资质</span></div>
              </div>
            </div>
            <div class="picbox">
              <img src="//img3.yun300.cn/img/tu3.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe62e;</i></div>
                  <div><span>企业风采</span></div>
              </div>
            </div>
            <div class="picbox">
              <img src="//img3.yun300.cn/img/tu4.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe8d0;</i></div>
                  <div><span>经营网络</span></div>
              </div>
            </div>
            <div class="picbox">
              <img src="//img3.yun300.cn/img/tu5.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe618;</i></div>
                  <div><span>加入我们</span></div>
              </div>
            </div>
            <div class="picbox">
              <img src="//img3.yun300.cn/img/tu1.jpg?tenantId=208177&viewType=1&k=1638863359000" class="" alt="...">
              <div class="pic-content-box">
                  <div><i class="iconfont">&#xe91d;</i></div>
                  <div><span>办事指南</span></div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-5">
          <div class="tab-par">
            <ul class="nav nav-tabs" id="myTab">
              <li class="active"><a href="#home">首页</a></li>
              <li><a href="#profile">介绍</a></li>
              <li><a href="#messages">消息</a></li>
              <li><a href="#settings">设置</a></li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active" id="home">.首页内容..</div>
              <div class="tab-pane" id="profile">介绍内容...</div>
              <div class="tab-pane" id="messages">.消息内容..</div>
              <div class="tab-pane" id="settings">.设置内容..</div>
            </div>
          </div>
        </div>
      </div>


    </div>


    <div class="container-xl">
      <h1 v-for="item of 40">This is Main {{ item }}</h1>
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
      }
    },
    mounted(){

      $(function () {
        $('#myTab a:last').tab('show');
      });

      $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      }); 


    },
    methods: {

    }
  }
  </script>
  <style>
  .message-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: #fff;
    height: 60px;
    margin: 50px 0px;
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
</style>