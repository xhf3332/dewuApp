<template>
  <div class="dewu">
    <div class="tou">
      <router-link class="tou-l" tag="div" to="/dewu/sousuo"
        >souzuo</router-link
      >
      <div class="tou-z">
        <ul>
          <router-link tag="li" to="/dewu/guanzhu">关注</router-link>
          <router-link tag="li" to="/dewu/tuijian">推荐</router-link>
          <router-link tag="li" to="/dewu/live">LIVE</router-link>
        </ul>
      </div>
      <router-link class="tou-r" tag="div" to="/dewu/xiang"></router-link>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/footer/index.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.tou {
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  background: blue;
}
.tou-l {
  width: 10%;
  height: 30px;
  background: chartreuse;
}
.tou-z {
  width: 40%;
  height: 30px;
}
.tou-z ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tou-z ul li {
  /* float: left; */
  font-size: 18px;
  /* line-height: 30px; */
}
.tou-r {
  width: 10%;
  height: 30px;
  background: crimson;
}
</style>
