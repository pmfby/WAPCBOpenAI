const { NlpManager } = require('node-nlp');

// Initialize the NLP manager
const manager = new NlpManager({ languages: ['en'], forceNER: true });

// General Information
manager.addDocument('en', 'What is the objective of the PMFBY scheme?', 'pmfby.objective');
manager.addDocument('en', 'Why was PMFBY launched?', 'pmfby.objective');
manager.addDocument('en','What is Pradhan Mantri Fasal Bima Yojana (PMFBY)?','pmfby.objective')
manager.addAnswer(
  'en',
  'pmfby.objective',
  'Pradhan Mantri Fasal Bima Yojana (PMFBY) is a Government Scheme that aims at providing crop insurance protection to farmers, when notified crops are damaged due to unexpected natural calamities like hailstorm, drought, floods, cyclones, heavy and unseasonal rains, attack of disease and pests etc.'
);

manager.addDocument('en', 'What is PMFBY?', 'pmfby.info');
manager.addDocument('en', 'What does PMFBY stand for?', 'pmfby.info');
manager.addAnswer(
  'en',
  'pmfby.info',
  'Pradhan Mantri Fasal Bima Yojana (PMFBY) is a Government Scheme that aims at providing crop insurance protection to farmers, when notified crops are damaged due to unexpected natural calamities like hailstorm, drought, floods, cyclones, heavy and unseasonal rains, attack of disease and pests etc.'
);

manager.addDocument('en', 'When was PMFBY launched?', 'pmfby.launchDate');
manager.addDocument('en', 'What is the launch date of PMFBY?', 'pmfby.launchDate');
manager.addAnswer(
  'en',
  'pmfby.launchDate',
  'The PMFBY scheme was launched on 18th February 2016, by the honorable Prime Minister of India.'
);

manager.addDocument('en', 'When did the revamped guidelines come into effect?', 'pmfby.revampDate');
manager.addDocument('en', 'What is the effective date of the revamped PMFBY?', 'pmfby.revampDate');
manager.addDocument('end','From which date the revamped PMFBY scheme has come into effect?','pmfby.revampDate');
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


manager.addDocument('en', 'What is Pradhan Mantri Fasal Bima Yojana (PMFBY)?', 'pmfby.faq1');
manager.addAnswer('en', 'pmfby.faq1', 'Pradhan Mantri Fasal Bima Yojana (PMFBY) is a Government Scheme that aims at providing crop insurance protection to farmers, when notified crops are damaged due to unexpected natural calamities like hailstorm, drought, floods, cyclones, heavy and unseasonal rains, attack of disease and pests etc.');

manager.addDocument('en', 'When was the scheme launched?', 'pmfby.faq2');
manager.addAnswer('en', 'pmfby.faq2', 'The PMFBY scheme was launched on 18th February 2016, by the honorable Prime Minister of India.');



manager.addDocument('en', 'Who are eligible to get benefits under the scheme?', 'pmfby.faq4');
manager.addAnswer('en', 'pmfby.faq4', 'All farmers, including tenant farmers and sharecroppers cultivating notified crops in notified areas are eligible for crop insurance.');

manager.addDocument('en', 'Who are not eligible to get benefits under the scheme?', 'pmfby.faq5');
manager.addAnswer('en', 'pmfby.faq5', 'Individual farmers not cultivating the notified crops and farmer groups/collectives are not eligible for the benefits under the scheme. ');

manager.addDocument('en', 'What is crop insurance?', 'pmfby.faq6');
manager.addAnswer('en', 'pmfby.faq6', 'Crop insurance is a crucial tool that helps farmers safeguard themselves from financial losses caused by unexpected natural disasters such as hailstorms, droughts, floods, cyclones, heavy rains, diseases, and pests. It provides a safety net for farmers in case of such unforeseen events.');

