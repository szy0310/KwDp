/*
 * @Author: sunday
 * @Date: 2020-05-26 11:47:07
 * @LastEditors: sunday
 * @LastEditTime: 2020-08-24 15:42:32
 * @Description: file content
 */

//折线图-1
var chart_line_1 = function(pxdata, pydata) {
	var mychart = echarts.init(document.getElementById('line-1'), 'rc_ksh');
	var dataArr = pydata || [100, 200, 250, 300, 350];
	var xArr = pxdata || ['2015', '2016', '2017', '2018', '2019']
	var seriesObj = {
		name: '耕地面积', //系列名称
		type: 'line',
		smooth: false, //是否平滑曲线显示
		// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
		showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
		symbol: 'circle', //标记的图形。
		symbolSize: 6, //标记的大小
		lineStyle: { //线条样式。
			normal: {
				color: "#00FF4E", // 线条颜色
				shadowOffsetY: 0,
			},
		},
		label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
			show: true,
			formatter: '{c}',
			position: 'top',
			textStyle: {
				color: '#00FF4E',
				fontSize: getSize(0.3)
			}
		},
		itemStyle: { //折线拐点标志的样式。
			normal: {
				color: "#00FF4E",
			}
		},
		tooltip: { //提示框
			show: true
		},
		data: dataArr
	};
	var option = {
		title: {
			show: false,
			text: '耕地面积历年趋势',
			left: getSize(2.5),
			textStyle: {
				color: '#fff',
				fontSize: getSize(.3),
				fontWeight: 'normal'
			}
		},
		tooltip: { //提示框组件
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: { //直角坐标系
			top: '25%',
			left: '4%',
			right: '4%',
			bottom: '8%',
			containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
		},
		xAxis: [{ //直角坐标系 grid 中的 x 轴
			type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
			boundaryGap: true,
			margin: getSize(0.1),
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: '#3196fa'
				},
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
			axisTick: {
				show: false,
			},
			data: xArr,
		}],
		yAxis: [{ //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			name: '单位：公顷',
			nameTextStyle: {
				fontSize: getSize(0.24),
				color: '#fff',
				padding: [0, getSize(0.3), 0, 0]
			},
			margin: getSize(0.1),
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					type: 'dashed',
					color: '#3196fa'
				}
			},
			axisLine: { //坐标轴轴线相关设置。
				show: true,
				lineStyle: {
					color: '#3196fa'
				}
			},
			axisLabel: { //坐标轴刻度标签的相关设置。
				margin: 10, //刻度标签与轴线之间的距离。
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
			axisTick: { //坐标轴刻度相关设置。
				show: false,
			},
		}],
		series: seriesObj
	};
	mychart.setOption(option);
}
//折线图-2
var chart_line_2 = function(pxdata, pydata) {
	var mychart = echarts.init(document.getElementById('line-2'));
	var dataArr = pxdata || S_mock.array(5, 100, 200, '', 2);
	var xArr = pydata || S_mock.xdata(2014, 2018, '')
	var seriesObj = {
		name: '', //系列名称
		type: 'line',
		smooth: false, //是否平滑曲线显示
		// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
		showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
		symbol: 'circle', //标记的图形。
		symbolSize: 6, //标记的大小
		lineStyle: { //线条样式。
			normal: {
				width: 1,
				color: "#21CEE1", // 线条颜色
				shadowOffsetY: 0,
				type: 'dashed',
			},
		},
		label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
			show: true,
			formatter: '{c}',
			position: 'top',
			textStyle: {
				color: '#fff',
			}
		},
		itemStyle: { //折线拐点标志的样式。
			normal: {
				color: "#21CEE1",
			}
		},
		tooltip: { //提示框
			show: true
		},
		data: dataArr
	};
	var option = {
		title: {
			show: true,
			text: '林地面积',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: getSize(.32),
				fontWeight: 'normal'
			}
		},
		tooltip: { //提示框组件
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: { //直角坐标系
			top: '25%',
			left: '6%',
			right: '4%',
			bottom: '8%',
			containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
		},
		xAxis: [{ //直角坐标系 grid 中的 x 轴
			type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
			boundaryGap: true,
			margin: getSize(0.1),
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: '#3196fa'
				},
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
			axisTick: {
				show: false,
			},
			data: xArr,
		}],
		yAxis: [{ //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			name: '单位：万亩',
			nameTextStyle: {
				fontSize: getSize(0.24),
				color: '#fff',
				// padding: [0, getSize(0.3), 0, 0]
			},
			margin: getSize(0.1),
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					type: 'dashed',
					color: '#3196fa'
				}
			},
			axisLine: { //坐标轴轴线相关设置。
				show: true,
				lineStyle: {
					color: '#3196fa'
				}
			},
			axisLabel: { //坐标轴刻度标签的相关设置。
				margin: 10, //刻度标签与轴线之间的距离。
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
			axisTick: { //坐标轴刻度相关设置。
				show: false,
			},
		}],
		series: seriesObj
	};
	mychart.setOption(option);
}
//折线图-3
var chart_line_3 = function(pxdata, pydata) {
	var myChart = echarts.init(document.getElementById('line-3'));
	var Xdata = pxdata || S_mock.xdata(1, 12, '月');
	var Ydata = pydata || S_mock.array(12, 100, 200);
	
	var option = {
		tooltip: { //提示框组件
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			formatter: '{a}</br>{b}:{c}万'

		},
		grid: {
			left: '4%',
			top: "25%",
			right: '4%',
			bottom: '5%',
			containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
		},
		xAxis: [{ //直角坐标系 grid 中的 x 轴
			type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
			boundaryGap: true,
			axisLabel: {
				interval: 'auto',
				color: "#ccc",
				fontSize: getSize(0.24),
			},

			axisLine: {
				show: true,
				lineStyle: {
					color: "#579dff",
				}
			},
			axisTick: {
				show: false,
			},
			data: Xdata,
		}],
		yAxis: [{ //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			min: 0, //坐标轴刻度最小值。
			name: '单位：µg/m3',
			nameTextStyle: {
				color: "#ccc",
				fontSize: getSize(0.24),
				padding: [0, 0, 0, getSize(0.4)]
			},
			axisLabel: {
				interval: 0,
				color: "#ccc",
				fontSize: getSize(0.24),
			},
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					color: '#579dff',
					opacity: 1,
					width: 1,
					type: 'dashed',
				}
			},

			axisLine: {
				show: true,
				lineStyle: {
					color: "#579dff",
				}
			},
			axisTick: {
				show: false
			},
		}],
		series: [{
			name: 'PM2.5平均浓度', //系列名称
			type: 'line',
			smooth: false, //是否平滑曲线显示
			// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
			symbol: 'emptyCircle', //标记的图形。
			// symbolSize: 2,//标记的大小
			lineStyle: { //线条样式。
				normal: {
					color: "#1A9BA9", // 线条颜色
					shadowOffsetY: 2,
					shadowColor: '#136258',
				},
			},
			label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				show: false,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#fff',
				}
			},
			itemStyle: { //折线拐点标志的样式。
				normal: {
					color: "#21CEE1",
				}
			},
			tooltip: { //提示框
				show: true
			},
			areaStyle: { //区域填充样式
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0.2, //// 0% 处的颜色
							color: '#20C7DB'
						},
						{
							offset: 1,
							color: 'transparent'
						}
					], false),
					shadowColor: '#177477', //阴影颜色
					shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				}
			},
			data: Ydata
		}, ]
	};
	myChart.setOption(option);
}
//折线图-4
var chart_line_4 = function(pxdata, pydata1, pydata2, pydata3) {
	var mychart = echarts.init(document.getElementById('line-4'));
	var colorArr = ['#00E0FF', '#00E65A', '#EF4864'];
	var xdata = pxdata || S_mock.xdata(1, 12, '月');
	var ydata1 = pydata1 || S_mock.array(12, 200, 250, '', 1);
	var ydata2 = pydata2 || S_mock.array(12, 90, 190, '', 1);
	var ydata3 = pydata3 || S_mock.array(12, 10, 80, '', 2);
	var legend_arr = ["图例1", "图例2", "图例3"];
	var option = {
		color: colorArr,
		title: {
			show: true,
			text: '标题',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: getSize(.32),
				fontWeight: 'normal'
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '6%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			margin: getSize(0.1),
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: '#3196fa'
				},
			},
			axisTick: {
				show: false
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.24),
					color: '#cccccc',
				},
			},
			data: xdata
		},
		yAxis: {
			type: 'value',
			name: '单位：mg/L',
			nameTextStyle: {
				fontSize: getSize(0.24),
				color: '#cccccc',
				padding: [0, getSize(0.3), 0, 0]
			},
			margin: getSize(0.1),
			splitNumber: 0,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					type: 'dashed',
					color: '#3196fa'
				}
			},
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: '#3196fa'
				},
			},
			axisTick: {
				show: false
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.24),
					color: '#cccccc',
				},
			},
		},
		legend: {
			data: legend_arr,
			textStyle: {
				color: '#fff'
			},
			top: '10%',
			// icon: "roundRect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
			itemWidth: 10, // 设置宽度
			itemHeight: 10, // 设置高度
			itemGap: 5 // 设置间距
		},
		series: [{
				name: legend_arr[0],
				type: 'line',
				// stack: '总量',
				data: ydata1
			},
			{
				name: legend_arr[1],
				type: 'line',
				// stack: '总量',
				data: ydata2
			},
			{
				name: legend_arr[2],
				type: 'line',
				// stack: '总量',
				data: ydata3
			}
		]
	};
	mychart.setOption(option);
}
//折线图-5
var chart_line_5 = function(pxdata, pydata) {
	var mychart = echarts.init(document.getElementById('line-5'));
	var xArr = pxdata || ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'];
	var dataArr = pydata || S_mock.array(9, 10, 20, true);
	var title = '昨日市一周边停车指数趋势';
	var max = Math.max.apply(null, dataArr);
	var min = Math.min.apply(null, dataArr);
	var seriesObj = {
		name: '', //系列名称
		type: 'line',
		smooth: true, //是否平滑曲线显示
		// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
		showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
		symbol: 'circle', //标记的图形。
		symbolSize: 6, //标记的大小
		lineStyle: { //线条样式。
			normal: {
				color: "#21CEE1", // 线条颜色
				shadowOffsetY: 0,
			},
		},
		markLine: {
			label: {
				show: true,
				// formatter: '',
				formatter: 'avg: {c}',
				position: 'end',
				padding: [-20, 0, 0, -60]
			},
			silent: true,
			symbol: 'none',
			data: [{
				name: '平均线',
				// 支持 'average', 'min', 'max'
				type: 'average'
			}]
		},
		itemStyle: { //折线拐点标志的样式。
			normal: {
				color: "#21CEE1",
			}
		},
		tooltip: { //提示框
			show: true
		},
		// data: dataArr
		data: function() {
			var itemArr = [],
				item;
			var max_index = dataArr.indexOf(max);
			var min_index = dataArr.indexOf(min);
			for(var i = 0; i < dataArr.length; i++) {
				if(i == max_index) {
					item = {
						value: dataArr[i],
						label: {
							show: true,
							position: 'insideLeft',
							// position: ['25%', '10%'],
							color: '#fff',
							formatter: '{b}\nmax:{c}',
							backgroundColor: 'rgba(1,60,119,0.86)',
							// zlevel:10
							padding: [5, 5, 5, 5]
						},
						itemStyle: { //折线拐点标志的样式。
							normal: {
								color: "#fff",
								borderColor: '#00f6ff',
								borderWidth: 3,
							}
						},
					};
				} else if(i == min_index) {
					item = {
						value: dataArr[i],
						label: {
							show: true,
							position: 'insideLeft',
							color: '#fff',
							formatter: '{b}\nmin:{c}',
							backgroundColor: 'rgba(1,60,119,0.86)',
							padding: [5, 5, 5, 5]
						},
						itemStyle: { //折线拐点标志的样式。
							normal: {
								color: "#fff",
								borderColor: '#ffcc00',
								borderWidth: 3
							}
						},
					};
				} else {
					item = {
						value: dataArr[i],
						label: {
							show: false,
							color: '#fff'
						},
						symbolSize: 0,
						itemStyle: {
							normal: {

							}
						}
					};
				}
				itemArr.push(item);
			}
			return itemArr;
		}()
	};
	var option = {
		title: {
			show: true,
			text: title,
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: getSize(.26),
				fontWeight: 'normal'
			}
		},
		tooltip: { //提示框组件
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: { //直角坐标系
			top: '35%',
			left: '5%',
			right: '4%',
			bottom: '8%',
			containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
		},
		xAxis: [{ //直角坐标系 grid 中的 x 轴
			type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
			boundaryGap: true,
			margin: getSize(0.1),
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: true,
				lineStyle: {
					color: '#3196fa'
				},
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.2),
					color: '#fff',
				},
			},
			axisTick: {
				show: false,
			},
			data: xArr
		}],
		yAxis: [{ //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			name: '',
			nameTextStyle: {
				fontSize: getSize(0.2),
				color: '#fff',
				padding: [getSize(0.2), 0, 0, 0]
			},
			margin: getSize(0.1),
			splitNumber: 2,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: false,
				lineStyle: {
					type: 'dashed',
					color: '#3196fa'
				}
			},
			axisLine: { //坐标轴轴线相关设置。
				show: true,
				lineStyle: {
					color: '#3196fa'
				}
			},
			axisLabel: { //坐标轴刻度标签的相关设置。
				margin: 10, //刻度标签与轴线之间的距离。
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
			axisTick: { //坐标轴刻度相关设置。
				show: false,
			},
		}],
		series: seriesObj
	};
	mychart.setOption(option);
}
//折线图-6
var chart_line_6 = function(pxdata, pdata1, pdata2) {
	// 初始化实例
	var myChart = echarts.init(document.getElementById('line-6'));
	var Xdata = pxdata || S_mock.xdata(22, 31, '日');
	var Ydata = pdata1 || S_mock.array(10, 100, 200);
	var Ydata2 = pdata2 || S_mock.array(10, 100, 200);
	var colorArr = ['#00DEFE', '#00FF00'];
	var ynameArr = ['今日新增隔离', '今日解除隔离'];
	var legendArr = [];

	for(var key in ynameArr) {
		legendArr.push({
			name: ynameArr[key],
			textStyle: {
				color: '#fff'
			}
		})
	}
	var option = {
		tooltip: { //提示框组件
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			formatter: '{a}</br>{b}:{c}万'

		},
		color: colorArr,
		grid: {
			left: '4%',
			top: "25%",
			right: '4%',
			bottom: '5%',
			containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
		},
		legend: {
			data: legendArr,
		},
		xAxis: [{ //直角坐标系 grid 中的 x 轴
			type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
			boundaryGap: true,
			axisLabel: {
				interval: 'auto',
				color: "#fff",
				fontSize: getSize(0.24),
			},

			axisLine: {
				show: true,
				lineStyle: {
					color: "#579dff",
				}
			},
			axisTick: {
				show: false,
			},
			data: Xdata,
		}],
		yAxis: [{ //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			min: 0, //坐标轴刻度最小值。
			name: '单位：人',
			nameTextStyle: {
				color: "#fff",
				fontSize: getSize(0.24),
			},
			axisLabel: {
				interval: 0,
				color: "#fff",
				fontSize: getSize(0.24),
			},
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					color: '#579dff',
					opacity: 1,
					width: 1,
					type: 'dashed',
				}
			},

			axisLine: {
				show: true,
				lineStyle: {
					color: "#579dff",
				}
			},
			axisTick: {
				show: false
			},
		}],
		series: [{
			name: ynameArr[0], //系列名称
			type: 'line',
			smooth: false, //是否平滑曲线显示
			// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
			symbol: 'circle', //标记的图形。
			// symbolSize: 2,//标记的大小
			lineStyle: { //线条样式。
				normal: {
					color: "#1A9BA9", // 线条颜色
					shadowOffsetY: 2,
					shadowColor: '#0AA2C6',
				},
			},
			label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				show: false,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#fff',
				}
			},
			itemStyle: { //折线拐点标志的样式。
				normal: {
					color: "#16D4F1",
					borderWidth: 1,
					borderColor: '#fff',
				}
			},
			tooltip: { //提示框
				show: true
			},
			areaStyle: { //区域填充样式
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0, //// 0% 处的颜色
							color: 'rgba(0, 222, 254, 1)'
						}, {
							offset: 0.4, //// 0% 处的颜色
							color: 'rgba(0, 222, 254, 0.6)'
						},
						{
							offset: 1,
							color: 'rgba(0, 222, 254, 0)'
						}
					], false),
					shadowColor: '#177477', //阴影颜色
					shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				}
			},
			data: Ydata
		}, {
			name: ynameArr[1], //系列名称
			type: 'line',
			smooth: false, //是否平滑曲线显示
			// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
			symbol: 'circle', //标记的图形。
			// symbolSize: 2,//标记的大小
			lineStyle: { //线条样式。
				normal: {
					color: "#00FF00", // 线条颜色
					shadowOffsetY: 1,
					shadowColor: '#0AD63E',
				},
			},
			label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				show: false,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#fff',
				}
			},
			itemStyle: { //折线拐点标志的样式。
				normal: {
					borderWidth: 1,
					borderColor: '#fff',
					color: "#1DF01A",
				}
			},
			tooltip: { //提示框
				show: true
			},
			areaStyle: { //区域填充样式
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0, //// 0% 处的颜色
							color: 'rgba(1, 241, 8, 1)'
						}, {
							offset: 0.4, //// 0% 处的颜色
							color: 'rgba(1, 241, 8, 0.6)'
						},
						{
							offset: 1,
							color: 'rgba(1, 241, 8, 0)'
						}
					], false),
					shadowColor: '#177477', //阴影颜色
					shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				}
			},
			data: Ydata2
		}]
	};
	myChart.setOption(option);
}

