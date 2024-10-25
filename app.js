const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI  } = require('openai');
const fs = require("fs");
const app = express();
const port = 3000;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  console.log("Number of vCPU available",numCPUs);

  // Fork workers for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart the worker if it dies
  });
}
else {
const openai = new OpenAI({
  organization: process.env.organization,
  project:process.env.project,
});

app.use(bodyParser.json());

// Chatbot route
app.post('/chat', async (req, res) => {

      //console.log("Env Key",process.env.OPENAI_API_KEY);
    const { userInput } = req.body;

    console.log("Organization",process.env.organization);
    console.log("project",process.env.project);
    if (!userInput) {
      return res.status(400).send({ message: 'User input is required' });
    }

    try {
      const prompt = `${userInput} `;
      
      console.log("Prompt",prompt);

      // Call OpenAI API
      const response = await openai.chat.completions.create({
        model: process.env.Model_Name,  // Choose the GPT model
        messages: [
          { role: 'system', content: "You are an expert in Crop Insurance. Only respond as per trained data and to questions related to this field including topics like post-harvest losses, crop management, etc. If the question is not relevant with Crop Insurance then respond with: 'I can only assist with PMFBY Scheme & crop insurance-related inquiries'." },
          { role: 'user', content: prompt },
      ],
        temperature:0,
        max_tokens : 100
      });

      //console.log("Response",response)
      const botResponse = response.choices[0].message.content;
      
      console.log("Status","Success");
      res.status(200).json({ response: botResponse });
    } catch (error) {
      console.error('Error with OpenAI API:', error.message);
      res.status(500).send({ error: 'An error occurred with the OpenAI API' });
    }
  });

  // Get Intent
  app.post('/GetIntent', async (req, res) => {

  
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).send({ message: 'User input is required' });
  }

  try {
    const prompt = `${userInput} `;
    
    console.log("Prompt",prompt);

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: process.env.Model_Name,  // Choose the GPT model
      messages: [
        { role: 'system', content: "You are an assistant that understands intents for crop insurance queries. Extract the words : Claim Status,Policy Status,Insurance Policy,Ticket Status & Crop Loss Intimation Status and also Extract the season (like 'Kharif', 'Rabi') and year (like 2024) from the input as well. I need output in format with proper json object format for example {\"res\": \"Claim Status - Rabi 2024\",\"message\":\"\"},{\"res\": \"Claim Status -\",\"message\":\"Year not specified\"} ,{\"res\": \"- Rabi 2023\",\"message\":\"Do you mean Claim Status/Policy Status/Ticket Status/Insurance Policy/Crop Loss Initimation Status\"} etc." },
        { role: 'user', content: `${prompt}` },
    ],
      temperature:0,
      max_tokens : 100
    });

    console.log("Response",response);
    //const botResponse = response.choices[0].message.content;

    const intent = response.choices[0].message.content;
    //const intentObj = JSON.parse(intent);
    //console.log("Intent Object",intentObj);  
    res.status(200).json(intent);
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).send({ error: 'An error occurred with the OpenAI API' });
  }
  });

  // Get Translator
  app.post('/translator', async (req, res) => {

  
    const { userInput,lang } = req.body;
  
    if (!userInput) {
      return res.status(400).send({ message: 'User input is required' });
    }
  
    try {
      const prompt = `${userInput} `;
      
      console.log("Prompt",prompt);
  
      // Call OpenAI API
      const response = await openai.chat.completions.create({
        model: process.env.Model_Name,  // Choose the GPT model
        messages: [
          { role: 'system', content: "You are an expert in Crop who translates the content for crop insurance queries in language provided." },
          { role: 'user', content: `Please translate the following into ${lang} : ${prompt}` },],
        temperature:0,
        max_tokens : 100
      });
  
      console.log("Response",response);
      //const botResponse = response.choices[0].message.content;
      const intent = response.choices[0].message.content;
       
      res.status(200).json(intent);
    } catch (error) {
      console.error('Error with OpenAI API:', error.message);
      res.status(500).send({ error: 'An error occurred with the OpenAI API' });
    }
    });

  app.listen(port, () => {
    console.log(`Chatbot server running on http://localhost:${port}`);
  });
}
