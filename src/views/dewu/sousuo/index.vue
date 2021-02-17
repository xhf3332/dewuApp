<template>
  <div class="sou" >
<div class="sousuo">
  <div class="sou-l">
    <div class="jing"></div>
    <div class="inp">
      <input type="text" placeholder="你敢这样穿么">
    </div>  
  </div>
  <div class="sou-r">
  </div>
</div>
<div class="zan"><p>得物热搜榜 <span>更多></span></p></div>
<div class="libiao">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sou{
  padding: 5px 10px;
}
.sousuo{
  width: 100%;
  height: 30px;
  background: coral;
  display: flex;
  justify-content: space-between;
}
.sou-l{
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jing{
  width: 10%;
  height: 30px;
  background: darkorange;
}
.inp{
  width: 90%;
  height: 30px;
  background: darkgray;
}
.inp input{
  line-height: 30px;
}
.sou-r{
  width: 15%;
  height: 30px;
  background: darkblue;
}
.zan{
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  background: seagreen;
}
.zan span{
  float: right;
  color: #ccc;
}
.libiao ul{
  display: flex;
  flex-wrap: wrap;
}
.libiao ul li{
  width: 50%;
  background: skyblue;
}
</style>