// 折线图-7
var chart_line_7 = function(pxdata, pydata1, pydata2, pydata3) {
	var mychart = echarts.init(document.getElementById('line-7'));
	var colorArr = ['#3196fa', '#ffa800', '#00eefd'];
	var xdata = pxdata || ['2016', '2017', '2018', '2019', '2020'];
	var ydata1 = pydata1 || S_mock.array(5, 70, 100);
	var ydata2 = pydata2 || S_mock.array(5, 30, 90);
	var ydata3 = pydata3 || S_mock.array(5, 30, 80);
	var ydata1_cov = [];
	var max = Math.max.apply(null, ydata1); // 从数组中取出最大值
	console.log(max);
	for(var key in ydata1) {
		if(ydata1[key] == max) {
			ydata1_cov.push({
				value: ydata1[key],
				//				label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				//					show: true,
				//					formatter: '{c}',
				//					position: 'top',
				//					textStyle: {
				//						padding: [getSize(0.1), getSize(0.15), 0, getSize(0.15)],
				//						backgroundColor: '#3196fa',
				//						fontSize: getSize(0.24),
				//						borderRadius: 2,
				//						color: '#fff'
				//					}
				//				},
			});
		} else {
			ydata1_cov.push({
				value: ydata1[key],
				//				label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				//					show: false,
				//				},
			});
		}
	}
	var legend_arr = ["h机", "b机", "8705"];
	var option = {
		color: colorArr,
		title: {
			show: false,
			text: '标题',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: getSize(.32),
				fontWeight: 'normal'
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			left: '2%',
			right: '4%',
			bottom: '3%',
			top: '24%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			margin: getSize(0.1),
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: false,
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.3)'
				},
			},
			axisTick: {
				show: false
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
			data: xdata
		},
		yAxis: {
			type: 'value',
			name: '',
			nameTextStyle: {
				fontSize: getSize(0.24),
				color: '#cccccc',
				padding: [0, getSize(0.3), 0, 0]
			},
			margin: getSize(0.1),
			splitNumber: 0,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(255, 255, 255, 0.3)'
				}
			},
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				show: false,
				lineStyle: {
					color: '#3196fa'
				},
			},
			axisTick: {
				show: false
			},
			axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					fontSize: getSize(0.24),
					color: '#fff',
				},
			},
		},
		legend: {
			show: true,
			data: legend_arr,
			textStyle: {
				color: '#fff'
			},
			top: '0%',
			// icon: "roundRect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
			itemWidth: 10, // 设置宽度
			itemHeight: 10, // 设置高度
			itemGap: 5 // 设置间距
		},
		series: [{
				name: legend_arr[0],
				type: 'line',
				smooth: true, //是否平滑曲线显示
				showSymbol: false, // 鼠标悬浮出现symbol
				// stack: '总量',
				data: ydata1_cov,
			},
			{
				name: legend_arr[1],
				type: 'line',
				smooth: true, //是否平滑曲线显示
				showSymbol: false, // 鼠标悬浮出现symbol
				// stack: '总量',
				data: ydata2
			},
			{
				name: legend_arr[2],
				type: 'line',
				smooth: true, //是否平滑曲线显示
				showSymbol: false, // 鼠标悬浮出现symbol
				// stack: '总量',
				data: ydata3
			}
		]
	};
	mychart.setOption(option);
}

