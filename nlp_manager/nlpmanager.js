const { NlpManager } = require('node-nlp');

// Initialize the NLP manager
const manager = new NlpManager({ languages: ['en'], forceNER: true });

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
manager.addDocument('en', 'Add-on coverage under PMFBY?', 'pmfby.wildAnimals');
manager.addAnswer(
  'en',
  'pmfby.wildAnimals',
  'PMFBY offers add-on coverage for crop loss due to wild animal attacks, but the premium for this is fully borne by the farmer unless subsidized by the state government.'
);

// Sum Insured
manager.addDocument('en', 'What is sum insured under PMFBY?', 'pmfby.sumInsured');
manager.addDocument('en', 'How is sum insured calculated in PMFBY?', 'pmfby.sumInsured');
manager.addAnswer(
  'en',
  'pmfby.sumInsured',
  'The sum insured is calculated based on the cost of cultivation, including expenses such as seeds, fertilizers, pesticides, labor, and other inputs. It is determined by the State Level Coordination Committee on Crop Insurance (SLCCCI).'
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


manager.addDocument('en', 'Who provides the subsidy for PMFBY?', 'pmfby.subsidy');
manager.addAnswer(
  'en',
  'pmfby.subsidy',
  'The premium is subsidized by the Central and State Governments to make it affordable for farmers.'
);

// Post-Harvesting
manager.addDocument('en', 'What is post-harvest coverage under PMFBY?', 'pmfby.postHarvest');
manager.addDocument('en', 'Does PMFBY cover losses during the post-harvest stage?', 'pmfby.postHarvest');
manager.addDocument('en', 'What is post harvesting?', 'pmfby.postHarvest');
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

// Coverage of Crops
manager.addDocument('en', 'Which crops are covered under PMFBY?', 'pmfby.coverageCrops');
manager.addAnswer(
  'en',
  'pmfby.coverageCrops',
  'PMFBY covers all food crops (cereals, pulses, and oilseeds), commercial crops (cotton, sugarcane, etc.), and horticultural crops as per state government notification.'
);

// Seasonality Discipline
manager.addDocument('en', 'What is seasonality discipline under PMFBY?', 'pmfby.seasonality');
manager.addAnswer(
  'en',
  'pmfby.seasonality',
  'Seasonality discipline under PMFBY ensures adherence to prescribed timelines for premium payments, enrollment, and claim settlements based on crop seasons.'
);

// Important Conditions/Clauses
manager.addDocument('en', 'What are the important conditions applicable for risk coverage under PMFBY?', 'pmfby.importantClauses');
manager.addAnswer(
  'en',
  'pmfby.importantClauses',
  'Important conditions include mandatory coverage for loanee farmers, adherence to cut-off dates, timely premium payment, and compliance with yield estimation procedures.'
);

// Claim Settlement under Multiple Events
manager.addDocument('en', 'How are claims settled under multiple events of similar or different perils in PMFBY?', 'pmfby.claimMultipleEvents');
manager.addAnswer(
  'en',
  'pmfby.claimMultipleEvents',
  'Claims under multiple events are assessed based on the maximum loss percentage, ensuring that total claims do not exceed the sum insured for the season.'
);

// Service Charges
manager.addDocument('en', 'Are there any service charges applicable under PMFBY?', 'pmfby.serviceCharges');
manager.addAnswer(
  'en',
  'pmfby.serviceCharges',
  'No service charges are applicable for farmers. However, intermediaries like banks or CSCs may charge nominal service fees for enrollment processing.'
);

// Goods & Service Tax (GST)
manager.addDocument('en', 'Is GST applicable on PMFBY premiums?', 'pmfby.gst');
manager.addAnswer(
  'en',
  'pmfby.gst',
  'No, GST is exempted on the premium paid under PMFBY to ensure affordability for farmers.'
);

// Assessment of Loss/Shortfall in Yield
manager.addDocument('en', 'How is loss or shortfall in yield assessed under PMFBY?', 'pmfby.lossAssessment');
manager.addAnswer(
  'en',
  'pmfby.lossAssessment',
  'Loss assessment is based on Crop Cutting Experiments (CCEs) conducted by state authorities using a statistically designed methodology.'
);

// RWBCIS - Restructured Weather Based Crop Insurance Scheme
manager.addDocument('en', 'What is RWBCIS?', 'pmfby.rwbcis');
manager.addDocument('en', 'What does RWBCIS stand for?', 'pmfby.rwbcis');
manager.addAnswer(
  'en',
  'pmfby.rwbcis',
  'RWBCIS stands for Restructured Weather Based Crop Insurance Scheme, which provides insurance against adverse weather conditions like drought, excessive rainfall, frost, humidity, and temperature fluctuations affecting crops.'
);

manager.addDocument('en', 'How is RWBCIS different from PMFBY?', 'pmfby.rwbcis.difference');
manager.addAnswer(
  'en',
  'pmfby.rwbcis.difference',
  'PMFBY covers yield losses due to various calamities, whereas RWBCIS insures farmers against weather-related risks that directly affect crop growth and yield.'
);

manager.addDocument('en', 'Who is eligible for RWBCIS?', 'pmfby.rwbcis.eligibility');
manager.addAnswer(
  'en',
  'pmfby.rwbcis.eligibility',
  'All farmers, including loanee and non-loanee farmers, growing notified crops in notified areas, are eligible for RWBCIS.'
);

// Claim Process
manager.addDocument('en', 'How do farmers claim insurance under PMFBY?', 'pmfby.claim');
manager.addAnswer(
  'en',
  'pmfby.claim',
  'Farmers must notify the insurance company or local agriculture officer within 72 hours of crop loss. Claims are processed based on yield data submitted via NCIP.'
);

manager.addDocument('en', 'How can farmers track their claim status?', 'pmfby.claim.status');
manager.addAnswer(
  'en',
  'pmfby.claim.status',
  'Farmers can check their claim status through the NCIP website (www.pmfby.gov.in), their insurance company’s portal, Common Service Centers (CSCs), or local agriculture offices.'
);

// Fallback for unrelated questions
manager.addAnswer(
  'en',
  'None',
  'I can only assist with PMFBY Scheme & crop insurance-related inquiries. Please ask questions specific to these topics.'
);

// Miscellaneous
manager.addDocument('en', 'Where can farmers get more information on PMFBY?', 'pmfby.infoSource');
manager.addAnswer(
  'en',
  'pmfby.infoSource',
  'For more details, visit the official PMFBY website (www.pmfby.gov.in) or contact your local agricultural office.'
);

// Technology & Monitoring
manager.addDocument('en', 'What is the National Crop Insurance Portal (NCIP)?', 'pmfby.ncip');
manager.addDocument('en', 'How does NCIP help in PMFBY?', 'pmfby.ncip');
manager.addAnswer(
  'en',
  'pmfby.ncip',
  'NCIP is a digital platform for real-time scheme administration, farmer enrollment, and claim processing.'
);

manager.addDocument('en', 'What is YES-TECH in PMFBY?', 'pmfby.yestech');
manager.addAnswer(
  'en',
  'pmfby.yestech',
  'YES-TECH (Yield Estimation System Based on Technology) is an AI-based direct yield estimation method using drones, satellite imagery, and remote sensing.'
);

manager.addDocument('en', 'What is SARTHI in PMFBY?', 'pmfby.sarthi');
manager.addAnswer(
  'en',
  'pmfby.sarthi',
  'SARTHI (Sandbox for Agricultural & Rural Security, Technology & Insurance) is an open-source digital platform aimed at expanding rural insurance coverage.'
);

manager.addDocument('en', 'How are claims settled under RWBCIS?', 'pmfby.rwbcis.claims');
manager.addAnswer(
  'en',
  'pmfby.rwbcis.claims',
  'Claims under RWBCIS are based on weather data recorded by Automatic Weather Stations (AWS) or government-approved meteorological agencies. If predefined weather thresholds are exceeded, the insurance payout is triggered automatically.'
);

// Farmer-Specific FAQs
manager.addDocument('en', 'How can I apply for PMFBY as a small farmer?', 'pmfby.farmer.apply');
manager.addAnswer(
  'en',
  'pmfby.farmer.apply',
  'Small farmers can apply for PMFBY through banks, Common Service Centers (CSCs), insurance company representatives, or directly via the National Crop Insurance Portal (NCIP).'
);

manager.addDocument('en', 'Can tenant farmers apply for PMFBY?', 'pmfby.farmer.tenant');
manager.addAnswer(
  'en',
  'pmfby.farmer.tenant',
  'Yes, tenant farmers and sharecroppers are eligible for PMFBY if they cultivate notified crops in notified areas. They must provide land lease agreements or farmer certificates to enroll.'
);

manager.addDocument('en', 'How much compensation will I get if my crops fail?', 'pmfby.farmer.compensation');
manager.addAnswer(
  'en',
  'pmfby.farmer.compensation',
  'The compensation amount depends on the sum insured, which is calculated based on the cost of cultivation. The claim is processed based on crop cutting experiments and remote sensing assessments.'
);

manager.addDocument('en', 'What is the deadline to enroll for PMFBY?', 'pmfby.farmer.deadline');
manager.addAnswer(
  'en',
  'pmfby.farmer.deadline',
  'The deadline to enroll for PMFBY varies by state and crop season. Farmers should check with their local agriculture office or visit www.pmfby.gov.in for updated timelines.'
);

manager.addDocument('en', 'How can I check my PMFBY claim status?', 'pmfby.farmer.claim.status');
manager.addAnswer(
  'en',
  'pmfby.farmer.claim.status',
  'Farmers can check their claim status by visiting the National Crop Insurance Portal (NCIP), contacting their insurance company, or visiting a nearby Common Service Center (CSC).'
);

manager.addDocument('en', 'What documents are required for PMFBY claim filing?', 'pmfby.farmer.documents');
manager.addAnswer(
  'en',
  'pmfby.farmer.documents',
  'Farmers need to provide an Aadhaar card, land records, sowing certificates, bank account details, and crop loss evidence for claim processing.'
);

manager.addDocument('en', 'Is PMFBY premium deducted from Kisan Credit Card loans?', 'pmfby.farmer.kcc');
manager.addAnswer(
  'en',
  'pmfby.farmer.kcc',
  'Yes, for loanee farmers, PMFBY premiums are automatically deducted from their Kisan Credit Card (KCC) loan accounts unless they opt out within the given time frame.'
);

manager.addDocument('en', 'What if I fail to enroll in PMFBY before the deadline?', 'pmfby.farmer.missedDeadline');
manager.addAnswer(
  'en',
  'pmfby.farmer.missedDeadline',
  'If you miss the PMFBY enrollment deadline, you will not be eligible for coverage for that season. You must wait for the next crop season to apply again.'
);

manager.addDocument('en', 'Can I file a complaint if my PMFBY claim is rejected?', 'pmfby.farmer.complaint');
manager.addAnswer(
  'en',
  'pmfby.farmer.complaint',
  'Yes, if your claim is rejected, you can file a complaint through the Krishi Rakshak Portal, the insurance company’s grievance redressal cell, or your local agricultural office.'
);

manager.addDocument('en', 'What is Kharif season?', 'pmfby.kharif');
manager.addDocument('en', 'Which crops are grown in Kharif season?', 'pmfby.kharif');
manager.addAnswer(
  'en',
  'pmfby.kharif',
  'Kharif season refers to the monsoon cropping season, typically from June to October. Crops grown in this season include paddy (rice), maize, soybean, cotton, groundnut, and bajra.'
);

manager.addDocument('en', 'What is Rabi season?', 'pmfby.rabi');
manager.addDocument('en', 'Which crops are grown in Rabi season?', 'pmfby.rabi');
manager.addAnswer(
  'en',
  'pmfby.rabi',
  'Rabi season refers to the winter cropping season, typically from November to April. Common Rabi crops include wheat, barley, mustard, chickpeas, and peas.'
);

manager.addDocument('en', 'What are notified crops under PMFBY?', 'pmfby.notifiedCrops');
manager.addAnswer(
  'en',
  'pmfby.notifiedCrops',
  'Notified crops under PMFBY are those crops identified by the state government for insurance coverage in a particular region and season. These crops are selected based on their economic importance and vulnerability to risks like natural calamities.'
);

// KRPH (Krishi Rakshak Portal Helpline)
manager.addDocument('en', 'What is KRPH?', 'pmfby.krph');
manager.addAnswer(
  'en',
  'pmfby.krph',
  'KRPH (Krishi Rakshak Portal Helpline) is an online platform designed to assist farmers in raising grievances, tracking claims, and getting updates on their PMFBY applications.'
);



module.exports = manager;