const axios = require("axios");
const _ = require("lodash");
const sendEmail = require("./sendEmail");
const logger = require("./logger");
const { projectIdMap, getMailOptions } = require("./getMailOptions");

const queryHouse = (projectId) => {
  logger.info("请求接口");
  axios
    .post("https://select.pdgzf.com/api/v1.0/app/gzf/house/list", {
      where: {
        keywords: "",
        township: null,
        projectId,
        typeName: null,
        rent: null,
      },
      pageIndex: 0,
      pageSize: 10,
    })
    .then((res) => {
      logger.info(projectId, res.data.data);
      if (res.data.data.totalCount > 0) {
        const mailOptions = getMailOptions(projectId);
        // 调用邮件
        sendEmail(mailOptions);
      }
      if (res.data.data.totalCount === 0 && projectId === 8366) {
        const mailOptions = getMailOptions(projectId, true);
        // 调用邮件
        sendEmail(mailOptions);
      }
    });
};

module.exports = queryHouse;
