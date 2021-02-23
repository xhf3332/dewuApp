<template>
  <div class="calendar">
    <div class="top">
      <router-link tag="div" to="/fuwu">
        <span class="iconfont" style="font-size:20px;font-weight:600;"
          >&#xe622;</span
        >
      </router-link>
      <el-row class="block-col-2">
        <el-dropdown>
          <el-col :span="12">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link top-center">
                2021年<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>2018年</el-dropdown-item>
                <el-dropdown-item>2019年</el-dropdown-item>
                <el-dropdown-item>2020年</el-dropdown-item>
                <el-dropdown-item>2021年</el-dropdown-item>
                <el-dropdown-item>2022年</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-dropdown>
      </el-row>
      <div class="top-right">
        <span>筛选</span>
        <span class="iconfont">&#xe650;</span>
      </div>
    </div>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab
        v-for="(items, index) in 12"
        :title="index + 1 + '月'"
        :key="index"
        line-width="0"
      >
      </van-tab>
      <p>{{ yr }}</p>
      <div class="contents">
        <img src="" alt="" />
        <div>
          <p></p>
          <div>
            <p><span>发货价￥</span><span></span></p>
            <span class="iconfont">&#xe621;</span>
          </div>
        </div>
      </div>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {}, //import引入的组件需要注入到对象中才能使用
  data() {
    return {
      active: 1,
      yr: "",
    };
  }, //这里存放数据
  computed: {}, //监听属性 类似于data概念
  watch: {}, //监控data中的数据变化
  methods: {
    gettimes() {
      var time = new Date();
      var months = time.getMonth() + 1;
      var dates = time.getDate();
      var times = dates + "/" + months;
      return times;
    },
  }, //方法集合
  created() {}, //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {
    this.yr = this.gettimes();
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
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.calendar {
  margin: 0 0.5rem;
  height: auto;
}
.top {
  width: 100%;
  height: 3rem;
  border: 1px solid #f00;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-center {
  display: block;
  width: 3.8rem;
  height: 3rem;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: #000;
  margin-top: 0.3rem;
}
.top-right {
  & > span {
    font-size: 12px;
    color: #666666;
  }
}
.contents {
  height: 5rem;
  width: 100%;
  border: 1px solid #f00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    display: block;
    width: 6rem;
    height: 4rem;
  }
  & > div {
    height: 4rem;
    width: calc(100% - 7rem);
    // border: 1px solid #f00;
    & > p {
      height: 2rem;
      width: 100%;
      border: 1px solid #ff0;
    }
    & > div {
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // border: 1px solid #ff0;
      margin-top: 0.8rem;
      & > p {
        height: 1rem;
        border: 1px solid #00f;
        & > span {
          float: left;
          height: 1rem;
          font-size: 12px;
          line-height: 1rem;
        }
        & > span:nth-child(1) {
          display: inline-block;
          width: 6rem;
          height: 1rem;
          border: 1px solid #00f;
        }
        & > span:nth-child(2) {
          display: inline-block;
          width: 4rem;
          height: 1rem;
          border: 1px solid #00f;
        }
      }
    }
  }
}
</style>