manager.addDocument('en', 'Why farmers should avail crop insurance?', 'pmfby.faq7');
manager.addAnswer('en', 'pmfby.faq7', 'Adverse weather/climatic conditions such as heavy rains, floods, hailstones, cloudbursts, landslide and natural fire etc, can cause significant damage to crops, partially or wholly. It can burden you economically and socially. Therefore, it is imperative to have economic and social security with the help of crop insurance so that you are protected from probable crop loss.');

manager.addDocument('en', 'What are the provisions under PMFBY/RWBCIS to help farmers?', 'pmfby.faq8');
manager.addAnswer('en', 'pmfby.faq8', 'Pradhan Mantri Fasal Bima Yojana (PMFBY) provides crop insurance protection to farmers in case of damage to notified crops due to unexpected natural calamities. Notified crops are those identified by State Governments to be covered under crop insurance. Field crops like cereals, pulses, and oilseeds are covered under PMFBY, while horticulture crops such as fruits and vegetables are covered under the Restructured Weather Based Crop Insurance Scheme (RWBCIS). The scheme offers farmers very low premium rates to participate in the insurance scheme.');

manager.addDocument('en', 'Where do I get information about PMFBY/RWBCIS?', 'pmfby.faq9');
manager.addAnswer('en', 'pmfby.faq9', 'You can call on toll-free Krishi Rakshak helpline no 14447 or reach out to the nearest Bank Branch/Banking Correspondent, Primary Agriculture Credit Societies (PACS), Common Service Centre (CSC), representative of the insurance company in your area, or the local agriculture office at District/Block level for information and insurance of notified crops. For more details, you can also visit the National Crop Insurance Portal at www.pmfby.gov.in.');

manager.addDocument('en', 'Which category of farmers are eligible to enroll under PMFBY?', 'pmfby.faq10');
manager.addAnswer('en', 'pmfby.faq10', 'All farmers, including tenant farmers and sharecroppers cultivating notified crops in notified areas, are eligible for crop insurance. The enrollment has been made voluntary for all farmers, so now farmers can join the scheme as per their willingness.');

manager.addDocument('en', 'Which crops are covered under the scheme?', 'pmfby.faq11');
manager.addAnswer('en', 'pmfby.faq11', 'Crops notified by the State Govt in its notification are covered under crops insurance scheme. the State Govt releases this notification at beginning of every season. The scheme includes all food grain, oilseed crops, and annual commercial/annual horticulture crops in both Kharif and Rabi seasons.');

manager.addDocument('en', 'What are the premium rates to be paid by the farmers for enrolment under PMFBY?', 'pmfby.faq12');
manager.addAnswer('en', 'pmfby.faq12', 'The premium rates for enrolment under PMFBY are 2% for Kharif crop, 1.5% for Rabi crops, and up to 5% for horticulture and commercial crops of the sum insured.');

manager.addDocument('en', 'What are the enrollment channels open for a farmer to participate in PMFBY/RWBCIS?', 'pmfby.faq13');
manager.addAnswer('en', 'pmfby.faq13', 'Common Service Centers (CSC) are local access facilities that serve rural and remote locations, providing various government e-services including enrollment for schemes like PMFBY/RWBCIS. You can also enrol through the nearest bank branch, primary agriculture cooperative societies, post office, insurance intermediary, or self-enrollment via the web portal-https://www.pmfby.gov.in/farmerLogin. ');

manager.addDocument('en', 'Farmers who can enroll in PMFBY/RWBCIS?', 'pmfby.faq14');
manager.addAnswer('en', 'pmfby.faq14', 'Non-loanee farmers can enroll by contacting the nearest Common Service Centre (CSC), banks, or insurance intermediaries. Loanee farmers can approach the bank branches from where they have availed the seasonal agriculture loan/KCC. Farmers with savings or Jan Dhan accounts can also enroll at their bank branches. Online registration through the PMFBY web portal is another option. Intermediaries of insurance companies can also assist in enrollment throug the Intermediary Enrolment (AIDE) App.');

