import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const topicsPath = join(__dirname, '../public/assets/data/topics.json');
const quizPath   = join(__dirname, '../public/assets/data/quiz.json');

const topics = JSON.parse(readFileSync(topicsPath, 'utf8'));
const quiz   = JSON.parse(readFileSync(quizPath,   'utf8'));

// ── 4 new Day 2 topics from Chapter 16 ────────────────────────────────────

const newTopics = [
  {
    id: 'types-of-microorganisms',
    title: 'Types of Microorganisms',
    icon: 'biotech',
    color: '#1565C0',
    summary: 'The five types of microbes, what they need to live and grow, normal flora, and key terms from Chapter 16.',
    day: 2,
    sections: [
      {
        heading: 'Key Terms',
        content: 'Antibiotic: A drug that kills certain microbes that cause infection. Antiseptic: Processes, procedures, and chemical treatments that kill microbes or prevent them from causing an infection. Asepsis: Absence of disease-producing microbes. Carrier: A human or animal that is a reservoir for microbes but does not develop the infection. Contamination: The process of becoming unclean. Cross-contamination: Passing microbes from one person to another by contaminated hands, equipment, or supplies. Disinfectant: A liquid chemical that can kill many or all pathogens, except spores. Healthcare-associated infection (HAI): An infection that develops in a person cared for in any setting where health care is given. Immunity: Protection against a certain disease. Infection control: Practices and procedures that prevent the spread of infection. Medical asepsis: Practices used to reduce the number of microbes and prevent them from spreading; also called clean technique. Microorganism: A small living thing seen only with a microscope. Normal flora: Microbes that live and grow in a certain area. Pathogen: A microbe that is harmful and can cause an infection. Spore: A bacterium protected by a hard shell. Sterilization: The process of destroying all microbes, including spores. Surgical asepsis: The practices used to remove all microbes; also called sterile technique. Vector: A carrier (animal, insect) that transmits disease.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1040.JPEG'
      },
      {
        heading: 'The Five Types of Microbes',
        content: 'Bacteria: One-celled organisms that multiply rapidly. They can cause infection or act as carriers. Fungi: Plant-like organisms that live on other plants or animals. Mushrooms, yeasts, and mold are common fungi. Fungi can infect the mouth, vagina, skin, feet, and other body areas. Protozoa: One-celled animals. They can infect the blood, bowel, urinary tract, and other body areas. Rickettsiae: Found in fleas, lice, ticks, and other insects. They are spread to humans by insect bites — Rocky Mountain spotted fever is an example, causing fever, chills, headache, and rash. Viruses: Grow in living cells. They cause many diseases including the common cold, herpes, AIDS, and hepatitis.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1041.JPEG'
      },
      {
        heading: 'What Microbes Need to Live & Grow',
        content: 'Microbes need a host — the place where a microbe lives and grows. Fungi, protozoa, rickettsiae, and viruses are examples of organisms that require a host. Microbes need water and nourishment. Most can live and grow in the GI, urinary, and respiratory tracts. Most grow best at body temperature. Some microbes are destroyed by the immune system.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1041.JPEG'
      },
      {
        heading: 'Normal Flora',
        content: 'Certain microbes live normally in the respiratory tract, intestines, and on the skin. These are called normal flora. When a non-pathogen is transferred from its normal environment, it can become a pathogen. For example, Escherichia coli (E. coli) is normally found in the colon. If it enters the urinary system, it can cause a urinary tract infection.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1041.JPEG'
      },
      {
        heading: 'Multidrug-Resistant Organisms (MDROs)',
        content: 'Multidrug-resistant organisms (MDROs) are microbes that can resist the effects of antibiotics. They are caused by prescribing antibiotics when not needed, or by patients not taking antibiotics for the full course prescribed. Common MDROs include:\nMRSA (Methicillin-resistant Staphylococcus aureus): Staphylococcus aureus ("staph") is found in the nose and on the skin. MRSA is resistant to methicillin and can cause serious infections in the bloodstream, lungs, and joints.\nVRE (Vancomycin-resistant Enterococcus): Enterococcus is normally found in the intestines. It can be transmitted via contaminated hands, toilet seats, and care equipment. VRE can cause urinary tract, wound, and other infections.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1041.JPEG'
      }
    ]
  },
  {
    id: 'infection-signs-chain',
    title: 'Signs of Infection & the Chain of Infection',
    icon: 'link',
    color: '#C62828',
    summary: 'Signs and symptoms of infection, special considerations for older persons, and the six links in the chain of infection.',
    day: 2,
    sections: [
      {
        heading: 'Signs & Symptoms of Infection',
        content: 'Local signs (in one area): Redness and swelling in the affected area. Pain or tenderness in a body part. Warmth in a body part. Discharge or drainage from the infected area. Sores on mucous membranes.\nSystemic signs (whole body): Fever. Chills. Increased pulse and respirations. Fatigue and loss of energy. Loss of appetite (anorexia). Nausea and vomiting. Diarrhea. Headache. Muscle aches. Joint pain. Confusion.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1042.JPEG'
      },
      {
        heading: 'Infection in Older Persons',
        content: 'The immune system protects the body from disease and infection — but changes occur in this system with aging, placing older persons at higher risk. An older person may not show the typical signs and symptoms of infection. They may have a slight fever or no fever at all. Redness and swelling may be minimal. The person may not complain of pain. Confusion and delirium may occur instead. An infection can be life-threatening to an older person. Report ALL signs and symptoms, including minor behavior or condition changes, at once. Healing also takes longer in older persons, which can prolong rehabilitation and affect independence and quality of life.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1042.JPEG'
      },
      {
        heading: 'The Chain of Infection',
        content: 'The chain of infection has six links — all must be present for infection to occur:\n(1) Source (pathogen): A pathogen is needed to cause infection.\n(2) Reservoir: Where the pathogen lives, multiplies, and grows. A reservoir is a source of microbes. Carriers can pass pathogens to others without being sick themselves. Common vectors (animals that transmit disease) include dogs (rabies), ticks (Rocky Mountain spotted fever), and mosquitoes (malaria).\n(3) Portal of exit: The pathogen must leave the reservoir. Feces are the major portal of exit for GI, urinary, and reproductive tract pathogens.\n(4) Method of transmission: The pathogen travels to a new host by a vehicle (substance) or vector.\n(5) Portal of entry: The pathogen enters the body. Portals of entry and exit are the same — skin, respiratory tract, GI tract, urinary tract, and reproductive tract.\n(6) Susceptible host: The host cannot resist the pathogen, so the microbe can grow and multiply.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1042.JPEG'
      },
      {
        heading: 'Susceptible Hosts',
        content: 'Susceptible hosts are at higher risk of infection. They include persons who are very young or older, are ill, are malnourished, or do not follow infection prevention practices. The ability to resist infection is affected by age, nutrition, stress, hygiene, and health status. Drugs, disease, and injury are also factors.\nHigh-risk groups include:\nBurn patients: Burns destroy the skin, creating portals of entry. Burns also affect the immune system.\nTransplant patients: Drugs given to prevent organ rejection suppress the immune system, reducing the ability to fight infection.\nChemotherapy patients: Some chemotherapy drugs affect white blood cell production — white blood cells are needed to fight infection.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1043.JPEG'
      }
    ]
  },
  {
    id: 'healthcare-associated-infections',
    title: 'Healthcare-Associated Infections (HAIs)',
    icon: 'local_hospital',
    color: '#6A1B9A',
    summary: 'What HAIs are, how they spread, common examples (C. diff, MRSA, VRE, pneumonia), and which residents are most at risk.',
    day: 2,
    sections: [
      {
        heading: 'What is an HAI?',
        content: 'A healthcare-associated infection (HAI) is an infection that develops in a person cared for in any setting where health care is given — hospitals, nursing centers, clinics, or home care. The infection is related to receiving health care, not to the reason the person sought care. HAIs are common and can be caused by normal flora or microbes from other sources. Poor hand hygiene and improper technique are the most common ways HAIs spread.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1043.JPEG'
      },
      {
        heading: 'Common HAI Examples',
        content: 'Clo3stridium difficile C diff: A bacterial infection that causes severe diarrhea and colitis. Spread by contaminated surfaces and hands. MRSA (Methicillin-resistant Staphylococcus aureus): A drug-resistant staph infection affecting the bloodstream, lungs, and wounds. VRE (Vancomycin-resistant Enterococcus): A drug-resistant gut bacteria that can cause urinary tract, wound, and bloodstream infections. Pneumonia: A lung infection that is a major concern in healthcare settings. Influenza: Highly contagious respiratory infection spread by droplets. Surgical site infections: Infections at the site of a surgical wound. Urinary tract infections (UTIs): Often related to catheter use (catheter-associated UTI, or CAUTI).',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1043.JPEG'
      },
      {
        heading: 'Common Sites & Prevention',
        content: 'The most common sites for HAIs are the urinary system, the bloodstream, surgical wounds, and the respiratory tract (pneumonia). Patients and residents who are weak from disease or injury are at greater risk, as are those with open skin areas. Infants and older persons have a harder time fighting infections.\nHAIs are controlled through: medical asepsis (clean technique); surgical asepsis (sterile technique); Standard Precautions; Transmission-Based Precautions; and the Bloodborne Pathogen Standard.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1043.JPEG'
      }
    ]
  },
  {
    id: 'asepsis-hand-hygiene-practices',
    title: 'Asepsis & Infection Prevention Practices',
    icon: 'clean_hands',
    color: '#00695C',
    summary: 'Medical and surgical asepsis, cross-contamination, common aseptic practices, and hand hygiene as the foundation of infection control.',
    day: 2,
    sections: [
      {
        heading: 'Medical vs. Surgical Asepsis',
        content: 'Asepsis is the absence of all disease-producing microbes (pathogens). Two levels of asepsis are used in health care:\nMedical asepsis (clean technique): Practices used to reduce the number of microbes and prevent them from spreading from one person or place to another. Used for most routine care.\nSurgical asepsis (sterile technique): Practices used to remove all microbes, including non-pathogens and spores. Required during surgery and for procedures that involve open wounds or inserting objects into the body. A sterile field is a work area completely free of all pathogens and non-pathogens (including spores). Sterilization is the process of destroying all microbes.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1044.JPEG'
      },
      {
        heading: 'Cross-Contamination',
        content: 'Contamination occurs when pathogens are present on a clean item or area. Cross-contamination is the transfer of microbes from one person to another through contaminated hands, equipment, or supplies. Example: Microbes on a resident\'s skin are transferred to the CNA\'s hands, and those contaminated hands then transfer microbes to the next resident. Medical asepsis and surgical asepsis both work to prevent cross-contamination.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1044.JPEG'
      },
      {
        heading: 'Common Aseptic Practices',
        content: 'To prevent the spread of microbes:\nWash your hands after elimination, after coughing/sneezing, before and after handling food, and any time they are soiled. Provide all persons with their own linens and personal care items — never share between residents. Cover your nose and mouth when coughing, sneezing, or blowing your nose — sneeze or cough into your upper arm, not your hands. Bathe, shower, and care for your teeth regularly. Wash fruits and raw vegetables before eating. Wash eating and cooking utensils with soap and water after use.\nFor residents with dementia: Assist with hand washing after elimination, after coughing/sneezing, before and after meals, and any time their hands are soiled. Check and clean their hands and fingernails often as they may not be able to communicate when soiling occurs.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1045.JPEG'
      },
      {
        heading: 'Hand Hygiene',
        content: 'Hand hygiene is the single most important way to prevent the spread of microbes and infection. You can spread microbes to other persons or items before and after giving care. Two methods are used:\nHandwashing with soap and water: Required when hands are visibly soiled, after using the restroom, after caring for a resident with C. diff, and before eating.\nAlcohol-based hand sanitizer: Used when hands are not visibly soiled. Apply to palm, rub hands together covering all surfaces (including between fingers and under nails) until dry.\nWhen to perform hand hygiene: Before and after each resident contact. After removing gloves. After touching contaminated surfaces. Before preparing or handling food. After using the restroom.',
        imageUrl: '/assets/data/images/prevention-infection/IMG_1045.JPEG'
      }
    ]
  }
];

