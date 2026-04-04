import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const file = resolve('public/assets/data/glossary.json');
const glossary = JSON.parse(readFileSync(file, 'utf8'));
let nextId = Math.max(...glossary.map(x => x.id)) + 1;

const suffixes = [
  // Surgical procedures
  { term: "-ectomy (suffix)", definition: "Surgical removal or excision of a body part or structure. Example: appendectomy (removal of the appendix), tonsillectomy (removal of the tonsils), mastectomy (removal of the breast).", category: "Medical Suffix" },
  { term: "-tomy (suffix)", definition: "Surgical incision into a body part; to cut into. Example: tracheotomy (incision into the trachea), laparotomy (incision into the abdomen), craniotomy (incision into the skull).", category: "Medical Suffix" },
  { term: "-ostomy (suffix)", definition: "Surgical creation of an artificial opening between an organ and the body surface or between two organs. Example: colostomy (opening from colon to skin), ileostomy (opening from ileum to skin), tracheostomy (permanent opening in the trachea).", category: "Medical Suffix" },
  { term: "-plasty (suffix)", definition: "Surgical repair, reconstruction, or reshaping of a body part. Example: rhinoplasty (surgical repair of the nose), arthroplasty (surgical reconstruction of a joint), mammoplasty (surgical reshaping of the breast).", category: "Medical Suffix" },
  { term: "-rraphy (suffix)", definition: "Surgical suturing or stitching of a wound or body part. Example: herniorrhaphy (suturing of a hernia), cardiorrhaphy (suturing of the heart), perineorrhaphy (suturing of the perineum).", category: "Medical Suffix" },
  { term: "-desis (suffix)", definition: "Surgical binding, fusion, or fixation of a joint or structure. Example: arthrodesis (surgical fusion of a joint), pleurodesis (fusion of the pleural layers), tenodesis (surgical fixation of a tendon).", category: "Medical Suffix" },
  { term: "-pexy (suffix)", definition: "Surgical fixation or suspension of an organ to hold it in place. Example: orchiopexy (fixation of an undescended testicle), nephropexy (surgical fixation of a floating kidney), mastopexy (breast lift surgery).", category: "Medical Suffix" },
  { term: "-tripsy (suffix)", definition: "Crushing or breaking of a structure, often a stone or calculus. Example: lithotripsy (crushing of kidney stones), cholecystolithotripsy (crushing of gallstones).", category: "Medical Suffix" },
  { term: "-centesis (suffix)", definition: "Surgical puncture of a cavity or organ to aspirate (withdraw) fluid. Example: amniocentesis (puncture of the amniotic sac), thoracentesis (puncture of the chest cavity), arthrocentesis (puncture of a joint).", category: "Medical Suffix" },
  // Diagnostic / examination
  { term: "-scopy (suffix)", definition: "Visual examination using an instrument (scope). Example: endoscopy (visual exam of the inside of the body), bronchoscopy (exam of the airways), colonoscopy (exam of the colon).", category: "Medical Suffix" },
  { term: "-scope (suffix)", definition: "An instrument used to visually examine a body part or cavity. Example: stethoscope (instrument to listen to heart/lung sounds), otoscope (instrument to examine the ear), ophthalmoscope (instrument to examine the eye).", category: "Medical Suffix" },
  { term: "-graphy (suffix)", definition: "The process of recording or producing an image of a body structure. Example: radiography (X-ray imaging), echocardiography (ultrasound of the heart), mammography (X-ray of the breast).", category: "Medical Suffix" },
  { term: "-gram (suffix)", definition: "A record, image, or tracing produced by a diagnostic test or instrument. Example: electrocardiogram (ECG - tracing of heart electrical activity), mammogram (X-ray image of the breast), angiogram (image of blood vessels).", category: "Medical Suffix" },
  { term: "-meter (suffix)", definition: "An instrument used to measure a specific quantity or value. Example: thermometer (instrument to measure temperature), sphygmomanometer (instrument to measure blood pressure), spirometer (instrument to measure lung capacity).", category: "Medical Suffix" },
  { term: "-metry (suffix)", definition: "The process or science of measuring something. Example: spirometry (measuring lung capacity), audiometry (measuring hearing), optometry (measuring visual acuity).", category: "Medical Suffix" },
  // Conditions and diseases
  { term: "-itis (suffix)", definition: "Inflammation of a tissue or organ. Example: appendicitis (inflammation of the appendix), arthritis (inflammation of joints), dermatitis (inflammation of the skin), bronchitis (inflammation of the bronchi).", category: "Medical Suffix" },
  { term: "-osis (suffix)", definition: "A condition, process, or abnormal increase - often describing a disease state or pathological process. Example: fibrosis (formation of excess fibrous tissue), cyanosis (bluish discoloration), psychosis (a mental disorder involving loss of reality).", category: "Medical Suffix" },
  { term: "-emia (suffix)", definition: "A condition of the blood; refers to the presence or level of a substance in the blood. Example: anemia (insufficient red blood cells), hyperglycemia (high blood glucose), bacteremia (bacteria in the bloodstream), septicemia (infection in the bloodstream).", category: "Medical Suffix" },
  { term: "-algia (suffix)", definition: "Pain in a specific body part or region. Example: neuralgia (nerve pain), myalgia (muscle pain), arthralgia (joint pain), cephalgia (headache).", category: "Medical Suffix" },
  { term: "-dynia (suffix)", definition: "Pain; used interchangeably with -algia in many terms. Example: mastodynia (breast pain), pleurodynia (chest/rib muscle pain), gastrodynia (stomach pain).", category: "Medical Suffix" },
  { term: "-pathy (suffix)", definition: "Disease or disorder of a body part or system. Example: neuropathy (disease of the nerves), cardiomyopathy (disease of the heart muscle), nephropathy (disease of the kidneys).", category: "Medical Suffix" },
  { term: "-megaly (suffix)", definition: "Abnormal enlargement of a body organ or part. Example: cardiomegaly (enlarged heart), splenomegaly (enlarged spleen), hepatomegaly (enlarged liver), acromegaly (enlargement of extremities due to excess growth hormone).", category: "Medical Suffix" },
  { term: "-cele (suffix)", definition: "A hernia, cyst, or abnormal protrusion of an organ through surrounding tissue. Example: hydrocele (fluid-filled sac around the testicle), cystocele (herniation of the bladder into the vaginal wall), rectocele (herniation of the rectum).", category: "Medical Suffix" },
  { term: "-ectasis (suffix)", definition: "Dilation, expansion, or stretching of a hollow organ or vessel. Example: bronchiectasis (abnormal dilation of the bronchi), telangiectasis (dilation of small blood vessels near the skin surface).", category: "Medical Suffix" },
  { term: "-stenosis (suffix)", definition: "Narrowing or constriction of a passage, vessel, or opening. Example: aortic stenosis (narrowing of the aortic valve), spinal stenosis (narrowing of the spinal canal), pyloric stenosis (narrowing of the pylorus).", category: "Medical Suffix" },
  { term: "-lysis (suffix)", definition: "Destruction, breakdown, dissolution, or loosening of cells or tissue. Example: hemolysis (destruction of red blood cells), dialysis (mechanical filtration of waste from blood), paralysis (loss of muscle function).", category: "Medical Suffix" },
  { term: "-ptosis (suffix)", definition: "Drooping, prolapse, or downward displacement of an organ or body part. Example: blepharoptosis (drooping of the eyelid), nephroptosis (downward displacement of the kidney), visceroptosis (prolapse of abdominal organs).", category: "Medical Suffix" },
  { term: "-spasm (suffix)", definition: "Sudden, involuntary contraction or cramping of a muscle or hollow organ. Example: bronchospasm (sudden contraction of airway muscles), vasospasm (sudden constriction of a blood vessel), laryngospasm (sudden closure of the vocal cords).", category: "Medical Suffix" },
  { term: "-plegia (suffix)", definition: "Paralysis or loss of voluntary movement in a body region. Example: hemiplegia (paralysis of one side of the body), paraplegia (paralysis of the lower body), quadriplegia (paralysis of all four limbs).", category: "Medical Suffix" },
  { term: "-paresis (suffix)", definition: "Partial or incomplete paralysis; weakness in voluntary movement. Example: hemiparesis (weakness on one side of the body), gastroparesis (partial paralysis of stomach muscles).", category: "Medical Suffix" },
  { term: "-penia (suffix)", definition: "Deficiency or abnormal reduction in the number of cells or a substance. Example: leukopenia (low white blood cell count), thrombocytopenia (low platelet count), osteopenia (reduced bone density).", category: "Medical Suffix" },
  { term: "-stasis (suffix)", definition: "Stopping, controlling, slowing, or maintaining a steady state of a bodily process. Example: hemostasis (stopping of bleeding), bacteriostasis (inhibition of bacterial growth), homeostasis (maintenance of a stable internal environment).", category: "Medical Suffix" },
  { term: "-trophy (suffix)", definition: "Relating to nourishment, development, or growth of tissue. Example: atrophy (wasting away or shrinkage of tissue), hypertrophy (excessive growth of tissue), dystrophy (abnormal or defective development).", category: "Medical Suffix" },
  { term: "-emesis (suffix)", definition: "Vomiting or the act of expelling stomach contents through the mouth. Example: hematemesis (vomiting blood), hyperemesis (excessive vomiting), antiemetic (medication to prevent vomiting).", category: "Medical Suffix" },
  { term: "-rrhea (suffix)", definition: "Flow, discharge, or excessive secretion from a body structure. Example: diarrhea (excessive loose stool), rhinorrhea (runny nose - nasal discharge), menorrhea (menstrual flow), otorrhea (discharge from the ear).", category: "Medical Suffix" },
  { term: "-rrhagia (suffix)", definition: "Excessive or abnormal bleeding or hemorrhage from a body part. Example: menorrhagia (heavy menstrual bleeding), hemorrhage (excessive bleeding), otorrhagia (bleeding from the ear).", category: "Medical Suffix" },
  { term: "-phobia (suffix)", definition: "An abnormal, persistent, and irrational fear of a specific object, situation, or activity. Example: claustrophobia (fear of enclosed spaces), agoraphobia (fear of open or crowded spaces), acrophobia (fear of heights).", category: "Medical Suffix" },
  { term: "-genesis (suffix)", definition: "The origin, production, development, or formation of something. Example: pathogenesis (origin and development of a disease), carcinogenesis (development of cancer), hematopoiesis (formation of blood cells).", category: "Medical Suffix" },
  { term: "-genic (suffix)", definition: "Producing, originating from, or caused by a specific source. Example: carcinogenic (cancer-causing), iatrogenic (caused by medical treatment), psychogenic (originating in the mind), pyrogenic (fever-producing).", category: "Medical Suffix" },
  { term: "-philia (suffix)", definition: "Attraction to, abnormal love of, or tendency toward a specific substance or condition; also used to indicate a clotting affinity. Example: hemophilia (tendency to bleed excessively due to clotting disorder).", category: "Medical Suffix" },
  // Descriptive / structural
  { term: "-ose (suffix)", definition: "Full of, resembling, having the nature of, or abundantly containing a substance. In chemistry, -ose denotes a sugar or carbohydrate. Example: adipose (full of fat tissue), glucose (a simple sugar), sucrose (table sugar), verbose (full of words).", category: "Medical Suffix" },
  { term: "-oid (suffix)", definition: "Resembling, like, or having the appearance or form of. Example: deltoid (triangular muscle, resembling the Greek letter delta), opioid (resembling opium in its effects), sigmoid (S-shaped, resembling the letter sigma).", category: "Medical Suffix" },
  { term: "-al (suffix)", definition: "Pertaining to, relating to, or of. One of the most common adjectival suffixes in medical terminology. Example: renal (pertaining to the kidneys), femoral (pertaining to the femur), spinal (pertaining to the spine).", category: "Medical Suffix" },
  { term: "-ic (suffix)", definition: "Pertaining to, having the nature of, or relating to. Example: gastric (pertaining to the stomach), hepatic (pertaining to the liver), systemic (pertaining to the whole body system).", category: "Medical Suffix" },
  { term: "-ous (suffix)", definition: "Having, full of, or characterized by a quality or substance. Example: cancerous (having the quality of cancer), mucous (relating to mucus), venous (pertaining to veins), nervous (pertaining to nerves).", category: "Medical Suffix" },
  { term: "-ary (suffix)", definition: "Relating to, connected with, or belonging to. Example: pulmonary (pertaining to the lungs), urinary (pertaining to urine/urination), coronary (pertaining to the arteries of the heart).", category: "Medical Suffix" },
  { term: "-ior (suffix)", definition: "Pertaining to a position, direction, or anatomical location. Example: anterior (toward the front), posterior (toward the back), superior (above), inferior (below).", category: "Medical Suffix" },
  { term: "-logy (suffix)", definition: "The study of, branch of knowledge about, or science of a particular subject. Example: cardiology (study of the heart), dermatology (study of the skin), neurology (study of the nervous system), oncology (study of cancer).", category: "Medical Suffix" },
  { term: "-logist (suffix)", definition: "A specialist or expert in a particular field of study or medicine. Example: cardiologist (heart specialist), neurologist (nervous system specialist), dermatologist (skin specialist), oncologist (cancer specialist).", category: "Medical Suffix" },
  // Clinical signs / physiology
  { term: "-uria (suffix)", definition: "Relating to urine, urination, or a condition of the urine. Example: hematuria (blood in urine), polyuria (excessive urination), dysuria (painful urination), glycosuria (glucose in urine).", category: "Medical Suffix" },
  { term: "-phagia (suffix)", definition: "Eating, swallowing, or an abnormal desire to eat a specific substance. Example: dysphagia (difficulty swallowing), polyphagia (excessive eating - a sign of diabetes), aphagia (inability to swallow).", category: "Medical Suffix" },
  { term: "-pnea (suffix)", definition: "Breathing or a condition related to breathing. Example: dyspnea (difficulty breathing), apnea (absence of breathing), tachypnea (abnormally rapid breathing), bradypnea (abnormally slow breathing).", category: "Medical Suffix" },
  { term: "-cardia (suffix)", definition: "Condition or rate relating to the heart. Example: tachycardia (abnormally fast heart rate over 100 bpm), bradycardia (abnormally slow heart rate under 60 bpm).", category: "Medical Suffix" },
  { term: "-phasia (suffix)", definition: "Speech or a condition of speech or language. Example: aphasia (inability to speak or understand language, often from brain injury), dysphasia (difficulty with speech).", category: "Medical Suffix" },
  // Tissue / cell types
  { term: "-oma (suffix)", definition: "A tumor, mass, or abnormal growth of tissue - may be benign or malignant depending on context. Example: carcinoma (malignant tumor of epithelial cells), melanoma (malignant tumor of pigment-producing cells), lipoma (benign fatty tumor).", category: "Medical Suffix" },
  { term: "-cyte (suffix)", definition: "A cell of a specific type. Example: erythrocyte (red blood cell), leukocyte (white blood cell), thrombocyte (platelet), osteocyte (bone cell).", category: "Medical Suffix" },
  { term: "-blast (suffix)", definition: "An immature, precursor, or primitive cell that will develop into a more specialized cell. Example: osteoblast (bone-forming cell), fibroblast (connective tissue cell), erythroblast (immature red blood cell).", category: "Medical Suffix" },
  { term: "-ase (suffix)", definition: "An enzyme that catalyzes a chemical reaction, usually breaking down a specific substrate. Example: lipase (enzyme that breaks down fats), amylase (enzyme that breaks down starch), lactase (enzyme that breaks down lactose).", category: "Medical Suffix" },
];

// Deduplicate within the list
const seenTerms = new Set();
const deduped = suffixes.filter(s => {
  if (seenTerms.has(s.term)) return false;
  seenTerms.add(s.term);
  return true;
});

// Skip any that somehow already exist
const existingTerms = new Set(glossary.map(x => x.term.toLowerCase()));
const toAdd = deduped.filter(s => !existingTerms.has(s.term.toLowerCase()));

toAdd.forEach(s => {
  s.id = nextId++;
  glossary.push(s);
});

writeFileSync(file, JSON.stringify(glossary, null, 2));
console.log(`Added ${toAdd.length} medical suffix entries. Total: ${glossary.length}`);