manager.addDocument('en', 'Can I enroll under PMFBY/RWBCIS if I have savings account/Jan Dhan Account in any bank?', 'pmfby.faq15');
manager.addAnswer('en', 'pmfby.faq15', 'Thats correct! All Savings or Jan Dhan Account holding farmers can enroll in the scheme through their respective bank branches.');

manager.addDocument('en', 'What is the role of banks in enrolling the Loanee farmers under PMFBY/RWBCIS?', 'pmfby.faq16');
manager.addAnswer('en', 'pmfby.faq16', 'Banks play a crucial role in enrolling Loanee farmers under PMFBY/RWBCIS by ensuring the enrolment of Loanee and other interested farmers, maintaining proper records, encouraging farmers to join the scheme, and timely data entry on the PMFBY portal. It is important for banks to coordinate effectively to avoid duplication and provide necessary support to the farmers.');

manager.addDocument('en', 'Is there any change in the enrolment process to be followed compared to the previous one?', 'pmfby.faq17');
manager.addAnswer('en', 'pmfby.faq17', 'No, there are no changes made by the Central Government or State Government.Keep yourself updated with the latest information.');

manager.addDocument('en', 'What is the self-declaration  to be submitted to bank by the existing loanee farmer?', 'pmfby.faq18');
manager.addAnswer('en', 'pmfby.faq18', 'To submit a self-declaration to the bank as an existing loanee farmer who does not wish to be enrolled under the scheme, you can do so by providing a written statement to your serving bank branch, at least 7 days before the cut-off date for enrolment for the respective season. If you do not submit this self-declaration, the premium amount for the notified crops will be deducted from your account by the bank.');

manager.addDocument('en', 'What is the cut-off date for enrolment under PMFBY/RWBCIS?', 'pmfby.faq19');
manager.addAnswer('en', 'pmfby.faq19', 'General enrolment cut-offs for Kharif season is 15-31 July and for Rabi season it is 15-30 December. it may vary from state to state depending on crop cultivation cycle.');

manager.addDocument('en', 'Which are the documents required for enrolment in crop insurance scheme?', 'pmfby.faq20');
manager.addAnswer('en', 'pmfby.faq20', 'To enrol in the crop insurance scheme, you will need to provide certain mandatory documents. These include your Land Rights Documents such as Record of Right (RoR) and Land Possession Certificate (LPC), an updated Aadhar Card, and your Bank Passbook (First Page with details of bank accounts).');

manager.addDocument('en', 'What are the supportive documents required?', 'pmfby.faq21');
manager.addAnswer('en', 'pmfby.faq21', `Along with Mandatory documents the Satte Govt May also specify requirement of Supporting Alternative Documents like:
• Sowing Certificate (Patwari or Gram Panchayat) or other documents by the State Government.
• Self-Declaration of the intent to sow the proposed crop or sown crop

Please let me know if you have more questions on the supportive documents required.`);

manager.addDocument('en', 'What are the supportive documents required for tenant farmers?', 'pmfby.faq22');
manager.addAnswer('en', 'pmfby.faq22', `Along with Mandatory document, tenant farmer also required to sumit following supportive documents  : 
 Contract Agreement in case of lease deed and shared crop / No objection certificate issue by land owner.  

Please let me know if you have more questions on supportive documents required for tenant farmers.`);

manager.addDocument('en', 'What Service charges farmers need to pay to get enroll under PMFBY/RWBCIS?', 'pmfby.faq23');
manager.addAnswer('en', 'pmfby.faq23', 'Enrolment under PMFBY is absolutely free of charge. Farmers only need to pay their share of the premium amount.');

manager.addDocument('en', 'What are the recent changes made in Revamped PMFBY/RWBCIS for farmer participation?', 'pmfby.faq24');
manager.addAnswer('en', 'pmfby.faq24', 'Under the revamped scheme, farmers can now voluntarily enroll in the Revamped PMFBY/RWBCIS. Loanee farmers who do not wish to be part of the scheme can choose to Opt Out by submitting a self-declaration to their bank branch. Additionally, all Savings or Jan Dhan Account holding farmers are eligible to participate by enrolling through their respective bank branches. Its important for farmers to inform the bank branches if they wish to participate in the scheme while renewing or applying for a Kisan Credit Card. Farmers also have the flexibility to change the insured crop name up to 2 working days before the cut-off date for enrollment. The premium rates for the scheme remain the same as before.');

