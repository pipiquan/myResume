var main = new Vue({
	el: '#main_body',
	data: {
		name: "龚明权",
		sex: "男",
		birthday: "1994年06月",
		degree: "本科",
		email: "627838051@qq.com",
		telephone: "18251827282",
		personalEvaluation: "有较强的表达和沟通能力，工作认真、严谨，对系统质量有很高的要求意识，能主动了解和学习新鲜事物、适应新环境。",
		educationExperience: [{
			period: "2011 - 2015",
			school: "河海大学",
			professional: "自动化",
		}],
		WorkExperience: [{
				period: "2015 - 2016",
				company: "南京中电熊猫平板显示科技有限公司",
				position: "FA工程师"
			},
			{
				period: "2017 - 2019",
				company: "中国电子科技集团公司第二十八研究所",
				position: "前端工程师"
			},
		],
		objExprience: [{
				name: "北京某大队指挥系统",
				skill: "Vue，jQuery，iView，echarts，requireJs，WebSocket",
				detail: "参与了用户需求的对接和部分功能模块的设计，负责前端组任务的分配和开发工作；梳理了项目代码，通过Vue的异步组件功能将不同的功能模块化，同时使用requireJs的动态引入不同的组件的代码，极大的提升了页面的响应速度和展示效果；通过Websocket实现了客户端和网页端的通信，包括用户登录、切换等；参与了操作手册的编写、出厂测试和产品交付。",
			},
			{
				name: "北京某大队项目",
				skill: "Vue，iView，echarts，jQuery，鲸云地图",
				detail: "主要负责前端代码的开发、动态效果实现；同时参与了用户软件版本的更新工作，多次参与产品演示汇报工作，产品交付流程中参与了操作手册编写和软件测试工作。",
			},
			{
				name: "宁波项目",
				skill: "Vue，iView，jQuery，echarts，鲸云地图",
				detail: "主要负责前端代码的开发、动态效果实现；参与了用户需求的对接和功能梳理。",
			},
		],
		changeObj: function(name) {
			for (var i = 0; i < main.objExprience.length; i++) {
				if (main.objExprience[i].name == name) {
					main.project = main.objExprience[i];
					break;
				}
			}
		},
		project: {
			name: "",
			skill: "",
			detail: ""
		}
	},
	mounted: function() {
		this.project = this.objExprience[0]
	}
})
