"use strict";
const nodemailer = require("nodemailer");
const logger = require("./logger");

let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: "qq", // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: "381169437@qq.com",
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: "btkbhsqbfxskcbba",
  },
});

/**
 * 发邮件
 * @param {*} mailOptions 邮件信息配置
 */
const sendEmail = (mailOptions) => {
  logger.info("sendEmail");
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

module.exports = sendEmail;
