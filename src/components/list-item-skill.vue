<template>
	<ListItem>
		<!--data在props中，说明来自父元素-->
		<p contenteditable="true" @input="contentChange($event)" v-html="data[0]" />
	</ListItem>
</template>
<script>
import ListItem from '@/components/list-item'
export default {
	name: 'ListItemSkill',
	props: {
		data: {
			type: Array,
			default: []
		}
	},
	components: {
		ListItem
	},
	methods: {
		contentChange(e) {
			// console.log(typeof this.data.imgurl);
			this.data[0] = e.target.innerText
			// this.key = e.target.innerText
			console.log('brief-change', this.data)
		}
	}
}

</script>
