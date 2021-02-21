<template>
  <router-link to="/" tag="div" id="content">
    <div class="top">
      <p>焕然洗护<span>&nbsp;/ 专业清洗 潮人首选</span></p>
      <van-icon name="arrow" color="#cecece" style="margin-right:0.5rem;" />
    </div>
    <div class="foot">
      <div>
        <img src="" alt="" />
        <p>3213</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>3213</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>3213</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>3213</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  components: {}, //import引入的组件需要注入到对象中才能使用
  data() {
    return {};
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
#content {
  height: 7.5rem;
  margin: 0.5rem;
  background: #fff;
  border-radius: 0.1rem;

  // border: 1px solid #0ff;
}
.top {
  width: 100%;
  height: 2rem;
  // border: 1px solid #f00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    & > span {
      display: inline-block;
      font-weight: 300;
      font-size: 12px;
      margin-left: 0.5rem;
      line-height: 12px;
    }
  }
}
.foot {
  width: 100%;
  height: 5rem;
  // border: 1px solid #f00;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div {
    width: 4rem;
    height: 4rem;
    // border: 1px solid #f00;
    & > img {
      display: block;
      width: 4rem;
      height: 3rem;
    }
    & > p {
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      // border: 1px solid #f00;
    }
  }
}
</style>
