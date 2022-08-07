<template>
	<div id='app'>
		<router-link to="/">首页</router-link>
		<!-- <router-link to="/detail">详情</router-link> -->

		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'app',
	components: {

	}
}
</script>

<style scoped>
</style>