// ── 10 review questions from Chapter 16 ───────────────────────────────────

const maxId = Math.max(...quiz.map(q => q.id));

const newQuestions = [
  {
    id: maxId + 1,
    question: 'Which type of microorganism requires a living cell to grow and multiply?',
    options: ['Bacteria', 'Fungi', 'Viruses', 'Protozoa'],
    answer: 2,
    explanation: 'Viruses grow only in living cells. They cause diseases such as the common cold, herpes, AIDS, and hepatitis.',
    category: 'Infection Control'
  },
  {
    id: maxId + 2,
    question: 'E. coli normally lives in the colon. If it enters the urinary system, it becomes a(n):',
    options: ['Normal flora', 'Non-pathogen', 'Pathogen', 'Antibiotic'],
    answer: 2,
    explanation: 'When a non-pathogen is transferred from its normal environment, it can become a pathogen. E. coli transferred to the urinary system can cause a urinary tract infection.',
    category: 'Infection Control'
  },
  {
    id: maxId + 3,
    question: 'Which of the following is a sign of infection that is MOST commonly absent or atypical in older persons?',
    options: ['Confusion', 'Fever', 'Discharge from wound', 'Nausea'],
    answer: 1,
    explanation: 'Older persons may have a slight fever or no fever at all during infection. They may instead show confusion or delirium. All changes — even minor ones — should be reported immediately.',
    category: 'Infection Control'
  },
  {
    id: maxId + 4,
    question: 'What are the six links in the chain of infection (in order)?',
    options: [
      'Pathogen, reservoir, portal of exit, transmission, portal of entry, susceptible host',
      'Host, transmission, pathogen, entry, exit, immunity',
      'Bacteria, virus, fungi, protozoa, vector, host',
      'Entry, exit, host, pathogen, vector, immunity'
    ],
    answer: 0,
    explanation: 'The chain of infection must have all six links present: source (pathogen), reservoir, portal of exit, method of transmission, portal of entry, and a susceptible host.',
    category: 'Infection Control'
  },
  {
    id: maxId + 5,
    question: 'MRSA stands for:',
    options: [
      'Multi-Resistant Staph Aureus',
      'Methicillin-Resistant Staphylococcus Aureus',
      'Methicillin-Related Skin Abrasion',
      'Multi-Resistant Streptococcus Aureus'
    ],
    answer: 1,
    explanation: 'MRSA stands for Methicillin-Resistant Staphylococcus aureus. It is resistant to methicillin and can cause serious infections in the bloodstream, lungs, and joints.',
    category: 'Infection Control'
  },
  {
    id: maxId + 6,
    question: 'A healthcare-associated infection (HAI) is best defined as:',
    options: [
      'An infection a person had before being admitted to a facility',
      'An infection related to receiving health care in any setting',
      'An infection caused only in hospital operating rooms',
      'Any infection involving drug-resistant bacteria'
    ],
    answer: 1,
    explanation: 'An HAI is an infection that develops in a person cared for in any setting where health care is given — hospitals, nursing centers, clinics, or home care. It is related to receiving health care.',
    category: 'Infection Control'
  },
  {
    id: maxId + 7,
    question: 'Which is the single most important practice to prevent the spread of infection?',
    options: ['Wearing gloves', 'Hand hygiene', 'Wearing a gown', 'Using a mask'],
    answer: 1,
    explanation: 'Hand hygiene is the single most important way to prevent the spread of microbes and infection, as stated in Chapter 16 of the textbook.',
    category: 'Infection Control'
  },
  {
    id: maxId + 8,
    question: 'The correct way to sneeze or cough to prevent spreading microbes is to:',
    options: [
      'Cover your mouth with both hands',
      'Turn away from others without covering',
      'Sneeze or cough into your upper arm',
      'Use a tissue and then place it in your pocket'
    ],
    answer: 2,
    explanation: 'You should sneeze or cough into your upper arm (elbow), not into your hands. Covering with hands transfers microbes to surfaces you touch.',
    category: 'Infection Control'
  },
  {
    id: maxId + 9,
    question: 'Medical asepsis is also called:',
    options: ['Sterile technique', 'Surgical asepsis', 'Clean technique', 'Transmission precaution'],
    answer: 2,
    explanation: 'Medical asepsis is also called "clean technique." It reduces the number of microbes and prevents them from spreading. Surgical asepsis is called "sterile technique."',
    category: 'Infection Control'
  },
  {
    id: maxId + 10,
    question: 'Which patient group is at GREATEST risk for a severe infection because their immune system is suppressed by medication?',
    options: ['Burn patients', 'Transplant patients', 'Elderly patients', 'Pediatric patients'],
    answer: 1,
    explanation: 'Transplant patients receive drugs to prevent organ rejection — these drugs suppress the immune system, making it unable to produce antibodies needed to fight infection.',
    category: 'Infection Control'
  }
];

const updatedTopics = [...topics, ...newTopics];
const updatedQuiz   = [...quiz, ...newQuestions];

writeFileSync(topicsPath, JSON.stringify(updatedTopics, null, 2));
writeFileSync(quizPath,   JSON.stringify(updatedQuiz,   null, 2));

console.log('Topics added:', newTopics.length, '— Total topics:', updatedTopics.length);
console.log('Questions added:', newQuestions.length, '— Total questions:', updatedQuiz.length);
