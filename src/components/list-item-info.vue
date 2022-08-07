<template>
	<ListItem class="list-item-info" :item="data" :beta="beta">
		<!-- <div>{{ beta }}</div> -->
		<EditImage :src="data.icon" class="img" height="18" width="18" />
		<span contenteditable="true" @input="contentChange('value', $event)">{{ data.value }}</span>
	</ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
import EditImage from '@/components/edit-image'
export default {
	name: 'ListItemInfo',
	components: {
		ListItem,
		EditImage
	},
	props: {
		// image: {
		// 	type: String,
		// 	default: require('@/assets/social-github.png')
		// },
		// title: {
		// 	type: String,
		// 	default: 'github.com/luosijie'
		// }
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
		}
	}
}

</script>
<style lang="less">
.list-item-info {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #e9e8e8;
	height: 30px;

	.img {
		margin: 0 20px 0 15px;
	}

	span {
		font-size: 12px;
		color: #555;
	}
}
</style>
