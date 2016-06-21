//OTA接口

/* 详细数据
 * 输出：*/
{
	"currentMonth" ："6",    //当前月

    "totalOrderAmount": "12312323", //订单交易额
    "monthOrderCountRate": "-2.0%", //当月订单交易额较上月同期
    "totalOrderCount": "12345",  //订单数
    "monthOrderAmountRate": "-2.0%" //当月订单数较上月同期

    "todayOrderAmount": "12312323", //今日订单金额
    "todayOrderAmountRate": "-2.0%", //今日订单金额较昨日
    "todayOrderCount": "12345",  //今日订单数
    "todayOrderCountRate": "-2.0%", //今日订单数较昨日同期
}

/*PV UV双折线图（待定）*/
[
	{
		"day": "5/24",
		"pc_uv": "2000",
		"pc_pv": "2000",
		"h5_uv": "2000",
		"h5_pv": "2000",
	},
	{
		"day": "5/25",
		"pc_uv": "2000",
		"pc_pv": "2000",
		"h5_uv": "2000",
		"h5_pv": "2000",
	},
	……
]

/* 过去30天订单数据  返回今天以前的30天 不包含今天
   输出：*/
[
    {
        "day": "5/24", 
        "amount":'123',//以万为单位
        "count": "123"
    }, 
    {
        "day": "5/25", 
        "amount":'123',//以万为单位
        "count": "123"
    }
    ……
]

/* 康辉各分公司当月累计订单金额
// 输出：*/
[
    {
        "corporation_name": "北京", //分公司名称
        "amount":'123',//以万为单位
    }, 
    {
    	"corporation_name": "济南",
    	"amount": "123456"
    }
    ……
]

/*------------------------------------------------------------------------------------------------------------------------------------*/
//ERP接口


/* 详细数据
 * 输出：*/
{
	"currentMonth" ："6",    //当前月

    "totalOrderAmount": "12312323", //订单交易额
    "monthOrderCountRate": "-2.0%", //当月订单交易额较上月同期
    "totalOrderCount": "12345",  //订单数
    "monthOrderAmountRate": "-2.0%" //当月订单数较上月同期

    "todayOrderAmount": "12312323", //今日订单金额
    "todayOrderAmountRate": "-2.0%", //今日订单金额较昨日
    "todayOrderCount": "12345",  //今日订单数
    "todayOrderCountRate": "-2.0%", //今日订单数较昨日同期
}

//各产品类型当月交易金额（饼图）
[
	{
		"name": "团队游",
		"amount": "12345"
	},
	{
		"name": "自由行",
		"amount": "12345"
	}
	……
]


/* 过去30天订单数据  返回今天以前的30天 不包含今天
   输出：*/
[
    {
        "day": "5/24", 
        "amount":'123',//以万为单位
        "count": "123"
    }, 
    {
        "day": "5/25", 
        "amount":'123',//以万为单位
        "count": "123"
    }
    ……
]

/* 康辉各分公司当月累计订单金额
// 输出：*/
[
    {
        "corporation_name": "北京", //分公司名称
        "amount":'123',//以万为单位
    }, 
    {
    	"corporation_name": "济南",
    	"amount": "123456"
    }
    ……
]