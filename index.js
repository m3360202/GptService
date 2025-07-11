import express from "express";
import cors from "cors";
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { date } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());

app.use(cors()); // Enable All CORS Requests

app.options('*', cors()) // Enable CORS preflight for all routes 测试跨域的时候开启这个地方
app.use(express.static(path.join(__dirname, 'public')));
//Ending points

const cookiePic = '__51vcke__Je2i8VisgdbR8Dl2=d9a5753a-2338-56ef-99f3-e10b89c2a2f7; __51vuft__Je2i8VisgdbR8Dl2=1739180441617; epower_session=WZEPPw0Yrgs0gI5mp36UNxnEuekQFzqvLL4UILVT; epower_session_expires=1740548953; __51uvsct__Je2i8VisgdbR8Dl2=10; __vtins__Je2i8VisgdbR8Dl2=%7B%22sid%22%3A%20%2203b3fe6a-521b-57e5-a866-3192eacf327a%22%2C%20%22vd%22%3A%203%2C%20%22stt%22%3A%2015858%2C%20%22dr%22%3A%2010989%2C%20%22expires%22%3A%201740550769522%2C%20%22ct%22%3A%201740548969522%7D';

const cookie = 'landpage=http://www.22.cn/index.aspx; LANREN_BOTTOM=popupValue; ASP.NET_SessionId=anywwg4ow3fts3stlagmeqdz';

const cookieQixin = 'web-canary=always; flogger_fpid=aaf00055715f460f8057608ebc8a4e39; adv-banner_visible=%5B%5D; fid=c95ee9b7c8a1cf731c1d9e7ca59f6b8c; pdid=s%3AzGK1UzS_WYiUWQofSntIRR-KWxu4eKWa.XngoFL2C%2BPOeLR3fxeIQpDCUFaocxXyHt1gWun5eMrg; aliyungf_tc=3ab5552c711309c1493a335a8debd73a2ff299e5e770fb8557c7d1693983d482; acw_tc=ac11000117518044990775393e939a0c559ce8bb0992c98aff6189b99a5cb2; Hm_lvt_52d64b8d3f6d42a2e416d59635df3f71=1751703163,1751703323,1751766194,1751804467; HMACCOUNT=F04A050687397451; Hm_lpvt_52d64b8d3f6d42a2e416d59635df3f71=1751804641'

const bedb0 = '15526a5da268751a887039835e797c3189f7793522d2fe8aa379d3f6e469d76e'

const fk = 'm2utchkmu3w40ofkn9'

