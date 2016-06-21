(function($) {

	var chartData = null;

	//初始化Swiper
	function initSwiper() {
		var mySwiper = new Swiper ('.swiper-container', {
    		direction: 'horizontal',
    		loop: true,
    		speed: 3000,
    		// autoplay: 5000,
		});
	}

	function initOtaChart() {
		var otaPvChart = echarts.init(document.getElementById('ota_pv_uv'), 'dark');
		var otaPvOption = {
			    title: {
			        text: 'PC&H5浏览趋势',
			        textStyle: {
			        	color: '#fff'
			        },
			        top: "20px",
			        left: "20px"
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['PC-UV','PC-PV','H5-PV','H5-UV'],
			        textStyle: {
			        	color: '#fff'
			        },
			        left: "180px",
			        top: "22px"
			    },
			    grid: {
			        left: '4%',
			        right: '3%',
			        top: "70px",
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['周一','周二','周三','周四','周五','周六','周日'],
			        axisLabel: {
			        	textStyle: {
			        		color:'#fff'
			        	}
			        }
			    },
			    yAxis: {
			        type: 'value',
			        axisLabel: {
			        	textStyle: {
			        		color:'#fff'
			        	}
			        }
			    },
			    series: [
			        {
			            name:'PC-UV',
			            type:'line',
			            stack: '总量',
			            lineStyle: {
			            	normal: {
			            		color: '#62b0d9'
			            	}
			            },
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'PC-PV',
			            type:'line',
			            stack: '总量',
			            lineStyle: {
			            	normal: {
			            		color: '#83d7c0'
			            	}
			            },
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'H5-UV',
			            type:'line',
			            stack: '总量',
			            lineStyle: {
			            	normal: {
			            		color: '#ffc875'
			            	}
			            },
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'H5-PV',
			            type:'line',
			            stack: '总量',
			            lineStyle: {
			            	normal: {
			            		color: '#ff9f75'
			            	}
			            },
			            data:[320, 332, 301, 334, 390, 330, 320]
			        }
			    ]
		};

		otaPvChart.setOption(otaPvOption);


		var otaMonthChart = echarts.init(document.getElementById('ota_month_chart'), 'dark');
		var OtaMonthOption  = {	
			    title: {
			        text: '近30天趋势',
			        textStyle: {
			        	color: '#fff'
			        },
			        top: "20px",
			        left: "20px"
			    },
			    tooltip: {
			        trigger: 'axis'
			    },

			    legend: {
			        data:['支付订单金额', '支付订单数'],
			        textStyle: {
			        	color: '#fff'
			        },
			        left: "180px",
			        top: "22px"
			    },
			    grid: {
			        left: '4%',
			        right: '3%',
			        top: "70px",
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: [
			        {
			            type: 'category',
			            axisLabel: {
			        		textStyle: {
			        			color:'#fff'
			        		}
			        	},
			            data: ['5/19','5/20','5/21','5/22','5/23','5/24','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16']
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            // name: '支付订单数',
			            min: 0,
			            max: 100,
			            interval: 10,
			            axisLabel: {
			                formatter: '{value}',
			                textStyle: {
			        			color:'#fff'
			        		}
			            }
			        },
			        {
			            type: 'value',
			            // name: '支付订单金额',
			            min: 0,
			            max: 100,
			            interval: 10,
			            axisLabel: {
			                formatter: '{value}万',
			                textStyle: {
			                	color: "#fff"
			                }
			            }
			        }
			    ],
			    series: [
			        {
			            name:'支付订单金额',
			            type:'bar',
			            barWidth: 5,
			            itemStyle: {
			            	normal: {
			            		color: "#f3595b"
			            	}
			            },
			            data:[20, 21, 22, 28, 30, 36, 42, 45, 78, 50, 60, 70,72,79,82,86,88,74,76,82,89,94,78,86,76,82,89,94,78,86]
			        },
			 
			        {
			            name:'支付订单数',
			            type:'line',
			            yAxisIndex: 1,
			            lineStyle: {
			            	normal: {
			            		color: "#febc72"
			            	}
			            },
			            data:[18, 21, 22, 26, 28, 34, 38, 40, 67, 53, 58, 68,71,73,78,81,68,56,78,82,85,89,78,86,76,82,89,94,78,86]
			        }
			    ]
		};


		otaMonthChart.setOption(OtaMonthOption);

		var otaCorporationChart = echarts.init(document.getElementById('ota_corporation_chart'), 'dark');
		var otaCorporationOption = {
		    animation: true,
		    title: {
		        text: '康辉各公司数据',
		        textStyle: {
		        	color: "#fff"
		        },
		        top: "20px",
			    left: "20px"
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        data: ['2016年'],
		        textStyle: {
		        	color:"#fff"
		        },
		        top: "25px",
			    left: "180px"
		    },
		    grid: {
		        left: '3%',
		        right: '6%',
		        top: "70px",
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        boundaryGap: [0, 0.01],
		        min: 0,
		        max: 10000,
		        axisLabel: {
		                formatter: '{value}万',
		                textStyle: {
		                	color: "#fff"
		                }
		            }
		    },
		    yAxis: {
		        type: 'category',
		        axisLabel: {
		        	textStyle: {
		        		color:"#fff"
		        	}
		        },
		        data: ['重庆', '广西', '辽宁', '上海', '无锡', '湖南', '浙江', '江苏', '广东', '河北', '河南', '黑龙江', '贵州', '湖南', '北京康辉']
		    },
		    series: [
		        {
		            name: '2016年',
		            type: 'bar',
		            barWidth: 20,
		            data: [38.6543, 78.6543, 83.9325, 283.9325, 442.3438, 542.3438, 673.1000, 832.1594, 1513.4141, 3768.1807, 5882.3438, 6483.1000, 7512.1594, 8213.4141, 9468.1807],
		            itemStyle: {
		                normal: {
		                	color: "#ffc875",
		                    label: {
		                        show: true,
		                        position: 'right',
		                        formatter: '{c}'
		                    },
		                    labelLine: {show: true}
		                }
		            }
		        }
		    ]	
			};
		otaCorporationChart.setOption(otaCorporationOption);
	}

	function initErpChart() {
		var erpPvChart = echarts.init(document.getElementById('erp_pv_uv'), 'dark');
		var erpPvOption = {
				title : {
        			text: '用户访问来源',
        			textStyle: {
        				color: "#fff"
        			},
        			top:"22px",
        			left:"20px"
    			},
    			tooltip : {
        			trigger: 'item',
        			formatter: "{a} <br/>{b} : {c} ({d}%)"
    			},
    			legend: {
        			data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        			textStyle: {
        				color: "#fff"
        			},
        			left: "180px",
        			top: "25px"
    			},
    			series : [
        			{
            			name: '访问来源',
            			type: 'pie',
            			radius : '55%',
            			center: ['50%', '60%'],
            			data:[
                			{
                				value:335, 
                				name:'直接访问',
                				itemStyle: {
                					normal: {
                						color: "#a2d1c2"
                					}
                				}
                			},
                			{
                				value:310,
                				name:'邮件营销',
                				itemStyle: {
                					normal: {
                						color: "#5fb7ce"
                					}
                				}
                			},
                			{
                				value:234,
                				name:'联盟广告',
                				itemStyle: {
                					normal: {
                						color: "#306ea2"
                					}
                				}
                			},
                			{
                				value:135,
                				name:'视频广告',
                				itemStyle: {
                					normal: {
                						color: "#4a4a65"
                					}
                				}
                			},
                			{
                				value:1548,
                				name:'搜索引擎',
                				itemStyle: {
                					normal: {
                						color: "#f6efd8"
                					}
                				}
                			},
                			{
                				value:1548,
                				name:'搜索引擎',
                				itemStyle: {
                					normal: {
                						color: "#f6c865"
                					}
                				}
                			},
                			{
                				value:1548,
                				name:'搜索引擎',
                				itemStyle: {
                					normal: {
                						color: "#fdf277"
                					}
                				}
                			},
                			{
                				value:1548,
                				name:'搜索引擎',
                				itemStyle: {
                					normal: {
                						color: "#9bc577"
                					}
                				}
                			}
            			],
            			itemStyle: {
                			emphasis: {
                    		shadowBlur: 10,
                    		shadowOffsetX: 0,
                    		shadowColor: 'rgba(0, 0, 0, 0.5)'
                		}
            		}
        		}
    		]
		};

		erpPvChart.setOption(erpPvOption);


		var erpMonthChart = echarts.init(document.getElementById('erp_month_chart'), 'dark');
		var erpMonthOption  = {	
			    title: {
			        text: '近30天趋势',
			        textStyle: {
			        	color: '#fff'
			        },
			        top: "20px",
			        left: "20px"
			    },
			    tooltip: {
			        trigger: 'axis'
			    },

			    legend: {
			        data:['支付订单金额', '支付订单数'],
			        textStyle: {
			        	color: '#fff'
			        },
			        left: "180px",
			        top: "22px"
			    },
			    grid: {
			        left: '4%',
			        right: '3%',
			        top: "70px",
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: [
			        {
			            type: 'category',
			            axisLabel: {
			        		textStyle: {
			        			color:'#fff'
			        		}
			        	},
			            data: ['5/19','5/20','5/21','5/22','5/23','5/24','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16']
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            // name: '支付订单数',
			            min: 0,
			            max: 100,
			            interval: 10,
			            axisLabel: {
			                formatter: '{value}',
			                textStyle: {
			        			color:'#fff'
			        		}
			            }
			        },
			        {
			            type: 'value',
			            // name: '支付订单金额',
			            min: 0,
			            max: 100,
			            interval: 10,
			            axisLabel: {
			                formatter: '{value}万',
			                textStyle: {
			                	color: "#fff"
			                }
			            }
			        }
			    ],
			    series: [
			        {
			            name:'支付订单金额',
			            type:'bar',
			            barWidth: 5,
			            itemStyle: {
			            	normal: {
			            		color: "#f3595b"
			            	}
			            },
			            data:[20, 21, 22, 28, 30, 36, 42, 45, 78, 50, 60, 70,72,79,82,86,88,74,76,82,89,94,78,86,76,82,89,94,78,86]
			        },
			 
			        {
			            name:'支付订单数',
			            type:'line',
			            yAxisIndex: 1,
			            lineStyle: {
			            	normal: {
			            		color: "#febc72"
			            	}
			            },
			            data:[18, 21, 22, 26, 28, 34, 38, 40, 67, 53, 58, 68,71,73,78,81,68,56,78,82,85,89,78,86,76,82,89,94,78,86]
			        }
			    ]
		};


	erpMonthChart.setOption(erpMonthOption);

	var erpCorporationChart = echarts.init(document.getElementById('erp_corporation_chart'), 'dark');
	var erpCorporationOption = {
		    animation: true,
		    title: {
		        text: '康辉各公司数据',
		        textStyle: {
		        	color: "#fff"
		        },
		        top: "20px",
			    left: "20px"
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        data: ['2016年'],
		        textStyle: {
		        	color:"#fff"
		        },
		        top: "25px",
			    left: "180px"
		    },
		    grid: {
		        left: '3%',
		        right: '6%',
		        top: "70px",
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        boundaryGap: [0, 0.01],
		        min: 0,
		        max: 10000,
		        axisLabel: {
		                formatter: '{value}万',
		                textStyle: {
		                	color: "#fff"
		                }
		            }
		    },
		    yAxis: {
		        type: 'category',
		        axisLabel: {
		        	textStyle: {
		        		color:"#fff"
		        	}
		        },
		        data: ['重庆', '广西', '辽宁', '上海', '无锡', '湖南', '浙江', '江苏', '广东', '河北', '河南', '黑龙江', '贵州', '湖南', '北京康辉']
		    },
		    series: [
		        {
		            name: '2016年',
		            type: 'bar',
		            barWidth: 20,
		            data: [38.6543, 78.6543, 83.9325, 283.9325, 442.3438, 542.3438, 673.1000, 832.1594, 1513.4141, 3768.1807, 5882.3438, 6483.1000, 7512.1594, 8213.4141, 9468.1807],
		            itemStyle: {
		                normal: {
		                	color: "#ffc875",
		                    label: {
		                        show: true,
		                        position: 'right',
		                        formatter: '{c}'
		                    },
		                    labelLine: {show: true}
		                }
		            }
		        }
		    ]	
		};
		erpCorporationChart.setOption(erpCorporationOption);
	}



	function init() {
		initSwiper();
		initOtaChart();
		initErpChart();
	}

	init();
})(jQuery);