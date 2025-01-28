const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI  } = require('openai');
const translate = require('google-translate-api-x');
const DetectLanguage = require('detectlanguage');
const cld3  = require('cld3-asm');

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { NlpManager } = require('node-nlp');
const port = 3000;

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "WAP Chatbot NLP",
      version: "1.0.0",
      description: "API Documentation for Your WAP Chatbot NLP API Application",
    
    },
    servers: [
      {
        url: `http://10.128.60.9:3010/`,
        description: "UAT server"
      }
    ]
  },
  // Specify the paths to your route files here
  apis: ["./*.js"]  // Update this path if needed
};

// Initialize the NLP manager
const manager = new NlpManager({ languages: ['en'], forceNER: true });

// Initialize Swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// General Information
manager.addDocument('en', 'What is the objective of the PMFBY scheme?', 'pmfby.objective');
manager.addDocument('en', 'Why was PMFBY launched?', 'pmfby.objective');
manager.addAnswer(
  'en',
  'pmfby.objective',
  'The objective of PMFBY is to provide financial support to farmers suffering crop loss due to natural calamities, stabilize farmer income, encourage modern agricultural practices, and ensure creditworthiness.'
);

manager.addDocument('en', 'What is PMFBY?', 'pmfby.info');
manager.addDocument('en', 'What does PMFBY stand for?', 'pmfby.info');
manager.addAnswer(
  'en',
  'pmfby.info',
  'PMFBY stands for Pradhan Mantri Fasal Bima Yojana, a crop insurance scheme launched to support farmers by covering risks to their crops caused by natural calamities.'
);

manager.addDocument('en', 'When was PMFBY launched?', 'pmfby.launchDate');
manager.addDocument('en', 'What is the launch date of PMFBY?', 'pmfby.launchDate');
manager.addAnswer(
  'en',
  'pmfby.launchDate',
  'PMFBY was launched on 18th February 2016.'
);

manager.addDocument('en', 'When did the revamped guidelines come into effect?', 'pmfby.revampDate');
manager.addDocument('en', 'What is the effective date of the revamped PMFBY?', 'pmfby.revampDate');
manager.addAnswer(
  'en',
  'pmfby.revampDate',
  'The revamped guidelines came into effect from Kharif 2023.'
);

// Risks Covered
manager.addDocument('en', 'What risks are covered under PMFBY?', 'pmfby.risks');
manager.addDocument('en', 'Does PMFBY cover pest attacks?', 'pmfby.risks');
manager.addAnswer(
  'en',
  'pmfby.risks',
  'PMFBY covers risks such as drought, flood, cyclone, hailstorm, pest attacks, and diseases from the sowing to post-harvest stage.'
);

// Eligibility
manager.addDocument('en', 'Who is eligible for PMFBY?', 'pmfby.eligibility');
manager.addDocument('en', 'Are tenant farmers eligible for PMFBY?', 'pmfby.eligibility');
manager.addAnswer(
  'en',
  'pmfby.eligibility',
  'All farmers, including tenant farmers and sharecroppers cultivating notified crops in notified areas, are eligible for PMFBY.'
);

manager.addDocument('en', 'What are the exclusions under PMFBY?', 'pmfby.exclusions');
manager.addAnswer(
  'en',
  'pmfby.exclusions',
  'PMFBY does not cover losses arising from war, nuclear risks, malicious damage, or preventable risks.'
);

// Premium and Subsidy
manager.addDocument('en', 'What is the premium structure under PMFBY?', 'pmfby.premium');
manager.addDocument('en', 'How much premium do farmers pay under PMFBY?', 'pmfby.premium');
manager.addAnswer(
  'en',
  'pmfby.premium',
  'Farmers pay 2% of the sum insured for Kharif crops, 1.5% for Rabi crops, and 5% for commercial or horticultural crops. The balance premium is shared by the government.'
);

// Claims and Grievances
manager.addDocument('en', 'How can a farmer file a claim under PMFBY?', 'pmfby.fileClaim');
manager.addDocument('en', 'What is the claim filing process for PMFBY?', 'pmfby.fileClaim');
manager.addAnswer(
  'en',
  'pmfby.fileClaim',
  'Farmers can file claims by reporting crop loss to their insurance company, local agriculture department, or CSC within 72 hours of the event.'
);