manager.addDocument('en', 'Since when the new changes in PMFBY are applicable?', 'pmfby.faq25');
manager.addAnswer('en', 'pmfby.faq25', 'All the proposed changes are effective from kharif 2020 season.Remember, these changes are aimed at improving the effectiveness of the scheme for farmers across the country.');

manager.addDocument('en', 'How sum insured will be calculated after recent changes announced in the scheme?', 'pmfby.faq26');
manager.addAnswer('en', 'pmfby.faq26', 'The sum insured will be calculated based on various options provided to State Governments, such as Scale of Finance determined by District Level Technical Committee, District level value of Notional Average Yield x Minimum Support Price for any district-crop combination, Farmgate price for crops without MSP, and weighted average market price for the previous season. Each district may choose the most suitable method for their specific crop combinations.');

manager.addDocument('en', 'Which are the risks covered under PMFBY/RWBCIS?', 'pmfby.faq27');
manager.addAnswer('en', 'pmfby.faq27', 'Prevented Sowing, Mid – Season Adversity, Localized Calamity, Post – Harvest Loss and Widespread Calamity are the risks covered under PMFBY/RWBCIS.');

manager.addDocument('en', 'What is prevented sowing?', 'pmfby.faq28');
manager.addAnswer('en', 'pmfby.faq28', 'Prevented sowing refers to the situation where more than 75% of the crop in the normal sowing area is affected due to adverse seasonal or weather conditions, leading to the inability to sow, plant, or germinate the crops. In such cases, a claim payment of 25% of the sum assured can be made, subject to the State Government issuing a notification regarding this situation.');

manager.addDocument('en', 'What is mid-season adversity?', 'pmfby.faq29');
manager.addAnswer('en', 'pmfby.faq29', 'Mid-season adversity refers to various challenges that can affect crop production during the growing period, such as drought, floods, pests, diseases, and natural disasters like storms and cyclones. The government provides risk protection against these adversities to support farmers in case their crop production is significantly reduced. The compensation amount is determined based on the extent of the losses incurred by the farmers.');

manager.addDocument('en', 'What is localized calamity?', 'pmfby.faq30');
manager.addAnswer('en', 'pmfby.faq30', 'Localized calamity refers to risks such as hailstorm, landslide, inundation, cloud burst, and natural fire due to lightning that affect isolated farms in a specific area. When such events occur, a joint survey is conducted by the State Government and Insurance Company to assess the crop loss on an individual farm basis. If a farmer is insured and experiences crop loss due to a localized calamity, they should inform the relevant authorities within 72 hours of the incident, providing details of the insured crop and affected area.');

manager.addDocument('en', 'What are Post-Harvest Losses?', 'pmfby.faq31');
manager.addAnswer('en', 'pmfby.faq31', 'Post-Harvest Losses refer to the yield loss of crops that are harvested and left in the field for drying for up to 2 weeks after harvesting. This loss is assessed against specific risks like Hailstorm, Cyclone, Cyclonic rains, and Unseasonal rains. If there is a crop loss, the insured farmer should inform the relevant authorities within 72 hours, providing details of the insured crop and affected area. The assessment of loss is done on an individual farm basis.');

manager.addDocument('en', 'Do I get an acknowledgement receipt / SMS on enrolment?', 'pmfby.faq32');
manager.addAnswer('en', 'pmfby.faq32', 'Yes, you will receive an acknowledgement receipt with a unique identification number upon successful submission of your application at the CSC centre. Additionally, insurance companies send acknowledgement receipts to loanee farmers through the post office. You will also receive information through SMS on the registered mobile number.');

