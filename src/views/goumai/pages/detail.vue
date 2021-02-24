<template>
	<div id="detail">
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '@/components/footer';

export default {
	name: 'detail',
	components: {
		Footer
	},
	data() {
		return {};
	},
	computed: {},
	methods: {},
	created() {
		console.log(this.$route.query.editId);
	},
	mounted() {}
};
</script>

<style lang="scss" scoped></style>
