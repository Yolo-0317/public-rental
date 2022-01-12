const projectIdMap = {
  // 川和路399弄（张江兴科苑）
  ZHANGJIANG_XINGKEYUAN: 8366,
  // 三旋路506弄（绿波家园）
  LVBOJIAYUAN: 8392,
  // 杨南路694弄
  YANGNANLU694: 8443,
  // 东书房路560弄
  DONGSHUFANGLU560: 8334,
  // 永泰路136弄
  SANLINXINCUN: 8321,
  // 渡桥路78弄（中骏柏景湾）
  DUQIAOLU78: 8347,
  // 华发四季苑
  HUAFASIJI: 8390
};

const emails = [
  "jl381169437@gmail.com, huan.yu@datayes.com",
  "huan.yu@datayes.com", // lixue
  "huan.yu@datayes.com, jl381169437@gmail.com"
]

const projectMailAddr = {
  [`${projectIdMap.ZHANGJIANG_XINGKEYUAN}`]: emails[1],
  [`${projectIdMap.LVBOJIAYUAN}`]: emails[1],
  [`${projectIdMap.YANGNANLU694}`]: emails[0],
  [`${projectIdMap.DONGSHUFANGLU560}`]: emails[0],
  [`${projectIdMap.SANLINXINCUN}`]: emails[0],
  [`${projectIdMap.DUQIAOLU78}`]: emails[0],
  [`${projectIdMap.HUAFASIJI}`]: emails[0],
};

const getHtmlWithProjectId = (projectId) =>
  `您关注的小区有房了，点击url到对应的小区页面查看: <a href='https://select.pdgzf.com/houseLists?id=${projectId}'>https://select.pdgzf.com/houseLists?id=${projectId}</a>`;

const mailOptions = {
  from: '"yolo" <381169437@qq.com>', // sender address
  to: "", // list of receivers
  subject: "公租房-房源提醒", // Subject line
};

const noHoseOptions = {
  ...mailOptions,
  subject: "没房，监控常规提醒",
  html: "<div>O(∩_∩)O~</div>",
  to: emails[2],
};

/**
 * 获取邮件配置
 * @param {*} projectId 小区id
 * @param {*} noHouse 是否有房
 * @returns
 */
const getMailOptions = (projectId, noHouse) => {
  if (noHouse) {
    return noHoseOptions;
  }
  return {
    ...mailOptions,
    to: projectMailAddr[projectId] || "",
    html: getHtmlWithProjectId(projectId),
  };
};

module.exports = { projectIdMap, getMailOptions };
