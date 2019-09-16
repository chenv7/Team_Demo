<template>
  <div>
<<<<<<< HEAD
=======
    <!-- 头部组件 -->
    <Header />
>>>>>>> d3ef2bab8b15a7af18a5ea0344298c6dd90c7f35
    <!-- 内容占位组件 -->
    <Header/>
    <nuxt />
<<<<<<< HEAD
    <Footer/>
=======
    <!-- 页脚组件 -->
    <Footer />
>>>>>>> d3ef2bab8b15a7af18a5ea0344298c6dd90c7f35
  </div>
</template>

<script>
import Header from "@/components/header"
import Footer from "@/components/footer"
export default {
  components: {
    Header,
    Footer
  }
};
</script> 
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
<<<<<<< HEAD
</script>

<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*{
  margin:0; 
  padding:0;
}
ul, li, ol{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
a:hover{

}
em,i{
  font-style: normal;
=======

* {
  margin: 0;
  padding: 0;
}

ul,
li,
ol {
  list-style: none;
}

i,
em {
  font-style: normal;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
>>>>>>> d3ef2bab8b15a7af18a5ea0344298c6dd90c7f35
}
</style>