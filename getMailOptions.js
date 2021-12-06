const projectIdMap = {
  // 川和路399弄（张江兴科苑）
  ZHANGJIANG_XINGKEYUAN: 8366,
  // 三旋路506弄（绿波家园）
  LVBOJIAYUAN: 8392,
  // 杨南路694弄
  YANGNANLU694:8443,
};

const projectMailAddr = {
  [`${projectIdMap.ZHANGJIANG_XINGKEYUAN}`]:
    "mu-dan.wang@microfocus.com, huan.yu@datayes.com, jl381169437@gmail.com, xue.li3@microfocus.com",
  [`${projectIdMap.LVBOJIAYUAN}`]: "xue.li3@microfocus.com",
  [`${projectIdMap.YANGNANLU694}`]: "mu-dan.wang@microfocus.com, jl381169437@gmail.com, huan.yu@datayes.com",
  // [`${projectIdMap.YANGNANLU694}`]: "huan.yu@datayes.com",
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
  // to: "mu-dan.wang@microfocus.com,huan.yu@datayes.com",
  to: "huan.yu@datayes.com, jl381169437@gmail.com",
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
    to: projectMailAddr[projectId] || '',
    html: getHtmlWithProjectId(projectId),
  };
};

module.exports = { projectIdMap, getMailOptions };
