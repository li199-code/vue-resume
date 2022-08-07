<template>
	<ListItem class="list-item-experience" :beta="beta">
		<div class="heading">
			<div class="company">
				<span contenteditable="true" @input="contentChange('company', $event)" v-html="data.company" />
			</div>
			<div class="job">
				<span contenteditable="true" @input="contentChange('position', $event)" v-html="data.position" />
			</div>
			<div class="date">
				<span contenteditable="true" @input="contentChange('date', $event)" v-html="data.date" />
			</div>
		</div>
		<p contenteditable="true" @input="contentChange('description', $event)" v-html="data.description" />
	</ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
	name: 'ListItemExperience',
	components: {
		ListItem
	},
	props: {
		data: {
			type: Object,
			default() {
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
		}
	},
}

</script>
<style lang="less">
.list-item-experience {
	.heading {
		font-size: 14px;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		margin-bottom: 12px;

		.company {
			width: 40%
		}

		.job {
			width: 35%;
		}

		.date {
			width: 25%;
			text-align: right;
		}
	}
}
</style>
