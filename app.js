require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI  } = require('openai');
const fs = require("fs");
const app = express();
const port = 3000;

// Set up OpenAI API configuration using the API key directly
const openai = new OpenAI({
 //apiKey: "sk-6BdeJwsEaNtFj4MY3XxrovLN9zJwrIAqsHcy56_7RzT3BlbkFJ2xIfP9W8StQiruQGWphammfVf3IhUp4Lzyn3sonXMA",
 organization:'org-UMWv6oX5tXeQL5pDocMLTes1',
  project:'proj_d12IRLjlvISSXh5FRB6Ff8aR',
});

app.use(bodyParser.json());

// Chatbot route
app.post('/chat', async (req, res) => {

    //console.log("Env Key",process.env.OPENAI_API_KEY);
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).send({ message: 'User input is required' });
  }

  try {
    const prompt = `${userInput} `;
    
    console.log("Prompt",prompt);

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'ft:gpt-4o-mini-2024-07-18:personal:pmfby:ALKxWo0M',  // Choose the GPT model
      messages: [
        { role: 'system', content: "You are an expert in Crop Insurance. Only respond as per trained data and to questions related to this field including topics like post-harvest losses, crop management, etc. If the question is not relevant with Crop Insurance then respond with: 'I can only assist with PMFBY Scheme & crop insurance-related inquiries'." },
        { role: 'user', content: prompt },
    ],
      temperature:0,
      max_tokens : 100
    });

    console.log("Response",response)
    const botResponse = response.choices[0].message.content;
   
    res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).send({ error: 'An error occurred with the OpenAI API' });
  }
});

// Get Intent
app.post('/GetIntent', async (req, res) => {

  //console.log("Env Key",process.env.OPENAI_API_KEY);
const { userInput } = req.body;

if (!userInput) {
  return res.status(400).send({ message: 'User input is required' });
}

try {
  const prompt = `${userInput} `;
  
  console.log("Prompt",prompt);

  // Call OpenAI API
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini-2024-07-18',  // Choose the GPT model
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

app.post('/train_by_data', async (req, res) => {


  try {

    const prompt = `
  
    Please train yourself as per below Questions and Answers

    """  Question : "What is Pradhan Mantri Fasal Bima Yojana (PMFBY)?" 
       Answer: "Pradhan Mantri Fasal Bima Yojana (PMFBY) is a Government Scheme that provides crop insurance protection to farmers when notified crops are damaged due to natural calamities."
      
       Question : "When was the scheme launched?"
       Answer: "The PMFBY scheme was launched on 18th February 2016 by the honorable Prime Minister of India."
      
       Question: "From which date the revamped PMFBY scheme has come into effect?" 
       Answer: "The Scheme was revamped in February 2020 and made voluntary for all the farmers for participation."}
      
       Question : "Who are eligible to get benefits under the scheme?"
       Answer : "All farmers, including tenant farmers and sharecroppers cultivating notified crops in notified areas are eligible for crop insurance."

       Question: "Who are not eligible to get benefits under the scheme?"
       Answer: "Farmers not cultivating notifed crops and farmer groups/collectives are not eligble. Visit- https://pmfby.gov.in for more details"

       Question: "What is crop insurance?"
       Answer: "Crop insurance is an important risk mitigation tool to protect financial losses of farmers from unforeseen natural calamities like hailstorm, drought, floods, cyclones, heavy and unseasonal rains, attack of disease and pests etc."}
       
       Question: "Why farmers should avail crop insurance?"
       Answer: "An adverse weather/climatic conditions can cause significant damage to standing crops such as heavy rains, floods, hailstones, cloudbursts, landslide and natural fire etc, causing damage to crop partially or wholly. It impacts our hard-working farmers severely, burdening them economically and socially. Therefore, it is imperative to provide economic and social security to the farmers so that they are protected from probable crop loss with the help of crop insurance." 

       """`;
    //const prompt = `${userInput}`;
    console.log("Prompt",prompt);

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model:'file-PrEdENKoHZnzt0VcujLh4yp7', //'gpt-3.5-turbo',  // Choose the GPT model
      messages: [
        { role: 'system', content: 'You are pmfby chatbot and answers only on trained data.' },
        { role: 'user', content: prompt },
    ],
      temperature:0,
      max_tokens : 4096
    });

    console.log("Response",response)
    const botResponse = response.choices[0].message.content;
   
    res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).send({ error: 'An error occurred with the OpenAI API' });
  }
});
// Chatbot route
app.post('/train', async (req, res) => {

    //console.log("Env Key",process.env.OPENAI_API_KEY);
  
  try {
    // Call OpenAI API
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',  // Choose the GPT model
//       messages: [
//         { role: 'system', content: 'You are a helpful pmfby chatbot.' },
//         { role: 'user', content: `
//   You are a helpful assistant. Hey Please add the below question and answers and train yourself 

//   """
//     Question: What is Pradhan Mantri Fasal Bima Yojana (PMFBY)?
//     Answer: Pradhan Mantri Fasal Bima Yojana (PMFBY) is a Government Scheme that provides crop insurance protection to farmers when notified crops are damaged due to natural calamities like hailstorm, drought, floods, cyclones, heavy and unseasonal rains, etc.

//     Question: When was the scheme launched?
//     Answer: The PMFBY scheme was launched on 18th February 2016 by the honorable Prime Minister of India.

//     Question: From which date has the revamped PMFBY scheme come into effect?
//     Answer: The Scheme was revamped in February 2020 and made voluntary for all farmers for participation.
  
//     Question: What is crop insurance?
//     Answer: Crop insurance is an important risk mitigation tool to protect financial losses of farmers from unforeseen natural calamities like hailstorm, drought, floods, cyclones, heavy and unseasonal rains, attack of disease and pests etc.
  
//     Question: Why farmers should avail crop insurance?
//     Answer: An adverse weather/climatic conditions can cause significant damage to standing crops such as heavy rains, floods, hailstones, cloudbursts, landslide and natural fire etc, causing damage to crop partially or wholly. It impacts our hard-working farmers severely, burdening them economically and socially. Therefore, it is imperative to provide economic and social security to the farmers so that they are protected from probable crop loss with the help of crop insurance."""
    
//     Question: What are the provisions under PMFBY/RWBCIS to help farmers?
//     Answer: Pradhan Mantri Fasal Bima Yojana (PMFBY) launched in 2016, aims at providing crop insurance protection to farmers, when notified crops are damaged due to unexpected natural calamities. Notified crops are the crops identified by the State Govts to be covered under crop insurance. Field crops like cereals, pulses and oilseeds are covered under PMFBY while horticulture crops mainly fruit, and vegetable crops are covered under Restructured Weather Based Crop Insurance Scheme (RWBCIS). The scheme offers very low premium rates for farmers to participate in the scheme.


//     Please answer the below as per trained data going forward.

//   ` },
//       ],
//       temperature :0.2
//     });

    // If you have access to Node fs we recommend using fs.createReadStream():
    const response = await openai.files.create({ file: fs.createReadStream('training.jsonl'), purpose: 'fine-tune' });

    console.log("Response",response)
    const botResponse = response;
   
    res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).send({ error: 'An error occurred with the OpenAI API' });
  }
});

app.listen(port, () => {
  console.log(`Chatbot server running on http://localhost:${port}`);
});
