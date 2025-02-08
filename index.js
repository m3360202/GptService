import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());

app.use(cors()); // Enable All CORS Requests

app.options('*', cors()) // Enable CORS preflight for all routes 测试跨域的时候开启这个地方

//Ending points

const cookie = 'landpage=http://www.22.cn/index.aspx; LANREN_BOTTOM=popupValue; ASP.NET_SessionId=anywwg4ow3fts3stlagmeqdz';

async function handleRequestTest(req, res) {
  try {
    const response = "ok this is a test";

    //将结果返回给客户端
    res.status(200).json(response);
  } catch (error) {
    const responseError = "this basic test is not working";
    res.status(500).json(responseError);
  }
}

async function handleCompareTrademark(req, res) {

  const { keyword, pageIndex } = req.query;
  console.log('------',keyword, pageIndex)
  //get Trademarks by symbol or text
  const params = {
    act: 'similar',
    cls: 35,
    st: 1, //start with
    sc: '1,2,3,4,5,6,7,8,9,10,11',
    me: keyword, //symbol or text
    pageIndex
  }

  const headers = {
    'Cookie': cookie
  };

  try {
    // 发送GET请求
    const response = await axios.get('https://t.22.cn/interface/tradequery.ashx', {
      params: params,
      headers: headers
    });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademark data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

app.get("/handleCompareTrademark", handleCompareTrademark);

app.get("/handleRequestTest", handleRequestTest);

//Functions write here

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