manager.addDocument('en', 'What is the grievance redressal mechanism in PMFBY?', 'pmfby.grievance');
manager.addAnswer(
  'en',
  'pmfby.grievance',
  'Farmers can register grievances through the Krishi Rakshak Portal, helplines, or designated offices. The scheme has a structured grievance redressal mechanism at the district, state, and national levels.'
);

// Add-On Coverage
manager.addDocument('en', 'What is the add-on coverage for wild animal attacks under PMFBY?', 'pmfby.wildAnimals');
manager.addAnswer(
  'en',
  'pmfby.wildAnimals',
  'PMFBY offers add-on coverage for crop loss due to wild animal attacks, but the premium for this is fully borne by the farmer unless subsidized by the state government.'
);

// Implementation and Technology
manager.addDocument('en', 'What is the role of technology in PMFBY?', 'pmfby.technology');
manager.addDocument('en', 'How is technology used in PMFBY?', 'pmfby.technology');
manager.addAnswer(
  'en',
  'pmfby.technology',
  'PMFBY uses technology such as satellite imagery, drones, and mobile apps for monitoring crops, assessing losses, and ensuring transparency in implementation.'
);

// Enrollment
manager.addDocument('en', 'How can farmers enroll in PMFBY?', 'pmfby.enrollment');
manager.addDocument('en', 'What is the enrollment process for PMFBY?', 'pmfby.enrollment');
manager.addAnswer(
  'en',
  'pmfby.enrollment',
  'Farmers can enroll in PMFBY through banks, CSCs, or the National Crop Insurance Portal (NCIP) before the cut-off date for each season.'
);

// Claim Settlement
manager.addDocument('en', 'What is the process for claim settlement under PMFBY?', 'pmfby.claimSettlement');
manager.addAnswer(
  'en',
  'pmfby.claimSettlement',
  'Claims under PMFBY are processed based on yield data and crop loss reports submitted by the state government. Payments are made directly to the farmer’s bank account.'
);

// Mid-Season Adversity
manager.addDocument('en', 'What is mid-season adversity in PMFBY?', 'pmfby.midSeason');
manager.addDocument('en', 'Does PMFBY cover mid-season adversities?', 'pmfby.midSeason');
manager.addDocument('en', 'How can farmers report mid-season adversities?', 'pmfby.midSeason');
manager.addDocument('en', 'What is the compensation process for mid-season adversity?', 'pmfby.midSeason');
manager.addAnswer(
  'en',
  'pmfby.midSeason',
  'Mid-season adversity refers to crop losses caused by extreme weather conditions like drought or flood after sowing but before the crop matures. Farmers can report such adversities to the insurance company or local authorities. Compensation is based on crop damage assessment and is disbursed accordingly.'
);

// Percentage of Claims for Mid-Season Adversity
manager.addDocument('en', 'How much compensation is given for mid-season adversity under PMFBY?', 'pmfby.midSeasonPercentage');
manager.addDocument('en', 'What percentage of the claim is paid for mid-season adversity?', 'pmfby.midSeasonPercentage');
manager.addAnswer(
  'en',
  'pmfby.midSeasonPercentage',     
  'Under PMFBY, up to 25% of the sum insured is paid as compensation for mid-season adversity to provide immediate relief to farmers.'
);

// Post-Harvesting
manager.addDocument('en', 'What is post-harvest coverage under PMFBY?', 'pmfby.postHarvest');
manager.addDocument('en', 'Does PMFBY cover losses during the post-harvest stage?', 'pmfby.postHarvest');
manager.addDocument('en', 'How can farmers file claims for post-harvest losses?', 'pmfby.postHarvest');
manager.addDocument('en', 'What types of risks are covered in the post-harvest stage?', 'pmfby.postHarvest');
manager.addAnswer(
  'en',
  'pmfby.postHarvest',
  'Post-harvest coverage under PMFBY protects farmers from crop losses caused by natural calamities like cyclones, unseasonal rains, and hailstorms during the harvesting period. Farmers must report losses within 72 hours to claim compensation.'
);

