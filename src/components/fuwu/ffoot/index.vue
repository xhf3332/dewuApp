<template>
  <div class="ffoot">
    <div id="top">
      <div class="top">
        <p>鉴别服务开创者<span>/ 七大品牌 专业鉴别 快速精准</span></p>
        <van-icon name="arrow" color="#cecece" style="margin-right:0.5rem;" />
      </div>
      <div class="header">
        <div>
          <img src="../../../../public/img/jj.png" alt="" />
          <div>
            <p>103,565,704</p>
            <p>累计鉴别超过</p>
          </div>
        </div>
        <router-link tag="button" to="/ldentify">免费鉴别</router-link>
      </div>
    </div>
    <router-link to="/discuss" tag="div" id="content">
      <div class="discuss">
        <p>讨论区<span>/ 数千位资深鉴别大神在这里交流分享</span></p>
        <van-icon name="arrow" color="#cecece" />
      </div>
    </router-link>
    <div id="foot">
      <router-link tag="div" to="/hot1" class="hot1">
        <span>热门</span>
        <div>
          <p>闲鱼收的，无盒ub4.0,大神们能帮看下嘛</p>
          <p><span>85条回复</span><span>13条鉴别师回复</span></p>
        </div>
      </router-link>
      <router-link tag="div" to="/hot2" class="hot2">
        <span>热门</span>
        <div>
          <p class="article">
            刚从闲鱼上收的说是保正，想问问大家是真是假，假的话想知道
          </p>
          <p>哪些地方与正平的区别</p>
          <p><span>63条回复</span><span>3条鉴别师回复</span></p>
        </div>
      </router-link>
      <router-link tag="div" to="/hot3" class="hot3">
        <span>热门</span>
        <div>
          <p>
            【第一套女式西装是香奈儿设计的?】女性穿西
          </p>
          <p>
            装，仅有一百多年的历史。在二十世纪初女性都还忍受着束身衣的束缚。而在上世纪20年代香奈儿创始人Coco
            Chanel女士，首先将男性西装元素融入女性套装的设计中，女性专属的西装外套的雏形由此诞生。
          </p>
          <p><span>50条回复</span><span>8条鉴别师回复</span></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {}, //import引入的组件需要注入到对象中才能使用
  data() {
    return {};
  }, //这里存放数据
  computed: {}, //监听属性 类似于data概念
  watch: {}, //监控data中的数据变化
  methods: {
    getSubStr(str) {
      var subStr1 = str.substr(0, 10);
      var subStr2 = str.substr(str.length - 11, 11);
      var subStr = subStr1 + "······" + subStr2;
      //   console.log(subStr);
      return subStr;
    },
  }, //方法集合
  created() {}, //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {
    var str = document.querySelector(".article");
    // console.log(str);
    str = String(str.innerHTML);
    str = this.getSubStr(str);
    // console.log(str);
    document.querySelector(".article").innerHTML = str;
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
.ffoot {
  height: auto;
  margin: 0.5rem;
  background: #fff;
  border-radius: 0.1rem;

  //   border: 1px solid #f00;
}
#top,
#content,
#foot {
  height: auto;
  background: #fff;
  //   border: 1px solid #0ff;
}
#content {
  margin-top: 0.5rem;
}
.top {
  width: 100%;
  height: 2rem;
  // border: 1px solid #f00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  & > p {
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    // border: 1px solid #f00;
    & > span {
      display: inline-block;
      font-weight: 300;
      font-size: 12px;
      margin-left: 0.5rem;
      line-height: 12px;
      //   border: 1px solid #f00;
    }
  }
}
.header {
  height: 4rem;
  //   border: 1px solid #f00;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    height: 100%;
    width: 12rem;
    // border: 1px solid #f00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > img {
      display: inline-block;
      width: 4rem;
      height: 3rem;
      //   border: 1px solid #f00;
    }
    & > div {
      width: 7rem;
      height: 3rem;
      //   border: 1px solid #f00;
      & > p {
        height: 1.5rem;
        width: 100%;
        line-height: 1.5rem;
        text-align: left;
      }
      & > p:nth-child(1) {
        font-weight: 600;
        font-size: 20px;
      }
      & > p:nth-child(2) {
        // font-weight: 600;
        font-size: 12px;
      }
    }
  }
  & > button {
    width: 8rem;
    height: 3rem;
    background: #0ff;
    border: none;
    border-radius: 0.1rem;
    color: #f5f5f5;
  }
}
.discuss {
  height: 2rem;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  margin: 0 0.5rem 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    & > span {
      display: inline-block;
      font-weight: 300;
      font-size: 12px;
      margin-left: 0.5rem;
      line-height: 12px;
      //   border: 1px solid #f00;
    }
  }
}
#foot {
  margin: 0 0.5rem;
  margin-bottom: 2.5rem;
  //   border: 1px solid #f00;
  .hot1 {
    height: 3rem;
    // border: 1px solid #ff0;
    display: flex;
    justify-content: start;
    margin-bottom: 0.5rem;
    & > span {
      height: 1rem;
      width: 4rem;
      //   border: 1px solid #00f;
      text-align: center;
      font-size: 12px;
      line-height: 1rem;
      background: #000;
      color: #f5f5f5;
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
    & > div {
      margin-top: 0.5rem;
      & > p {
        line-height: 1rem;
        font-size: 12px;

        & > span {
          margin-right: 1rem;
          color: #999999;
        }
      }
    }
  }
  .hot2 {
    display: flex;
    justify-content: start;
    margin-bottom: 0.5rem;
    height: 3.8rem;
    // border: 1px solid #ff0;
    & > span {
      height: 1rem;
      width: 4rem;
      //   border: 1px solid #00f;
      text-align: center;
      font-size: 12px;
      line-height: 1rem;
      background: #000;
      color: #f5f5f5;
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
    & > div {
      margin-top: 0.5rem;
      & > p {
        line-height: 1rem;
        font-size: 12px;
        width: 16rem;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // border: 1px solid #f00;
        & > span {
          margin-right: 1rem;
          color: #999999;
        }
      }
      & > p:nth-child(1) {
        line-height: 0.8rem;
      }
      & > p:nth-child(2) {
        line-height: 0.8rem;
      }
    }
  }
  .hot3 {
    display: flex;
    justify-content: start;
    height: 3.5rem;
    // border: 1px solid #ff0;
    & > span {
      height: 1rem;
      width: 4rem;
      //   border: 1px solid #00f;
      text-align: center;
      font-size: 12px;
      line-height: 1rem;
      background: #000;
      color: #f5f5f5;
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
    & > div {
      margin-top: 0.5rem;
      //   width: 19rem;
      //   border: 1px solid #f00;
      & > p {
        line-height: 1rem;
        font-size: 12px;
        width: 16rem;
        text-align: left;

        & > span {
          margin-right: 1rem;
          color: #999999;
        }
      }
      & > p:nth-child(1) {
        line-height: 0.8rem;
      }
      & > p:nth-child(2) {
        line-height: 0.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // border: 1px solid #f00;
      }
    }
  }
}
</style>
