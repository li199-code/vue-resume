<template>
	<ListItem class="list-item-education" :item="data" :beta="beta">
		<!-- <div>{{ beta }}</div> -->
		<div class="school">
			<span contenteditable="true" @input="contentChange('school', $event)" v-html="data.school" />
		</div>
		<div class="major">
			<span contenteditable="true" @input="contentChange('major', $event)" v-html="data.major" />
		</div>
		<div class="date">
			<span contenteditable="true" @input="contentChange('date', $event)" v-html="data.date" />
		</div>
	</ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
	name: 'ListItemEducation',
	components: {
		ListItem
	},
	props: {
		data: {
			type: Object,
			default: () => {
				return {}
			}
		},
		beta: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	methods: {
		contentChange(key, e) {
			// console.log(typeof this.data.imgurl);
			this.data[key] = e.target.innerText
			// this.key = e.target.innerText
			console.log('brief-change', this.data)
		},
	}
}

</script>
<style lang="less">
.list-item-education {
	font-size: 14px;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	.school {
		width: 40%
	}

	.major {
		width: 35%;
	}

	.date {
		width: 25%;
		text-align: right;
	}
}
</style>
