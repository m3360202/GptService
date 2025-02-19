import express from "express";
import cors from "cors";
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());

app.use(cors()); // Enable All CORS Requests

app.options('*', cors()) // Enable CORS preflight for all routes 测试跨域的时候开启这个地方
app.use(express.static(path.join(__dirname, 'public')));
//Ending points

const cookiePic = '__51vcke__Je2i8VisgdbR8Dl2=d9a5753a-2338-56ef-99f3-e10b89c2a2f7; __51vuft__Je2i8VisgdbR8Dl2=1739180441617; epower_session=hn54gsm8kXrdj9eSg1XsGs9WwU35HenbTsTcNJfg; epower_session_expires=1739681062; __51uvsct__Je2i8VisgdbR8Dl2=7; __vtins__Je2i8VisgdbR8Dl2=%7B%22sid%22%3A%20%226336c57d-7d17-595f-bb32-1b32262fedf0%22%2C%20%22vd%22%3A%203%2C%20%22stt%22%3A%2032497%2C%20%22dr%22%3A%2010992%2C%20%22expires%22%3A%201739682895656%2C%20%22ct%22%3A%201739681095656%7D';

const cookie = 'landpage=http://www.22.cn/index.aspx; LANREN_BOTTOM=popupValue; ASP.NET_SessionId=anywwg4ow3fts3stlagmeqdz';

const appKey = 'quandashi6495266219';
// const appKey = 'quandashi4940841937';
// const executor = "354665567958674f393843776d796e46387047646f413d3d";
const executor = '38627263446159584c355a4a536a336a7a3549542b513d3d';

