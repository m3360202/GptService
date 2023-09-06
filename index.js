import langchain from "langchain";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage, AIMessage } from "langchain/schema";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { loadQARefineChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import OpenAI from "openai";

const tokenList = [
  "sk-kyTesnlEcYH2Wk4PpsfRCysuTOMzX",
  "sk-2NXtwfKhQ7PkEHdHavbiU9Iq0KZTwK",
];

const headers = {
  "Access-Control-Allow-Origin": "*", // change this to match your deployment
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS,FETCH",
  "Access-Control-Allow-Headers": "Content-Type",
};

function handlePreflight(request) {
  if (
    request.headers.get("Origin") !== null &&
    request.headers.get("Access-Control-Request-Method") !== null &&
    request.headers.get("Access-Control-Request-Headers") !== null
  ) {
    // Handle CORS preflight request.
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Allow-Headers": "*",
    };
    return new Response(null, { headers });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, { headers: { Allow: "POST,OPTIONS" } });
  }
}

addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === "OPTIONS") {
    // Handle CORS preflight request.
    event.respondWith(handlePreflight(event.request));
  } else if (
    event.request.method === "GET" &&
    url.pathname === "/handleRequestAIChatGpt35"
  ) {
    event.respondWith(handleRequestAIChatGpt35(event.request));
  } else if (
    event.request.method === "POST" &&
    url.pathname === "/handleRequestAIChatGpt5"
  ) {
    event.respondWith(handleRequestAIChatGpt5(event.request));
  } else if (
    event.request.method === "POST" &&
    url.pathname === "/handleRequestAIChatGpt4"
  ) {
    event.respondWith(handleRequestAIChatGpt4(event.request));
  } else if (
    event.request.method === "POST" &&
    url.pathname === "/handleRequestAIChatGpt40"
  ) {
    event.respondWith(handleRequestAIChatGpt40(event.request));
  } else if (
    event.request.method === "POST" &&
    url.pathname === "/handleRequestAIWidgetConvergeGpt35"
  ) {
    event.respondWith(handleRequestAIWidgetConvergeGpt35(event.request));
  } else if (
    event.request.method === "POST" &&
    url.pathname === "/handleRequestAIWidgetConvergeGpt4"
  ) {
    event.respondWith(handleRequestAIWidgetConvergeGpt4(event.request));
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
});

async function handleRequestAIChatGpt35(request) {
  
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const prompt = '核废水的危害是什么';
    const messages = [];
    const key ='0a2dcdf910784ba0bf070787646409d7';
    const { readable, writable } = new TransformStream();
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

    // langchain
    const AzureOpenAIlangchain = new ChatOpenAI({
      azureOpenAIApiKey: key,
      azureOpenAIApiInstanceName: "boardxai",
      azureOpenAIApiDeploymentName: "gpt35-16k",
      azureOpenAIApiVersion: "2023-06-01-preview",
      streaming: true,
    });

    const chain = new ConversationChain({
      llm: AzureOpenAIlangchain,
      memory: memory,
    });

    const writer = writable.getWriter();

    // 调用链并获取响应
    chain.call({
      input: prompt,
      callbacks: [
        {
          handleLLMNewToken(token) {
            console.log({ token });
            if(token){
              writable.getWriter().write(`data: ${JSON.stringify(token)}\n\n`);
            }
            
          },
        },
      ],
    }).then(() => {
        // 处理完成后，关闭流
        writer.close();
    }).catch(e => {
        // 处理错误
        console.error(e);
        writer.abort(e);
        throw e;
    });


    return new Response(readable, { status: 200,headers:{...headers,'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'}});

  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500,headers: headers });
  }
}

