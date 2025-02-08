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

async function handleGetTrademarkList(req, res) {

  const { keyword, pageIndex } = req.query;
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
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetTrademarkDetail(req, res) {
  const { cls, detailId } = req.query;

  const headers = {
    'Cookie': cookie,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Referer': `https://t.22.cn/Trademark/Detail/${detailId}`,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
  };

  const data = new URLSearchParams();
  data.append('Act', 'info');
  data.append('Cls', cls);
  data.append('Tmid', detailId);

  try {
    // 发送Post请求
    const response = await axios.post(`https://t.22.cn/Interface/TradeQuery.ashx`, data, {
      headers: headers
    });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkDetail data:', error);
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    res.status(500).json({ error: 'Failed to fetch trademark data', details: error.message });
  }
}


async function handleGetAllTrademarks(req, res) {
  const { Ps, Pi, keyword, type, state, pageIndex } = req.query;

  const headers = {
    'Cookie': cookie,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
  };

  const data = new URLSearchParams();
  data.append('act', 'query');
  data.append('Ps', Ps);
  data.append('Pi', Pi);
  data.append('keyword', keyword);
  data.append('type', type);
  data.append('state', state);
  data.append('pageIndex', pageIndex);

  try {
    // 发送Post请求
    const response = await axios.post(`https://t.22.cn/Interface/TradeQuery.ashx`, data, {
      headers: headers
    });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkDetail data:', error);
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    res.status(500).json({ error: 'Failed to fetch trademark data', details: error.message });
  }
}


app.get("/handleGetTrademarkList", handleGetTrademarkList);

app.get("/handleGetTrademarkDetail", handleGetTrademarkDetail);

app.get("/handleGetAllTrademarks", handleGetAllTrademarks);

app.get("/handleRequestTest", handleRequestTest);

//Functions write here

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
