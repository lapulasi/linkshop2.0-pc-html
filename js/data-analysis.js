getDataAnalysis();// 趋势分析
getPassagerFlow();//人流结构
getPassagerFlowMaxTime();// 驻留最多时段
getCustomerShopTrend();/*顾客到店趋势*/
getShopFlowRatio();/*各店人流占比*/

getFlow();// 驻留结构
getFlowMaxTime();// 驻留最多时段
getCustomerFlowTrend();/*顾客驻留趋势*/
getFlowRatio();//各店驻留占比

getCollectingPowerGrowthTrend(); //集客力增长趋势
getCollectingPowerPercentage(); // 集客力占比
getEffectGrowthTrend(); //集客力增长趋势
getEffectPercentage(); // 集客力占比





function getDataAnalysis() {
    var myChart = echarts.init(document.getElementById('trend-analysis'));
    var option = {
        title: {},
        tooltip: {
            /*鼠标点击效果*/
            show: true,
            trigger: 'axis',
            showContent: false/*去掉浮层框*/
        },
        legend: {
            top: '0',
            data:['销售趋势','门店趋势','顾客趋势']
        },
        grid: {
            left: '3%',
            top: '10%',
            right: '0%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC',
            },
            data: ["12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20", "12.06", "12.07", "12.08", "12.09", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: [{
            show: false,
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
            {
                show: false,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
            },
            {
                // show: false
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#EAEDF2'
                    }
                },
                splitArea: {
                    show: false,
                    areaStyle: {
                        color: '#2C293B'
                    }
                }
            }],
        /*dataZoom: [{
            type: 'inside',
            show: true,
            xAxisIndex: [0],
            start: 0,//默认为1
            end: 50
        }],*/
        series: [{
           name: '销售趋势',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 10, 20, 36, 10, 10, 10, 10, 20, 20, 50, 20, 15, 20, 26, 30, 20, 50, 20, 26, 30, 30, 20, 50, 20, 26, 30],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: '#A14BEC'
            },
        },
            {
               name: '门店趋势',
                type: 'line',
                smooth: true,
                data: [15, 20, 26, 30, 20, 50, 20, 26, 30, 30, 20, 50, 20, 26, 30, 5, 20, 36, 10, 10, 20, 36, 10, 10, 10, 10, 20, 20, 50, 20],
                showSymbol: false,
                yAxisIndex: 1,
                lineStyle: {
                    width: 3,
                    color: '#FCC50A'
                },
            },
            {
                name: '顾客趋势',
                type: 'line',
                smooth: true,
                showSymbol: false,
                yAxisIndex: 2,
                lineStyle: {
                    width: 3,
                    color: '#6F92EA'
                },
                data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 20, 36, 10, 20, 26, 30, 5, 20, 36, 10, 10, 20, 36, 10, 10, 10, 10, 20, 20, 50, 20]
            }]
    };
    myChart.setOption(option);
}

function getPassagerFlow() {
    var myChart = echarts.init(document.getElementById('passenger-flow'));
    var option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#5599FF', '#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC', '#605C72'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data: [
                {name: '20-30,男', icon: 'rect'},
                {name: '20-30,女', icon: 'rect'},
                {name: '30-40,男', icon: 'rect'},
                {name: '30-40,女', icon: 'rect'},
                {name: '40-50,男', icon: 'rect'},
                {name: '其他', icon: 'rect'}
            ]
        },
        series: [{
//            name: '销量',
            type: 'pie',
            avoidLabelOverlap: false,
            center: ['40%', '50%'],
            radius: ['30%', '65%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '20-30,男'},
                {value: 234, name: '20-30,女'},
                {value: 310, name: '30-40,男'},
                {value: 135, name: '30-40,女'},
                {value: 1548, name: '40-50,男'},
                {value: 200, name: '其他'}
            ]
        }]
    };
    myChart.setOption(option);
}

