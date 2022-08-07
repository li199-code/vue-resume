<template>
	<div class='home'>
		<input type="text" v-model="newId" placeholder="请输入简历名称" @keyup.enter="create">
		<!-- <p>{{ newId }}</p> -->
		<!-- <li v-for="item in resume_list">{{ item }}</li> -->
		<!-- <h3>{{ this.$route.params }}</h3> -->
		<div v-for="(item, index) in resume_list">
			<router-link :to="'/detail/' + item" tag="li">{{ index + 1 + ' ' + item }}</router-link>
		</div>

	</div>
</template>

<script>
import defaultData from '../config/data'
var resume_list = []

// 若简历列表为空，则自动创立示例简历
if (localStorage.length == 0) {
	localStorage.setItem('demo', JSON.stringify(defaultData))
}
// 获得当前简历列表
for (var i = 0; i < localStorage.length; i++) {
	resume_list.push(localStorage.key(i));
}
// console.log(resume_list);
// import defaultData from '../config/data'
var newId;
export default {
	name: 'home',
	components: {

	},
	data() {
		return {
			resume_list,
			newId,
		}
	},
	methods: {
		create() {
			localStorage.setItem(this.newId, JSON.stringify(defaultData))
		}
	}
}
</script>

<style scoped>
</style>