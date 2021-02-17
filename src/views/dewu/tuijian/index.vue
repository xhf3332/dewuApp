<template>
  <div>
    <div class="quan">
      <nav>
      <ul>
        <router-link tag="li" to="/dewu/tuijian/quanbu">全部</router-link>
        <router-link tag="li" to="/dewu/tuijian/shipin">视频</router-link>
        <router-link tag="li" to="/dewu/tuijian/qiuxie">球鞋</router-link>
        <router-link tag="li" to="/dewu/tuijian/chuanda">穿搭</router-link>
        <router-link tag="li" to="/dewu/tuijian/manli">男士理容</router-link>
        <router-link tag="li" to="/dewu/tuijian/meizhuang">美妆</router-link>
        <router-link tag="li" to="/dewu/tuijian/shoubiao">手表</router-link>
        <router-link tag="li" to="/dewu/tuijian/wanju">玩具</router-link>
        <router-link tag="li" to="/dewu/tuijian/yundong">运动</router-link>
        <router-link tag="li" to="/dewu/tuijian/jianshen">健身</router-link>
        <router-link tag="li" to="/dewu/tuijian/youxi">游戏</router-link>
        <router-link tag="li" to="/dewu/tuijian/shuma">数码</router-link>
        <router-link tag="li" to="/dewu/tuijian/qiche">汽车</router-link>
        <router-link tag="li" to="/dewu/tuijian/manchuan">男士穿搭</router-link>
        <router-link tag="li" to="/dewu/tuijian/girlchuan">女士穿搭</router-link>
        <router-link tag="li" to="/dewu/tuijian/guochao">国潮</router-link>
        <router-link tag="li" to="/dewu/tuijian/weiyi">卫衣</router-link>
        <router-link tag="li" to="/dewu/tuijian/kuzi">裤子</router-link>
        <router-link tag="li" to="/dewu/tuijian/xiangbao">箱包</router-link>
        <router-link tag="li" to="/dewu/tuijian/shebao">奢包</router-link>
        <router-link tag="li" to="/dewu/tuijian/maozi">帽子</router-link>
        <router-link tag="li" to="/dewu/tuijian/shoushi">首饰</router-link>
      </ul>
      </nav>
       <div class="muen">vv</div>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.quan{
  display: flex;
  justify-content: space-between;
  height: 30px;
  background: springgreen;
  /* position: relative; */
}
.quan nav{
    overflow-x: auto;
    width: 90%;
}
.quan nav ul{
    height: 30px;
    display: flex;
    /* margin: 0px 5px; */
    /* align-items: center; */
    /* border-bottom: 1px solid #ccc; */
}

.quan nav ul li{
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    flex-shrink: 0;
}

.muen{
    width: 10%;
    height: 30px;
    background: red;
    color: #282828;
    /* font-size: .45rem; */
    text-align: center;
    line-height: 30px;
    /* position: absolute; */
    /* top: 0; */
    /* right: 0; */
}

</style>