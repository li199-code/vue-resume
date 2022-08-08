<template>
	<div class='home'>
		<header class="header-box">
			<h1>创建你的简历</h1>
		</header>
		<div class="pagelist">
			<div class="content-head">
				<input type="text" class="content-input" v-model="newId" placeholder="创建简历，按回车结束" @keyup.enter="create">
			</div>
			<div class="items">
				<div class="content-item" v-for="(item, index) in resume_list">
					<!-- <router-link :to="'/detail/' + item" tag="li">{{ index + 1 + ' ' + item }}</router-link> -->
					<div class="item-left">
						<span>{{ index + 1 }}</span>
					</div>
					<router-link :to="'/detail/' + item" class="item-middle" tag="div">
						<span>{{ item }}</span>
					</router-link>
					<div class="item-right">
						<span @click="deleteItem(item, index)">x</span>
					</div>
				</div>

			</div>
		</div>



		<!-- <span>新建简历：</span>
		<input type="text" v-model="newId" placeholder="请输入简历名称" @keyup.enter="create">
		<div v-for="(item, index) in resume_list">
			<router-link :to="'/detail/' + item" tag="li">{{ index + 1 + ' ' + item }}</router-link>
		</div> -->

	</div>
</template>

<script>
import defaultData from '../config/data_en'
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
			this.resume_list.push(this.newId)
		},
		deleteItem(key, index) {
			localStorage.removeItem(key)
			this.resume_list.splice(index, 1)
		}
	}
}
</script>

<style scoped>
/* .home {
	background-color: rgb(245, 245, 245);
} */

h1 {
	text-align: center;
	color: rgb(189, 87, 87);
	font-weight: lighter;
	font-size: xx-large;
}

.header-box {
	padding-top: 20px;
}

.pagelist {
	/* height: 400px; */
	width: 600px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* border: 1px solid black; */
	box-shadow: 2em;
	background-color: #fff;

}

.content-head,
.content-item {
	height: 50px;
	padding-left: 20px;
	padding-right: 20px;
	border-bottom: 1px solid #999;
	display: flex;
	align-items: center;
	font-size: 25px;
}

.content-input {
	flex: 1;
	margin: 0px 5px;
	outline: none;
	background-color: transparent;
	border: none;
	font-size: 25px;
}

.item-left {
	margin-right: 10px;
	font-size: 8px;
}

.content-item {
	justify-content: space-between;
}

.item-middle {
	flex: 1;
}

.items {
	max-height: 420px;
	overflow: auto;
}

.count-clear {
	display: flex;
	justify-content: space-between;
	height: 30px;
	background-color: #fff;
	font-size: 5px;
	align-items: center;
	padding: 0 20px;
}

.item-right {
	display: none;
}

.item-right:hover {
	display: block;
	color: #af5b5e;
}

.item-middle:hover+.item-right {
	display: block;
	color: #af5b5e;
}
</style>