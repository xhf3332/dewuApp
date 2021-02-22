<template>
  <div class="top">
    <router-link tag="div" to="/calendar">
      <span
        class="iconfont rili"
        v-html="fonts"
        style="font-size:20px;font-weight:600;"
        >{{ fonts }}</span
      >

      <span> 发 售 日 历</span>
    </router-link>
    <div class="top-right">
      <router-link tag="div" to="/information">
        <svg class="icon" aria-hidden="true" style="font-size:20px;">
          <use xlink:href="#icon-jiluwenben"></use>
        </svg>
        <span> 资 讯</span>
      </router-link>
      <router-link tag="div" to="/answer">
        <svg class="icon" aria-hidden="true" style="font-size:20px;">
          <use xlink:href="#icon-xiaoxitongzhi"></use>
        </svg>
        <span> 问 答</span>
      </router-link>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  components: {}, //import引入的组件需要注入到对象中才能使用
  data() {
    return {
      fonts: "",
      list: [
        "&#xe600;",
        "&#xe602;",
        "&#xe604;",
        "&#xe603;",
        "&#xe605;",
        "&#xe60f;",
        "&#xe606;",
        "&#xe607;",
        "&#xe60a;",
        "&#xe60c;",
        "&#xe608;",
        "&#xe60b;",
        "&#xe60d;",
        "&#xe60e;",
        "&#xe610;",
        "&#xe612;",
        "&#xe611;",
        "&#xe613;",
        "&#xe614;",
        "&#xe616;",
        "&#xe615;",
        "&#xe618;",
        "&#xe61a;",
        "&#xe617;",
        "&#xe619;",
        "&#xe61c;",
        "&#xe61b;",
        "&#xe61e;",
        "&#xe61d;",
        "&#xe61f;",
        "&#xe601;",
      ],
    };
  }, //这里存放数据
  computed: {}, //监听属性 类似于data概念
  watch: {}, //监控data中的数据变化
  methods: {
    times() {
      var time1 = new Date();
      var time2 = time1.getDate();
      return time2;
    },
  }, //方法集合
  created() {}, //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {
    var rili = this.times();
    rili = this.list[rili - 1];
    console.log(rili);
    this.fonts = rili;
  }, //生命周期 - 挂载完成（可以访问DOM元素）
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
span {
  font-size: 13px;
}
.top {
  height: 40px;
  // border: 1px solid #f00;
  background: #fff;
  display: flex;
  justify-content: space-between;
  & > div:nth-last-child(2) {
    width: 6rem;
    line-height: 40px;
    // border: 1px solid #f00;
    margin-left: 0.5rem;
    // padding-left: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & > div:nth-last-child(1) {
    width: 10rem;
    line-height: 40px;
    // border: 1px solid #f00;
    margin-right: 0.5rem;
    display: flex;
    justify-content: space-around;
    & > div {
      width: 4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // border: 1px solid #f00;
    }
  }
}

* {
  margin: 0;
  padding: 0;
}
.v-enter,
.v-leave-to {
  transform: translateX(100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