// 折线图-8
var chart_line_8 = function(pxdata, pdata1, pdata2, pdata3) {
	// 初始化实例
	var myChart = echarts.init(document.getElementById('line-8'));
	var Xdata = pxdata || S_mock.xdata(20, 31, '日');
	var Ydata = pdata1 || S_mock.array(Xdata.length, 100, 200);
	var Ydata2 = pdata2 || S_mock.array(Xdata.length, 10, 100);
	var Ydata3 = pdata3 || S_mock.array(Xdata.length, 10, 100);
	var ynameArr = ['溶解氧', '水温', '叶绿素'];
	var legendArr = [];

	for(var key in ynameArr) {
		legendArr.push({
			name: ynameArr[key],
			textStyle: {
				color: '#fff'
			}
		})
	}
	var option = {
		tooltip: { //提示框组件
			show: true,
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			//formatter: '{a}</br>{b}:{c}'
		},
		grid: {
			left: '4%',
			top: "18%",
			right: '10%',
			bottom: '4%',
			containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
		},
		legend: {
			show: false,
			data: legendArr,
		},
		xAxis: [{ //直角坐标系 grid 中的 x 轴
			type: 'category', //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
			boundaryGap: false,
			axisLabel: {
				interval: 'auto',
				color: "#fff",
				fontSize: getSize(0.2),
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#FFFFFF",
				}
			},
			axisTick: {
				show: false,
			},
			data: Xdata,
		}],
		yAxis: [{ //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			min: 0, //坐标轴刻度最小值。
			name: '（ug/m³）',
			position: "left",
			nameTextStyle: {
				color: "#fff",
				fontSize: getSize(0.18),
			},
			axisLabel: {
				interval: 0,
				color: "#fff",
				fontSize: getSize(0.2),
			},
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					color: '#FFFFFF',
					opacity: 0.5,
					width: 1,
					type: 'dashed',
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#00F0FF",
				}
			},
			axisTick: {
				show: false
			},
		}, { //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			min: 0, //坐标轴刻度最小值。
			name: '（°C）',
			position: "right",
			nameTextStyle: {
				color: "#fff",
				fontSize: getSize(0.18),
			},
			axisLabel: {
				interval: 0,
				color: "#fff",
				fontSize: getSize(0.2),
			},
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: false,
				lineStyle: {
					color: '#FFFFFF',
					opacity: 0.5,
					width: 1,
					type: 'dashed',
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#76EAA5",
				}
			},
			axisTick: {
				show: false
			},
		}, { //直角坐标系 grid 中的 y 轴
			type: 'value', ////直角坐标系 grid 中的 x 轴
			min: 0, //坐标轴刻度最小值。
			name: '（mg/m³）',
			position: "right",
			offset: 50,
			nameTextStyle: {
				color: "#fff",
				fontSize: getSize(0.18),
			},
			axisLabel: {
				interval: 0,
				color: "#fff",
				fontSize: getSize(0.2),
			},
			splitNumber: 3,
			splitLine: { //坐标轴在 grid 区域中的分隔线
				show: false,
				lineStyle: {
					color: '#FFFFFF',
					opacity: 0.5,
					width: 1,
					type: 'dashed',
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#F2D147",
				}
			},
			axisTick: {
				show: false
			},
		}],
		series: [{
			name: ynameArr[0], //系列名称
			yAxisIndex: 0,
			type: 'line',
			smooth: true, //是否平滑曲线显示
			// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
			symbol: 'circle', //标记的图形。
			// symbolSize: 2,//标记的大小
			lineStyle: { //线条样式。
				normal: {
					color: "#65D3E8", // 线条颜色
					shadowOffsetY: 0,
					shadowColor: '#0AA2C6',
				},
			},
			label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				show: false,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#fff',
				}
			},
			itemStyle: { //折线拐点标志的样式。
				normal: {
					color: "#65D3E8",
					borderWidth: 1,
					borderColor: '#fff',
				}
			},
			tooltip: { //提示框
				show: true
			},
			areaStyle: { //区域填充样式
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0, //// 0% 处的颜色
							color: 'rgba(0, 240, 255, 0.4)'
						}, {
							offset: 0.4, //// 0% 处的颜色
							color: 'rgba(0, 240, 255, 0.2)'
						},
						{
							offset: 1,
							color: 'rgba(0, 240, 255, 0)'
						}
					], false),
					shadowColor: '#177477', //阴影颜色
					shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				}
			},
			data: Ydata
		}, {
			name: ynameArr[1], //系列名称
			yAxisIndex: 1,
			type: 'line',
			smooth: true, //是否平滑曲线显示
			// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
			showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
			symbol: 'circle', //标记的图形。
			// symbolSize: 2,//标记的大小
			lineStyle: { //线条样式。
				normal: {
					color: "#76EAA5", // 线条颜色
					shadowOffsetY: 0,
					shadowColor: '#0AD63E',
				},
			},
			label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				show: false,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#fff',
				}
			},
			itemStyle: { //折线拐点标志的样式。
				normal: {
					borderWidth: 1,
					borderColor: '#fff',
					color: "#76EAA5",
				}
			},
			tooltip: { //提示框
				show: true
			},
			areaStyle: { //区域填充样式
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0, //// 0% 处的颜色
							color: 'rgba(118, 234, 165, 0.4)'
						}, {
							offset: 0.4, //// 0% 处的颜色
							color: 'rgba(118, 234, 165, 0.2)'
						},
						{
							offset: 1,
							color: 'rgba(118, 234, 165, 0)'
						}
					], false),
					shadowColor: '#177477', //阴影颜色
					shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				}
			},
			data: Ydata2
		}, {
			name: ynameArr[2], //系列名称
			yAxisIndex: 2,
			type: 'line',
			smooth: true, //是否平滑曲线显示
			// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
			//showAllSymbol: true, //只在主轴为类目轴（axis.type 为 'category'）时有效
			symbol: 'circle', //标记的图形。
			// symbolSize: 2,//标记的大小
			lineStyle: { //线条样式。
				normal: {
					color: "#F2D147", // 线条颜色
					shadowOffsetY: 0,
					shadowColor: '#0AD63E',
				},
			},
			label: { //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
				show: false,
				formatter: '{c}',
				position: 'top',
				textStyle: {
					color: '#fff',
				}
			},
			itemStyle: { //折线拐点标志的样式。
				normal: {
					borderWidth: 1,
					borderColor: '#fff',
					color: "#F2D147",
				}
			},
			tooltip: { //提示框
				show: true
			},
			areaStyle: { //区域填充样式
				normal: {
					//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0, //// 0% 处的颜色
							color: 'rgba(242, 209, 71, 0.4)'
						}, {
							offset: 0.4, //// 0% 处的颜色
							color: 'rgba(242, 209, 71, 0.2)'
						},
						{
							offset: 1,
							color: 'rgba(242, 209, 71, 0)'
						}
					], false),
					shadowColor: '#177477', //阴影颜色
					shadowBlur: getSize(0.2) //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
				}
			},
			data: Ydata3
		}]
	};
	myChart.setOption(option);
}

