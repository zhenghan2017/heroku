// 模块引用
const express = require('express');
const cheerio = require('cheerio');
const tool = require('./public/tool');

const port = process.env.PORT || '3000';
const app = express();

// 首页发送数据
app.get('/', (req, res) => {
  res.send(`hello expresss`);
});

// 爬虫测试
app.get('/get_cnode_info', (req, res) => {
  const url = 'https://cnodejs.org/';
  tool.requestPromise('get', url)
    .then(reply => {
      const $ = cheerio.load(reply);
      let items = [];
      $('#topic_list .topic_title').each(function (index, element) {
        const $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });

      $('#topic_list .user_avatar').each(function (index, element) {
        const $element = $(element);
        const img = $element.children('img');
        items[index].author = img.attr('title');
      });
      
      res.json(items);
    })
    .catch(err => {
      console.log(err);
    })
});

// 服务端开启
app.listen(port, () => {
  console.log(`server start on ${port}`);
});