import * as moment from "moment";

/**
 * 获取 0~max 的随机整数
 * @param max 最大值
 */
export function getRandomInt(max): number {
    return Math.floor(Math.random() * max);
}

/**
 * 基于业务标识、时间、随机数生成订单号
 * @param businessFlagPrefix 业务标识前缀
 */
export function generateOrderIdByTime(businessFlagPrefix = "pay"): string {
    const randInt = getRandomInt(9999);
    return `${businessFlagPrefix}-${moment().format("YYYYMMDDHHMMSS")}-${randInt}`;
}