//仪表盘-1
var chart_gauge_1 = function(pdata) {
	var mychart = echarts.init(document.getElementById('gauge-1'));
	var value_data = pdata || S_mock.number(10, 80);
	var gradientColor1 = [
		[
			1, new echarts.graphic.LinearGradient(
				0, 0, 1, 0, [{
						offset: 0,
						color: '#32c25a'
					},
					{
						offset: 0.25,
						color: '#8fcc35'
					},
					{
						offset: 0.5,
						color: '#facc14'
					},
					{
						offset: 0.75,
						color: '#fa8b38'
					},
					{
						offset: 1,
						color: '#df4b64'
					}
				]
			)
		]
	]
	var option = {
		series: [{
			name: '内圈小',
			type: 'gauge',
			pointer: {
				show: true,
				width: getSize(0.1),
				length: '60%'
			},
			itemStyle: {
				color: '#979797'
			},
			radius: '100%',
			min: 0,
			max: 100,
			startAngle: 180,
			endAngle: 0,
			splitNumber: 10,
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: gradientColor1,
					width: getSize(0.15)
				}

			},
			splitLine: { //分隔线样式
				show: false,
				length: getSize(0.1)
			},
			axisLabel: { //刻度标签
				show: true,
				formatter: function(para) {
					// console.log(para)
					if(para == 0 || para == 50 || para == 100) {
						return para;
					} else {
						return '';
					}
				},
				distance: getSize(0.2),
				fontSize: getSize(0.2),
				color: '#fff'
			},
			axisTick: { //刻度样式
				show: false,
			},
			detail: {
				// 其余属性默认使用全局文本样式，详见TEXTSTYLE
				padding: [getSize(0.2), 0, 0, 0],
				fontWeight: 'bold',
				formatter: '{a|' + value_data + '}{b| km/h}',
				textStyle: {
					rich: {
						a: {
							fontSize: getSize(0.44),
							color: '#facc14'
						},
						b: {
							fontSize: getSize(0.28),
							color: '#facc14'
						}
					}
				}
			},
			data: [{
				value: value_data,
				name: ''
			}]
		}]
	};
	mychart.setOption(option);
}
//仪表盘-2
var chart_gauge_2 = function(pdata) {
	var myChart = echarts.init(document.getElementById('gauge-2'));
	var option = {
		series: [{
			name: '空气优良率',
			type: 'gauge',
			min: 0,
			max: 100,
			center: ['50%', '50%'], // 默认全局居中
			splitNumber: 2,
			radius: '95%',
			startAngle: 200,
			endAngle: -20,
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.25, '#F1505E'],
						[0.5, '#EACC16'],
						[0.75, '#EACC16'],
						[1, '#37C358']
					],
					width: getSize(0.2),
				}
			},
			axisLabel: { // 坐标轴小标记
				show: true,
				distance: getSize(-0.3),
				textStyle: { // 属性lineStyle控制线条样式
					color: '#fff',
					fontSize: getSize(0.25),
				}
			},
			axisTick: { // 坐标轴小标记
				length: 0, // 属性length控制线长
				splitNumber: 11,
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					width: getSize(0.05),
				}
			},
			splitLine: { //橙色分割线-->
				show: false,
				length: 25,
				lineStyle: {
					width: 3,
					color: '#FCD209',
				}
			},
			itemStyle: { //指针颜色
				color: '#979797',
			},
			pointer: { //指针长短
				length: '70%',
				width: getSize(0.1),

			},
			detail: {
				formatter: '{value}%',
				offsetCenter: ['0', '70%'],
				color: '#20D4E7',
				fontWeight: 'bold',
				fontSize: getSize(0.35)
			},
			data: [{
				value: 80
			}]
		}, ]
	};
	//图表显示
	myChart.setOption(option)
}
//仪表盘-3
var chart_gauge_3 = function(pdata, pname) {
	// 初始化实例
	var gauge_val = {
		name: pname || "市一医院周边\n泊位指数",
		value: pdata || S_mock.number(10, 50)
	};
	if(gauge_val.value > 1) {
		var color_pct = parseFloat((gauge_val.value / 100).toFixed(2))
	} else {
		var color_pct = parseFloat(gauge_val.value)
	}
	var myChart = echarts.init(document.getElementById('gauge-3'));
	var option = {
		// backgroundColor: '#043654',
		series: [{
				name: '刻度',
				type: 'gauge',
				radius: '95%',
				min: 0,
				max: 100,
				splitNumber: 5, //刻度数量
				startAngle: 0,
				endAngle: 180,
				axisLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: [
							[1, 'rgba(0,0,0,0)']
						]
					}
				}, //仪表盘轴线
				axisLabel: {
					show: false,
					color: '#fff',
					distance: 10
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 10,
					lineStyle: {
						color: '#09C2FF',
						width: 1
					},
					length: -1
				}, //刻度样式
				splitLine: {
					show: true,
					length: -1,
					lineStyle: {
						color: '#09C2FF',
						width: 1
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			},
			{
				type: 'gauge',
				radius: '85%',
				center: ['50%', '50%'],
				splitNumber: 0, //刻度数量
				startAngle: 180,
				endAngle: 0,
				axisLine: {
					show: true,
					lineStyle: {
						width: 10,
						color: [
							[
								color_pct, new echarts.graphic.LinearGradient(
									0, 0, 1, 0, [{
											offset: 0,
											color: 'rgba(59,150,241,1)'
										},
										{
											offset: 1,
											color: 'rgba(59,150,241,0.2)'
										}
									]
								)
							],
							[
								1, 'rgba(65,62,84,0)'
							]
						]
					}
				},
				//分隔线样式。
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false
				},
				pointer: {
					show: false
				},
				title: {
					show: false,
					offsetCenter: [0, '-26%'], // x, y，单位px
					textStyle: {
						color: '#fff',
						fontSize: 14
					}
				},
				//仪表盘详情，用于显示数据。
				detail: {
					show: false,
					offsetCenter: [0, '16%'],
					color: '#ffffff',
					formatter: function(params) {
						return params
					},
					textStyle: {
						fontSize: 44
					}
				},
				data: [{
					value: 100
				}]
			},
			{
				type: 'gauge',
				radius: '60%',
				center: ['50%', '50%'],
				splitNumber: 0, //刻度数量
				startAngle: 180,
				endAngle: 0,
				axisLine: {
					show: true,
					lineStyle: {
						width: 150,
						color: [
							[
								1, new echarts.graphic.LinearGradient(
									0, 0, 1, 0, [{
											offset: 0,
											color: '#012242'
										},
										{
											offset: 1,
											color: '#01376D'
										}
									]
								)
							]
						]
					}
				},
				//分隔线样式。
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false
				},
				pointer: {
					show: false
				},
				title: {
					show: true,
					offsetCenter: [0, getSize(0.5)], // x, y，单位px
					textStyle: {
						color: '#fff',
						fontSize: getSize(0.24),
						lineHeight: getSize(0.35)
					}
				},
				//仪表盘详情，用于显示数据。
				detail: {
					show: true,
					offsetCenter: [0, getSize(-0.2)],
					color: '#00FCFF',
					formatter: function(params) {
						return params
					},
					textStyle: {
						fontSize: getSize(0.3)
					}
				},
				data: [gauge_val]
			}
		]
	};
	//图表显示
	myChart.setOption(option)
}
//仪表盘-4
var chart_gauge_4 = function(pdata, pname) {
	var gauge_val = {
		name: pname || "南北国际",
		value: pdata || S_mock.number(20, 60, true)
	};
	if(gauge_val.value > 1) {
		var color_pct = parseFloat((gauge_val.value / 100).toFixed(2))
	} else {
		var color_pct = parseFloat(gauge_val.value)
	}
	var mychart = echarts.init(document.getElementById('gauge-4'));
	var radius_arr = ['82%', '68%', '100%'];
	var center_arr = [
		['50%', '60%'],
		['50%', '60%'],
		['50%', '60%'],
		['50%', '62%'],
		['50%', '60%']
	];
	var option = {
		// backgroundColor: '#043654',
		series: [{
				name: '刻度',
				type: 'gauge',
				radius: radius_arr[0],
				center: center_arr[0],
				min: 0,
				max: 100,
				splitNumber: 20, //刻度数量
				startAngle: 190,
				endAngle: -10,
				axisLine: {
					show: false,
					lineStyle: {
						width: 2,
						color: [
							[1, '#69E2FF']
						]
					}
				}, //仪表盘轴线
				axisLabel: {
					show: false,
					color: '#fff',
					distance: 10
				}, //刻度标签。
				axisTick: {
					show: false,
					splitNumber: 10,
					lineStyle: {
						color: '#09C2FF',
						width: 1
					},
					length: -1
				}, //刻度样式
				splitLine: {
					show: false,
					length: -1,
					lineStyle: {
						color: '#09C2FF',
						width: 1
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			},
			{
				name: '刻度2',
				type: 'gauge',
				radius: radius_arr[1],
				center: center_arr[1],
				min: 0,
				max: 100,
				splitNumber: 10, //刻度数量
				startAngle: -10,
				endAngle: 190,
				axisLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: [
							[1, 'rgba(0,0,0,0)']
						]
					}
				}, //仪表盘轴线
				axisLabel: {
					show: false,
					color: '#fff',
					distance: 10
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 5,
					lineStyle: {
						color: '#32E7FB',
						width: 1
					},
					length: 5
				}, //刻度样式
				splitLine: {
					show: true,
					length: 5,
					lineStyle: {
						color: '#32E7FB',
						width: 1
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			},
			{
				type: 'gauge',
				radius: radius_arr[2],
				center: center_arr[2],
				splitNumber: 0, //刻度数量
				startAngle: 190,
				endAngle: -10,
				axisLine: {
					show: true,
					lineStyle: {
						width: 10,
						color: [
							[
								color_pct, new echarts.graphic.LinearGradient(
									0, 0, 1, 0, [{
											offset: 0,
											color: 'rgba(59,150,241,1)'
										},
										{
											offset: 1,
											color: 'rgba(59,150,241,0.2)'
										}
									]
								)
							],
							[
								1, 'rgba(65,62,84,0)'
							]
						]
					}
				},
				//分隔线样式。
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false
				},
				pointer: {
					show: false
				},
				title: {
					show: false,
					offsetCenter: [0, '-26%'], // x, y，单位px
					textStyle: {
						color: '#fff',
						fontSize: 14
					}
				},
				//仪表盘详情，用于显示数据。
				detail: {
					show: false,
					offsetCenter: [0, '16%'],
					color: '#ffffff',
					formatter: function(params) {
						return params
					},
					textStyle: {
						fontSize: 44
					}
				},
				data: [{
					value: 100
				}]
			},
			{
				type: 'gauge',
				radius: '0%',
				center: center_arr[3],
				splitNumber: 0, //刻度数量
				startAngle: 180,
				endAngle: 0,
				axisLine: {
					show: true,
					lineStyle: {
						width: 150,
						color: [
							[
								1, new echarts.graphic.LinearGradient(
									0, 0, 1, 0, [{
											offset: 0,
											color: '#012242'
										},
										{
											offset: 1,
											color: '#01376D'
										}
									]
								)
							]
						]
					}
				},
				//分隔线样式。
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false
				},
				axisTick: {
					show: false
				},
				pointer: {
					show: false
				},
				title: {
					show: true,
					offsetCenter: [0, getSize(0.5)], // x, y，单位px
					textStyle: {
						color: '#fff',
						fontSize: getSize(0.24),
						lineHeight: getSize(0.35),
						borderWidth: 1,
						borderColor: '#0A6ED7',
						borderRadius: 4,
						padding: [5, 10, 3, 10]
					}
				},
				//仪表盘详情，用于显示数据。
				detail: {
					show: true,
					offsetCenter: [0, getSize(-0.2)],
					color: '#0AF9BE',
					formatter: function(params) {
						return params + '%'
					},
					textStyle: {
						fontSize: getSize(0.6),
						fontFamily: "DS-DIGI",
						fontWeight: 'bold',
						textShadowColor: 'rgba(8,142,127,0.8)',
						textShadowBlur: 10
					}
				},
				data: [gauge_val]
			}
		]
	};
	mychart.setOption(option);
}

