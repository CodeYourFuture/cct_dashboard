(function($) {
	var data = [
     {name: 'Amsterdam', value: 9},
     {name: 'Athens', value: 12},
     {name: 'Auckland', value: 12},
     {name: 'Bangkok', value: 12},
     {name: 'Barcelona', value: 14},
     {name: 'Beijing', value: 15},
     {name: 'Berlin', value: 16},
     {name: 'Bogotá', value: 18},
     {name: 'Bratislava', value: 18},
     {name: 'Brussels', value: 19},
     {name: 'Budapest', value: 21},
     {name: 'Buenos Aires', value: 21},
     {name: 'Bucharest', value: 21},
     {name: 'Caracas', value: 22},
     {name: 'Chicago', value: 23},
     {name: 'Delhi', value: 24},
     {name: 'Doha', value: 24},
     {name: 'Dubai', value: 25},
     {name: 'Dublin', value: 25},
     {name: 'Frankfurt', value: 25},
     {name: 'Geneva', value: 25},
     {name: 'Helsinki', value: 25},
     {name: 'Hong Kong', value: 25},
     {name: 'Istanbul', value: 26},
     {name: 'Jakarta', value: 26},
     {name: 'Johannesburg', value: 26},
     {name: 'Cairo', value: 27},
     {name: 'Kiev', value: 27},
     {name: 'Copenhagen', value: 27},
     {name: 'Kuala Lumpur', value: 28},
     {name: 'Lima', value: 29},
     {name: 'Lisbon', value: 30},
     {name: 'Ljubljana', value: 30},
     {name: 'London', value: 31},
     {name: 'Los Angeles', value: 31},
     {name: 'Luxembourg', value: 31},
     {name: 'Lyon', value: 31},
     {name: 'Madrid', value: 32},
     {name: 'Milan', value: 32},
     {name: 'Manama', value: 32},
     {name: 'Manila', value: 33},
     {name: 'Mexico City', value: 33},
     {name: 'Miami', value: 33},
     {name: 'Montreal', value: 34},
     {name: 'Moscow', value: 34},
     {name: 'Mumbai', value: 35},
     {name: 'Munich', value: 35},
     {name: 'Nairobi', value: 36},
     {name: 'New York', value: 36},
     {name: 'Nicosia', value: 36},
     {name: 'Oslo', value: 36},
     {name: 'Paris', value: 36},
     {name: 'Prague', value: 37},
     {name: 'Riga', value: 37},
     {name: 'Rio de Janeiro', value: 37},
     {name: 'Rome', value: 37},
     {name: 'Santiago de Chile', value: 37},
     {name: 'São Paulo', value: 38},
     {name: 'Seoul', value: 38},
     {name: 'Shanghai', value: 38},
     {name: 'Singapore', value: 38},
     {name: 'Sofia', value: 39},
     {name: 'Stockholm', value: 39},
     {name: 'Sydney', value: 39},
     {name: 'Taipei', value: 39},
     {name: 'Tallinn', value: 40},
     {name: 'Tel Aviv', value: 40},
     {name: 'Tokyo', value: 41},
     {name: 'Toronto', value: 41},
     {name: 'Vilnius', value: 42},
     {name: 'Warsaw', value: 43},
     {name: 'Vienna', value: 43},
     {name: 'Zurich', value: 44}
];
var geoCoordMap = {
    "Amsterdam": [4.895168,52.370216],
    "Athens": [-83.357567,33.951935],
    "Auckland": [174.763332,-36.84846],
    "Bangkok": [100.501765,13.756331],
    "Barcelona": [2.173403,41.385064],
    "Beijing": [116.407395,39.904211],
    "Berlin": [13.404954,52.520007],
    "Bogotá": [-74.072092,4.710989],
    "Bratislava": [17.107748,48.148596],
    "Brussels": [4.35171,50.85034],
    "Budapest": [19.040235,47.497912],
    "Buenos Aires": [-58.381559,-34.603684],
    "Bucharest": [26.102538,44.426767],
    "Caracas": [-66.903606,10.480594],
    "Chicago": [-87.629798,41.878114],
    "Delhi": [77.209021,28.613939],
    "Doha": [51.53104,25.285447],
    "Dubai": [55.270783,25.204849],
    "Dublin": [-6.26031,53.349805],
    "Frankfurt": [8.682127,50.110922],
    "Geneva": [6.143158,46.204391],
    "Helsinki": [24.938379,60.169856],
    "Hong Kong": [114.109497,22.396428],
    "Istanbul": [28.978359,41.008238],
    "Jakarta": [106.845599,-6.208763],
    "Johannesburg": [28.047305,-26.204103],
    "Cairo": [31.235712,30.04442],
    "Kiev": [30.5234,50.4501],
    "Copenhagen": [12.568337,55.676097],
    "Kuala Lumpur": [101.686855,3.139003],
    "Lima": [-77.042793,-12.046374],
    "Lisbon": [-9.139337,38.722252],
    "Ljubljana": [14.505751,46.056947],
    "London": [-0.127758,51.507351],
    "Los Angeles": [-118.243685,34.052234],
    "Luxembourg": [6.129583,49.815273],
    "Lyon": [4.835659,45.764043],
    "Madrid": [-3.70379,40.416775],
    "Milan": [9.185924,45.465422],
    "Manama": [50.58605,26.228516],
    "Manila": [120.984219,14.599512],
    "Mexico City": [-99.133208,19.432608],
    "Miami": [-80.19179,25.76168],
    "Montreal": [-73.567256,45.501689],
    "Moscow": [37.6173,55.755826],
    "Mumbai": [72.877656,19.075984],
    "Munich": [11.581981,48.135125],
    "Nairobi": [36.821946,-1.292066],
    "New York": [-74.005941,40.712784],
    "Nicosia": [33.382276,35.185566],
    "Oslo": [10.752245,59.913869],
    "Paris": [2.352222,48.856614],
    "Prague": [14.4378,50.075538],
    "Riga": [24.105186,56.949649],
    "Rio de Janeiro": [-43.172896,-22.906847],
    "Rome": [12.496366,41.902783],
    "Santiago de Chile": [-70.669265,-33.44889],
    "São Paulo": [-46.633309,-23.55052],
    "Seoul": [126.977969,37.566535],
    "Shanghai": [121.473701,31.230416],
    "Singapore": [103.819836,1.352083],
    "Sofia": [23.321868,42.697708],
    "Stockholm": [18.068581,59.329323],
    "Sydney": [151.209296,-33.86882],
    "Taipei": [121.565418,25.032969],
    "Tallinn": [24.753575,59.436961],
    "Tel Aviv": [34.781768,32.0853],
    "Tokyo": [139.691706,35.689487],
    "Toronto": [-79.383184,43.653226],
    "Vilnius": [25.279651,54.687156],
    "Warsaw": [21.012229,52.229676],
    "Vienna": [16.373819,48.208174],
    "Zurich": [8.541694,47.376887]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var worldMapChart = echarts.init(document.getElementById('worldMapChart'), 'dark');

var option = {
    title: {
        text: '出境游旅游度假出团分布',
        // subtext: 'Data from ERP&OTA',
        left: 'center',
        top: '60px',
        textStyle: {
            color: '#fff',
            fontSize: '60'
        },
        subtextStyle: {
            fontSize: '30'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        top:'200px',
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#3d4f68',
                borderColor: '#4d6586'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: '全国旅游度假出行分布',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffc875'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffc875',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
worldMapChart.setOption(option);

var departureChart = echarts.init(document.getElementById('departureChart'), 'dark');
var departureOption = {
    animation: true,
            title: {
                text: '境外城市热度',
                textStyle: {
                    color: "#fff",
                    fontSize: "30"
                },
                 top: "-5px",
                 left: "-5px"
            },
            grid: {
                left: '3%',
                right: '6%',
                top: "40px",
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show:false
                },            
                axisLabel: {
                        formatter: '',
                        textStyle: {
                            color: "#fff"
                        }
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: "#333",
                        type: "dotted"
                    }
                }
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show:false
                },  
                axisLabel: {
                    textStyle: {
                        color:"#fff",
                        fontSize: '16'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#333",
                        type: "dotted"
                    }
                },
                data: ['重庆', '广西', '辽宁', '上海', '无锡', '湖南', '浙江', '江苏', '广东', '河北']
            },
            series: [
                {
                    name: '2016年',
                    type: 'bar',
                    barWidth: 5,
                    /* TODO
                     * 保留两位小数
                     */
                    data: [38.65, 78.65, 83.93, 283.95, 442.34, 542.34, 673.10, 832.15, 1513.41, 3768.17],
                    itemStyle: {
                        normal: {
                            color: "#ffc875",
                            labelLine: {show: false}
                        }
                    }
                }
            ]   
}

departureChart.setOption(departureOption);

})(jQuery);