manager.addDocument('en', 'How do I track my application status on PMFBY portal?', 'pmfby.faq33');
manager.addAnswer('en', 'pmfby.faq33', 'After logging into the PMFBY Portal at www.pmfby.gov.in, you can easily track your application status by clicking on the tab "Application Status". Simply enter your application number and captcha, then click to check the status. A new window will display the current status of your application.');

manager.addDocument('en', 'What is Crop Insurance App?', 'pmfby.faq34');
manager.addAnswer('en', 'pmfby.faq34', 'Crop Insurance App is an android based app developed by the Ministry of Agriculture and Farmers Welfare, Government of India for facilitating Crop Loss Intimation during Localized Calamities and Post-Harvest Losses. Farmers can also download this app from Google Play Store here: https://play.google.com/store/apps/details?id=in.farmguide.farmerapp.central&pcampaignid=web_share');

manager.addDocument('en', 'What are the usage of the crop Insurance app?', 'pmfby.faq35');
manager.addAnswer('en', 'pmfby.faq35', 'Dear beneficThis app provides a comprehensive set of crop insurance services. Farmers can easily download their crop insurance policy, check premium details, report crop losses, and even upload pictures and videos for crop damage assessment.');

manager.addDocument('en', 'Where does I get detailed information of the implementing insurance company and which insurance company is operating in my area for this season?', 'pmfby.faq36');
manager.addAnswer('en', 'pmfby.faq36', 'You can find detailed information about the implementing Insurance Company by contacting on toll free krishi Rakshak helpline no 14447 at CSCs, Bank Branches, or by contacting District or Block Level Agriculture Officers. To know which insurance company is operating in your area for this season, you can reach out to the District or Block Level Agriculture Officers. Another way is to check the PMFBY portal https://pmfby.gov.in/  and use the Insurance Premium Calculator on the home page.');

manager.addDocument('en', 'What is an Insurance Unit?', 'pmfby.faq37');
manager.addAnswer('en', 'pmfby.faq37', 'The Insurance Unit is basically a defined area by the State Government for the implementation of the Scheme. It could be a Village, Village Panchayat, Revenue Circle, Patwar Halka, District, Taluka, or any other equivalent administrative unit.');

manager.addDocument('en', 'Does the crop insurance premium will directly be debited from my loan account or I have to inform the bank for debiting premium amount from my loan account?', 'pmfby.faq38');
manager.addAnswer('en', 'pmfby.faq38', 'If you have not submitted an Opt out declaration to your serving bank branch at least 7 days before the enrollment cutoff date, then the premium will be directly deducted from your loan account.');

manager.addDocument('en', 'How much is the Common Service Centre (CSC)/Village Level Entrepreneur  (VLE) charge for enrolment under crop insurance other than premium amount?', 'pmfby.faq39');
manager.addAnswer('en', 'pmfby.faq39', 'The enrolment under PMFBY/RWBICS is completely free for farmers. CSCs/VLEs should not charge any additional amount from farmers other than the premium. If they do, legal or administrative action may be taken against them.');

manager.addDocument('en', 'Whom do I approach in the event of natural calamity like Localized Calamities or Post-Harvest Losses?', 'pmfby.faq40');
manager.addAnswer('en', 'pmfby.faq40', 'In the event of natural calamities like Localized Calamities or Post-Harvest Losses, you should reach out to the concerned Insurance Company, Bank, PACS/CSC, Block and District officers, State Officer of the local agriculture department, or call at Centralized KRPH Toll Free Number 14447 within 72 hours of the occurrence. You can also directly lodge your crop loss intimation through the Crop Insurance App https://play.google.com/store/apps/details?id=in.farmguide.farmerapp.central&pcampaignid=web_share .');

manager.addDocument('en', 'What is the process for informing incidents of crop losses and obtaining Insurance Claims?', 'pmfby.faq41');
manager.addAnswer('en', 'pmfby.faq41', 'The process for informing incidents of crop losses and obtaining Insurance Claims involves reporting the loss within 72 hours to the 1) Insurance Company, Bank, or State Government Officers. 2) Intimate via crop insurace mobile app or 3) call on toll free Krishi rakshak Helpline no 14447 .The information is then forwarded to the insurance company for assessment, and the claim payment is made to eligible farmers within 15 days. If you have any further questions, feel free to ask.');