//仪表盘-5
var chart_gauge_5 = function(pdata, pname) {
	var gauge_val = {
		name: pname || "南北国际",
		value: pdata || S_mock.number(20, 100, true)
	};
	if(gauge_val.value > 1) {
		var color_pct = parseFloat((gauge_val.value / 100).toFixed(2))
	} else {
		var color_pct = parseFloat(gauge_val.value)
	}
	var mychart = echarts.init(document.getElementById('gauge-5'));
	var radius_arr = ['82%', '68%', '100%'];
	var center_arr = [
		['50%', '50%'],
		['50%', '50%'],
		['50%', '50%'],
		['50%', '50%'],
		['50%', '50%']
	];
	var dataArr = gauge_val.value;
	var colorSet = {
		color: '#468EFD'
	};
	var option = {
		// backgroundColor: '#043654',
		backgroundColor: '',
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
				name: "",
				type: "gauge",
				center: ['50%', '50%'],
				radius: '55%',
				splitNumber: 10,
				axisLine: {
					lineStyle: {
						color: [
							[dataArr / 100, new echarts.graphic.LinearGradient(
								0, 0, 1, 0, [{
										offset: 0,
										color: '#0A52CA',
									},
									{
										offset: 1,
										color: '#02E1EF',
									}
								]
							)],
							[1, "#14306F"]
						],
						width: 8
					}
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,

				},
				splitLine: {
					show: false,
				},
				itemStyle: {
					show: false,
				},
				detail: {
					show: true,
					formatter: dataArr,
					offsetCenter: [0, 16],
					textStyle: {
						padding: [0, 0, 0, 0],
						fontSize: getSize(0.48),
						fontWeight: '700',
						fontFamily: 'DS-DIGI-1',
						color: '#15FEFB'
					}
				},
				title: { //标题
					show: true,
					offsetCenter: [0, 36], // x, y，单位px
					textStyle: {
						color: "#15FEFB",
						fontSize: getSize(0.3), //表盘上的标题文字大小
						fontWeight: 400,
						fontFamily: 'PingFangSC'
					}
				},
				data: [gauge_val],
				pointer: {
					show: true,
					length: '50%',
					radius: '30%',
					width: 4, //指针粗细
				},
				animationDuration: 4000,
			},
			{
				name: '外部刻度',
				type: 'gauge',
				center: ['50%', '50%'],
				radius: '65%',
				min: 0, //最小刻度
				max: 100, //最大刻度
				splitNumber: 7, //刻度数量
				startAngle: 225,
				endAngle: -45,
				axisLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: [
							[1, 'rgba(0,0,0,0)']
						]
					}
				}, //仪表盘轴线
				axisLabel: {
					show: false,
					color: '#4d5bd1',
					distance: 25,
					formatter: function(v) {
						switch(v + '') {
							case '0':
								return '0';
							case '10':
								return '10';
							case '20':
								return '20';
							case '30':
								return '30';
							case '40':
								return '40';
							case '50':
								return '50';
							case '60':
								return '60';
							case '70':
								return '70';
							case '80':
								return '80';
							case '90':
								return '90';
							case '100':
								return '100';
						}
					}
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 8,
					lineStyle: {
						color: '#3BF6A9', //用颜色渐变函数不起作用
						width: 0.5,
					},
					length: -7
				}, //刻度样式
				splitLine: {
					show: true,
					length: -11,
					lineStyle: {
						width: 0.5,
						color: '#3BF6A9', //用颜色渐变函数不起作用
					}
				}, //分隔线样式
				detail: {
					show: false,
				},
				pointer: {
					show: false
				}
			},
		]
	};
	mychart.setOption(option);
}
//仪表盘-6
var chart_gauge_6 = function(pdata, pname) {
	var colorSet = {
		color: '#468EFD'
	};
	var gauge_val = {
		name: pname || "示例文字",
		value: pdata || S_mock.number(20, 100, true)
	};

	var mychart = echarts.init(document.getElementById('gauge-6'));
	var option = {
		backgroundColor: '#0E1327',
		tooltip: {
			formatter: "{b} : {c}%"
		},

		series: [{
				name: "",
				type: "gauge",
				// center: ['20%', '50%'],
				radius: '60%',

				splitNumber: 10,
				axisLine: {
					lineStyle: {
						color: [
							[gauge_val.value / 100, colorSet.color],
							[1, "#111F42"]
						],
						width: getSize(0.1)
					}
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,

				},
				splitLine: {
					show: false,
				},
				itemStyle: {
					show: false,
				},
				detail: {
					formatter: function(value) {
						if(value !== 0) {
							// var num = Math.round(value);
							return value.toFixed(2) + "%";
						} else {
							return 0;
						}
					},
					offsetCenter: [0, 82],
					textStyle: {
						padding: [0, 0, 0, 0],
						fontSize: 18,
						fontWeight: '700',
						color: colorSet.color
					}
				},
				title: { //标题
					show: true,
					offsetCenter: [0, 46], // x, y，单位px
					textStyle: {
						color: "#fff",
						fontSize: 14, //表盘上的标题文字大小
						fontWeight: 400,
						fontFamily: 'PingFangSC'
					}
				},
				data: [gauge_val],
				pointer: {
					show: true,
					length: '75%',
					radius: '20%',
					width: getSize(0.1), //指针粗细
				},
				animationDuration: 4000,
			},
			{
				name: '外部刻度',
				type: 'gauge',
				//  center: ['20%', '50%'],
				radius: '80%',
				min: 0, //最小刻度
				max: 100, //最大刻度
				splitNumber: 10, //刻度数量
				startAngle: 225,
				endAngle: -45,
				axisLine: {
					show: true,
					lineStyle: {
						width: 1,
						color: [
							[1, 'rgba(0,0,0,0)']
						]
					}
				}, //仪表盘轴线
				axisLabel: {
					show: true,
					color: '#4d5bd1',
					distance: getSize(0.3),
					formatter: function(v) {
						switch(v + '') {
							case '0':
								return '0';
							case '10':
								return '10';
							case '20':
								return '20';
							case '30':
								return '30';
							case '40':
								return '40';
							case '50':
								return '50';
							case '60':
								return '60';
							case '70':
								return '70';
							case '80':
								return '80';
							case '90':
								return '90';
							case '100':
								return '100';
						}
					}
				}, //刻度标签。
				axisTick: {
					show: true,
					splitNumber: 7,
					lineStyle: {
						color: colorSet.color, //用颜色渐变函数不起作用
						width: 1,
					},
					length: -getSize(0.13)
				}, //刻度样式
				splitLine: {
					show: true,
					length: -getSize(0.2),
					lineStyle: {
						color: colorSet.color, //用颜色渐变函数不起作用
					}
				}, //分隔线样式
				detail: {
					show: false
				},
				pointer: {
					show: false
				}
			},
		]
	};
	mychart.setOption(option);
}
//仪表盘-7
var chart_gauge_7 = function(pdata, pname) {
	var getvalue = [pdata || 50];
	var name = pname || '综合得分';
	var mychart = echarts.init(document.getElementById('gauge-7'));
	var option = {
		title: {
			text: getvalue + '分',
			textStyle: {
				color: '#28BCFE',
				fontSize: 18
			},
			subtext: name,
			subtextStyle: {
				color: '#fff',
				fontSize: 14
			},
			itemGap: 10,
			left: 'center',
			top: '43%'
		},
		tooltip: {
			formatter: function(params) {
				return '<span style="color: #fff;">' + name + '：' + getvalue + '分</span>';
			}
		},
		angleAxis: {
			max: 100,
			clockwise: true, // 逆时针
			// 隐藏刻度线
			show: false
		},
		radiusAxis: {
			type: 'category',
			show: true,
			axisLabel: {
				show: false,
			},
			axisLine: {
				show: false,

			},
			axisTick: {
				show: false
			},
		},
		polar: {
			center: ['50%', '50%'],
			radius: '150%' //图形大小
		},
		series: [{
			type: 'bar',
			data: getvalue,
			showBackground: true,
			backgroundStyle: {
				color: '#BDEBFF',
			},
			coordinateSystem: 'polar',
			roundCap: true,
			barWidth: 30,
			itemStyle: {
				normal: {
					opacity: 1,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#25BFFF'
					}, {
						offset: 1,
						color: '#5284DE'
					}]),
					shadowBlur: 5,
					shadowColor: '#2A95F9',
				}
			},
		}]
	};
	mychart.setOption(option);
}
//水滴图-1
var chart_water_1 = function(pdata) {
	var mychart = echarts.init(document.getElementById('water-1'));
	var value = pdata || 0.7152;
	var data = [];
	data.push(value);
	var option = {
		series: [{
			type: 'liquidFill',
			data: data,
			radius: '80%',
			amplitude: '10%',
			waveLength: '100%',
			color: '#0090FF',
			outline: {
				show: true,
				borderDistance: 4,
				itemStyle: {
					color: 'transparent',
					borderColor: '#0090FF',
					borderWidth: 1,
					shadowBlur: 0,
					shadowColor: ' rgba(255,0,0,1)'
				}
			},
			backgroundStyle: {
				color: 'transparent'
			},
			label: {
				show: true,
				formatter: (value * 100) + '%',
				fontSize: getSize(0.5),
				color: '#facc14',
				insideColor: '#facc14',
				fontWeight: 'normal',
			},
			itemStyle: {
				shadowBlur: 0,
				color: '#0090FF',
			}
		}],

	}
	mychart.setOption(option);
}
var chart_water_2 = function(pvalue) {
	var myChart = echarts.init(document.getElementById('water-2'));
	var value = pvalue || 0.5;
	var data = [];
	data.push(value);
	var option = {
		series: [{
			type: "liquidFill",
			waveAnimation: true,
			animation: false,
			radius: "50%",
			center: ["50%", "50%"],
			data: data,
			itemStyle: {
				shadowBlur: 0,
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 1,
							color: "rgba(255,200,111,1)",
						},
						{
							offset: 0.5,
							color: "rgba(255,200,111,0.7)",
						},
					],
					globalCoord: false,
				},
			},
			backgroundStyle: {
				borderWidth: 2,
				borderColor: "#fff",
				color: "#fff",
			},
			outline: {
				borderDistance: 2,
				itemStyle: {
					borderWidth: 6,
					borderColor: "#f2f7fb",
					shadowBlur: 0,
				},
			},
			label: {
				show: true,
				formatter: (value * 100) + '%',
				fontSize: getSize(0.5),
				color: '#facc14',
				insideColor: '#facc14',
				fontWeight: 'normal',
			},
		}, ],
	};
	myChart.setOption(option);
}
//雷达图-1
var chart_radar_1 = function(pxdata, pydata) {
	var myChart = echarts.init(document.getElementById('radar-1'));
	var xdata = pxdata || ['监测', '年代', '体系', '巡检'];
	var ydata = pydata || S_mock.array(4, 50, 90);
	var indicator_arr = [];
	var avg = (getArrSum(ydata) / ydata.length).toFixed(2);
	for(const key in xdata) {
		indicator_arr.push({
			text: xdata[key],
			max: 100
		})
	}
	var option = {
		legend: {
			show: false,
		},
		title: {
			// text: '总分',
			subtext: avg,
			x: 'center',
			top: '40%',
			subtextStyle: {
				color: '#00fff6',
				fontWeight: 'normal',
				fontSize: getSize(0.48),
			}
		},
		// tooltip: {},
		radar: [{
			center: ['50%', '50%'],
			radius: '55%',
			indicator: indicator_arr,
			startAngle: 90, //起始角度
			splitNumber: 4, //指示器轴的分割段数。
			// shape: 'circle',//雷达图绘制类型
			name: { //雷达图每个指示器名称的配置项。
				formatter: '{value}',
				textStyle: {
					color: '#fff'
				},
				fontSize: getSize(0.3)
			},
			nameGap: getSize(0.2),
			axisLine: {
				show: true,
				lineStyle: {
					color: '#217ed2'
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线
				lineStyle: {
					color: '#217ed2',
					width: 1,
				}
			},
			splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
				show: false,
				areaStyle: {
					color: ['#2c2c2d', '#333334', '#3a3a3b', '#333334']
				}
			},
		}],
		series: [{
			name: '雷达图',
			type: 'radar',
			data: [{
				value: ydata,
				// name: '各项得分',
				symbol: 'none',
				type: 'radar',
				itemStyle: {
					normal: {
						color: 'rgba(21, 105, 176, 1)'
					}
				},
				lineStyle: {
					normal: {
						width: 1,
						opacity: 0
					}
				},
				areaStyle: {
					normal: {
						color: '#1568b0',
						opacity: 0.6
					}
				}
			}]
		}]
	}
	//图表显示
	myChart.setOption(option);
}
//雷达图-2
var chart_radar_2 = function(pxdata, pydata1, pydata2) {
	var mychart = echarts.init(document.getElementById('radar-2'));
	var color_arr = ['#04FE9C', '#FFF500'];
	var xdata = pxdata || ['规上工业', '社零', '时尚制造业', '数字经济', '高端装备制造业', '零售业', '批发业', '营利性服务业']
	var legend_arr = pxdata || ['当月', '累计'];
	var ydata1 = pydata1 || S_mock.array(xdata.length, 50, 60);
	var ydata2 = pydata2 || S_mock.array(xdata.length, 70, 80);
	var indicator_arr = [];
	for(const key in xdata) {
		indicator_arr.push({
			name: xdata[key],
			max: 100
		})
	}
	var option = {
		color: color_arr,
		tooltip: {
			show: false,
			trigger: 'item'
		},
		grid: {
			top: '23%'
		},
		// backgroundColor: '#17316a',
		legend: {
			show: true,
			padding: [3, 5],
			right: 'center',
			y: '20',
			bottom: 30,
			center: 0,
			itemWidth: 14,
			itemHeight: 14,
			icon: 'circle',
			itemGap: 21,
			orient: "horizontal",
			data: legend_arr,
			textStyle: {
				fontSize: 14,
				color: '#fff'
			},
		},
		radar: {
			// shape: 'circle',
			name: {
				formatter: function(value, indicator) {
					var value1 = ydata1[xdata.indexOf(value)];
					var value2 = ydata2[xdata.indexOf(value)];
					return value + '\n' + '{a|' + value1 + '}{b|/' + value2 + '家}';
				},
				textStyle: {
					color: '#ffffff',
					fontSize: getSize(0.3),
				},
				rich: {
					n: {

					},
					a: {
						fontSize: getSize(0.3),
						color: '#00FF9C'
					},
					b: {
						fontSize: getSize(0.3),
						color: '#FACC14'
					}
				}
			},
			radius: '50%',
			center: ['50%', '55%'],
			axisLine: {
				lineStyle: {
					color: '#00CCFF'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#00CCFF'
				}
			},
			splitArea: {
				show: false
			},
			indicator: indicator_arr
		},
		series: [{
			name: '',
			type: 'radar',
			data: [{
					value: ydata1,
					name: legend_arr[0],
					areaStyle: {
						normal: {
							color: '#04FE9C',
							opacity: 0.2
						}
					}
				},
				{
					value: ydata2,
					name: legend_arr[1],
					areaStyle: {
						normal: {
							color: '#FFF500',
							opacity: 0.2
						},
					},
				}
			]
		}]
	}
	mychart.setOption(option);
}
//雷达图-3
var chart_radar_3 = function(pxdata, pydata1, pydata2) {
	var mychart = echarts.init(document.getElementById('radar-3'));
	var color_arr = ['#B2BF52'];
	var xdata = pxdata || ['任务督查', '项目督查', '批示督查']
	var ydata1 = pydata1 || S_mock.array(xdata.length, 1600, 1700);
	var indicator_arr = [];
	var max_val = Math.max.apply(null, ydata1)
	for(const key in xdata) {
		indicator_arr.push({
			name: xdata[key],
			max: max_val * 1.3
		})
	}
	var option = {
		color: color_arr,
		tooltip: {
			show: false,
			trigger: 'item'
		},
		grid: {
			top: '23%'
		},
		// backgroundColor: '#17316a',
		radar: {
			// shape: 'circle',
			name: {
				formatter: function(value, indicator) {
					var value1 = ydata1[xdata.indexOf(value)];
					return value + '{a|' + value1 + '}';
				},
				textStyle: {
					color: '#ffffff',
					fontSize: getSize(0.3),
				},
				rich: {
					a: {
						fontSize: getSize(0.3),
						color: '#8DF1FF'
					},
				}
			},
			radius: '50%',
			center: ['50%', '55%'],
			axisLine: {
				lineStyle: {
					color: '#00CCFF'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#00CCFF'
				}
			},
			axisLabel: {
				show: false,
				fontSize: getSize(0.3),
				color: "#fff"
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: ['#033363', '#134266']
				}
			},
			indicator: indicator_arr
		},
		series: [{
			name: '',
			type: 'radar',
			data: [{
				value: ydata1,
				name: '',
				areaStyle: {
					normal: {
						color: '#FFF000',
						opacity: 0.2
					}
				}
			}]
		}]
	}
	mychart.setOption(option);
}