function getPassagerFlowMaxTime() {
    var myChart = echarts.init(document.getElementById('passenger-max-time'));

// 指定图表的配置项和数据
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC',
            },
            data: ["16-17点", "17-18点", "18-19点", "15-16点", "14-15点", "19-20点"]
        },
        yAxis: {
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#9FA4AC',
                formatter: '{value}人'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            // data: ['0人', '25人', '50人', '75人', '100人']
        },
        series: [
            {
                type: 'bar',
                // barWidth: '80%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6F92EA'
                    }, {
                        offset: 1,
                        color: '#A8C4F6'
                    }]) // 区域填充背景色
                },
                data: [26, 20, 20, 10, 20, 36]
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getCustomerShopTrend() {
    var myChart = echarts.init(document.getElementById('passenger-arrived-shop-trend'));
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '0%',
            top: '10%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            data: ["8点", "10点", "12点", "14点", "16点", "18点", "20点", "22点"]
        },
        yAxis: {
            show: false
        },
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6F92EA'
                }, {
                    offset: 1,
                    color: '#3BCBCA'
                }]) // 区域填充背景色
            },
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getShopFlowRatio() {
    var myChart = echarts.init(document.getElementById('passenger-store-percentage'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        color: ['#5599FF', '#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC', '#605C72'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data: [
                {name: '国美海岸城店', icon: 'rect'},
                {name: '苏宁桃园店', icon: 'rect'},
                {name: '国美会展中心店', icon: 'rect'},
                {name: '国美大冲店', icon: 'rect'},
                {name: '苏宁西乡店', icon: 'rect'},
                {name: '国美白石洲店', icon: 'rect'}
            ]
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                center: ['40%', '50%'],
                radius: ['30%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '国美海岸城店'},
                    {value: 310, name: '苏宁桃园店'},
                    {value: 234, name: '国美会展中心店'},
                    {value: 335, name: '国美大冲店'},
                    {value: 148, name: '苏宁西乡店'},
                    {value: 435, name: '国美白石洲店'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}

function getFlow() {
    var myChart = echarts.init(document.getElementById('flow'));
    var option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#5599FF', '#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC', '#605C72'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data: [
                {name: '20-30,男', icon: 'rect'},
                {name: '20-30,女', icon: 'rect'},
                {name: '30-40,男', icon: 'rect'},
                {name: '30-40,女', icon: 'rect'},
                {name: '40-50,男', icon: 'rect'},
                {name: '其他', icon: 'rect'}
            ]
        },
        series: [{
//            name: '销量',
            type: 'pie',
            avoidLabelOverlap: false,
            center: ['40%', '50%'],
            radius: ['30%', '65%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '20-30,男'},
                {value: 234, name: '20-30,女'},
                {value: 310, name: '30-40,男'},
                {value: 135, name: '30-40,女'},
                {value: 1548, name: '40-50,男'},
                {value: 200, name: '其他'}
            ]
        }]
    };
    myChart.setOption(option);
}

function getFlowMaxTime() {
    var myChart = echarts.init(document.getElementById('flow-max-time'));

// 指定图表的配置项和数据
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC',
            },
            data: ["16-17点", "17-18点", "18-19点", "15-16点", "14-15点", "19-20点"]
        },
        yAxis: {
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#9FA4AC',
                formatter: '{value}人'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            // data: ['0人', '25人', '50人', '75人', '100人']
        },
        series: [
            {
                type: 'bar',
                // barWidth: '80%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6F92EA'
                    }, {
                        offset: 1,
                        color: '#A8C4F6'
                    }]) // 区域填充背景色
                },
                data: [26, 20, 20, 10, 20, 36]
            }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getCustomerFlowTrend() {
    var myChart = echarts.init(document.getElementById('passenger-flow-trend'));
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '0%',
            top: '10%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            data: ["8点", "10点", "12点", "14点", "16点", "18点", "20点", "22点"]
        },
        yAxis: {
            show: false
        },
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6F92EA'
                }, {
                    offset: 1,
                    color: '#3BCBCA'
                }]) // 区域填充背景色
            },
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getFlowRatio() {
    var myChart = echarts.init(document.getElementById('flow-store-percentage'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        color: ['#5599FF', '#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC', '#605C72'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data: [
                {name: '国美海岸城店', icon: 'rect'},
                {name: '苏宁桃园店', icon: 'rect'},
                {name: '国美会展中心店', icon: 'rect'},
                {name: '国美大冲店', icon: 'rect'},
                {name: '苏宁西乡店', icon: 'rect'},
                {name: '国美白石洲店', icon: 'rect'}
            ]
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                center: ['40%', '50%'],
                radius: ['30%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '国美海岸城店'},
                    {value: 310, name: '苏宁桃园店'},
                    {value: 234, name: '国美会展中心店'},
                    {value: 335, name: '国美大冲店'},
                    {value: 148, name: '苏宁西乡店'},
                    {value: 435, name: '国美白石洲店'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}

function getCollectingPowerGrowthTrend() {
    var myChart = echarts.init(document.getElementById('collecting-power-growth-trend'));
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '0%',
            top: '10%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            data: ["8点", "10点", "12点", "14点", "16点", "18点", "20点", "22点"]
        },
        yAxis: {
            show: false
        },
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6F92EA'
                }, {
                    offset: 1,
                    color: '#3BCBCA'
                }]) // 区域填充背景色
            },
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getCollectingPowerPercentage() {
    var myChart = echarts.init(document.getElementById('collecting-power-percentage'));
    var option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#5599FF', '#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC', '#605C72'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data: [
                {name: '20-30,男', icon: 'rect'},
                {name: '20-30,女', icon: 'rect'},
                {name: '30-40,男', icon: 'rect'},
                {name: '30-40,女', icon: 'rect'},
                {name: '40-50,男', icon: 'rect'},
                {name: '其他', icon: 'rect'}
            ]
        },
        series: [{
//            name: '销量',
            type: 'pie',
            avoidLabelOverlap: false,
            center: ['40%', '50%'],
            radius: ['30%', '65%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '20-30,男'},
                {value: 234, name: '20-30,女'},
                {value: 310, name: '30-40,男'},
                {value: 135, name: '30-40,女'},
                {value: 1548, name: '40-50,男'},
                {value: 200, name: '其他'}
            ]
        }]
    };
    myChart.setOption(option);
}

