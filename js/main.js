var main = new Vue({
			el: '#main_body',
			data: {
				name: "龚明权",
				sex: "男",
				birthday: "1994年06月",
				degree: "本科",
				email: "627838051@qq.com",
				telephone: "18251827282",
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
				objExprience: [
					{
					name: "军工项目1",
					workPosition: "",
					skill: ["jQuery", "Vue", "iView"],
					detail: "",
					},
					{
					name: "军工项目2",
					workPosition: "",
					skill: ["jQuery", "Vue", "iView"],
					detail: "",
					},
					{
					name: "军工项目3",
					workPosition: "",
					skill: ["jQuery", "Vue", "iView"],
					detail: "",
					},
				],
				changeObj: function(name) {
					console.log(name);
				}
			},
		})