manager.addDocument('en', 'What is general timeline for settlement of claims by the Insurance Companies?', 'pmfby.faq42');
manager.addAnswer('en', 'pmfby.faq42', 'Insurance Companies are generally expected to settle the claims within 21 days of receiving final actual yield data from the State Govt, as long as the State share of subsidy is released. State Govts should ideally provide final actual yield data within one month of the crop being harvested.');

manager.addDocument('en', 'Where do I report my complaint in case of delay in claim settlement?', 'pmfby.faq43');
manager.addAnswer('en', 'pmfby.faq43', 'If you are facing any delays in claim settlement, you can report your complaint through the Krishi Rakshak Helpline and Portal (KRPH). You can call the centralized toll-free number 14447 for assistance with any issues related to PMFBY/RWBCS implementation.');

manager.addDocument('en', 'What is grievance redressal mechanism established under PMFBY/RWBCIS?', 'pmfby.faq44');
manager.addAnswer('en', 'pmfby.faq44', 'The grievance redressal mechanism under PMFBY/RWBCIS involves different levels of committees to address farmers concerns. At the primary level, the District Agriculture Officer responds to grievances within 7 days. If there is dissatisfaction, the matter can be escalated to the District Level Grievance Redressal Committee (DGRC). This committee, headed by the District Magistrate/Collector, includes representatives from Banks, NABARD, Insurance Company, concerned State Authority and farmers. If needed, grievances can be further escalated to the State Level Grievance Redressal Committee (SGRC) within 15 days. The SGRC, led by the Principal Secretary/Secretary of the Nodal Department, aims to resolve matters within 15 days. Its important that all parties accept the decision made by the committee.');

manager.addDocument('en', 'What precautions farmer to take while applying for PMFBY/RWBCIS?', 'pmfby.faq45')
manager.addAnswer('en', 'pmfby.faq45', 'When applying for PMFBY/RWBCIS, it is important for farmers to ensure they share accurate crop details and area during enrollment. Any discrepancies in this information could lead to the rejection of the application by the Insurance Company during the approval process. Additionally, providing correct bank details is crucial as the claim amount is directly transferred to the farmers account under the Direct Benefit Transfer (DBT) policy of the Government of India. It is+ also essential to remember that incorrect information could result in claim payment denial, especially during loss assessment for localized calamities or post-harvest losses. In the event of a localized calamity or post-harvest losses, farmers must promptly inform the concerned bank, insurance company, or local agriculture department within 72 hours. Stay informed and ensure all details are accurate to benefit fully from the PMFBY/RWBCIS schemes.');

manager.addDocument('en', 'What provision are made in revamped PMFBY to ensure that Insurance Companies provide better service to farmers?', 'pmfby.faq46');
manager.addAnswer('en', 'pmfby.faq46', 'Under the revamped PMFBY, Insurance Companies are now allotted business for three years. This means that farmers will receive crop insurance service from the same insurance company for three consecutive years. This change eliminates the need for farmers to visit different insurance companies every season in case of crop losses. Additionally, Insurance Companies are required to provide a fully functional toll-free number for farmers to access relevant information. Moreover, Insurance Companies must establish offices at district and block levels and deploy skilled manpower to assist farmers effectively.');

manager.addDocument('en', 'What are the new changes introduced in estimation of crop losses or claim computation for timely claim payment?', 'pmfby.faq47');
manager.addAnswer('en', 'pmfby.faq47', 'To ensure that farmers receive timely claim payments, the government has introduced various technological solutions like YES-TECH and WINDS initiatives, DIGI-Claim module, and the mandatory use of Crop Cutting Experiments (CCE) Agri App for real-time capturing of CCEs. These initiatives aim to streamline the estimation of crop losses and claim computation processes.');




module.exports = manager;