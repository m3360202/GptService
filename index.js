import langchain from "langchain";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage, AIMessage } from "langchain/schema";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { loadQAStuffChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { loadQARefineChain } from "langchain/chains";
import { loadQAMapReduceChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const tokenList = [
  "sk-kyTesnlEcYH2Wk4PpsfRCysuTOMzX",
  "sk-2NXtwfKhQ7PkEHdHavbiU9Iq0KZTwK",
];
// langchain
const OpenAIlangchain = new ChatOpenAI({
  openAIApiKey: "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",
  modelName: "gpt-4",
});

const AzureOpenAIlangchain = new ChatOpenAI({
  azureOpenAIApiKey: "0a2dcdf910784ba0bf070787646409d7",
  azureOpenAIApiInstanceName: "boardxai",
  azureOpenAIApiDeploymentName: "gpt35-16k",
  azureOpenAIApiVersion: "2023-06-01-preview",
});

addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  //判断tokens是否等于tokenList中的某一个
  const { tokens } = event.request.json();
  if (tokens !== null && tokenList.includes(tokens)) {
    if (
      event.request.method === "POST" &&
      url.pathname === "/handleRequestAIChatGpt35"
    ) {
      event.respondWith(handleRequestAIChatGpt35(event.request));
    } else if (
      event.request.method === "POST" &&
      url.pathname === "/handleRequestAIChatGpt4"
    ) {
      event.respondWith(handleRequestAIChatGpt4(event.request));
    } else if (
      event.request.method === "POST" &&
      url.pathname === "/handleParsePDFFileContent"
    ) {
      event.respondWith(handleParsePDFFileContent(event.request));
    } else if (
      event.request.method === "GET" &&
      url.pathname === "/handleRequestTest"
    ) {
      event.respondWith(handleRequestTest(event.request));
    } else {
      // 如果是其他类型请求或者url路径不匹配，返回405 Method Not Allowed
      event.respondWith(
        new Response("Invalid request method or path", { status: 405 })
      );
    }
  } else {
    event.respondWith(new Response("Invalid token", { status: 403 }));
  }
});

async function handleRequestAIChatGpt35(request) {
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const { prompt, messages } = await request.json();

    let pastMessages = [];
    for (const item of messages) {
      if (item.role === "system") {
        pastMessages.push(new SystemMessage(item.content));
      }
      if (item.role === "user") {
        pastMessages.push(new HumanMessage(item.content));
      }
      if (item.role === "assistant") {
        pastMessages.push(new AIMessage(item.content));
      }
    }

    // 初始化内存和链
    const memory = new BufferMemory({
      chatHistory: new ChatMessageHistory(pastMessages),
    });

    const chain = new ConversationChain({
      llm: AzureOpenAIlangchain,
      memory: memory,
    });

    // 调用链并获取响应
    const response = await chain.call({
      input: prompt,
    });

    //将结果返回给客户端
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleRequestAIChatGpt4(request) {
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const { prompt, messages } = await request.json();

    let pastMessages = [];
    for (const item of messages) {
      if (item.role === "system") {
        pastMessages.push(new SystemMessage(item.content));
      }
      if (item.role === "user") {
        pastMessages.push(new HumanMessage(item.content));
      }
      if (item.role === "assistant") {
        pastMessages.push(new AIMessage(item.content));
      }
    }

    // 初始化内存和链
    const memory = new BufferMemory({
      chatHistory: new ChatMessageHistory(pastMessages),
    });

    const chain = new ConversationChain({
      llm: OpenAIlangchain,
      memory: memory,
    });

    // 调用链并获取响应
    const response = await chain.call({
      input: prompt,
    });

    //将结果返回给客户端
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleParsePDFFileContent(request) {
  try {
    const { tempFilePath } = await request.json();

    const loader = new PDFLoader(tempFilePath, {
      splitPages: false,
    });

    const docs = await loader.load();

    return new Response(JSON.stringify(docs), { status: 200 });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleRequestTest(request) {
  try {
    const response = "ok this is a test";
    //将结果返回给客户端
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}
