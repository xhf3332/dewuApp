<template>
  <div class="fuwu">
    <Ftops></Ftops>
    <Fcontent1></Fcontent1>
    <Fcontent2></Fcontent2>
    <Ffoot></Ffoot>
    <Footer></Footer>
  </div>
</template>

<script>
import Ftops from "../../components/fuwu/ftop/index";
import Footer from "../../components/footer/index";
import Fcontent1 from "../../components/fuwu/fcontent1/index";
import Fcontent2 from "../../components/fuwu/fcontent2/index";
import Ffoot from "../../components/fuwu/ffoot/index";
export default {
  components: { Footer, Ftops, Fcontent1, Fcontent2, Ffoot }, //import引入的组件需要注入到对象中才能使用
  data() {
    return {
      flag1: true,
    };
  }, //这里存放数据
  computed: {}, //监听属性 类似于data概念
  watch: {}, //监控data中的数据变化
  methods: {}, //方法集合
  created() {}, //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {}, //生命周期 - 挂载完成（可以访问DOM元素）
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
.fuwu {
  background: #f5f5f5;
}
</style>