const globalAppKey = 'quandashi4380977532';
const globalExecutor = '354665567958674f393843776d796e46387047646f413d3d';
// const appKey = 'quandashi4940841937';
// const executor = "354665567958674f393843776d796e46387047646f413d3d";
const executor = '2b6f4b434b31397173573767722f397967476f6273673d3d';
const appKey = 'quandashi6495266219';
const qdexecutor = '706f624f47546a7176496358796e52637636753774513d3d';
const qdappKey = 'quandashi4940841937';
const getDataCookie = 'SECKEY_ABVK=ee/rI2uMH6jnWgd7gyYJ7MX3YuALOPMZgv2o4EkHrPM%3D; BMAP_SECKEY=keVqxHDTrTZ3U2BkenO_QTKg8aD8UYoKU6t6s7CxaAQuzWHTymj6cFm8NsFsqNzxEQjkxL7c-IjT_BMRM-6UlabSZU2QZfy78YUTIAHxUSfxdaQn_PoP9seykBKmfZ4_OyHa8rdpQ3q1jsFScTsPZdO2BxCmx-4PiYiq37vnykT5Zve6TvQlqHI2jxCwXlPB; _csrf-frontend=52510864424ec62462f7feb45f57e31e296e9e3321737a8e7f5d7fd9e2a331a0a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22_csrf-frontend%22%3Bi%3A1%3Bs%3A32%3A%22KHaDLvVGVP2FJCNsd4jpIsyqVJNIMm2X%22%3B%7D; satoken=d7d469610fb0ae289b0d58008d98856fc2ecd4629bdf9d39c66e9ece05123cdea%3A2%3A%7Bi%3A0%3Bs%3A7%3A%22satoken%22%3Bi%3A1%3Bs%3A36%3A%2204aa3c21-729f-43ae-b44c-bda3bcaec68c%22%3B%7D; QDS_AGENT_INFO=180e705f8784f70f46cfb4b1d860f8b042662bfb5fd6c2841fc943bf5ce3ce48a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22QDS_AGENT_INFO%22%3Bi%3A1%3Ba%3A12%3A%7Bs%3A2%3A%22id%22%3Bs%3A48%3A%222b6f4b434b31397173573767722f397967476f6273673d3d%22%3Bs%3A12%3A%22agentOrganId%22%3Bi%3A16695%3Bs%3A8%3A%22realName%22%3Bs%3A45%3A%22%E6%98%93%E7%9F%A5%E8%A1%8C%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%3Bs%3A5%3A%22phone%22%3Bs%3A11%3A%2215831470766%22%3Bs%3A5%3A%22email%22%3Bs%3A17%3A%221159698312%40qq.com%22%3Bs%3A7%3A%22orgName%22%3Bs%3A45%3A%22%E6%98%93%E7%9F%A5%E8%A1%8C%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%3Bs%3A9%3A%22agentLogo%22%3Bs%3A0%3A%22%22%3Bs%3A8%3A%22roleType%22%3Bi%3A1%3Bs%3A11%3A%22agentPerson%22%3BN%3Bs%3A11%3A%22sourceToken%22%3Bs%3A36%3A%2207ac1655-bc69-4616-9efd-63b24eb9bc36%22%3Bs%3A7%3A%22satoken%22%3Bs%3A36%3A%2204aa3c21-729f-43ae-b44c-bda3bcaec68c%22%3Bs%3A9%3A%22tokenName%22%3Bs%3A8%3A%22qdsToken%22%3B%7D%7D; QDS_ORGAN_INFO=baac0e26a2978eed0d2b792a67dedab9766afc6967cdb6c02cac219075cf38caa%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22QDS_ORGAN_INFO%22%3Bi%3A1%3Ba%3A17%3A%7Bs%3A7%3A%22adminId%22%3Bi%3A16695%3Bs%3A13%3A%22adminagencies%22%3Bs%3A45%3A%22%E6%98%93%E7%9F%A5%E8%A1%8C%EF%BC%88%E5%8C%97%E4%BA%AC%EF%BC%89%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%22%3Bs%3A13%3A%22admincontacts%22%3Bs%3A9%3A%22%E5%BC%A0%E5%AE%87%E8%BE%B0%22%3Bs%3A10%3A%22adminPhone%22%3Bs%3A11%3A%2215831470766%22%3Bs%3A13%3A%22principalName%22%3Bs%3A0%3A%22%22%3Bs%3A12%3A%22principalTel%22%3Bs%3A0%3A%22%22%3Bs%3A7%3A%22address%22%3Bs%3A18%3A%22%E5%8C%97%E4%BA%AC%E5%B8%82%E6%9C%9D%E9%98%B3%E5%8C%BA%22%3Bs%3A8%3A%22isChoose%22%3Bs%3A1%3A%220%22%3Bs%3A21%3A%22domesticRecipientName%22%3Bs%3A0%3A%22%22%3Bs%3A24%3A%22domesticRecipientAddress%22%3Bs%3A0%3A%22%22%3Bs%3A25%3A%22domesticRecipientPostcode%22%3Bs%3A0%3A%22%22%3Bs%3A9%3A%22agentLogo%22%3Bs%3A0%3A%22%22%3Bs%3A11%3A%22submitEmail%22%3BN%3Bs%3A11%3A%22agentPerson%22%3BN%3Bs%3A13%3A%22exportSetting%22%3Bs%3A14%3A%227%2C10%2C8%2C9%2C12%2C15%22%3Bs%3A15%3A%22agentPersonList%22%3BN%3Bs%3A8%3A%22userName%22%3Bs%3A9%3A%22%E5%BC%A0%E5%AE%87%E8%BE%B0%22%3B%7D%7D';

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