var pie_3d = function(pxdata, pydata) {
	var name_arr = pxdata || ['已召开', '剩余'];
	var data_arr = pydata || [22, 70];
	var color_arr = ['#2397DF', '#13D27F'];
	var seri_data = [];
	for(var key in name_arr) {
		seri_data.push([name_arr[key], data_arr[key]])
	}
	var chart = Highcharts.chart('pie_3d', {
		colors: color_arr,
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 60,
				beta: 0,
				fitToPlot: true,
			},
			backgroundColor: 'transparent'
		},
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 15,
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.1f}%'
				},
				showInLegend: true
			}
		},
		legend: {
			enabled: false,
			verticalAlign: 'top',
			align: 'center',
			layout: 'horizontal',
			squareSymbol: false,
			symbolHeight: 10,
			symbolWidth: 10,
			symbolRadius: 10,
			labelFormatter: function() {
				return this.name + ' ' + this.y + ' 件';
			},
			itemStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: getSize(.24)
			},
			itemHoverStyle: {
				color: '#ccc'
			}
		},
		series: [{
			type: 'pie',
			name: '',
			center: ["50%", "50%"],
			data: seri_data,
			size: '190%',
			dataLabels: {
				distance: 10,
				enabled: false,
				shadow: false,
				borderWidth: 0,
				color: '#fff'
			}
		}]
	});
};

