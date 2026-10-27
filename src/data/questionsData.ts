/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuestionItem } from '../types/quiz';

export const QUESTIONS_DATA: QuestionItem[] = [
  // ==========================================
  // PART 1: MULTIPLE CHOICE QUESTIONS (MCQ)
  // Section: Ventilation, Waste and Water (Q1 - Q26)
  // ==========================================
  {
    id: 'mcq-1',
    sectionNumber: 1,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'The modern concept of ventilation includes:',
    options: [
      { label: 'A', text: 'Only removing stale air' },
      { label: 'B', text: 'Replacing vitiated air with fresh outdoor air and controlling quality of incoming air' },
      { label: 'C', text: 'Only cooling' },
      { label: 'D', text: 'Only adding humidity' }
    ],
    correctAnswer: 'B',
    explanation: 'Modern ventilation is not simply exhausting air; it entails continuously replacing vitiated (stale/polluted) indoor air with fresh outdoor air while conditioning and filtering temperature, humidity, and purity.',
    keyFact: 'Modern ventilation replaces vitiated air AND controls the physical/chemical quality of incoming air.',
    tags: ['Ventilation', 'Air Quality', 'Environmental Sanitation']
  },
  {
    id: 'mcq-2',
    sectionNumber: 2,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Which is NOT controlled in the quality of incoming air?',
    options: [
      { label: 'A', text: 'Temperature' },
      { label: 'B', text: 'Humidity' },
      { label: 'C', text: 'CO2/Oxygen' },
      { label: 'D', text: 'Noise level' }
    ],
    correctAnswer: 'D',
    explanation: 'Air quality conditioning controls thermal factors (temperature, humidity), air motion, and gaseous content (CO2, oxygen, particulates). Noise level is an acoustic factor governed by sound insulation, not air ventilation parameters.',
    keyFact: 'Noise level is acoustic, not a constituent of incoming air quality control.',
    tags: ['Ventilation', 'Air Quality Parameters']
  },
  {
    id: 'mcq-3',
    sectionNumber: 3,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Which is NOT part of waste management?',
    options: [
      { label: 'A', text: 'Collection' },
      { label: 'B', text: 'Source separation' },
      { label: 'C', text: 'Advertising' },
      { label: 'D', text: 'Disposal' }
    ],
    correctAnswer: 'C',
    explanation: 'Waste management comprises generation control, source separation, collection, transfer, transport, processing, recovery, and final sanitary disposal. Advertising is a marketing activity.',
    keyFact: 'Core waste management stages: Source separation -> Collection -> Transport -> Processing -> Disposal.',
    tags: ['Waste Management', 'Sanitation']
  },
  {
    id: 'mcq-4',
    sectionNumber: 4,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Which is NOT a health problem due to solid waste?',
    options: [
      { label: 'A', text: 'Skin disease' },
      { label: 'B', text: 'Gastro-intestinal disease' },
      { label: 'C', text: 'Liver disease' },
      { label: 'D', text: 'Cataract' }
    ],
    correctAnswer: 'D',
    explanation: 'Improper solid waste disposal fosters pathogens, parasites, and chemical leachates leading to skin infections, diarrheal/GI disease, and toxic liver injury. Cataracts result from ocular aging, UV/radiation, or diabetes, not solid waste.',
    keyFact: 'Solid waste is linked to infectious, dermal, and GI/liver diseases; cataracts are ocular disorders.',
    tags: ['Solid Waste', 'Public Health Risks']
  },
  {
    id: 'mcq-5',
    sectionNumber: 5,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Burning solid waste may cause:',
    options: [
      { label: 'A', text: 'Respiratory disease' },
      { label: 'B', text: 'Scurvy' },
      { label: 'C', text: 'Rickets' },
      { label: 'D', text: 'Goiter' }
    ],
    correctAnswer: 'A',
    explanation: 'Open burning of solid waste releases particulate matter (PM2.5), dioxins, furans, sulfur oxides, and carbon monoxide, triggering acute and chronic respiratory diseases (asthma, COPD, bronchitis).',
    keyFact: 'Open waste incineration releases toxic aerosols that trigger severe respiratory pathology.',
    tags: ['Air Pollution', 'Combustion Hazards', 'Respiratory Health']
  },
  {
    id: 'mcq-6',
    sectionNumber: 6,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Burning waste affects climate change and creates:',
    options: [
      { label: 'A', text: 'Pure water' },
      { label: 'B', text: 'Toxic ash' },
      { label: 'C', text: 'Fertilizer' },
      { label: 'D', text: 'Oxygen' }
    ],
    correctAnswer: 'B',
    explanation: 'Uncontrolled waste combustion generates greenhouse gases accelerating climate change, and leaves behind toxic fly ash and bottom ash laden with concentrated heavy metals and chlorinated hydrocarbons.',
    keyFact: 'Waste burning produces toxic ash containing concentrated hazardous toxins and heavy metals.',
    tags: ['Toxic Ash', 'Environmental Hazard']
  },
  {
    id: 'mcq-7',
    sectionNumber: 7,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'The composition of water (H2O):',
    options: [
      { label: 'A', text: 'One H, two O' },
      { label: 'B', text: 'Two H, one O' },
      { label: 'C', text: 'Two H, two O' },
      { label: 'D', text: 'One H, one O' }
    ],
    correctAnswer: 'B',
    explanation: 'A molecule of water (H2O) is composed of two hydrogen atoms bonded to one oxygen atom.',
    keyFact: 'Chemical formula H2O: two hydrogen atoms and one oxygen atom.',
    tags: ['Water Chemistry']
  },
  {
    id: 'mcq-8',
    sectionNumber: 8,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Hydrogen atoms are bonded to oxygen in water by:',
    options: [
      { label: 'A', text: 'Ionic bonds' },
      { label: 'B', text: 'Covalent bonds' },
      { label: 'C', text: 'Metallic bonds' },
      { label: 'D', text: 'Van der Waals forces' }
    ],
    correctAnswer: 'B',
    explanation: 'Within an individual H2O molecule, hydrogen atoms share electrons with oxygen forming strong polar covalent bonds. (Weak hydrogen bonds occur between separate adjacent water molecules).',
    keyFact: 'Intramolecular bonds in water molecules are polar covalent bonds.',
    tags: ['Chemical Bonding', 'Water']
  },
  {
    id: 'mcq-9',
    sectionNumber: 9,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Potable water is water that is:',
    options: [
      { label: 'A', text: 'Colored' },
      { label: 'B', text: 'Safe for ingestion' },
      { label: 'C', text: 'Used only for washing' },
      { label: 'D', text: 'Salty' }
    ],
    correctAnswer: 'B',
    explanation: 'By international public health definition, potable water is wholesome, palatable water that is safe for human consumption (drinking and culinary ingestion) without health risk.',
    keyFact: 'Potable water = wholesome water safe for human ingestion and cooking.',
    tags: ['Water Potability', 'Public Health']
  },
  {
    id: 'mcq-10',
    sectionNumber: 10,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Maximum turbidity of drinking water:',
    options: [
      { label: 'A', text: '1 NTU' },
      { label: 'B', text: '5 NTU' },
      { label: 'C', text: '10 NTU' },
      { label: 'D', text: '50 NTU' }
    ],
    correctAnswer: 'B',
    explanation: 'According to WHO and standard environmental health guidelines, the acceptable maximum turbidity threshold for drinking water is 5 Nephelometric Turbidity Units (NTU).',
    keyFact: 'Maximum allowable turbidity for drinking water = 5 NTU.',
    tags: ['Water Standards', 'Turbidity', 'WHO Guidelines']
  },
  {
    id: 'mcq-11',
    sectionNumber: 11,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Ideal turbidity of drinking water:',
    options: [
      { label: 'A', text: 'Below 1 NTU' },
      { label: 'B', text: '5 NTU' },
      { label: 'C', text: '10 NTU' },
      { label: 'D', text: 'Above 20 NTU' }
    ],
    correctAnswer: 'A',
    explanation: 'To guarantee effective disinfection by chlorination, turbidity should ideally be kept below 1 NTU (or even <0.5 NTU in treatment plants).',
    keyFact: 'Ideal drinking water turbidity is < 1 NTU for optimal disinfection efficiency.',
    tags: ['Water Quality', 'Turbidity']
  },
  {
    id: 'mcq-12',
    sectionNumber: 12,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Acceptable pH range (per slides):',
    options: [
      { label: 'A', text: '1–5' },
      { label: 'B', text: '5–9' },
      { label: 'C', text: '9–14' },
      { label: 'D', text: '0–3' }
    ],
    correctAnswer: 'B',
    explanation: 'As specified in the lecture slides, the acceptable operational pH range for water supplies is 5–9 (with standard drinking water guidelines recommending 6.5–8.5).',
    keyFact: 'Acceptable slide standard pH range is 5–9.',
    tags: ['Water Standards', 'pH Levels']
  },
  {
    id: 'mcq-13',
    sectionNumber: 13,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'A pH above 9 constrains:',
    options: [
      { label: 'A', text: 'Filtration' },
      { label: 'B', text: 'Boiling' },
      { label: 'C', text: 'Chlorination' },
      { label: 'D', text: 'Precipitation' }
    ],
    correctAnswer: 'C',
    explanation: 'At alkaline pH values > 9, hypochlorous acid (HOCl, the potent biocidal disinfectant) shifts into hypochlorite ion (OCl-), drastically decreasing chlorine disinfection efficacy by over 90%.',
    keyFact: 'pH > 9 impairs chlorination efficiency by shifting HOCl to the less active OCl- ion.',
    tags: ['Water Disinfection', 'Chlorination', 'pH Chemistry']
  },
  {
    id: 'mcq-14',
    sectionNumber: 14,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Zero coliform means the water is:',
    options: [
      { label: 'A', text: 'Fit' },
      { label: 'B', text: 'Probably contaminated' },
      { label: 'C', text: 'Contaminated' },
      { label: 'D', text: 'Toxic' }
    ],
    correctAnswer: 'A',
    explanation: 'In 100 mL of drinking water, 0 coliform count indicates that water is bacteriologically fit and safe for drinking.',
    keyFact: 'Zero coliform per 100 mL = bacteriologically fit water.',
    tags: ['Microbiology', 'Coliform', 'Water Testing']
  },
  {
    id: 'mcq-15',
    sectionNumber: 15,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: '1–10 E. coli indicates:',
    options: [
      { label: 'A', text: 'Fit' },
      { label: 'B', text: 'Probable contamination' },
      { label: 'C', text: 'Contaminated' },
      { label: 'D', text: 'Sterile' }
    ],
    correctAnswer: 'B',
    explanation: 'A count of 1–10 E. coli organisms per 100 mL signifies probable fecal contamination, necessitating urgent investigation and re-testing.',
    keyFact: '1–10 E. coli per 100 mL indicates probable fecal contamination.',
    tags: ['E. coli', 'Water Quality', 'Biological Indicators']
  },
  {
    id: 'mcq-16',
    sectionNumber: 16,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: '10–100 E. coli indicates:',
    options: [
      { label: 'A', text: 'Fit' },
      { label: 'B', text: 'Probable contamination' },
      { label: 'C', text: 'Contaminated' },
      { label: 'D', text: 'Excellent quality' }
    ],
    correctAnswer: 'C',
    explanation: 'A count between 10 and 100 E. coli per 100 mL indicates definitive, gross contamination, rendering the supply unsafe for consumption.',
    keyFact: '10–100 E. coli per 100 mL classifies water as contaminated.',
    tags: ['E. coli', 'Water Contamination']
  },
  {
    id: 'mcq-17',
    sectionNumber: 17,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Minimum water for drinking and domestic hygiene (Sphere 2018):',
    options: [
      { label: 'A', text: '5 L/person/day' },
      { label: 'B', text: '10 L' },
      { label: 'C', text: '15 L' },
      { label: 'D', text: '50 L' }
    ],
    correctAnswer: 'C',
    explanation: 'The Sphere Handbook 2018 humanitarian standard specifies a basic survival water allocation of 15 liters per person per day for drinking, cooking, and basic domestic hygiene.',
    keyFact: 'Sphere standard: 15 Liters / person / day for survival and basic domestic hygiene.',
    tags: ['Sphere Standards', 'Water Supply', 'Humanitarian Health']
  },
  {
    id: 'mcq-18',
    sectionNumber: 18,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Maximum people per tap:',
    options: [
      { label: 'A', text: '50' },
      { label: 'B', text: '100' },
      { label: 'C', text: '250' },
      { label: 'D', text: '500' }
    ],
    correctAnswer: 'C',
    explanation: 'Under Sphere guidelines, one public water tap stand must serve no more than 250 individuals to avoid prolonged queue times.',
    keyFact: 'Tap allocation standard: maximum 250 people per tap.',
    tags: ['Water Distribution', 'Sphere Standards']
  },
  {
    id: 'mcq-19',
    sectionNumber: 19,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'The tap standard is based on a flow rate of:',
    options: [
      { label: 'A', text: '7.5 L/min' },
      { label: 'B', text: '17 L/min' },
      { label: 'C', text: '15 L/min' },
      { label: 'D', text: '1 L/min' }
    ],
    correctAnswer: 'A',
    explanation: 'The public tap ratio (250 people/tap) is calculated assuming a minimum delivery flow rate of 7.5 liters per minute.',
    keyFact: 'Tap standard assumes a flow rate of 7.5 L/minute.',
    tags: ['Flow Rates', 'Hydraulics', 'Sphere Standards']
  },
  {
    id: 'mcq-20',
    sectionNumber: 20,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Maximum people per hand pump:',
    options: [
      { label: 'A', text: '100' },
      { label: 'B', text: '250' },
      { label: 'C', text: '500' },
      { label: 'D', text: '50' }
    ],
    correctAnswer: 'C',
    explanation: 'A community hand pump is designed to service a maximum population threshold of 500 people.',
    keyFact: 'Hand pump capacity standard: maximum 500 people per pump.',
    tags: ['Hand Pumps', 'Rural Water Supply']
  },
  {
    id: 'mcq-21',
    sectionNumber: 21,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'The hand pump standard is based on a flow rate of:',
    options: [
      { label: 'A', text: '7.5 L/min' },
      { label: 'B', text: '17 L/min' },
      { label: 'C', text: '25 L/min' },
      { label: 'D', text: '2 L/min' }
    ],
    correctAnswer: 'B',
    explanation: 'Hand pump engineering standards are modeled on an expected discharge capacity of approximately 17 L/min (or ~16.6–17 L/min).',
    keyFact: 'Hand pump flow rate standard: 17 L/minute.',
    tags: ['Hand Pump Flow', 'Sphere Standards']
  },
  {
    id: 'mcq-22',
    sectionNumber: 22,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Maximum people per laundry facility:',
    options: [
      { label: 'A', text: '50' },
      { label: 'B', text: '100' },
      { label: 'C', text: '250' },
      { label: 'D', text: '500' }
    ],
    correctAnswer: 'B',
    explanation: 'Sphere hygiene guidelines state that a communal laundry facility (basin/bench) should accommodate a maximum of 100 people.',
    keyFact: 'Communal laundry facility ratio: 1 facility per 100 people.',
    tags: ['Hygiene Facilities', 'Sphere Standards']
  },
  {
    id: 'mcq-23',
    sectionNumber: 23,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Maximum people per bathing facility:',
    options: [
      { label: 'A', text: '50' },
      { label: 'B', text: '100' },
      { label: 'C', text: '250' },
      { label: 'D', text: '500' }
    ],
    correctAnswer: 'A',
    explanation: 'Public health and dignity benchmarks mandate a maximum ratio of 50 people per communal shower or bathing cubicle.',
    keyFact: 'Communal bathing facility ratio: 1 cubicle per 50 people.',
    tags: ['Hygiene Facilities', 'Sanitation']
  },
  {
    id: 'mcq-24',
    sectionNumber: 24,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Chemical added in the first step of water treatment:',
    options: [
      { label: 'A', text: 'Aluminum sulphate' },
      { label: 'B', text: 'Sodium chloride' },
      { label: 'C', text: 'Calcium carbonate' },
      { label: 'D', text: 'Ammonia' }
    ],
    correctAnswer: 'A',
    explanation: 'Aluminum sulphate (alum, Al2(SO4)3) is the primary coagulant dosed in rapid mixing to neutralize colloidal negative charges and form settleable flocs.',
    keyFact: 'Aluminum sulphate (alum) is added in the coagulation/flocculation step of water treatment.',
    tags: ['Water Treatment', 'Coagulation', 'Alum']
  },
  {
    id: 'mcq-25',
    sectionNumber: 25,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Which is NOT a sterilization method mentioned?',
    options: [
      { label: 'A', text: 'Boiling' },
      { label: 'B', text: 'Chlorine' },
      { label: 'C', text: 'Ozone gas' },
      { label: 'D', text: 'Freezing' }
    ],
    correctAnswer: 'D',
    explanation: 'Freezing preserves microorganisms rather than reliably destroying them. Proven water disinfection/sterilization methods include thermal boiling, chemical chlorination, and ozonation.',
    keyFact: 'Freezing is bacteriostatic, not a sterilization or disinfection method.',
    tags: ['Disinfection', 'Water Treatment Methods']
  },
  {
    id: 'mcq-26',
    sectionNumber: 26,
    type: 'mcq',
    category: 'Ventilation, Waste & Water',
    question: 'Which is NOT related to drinking-water contamination?',
    options: [
      { label: 'A', text: 'Cholera' },
      { label: 'B', text: 'Typhoid' },
      { label: 'C', text: 'Polio' },
      { label: 'D', text: 'Malaria' }
    ],
    correctAnswer: 'D',
    explanation: 'Cholera, typhoid fever, and poliomyelitis are waterborne infections spread via the fecal-oral route in contaminated water. Malaria is a vector-borne protozoan infection transmitted through female Anopheles mosquitoes.',
    keyFact: 'Malaria is transmitted by mosquito bites; cholera, typhoid, and polio are waterborne.',
    tags: ['Waterborne Diseases', 'Epidemiology']
  },

  // ==========================================
  // Section: Food Contamination (Q27 - Q39)
  // ==========================================
  {
    id: 'mcq-27',
    sectionNumber: 27,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Foodborne illnesses are caused by:',
    options: [
      { label: 'A', text: 'Bacteria only' },
      { label: 'B', text: 'Bacteria, viruses, parasites or chemicals' },
      { label: 'C', text: 'Viruses only' },
      { label: 'D', text: 'Noise' }
    ],
    correctAnswer: 'B',
    explanation: 'Foodborne illness has a multifactorial etiology encompassing biological agents (bacteria, viruses, fungi, parasites) as well as chemical contaminants (toxins, heavy metals, pesticides).',
    keyFact: 'Foodborne illnesses are caused by bacteria, viruses, parasites, or chemical toxins.',
    tags: ['Food Safety', 'Pathology']
  },
  {
    id: 'mcq-28',
    sectionNumber: 28,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Which is NOT a bacterial foodborne pathogen?',
    options: [
      { label: 'A', text: 'Salmonella' },
      { label: 'B', text: 'Campylobacter' },
      { label: 'C', text: 'Enterohaemorrhagic E. coli' },
      { label: 'D', text: 'Norovirus' }
    ],
    correctAnswer: 'D',
    explanation: 'Norovirus is a single-stranded RNA virus (Caliciviridae), not a bacterium. Salmonella, Campylobacter, and EHEC are true bacteria.',
    keyFact: 'Norovirus is a virus (Calicivirus), whereas Salmonella and Campylobacter are bacteria.',
    tags: ['Bacteriology', 'Virology', 'Food Safety']
  },
  {
    id: 'mcq-29',
    sectionNumber: 29,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Salmonellosis outbreaks are usually linked to:',
    options: [
      { label: 'A', text: 'Eggs and poultry' },
      { label: 'B', text: 'Distilled water' },
      { label: 'C', text: 'Salt' },
      { label: 'D', text: 'Sugar' }
    ],
    correctAnswer: 'A',
    explanation: 'Salmonella enterica colonizes the gastrointestinal tract of birds, making poultry meat and undercooked eggs the primary outbreak vehicle.',
    keyFact: 'Eggs and undercooked poultry are classic vehicles for Salmonella outbreaks.',
    tags: ['Salmonella', 'Zoonosis', 'Food Vehicles']
  },
  {
    id: 'mcq-30',
    sectionNumber: 30,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Campylobacter cases are mainly caused by:',
    options: [
      { label: 'A', text: 'Raw milk, undercooked poultry, drinking water' },
      { label: 'B', text: 'Canned fruit' },
      { label: 'C', text: 'Bread' },
      { label: 'D', text: 'Honey' }
    ],
    correctAnswer: 'A',
    explanation: 'Campylobacter jejuni transmission occurs predominantly via consumption of raw/unpasteurized milk, undercooked broiler chicken, and contaminated water sources.',
    keyFact: 'Campylobacter is transmitted by unpasteurized milk, undercooked poultry, and water.',
    tags: ['Campylobacter', 'Gastroenteritis']
  },
  {
    id: 'mcq-31',
    sectionNumber: 31,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Which infection can lead to miscarriage or death of newborns?',
    options: [
      { label: 'A', text: 'Listeria' },
      { label: 'B', text: 'Norovirus' },
      { label: 'C', text: 'Giardia' },
      { label: 'D', text: 'Cholera' }
    ],
    correctAnswer: 'A',
    explanation: 'Listeria monocytogenes crosses both the intestinal and placental barriers, leading to maternal listeriosis, chorioamnionitis, spontaneous abortion, stillbirth, or neonatal granulomatosis infantiseptica.',
    keyFact: 'Listeria crosses the placenta, causing spontaneous abortion and neonatal sepsis.',
    tags: ['Listeria', 'Perinatal Infection', 'Obstetrics']
  },
  {
    id: 'mcq-32',
    sectionNumber: 32,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Listeria can:',
    options: [
      { label: 'A', text: 'Not survive cold' },
      { label: 'B', text: 'Grow at refrigeration temperatures' },
      { label: 'C', text: 'Live only in water' },
      { label: 'D', text: 'Infect only plants' }
    ],
    correctAnswer: 'B',
    explanation: 'Listeria monocytogenes is a psychrotolerant organism that can multiply at cold refrigeration temperatures (down to 1°C–4°C), making cold deli meats and soft cheeses high-risk items.',
    keyFact: 'Listeria is psychrotolerant: it multiplies at refrigerator temperatures.',
    tags: ['Psychrotolerant', 'Listeria', 'Food Microbiology']
  },
  {
    id: 'mcq-33',
    sectionNumber: 33,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Foods implicated in cholera outbreaks:',
    options: [
      { label: 'A', text: 'Rice, vegetables, millet gruel, seafood' },
      { label: 'B', text: 'Only chocolate' },
      { label: 'C', text: 'Only bread' },
      { label: 'D', text: 'Only dairy' }
    ],
    correctAnswer: 'A',
    explanation: 'Vibrio cholerae contaminates raw or undercooked shellfish/seafood, cooked grains kept at ambient temperature (moist rice, millet gruel), and raw vegetables irrigated with sewage water.',
    keyFact: 'Cholera vehicles include contaminated seafood, cooked rice, millet gruel, and vegetables.',
    tags: ['Vibrio cholerae', 'Outbreak Vehicles']
  },
  {
    id: 'mcq-34',
    sectionNumber: 34,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Common viral cause of foodborne infection with explosive vomiting:',
    options: [
      { label: 'A', text: 'Hepatitis A' },
      { label: 'B', text: 'Norovirus' },
      { label: 'C', text: 'Salmonella' },
      { label: 'D', text: 'Taenia' }
    ],
    correctAnswer: 'B',
    explanation: 'Norovirus is famous for acute-onset, projectile/explosive vomiting and watery diarrhea within 12–48 hours of exposure, often spreading in closed environments (cruise ships, hospitals, dorms).',
    keyFact: 'Norovirus is the primary viral cause of explosive projectile vomiting outbreaks.',
    tags: ['Norovirus', 'Acute Gastroenteritis']
  },
  {
    id: 'mcq-35',
    sectionNumber: 35,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Hepatitis A virus can cause:',
    options: [
      { label: 'A', text: 'Long-lasting liver disease' },
      { label: 'B', text: 'Hearing loss' },
      { label: 'C', text: 'Cataract' },
      { label: 'D', text: 'Hypertension' }
    ],
    correctAnswer: 'A',
    explanation: 'Hepatitis A infects hepatocytes, leading to jaundice, dark urine, and debilitating liver disease that can persist for weeks or months with prolonged convalescence.',
    keyFact: 'Hepatitis A is a foodborne/waterborne enterovirus causing protracted liver dysfunction.',
    tags: ['Hepatitis A', 'Hepatology', 'Viral Disease']
  },
  {
    id: 'mcq-36',
    sectionNumber: 36,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Beef tapeworm is:',
    options: [
      { label: 'A', text: 'Taenia saginata' },
      { label: 'B', text: 'Giardia lamblia' },
      { label: 'C', text: 'Ascaris' },
      { label: 'D', text: 'Vibrio cholerae' }
    ],
    correctAnswer: 'A',
    explanation: 'Taenia saginata is the human beef tapeworm contracted by ingesting undercooked beef harboring cysticercus bovis larvae. (Taenia solium is pork tapeworm).',
    keyFact: 'Taenia saginata = beef tapeworm; Taenia solium = pork tapeworm.',
    tags: ['Cestodes', 'Taenia saginata', 'Parasitology']
  },
  {
    id: 'mcq-37',
    sectionNumber: 37,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Which parasite may infect through food or contact with animals?',
    options: [
      { label: 'A', text: 'Hymenolepis nana' },
      { label: 'B', text: 'Vibrio' },
      { label: 'C', text: 'Listeria' },
      { label: 'D', text: 'Norovirus' }
    ],
    correctAnswer: 'A',
    explanation: 'Hymenolepis nana (the dwarf tapeworm) is transmitted through food contaminated with arthropods/rodent droppings, direct fecal-oral autoinfection, or contact with infected rodents/animals.',
    keyFact: 'Hymenolepis nana (dwarf tapeworm) infects via ingestion of contaminated food or animal contact.',
    tags: ['Hymenolepis nana', 'Zoonotic Parasites']
  },
  {
    id: 'mcq-38',
    sectionNumber: 38,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Aflatoxins and ochratoxin are:',
    options: [
      { label: 'A', text: 'Mycotoxins' },
      { label: 'B', text: 'Heavy metals' },
      { label: 'C', text: 'Radioactive nuclides' },
      { label: 'D', text: 'Viruses' }
    ],
    correctAnswer: 'A',
    explanation: 'Aflatoxins (from Aspergillus flavus) and ochratoxins (from Aspergillus and Penicillium) are toxic fungal secondary metabolites classified as mycotoxins, known for hepatocarcinogenicity and nephrotoxicity.',
    keyFact: 'Aflatoxins and ochratoxins are mold-derived fungal secondary metabolites (mycotoxins).',
    tags: ['Mycotoxins', 'Toxicology', 'Aspergillus']
  },
  {
    id: 'mcq-39',
    sectionNumber: 39,
    type: 'mcq',
    category: 'Food Contamination',
    question: 'Lead, cadmium and mercury cause:',
    options: [
      { label: 'A', text: 'Neurological and kidney damage' },
      { label: 'B', text: 'Only fever' },
      { label: 'C', text: 'Only rash' },
      { label: 'D', text: 'Only hearing loss' }
    ],
    correctAnswer: 'A',
    explanation: 'Heavy metals such as lead (Pb), cadmium (Cd), and mercury (Hg) bioaccumulate, causing severe neurotoxicity (encephalopathy, cognitive decline) and nephrotoxicity (tubular necrosis and renal failure).',
    keyFact: 'Lead, cadmium, and mercury are neurotoxic and nephrotoxic heavy metals.',
    tags: ['Heavy Metals', 'Nephrotoxicity', 'Neurotoxicity']
  },

  // ==========================================
  // Section: Noise and Lighting (Q40 - Q47)
  // ==========================================
  {
    id: 'mcq-40',
    sectionNumber: 40,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Noise pollution is:',
    options: [
      { label: 'A', text: 'Pleasant sound' },
      { label: 'B', text: 'Unwanted or excessive sound harmful to health and environment' },
      { label: 'C', text: 'Silence' },
      { label: 'D', text: 'Only music' }
    ],
    correctAnswer: 'B',
    explanation: 'Noise pollution is defined as unwanted, disturbing, or excessively loud acoustic energy that causes physiological impairment, psychological stress, or environmental disruption.',
    keyFact: 'Noise pollution = unwanted, excessive acoustic energy detrimental to health.',
    tags: ['Noise Pollution', 'Occupational Health']
  },
  {
    id: 'mcq-41',
    sectionNumber: 41,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Permissible noise level for 8 hours:',
    options: [
      { label: 'A', text: '80 dB' },
      { label: 'B', text: '85 dB' },
      { label: 'C', text: '90 dB' },
      { label: 'D', text: '100 dB' }
    ],
    correctAnswer: 'B',
    explanation: 'Standard occupational safety guidelines (NIOSH/WHO) define 85 dBA as the recommended permissible exposure limit for a standard 8-hour workday.',
    keyFact: 'Permissible noise exposure for an 8-hour shift is 85 dB.',
    tags: ['Noise Standards', 'Decibel Limits', 'OSHA/NIOSH']
  },
  {
    id: 'mcq-42',
    sectionNumber: 42,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Permissible exposure at 90 dB:',
    options: [
      { label: 'A', text: '16 h' },
      { label: 'B', text: '8 h' },
      { label: 'C', text: '4 h' },
      { label: 'D', text: '1 h' }
    ],
    correctAnswer: 'C',
    explanation: 'According to the 5 dB exchange rate (or 3 dB in strict NIOSH rules, but slides follow the 85dB/8h -> 90dB/4h schedule): every increase of 5 dB cuts the allowable exposure duration in half (4 hours for 90 dB).',
    keyFact: 'Permissible exposure at 90 dB is reduced to 4 hours.',
    tags: ['Noise Exposure Schedule', 'Exchange Rate']
  },
  {
    id: 'mcq-43',
    sectionNumber: 43,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Permissible exposure at 110 dB:',
    options: [
      { label: 'A', text: '0.25 h' },
      { label: 'B', text: '1 h' },
      { label: 'C', text: '2 h' },
      { label: 'D', text: '8 h' }
    ],
    correctAnswer: 'A',
    explanation: 'At an intense acoustic pressure of 110 dB, the maximum safe exposure duration without hearing protection is restricted to 0.25 hours (15 minutes).',
    keyFact: 'At 110 dB, permissible exposure is just 0.25 hours (15 minutes).',
    tags: ['Acoustic Safety', 'Hearing Loss']
  },
  {
    id: 'mcq-44',
    sectionNumber: 44,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Permissible level for 16 hours:',
    options: [
      { label: 'A', text: '80 dB' },
      { label: 'B', text: '85 dB' },
      { label: 'C', text: '95 dB' },
      { label: 'D', text: '110 dB' }
    ],
    correctAnswer: 'A',
    explanation: 'Halving acoustic intensity allows doubling the duration: 85 dB for 8 hours corresponds to 80 dB for 16 hours of exposure.',
    keyFact: 'Extended 16-hour shifts drop the permissible noise ceiling to 80 dB.',
    tags: ['Noise Limits', 'Workplace Safety']
  },
  {
    id: 'mcq-45',
    sectionNumber: 45,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Which is NOT a harmful effect of noise?',
    options: [
      { label: 'A', text: 'Hearing loss' },
      { label: 'B', text: 'Hypertension' },
      { label: 'C', text: 'Disturbed sleep' },
      { label: 'D', text: 'Improved relaxation' }
    ],
    correctAnswer: 'D',
    explanation: 'Excessive noise induces acoustic trauma/sensorineural hearing loss, activates sympathetic vasoconstriction raising blood pressure (hypertension), and disrupts sleep cycles. It impairs, rather than improves, relaxation.',
    keyFact: 'Noise triggers hypertension, hearing loss, and insomnia; relaxation is inhibited.',
    tags: ['Physiological Stress', 'Cardiovascular', 'Noise']
  },
  {
    id: 'mcq-46',
    sectionNumber: 46,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Which is NOT an effect of weak lighting?',
    options: [
      { label: 'A', text: 'Headache' },
      { label: 'B', text: 'Eye pain' },
      { label: 'C', text: 'Photophobia' },
      { label: 'D', text: 'Cataract' }
    ],
    correctAnswer: 'D',
    explanation: 'Insufficient lighting strains ciliary muscles, causing asthenopia, ocular fatigue, headaches, and photophobia. Cataracts are lens opacifications induced by excessive UV/infrared radiation or aging, not dim light.',
    keyFact: 'Weak lighting causes eye strain and headaches; cataracts stem from intense radiation/light.',
    tags: ['Lighting Ergonomics', 'Ophthalmology']
  },
  {
    id: 'mcq-47',
    sectionNumber: 47,
    type: 'mcq',
    category: 'Noise & Lighting',
    question: 'Which is an effect of strong lighting?',
    options: [
      { label: 'A', text: 'Cataract' },
      { label: 'B', text: 'Muscle relaxation round the eye' },
      { label: 'C', text: 'Nystagmus' },
      { label: 'D', text: 'Pupil dilation' }
    ],
    correctAnswer: 'A',
    explanation: 'Excessive high-intensity illumination, particularly with UV or infrared components (e.g. glassblowers or welders), denatures lens crystalline proteins leading to cataractogenesis.',
    keyFact: 'Intense strong lighting and radiant glare can induce cataract formation.',
    tags: ['Radiation Damage', 'Cataract', 'Visual Health']
  },

  // ==========================================
  // Section: Radiation (Q48 - Q56)
  // ==========================================
  {
    id: 'mcq-48',
    sectionNumber: 48,
    type: 'mcq',
    category: 'Radiation',
    question: 'Radiation does NOT include:',
    options: [
      { label: 'A', text: 'Alpha' },
      { label: 'B', text: 'Beta' },
      { label: 'C', text: 'Gamma rays' },
      { label: 'D', text: 'Sound waves' }
    ],
    correctAnswer: 'D',
    explanation: 'Alpha particles, beta particles, and gamma rays are forms of ionizing radiation (particulate and electromagnetic). Sound waves are mechanical longitudinal pressure waves, not electromagnetic or ionizing radiation.',
    keyFact: 'Sound is mechanical acoustic vibration; alpha, beta, and gamma are true radiation forms.',
    tags: ['Radiation Physics', 'Ionizing Radiation']
  },
  {
    id: 'mcq-49',
    sectionNumber: 49,
    type: 'mcq',
    category: 'Radiation',
    question: 'Acute radiation syndrome occurs at a whole-body dose typically:',
    options: [
      { label: 'A', text: 'Below 0.01 Sv' },
      { label: 'B', text: 'Above 1 Sv' },
      { label: 'C', text: '0 Sv' },
      { label: 'D', text: 'Below 0.1 Sv' }
    ],
    correctAnswer: 'B',
    explanation: 'Acute Radiation Syndrome (ARS) requires acute high-dose whole-body irradiation, clinically emerging at threshold doses greater than 1 Sievert (Sv) [or 100 rad/rem].',
    keyFact: 'Acute Radiation Syndrome (ARS) is triggered at whole-body doses above 1 Sv.',
    tags: ['Acute Radiation Syndrome', 'Dosimetry', 'Sieverts']
  },
  {
    id: 'mcq-50',
    sectionNumber: 50,
    type: 'mcq',
    category: 'Radiation',
    question: 'Order of acute radiation stages:',
    options: [
      { label: 'A', text: 'Latent, prodromal, manifest' },
      { label: 'B', text: 'Prodromal, latent, manifest illness' },
      { label: 'C', text: 'Manifest, latent, prodromal' },
      { label: 'D', text: 'Latent, manifest, prodromal' }
    ],
    correctAnswer: 'B',
    explanation: 'The classic clinical chronology of ARS proceeds in three phases: 1) Prodromal stage (immediate nausea/vomiting), followed by 2) Latent stage (asymptomatic period of internal cellular destruction), and 3) Manifest illness stage.',
    keyFact: 'ARS chronological progression: Prodromal -> Latent -> Manifest illness.',
    tags: ['ARS Stages', 'Radiation Pathology']
  },
  {
    id: 'mcq-51',
    sectionNumber: 51,
    type: 'mcq',
    category: 'Radiation',
    question: 'Prodromal symptoms:',
    options: [
      { label: 'A', text: 'Nausea, vomiting, fatigue' },
      { label: 'B', text: 'Seizures and coma' },
      { label: 'C', text: 'Bone marrow failure' },
      { label: 'D', text: 'Cataract' }
    ],
    correctAnswer: 'A',
    explanation: 'The prodromal phase presents rapidly within minutes to hours with gastrointestinal and autonomic signs: nausea, vomiting, anorexia, and extreme fatigue.',
    keyFact: 'Prodromal ARS is characterized by acute nausea, vomiting, and fatigue.',
    tags: ['Prodromal Phase', 'Symptomatology']
  },
  {
    id: 'mcq-52',
    sectionNumber: 52,
    type: 'mcq',
    category: 'Radiation',
    question: 'Hematopoietic syndrome dose:',
    options: [
      { label: 'A', text: '1–6 Sv' },
      { label: 'B', text: '50 Sv' },
      { label: 'C', text: '0.01 Sv' },
      { label: 'D', text: '100 Sv' }
    ],
    correctAnswer: 'A',
    explanation: 'Hematopoietic (bone marrow) syndrome is induced by whole-body doses in the range of 1 to 6 Sv, leading to stem cell depletion, pancytopenia, infection, and hemorrhage.',
    keyFact: 'Hematopoietic syndrome occurs at 1–6 Sv whole-body irradiation.',
    tags: ['Hematopoietic Syndrome', 'Bone Marrow', 'Dosimetry']
  },
  {
    id: 'mcq-53',
    sectionNumber: 53,
    type: 'mcq',
    category: 'Radiation',
    question: 'Hematopoietic syndrome mainly damages:',
    options: [
      { label: 'A', text: 'Bone marrow' },
      { label: 'B', text: 'Intestine' },
      { label: 'C', text: 'Brain' },
      { label: 'D', text: 'Skin only' }
    ],
    correctAnswer: 'A',
    explanation: 'Rapidly dividing hematopoietic stem cells in the red bone marrow are exquisitely radiosensitive, precipitating severe leukopenia, thrombocytopenia, and anemia.',
    keyFact: 'Hematopoietic syndrome specifically targets and destroys bone marrow stem cells.',
    tags: ['Bone Marrow Damage', 'Hematology']
  },
  {
    id: 'mcq-54',
    sectionNumber: 54,
    type: 'mcq',
    category: 'Radiation',
    question: 'Gastrointestinal syndrome dose:',
    options: [
      { label: 'A', text: '1 Sv' },
      { label: 'B', text: '6 Sv' },
      { label: 'C', text: '50 Sv' },
      { label: 'D', text: '0.1 Sv' }
    ],
    correctAnswer: 'B',
    explanation: 'Gastrointestinal syndrome occurs at doses around 6 Sv (typically 6–10 Sv), destroying the crypt cells of the intestinal mucosal lining, causing sloughing, severe dehydration, and bacteremia.',
    keyFact: 'GI radiation syndrome occurs at ~6 Sv dose, denuding the intestinal mucosa.',
    tags: ['GI Syndrome', 'Intestinal Mucosa', 'Dose Thresholds']
  },
  {
    id: 'mcq-55',
    sectionNumber: 55,
    type: 'mcq',
    category: 'Radiation',
    question: 'Neurovascular syndrome dose:',
    options: [
      { label: 'A', text: '6 Sv' },
      { label: 'B', text: '10 Sv' },
      { label: 'C', text: '50 Sv' },
      { label: 'D', text: '1 Sv' }
    ],
    correctAnswer: 'C',
    explanation: 'Neurovascular (cerebrovascular) syndrome results from catastrophic massive exposures, typically at 50 Sv (or >20–50 Sv), leading to severe cerebral edema, increased intracranial pressure, and rapid circulatory collapse.',
    keyFact: 'Neurovascular syndrome occurs at massive radiation doses of ~50 Sv.',
    tags: ['Neurovascular Syndrome', 'Cerebrovascular Collapse']
  },
  {
    id: 'mcq-56',
    sectionNumber: 56,
    type: 'mcq',
    category: 'Radiation',
    question: 'Neurovascular syndrome leads to death within:',
    options: [
      { label: 'A', text: '48 hours' },
      { label: 'B', text: '1 year' },
      { label: 'C', text: '1 month' },
      { label: 'D', text: '10 years' }
    ],
    correctAnswer: 'A',
    explanation: 'At doses ~50 Sv, neurovascular damage causes irreversible neurological destruction, seizures, coma, and cardiovascular collapse, resulting in death typically within 24–48 hours.',
    keyFact: 'Neurovascular syndrome is rapidly and universally fatal within 48 hours.',
    tags: ['Fatality Timeline', 'Neurovascular Syndrome']
  },

  // ==========================================
  // Section: Vectors & Parasites (Q57 - Q78)
  // ==========================================
  {
    id: 'mcq-57',
    sectionNumber: 57,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Scientific name of the house fly:',
    options: [
      { label: 'A', text: 'Musca domestica' },
      { label: 'B', text: 'Culex pipiens' },
      { label: 'C', text: 'Aedes aegypti' },
      { label: 'D', text: 'Pediculus humanus' }
    ],
    correctAnswer: 'A',
    explanation: 'Musca domestica is the binomial scientific nomenclature for the common cosmopolitan house fly.',
    keyFact: 'Musca domestica is the scientific name of the house fly.',
    tags: ['Musca domestica', 'Taxonomy', 'Entomology']
  },
  {
    id: 'mcq-58',
    sectionNumber: 58,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'House fly order:',
    options: [
      { label: 'A', text: 'Diptera' },
      { label: 'B', text: 'Hemiptera' },
      { label: 'C', text: 'Anoplura' },
      { label: 'D', text: 'Acari' }
    ],
    correctAnswer: 'A',
    explanation: 'True flies possess two functional wings (with hindwings modified into halteres for balance) and belong to the insect order Diptera (di = two, ptera = wings).',
    keyFact: 'House flies belong to the insect order Diptera (two-winged insects).',
    tags: ['Diptera', 'Taxonomy']
  },
  {
    id: 'mcq-59',
    sectionNumber: 59,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'House fly family:',
    options: [
      { label: 'A', text: 'Culicidae' },
      { label: 'B', text: 'Muscidae' },
      { label: 'C', text: 'Ixodidae' },
      { label: 'D', text: 'Argasidae' }
    ],
    correctAnswer: 'B',
    explanation: 'Musca domestica belongs to the family Muscidae. Culicidae are mosquitoes; Ixodidae and Argasidae are ticks.',
    keyFact: 'House fly family: Muscidae.',
    tags: ['Muscidae', 'Taxonomy']
  },
  {
    id: 'mcq-60',
    sectionNumber: 60,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'House fly class:',
    options: [
      { label: 'A', text: 'Arachnida' },
      { label: 'B', text: 'Insecta' },
      { label: 'C', text: 'Mammalia' },
      { label: 'D', text: 'Reptilia' }
    ],
    correctAnswer: 'B',
    explanation: 'The house fly belongs to the class Insecta (six jointed legs, three body regions: head, thorax, and abdomen).',
    keyFact: 'House fly taxonomic class: Insecta.',
    tags: ['Insecta', 'Taxonomy']
  },
  {
    id: 'mcq-61',
    sectionNumber: 61,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'The house fly mainly acts as:',
    options: [
      { label: 'A', text: 'Mechanical vector' },
      { label: 'B', text: 'Biological reservoir of bacteria' },
      { label: 'C', text: 'Secondary host' },
      { label: 'D', text: 'None' }
    ],
    correctAnswer: 'A',
    explanation: 'Musca domestica acts as a mechanical vector, physically carrying pathogens on its hairy legs, body bristles, proboscis, and via vomit drops/feces without pathogens undergoing developmental multiplication within it.',
    keyFact: 'House flies act as mechanical vectors transferring microbes via feet, hairs, and vomit.',
    tags: ['Mechanical Vector', 'Vector Biology']
  },
  {
    id: 'mcq-62',
    sectionNumber: 62,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Hard and soft ticks belong to superfamily:',
    options: [
      { label: 'A', text: 'Ixodoidea' },
      { label: 'B', text: 'Muscoidea' },
      { label: 'C', text: 'Culicoidea' },
      { label: 'D', text: 'Phlebotominae' }
    ],
    correctAnswer: 'A',
    explanation: 'All ticks (both hard and soft) are classified under the superfamily Ixodoidea within the subclass Acari (Arachnida).',
    keyFact: 'All ticks belong to the superfamily Ixodoidea.',
    tags: ['Ixodoidea', 'Ticks', 'Acarology']
  },
  {
    id: 'mcq-63',
    sectionNumber: 63,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Hard ticks family:',
    options: [
      { label: 'A', text: 'Ixodidae' },
      { label: 'B', text: 'Argasidae' },
      { label: 'C', text: 'Muscidae' },
      { label: 'D', text: 'Culicidae' }
    ],
    correctAnswer: 'A',
    explanation: 'Hard ticks belong to the family Ixodidae, distinguished by a rigid dorsal chitinous shield called the scutum.',
    keyFact: 'Hard ticks family = Ixodidae (possess a hard dorsal scutum).',
    tags: ['Ixodidae', 'Hard Ticks']
  },
  {
    id: 'mcq-64',
    sectionNumber: 64,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Soft ticks family:',
    options: [
      { label: 'A', text: 'Ixodidae' },
      { label: 'B', text: 'Argasidae' },
      { label: 'C', text: 'Muscidae' },
      { label: 'D', text: 'Pediculidae' }
    ],
    correctAnswer: 'B',
    explanation: 'Soft ticks belong to the family Argasidae, characterized by a flexible leathery cuticle and the lack of a dorsal scutum.',
    keyFact: 'Soft ticks family = Argasidae (leathery cuticle, no scutum).',
    tags: ['Argasidae', 'Soft Ticks']
  },
  {
    id: 'mcq-65',
    sectionNumber: 65,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'In soft ticks, the mouthparts:',
    options: [
      { label: 'A', text: 'Cannot be seen from above' },
      { label: 'B', text: 'Project forward prominently' },
      { label: 'C', text: 'Are absent' },
      { label: 'D', text: 'Are covered by scutum' }
    ],
    correctAnswer: 'A',
    explanation: 'In adult soft ticks (Argasidae), the capitulum (mouthparts) is located ventrally beneath the anterior overhanging body wall and is not visible from a dorsal view.',
    keyFact: 'Soft tick mouthparts are positioned ventrally and cannot be seen from above.',
    tags: ['Argasidae Morphology', 'Capitulum']
  },
  {
    id: 'mcq-66',
    sectionNumber: 66,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Bulls-eye rash is called:',
    options: [
      { label: 'A', text: 'Erythema migrans' },
      { label: 'B', text: 'Photophobia' },
      { label: 'C', text: 'Nystagmus' },
      { label: 'D', text: 'Nits' }
    ],
    correctAnswer: 'A',
    explanation: 'Erythema migrans is the pathognomonic expanding annular "bulls-eye" erythematous skin lesion seen in early stage Lyme disease following an Ixodes tick bite.',
    keyFact: 'Erythema migrans is the expanding bulls-eye rash characteristic of Lyme disease.',
    tags: ['Erythema Migrans', 'Lyme Disease', 'Dermatology']
  },
  {
    id: 'mcq-67',
    sectionNumber: 67,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Ticks spread:',
    options: [
      { label: 'A', text: 'Lyme disease and Rocky Mountain spotted fever' },
      { label: 'B', text: 'Cholera' },
      { label: 'C', text: 'Malaria' },
      { label: 'D', text: 'Polio' }
    ],
    correctAnswer: 'A',
    explanation: 'Ticks transmit bacterial spirochetes (Borrelia burgdorferi -> Lyme disease) and rickettsiae (Rickettsia rickettsii -> Rocky Mountain spotted fever).',
    keyFact: 'Ticks transmit Lyme disease (Borrelia) and Rocky Mountain spotted fever (Rickettsia).',
    tags: ['Tick-borne Diseases', 'Zoonoses']
  },
  {
    id: 'mcq-68',
    sectionNumber: 68,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Sand flies belong to subfamily:',
    options: [
      { label: 'A', text: 'Phlebotominae' },
      { label: 'B', text: 'Culicinae' },
      { label: 'C', text: 'Anophelinae' },
      { label: 'D', text: 'Ixodinae' }
    ],
    correctAnswer: 'A',
    explanation: 'Blood-sucking sand flies belong to the dipteran subfamily Phlebotominae (within the family Psychodidae).',
    keyFact: 'Sand flies belong to the dipteran subfamily Phlebotominae.',
    tags: ['Phlebotominae', 'Sand Flies']
  },
  {
    id: 'mcq-69',
    sectionNumber: 69,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Sand flies are primary vectors of:',
    options: [
      { label: 'A', text: 'Leishmaniasis' },
      { label: 'B', text: 'Dengue' },
      { label: 'C', text: 'Cholera' },
      { label: 'D', text: 'Typhoid' }
    ],
    correctAnswer: 'A',
    explanation: 'Phlebotomine sand flies (Phlebotomus in the Old World and Lutzomyia in the New World) transmit Leishmania protozoa causing cutaneous, mucocutaneous, and visceral leishmaniasis.',
    keyFact: 'Sand flies are the biological vectors of Leishmaniasis.',
    tags: ['Leishmaniasis', 'Sand Fly Vectors']
  },
  {
    id: 'mcq-70',
    sectionNumber: 70,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: "Carrion's disease is caused by:",
    options: [
      { label: 'A', text: 'Bartonella bacilliformis' },
      { label: 'B', text: 'Vibrio cholerae' },
      { label: 'C', text: 'Listeria' },
      { label: 'D', text: 'Giardia' }
    ],
    correctAnswer: 'A',
    explanation: "Carrion's disease (Oroya fever and Verruga Peruana) is caused by the bacterium Bartonella bacilliformis, which invades human erythrocytes and vascular endothelial cells.",
    keyFact: "Carrion's disease is caused by the bacterium Bartonella bacilliformis.",
    tags: ["Bartonella bacilliformis", "Carrion's Disease"]
  },
  {
    id: 'mcq-71',
    sectionNumber: 71,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: "Carrion's disease is transmitted by genus:",
    options: [
      { label: 'A', text: 'Lutzomyia' },
      { label: 'B', text: 'Aedes' },
      { label: 'C', text: 'Culex' },
      { label: 'D', text: 'Musca' }
    ],
    correctAnswer: 'A',
    explanation: "In Andean river valleys of South America, Bartonella bacilliformis is vector-transmitted by sand flies of the genus Lutzomyia (notably Lutzomyia verrucarum).",
    keyFact: "Carrion's disease is vector-transmitted by the sand fly genus Lutzomyia.",
    tags: ['Lutzomyia', 'Vector Transmission']
  },
  {
    id: 'mcq-72',
    sectionNumber: 72,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Body lice live in:',
    options: [
      { label: 'A', text: 'Seams and folds of clothing' },
      { label: 'B', text: 'Water' },
      { label: 'C', text: 'Soil' },
      { label: 'D', text: 'Food' }
    ],
    correctAnswer: 'A',
    explanation: 'Unlike head or pubic lice which adhere directly to human hair shafts, body lice (Pediculus humanus humanus) reside and oviposit in the seams and folds of clothing, moving onto skin only to feed on blood.',
    keyFact: 'Body lice inhabit the seams and folds of clothing, not the skin directly.',
    tags: ['Pediculus humanus', 'Body Lice']
  },
  {
    id: 'mcq-73',
    sectionNumber: 73,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Lice eggs are called:',
    options: [
      { label: 'A', text: 'Nits' },
      { label: 'B', text: 'Larvae' },
      { label: 'C', text: 'Tumblers' },
      { label: 'D', text: 'Wrigglers' }
    ],
    correctAnswer: 'A',
    explanation: 'The oval-shaped eggs of lice glued firmly to fibers or hairs with a chitinous secretion are known as nits.',
    keyFact: 'Lice eggs cemented to hair or clothing fibers are termed nits.',
    tags: ['Nits', 'Louse Life Cycle']
  },
  {
    id: 'mcq-74',
    sectionNumber: 74,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Body lice are treated with lotion/shampoo containing:',
    options: [
      { label: 'A', text: '1% permethrin' },
      { label: 'B', text: '50% alcohol' },
      { label: 'C', text: 'Chlorine' },
      { label: 'D', text: 'Aluminum sulphate' }
    ],
    correctAnswer: 'A',
    explanation: 'First-line pediculicide therapy involves 1% permethrin formulation (a synthetic pyrethroid targeting insect nerve cell membranes), combined with laundering clothes in hot water (>54°C).',
    keyFact: '1% permethrin lotion is the standard first-line pediculicide treatment.',
    tags: ['Permethrin', 'Pediculicide', 'Treatment']
  },
  {
    id: 'mcq-75',
    sectionNumber: 75,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Anopheles transmits:',
    options: [
      { label: 'A', text: 'Malaria' },
      { label: 'B', text: 'Cholera' },
      { label: 'C', text: 'Typhoid' },
      { label: 'D', text: 'Lyme disease' }
    ],
    correctAnswer: 'A',
    explanation: 'Female Anopheles mosquitoes are the definitive hosts and vectors of Plasmodium spp. (P. falciparum, P. vivax, P. malariae, P. ovale), transmitting human malaria.',
    keyFact: 'Female Anopheles mosquitoes transmit malaria (Plasmodium parasites).',
    tags: ['Anopheles', 'Malaria', 'Mosquito Vectors']
  },
  {
    id: 'mcq-76',
    sectionNumber: 76,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Culex causes filariasis and carries:',
    options: [
      { label: 'A', text: 'Viral encephalitis' },
      { label: 'B', text: 'Yellow fever only' },
      { label: 'C', text: 'Malaria' },
      { label: 'D', text: 'Dengue' }
    ],
    correctAnswer: 'A',
    explanation: 'Culex mosquitoes (e.g. Culex pipiens, Culex quinquefasciatus) transmit the nematode Wuchereria bancrofti (lymphatic filariasis) as well as arboviral encephalitides (West Nile virus, Japanese encephalitis, St. Louis encephalitis).',
    keyFact: 'Culex transmits lymphatic filariasis and neurotropic viral encephalitides.',
    tags: ['Culex', 'Filariasis', 'Viral Encephalitis']
  },
  {
    id: 'mcq-77',
    sectionNumber: 77,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Aedes carries pathogens of:',
    options: [
      { label: 'A', text: 'Yellow fever, dengue, Zika' },
      { label: 'B', text: 'Malaria only' },
      { label: 'C', text: 'Cholera' },
      { label: 'D', text: 'Lyme disease' }
    ],
    correctAnswer: 'A',
    explanation: 'Aedes mosquitoes (notably Aedes aegypti and Aedes albopictus) are primary vectors for flaviviruses and alphaviruses causing Yellow fever, Dengue fever, Chikungunya, and Zika.',
    keyFact: 'Aedes carries viral pathogens causing Yellow fever, Dengue, and Zika.',
    tags: ['Aedes', 'Dengue', 'Zika', 'Yellow Fever']
  },
  {
    id: 'mcq-78',
    sectionNumber: 78,
    type: 'mcq',
    category: 'Vectors & Parasites',
    question: 'Mosquito larvae are called wrigglers, and pupae are called:',
    options: [
      { label: 'A', text: 'Nits' },
      { label: 'B', text: 'Tumblers' },
      { label: 'C', text: 'Nymphs' },
      { label: 'D', text: 'Cysts' }
    ],
    correctAnswer: 'B',
    explanation: 'In the mosquito holometabolous life cycle: the active feeding aquatic larvae are called wrigglers, and the comma-shaped, active non-feeding pupae are called tumblers.',
    keyFact: 'Mosquito aquatic stages: Larvae = wrigglers; Pupae = tumblers.',
    tags: ['Mosquito Life Cycle', 'Wrigglers', 'Tumblers']
  },

  // ==========================================
  // PART 2: TRUE / FALSE QUESTIONS
  // (Questions 1 - 42)
  // ==========================================
  {
    id: 'tf-1',
    sectionNumber: 1,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Ventilation only means replacing stale air.',
    correctAnswer: 'False',
    explanation: 'False: It also controls the physical and chemical quality of incoming air, including temperature, humidity, purity, and air distribution.',
    keyFact: 'Ventilation entails both replacing vitiated air AND controlling incoming air quality.',
    tags: ['Ventilation', 'Indoor Air Quality']
  },
  {
    id: 'tf-2',
    sectionNumber: 2,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Solid waste can cause skin and gastro-intestinal diseases.',
    correctAnswer: 'True',
    explanation: 'True: Pathogen-rich waste and vector proliferation directly induce dermatomycoses, scabies, bacterial diarrhea, and enteritis.',
    keyFact: 'Solid waste harbors biological vectors causing skin and gastrointestinal infections.',
    tags: ['Solid Waste', 'Infectious Disease']
  },
  {
    id: 'tf-3',
    sectionNumber: 3,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Burning waste creates toxic ash.',
    correctAnswer: 'True',
    explanation: 'True: Combustion residue (bottom and fly ash) contains concentrated heavy metals (lead, cadmium, mercury) and toxic organochlorines like dioxins.',
    keyFact: 'Waste burning generates hazardous toxic ash containing concentrated environmental toxins.',
    tags: ['Combustion Hazards', 'Toxic Ash']
  },
  {
    id: 'tf-4',
    sectionNumber: 4,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Water has two hydrogen atoms and one oxygen atom.',
    correctAnswer: 'True',
    explanation: 'True: The molecular formula of water is H2O, consisting of two hydrogen atoms covalently bonded to one oxygen atom.',
    keyFact: 'Water (H2O) comprises 2 hydrogen atoms and 1 oxygen atom.',
    tags: ['Water Chemistry']
  },
  {
    id: 'tf-5',
    sectionNumber: 5,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Drinking water turbidity should not exceed 5 NTU.',
    correctAnswer: 'True',
    explanation: 'True: 5 NTU is the maximum acceptable limit for drinking water to ensure consumer aesthetic acceptance and disinfection.',
    keyFact: 'Maximum drinking water turbidity threshold is 5 NTU.',
    tags: ['Turbidity', 'Water Standards']
  },
  {
    id: 'tf-6',
    sectionNumber: 6,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'A pH above 9 improves chlorination.',
    correctAnswer: 'False',
    explanation: 'False: A pH above 9 severely constrains chlorination because hypochlorous acid (HOCl) dissociates into hypochlorite ion (OCl-), dropping disinfection efficacy.',
    keyFact: 'High pH (>9) impairs chlorination by shifting active HOCl to inactive OCl-.',
    tags: ['Chlorination', 'pH Chemistry']
  },
  {
    id: 'tf-7',
    sectionNumber: 7,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Zero coliform means the water is fit.',
    correctAnswer: 'True',
    explanation: 'True: A zero coliform count (0 CFU per 100 mL) meets microbiological safety criteria, indicating water is fit for consumption.',
    keyFact: 'Zero coliform per 100 mL verifies that drinking water is bacteriologically fit.',
    tags: ['Coliform', 'Potability']
  },
  {
    id: 'tf-8',
    sectionNumber: 8,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: '10–100 E. coli means contaminated.',
    correctAnswer: 'True',
    explanation: 'True: Detection of 10 to 100 E. coli bacteria per 100 mL confirms gross fecal contamination.',
    keyFact: '10–100 E. coli count establishes that water is contaminated.',
    tags: ['E. coli', 'Microbiology']
  },
  {
    id: 'tf-9',
    sectionNumber: 9,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Minimum water requirement is 15 L/person/day.',
    correctAnswer: 'True',
    explanation: 'True: The Sphere humanitarian standard sets the baseline emergency water requirement at 15 L per person per day.',
    keyFact: 'Sphere standard baseline water quota is 15 L/person/day.',
    tags: ['Sphere Standards', 'Water Quota']
  },
  {
    id: 'tf-10',
    sectionNumber: 10,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'One tap may serve up to 250 people.',
    correctAnswer: 'True',
    explanation: 'True: 250 persons per tap is the designated maximum ratio to prevent excessive queuing times.',
    keyFact: 'The maximum population served by a single communal water tap is 250 people.',
    tags: ['Tap Allocation', 'Sphere Guidelines']
  },
  {
    id: 'tf-11',
    sectionNumber: 11,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'One hand pump may serve up to 250 people.',
    correctAnswer: 'False',
    explanation: 'False: One hand pump may serve up to 500 people according to standard Sphere public health benchmarks.',
    keyFact: 'A hand pump serves up to 500 people (not 250).',
    tags: ['Hand Pump Standards', 'Water Supply']
  },
  {
    id: 'tf-12',
    sectionNumber: 12,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: '50 people per bathing facility is the maximum.',
    correctAnswer: 'True',
    explanation: 'True: Humanitarian standards require no more than 50 people per bathing/shower facility, segregated by gender.',
    keyFact: 'Maximum ratio for communal bathing facilities is 50 individuals per stall.',
    tags: ['Bathing Facilities', 'Sanitation']
  },
  {
    id: 'tf-13',
    sectionNumber: 13,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Aluminum sulphate is used in water treatment.',
    correctAnswer: 'True',
    explanation: 'True: Aluminum sulphate (alum) is widely used as a primary chemical coagulant to aggregate suspended particles.',
    keyFact: 'Aluminum sulphate (alum) is the primary coagulant used in conventional water treatment.',
    tags: ['Coagulation', 'Water Purification']
  },
  {
    id: 'tf-14',
    sectionNumber: 14,
    type: 'true_false',
    category: 'Ventilation, Waste & Water',
    question: 'Cholera and typhoid are related to drinking-water contamination.',
    correctAnswer: 'True',
    explanation: 'True: Vibrio cholerae and Salmonella Typhi are classic waterborne fecal-oral pathogens transmitted via sewage-contaminated drinking supplies.',
    keyFact: 'Cholera and typhoid are life-threatening waterborne infections spread through contaminated water.',
    tags: ['Waterborne Disease', 'Cholera', 'Typhoid']
  },
  {
    id: 'tf-15',
    sectionNumber: 15,
    type: 'true_false',
    category: 'Food Contamination',
    question: 'Foodborne illnesses can be caused by chemicals.',
    correctAnswer: 'True',
    explanation: 'True: Ingestion of heavy metals, pesticide residues, fungal mycotoxins, and marine biotoxins produces chemical foodborne illness.',
    keyFact: 'Foodborne diseases arise from chemical toxins as well as microbiological pathogens.',
    tags: ['Chemical Contaminants', 'Food Toxicology']
  },
  {
    id: 'tf-16',
    sectionNumber: 16,
    type: 'true_false',
    category: 'Food Contamination',
    question: 'Listeria can grow at refrigeration temperatures.',
    correctAnswer: 'True',
    explanation: 'True: Listeria monocytogenes is psychrotolerant, capable of continuous cellular replication between 1°C and 4°C.',
    keyFact: 'Listeria multiplies in refrigerated environments (psychrotolerant pathogen).',
    tags: ['Listeria', 'Psychrotolerant']
  },
  {
    id: 'tf-17',
    sectionNumber: 17,
    type: 'true_false',
    category: 'Food Contamination',
    question: 'Norovirus is a bacterium.',
    correctAnswer: 'False',
    explanation: 'False: Norovirus is a non-enveloped, positive-sense single-stranded RNA virus of the Caliciviridae family, not a bacterium.',
    keyFact: 'Norovirus is a virus (Calicivirus), not a bacterium.',
    tags: ['Norovirus', 'Virology']
  },
  {
    id: 'tf-18',
    sectionNumber: 18,
    type: 'true_false',
    category: 'Food Contamination',
    question: 'Hepatitis A can spread through contaminated raw produce.',
    correctAnswer: 'True',
    explanation: 'True: Raw berries, leafy greens, and vegetables washed with fecally polluted water or handled by infected food handlers readily transmit Hepatitis A.',
    keyFact: 'Hepatitis A is frequently transmitted by contaminated raw fruits and vegetables.',
    tags: ['Hepatitis A', 'Produce Safety']
  },
  {
    id: 'tf-19',
    sectionNumber: 19,
    type: 'true_false',
    category: 'Food Contamination',
    question: 'Aflatoxins are produced on grain.',
    correctAnswer: 'True',
    explanation: 'True: Aspergillus flavus and Aspergillus parasiticus molds produce aflatoxins on improperly stored grains, maize, sorghum, and peanuts.',
    keyFact: 'Aflatoxins are mycotoxins produced by Aspergillus molds on grain and peanuts.',
    tags: ['Aflatoxins', 'Grain Storage', 'Mycotoxins']
  },
  {
    id: 'tf-20',
    sectionNumber: 20,
    type: 'true_false',
    category: 'Noise & Lighting',
    question: 'Noise pollution is unwanted or excessive sound.',
    correctAnswer: 'True',
    explanation: 'True: Noise is formally categorized as unwanted acoustic disturbances causing detrimental subjective distress and physiological stress.',
    keyFact: 'Noise pollution is defined as unwanted or excessive sound hazardous to health.',
    tags: ['Noise Definition', 'Environmental Health']
  },
  {
    id: 'tf-21',
    sectionNumber: 21,
    type: 'true_false',
    category: 'Noise & Lighting',
    question: 'Permissible noise for 4 hours is 90 dB.',
    correctAnswer: 'True',
    explanation: 'True: Under the occupational 5 dB exchange rate, while 85 dB is permitted for 8 hours, 90 dB is permitted for a maximum of 4 hours.',
    keyFact: 'Permissible occupational noise exposure at 90 dB is capped at 4 hours.',
    tags: ['Decibel Thresholds', 'Occupational Safety']
  },
  {
    id: 'tf-22',
    sectionNumber: 22,
    type: 'true_false',
    category: 'Noise & Lighting',
    question: 'Permissible exposure time decreases as noise level increases.',
    correctAnswer: 'True',
    explanation: 'True: Due to the logarithmic nature of decibel sound energy, allowed exposure duration halves systematically with higher sound pressure.',
    keyFact: 'Allowable exposure duration decreases exponentially as noise decibels increase.',
    tags: ['Noise Kinetics', 'Hearing Conservation']
  },
  {
    id: 'tf-23',
    sectionNumber: 23,
    type: 'true_false',
    category: 'Noise & Lighting',
    question: 'Hypertension is a harmful effect of noise.',
    correctAnswer: 'True',
    explanation: 'True: Chronic noise activates the sympathetic nervous system and hypothalamic-pituitary-adrenal axis, inducing sustained systemic arterial hypertension.',
    keyFact: 'Chronic noise exposure triggers neuroendocrine stress and systemic hypertension.',
    tags: ['Hypertension', 'Cardiovascular Risk']
  },
  {
    id: 'tf-24',
    sectionNumber: 24,
    type: 'true_false',
    category: 'Noise & Lighting',
    question: 'Strong lighting may cause cataract.',
    correctAnswer: 'True',
    explanation: 'True: Intense optical radiation containing UV and infrared rays causes thermal damage and photochemically oxidizes lens crystallin proteins, inducing cataracts.',
    keyFact: 'Intense optical radiation and high-intensity glare can cause cataract formation.',
    tags: ['Cataract', 'Ocular Radiation']
  },
  {
    id: 'tf-25',
    sectionNumber: 25,
    type: 'true_false',
    category: 'Radiation',
    question: 'Gamma rays are electromagnetic waves.',
    correctAnswer: 'True',
    explanation: 'True: Gamma rays are high-frequency, high-energy electromagnetic waves without mass or electrical charge.',
    keyFact: 'Gamma rays are high-energy photons belonging to the electromagnetic spectrum.',
    tags: ['Gamma Rays', 'Electromagnetic Spectrum']
  },
  {
    id: 'tf-26',
    sectionNumber: 26,
    type: 'true_false',
    category: 'Radiation',
    question: 'Acute radiation syndrome occurs at 0.01 Sv.',
    correctAnswer: 'False',
    explanation: 'False: ARS is a deterministic acute effect requiring high whole-body doses above 1 Sv (100 times higher than 0.01 Sv).',
    keyFact: 'Acute Radiation Syndrome requires doses > 1 Sv; 0.01 Sv does not cause ARS.',
    tags: ['Radiation Thresholds', 'Sieverts']
  },
  {
    id: 'tf-27',
    sectionNumber: 27,
    type: 'true_false',
    category: 'Radiation',
    question: 'The latent period is when symptoms subside but cellular damage continues.',
    correctAnswer: 'True',
    explanation: 'True: During the latent period, the patient appears clinically improved and symptom-free, but cellular bone marrow and mucosal destruction continues unabated.',
    keyFact: 'In the latent period of ARS, outward symptoms resolve while internal cellular damage progresses.',
    tags: ['Latent Period', 'ARS Stages']
  },
  {
    id: 'tf-28',
    sectionNumber: 28,
    type: 'true_false',
    category: 'Radiation',
    question: 'Hematopoietic syndrome damages bone marrow.',
    correctAnswer: 'True',
    explanation: 'True: Doses of 1–6 Sv cause aplasia of hematopoietic precursor cells in the bone marrow, causing severe pancytopenia.',
    keyFact: 'Hematopoietic syndrome specifically causes bone marrow stem cell depletion.',
    tags: ['Bone Marrow', 'Hematopoietic Syndrome']
  },
  {
    id: 'tf-29',
    sectionNumber: 29,
    type: 'true_false',
    category: 'Radiation',
    question: 'Neurovascular syndrome has an effective treatment.',
    correctAnswer: 'False',
    explanation: 'False: Doses ~50 Sv produce catastrophic microvascular leakage, cerebral edema, and circulatory failure; there is no effective curative treatment, and care is purely palliative.',
    keyFact: 'Neurovascular radiation syndrome has no curative treatment and is invariably fatal.',
    tags: ['Neurovascular Syndrome', 'Prognosis']
  },
  {
    id: 'tf-30',
    sectionNumber: 30,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Musca domestica belongs to order Diptera.',
    correctAnswer: 'True',
    explanation: 'True: The house fly possesses two true wings and halteres, classifying it under order Diptera.',
    keyFact: 'Musca domestica is a true dipteran insect (Order: Diptera).',
    tags: ['Musca domestica', 'Diptera']
  },
  {
    id: 'tf-31',
    sectionNumber: 31,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'House flies are a secondary host of medically important bacteria.',
    correctAnswer: 'False',
    explanation: 'False: House flies are mechanical carriers (vectors), not biological secondary hosts. Bacteria do not undergo biological development inside them.',
    keyFact: 'House flies are mechanical carriers, not biological secondary hosts for bacteria.',
    tags: ['Mechanical Vectors', 'Musca domestica']
  },
  {
    id: 'tf-32',
    sectionNumber: 32,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Ixodidae are hard ticks.',
    correctAnswer: 'True',
    explanation: 'True: Family Ixodidae comprises the hard ticks, characterized by the hard chitinous dorsal scutum.',
    keyFact: 'Ixodidae = hard ticks (possessing a prominent dorsal scutum).',
    tags: ['Ixodidae', 'Hard Ticks']
  },
  {
    id: 'tf-33',
    sectionNumber: 33,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Argasidae are hard ticks.',
    correctAnswer: 'False',
    explanation: 'False: Argasidae are soft ticks (they lack a dorsal scutum and possess a flexible leathery body wall).',
    keyFact: 'Argasidae are soft ticks, not hard ticks.',
    tags: ['Argasidae', 'Soft Ticks']
  },
  {
    id: 'tf-34',
    sectionNumber: 34,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Erythema migrans is a bulls-eye rash in Lyme disease.',
    correctAnswer: 'True',
    explanation: 'True: Erythema migrans is the classic centrifugal expanding circular rash with central clearing seen in Borrelia burgdorferi infection.',
    keyFact: 'Erythema migrans is the pathognomonic bulls-eye rash of Lyme disease.',
    tags: ['Erythema Migrans', 'Lyme Disease']
  },
  {
    id: 'tf-35',
    sectionNumber: 35,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Both male and female sand flies suck blood.',
    correctAnswer: 'False',
    explanation: 'False: Only female sand flies take blood meals (anautogenous), required to obtain proteins for egg development. Males feed exclusively on plant saps and nectar.',
    keyFact: 'Only female sand flies suck blood; males feed only on plant nectar.',
    tags: ['Sand Flies', 'Hematophagy']
  },
  {
    id: 'tf-36',
    sectionNumber: 36,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Sand flies are vectors of leishmaniasis.',
    correctAnswer: 'True',
    explanation: 'True: Phlebotomine sand flies transmit flagellated Leishmania promastigotes during their blood meal.',
    keyFact: 'Sand flies are the biological vectors of Leishmaniasis.',
    tags: ['Leishmaniasis', 'Phlebotomus']
  },
  {
    id: 'tf-37',
    sectionNumber: 37,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Body lice lay eggs in the seams of clothing.',
    correctAnswer: 'True',
    explanation: 'True: Pediculus humanus humanus cements its eggs (nits) into the fabric weave and seams of human garments.',
    keyFact: 'Body lice specifically deposit their nits along clothing seams.',
    tags: ['Body Lice', 'Nits']
  },
  {
    id: 'tf-38',
    sectionNumber: 38,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Permethrin products are used to treat lice.',
    correctAnswer: 'True',
    explanation: 'True: 1% permethrin pediculicide cream rinse is an approved standard neurotoxic treatment that paralyzes and kills lice.',
    keyFact: 'Permethrin formulations are standard pharmacological treatments for lice infestation.',
    tags: ['Permethrin', 'Pediculosis Treatment']
  },
  {
    id: 'tf-39',
    sectionNumber: 39,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Culicidae is the mosquito family.',
    correctAnswer: 'True',
    explanation: 'True: All mosquitoes are classified under the dipteran family Culicidae.',
    keyFact: 'Mosquito family: Culicidae.',
    tags: ['Culicidae', 'Mosquito Taxonomy']
  },
  {
    id: 'tf-40',
    sectionNumber: 40,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Only female mosquitoes need blood meals to mature their eggs.',
    correctAnswer: 'True',
    explanation: 'True: Male mosquitoes lack piercing stylets and feed on nectar; only females need protein-rich blood meals for oogenesis.',
    keyFact: 'Only female mosquitoes bite and ingest blood to mature their eggs.',
    tags: ['Mosquito Biology', 'Anautogeny']
  },
  {
    id: 'tf-41',
    sectionNumber: 41,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Aedes transmits yellow fever, dengue and Zika.',
    correctAnswer: 'True',
    explanation: 'True: Aedes aegypti is the recognized vector transmitting Yellow fever virus, all four serotypes of Dengue virus, and Zika virus.',
    keyFact: 'Aedes aegypti is the vector for Yellow fever, Dengue, and Zika viruses.',
    tags: ['Aedes', 'Arbovirus', 'Vector']
  },
  {
    id: 'tf-42',
    sectionNumber: 42,
    type: 'true_false',
    category: 'Vectors & Parasites',
    question: 'Mosquito eggs are laid on the surface of water.',
    correctAnswer: 'True',
    explanation: 'True: Anopheles and Culex deposit eggs directly on the water surface (Anopheles singly with floats, Culex in floating rafts), and Aedes on damp substrates near the water line.',
    keyFact: 'Mosquito eggs are laid directly on or adjacent to water surfaces.',
    tags: ['Mosquito Oviposition', 'Aquatic Stages']
  }
];

export const CATEGORIES: { name: QuestionItem['category']; description: string; count: number }[] = [
  {
    name: 'Ventilation, Waste & Water',
    description: 'Indoor air standards, waste management, water chemistry, potability, turbidity & Sphere humanitarian ratios',
    count: 26 + 14 // 40
  },
  {
    name: 'Food Contamination',
    description: 'Bacterial, viral and parasitic food pathogens (Salmonella, Listeria, Campylobacter, Norovirus, Taenia) & mycotoxins',
    count: 13 + 5 // 18
  },
  {
    name: 'Noise & Lighting',
    description: 'Decibel limits, exposure duration schedules, hypertension risks, lighting ergonomics & cataract hazards',
    count: 8 + 5 // 13
  },
  {
    name: 'Radiation',
    description: 'Ionizing radiation, Acute Radiation Syndrome (ARS) phases, dosage thresholds (1–50 Sv) & clinical syndromes',
    count: 9 + 5 // 14
  },
  {
    name: 'Vectors & Parasites',
    description: 'Diptera taxonomy, house fly mechanics, hard vs soft ticks (Ixodidae vs Argasidae), sand flies, lice & mosquito biology',
    count: 22 + 13 // 35
  }
];
