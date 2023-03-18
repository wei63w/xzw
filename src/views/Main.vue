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
                
                <figure v-for="item of 4" class="text-end shadow-sm p-3  bg-body rounded mfigure">
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

      
      <div class="row card-parent">
        <div class='col-md-4 col-sm-12 card-item'>
          <div class='post-module'>
            <div class='thumbnail'>
              <img src='@/assets/demo.jpg'>
            </div>
            <div class='post-content'>
              <div class='category'>企业精神</div>
              <h1 class='title'>专注品质 敢为人先</h1>
              <h2 class='sub_title'>使命感 文化共识 团队合作 客户至上 </h2>
              <p class='description'>
                企业精神重视团队合作和协作精神，为企业员工提供了一个共同的工作环境和文化氛围.
                强调客户至上和服务优先，强调企业文化的共识和传承，为企业员工提供了一个共同的价值观念和行为准则.
                为企业员工提供了一个共同的服务理念和行为准则.
                鼓励员工勇于创新和突破，为企业带来新的机遇和挑战.
              </p>
            </div>
          </div>
        </div>
		  <div class='col-md-4 col-sm-12 card-item'>
          <div class='post-module'>
            <div class='thumbnail'>
              <img src='@/assets/demo.jpg'>
            </div>
            <div class='post-content'>
              <div class='category'>企业格言</div>
              <h1 class='title'>质量立业，诚信铸就未来</h1>
              <h2 class='sub_title'>专业创造价值，服务创造未来 </h2>
              <p class='description'>
                注重质量和诚信，以人为本，追求卓越，严谨负责，精益求精等方面。
                同时，它们也突出了建筑公司应该注重服务和创新，以专业创造价值，引领未来。
              </p>
            </div>
          </div>
		  </div>
      <div class="col-md-4 col-sm-12 card-item">
          <div class='post-module'>
            <div class='thumbnail'>
              <img src='@/assets/demo.jpg'>
            </div>
            <div class='post-content'>
              <div class='category'>安全理念</div>
              <h1 class='title'>以人为本、预防为主；重视综合治理！</h1>
              <h2 class='sub_title'>安全管理，全员参与 安全到位 持续改进 共同承担 </h2>
              <p class='description'>
                把安全问题放在施工和工程管理的首要位置。
                突出全员参与和责任到人的重要性，强调公司的安全管理需要全员参与和共同承担责任。
                同时，还要强调应该持续改进安全管理，以创造美好未来。
              </p>
            </div>
          </div>
      </div>

      </div>
      
      
      
      
      
      <div class="row d-none d-md-bloc">
          <div id="certify ">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="@/assets/swiper/certify01.png" /><p>非常难得又值钱的认证证书</p></div>
                <div class="swiper-slide"><img src="@/assets/swiper/certify02.png" /><p>深圳市优秀互联网企业认定证书</p></div>
                <div class="swiper-slide"><img src="@/assets/swiper/certify03.png" /><p>质量管理体系认证荣誉证书</p></div>
                <div class="swiper-slide"><img src="@/assets/swiper/certify04.png" /><p>计算机软件著作权登记证书</p></div>
                <div class="swiper-slide"><img src="@/assets/swiper/certify05.png" /><p>增值电信业务经营许可证</p></div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
      </div>

      <!-- <h1 v-for="item of 40">This is Main {{ item }}</h1> -->
      <!-- <span> main will over</span> -->
    </div>


  </div>
   
  </template>

  <script>

  import Swiper from 'swiper' //  ES6 导入swiper js文件
  import 'swiper/dist/css/swiper.min.css' // ES6 导入swiper css文件
  import '../sass/card.scss';

  export default {
    components: {

    },
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
      var modify = 0;
      var scale = 0;
      var translate = '';
      var zIndex = 0;

      $(function() {
        $('.post-module').hover(function () {
        $(this).find('.description').stop().animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 300);
        });
      });

     var certifySwiper = new Swiper('#certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        //clickable :true,
      },
      on: {
        progress: function(progress) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            translate = slideProgress * modify * 260 + 'px';
            scale = 1 - Math.abs(slideProgress) / 5;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: function(transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
          }

        }
      }

     });
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
      // background-color: #c9c1c1 !important;
    }
  }
  


// swiper

/* CSS Document */
body{
	margin:0;}
#certify {
	position: relative;
	width: 1200px;
	margin: 0 auto
}

#certify .swiper-container {
	padding-bottom: 60px;
}

#certify  .swiper-slide {
	width: 520px;
	height: 408px;
	background: #fff;
	box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
	display:block;
}
#certify  .swiper-slide p {
	line-height: 98px;
	padding-top: 0;
	text-align: center;
	color: #636363;
	font-size: 1.1em;
	margin: 0;
}

#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}

#certify .swiper-button-prev {
	left: -30px;
	width: 45px;
	height: 45px;
	background: url(@/assets/swiper/wm_button_icon.png) no-repeat;
	background-position: 0 0;
	background-size: 100%;
}

#certify .swiper-button-prev:hover {
	background-position: 0 -46px;
	background-size: 100%
}

#certify .swiper-button-next {
	right: -30px;
	width: 45px;
	height: 45px;
	background: url(@/assets/swiper/wm_button_icon.png) no-repeat;
	background-position: 0 -93px;
	background-size: 100%;
}

#certify .swiper-button-next:hover {
	background-position: 0 -139px;
	background-size: 100%
}
</style>