var pie_3d_2 = function(pxdata, pydata, punit) {
	var name_arr = pxdata || ['环境保护类', '城乡建设类', '交通运输类', '政法类'];
	var data_arr = [30, 15, 30, 15];
	var color_arr = ['#fdb301', '#00a0ff', '#00fa87', '#00f3ff'];
	var dw = punit || '人';
	var seri_data = [];
	for(var key in name_arr) {
		seri_data.push([name_arr[key], data_arr[key]])
	}
	var chart = Highcharts.chart('pie_3d-2', {
		colors: color_arr,
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 70,
				beta: 0,
				fitToPlot: true,
			},
			backgroundColor: 'transparent'
		},
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			backgroundColor: 'rgba(0,0,0,0.8)',
			borderColor: 'rgba(0,0,0,0.8)',
			style: {
				color: '#fff',
			},
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 30,
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.1f}%'
				},
				showInLegend: true
			}
		},
		legend: {
			verticalAlign: 'top',
			y: 5,
			//align: 'right',
			//layout: 'vertical',
			squareSymbol: false,
			symbolHeight: 10,
			symbolWidth: 15,
			symbolRadius: 4,
			labelFormatter: function() {
				//return this.name + ' ' + this.y + dw;
				return this.name;
			},
			itemStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: getSize(0.24)
			},
			itemHoverStyle: {
				color: '#ccc'
			}
		},
		series: [{
			type: 'pie',
			name: '',
			center: ["50%", "50%"],
			data: seri_data,
			size: '180%',
			dataLabels: {
				distance: 10,
				enabled: true,
				shadow: false,
				borderWidth: 0,
				color: '#FFFC00'
			}
		}]
	});
}

