<template>
	<div id="box">
		<div class="top">
			<div class="top-l">
				<h1>先鉴别后发货 保证全新正品 &gt;</h1>
				<p>多重鉴别 | 逐渐查验 | 正品保障</p>
			</div>
			<div class="top-r">
				<a href="">分类</a>
			</div>
		</div>
		<van-field
			v-model="value"
			left-icon="search"
			right-icon="search"
			style="background: #eee;height: 35px;line-height: 15px; color: #000"
			placeholder="邓紫棋同款"
			class="input"
		/>
		<van-tabs v-model="active">
			<van-tab title="推荐">
				<Recommend></Recommend>
			</van-tab>
			<van-tab title="配饰">内容 2</van-tab>
			<van-tab title="箱包">内容 3</van-tab>
			<van-tab title="鞋类">内容 4</van-tab>
			<van-tab title="潮服">内容 5</van-tab>
			<van-tab title="手表">内容 6</van-tab>
			<van-tab title="潮玩">内容 7</van-tab>
			<van-tab title="运动">内容 8</van-tab>
			<van-tab title="女装">内容 9</van-tab>
			<van-tab title="数码">内容 10</van-tab>
			<van-tab title="美妆">内容 11</van-tab>
			<van-tab title="家居">内容 12</van-tab>
			<van-tab title="汽车">内容 13</van-tab>
			<van-tab title="家电">内容 14</van-tab>
			<van-tab title="艺术">内容 15</van-tab>
		</van-tabs>

		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '../../../components/footer';
import Recommend from '../components/recommend';

// 购买
export default {
	name: 'goumai',
	data() {
		return {
			value: '',
			active: ''
		};
	},
	components: {
		Footer,
		Recommend
	}
};
</script>

<style lang="scss" scoped>
#box {
	.van-tabs__wrap {
		margin-bottom: 0.5rem;
		margin-left: -0.6rem;
	}
	padding: 0 1rem;
}
.top {
	margin: 0.8rem 0;
	display: flex;
	justify-content: space-between;
	.top-l {
		h1 {
			font-size: 1rem;
			margin-bottom: 0.1rem;
		}
		p {
			font-size: 0.5rem;
			color: #999;
		}
	}
	.top-r {
		font-size: 1.3rem;
		margin-top: 0.3rem;
		a {
			color: #000;
		}
	}
}
</style>
