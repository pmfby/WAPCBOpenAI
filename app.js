const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI  } = require('openai');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = 3000;

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "API Documentation for Your Node.js Application",
      contact: {
        name: "Developer Name",
        email: "developer@example.com"
      }
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Development server"
      }
    ]
  },
  // Specify the paths to your route files here
  apis: ["./*.js"]  // Update this path if needed
};

// Initialize Swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Get a response from the crop insurance chatbot
 *     description: This endpoint sends a user query to the OpenAI API, which is configured to respond with crop insurance-related information based on trained data. Only relevant queries regarding crop insurance will receive detailed responses.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userInput:
 *                 type: string
 *                 description: The user's input query related to crop insurance.
 *                 example: "What are the post-harvest loss benefits under the PMFBY scheme?"
 *     responses:
 *       200:
 *         description: Successfully retrieved response from the chatbot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   description: The chatbot's response based on crop insurance data.
 *                   example: "Under PMFBY, post-harvest losses due to natural calamities are covered, providing farmers with compensation."
 *       400:
 *         description: Bad request. User input is required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message for missing user input.
 *                   example: "User input is required"
 *       500:
 *         description: Internal server error. There was an issue with the OpenAI API.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for API issues.
 *                   example: "An error occurred with the OpenAI API"
 */

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

  /**
 * @swagger
 * /GetIntent:
 *   post:
 *     summary: Extract intent from a user query related to crop insurance
 *     description: This endpoint identifies the user's intent by extracting keywords and information related to crop insurance topics like claim status, policy status, and crop loss intimation. It can also parse the season and year from the user input.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userInput:
 *                 type: string
 *                 description: User's query that includes information about crop insurance topics.
 *                 example: "What is the claim status for Rabi 2024?"
 *     responses:
 *       200:
 *         description: Successfully identified intent and returned relevant details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 res:
 *                   type: string
 *                   description: Extracted intent and related details in JSON format.
 *                   example: "{ \"res\": \"Claim Status - Rabi 2024\", \"message\": \"\" }"
 *       400:
 *         description: Bad request. User input is required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message for missing user input.
 *                   example: "User input is required"
 *       500:
 *         description: Internal server error. Issue with the OpenAI API.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for API-related issues.
 *                   example: "An error occurred with the OpenAI API"
 */

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


  /**
 * @swagger
 * /translator:
 *   post:
 *     summary: Translate crop insurance-related content to specified language
 *     description: This endpoint translates the provided user input related to crop insurance into the specified language.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userInput:
 *                 type: string
 *                 description: The text to be translated, typically crop insurance-related content.
 *                 example: "What is the claim status for Rabi 2024?"
 *               lang:
 *                 type: string
 *                 description: Target language code for the translation (e.g., 'hi' for Hindi).
 *                 example: "hi"
 *     responses:
 *       200:
 *         description: Successfully translated the content into the specified language.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: Translated text.
 *               example: "रबी 2024 के लिए दावे की स्थिति क्या है?"
 *       400:
 *         description: Bad request. User input is required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating missing user input.
 *                   example: "User input is required"
 *       500:
 *         description: Internal server error. Issue with the OpenAI API.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for API-related issues.
 *                   example: "An error occurred with the OpenAI API"
 */
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
          { role: 'system', content: "You are an expert in Crop and language translation for crop insurance queries." },
          { role: 'user', content: `Please translate the following prompt """${prompt}""" into ${lang} language without any extra modifications. Provide only the translation, no additional text` },],
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

    /**
 * @swagger
 * /crophealth:
 *   post:
 *     summary: Analyze crop health from image
 *     description: This endpoint processes a crop image URL to determine various crop health indicators, including crop type, health, growth stage, presence of natural disasters, infections, and metadata.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: The URL of the image to be analyzed.
 *                 example: "https://example.com/crop-image.jpg"
 *     responses:
 *       200:
 *         description: Successfully analyzed crop health data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 IsCrop:
 *                   type: boolean
 *                   description: Indicates if the image contains a crop.
 *                   example: true
 *                 CropName:
 *                   type: string
 *                   description: The identified name of the crop.
 *                   example: "Wheat"
 *                 CropHealth:
 *                   type: string
 *                   description: Health status of the crop.
 *                   example: "Healthy"
 *                 CropStage:
 *                   type: string
 *                   description: Current growth stage of the crop.
 *                   example: "Flowering"
 *                 NaturalDisaster:
 *                   type: string
 *                   description: Any natural disaster impact identified on the crop.
 *                   example: "Drought"
 *                 Infected:
 *                   type: string
 *                   description: Summary of infections or infestations affecting the crop.
 *                   example: "None"
 *                 ImageMetaData:
 *                   type: string
 *                   description: Metadata about the analyzed image.
 *                   example: "Resolution: 1024x768; Date: 2024-10-02"
 *       400:
 *         description: Bad request. Image URL is required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating missing image URL.
 *                   example: "Image URL is required"
 *       500:
 *         description: Internal server error. Issue with the OpenAI API.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for API-related issues.
 *                   example: "An error occurred with the OpenAI API"
 */

  app.post('/crophealth', async (req, res) => {
        try {
         
          const { imageUrl } = req.body;
          // Call OpenAI API
          const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",  // Choose the GPT model
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: "Please respond in this format  {IsCrop : true/false, CropName : crop_name,CropHealth : crop_health, CropStage : crop_stage, Natural Disaster : natural_disaster,Infected : infection_summary,ImageMetaData : image_meta_data } only and in agriculture insurance expert tone.Also Please mention if the crop hit by any natural disaster and infect infestations. Respond for crop images only." },
                  {
                    type: "image_url",
                    image_url: {
                      "url": `${imageUrl}`,
                    },
                  },
                ],
              },
            ],            
            temperature:0,
            max_tokens : 100
          });
      
          console.log("Response",response);
          //const botResponse = response.choices[0].message.content;
          const imageResult = response.choices[0].message.content;
          
          res.status(200).json(imageResult);
        } catch (error) {
          console.error('Error with OpenAI API:', error.message);
          res.status(500).send({ error: 'An error occurred with the OpenAI API' });
        }
    });

  app.listen(port, () => {
    console.log(`Chatbot server running on http://localhost:${port}`);
  });
}