var pie_3d_3 = function(dom, pxdata, pydata) {
	var name_arr = pxdata || ['未述职', '已述职'];
	var data_arr = pydata || [22, 70];
	var color_arr = ['#2397DF', '#13D27F'];
	var seri_data = [];
	for(var key in name_arr) {
		seri_data.push([name_arr[key], data_arr[key]])
	}
	var chart = Highcharts.chart(dom, {
		colors: color_arr,
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 67,
				beta: 0,
				fitToPlot: true,
			},
			backgroundColor: 'transparent'
		},
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			enabled: true,
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 30,
				dataLabels: {
					enabled: true,
					//format: '{his.series.name}: <b>{point.percentage:.1f}%</b>'
					formatter: function() {
						//console.log(this)
						return this.key + ' <br/>' + ((this.y / this.total) * 100).toFixed(1) + "%"
					},
					style: {
						fontWeight: 'normal',
						lineHeight: getSize(0.55),
						fontSize: getSize(0.4)
					},
				},
				showInLegend: true
			}
		},
		legend: {
			enabled: false,
			verticalAlign: 'middle',
			align: 'right',
			layout: 'vertical', // vertical,horizontal
			squareSymbol: false,
			symbolHeight: getSize(.4),
			symbolWidth: 5,
			symbolRadius: 0,
			userHTML: true,
			labelFormatter: function() {
				return '<span class="chart_name">' + this.name + '</span>' + ' <span class="chart_num">' + this.y + '</span>';
			},
			itemStyle: {
				color: '#FACC14',
				fontWeight: 'normal',
				fontSize: getSize(0.36)
			},
			itemHoverStyle: {
				color: '#ccc'
			}
		},
		series: [{
			type: 'pie',
			name: '',
			center: ["50%", "50%"],
			data: seri_data,
			size: '150%',
			dataLabels: {
				distance: 20,
				enabled: true,
				shadow: false,
				borderWidth: 0,
				color: '#fff'
			}
		}]
	});
};

$(function() {
	// 进度条
	$('.progress-item').each(function() {
		var percent = $(this).attr('data-percent');
		$(this).find('p').width(percent);
	});
	$('.percent-bar').each(function() {
		var percent = $(this).attr('data-percent');
		$(this).find('p').height(percent);
	});

	var getSize = function(v) {
		var fz = $('html').css('fontSize').replace(/px/, '');
		return v * fz;
	};
	var random = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	//获取数组的和
	var getArrSum = function(arr) {
		return eval(arr.join("+"));
	};
	//圆形进度条
	//文档地址 https://github.com/TheBolliwood/circleChart
	!(function() {
		$("#circle-1").circleChart({
			size: 150,
			color: "#0078D2",
			backgroundColor: "#fff",
			backgroundFix: true,
			value: 60.45,
			startAngle: 180,
			text: 0,
			textSize: '.4rem',
			onDraw: function(el, circle) {
				$(".circleChart_text").css('color', '#fff')
				$(".circleChart_text", el).html((circle.value).toFixed(2) + '%');
			}
		});
	})();
	//bootstrap进度条
	$('.progress-bar').each(function() {
			var percent = $(this).attr('aria-valuenow');
			$(this).css('width', percent + '%')
		})

		//左侧上方图表 
		//插件文档地址 http://www.jq22.com/jquery-info4495
		!(function() {
			var i = 0; //计数器
			var trueValue = 99.3
			$('#chart-1').radialIndicator({
				barColor: '#3196FA',
				fontColor: '#facc14',
				barWidth: 10,
				radius: 90,
				initValue: trueValue,
				roundCorner: true,
				percentage: true,
				format: function(value) {
					i = i + 1;
					if(i == 2) {
						return trueValue; //当前数值
					}
					return trueValue.toFixed(2);
				}
			});
		})();

	//3d饼图-1
	!(function() {
		var chart = Highcharts.chart('bing-1', {
			colors: ['#1976D2', '#0559AD'],
			chart: {
				type: 'pie',
				options3d: {
					enabled: true,
					alpha: 40,
					beta: 0,
					fitToPlot: true,
					viewDistance: 150
				},
				margin: [0, 0, 0, 0],
				backgroundColor: 'transparent'
			},
			credits: {
				enabled: false
			},
			title: {
				enabled: false,
				text: ''
			},
			tooltip: {
				enabled: false,
				pointFormat: '{series.name} <b>{point.percentage:.1f}</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					depth: 35,
					depth: 20,
					dataLabels: {
						enabled: false,
						format: '{point.name}'
					}
				}
			},
			xAxis: {
				labels: {
					enabled: false
				}
			},
			series: [{
				type: 'pie',
				size: '110%',
				name: '',
				data: [
					['营商环境整体得分', 76.71],
					['', 23.29]
				]
			}]
		});
	})();
	//3d饼图-2
	!(function() {
		var chart = Highcharts.chart('bing-2', {
			colors: ['#ffa800', '#00f0ff', '#3196fa'],
			chart: {
				type: 'pie',
				options3d: {
					enabled: true,
					alpha: 45,
					beta: 0,
					fitToPlot: true,
				},
				backgroundColor: 'transparent'
			},
			credits: {
				enabled: false
			},
			// title: {
			//     floating: true,
			//     text: '圆心显示的标题'
			// },
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					depth: 15,
					innerSize: 100, //中间挖空
					dataLabels: {
						enabled: true,
						format: '{point.percentage:.1f}%'
					},
					showInLegend: true
				}
			},
			legend: {
				squareSymbol: false,
				symbolWidth: 25,
				symbolRadius: 0,
				itemStyle: {
					color: '#ccc',
					fontWeight: 'normal',
					fontSize: getSize(.25)
				}
			},
			series: [{
				type: 'pie',
				name: '',
				data: [
					['项目1', 40],
					['项目2', 30],
					['其他', 30]
				],
				dataLabels: {
					enabled: true,
					shadow: false,
					borderWidth: 0,
					color: '#fff'
				}
			}]
		});
	})();

	//圆形进度条
	//文档地址 https://github.com/TheBolliwood/circleChart
	!(function() {
		$("#circle-1").circleChart({
			size: 150,
			color: "#0078D2",
			backgroundColor: "#fff",
			backgroundFix: true,
			value: 60.45,
			startAngle: 180,
			text: 0,
			textSize: '.4rem',
			onDraw: function(el, circle) {
				$(".circleChart_text").css('color', '#fff')
				$(".circleChart_text", el).html((circle.value).toFixed(2) + '%');
			}
		});
	})();
	//bootstrap进度条
	$('.progress-bar').each(function() {
		var percent = $(this).attr('aria-valuenow');
		$(this).css('width', percent + '%')
	})

	//步骤条
	$('.box').step({
		stepDirection: 'x',
		showStepButton: false,
		stepCount: 5,
		stepTitles: ['标题一', '标题二', '标题三', '标题四', '标题5'],
	});
	$('.box2').step({
		stepDirection: 'y',
		showStepButton: false,
		stepCount: 3,
		stepTitles: ['标题一', '标题二', '标题三'],
	});
	$('.eis-step-icon').click(function() {
		var index = $(this).closest('.eis-form-step').index()
		console.log(index);
	})

});