// Percentage of Claims for Post-Harvest Losses
manager.addDocument('en', 'How much compensation is given for post-harvest losses under PMFBY?', 'pmfby.postHarvestPercentage');
manager.addDocument('en', 'What percentage of the claim is paid for post-harvest losses?', 'pmfby.postHarvestPercentage');
manager.addAnswer(
  'en',
  'pmfby.postHarvestPercentage',
  'Under PMFBY, the entire sum insured is payable for post-harvest losses, subject to the terms and conditions of the scheme.'
);

// Fallback for unrelated questions
manager.addAnswer(
  'en',
  'None',
  'I can only assist with PMFBY Scheme & crop insurance-related inquiries. Please ask questions specific to these topics.'
);

// Train the NLP model
(async () => {
  console.log('Training the chatbot...');
  await manager.train();
  manager.save();
  console.log('Chatbot training completed!');
})();


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  console.log("Number of vCPU available",numCPUs);

  // Fork workers for each CPU
  for (let i = 0; i < 5; i++) {
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

// Define valid keywords and synonyms
  const keywords = [
    { main: 'Claim Status', synonyms: ['claim status','claim','दावा स्थिति','दाव्याची स्थिती','क्लेम', 'क्लेम स्टेटस','ଦାବୀ ସ୍ଥିତି','କ୍ଲେମ୍', 'କ୍ଲେମ୍ ସ୍ଥିତି'] },
    { main: 'Policy Status', synonyms: ['policy status', 'crop insurance','पॉलिसी स्टेटस', 'फसल बीमा','पॉलिसी स्थिती','पॉलिसी','विमा पॉलिसी','ନୀତି ସ୍ଥିତି', 'ବୀମା ପଲିସୀ'] },
    { main: 'Ticket Status', synonyms: ['ticket status','टिकट स्थिति', 'टिकट स्टेटस','तिकीट स्थिती', 'तिकिट स्टेटस','ଟିକେଟ ସ୍ଥିତି', 'ଟିକେଟ ଷ୍ଟେଟସ'] },
    { main: 'Insurance Policy', synonyms: ['insurance policy', 'crop insurance','policy','बीमा पॉलिसी', 'फसल बीमा','विमा पॉलिसी', 'पिक विमा','ବୀମା ପଲିସୀ', 'ପିକ୍ ବୀମା'] },
    { main: 'Crop Loss Intimation Status', synonyms: ['crop loss intimation status','loss initimation','फसल हानि सूचना स्थिति', 'फसल हानि स्टेटस','पिक नुकसानीची सूचना स्थिती', 'पिक हानी स्थिती','ପିକ କ୍ଷତି ସୂଚନା ସ୍ଥିତି', 'କ୍ଷତି ସ୍ଥିତି'] },
  ];
  const seasons = [{main :'Kharif',synonyms:['Kharif','खरीफ','ଖରିଫ']}, {main: 'Rabi',synonyms:['Rabi', 'रबी', 'ରବି']}];

 
  // Translation helper function
  async function translateText(text, targetLang) {
    try {
      const result = await translate(text, { to: targetLang });
      return result.text;
    } catch (error) {
      console.error('Translation Error:', error);
      return 'Translation failed.';
    }
  }
  // Helper function to extract keywords, seasons, and years
  function extractDetails(input) {
    const results = [];
    let foundKeyword = null;
    let foundSeason = null;
    let foundYear = null;

    // Check for keywords and their synonyms
    for (const keyword of keywords) {
      if (
        keyword.synonyms.some((synonym) =>
          input.toLowerCase().includes(synonym.toLowerCase())
        )
      ) {
        foundKeyword = keyword.main;
        break;
      }
    }

    for (const season of seasons) {
      if (
        season.synonyms.some((synonym) =>
          input.toLowerCase().includes(synonym.toLowerCase())
        )
      ) {
        foundSeason = season.main;
        break;
      }
    }

    // Extract year (4-digit number)
    const yearMatch = input.match(/\b(20[0-9]{2})\b/);
    if (yearMatch) {
      foundYear = yearMatch[1];
    }

    // Construct results
    if (foundKeyword && foundSeason && foundYear) {
      results.push({
        res: `${foundKeyword} - ${foundSeason} ${foundYear}`,
        message: '',
      });
    } else if (foundKeyword && foundSeason) {
      results.push({
        res: `${foundKeyword} - ${foundSeason}`,
        message: 'Year not specified',
      });
    } else if (foundKeyword && foundYear) {
      results.push({
        res: `${foundKeyword} - ${foundYear}`,
        message: 'Season not specified',
      });
    } else if (foundSeason && foundYear) {
      results.push({
        res: `- ${foundSeason} ${foundYear}`,
        message:
          'Do you mean Claim Status/Policy Status/Ticket Status/Insurance Policy/Crop Loss Intimation Status?',
      });
    } else {
      results.push({
        res: '',
        message: 'Could not extract a valid keyword, season, or year.',
      });
    }

    return results;
  }

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


    /**
 * @swagger
 * /api/v2/GetIntent:
 *   post:
 *     summary: Extract details from the user query
 *     description: This endpoint processes the user's query to extract specific intent and details using the extractDetails function.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: The user's input query to extract intent.
 *                 example: "What is my claim status for Kharif 2024?"
 *     responses:
 *       200:
 *         description: Successfully extracted details from the query
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 details:
 *                   type: object
 *                   description: Extracted details from the query.
 *                   example: { "intent": "ClaimStatus", "season": "Kharif", "year": "2024" }
 *       400:
 *         description: Bad request. Query is required and must be a string.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for invalid input.
 *                   example: "Invalid input. Please provide a query."
 */
    // API endpoint to process input
  app.post('/api/v2/GetIntent', (req, res) => {
    const { query } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Invalid input. Please provide a query.' });
    }

    const results = extractDetails(query);
    res.json(results);
  });

  /**
 * @swagger
 * /api/v2/chat:
 *   post:
 *     summary: Get a response from the crop insurance chatbot
 *     description: This endpoint sends a user query to the NLP manager, which is configured to respond with crop insurance-related information based on trained data. Only relevant queries regarding crop insurance will receive detailed responses.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
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
 *                 question:
 *                   type: string
 *                   description: The user's input query.
 *                   example: "What are the post-harvest loss benefits under the PMFBY scheme?"
 *                 answer:
 *                   type: string
 *                   description: The chatbot's response based on crop insurance data.
 *                   example: "Under PMFBY, post-harvest losses due to natural calamities are covered, providing farmers with compensation."
 *       400:
 *         description: Bad request. Query is required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for missing user query.
 *                   example: "Query is required."
 *       500:
 *         description: Internal server error. There was an issue processing the query.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for server-side issues.
 *                   example: "An error occurred while processing your request."
 */

  // Define the API endpoint
  app.post('/api/v2/chat', async (req, res) => {
    try {
      const { query,lang } = req.body;

      if (!query) {
        return res.status(400).json({ error: 'Query is required.' });
      }

 

     const englishVersion = await translateText(query || 'I can only assist with PMFBY Scheme & crop insurance-related inquiries.', 'en');
     
     console.log("English Version",englishVersion);

     // Process the user query with the NLP manager
     const response = await manager.process('en', englishVersion);
 
       // Translate the response to the detected language if not English
     if (lang !== 'en') {
         
      const translatedAnswer = await translateText(response.answer || 'I can only assist with PMFBY Scheme & crop insurance-related inquiries.', lang);

         return res.json({
          question: query,
           originalAnswer: response.answer,
           answer:translatedAnswer,
           lang,
         });
     }

      // Respond with the chatbot's answer
      res.json({
        question: query,
        answer: response.answer || 'I can only assist with PMFBY Scheme & crop insurance-related inquiries.',
      });
    } catch (error) {
      console.error('Error processing query:', error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  });

  app.listen(port, () => {
    console.log(`Chatbot server running on http://localhost:${port}`);
  });
}
