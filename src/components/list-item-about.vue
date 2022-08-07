<template>
	<ListItem>
		<!--data在props中，说明来自父元素-->
		<p contenteditable="true" @input="contentChange('value', $event)" v-html="data" />
	</ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
	name: 'ListItemAbout',
	props: {
		data: {
			type: String,
			default: ''
		}
	},
	components: {
		ListItem
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
