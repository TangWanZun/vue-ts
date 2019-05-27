
/*
*	位数不足用0补足
*   例子:  pad(100,4) = 0100
*/
function pad(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
  }
/**
 * objArror对象数组第一个出现属性等于prname的对象索引
 */
function find(objArror, prNamn, value) {
	for (let i = objArror.length - 1; i >= 0; i--) {
		if (objArror[i][prNamn] == value) {
			return i
		}
	}
	return -1;
}
/**
 * 服务器时间合并 并返回时间对象 
 * date：需要合并的日期 
 * time：需要合并的时间
 */
export const dateMerge = function(date,time){
	let dateObj = dateTo(date);
	let timeObj = dateTo(time);
	timeObj.setFullYear(dateObj.getFullYear());
	timeObj.setMonth(dateObj.getMonth());
	timeObj.setDate(dateObj.getDate());
	return timeObj
}
/**
 * 服务器时间转为js Date对象实例
 */
function dateTo(dateString) {
	if(!dateString){return}
	if(typeof dateString =='object'){return dateString}
	var regEx = new RegExp("\\-", "gi");
	dateString = dateString.replace(regEx, "/");
	//去掉最后的毫秒值,用于兼容苹果手机
	return new Date(dateString.split('.')[0]);
}
/**
 * 获取周信息
*/
function getWeek(week){
	switch (week) {
		case 1:
			return '周一';
		case 2:
			return '周二';
		case 3:
			return '周三';
		case 4:
			return '周四';
		case 5:
			return '周五';
		case 6:
			return '周六';
		case 0:
			return '周日';
	}
}
/**
 * 将时间对象转本地时间（只有时间）
 */
export const dateParseTime  = function(dateString){
	let date = dateString;
	//当分钟为个位数的时候,在前面添加一个0
	let minu = date.getMinutes();
	if (minu < 10) {
		minu = `0${minu}`;
	}
	//判断是上午还是下午
	let sxS = '上午';
	let hours = date.getHours();
	if (hours >= 0 && hours <= 5) {
		sxS = '凌晨';
	} else if (hours > 5 && hours <= 7) {
		sxS = '早上';
	} else if (hours > 7 && hours <= 11) {
		sxS = '上午';
	} else if (hours > 11 && hours <= 17) {
		sxS = '下午';
		if (hours > 12) {
			hours -= 12;
		}
	} else if (hours > 17 && hours <= 21) {
		sxS = '晚上';
		hours -= 12;
	} else if (hours > 21 && hours <= 23) {
		sxS = '午夜';
		hours -= 12;
	}
	return `${sxS}${hours}:${minu}`;
}
/**
 * 将时间对象转本地时间（只有日期）
 */
export const dateParseDate  = function(dateString){
	let date = dateString;
	//获取当前时间
	let newDate = new Date();
	//获取传入时间的日期字符串
	let dateDateString = date.toDateString();
	//一天24小时的毫秒值
	let DAY_TIME = 86400000;
	let dateParseDateStr = '';
	if (newDate.toDateString() === dateDateString) {
		//表示为今天
		dateParseDateStr = '今天';
	}
	else if(new Date(newDate.getTime() - DAY_TIME).toDateString()==dateDateString){
		//表示为昨天
		dateParseDateStr = '昨天';
	}
	else if(new Date(newDate.getTime() + DAY_TIME).toDateString()==dateDateString){
		//表示为明天
		dateParseDateStr = '明天';
	}
	else if(new Date(newDate.getTime() + DAY_TIME*2).toDateString()==dateDateString){
		//表示为后天
		dateParseDateStr = '后天';
	}
	else if(new Date(newDate.getTime() - DAY_TIME*2).toDateString()==dateDateString){
		//表示为前天
		dateParseDateStr = '前天';
	}
	else{
		dateParseDateStr = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
	}
	return dateParseDateStr;
}
/**
 * 将时间对象转本地时间
 */
function dateParse(dateString) {
	let dateParseTimeStr =  dateParseTime(dateString);
	let dateParseDateStr = dateParseDate(dateString);
	return `${dateParseDateStr} ${dateParseTimeStr}`;
}
/**
 * 将js事件转化成为服务器识别时间
 * 接受一个date的实例
*/
function dateStringify(date){
    return `${date.getFullYear()}-${pad(date.getMonth()+1,2)}-${pad(date.getDate(),2)} ${pad(date.getHours(),2)}:${pad(date.getMinutes(),2)}:${pad(date.getSeconds(),2)}.${pad(date.getMilliseconds(),3)}`;
}
/**
 * GUID生成器
 */
function GUID() {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

//根据fromdata字符串获得参数
export function getQueryString(src) {
	let srcArr = src.split('&');
	let reObj = {};
	srcArr.forEach((item,key)=>{
		let itemArr = item.split('=');
		reObj[itemArr[0]] = itemArr[1];
	})
	return reObj;
}

/**
 * 随机生成 min  到 max  的整数   包括 min max
 */
export const  random =  function(min, max){
    var random = max - min + 1;
    return Math.floor(Math.random() * random + min);
}

export {
	find,
	GUID,
	dateParse,
    dateTo,
	dateStringify,
	getWeek,
	pad,
}