async function handleGetGlobalPicList(req, res) {
  const { img_src, cls, modal } = req.body;

  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'User-Agent': '	Apifox/1.0.0 (https://apifox.com)',
    'Host': 'phoenix.quandashi.com',
  };
  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();

  const data = {
    "v": "1.0",
    "executor": globalExecutor,
    "identityIde": globalExecutor,
    "userId": globalExecutor,
    "userIde": globalExecutor,
    "sign": resultString,
    "appKey":  globalAppKey,
    "pageNo":1,
    "pageSize": 50,
    "signMethod": "md5",
    "timestamp": resultString,
    "userIde": "354665567958674f393843776d796e46387047646f413d3d",
    "platform": 2,
    "format": "json",
    "topN": 50,
    "category": cls,
    "keyType": "no_val",
    "year": "",
    "status": "",
    "法律状态": "",
    "position": "-2.7190102021753164e-14,0,347,287",
    "retrievalModel": 1,
    "topN": 2000,
    "timestamp": Date.now(),
    "imageDataUrl": "brand/2025/02/11/d17a713b-632e-45c0-8f81-fb81f6ba46e4/微信图片_20250210183135.png",
    "imageData": img_src
  };

  try {

    // 发送POST请求
    const response = await axios.post('https://phoenix.quandashi.com/global/brandList', data, {
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

async function handleGetQDSTrademarkPicList(req, res) {
  const { img_src, cls, modal } = req.body;

  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    // 'Host': 'phoenix.quandashi.com',
    'client': 'v2',
    'Origin': 'http://client.qianjianjihua.com',
    'satoken': '450f412e-fd3a-484d-9de5-3ef7eba38aa9'
  };
  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();

  const data = {
    "appKey":  "quandashi6495266219",
    "category": "",
    "executor": "2b6f4b434b31397173573767722f397967476f6273673d3d",
    "format": "json",
    "imageDataUrl": "brand/2025/07/11/25789153-1fbb-47f2-ba12-278a860b80b9/WX20250711-173000@2x.png",
    "imageData": img_src,
    "modalType": 0,
    
    "partnerId": "1000",
    "position": "0,0,250,256",
    "signMethod": "md5",
    "status": "",
    
    "sign": resultString,
    "timestamp": resultString,
    "userIde": "2b6f4b434b31397173573767722f397967476f6273673d3d",
    "v": "1.0",
    "topN": 2000,
    "category": cls,
    "year": "",
    "法律状态": "",
    "检索模型": 0,
    "群组": "",

  };

  try {

    // 发送POST请求
    const response = await axios.post('https://phoenix.quandashi.com/brand/brandImageSearch', data, {
      headers: headers
    });
    console.log('aaaaaaa',response?.data);


    // 返回请求结果
    const searchReport = response?.data?.data;
    
    // if (searchReport && cls) {
    //   // 将cls转换为数组（如果不是数组的话）
    //   const clsArray = Array.isArray(cls) ? cls : [cls];
      
    //   // 根据cls提取对应的数据
    //   const extractedData = [];
    //   clsArray.forEach(clsItem => {
    //     if (searchReport[clsItem]) {
    //       extractedData.push({
    //         cls: clsItem,
    //         ...searchReport[clsItem]
    //       });
    //     }
    //   });
      
    //   // 整理数据格式
    //   const formattedData = extractedData.map(item => ({
    //     类别: item.cls,
    //     风险等级: item.风险等级,
    //     近似总数: item.近似总数,
    //     近似数据: item.近似数据 || [],
    //     群组风险: item.群组风险 || {}
    //   }));
      
    //   res.status(200).json({ data: formattedData });
    // } else {
    //   // 如果没有cls参数或检索报告为空，返回原始数据
    //   res.status(200).json({ data: searchReport });
    // }
    return res.status(200).json({ data: searchReport });
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleUpdateAddress(req, res) {
  const { detailId } = req.body;

  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'User-Agent': '	Apifox/1.0.0 (https://apifox.com)',
    'Host': 'phoenix.quandashi.com',
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
    "isClientDetail": 1,
    "source": 1,
    "userIde": "38627263446159584c355a4a536a336a7a3549542b513d3d",
    "detailId": detailId
  }

  try {

    // 发送POST请求
    const response = await axios.post('https://phoenix.quandashi.com/brandSearch/brandSearchDetailByDetailId', data, {
      headers: headers
    });
    // console.log('aaaaaaa',response?.data?.data);

    // 返回请求结果
    res.status(200).json({ data: response?.data?.data.brand.address });
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetQDSTrademarkMutilListOld(req, res) {
  const { keywords, cls, total } = req.body;

  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'User-Agent': '	Apifox/1.0.0 (https://apifox.com)',
    'Host': 'phoenix.quandashi.com',

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
     console.log('aaaaaaa',response?.data);


    // 返回请求结果
    res.status(200).json({ data: response?.data });
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetQDSTrademarkMutilList(req, res) {
  const { keywords, cls, total } = req.body;

  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': '	Apifox/1.0.0 (https://apifox.com)',
    'Host': 'qds.quandashi.com',
    'Referer': 'https://so.quandashi.com/',
    'Qdstoken': '02caa99f-7b91-41d4-9863-13a40f7ea5f5'

  };
  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();

  const data = {
    "advanceFilter":"",
    "appKey":"quandashi4380977532",
    "brandRule":"1",
    "countryName":"",
    "createYear":"",
    "field":"all",
    "groupFilter":"",
    "intCls":"",
    "page":0,
    "pageSize":20,
    "param":2,
    "partnerId":"1000",
    "platform":1,
    "q":keywords,
    "searchKey":"",
    "serviceGoods":cls,
    "sign":resultString,
    "signMethod":"md5",
    "sort":"",
    "statusName":"",
    "style":"",
    "timestamp":resultString,
    "typeCode":cls,
    "userName":"",
    "v":"1.0",
    "代理机构筛选":"",
    "商标筛选":"",
    "标源":0,
    "检索报告":"1_返回近似数据_10",
    "申请人地址筛选":"",
    "申请人筛选":"",
    "评审文书":0}
  try {

    // 发送POST请求
    const response = await axios.post('https://qds.quandashi.com/brandSearch/webBrandSearch', data, {
      headers: headers
    });
     console.log('aaaaaaa',response?.data);


    // 返回请求结果
    res.status(200).json({ data: response?.data?.data?.['检索报告'] });
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

// 通过启信宝获取当前公司的电话信息
async function handleGetqixinPhone(key, page) {

  const headers = {
    'bedb0': bedb0,
    'fk': fk,
    'host': 'www.qixin.com',
    'ok': '[{"name":"items[].name","type":"e"}]',
    'Cookie': cookieQixin,
    'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
    'content-type': 'application/json',
    'Accept': '*/*',
    'Connection': 'keep-alive',
    'Accept-Encoding': 'gzip, deflate, br',
    'Origin': 'https://www.qixin.com',
    'Referer': 'https://www.qixin.com/',
    'Sec-Ch-Ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
  };

  const data = {
    key: key,
    page: page
  };

  console.log('启信宝请求参数:', { key, page });
  console.log('启信宝请求头:', headers);
  console.log('启信宝请求数据:', data);

  try {
    // 发送POST请求
    const response = await axios.post('https://www.qixin.com/api-proxy/search/common', data, {
      headers: headers,
      timeout: 10000 // 10秒超时
    });
    
    console.log('启信宝响应状态:', response.status);
    console.log('启信宝响应头:', response.headers);
    console.log('启信宝获取当前公司的电话信息 response', key, page, response?.data);
    
    // 检查返回数据是否有效
    if (response.data && response.data.items && response.data.items.length > 0) {
      const firstItem = response.data.items[0];
      const phone = firstItem.phone || '';
      
      console.log('成功获取电话号码:', phone);
      // 返回第一个元素的phone属性值
      return phone;
    } else {
      console.log('启信宝返回数据为空或无有效项目');
      return null;
    }
  } catch (error) {
    // 处理错误
    console.error('Error fetching qixin phone data:', error.message);
    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response data:', error.response.data);
    }
    return null;
  }
}


async function handleGetqjWUXIAOTargetList(req, res) {
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

async function handleGetqianjianCHESANargetList(req, res) {
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
  data.append('sortField', 'accept_date');
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
async function handleGetCHESANargetList(req, res) {
  const { pageNo, pageSize } = req.body;

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Host': 'phoenix.quandashi.com',
    'Origin': 'http://www.haixingip.com',
    'Referer': 'http://www.haixingip.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'client': 'v2',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive'
  };
  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();
  const data = {
    appKey: qdappKey,
    signMethod: "md5",
    executor: qdexecutor,
    firstCgNos: [],
    status: [],
    brandStatusNames: [],
    similarStatusNames: [],
    receiveToNow: "1",//1 2 3 4
    brandStatus: [],
    honorList: [],
    sort: 2,
    timeType: 1,
    enterprisePatternList: [],
    businessRequireList: [],
    careTypes: [],
    type: 4,
    userId: "706f624f47546a7176496358796e52637636753774513d3d",
    pageNo: pageNo,
    pageSize: pageSize,
    isOnlyNew: true,
    isFilterConnect: true,
    timestamp: resultString,
    sign: resultString
  };

  try {
    const response = await axios.post('https://phoenix.quandashi.com/clue/clueNew/listClueWithClueNew', data, { headers: headers });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}
async function handleGetWUXIAOTargetList(req, res) {
  const { pageNo, pageSize } = req.body;

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Host': 'phoenix.quandashi.com',
    'Origin': 'http://www.haixingip.com',
    'Referer': 'http://www.haixingip.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'client': 'v2',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive'
  };

  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();
  const data = {
    appKey: qdappKey,
    signMethod: "md5",
    executor: qdexecutor,
    firstCgNos: [],
    status: [],
    brandStatusNames: [],
    similarStatusNames: [],
    receiveToNow: "1",//1 2可用
    brandStatus: [],
    honorList: [],
    sort: 2,
    timeType: 1,
    enterprisePatternList: [],
    businessRequireList: [],
    careTypes: [],
    type: 10,
    userId: "706f624f47546a7176496358796e52637636753774513d3d",
    pageNo: pageNo,
    pageSize: pageSize,
    isOnlyNew: true,
    isFilterConnect: true,
    timestamp: resultString,
    sign: resultString
  };

  // 延迟函数
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  try {
    const response = await axios.post('https://phoenix.quandashi.com/clue/clueNew/listClueWithClueNew', data, { headers: headers });

    // 返回处理后的结果
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
    'Accept': 'application/json, text/plain, */*',
    'Host': 'phoenix.quandashi.com',
    'Origin': 'http://www.haixingip.com',
    'Referer': 'http://www.haixingip.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'client': 'v2',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'Content-Type': 'application/json',
    'Connection': 'keep-alive'
  };

  const result = addTimeDifferenceToNumber();
  const resultString = result.toString();
  const data = {
    appKey: qdappKey,
    signMethod: "md5",
    executor: qdexecutor,
    endDate: "2025-07-06",
    firstCgNos: [],
    status: [],
    brandStatusNames: [],
    similarStatusNames: [],
    appToNow: "",//1 2可以有效
    brandStatus: [],
    honorList: [],
    sort: 2,
    timeType: 1,
    enterprisePatternList: [],
    businessRequireList: [],
    careTypes: [],
    type: 3,
    userId: "706f624f47546a7176496358796e52637636753774513d3d",
    pageNo: pageNo,
    pageSize: pageSize,
    isOnlyNew: true,
    isFilterConnect: true,
    timestamp: resultString,
    sign: resultString
  };

  try {
    const response = await axios.post('https://phoenix.quandashi.com/clue/clueNew/listClueWithClueNew', data, { headers: headers });

    // 返回请求结果
    res.status(200).json(response.data);
  } catch (error) {
    // 处理错误
    console.error('Error fetching trademarkList data:', error);
    res.status(500).json({ error: 'Failed to fetch trademark data' });
  }
}

async function handleGetqjBHList(req, res) {
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
  data.append('sortField', 'reject_date');
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

app.post("/handleUpdateAddress", handleUpdateAddress);

app.get("/handleGetTrademarkList", handleGetTrademarkList);

app.get("/handleGetGuestList", handleGetGuestList);

app.post("/handleGetTrademarkPicList", handleGetTrademarkPicList);

app.post("/handleGetQDSTrademarkPicList", handleGetQDSTrademarkPicList);

app.post("/handleGetGlobalPicList", handleGetGlobalPicList);

app.post("/handleGetQDSTrademarkMutilList", handleGetQDSTrademarkMutilList);

app.post("/handleGetTargetList", handleGetCHESANargetList);

app.post("/handleGetBHList", handleGetBHList);

app.post("/handleGetWUXIAOTargetList", handleGetWUXIAOTargetList);

app.get("/handleGetTrademarkDetail", handleGetTrademarkDetail);

app.get("/handleGetAllTrademarks", handleGetAllTrademarks);

app.get("/handleGetThreeClueList", handleGetThreeClueList);

app.get("/handleRequestTest", handleRequestTest);

app.post("/handleGetqixinPhone", handleGetqixinPhone);

// 添加一个独立的启信宝接口路由用于测试
app.post("/handleGetqixinPhoneTest", async (req, res) => {
  const { key, page } = req.body;
  console.log('handleGetqixinPhoneTest', key, page);
  try {
    const phone = await handleGetqixinPhone(key, page);
    res.status(200).json({ phone: phone });
  } catch (error) {
    console.error('Error in handleGetqixinPhoneTest:', error);
    res.status(500).json({ error: 'Failed to fetch qixin phone data' });
  }
});

//Functions write here

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
