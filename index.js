const CronJob = require("cron").CronJob;
const _ = require("lodash");
const queryHouse = require('./queryHouse');
const logger = require('./logger');
const { projectIdMap } = require("./getMailOptions");

const time1 = '00 30 11 * * *'; // 30点11提醒
const time2 = '00 10 17 * * *'; // 30点11提醒
const timeZone = 'Asia/Shanghai';

logger.info('start');

const queryHouseFunc = () => {
  _.values(projectIdMap).map((projectId) => {
    queryHouse(projectId);
  })
}

new CronJob(
  time1,
  function () {
    logger.info('11:30 定时任务')
    queryHouseFunc();
  },
  null,
  true,
  timeZone,
);

new CronJob(
  time2,
  function () {
    logger.info('17:00 定时任务')
    queryHouseFunc();
  },
  null,
  true,
  timeZone,
);

//queryHouseFunc();
