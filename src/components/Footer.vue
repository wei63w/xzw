<template>
    <div class="container-fluid" style="padding: 0;background-color: rgb(247, 247, 247);">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 126" style="enable-background:new 0 0 1440 126;" xml:space="preserve">
        <path fill="#9e1f21" class="bg-red" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"></path>
      </svg>
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5  mfooter">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
          </a>
          <p class="text-muted">版权所有 &copy; 河南省第101建设集团有限公司</p>
        </div>

        <div class="col mb-3">

        </div>

        <div class="col mb-3">
          <h5>友情链接</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="http://www.mohurd.gov.cn/" class="nav-link p-0 text-muted">住房和城乡建设部</a></li>
            <li class="nav-item mb-2"><a href="http://www.hnjs.gov.cn/" class="nav-link p-0 text-muted">河南省住房和城乡建设厅</a></li>
            <li class="nav-item mb-2"><a href="http://zzjsj.zhengzhou.gov.cn/" class="nav-link p-0 text-muted">郑州市城乡建设局</a></li>
            <li class="nav-item mb-2"><a href="http://www.hngcjs.cn/" class="nav-link p-0 text-muted">河南省工程建设信息网</a></li>
            <li class="nav-item mb-2"><a href="http://www.zzsjzyxh.com/" class="nav-link p-0 text-muted">郑州市建筑业协会</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>走进101</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">集团简介</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">资质荣誉</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">企业风采</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">组织架构</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">经营网络</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>联系我们</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">联系我们</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">人才招聘</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">在线留言</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </template>

  <script>
  export default {
    name: 'Footer',
    props: {
      msg: String
    }
  }
  </script>

  <style scoped>
    .mfooter{
      background-color: #9e1f21;
      color: #fff;
      margin: 0;
    }
    .text-muted{
      color: #e1c4c4 !important
    }
  </style>