const getDataCookie = 'SECKEY_ABVK=tQ4p06opV6uTIYw2C8L7g1r+n7QXscY7C1ukyds9eo8%3D; BMAP_SECKEY=viA_dD94NekwwzHj7o2v3WbHlB6rgcHWmJTCv0DmQCJBnHQ2SxysVlOTxRi--AUDeS_FPc3SznAJ9lSFwRHMkpNFdrDEYOddSqvKBZBEjc7PBlqcAtW2eDqnzutLDUF8i96BDzX2V7Uu6U4trhzbifDtKM-Rh3fJDp3T4dKkQoy2nECurEDwhUinBeVmYY78; _csrf-frontend=9444919fbffc977338d620d53a902eaaff64195ff7010f091f1724d5b8b925a6a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%22h4e5cJiEux4YkZBvDP1f9KUGrWYb0g32%22%3B%7D; satoken=2cb69b4c50d26b19675fb965e3da714b0409ac4ed65f910421ffc564bd3722a7a%3A2%3A%7Bi%3A0%3Bs%3A7%3A%22satoken%22%3Bi%3A1%3Bs%3A36%3A%22fa6cd0d2-29d0-425c-bcf0-7ed510c7a096%22%3B%7D; QDS_AGENT_INFO=0d25815e14d0cf1a8a17d3653e560eb20241fdd377be72add35ea803f8b5f9aea%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22QDS_AGENT_INFO%22%3Bi%3A1%3Ba%3A12%3A%7Bs%3A2%3A%22id%22%3Bs%3A48%3A%2238627263446159584c355a4a536a336a7a3549542b513d3d%22%3Bs%3A12%3A%22agentOrganId%22%3Bi%3A16642%3Bs%3A8%3A%22realName%22%3Bs%3A39%3A%22%E6%98%93%E7%9F%A5%E8%A1%8C%E4%BF%9D%E5%AE%9A%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%3Bs%3A5%3A%22phone%22%3Bs%3A11%3A%2213833078686%22%3Bs%3A5%3A%22email%22%3Bs%3A17%3A%223062244746%40QQ.com%22%3Bs%3A7%3A%22orgName%22%3Bs%3A39%3A%22%E6%98%93%E7%9F%A5%E8%A1%8C%E4%BF%9D%E5%AE%9A%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%3Bs%3A9%3A%22agentLogo%22%3Bs%3A0%3A%22%22%3Bs%3A8%3A%22roleType%22%3Bi%3A1%3Bs%3A11%3A%22agentPerson%22%3BN%3Bs%3A11%3A%22sourceToken%22%3Bs%3A36%3A%228acd1a09-22ce-4074-a98d-9908df2f8907%22%3Bs%3A7%3A%22satoken%22%3Bs%3A36%3A%22fa6cd0d2-29d0-425c-bcf0-7ed510c7a096%22%3Bs%3A9%3A%22tokenName%22%3Bs%3A8%3A%22qdsToken%22%3B%7D%7D; QDS_ORGAN_INFO=4fc1361d3477e6aa47e44e0c4405b94d72a3d777e9a0987f934b9838d3130977a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22QDS_ORGAN_INFO%22%3Bi%3A1%3Ba%3A17%3A%7Bs%3A7%3A%22adminId%22%3Bi%3A16642%3Bs%3A13%3A%22adminagencies%22%3Bs%3A39%3A%22%E6%98%93%E7%9F%A5%E8%A1%8C%E4%BF%9D%E5%AE%9A%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%3Bs%3A13%3A%22admincontacts%22%3Bs%3A9%3A%22%E9%A9%AC%E5%BB%BA%E5%86%9B%22%3Bs%3A10%3A%22adminPhone%22%3Bs%3A11%3A%2213833078686%22%3Bs%3A13%3A%22principalName%22%3Bs%3A0%3A%22%22%3Bs%3A12%3A%22principalTel%22%3Bs%3A0%3A%22%22%3Bs%3A7%3A%22address%22%3Bs%3A27%3A%22%E6%B2%B3%E5%8C%97%E7%9C%81%E4%BF%9D%E5%AE%9A%E5%B8%82%E7%AB%9E%E7%A7%80%E5%8C%BA%22%3Bs%3A8%3A%22isChoose%22%3Bs%3A1%3A%220%22%3Bs%3A21%3A%22domesticRecipientName%22%3Bs%3A0%3A%22%22%3Bs%3A24%3A%22domesticRecipientAddress%22%3Bs%3A0%3A%22%22%3Bs%3A25%3A%22domesticRecipientPostcode%22%3Bs%3A0%3A%22%22%3Bs%3A9%3A%22agentLogo%22%3Bs%3A0%3A%22%22%3Bs%3A11%3A%22submitEmail%22%3BN%3Bs%3A11%3A%22agentPerson%22%3BN%3Bs%3A13%3A%22exportSetting%22%3Bs%3A14%3A%227%2C10%2C8%2C9%2C12%2C15%22%3Bs%3A15%3A%22agentPersonList%22%3BN%3Bs%3A8%3A%22userName%22%3Bs%3A9%3A%22%E9%A9%AC%E5%BB%BA%E5%86%9B%22%3B%7D%7D';

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
function addTimeDifferenceToNumber() {
  // 获取当前时间戳
  const currentTimestamp = Date.now();

  // 创建指定日期的时间对象
  const specifiedDate = new Date('2025-02-12T22:52:00Z');

  // 获取指定日期的时间戳
  const specifiedTimestamp = specifiedDate.getTime();

  // 计算时间差
  const timeDifference = BigInt(currentTimestamp) - BigInt(specifiedTimestamp);

  // 将时间差加到指定的数字上
  const largeNumber = "17392689537032950"; // 使用字符串表示大数
  const result = BigInt(largeNumber) + timeDifference;

  return result;
}
async function handleGetGuestList(req, res) {

  //get Trademarks by symbol or text
  const data = { "appKey":  appKey, "signMethod": "md5", "executor": executor, "firstCgNos": [], "status": [], "brandStatusNames": [], "similarStatusNames": [], "brandStatus": [], "honorList": [], "sort": 2, "timeType": 1, "enterprisePatternList": [], "businessRequireList": [], "careTypes": [], "nationality": 1, "type": 7, "userId": "354665567958674f393843776d796e46387047646f413d3d", "pageNo": 3, "pageSize": 20, "isOnlyNew": true, "isFilterConnect": true, "timestamp": 1739272529136, "sign": "17392725808245091" }

  const headers = {
    'qdstoken': '84e20617-7fbc-4ee3-8b58-127e478d0ed8',
    'content-type': 'application/json;charset=UTF-8'
  };

  try {
    // 发送GET请求
    const response = await axios.post('https://phoenix.quandashi.com/clue/clueNew/listClueWithClueNew', data, {
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

async function handleGetTrademarkList(req, res) {

  const { keyword, pageIndex, cls, st, sc } = req.query;
  //get Trademarks by symbol or text
  const params = {
    act: 'similar',
    cls,
    st, //start with
    sc,
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

async function handleGetTrademarkPicList(req, res) {
  const { img_src, cls } = req.body;

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://www.biaoyuan.com',
    'Referer': 'https://www.biaoyuan.com/trademark/tm_img_search',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.97 Safari/537.36 Core/1.116.475.400 QQBrowser/13.5.6267.400',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Sec-Ch-Ua': '"Not)A;Brand";v="24", "Chromium";v="116"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Cookie': cookiePic
  };

  const data = {
    img_src,
    class_id: cls
  };

  try {
    // 清空public/images文件夹
    const imagesDir = path.join(__dirname, 'public', 'images');
    if (fs.existsSync(imagesDir)) {
      fs.rmSync(imagesDir, { recursive: true });
    }
    fs.mkdirSync(imagesDir, { recursive: true });
    // 发送POST请求
    const response = await axios.post('https://www.biaoyuan.com/v1/tm/image_search', data, {
      headers: headers
    });

    // 处理返回的数据
    const modifiedData = await Promise.all(response.data.data.data.map(async (item) => {
      const imageUrl = `https:${item.url}`;
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imageBuffer = imageResponse.data;

      // 设置图片保存路径
      const imageName = path.basename(imageUrl);
      const savePath = path.join(__dirname, 'public', 'images', imageName);

      // 确保目录存在
      fs.mkdirSync(path.dirname(savePath), { recursive: true });

      // 爬取目标数据源图片到服务器
      fs.writeFileSync(savePath, imageBuffer);

      // 返回修改后的数据
      return {
        ...item,
        url: `/images/${imageName}`,
        url150x100: `/images/${imageName}` // 你可以根据需要调整这里的逻辑
      };
    }));

    // 返回请求结果
    res.status(200).json({ data: modifiedData });
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetQDSTrademarkPicList(req, res) {
  const { img_src, cls } = req.body;

  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  };
  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();

  const data = {
    "v": "1.0",
    "executor": executor,
    "sign": resultString,
    "appKey":  appKey,
    "partnerId": "1000",
    "signMethod": "md5",
    "timestamp": resultString,
    "userIde": "354665567958674f393843776d796e46387047646f413d3d",
    "platform": 2,
    "format": "json",
    "topN": 50,
    "category": "",
    "year": "",
    "status": "",
    "法律状态": "",
    "position": "-2.7190102021753164e-14,0,347,287",
    "modalType": 1,
    "检索模型": 1,
    "群组": "",
    "imageDataUrl": "brand/2025/02/11/d17a713b-632e-45c0-8f81-fb81f6ba46e4/微信图片_20250210183135.png",
    "imageData": img_src
  };

  try {

    // 发送POST请求
    const response = await axios.post('https://phoenix.quandashi.com/brandSearch/brandImageSearch', data, {
      headers: headers
    });
    // console.log('aaaaaaa',response?.data?.data);


    // 返回请求结果
    res.status(200).json({ data: response?.data?.data });
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetQDSTrademarkMutilList(req, res) {
  const { keywords, cls, total } = req.body;

  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  };
  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();

  const data = {
    "v": "1.0",
    "executor": executor,
    "sign": resultString,
    "appKey":  appKey,
    "partnerId": "1000",
    "signMethod": "md5",
    "timestamp": resultString,
    "userIde": "354665567958674f393843776d796e46387047646f413d3d",
    "platform": 1,
    "brandNames": keywords,
    "applicantFilter": "",
    "pageNo": 0,
    "pageSize": 10,
    "total": total,
    "typeCode": cls
  };

  try {

    // 发送POST请求
    const response = await axios.post('https://phoenix.quandashi.com/brandSearch/batchCheck', data, {
      headers: headers
    });
    // console.log('aaaaaaa',response?.data?.data);


    // 返回请求结果
    res.status(200).json({ data: response?.data });
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

async function handleGetWUXIAOTargetList(req, res) {
  const { pageNo, pageSize } = req.body;

  const headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Host': 'client.qianjianjihua.com',
    'Origin': 'http://client.qianjianjihua.com',
    'Referer': 'http://client.qianjianjihua.com/customer-clue/wxdb',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'Cookie': getDataCookie
  };

  const data = new URLSearchParams();
  data.append('pageNo', pageNo);
  data.append('pageSize', pageSize);
  data.append('sortField', 'create_time');
  data.append('descAsc', 'desc');
  data.append('isShowTopApplicant', 0);
  data.append('filterExport', 1);

  try {
    const response = await axios.post('http://client.qianjianjihua.com/customer-clue/query-wxddb-clue-list', data, { headers: headers });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetThreeClueList(req, res) {
  const { pageNo, pageSize } = req.params;

  const headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Host': 'client.qianjianjihua.com',
    'Origin': 'http://client.qianjianjihua.com',
    'Referer': 'http://client.qianjianjihua.com/customer-clue/wxdb',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'Cookie': getDataCookie
  };

  try {
    const response = await axios.get(`http://client.qianjianjihua.com/customer-clue/query-three-clue-list?pageNo=${pageNo}&pageSize=${pageSize}&intCls=&province=&city=&regYear=&appDate=&state=&%E4%B8%80%E7%BA%A7%E5%9C%B0%E5%8C%BA=&%E4%BA%8C%E7%BA%A7%E5%9C%B0%E5%8C%BA=&xzDateType=&nameType=&beConnected=&applicantType=&similar=1&similarStatusName=&sortField=create_time&descAsc=desc&riskTm=&rejectAppdate=&changeType=&createStartDate=&createEndDate=&tmCountStr=&isShowTopApplicant=0&businessStatus=&connectType=&bookType=&similarStatus=&statusName=&filingStatus=&industry=&filterExport=1`, { headers: headers });

    // Return the request result
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching threeClueList data:', error);
    res.status(500).json({ error: 'Failed to fetch threeClueList data' });
  }
}

async function handleGetCHESANargetList(req, res) {
  const { pageNo, pageSize } = req.body;

  const headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Host': 'client.qianjianjihua.com',
    'Origin': 'http://client.qianjianjihua.com',
    'Referer': 'http://client.qianjianjihua.com/customer-clue/wxdb',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'Cookie': getDataCookie
  };

  const data = new URLSearchParams();
  data.append('pageNo', pageNo);
  data.append('pageSize', pageSize);
  data.append('sortField', 'create_time');
  data.append('descAsc', 'desc');
  data.append('isShowTopApplicant', 0);
  data.append('filterExport', 1);

  try {
    const response = await axios.post('http://client.qianjianjihua.com/customer-clue/query-csddb-clue-list', data, { headers: headers });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetBHList(req, res) {
  const { pageNo, pageSize } = req.body;

  const headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Host': 'client.qianjianjihua.com',
    'Origin': 'http://client.qianjianjihua.com',
    'Referer': 'http://client.qianjianjihua.com/customer-clue/wxdb',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
    'Cookie': getDataCookie
  };

  const data = new URLSearchParams();
  data.append('pageNo', pageNo);
  data.append('pageSize', pageSize);
  data.append('sortField', 'create_time');
  data.append('descAsc', 'desc');
  data.append('statusName', '驳回待复审');
  data.append('filterExport', 1);

  try {
    const response = await axios.post('http://client.qianjianjihua.com/customer-clue/query-bhdfs-clue-list', data, { headers: headers });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

app.get("/handleGetTrademarkList", handleGetTrademarkList);

app.get("/handleGetGuestList", handleGetGuestList);

app.post("/handleGetTrademarkPicList", handleGetTrademarkPicList);

app.post("/handleGetQDSTrademarkPicList", handleGetQDSTrademarkPicList);

app.post("/handleGetQDSTrademarkMutilList", handleGetQDSTrademarkMutilList);

app.post("/handleGetTargetList", handleGetCHESANargetList);

app.post("/handleGetBHList", handleGetBHList);

app.get("/handleGetTrademarkDetail", handleGetTrademarkDetail);

app.get("/handleGetAllTrademarks", handleGetAllTrademarks);

app.get("/handleGetThreeClueList", handleGetThreeClueList);

app.get("/handleRequestTest", handleRequestTest);

//Functions write here

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
