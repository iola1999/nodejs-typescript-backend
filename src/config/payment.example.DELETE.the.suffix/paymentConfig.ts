import serviceConfig from "@/config/serviceConfig";
import * as fs from "fs";

export default {
    notifyUrl: serviceConfig.baseUrl + serviceConfig.apiVersion + "/pay/handlePaymentNotify",
    // appId: "2222222222222", // 正式环境
    // encryptKey: "2222222222==", // 正式环境
    appId: "111111111", // 沙箱环境
    encryptKey: "111111111111==", // 沙箱环境
    gateway: "https://openapi.alipaydev.com/gateway.do", // 沙箱环境
    // 普通公钥模式
    privateKey: fs.readFileSync("src/config/payment/private_key.pem", "ascii"),
    alipayPublicKey: fs.readFileSync("src/config/payment/alipayPublicKey.pem", "ascii"),
    camelcase: true,
};
