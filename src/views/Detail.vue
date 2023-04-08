
<template>
    <div  class="main pagebox">
      <Header></Header>
      <div class="container">

        <div class="row" style="padding: 45px 0;">

          <div class="content_left col-3 d-none d-md-block">
              <div class="tabBoxParent">
                <div class="tab_title">
                  {{currentData.showTitle}}
                </div>
                <div class="tab_content">
                  <div class="item" v-for="(item,index) in currentData.secondTitle">
                    <a :href="`/module/${currentData.module}/id/${index}`" v-bind:class="{on:currentID == index ? true : false}">{{item.showTitle}} <i  class="iconfont"  >&#xe633;</i></a>
                  </div>
                </div>
              </div>
          </div>
          <div class="content_right col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <div class="container">
                <nav aria-label="breadcrumb" style="padding: 20px 10px 0 0;">
                  <ol class="breadcrumb" >
                    <li class="breadcrumb-item" v-for="(item,index) in mbx"  v-bind:class="{active:item.curr ? true : false}" v-bind:aria-current="{page:item.curr?true:false}">
                       
                       <a v-if="!item.curr" :href="item.url">{{item.name}} </a>
                       <template v-else>
                          {{ item.name }}
                       </template>
                      </li>
                  </ol>
                </nav>
              </div>  


            right


          </div>

        </div>
       
      </div>
      <Footer></Footer>
    </div>
  </template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Main from '@/views/Main.vue'
import Footer from '@/components/Footer.vue'
import sourceData from "@/assets/data/source.json";

export default {
  name: 'Home',
  components: {
      Header,
      Main,
      Footer
  },
  data(){
    return{
      currentData:{},
      currentID:0,
      mbx:[]
    };
  },
  mounted(){
    let moduleName = this.$route.params.moduleName;
    let id = this.$route.params.id;
    console.log(`moduleName:${moduleName},id:${id}`);
    this.currentID = id;

    sourceData.map((item)=>{
      if(item.module == moduleName){
        this.currentData = item;
      }
    })

    this.mbx = [
      {name:'首页',url:'/'},
      {name:this.currentData.showTitle,url:`/module/${moduleName}/id/0`},
      {name:this.currentData.secondTitle[this.currentID].showTitle,url:`module/${moduleName}/id/${this.currentID}`,curr:true}
    ]
  },
  methods: {
    
  }

}
</script>


<style scoped lang="scss">

.content_left{
  .tabBoxParent{
    .tab_title{
      background-color: #9e1f21;
      color: white;
      font-size: 30px;
      height: 80px;
      line-height: 80px;
    }
    .tab_content{
      .item{
        
        display: flex;
        flex-direction: column;
        a{
          height: 50px;
          line-height: 50px;
          width: auto;
          text-decoration: none;
          background-color: transparent;
          font-family: "Microsoft YaHei";
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          font-size: 14px;
          text-align: left;
          text-indent: 20px;
          i{
            float: right;
            padding-right: 20px;
          }
          &.on{
            background-color: #d9d9d9;
          }
          &:hover{
            background-color: #d9d9d9;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.content_right{
  // border:1px solid green;
}

.breadcrumb{
  a{
    text-decoration: none;
  }
}

</style>
