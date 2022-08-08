<template>

	<div class="context-list" :class="{ 'icon-margin-bottom': icon }">
		<div class="list-heading" :class="{ 'icon-class': icon }">

			<!-- icon如果是默认的空字符串，布尔值为false -->
			<div class="title">
				<EditImage v-if="icon" :src="icon" height="20" width="20" class="img" />
				<span class="name" :style="{ fontSize: titleSize }" contenteditable="true">{{ title }}</span>
			</div>

			<div class="button add" @click="add" :class="{ 'icon-margin-right': icon }">+</div>
		</div>

		<ul id="luo">
			<!-- 新增条目被渲染在这里 -->
			<!-- contact、social/skill的添加，下面这句代码完成 -->
			<ListItemInfo v-if="icon" :beta="alfa" :data="item" v-for="item in arry" :key="item.id" />

			<ListItemEducation :data="item" :beta="alfa" v-if="title == 'Education'" v-for="item in arry" :key="item.id" />

			<ListItemExperience :data="item" :beta="alfa" v-if="title == 'Working Experience'" v-for="item in arry"
				:key="item.id" />


			<!-- detail.vue中传入的ListItemxxx占据了下面的插槽,渲染的是data.js中的默认数据 -->
			<slot name="listItem"></slot>


		</ul>
	</div>
</template>
<script>
import EditImage from '@/components/edit-image'
import ListItemAbout from '@/components/list-item-about'
import ListItemSkill from '@/components/list-item-skill'
import ListItemEducation from '@/components/list-item-education'
import ListItemExperience from '@/components/list-item-experience'
import ListItemInfo from '@/components/list-item-info'
export default {
	name: 'ContextList',
	components: {
		EditImage,
		ListItemAbout,
		ListItemSkill,
		ListItemEducation,
		ListItemExperience,
		ListItemInfo
	},
	props: {
		title: {
			type: String,
			default: 'Title'
		},
		titleSize: {
			type: String,
			default: '16px'
		},
		icon: {
			type: String,
			default: ''
		},
		alfa: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data() {
		return {
			arry: [],
			// alfa1: JSON.parse(JSON.stringify(this.alfa)),
		}
	},
	methods: {
		showAdd() {
			this.add = true
		},
		contactCons() {
			this.icon = require('@/assets/contact-phone.png');
			this.value = '18112345678';
		},
		socialCons() {
			this.icon = require('@/assets/social-github.png');
			this.value = 'github.com/username';
		},
		skillCons() {
			this.icon = require('@/assets/skill-vue.png');
			this.value = 'Vue';
		},
		educationCons() {
			this.school = 'A University';
			this.major = 'History';
			this.date = '2011.9-2015.6'
		},
		workCons() {
			this.company = 'Google';
			this.position = 'UI designer';
			this.date = '2015.1-2016.3';
			this.description = `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in 
                libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla`
		},
		add() {
			if (this.title == 'CONTACT') {
				var newItem = new this.contactCons();
			} else if (this.title == 'SOCIAL') {
				var newItem = new this.socialCons();
			} else if (this.title == 'Skill') {
				var newItem = new this.skillCons();
			} else if (this.title == 'Education') {
				var newItem = new this.educationCons();
			} else if (this.title == 'Working Experience') {
				var newItem = new this.workCons();
			} else {
				var newItem = {}
			}
			// console.log(newContact);
			console.log('add before', this.alfa);
			this.alfa.unshift(newItem)
			this.arry.unshift(newItem);
			console.log('add after', this.alfa);

			// console.log('after', this.alfa);
		},
		delete() {
			this.listItem = false
			console.log('del before', this.beta);
			// console.log('item', this.item);
			var index = this.beta.indexOf(this.item);
			// console.log('index', index);
			this.beta.splice(index, 1)
			console.log('del after', this.beta);
			// this.$emit('deleteitem', this.tolistitem)
		}
	}
}
</script>
<style lang="less">
.context-list {
	width: 100%;
	margin-bottom: 0px;

	.list-heading {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			display: flex;
			align-items: center;

			.img {
				margin: 0 20px 0 15px;
			}

			span.name {
				margin: 10px 0;
				font-weight: bold;
			}
		}

		&:hover .add {
			display: block;
		}

		.add {
			display: none;
		}

		.button {
			width: 16px;
			height: 16px;
			line-height: 16px;
			text-align: center;
			font-size: 16px;
			border-radius: 50%;
			background: none;
			border: 1px solid #dad8d7;
			cursor: pointer;

			&:hover {
				background: #f2f2f2;
			}
		}
	}
}

.icon-class {
	background-color: #f6f7f7;
	border-bottom: 1px solid #e9e8e8;
}

.icon-margin-bottom {
	margin-bottom: 0;
}

.icon-margin-right {
	margin-right: 15px;
}
</style>
