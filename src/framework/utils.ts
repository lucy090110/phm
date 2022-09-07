export const getBeforeDate = (num:any) => {
    const n = 7 - num;
    const d = new Date();
    let year = d.getFullYear();
    let mon = d.getMonth() + 1;
    let day = d.getDate();
    if (day <= n) {
        if (mon > 1) {
            mon = mon - 1;
        } else {
            year = year - 1;
            mon = 12;
        }
    }
    d.setDate(d.getDate() - n);
    mon = d.getMonth() + 1;
    day = d.getDate();
    return year + '-' + (mon < 10 ? '0' + mon : mon) + '-' + (day < 10 ? '0' + day : day);
};

// 小于10的拼接上0字符串
const addZero = (s:any) => {
    return s < 10 ? '0' + s : s;
};

export const getFullDate = (d?: any, noHour?: any) => {
    const date = d ? d : new Date();
    // 年 getFullYear()：四位数字返回年份
    const year = date.getFullYear(); // getFullYear()代替getYear()
    // 月 getMonth()：0 ~ 11
    const month = date.getMonth() + 1;
    // 日 getDate()：(1 ~ 31)
    const day = date.getDate();
    // 时 getHours()：(0 ~ 23)
    const hour = date.getHours();
    // 分 getMinutes()： (0 ~ 59)
    const minute = date.getMinutes();
    // 秒 getSeconds()：(0 ~ 59)
    const second = date.getSeconds();
    let time = year + '-' + addZero(month) + '-' + addZero(day);
    if (!noHour) {
        time += ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
    }

    return time;
};

export const toThousands = (num: any) => {
    let str = (num || 0).toString();
    let result = '';

    while (str.length > 3) {
        result = ',' + str.slice(-3) + result;

        str = str.slice(0, str.length - 3);
    }

    if (str) {
        result = str + result;
    }

    return result;
};
