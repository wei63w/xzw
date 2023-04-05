<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">

// @import "./sass/custom.scss";
// @import "~bootstrap/scss/bootstrap";

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 3946563 */
  src: url('//at.alicdn.com/t/c/font_3946563_9gblah9quud.woff2?t=1680701005193') format('woff2'),
       url('//at.alicdn.com/t/c/font_3946563_9gblah9quud.woff?t=1680701005193') format('woff'),
       url('//at.alicdn.com/t/c/font_3946563_9gblah9quud.ttf?t=1680701005193') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}    

*{
  font-family: "Microsoft YaHei";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
