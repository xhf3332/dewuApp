<template>
	<div id="box1">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
			<van-swipe-item>5</van-swipe-item>
			<van-swipe-item>6</van-swipe-item>
			<van-swipe-item>7</van-swipe-item>
			<van-swipe-item>8</van-swipe-item>
		</van-swipe>
		<div class="nav">
			<ul>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>新品速递</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>品牌专区</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>人气配饰</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>校园风箱包</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>潜力鞋款</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>乔丹AJ1低</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>蓝朋友耐克</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>斜挎包推荐</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>蓝朋友乔丹</p>
				</li>
				<li>
					<img src="../../../../public/data/img/car.jpg" alt="" />
					<p>MORE</p>
				</li>
			</ul>
		</div>
		<div class="main">
			<div class="main-l" @click="goDetail">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
			<div class="main-l">
				<img src="../../../../public/data/img/car.jpg" alt="" />
				<p>XXOFF 闪钻字母爱心拼接太阳月亮镂空情侣钛钢项</p>
				<a href="">￥199</a>
				<span>85812人付款</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'recommend',
	methods: {
		goDetail() {
			this.$router.push({
				path: '/goumai/detail',
				query: {
					editId: 1
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
	height: 6.6rem;
	color: #fff;
	font-size: 20px;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
}
.nav {
	margin-top: 1rem;
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		li {
			width: 19%;
			height: 5rem;
			img {
				width: 100%;
			}
			p {
				font-size: 10px;
				text-align: center;
			}
		}
	}
}
.main {
	display: flex;
	flex-wrap: wrap;

	width: 100%;
	.main-l {
		width: 50%;
		background: pink;
		height: 13rem;
		border: 1px solid #ccc;
		box-sizing: border-box;
		border-top: none;
		border-left: none;

		img {
			width: 5rem;
			height: 5rem;
			margin-left: 2.8rem;
			margin-top: 1rem;
		}
		p {
			padding: 0 0.6rem;
			font-size: 14px;
			margin-top: 1rem;
			margin-bottom: 0.2rem;
		}
		a {
			font-size: 12px;
			font-weight: 900;
			color: #000;
			padding: 0 0.6rem;
		}
		span {
			font-size: 12px;
			color: #ccc;
			margin-left: 2.7rem;
		}
	}
}
</style>
