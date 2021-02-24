<template>
	<div class="footer">
		<ul>
			<router-link tag="li" to="/dewu">得物</router-link>
			<router-link tag="li" to="/goumai">购买</router-link>
			<router-link tag="li" to="/fuwu">服务</router-link>
			<router-link tag="li" to="/mine">我的</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style>
.footer {
	width: 100%;
	position: fixed;
	left: 0px;
	bottom: 0px;
	height: 40px;
	background: #fff;
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
