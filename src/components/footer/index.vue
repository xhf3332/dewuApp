<template>
<<<<<<< HEAD
	<div class="footer">
		<ul>
			<router-link tag="li" to="dewu">得物</router-link>
			<router-link tag="li" to="goumai">购买</router-link>
			<router-link tag="li" to="fuwu">服务</router-link>
			<router-link tag="li" to="mine">我的</router-link>
		</ul>
	</div>
=======
  <div class="footer">
    <ul>
      <router-link tag="li" to="/dewu">得物</router-link>
      <router-link tag="li" to="/goumai">购买</router-link>
      <router-link tag="li" to="/fuwu">服务</router-link>
      <router-link tag="li" to="/mine"> 我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
>>>>>>> c71bb6a3d8172b0cdf5c370d8e761069373b6bb3
</template>

<script>
export default {};
</script>

<style>
.footer {
<<<<<<< HEAD
	width: 100%;
	position: fixed;
	left: 0px;
	bottom: 0px;
	height: 40px;
	z-index: 999;
	background: #fff;
=======
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 40px;
  background: #fff;
>>>>>>> c71bb6a3d8172b0cdf5c370d8e761069373b6bb3
}
.footer ul li {
	list-style: none;
	float: left;
	width: 25%;
	text-align: center;
	line-height: 40px;
}
.footer .router-link-active {
	color: bisque;
	background-color: chartreuse;
}
</style>
