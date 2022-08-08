<template>
	<div id='app'>
		<div class="nav">
			<router-link to="/" tag="button">首页</router-link>
		</div>

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
.nav {
	margin-top: 20px;
	text-align: center;
}
</style>