async function handleRequestAIChatGpt5(request) {
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const { prompt, messages, key } = await request.json();

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

    const AzureOpenAIlangchain = new ChatOpenAI({
      azureOpenAIApiKey: key,
      azureOpenAIApiInstanceName: "boardxai",
      azureOpenAIApiDeploymentName: "gpt35-16k",
      azureOpenAIApiVersion: "2023-06-01-preview",
      streaming: true,
    });

    const memory = new BufferMemory({
      chatHistory: new ChatMessageHistory(pastMessages),
    });

    let { readable, writable } = new TransformStream();

    let writer = writable.getWriter();

    const textEncoder = new TextEncoder();

    const chain = new ConversationChain({
      llm: AzureOpenAIlangchain,
      memory: memory,
    });

    // 调用链并获取响应
    const response = await chain.call({
      input: prompt,
      callbacks: [
        {
          handleLLMNewToken(tokens) {
            console.warn("tokens", tokens);
            writer.write(textEncoder.encode(tokens));
          },
        },
      ],
    });

    writer.close();

    return new Response(readable, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleRequestAIChatGpt40(request) {
  try {
    const { prompt, messages, key } = await request.json();

    const openai = new OpenAI({
      apiKey: key,
    });

    // make our request to the OpenAI API
    const stream = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      stream: true,
    });

    // Using our readable and writable to handle streaming data
    let { readable, writable } = new TransformStream();

    let writer = writable.getWriter();
    const textEncoder = new TextEncoder();

    // loop over the data as it is streamed from OpenAI and write it using our writeable
    for await (const part of stream) {
      console.log(part.choices[0]?.delta?.content || "");
      writer.write(textEncoder.encode(part.choices[0]?.delta?.content || ""));
    }

    writer.close();

    // Send readable back to the browser so it can read the stream content
    return new Response(readable, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleRequestAIChatGpt4(request) {
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const { prompt, messages, key } = await request.json();

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

    // langchain
    const OpenAIlangchain = new ChatOpenAI({
      openAIApiKey: key,
      modelName: "gpt-4",
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
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleRequestAIWidgetConvergeGpt35(request) {
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const { commandData, currentWidgetsTextContent, key } =
      await request.json();

    const AzureOpenAIlangchain = new ChatOpenAI({
      azureOpenAIApiKey: key,
      azureOpenAIApiInstanceName: "boardxai",
      azureOpenAIApiDeploymentName: "gpt35-16k",
      azureOpenAIApiVersion: "2023-06-01-preview",
      temperature: commandData.temperature
        ? Number(commandData.temperature)
        : 0.8,
      maxTokens:
        commandData.maximumLength && Number(commandData.maximumLength) > 2048
          ? 2048
          : Number(commandData.maximumLength),
      topP: commandData.topP ? Number(commandData.topP) : 1,
      frequencyPenalty: commandData.frequencyPenalty
        ? Number(commandData.frequencyPenalty)
        : 0,
      presencePenalty: commandData.presencePenalty
        ? Number(commandData.presencePenalty)
        : 0,
    });

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 4000,
      chunkOverlap: 600,
    });

    const docOutput = await splitter.splitDocuments([
      new Document({ pageContent: currentWidgetsTextContent }),
    ]);

    const refineEmbeddingsModelAzureOpenAI = {
      azureOpenAIApiKey: key,
      azureOpenAIApiInstanceName: "boardxai",
      azureOpenAIApiDeploymentName: "boardx-text-embedding-ada",
      azureOpenAIApiVersion: "2023-06-01-preview",
      batchSize: 2048,
      maxRetries: 10,
      maxConcurrency: 10,
    };

    const result = await langchainRefineProcessingText(
      refineEmbeddingsModelAzureOpenAI,
      AzureOpenAIlangchain,
      docOutput,
      commandData
    );

    //将结果返回给客户端
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

async function handleRequestAIWidgetConvergeGpt4(request) {
  try {
    // 解析获取传入的信息。假设信息是JSON格式并用POST方法发送
    const { commandData, currentWidgetsTextContent, key } =
      await request.json();

    const OpenAIlangchain = new ChatOpenAI({
      openAIApiKey: key,
      modelName: "gpt-4",
      temperature: commandData.temperature
        ? Number(commandData.temperature)
        : 0.8,
      maxTokens:
        commandData.maximumLength && Number(commandData.maximumLength) > 2048
          ? 2048
          : Number(commandData.maximumLength),
      topP: commandData.topP ? Number(commandData.topP) : 1,
      frequencyPenalty: commandData.frequencyPenalty
        ? Number(commandData.frequencyPenalty)
        : 0,
      presencePenalty: commandData.presencePenalty
        ? Number(commandData.presencePenalty)
        : 0,
    });

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 4000,
      chunkOverlap: 600,
    });

    const docOutput = await splitter.splitDocuments([
      new Document({ pageContent: currentWidgetsTextContent }),
    ]);

    const refineEmbeddingsModelOpenAI = {
      openAIApiKey: key,
      batchSize: 2048,
      modelName: "text-embedding-ada-002",
      maxRetries: 10,
      maxConcurrency: 10,
      // verbose: true
    };

    const result = await langchainRefineProcessingText(
      refineEmbeddingsModelOpenAI,
      OpenAIlangchain,
      docOutput,
      commandData
    );

    //将结果返回给客户端
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}

// 创建 Prompt Template
const getDefinePromptTemplate = (commandData) => {
  if (
    commandData.bindingTemplates &&
    commandData.templateId &&
    commandData.templateId.length > 0 &&
    commandData.customizedContentOutputFormat &&
    commandData.customizedContentOutputFormat.length > 0
  ) {
    let parserObj = {};

    for (var i = 0; i < commandData.customizedContentOutputFormat.length; i++) {
      let item = commandData.customizedContentOutputFormat[i];
      // parserObj[item.title] = z.array(z.string()).describe(item.description);
      parserObj[item.title] = z.array(z.string()).describe("");
    }

    const parser = StructuredOutputParser.fromZodSchema(z.object(parserObj));

    const formatInstructions = parser.getFormatInstructions();

    const questionPromptTemplate = new PromptTemplate({
      template: "\n{format_instructions}\n{question}",
      inputVariables: ["question"],
      partialVariables: { format_instructions: formatInstructions },
    });

    return { parser, questionPromptTemplate };
  } else {
    const questionPromptTemplate = new PromptTemplate({
      template: "{question}",
      inputVariables: ["question"],
    });

    return { parser: null, questionPromptTemplate: questionPromptTemplate };
  }
};

// 处理文本
const langchainRefineProcessingText = async (
  refineEmbeddingsModel,
  llms,
  docsContent,
  commandData
) => {
  const { parser, questionPromptTemplate } =
    getDefinePromptTemplate(commandData);

  const embeddings = new OpenAIEmbeddings(refineEmbeddingsModel);

  const chain = loadQARefineChain(llms, {
    questionPrompt: questionPromptTemplate,
  });

  const store = await MemoryVectorStore.fromDocuments(docsContent, embeddings);

  const question = commandData.command;

  // Select the relevant documents
  const relevantDocs = await store.similaritySearch(question);

  // Call the chain
  const result = await chain.call({
    input_documents: relevantDocs,
    question,
  });

  if (parser) {
    return {
      content: await parser.parse(result.output_text),
      totalTokens: 0,
    };
  } else {
    return {
      content: result.output_text,
      totalTokens: 0,
    };
  }
};

async function handleRequestTest(request) {
  try {
    const response = "ok this is a test";
    //将结果返回给客户端
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}
