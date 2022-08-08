<template>
	<div id="detail">
		<!-- <h1>{{ $route.params.resume_id }}</h1> -->
		<div class="resume">
			<div class="left">
				<Brief :data="defaultData.Brief" />
				<ContextList title="CONTACT" title-size="14px" :icon="require('../assets/title-contact.png')"
					:alfa="defaultData.Contact">
					<ListItemInfo slot="listItem" :beta="defaultData.Contact" :data="item" v-for="item in defaultData.Contact"
						:key="item.key" />
				</ContextList>
				<ContextList title="SOCIAL" title-size="14px" :icon="require('../assets/title-contact.png')"
					:alfa="defaultData.Social">
					<ListItemInfo :data="item" :beta="defaultData.Social" slot="listItem" v-for="item in defaultData.Social"
						:key="item.key" />
				</ContextList>
				<ContextList title="Skill" title-size="14px" :icon="require('../assets/title-contact.png')"
					:alfa="defaultData.Skill">
					<ListItemInfo :data="item" slot="listItem" :beta="defaultData.Skill" v-for="item in defaultData.Skill"
						:key="item.key" />
				</ContextList>
			</div>
			<div class="right">
				<!-- <ContextList title="About me">
					<ListItemAbout slot="listItem" :data="defaultData.AboutMe" />
				</ContextList> -->
				<ContextList title="Education" :alfa="defaultData.Education">
					<ListItemEducation slot="listItem" :data="item" :beta="defaultData.Education"
						v-for="item in defaultData.Education" :key="item.key" />
				</ContextList>
				<ContextList title="Skills">
					<ListItemSkill slot="listItem" :data="defaultData.SkillText" />
				</ContextList>
				<ContextList title="Working Experience" :alfa="defaultData.WorkingExperience">
					<ListItemExperience slot="listItem" :beta="defaultData.WorkingExperience"
						v-for="item in defaultData.WorkingExperience" :data="item" :key="item.key" />
				</ContextList>
			</div>
			<div class="a4line"><span>a4 line</span></div>
		</div>
		<!-- guide:底部四个说明图片 -->
		<Guide />
		<!-- actions:保存选项 -->
		<div class="actions">
			<button @click="saveAsImage">Save as PNG</button>
			<button @click="saveData">Save to localstorage</button>
			<!-- <button @click="getData">Get from localstorage</button> -->
			<button @click="print">Print</button>
		</div>
		<!-- footer:作者个人主页 -->
		<div class="footer">
			<a href="https://github.com/luosijie/vue-resume" target="_blank">
				<img src="../assets/social-github.png" height="36" width="36" alt>
			</a>
			vue-resume designed by
			<a href="https://github.com/luosijie">Jesse Luo</a>
		</div>
	</div>
</template>
<script>
import ContextList from './context-list.vue'
import ListItemAbout from './list-item-about'
import ListItemSkill from './list-item-skill'
import ListItemEducation from './list-item-education'
import ListItemExperience from './list-item-experience'
import ListItemInfo from './list-item-info'
import html2canvas from '../assets/js/html2canvas'
import FileSaver from 'file-saver'
import Brief from './brief'
import Guide from './guide'
// import GeneratePDF from '@/utils/generatePDF'
// import defaultData from '@/config/data'
// var resume_id = $route.params.route_id
// console.log(resume_id);
// var defaultData = JSON.parse(localStorage.getItem('demo'))
export default {
	name: 'detail',
	components: {
		ContextList,
		ListItemAbout,
		ListItemSkill,
		ListItemEducation,
		ListItemExperience,
		ListItemInfo,
		Brief,
		Guide
	},
	computed: {
		defaultData() {
			return JSON.parse(localStorage.getItem(this.$route.params.resume_id))
			// return defaultData
		}
	},
	methods: {
		// saveAsPdf () {
		//     const resume = document.querySelector('.resume')
		//     const pdf = new GeneratePDF(resume)
		//     pdf.generate()
		// },
		saveAsImage() {
			let resume = document.querySelector('.resume')
			html2canvas(resume).then(canvas => {
				canvas.toBlob(blob => {
					FileSaver.saveAs(blob, 'Resume.png')
				})
			})
		},
		print() {
			window.print()
		},
		saveData() {
			// var timestamp = new Date().getTime();
			// console.log(this.defaultData.Brief);
			localStorage.setItem(this.$route.params.resume_id, JSON.stringify(this.defaultData))
		},
		// getData() {
		// 	var data = JSON.parse(localStorage.getItem('demo'))
		// 	console.log(data);
		// }
	}
}
</script>
<style lang="less">
body {
	padding: 0;
	margin: 0;
}

ul {
	padding: 0;
	margin: 0;

	li {
		list-style: none;
	}
}

p {
	margin: 0 0 12px 0;
}

#detail {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: #2c3e50;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.resume {
		margin-top: 40px;
		position: relative;
		width: 790px;
		// height: 1754px;
		border: 1px solid #dad8d7;
		background-color: white;
		overflow: hidden;
		box-sizing: border-box;

		.left {
			width: 240px;
			height: 100%;
			box-sizing: border-box;
			float: left;
			background-color: #fdfefe;
			position: relative;
		}

		.right {
			box-sizing: border-box;
			width: calc(~'100% - 240px');
			float: left;
			padding: 25px 20px;
			border-left: 1px solid #dad8d7;
			// page-break-before: always;

			p {
				font-size: 14px;
				line-height: 18px;
				color: #555;
				text-align: justify;
			}
		}




	}

	// .resume:hover
	.resume:hover .a4line {
		display: block;
		// float: left;
		border-bottom: 2px dashed #666;
		// margin-top: 1117px;
		height: 1117px;
		width: 100%;
		text-align: center;

		span {
			position: absolute;
			// margin-top: 1000px;
			bottom: 0;
		}
	}

	.a4line {
		display: none;
	}

	.actions {
		position: absolute;
		top: 40px;
		left: 50%;
		margin-left: 415px;
		display: flex;
		flex-direction: column;

		button {
			padding: 5px 8px;
			border-radius: 4px;
			background-color: white;
			border: 1px solid #dad8d7;
			margin-bottom: 5px;
			cursor: pointer;

			&:hover {
				background-color: #f8f8f8;
			}
		}
	}



	.footer {
		line-height: 50px;

		a {
			text-decoration: none;
			color: #4aa74f;

			&:first-child {
				display: block;
				text-align: center;
				line-height: 0;
				margin-top: 15px;
			}
		}
	}
}

@page {
	size: auto;
	margin: 0cm;
	color: #ffffff;
	// -webkit-print-color-adjust: exact;
	// print-color-adjust: exact;
}

@media print {

	html,
	body,
	#detail {
		font-size: 0 !important;
		min-height: auto !important;
		height: auto !important;
		// min-width: auto !important;
		// font-family: Microsoft YaHei, tahoma, arial, Hiragino Sans GB;
	}

	* {
		color: #000 !important;
		overflow: hidden !important;
	}

	.resume {
		// position: absolute;
		// top: 0;
		// left: 0;
		// width: 100%;
		margin-top: 0 !important;
		// border: none!important;

	}

	.actions,
	.guide,
	.footer {
		display: none !important;
	}
}
</style>