function getEffectGrowthTrend() {
    var myChart = echarts.init(document.getElementById('effect-growth-trend'));
    var option = {
        title: {},
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '0%',
            top: '10%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9FA4AC'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEDF2'
                }
            },
            data: ["8点", "10点", "12点", "14点", "16点", "18点", "20点", "22点"]
        },
        yAxis: {
            show: false
        },
        series: [{
//            name: '销量',
            type: 'line',
            smooth: true,
            data: [5, 20, 36, 10, 20, 20, 50, 20],
            showSymbol: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#6F92EA'
                }, {
                    offset: 1,
                    color: '#3BCBCA'
                }]) // 区域填充背景色
            },
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function getEffectPercentage() {
    var myChart = echarts.init(document.getElementById('effect-percentage'));
    var option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#5599FF', '#3BCBCA', '#FCC50A', '#FF7474', '#A14BEC', '#605C72'],
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#A4A9B3'
            },
            data: [
                {name: '20-30,男', icon: 'rect'},
                {name: '20-30,女', icon: 'rect'},
                {name: '30-40,男', icon: 'rect'},
                {name: '30-40,女', icon: 'rect'},
                {name: '40-50,男', icon: 'rect'},
                {name: '其他', icon: 'rect'}
            ]
        },
        series: [{
//            name: '销量',
            type: 'pie',
            avoidLabelOverlap: false,
            center: ['40%', '50%'],
            radius: ['30%', '65%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '20-30,男'},
                {value: 234, name: '20-30,女'},
                {value: 310, name: '30-40,男'},
                {value: 135, name: '30-40,女'},
                {value: 1548, name: '40-50,男'},
                {value: 200, name: '其他'}
            ]
        }]
    };
    myChart.setOption(option);
}