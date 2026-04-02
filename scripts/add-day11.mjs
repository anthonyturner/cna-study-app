import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const topicsPath = join(__dirname, '../public/assets/data/topics.json');
const topics = JSON.parse(readFileSync(topicsPath, 'utf8'));

const day11 = [
  {
    id: 'dignity-privacy',
    title: 'Dignity & Privacy',
    icon: 'privacy_tip',
    color: '#6A1B9A',
    summary: "Every resident's right to be treated with dignity and respect, personal privacy during care, and the CNA's role in protecting both.",
    day: 11,
    sections: [
      {
        heading: 'Treating Residents with Dignity',
        content: 'Dignity is defined as the quality or state of being worthy of esteem or respect. Every resident, regardless of race, color, creed, national origin, age, sex, sexual preference, religion, disability or payment source should be treated with the same consideration and dignity. Ask your residents how they want to be addressed, and address them as requested. Avoid terms like "honey," "sweetie," or "baby." Never tease or make fun of a resident. Never use put-downs or foul language. Always explain what you are going to do. Provide privacy with all care.',
        imageUrl: '/assets/data/images/day-11/IMG_0997.JPEG'
      },
      {
        heading: 'Resident Rights & Privacy',
        content: 'Only staff directly involved in care, treatments or examinations are present — the resident must give consent for others to be present. Residents have the right to visit with others in private, in an area where they cannot be seen or heard by others. The right to visit in privacy also involves telephone conversations. Residents also have the right to send and receive mail without interference by others.',
        imageUrl: '/assets/data/images/day-11/IMG_0998.JPEG'
      },
      {
        heading: 'CNA Role in Ensuring Privacy',
        content: 'Always knock and announce yourself before you enter a resident\'s room. Use privacy curtains or screens when giving care to the resident. Avoid unnecessary exposure of the resident\'s body during bathing and toileting. Do not discuss care issues or health status in public areas.',
        imageUrl: '/assets/data/images/day-11/IMG_0998.JPEG'
      }
    ]
  },
  {
    id: 'confidentiality-hipaa-resident-rights',
    title: 'Confidentiality, HIPAA & Resident Rights',
    icon: 'gavel',
    color: '#1565C0',
    summary: 'Resident confidentiality, HIPAA protections, rights to self-determination, personal and privacy rights, rights regarding abuse and restraints, and access to information, visits, and personal funds.',
    day: 11,
    sections: [
      {
        heading: 'Confidentiality',
        content: 'Information about the resident\'s care, treatment and condition is kept confidential. Medical and financial records are also confidential. The resident must give consent for information to be released to other people. This information is to be discussed only with members of the healthcare team who are caring for the resident. Information is never discussed publicly.',
        imageUrl: '/assets/data/images/day-11/IMG_0999.JPEG'
      },
      {
        heading: 'HIPAA',
        content: 'HIPAA (Health Insurance Portability and Accountability Act) was put into place to protect resident privacy and ensure privacy of all health information. It protects doctor visits, tests and procedures, diagnosis and mental health information and counseling. Residents must be given the "Notice of Privacy Practices" statement which states how the facility can use information from medical records and when and to whom it can be given.',
        imageUrl: '/assets/data/images/day-11/IMG_0999.JPEG'
      },
      {
        heading: 'Rights to Self-Determination',
        content: 'Nursing home residents have the right to choose their personal physician. They have the right to full information in advance and participation in planning any changes to their care and treatment. They have the right to reside and receive services with reasonable accommodation of individual needs and preferences. They may voice grievances about care without discrimination or reprisal and receive a prompt response from the facility. They have the right to organize and participate in resident groups.',
        imageUrl: '/assets/data/images/day-11/IMG_1003.JPEG'
      },
      {
        heading: 'Personal & Privacy Rights',
        content: 'Nursing home residents have the right to participate in social, religious and community activities as they choose. They have the right to privacy in medical treatment, accommodations, personal visits, written and telephone communications and meetings of resident and family groups. Residents have the right to confidentiality of personal and clinical records.',
        imageUrl: '/assets/data/images/day-11/IMG_1003.JPEG'
      },
      {
        heading: 'Rights Regarding Abuse & Restraints',
        content: 'Nursing home residents have the right to be free from physical or mental abuse, corporal punishment, involuntary seclusion or disciplinary use of restraints. Restraints may only be used under written physician\'s orders to treat a resident\'s medical symptoms and ensure safety. Psychopharmacologic medication may only be given as ordered by a physician as part of a written plan of care for a specific medical symptom.',
        imageUrl: '/assets/data/images/day-11/IMG_1003.JPEG'
      },
      {
        heading: 'Right to Information & Visits',
        content: 'Nursing homes must inform residents of any plans to change their rooms or roommates. They must inform residents of their rights upon admission, including rights regarding personal funds and the right to file a complaint with the state survey agency. Nursing homes must permit immediate visits by a resident\'s personal physician and by representatives from the licensing agency and the Ombudsman Program. Residents\' relatives may visit with the resident\'s consent.',
        imageUrl: '/assets/data/images/day-11/IMG_1004.JPEG'
      },
      {
        heading: 'Protection of Personal Funds',
        content: 'A nursing home must not require residents to deposit their personal funds with the facility. If it accepts written responsibility for a resident\'s funds, it must keep funds over $50 in an interest-bearing account separate from the facility account. The facility must not charge a resident for any item or service covered by Medicaid, including routine personal hygiene items and services.',
        imageUrl: '/assets/data/images/day-11/IMG_1004.JPEG'
      }
    ]
  },
  {
    id: 'religion-spirituality-sexuality',
    title: 'Religion, Spirituality & Human Sexuality',
    icon: 'favorite',
    color: '#00695C',
    summary: "Meeting residents' religious and spiritual needs, major religious customs and beliefs, human sexuality in long-term care, and responding to sexual advances appropriately.",
    day: 11,
    sections: [
      {
        heading: 'Meeting Religious & Spiritual Needs',
        content: 'Religion relates to spiritual beliefs, needs, and practices. Religions have beliefs and practices relating to daily living habits, behaviors, relationships with others, diet, healing, days of worship, birth and birth control, medicine and death. A resident\'s religion influences health and illness — many residents rely on religion for support and comfort during illness. Listen to the resident as they express their beliefs. Allow residents to practice their beliefs. Provide privacy when a resident meets with their clergy. Respect religious symbols and books. Refrain from imposing your own beliefs on the resident. If a resident asks to see clergy, promptly report the request to the nurse.',
        imageUrl: '/assets/data/images/day-11/IMG_1005.JPEG'
      },
      {
        heading: 'Religious Customs: Buddhism & Christianity',
        content: 'Buddhism: Discourages drug and alcohol use. Some sects are vegetarian. Illness is seen as a result of negative actions. Cleanliness is very important. Chanting of last rites at bedside immediately after death.\nChristianity: Many denominations including Protestant, Catholic and Episcopalian. Jehovah\'s Witnesses will not accept blood transfusions. Seventh-day Adventists have dietary restrictions regarding alcohol and caffeine. Catholics fast before communion and may not eat meat on Fridays; receive last rites prior to death. Greek Orthodox — Wednesdays, Fridays and Lent are days of fasting.',
        imageUrl: '/assets/data/images/day-11/IMG_1006.JPEG'
      },
      {
        heading: 'Religious Customs: Hinduism, Judaism & Islam',
        content: 'Hinduism: Fasting occurs on various days of the week. Many believe illness is a result of sin in a previous life. Many are vegetarian. Last rites are practiced at the time of death. Only certain people can touch the body after death.\nJudaism: Follow Kosher dietary laws prohibiting certain meats and mixing milk and meat products. Autopsy is prohibited. The body is ritually cleansed upon death. Burial is within 24 hours.\nIslam: Ritual washing after prayer, which occurs 5 times a day. No pork products or alcoholic beverages. Families must be with the dying person. The dying person must confess sins. The family washes the body and only family and friends may touch it.',
        imageUrl: '/assets/data/images/day-11/IMG_1006.JPEG'
      },
      {
        heading: 'Human Sexuality',
        content: 'Sexuality involves the personality and the body. Physical, psychological, social, cultural and spiritual factors influence sexuality. It affects how a person behaves, thinks, dresses and responds to others. Sexuality is important into adulthood and old age. Sexual activity does not always mean intercourse — it may be expressed through kissing, holding hands and embracing. Residents must be capable of consenting; cognitive status will be assessed. A resident capable of consenting can identify their desired partner, express the degree of intimacy they prefer, and their sexual history is consistent with their current behavior.',
        imageUrl: '/assets/data/images/day-11/IMG_1007.JPEG'
      },
      {
        heading: 'Providing Privacy & Responding to Sexual Advances',
        content: 'Allow for privacy. If the resident has a private room, close the door when appropriate. Arrange for privacy when a roommate is out of the room. Allow privacy for masturbation — it is a normal form of sexual expression. Some residents may make sexual advances toward staff. Causes of sexually aggressive behavior include dementia, traumatic brain injury, fever, medications, stroke, and lack of privacy. Ask the resident not to touch you. Tell the resident you will not do what he or she wants and that those behaviors make you uncomfortable. Report to the Charge Nurse.',
        imageUrl: '/assets/data/images/day-11/IMG_1008.JPEG'
      }
    ]
  },
  {
    id: 'grievances-resident-council-advocacy',
    title: 'Grievances, Resident Council & Advocacy',
    icon: 'groups',
    color: '#E65100',
    summary: "The problem-solving process for resident grievances, the resident council's role and rights, the NY State DOH complaint process, and the Long Term Care Ombudsman Program.",
    day: 11,
    sections: [
      {
        heading: 'Problem Solving & Grievance Process',
        content: 'Problem solving is the process of taking corrective action to meet objectives. Steps: (1) Understanding the problem — gather information. (2) Devising a plan — use past experience to find a solution. (3) Carrying out the plan — try out the plan. (4) Looking back — check the result and understand how it fits together. Residents and families are given the facility grievance policy on admission. Grievances may be voiced without fear of discrimination or reprisal, and resolution will be made promptly. Residents will be informed in writing of results and a plan of correction.',
        imageUrl: '/assets/data/images/day-11/IMG_1010.JPEG'
      },
      {
        heading: 'CNA Role in Grievances',
        content: 'Listen to the concerns voiced by the resident. Assist with transporting residents to Resident Council. Report any concerns raised by the resident to the Charge Nurse. Social Services and Administration are involved in grievance investigations. Residents may contact client advocate agencies and receive information from them.',
        imageUrl: '/assets/data/images/day-11/IMG_1010.JPEG'
      },
      {
        heading: 'Resident Council',
        content: 'A Resident Council is an independent, organized group of residents who meet regularly to create change, address quality and dignity of care, plan resident activities, participate in legislation, and discuss other matters. State and federal law recognizes their importance: residents have the right to organize, meet, and participate. The home must provide a private space for council meetings. The resident council may recommend changes to facility policies and invite family, friends, guest speakers, or staff to meetings. Effective councils improve communication between staff and residents, serve as a source of new ideas, and help residents speak up collectively.',
        imageUrl: '/assets/data/images/day-11/IMG_1011.JPEG'
      },
      {
        heading: 'NY State Department of Health (NYSDOH)',
        content: 'The NYSDOH Division of Quality and Surveillance for Nursing Homes and ICFs reviews and investigates complaints and incidents for nursing homes in New York State. The Nursing Home Complaint hotline (1-888-201-4563) is available 24 hours a day, 7 days a week. The most serious complaints require investigators to conduct interviews, review medical records, and perform activities onsite. If a nursing home violates regulations, the Department will issue a citation.',
        imageUrl: '/assets/data/images/day-11/IMG_1012.JPEG'
      },
      {
        heading: 'Long Term Care Ombudsman Program',
        content: 'A certified Long Term Care Ombudsman is a professionally trained and certified advocate who resolves issues with long term care facilities on behalf of residents and their families. Ombudsman responsibilities: identify, investigate and resolve complaints made by and on behalf of residents; provide information about long-term care services; represent the interests of residents before governmental agencies; educate consumers and the public regarding long-term care issues; support the development of resident and family councils to protect the well-being and rights of residents.',
        imageUrl: '/assets/data/images/day-11/IMG_1013.JPEG'
      }
    ]
  },
  {
    id: 'activities-of-choice',
    title: 'Activities of Choice',
    icon: 'celebration',
    color: '#2E7D32',
    summary: "Residents' rights to choose recreational, religious, spiritual, and community activities; the CNA's role in supporting participation; and the importance of activities for quality of life.",
    day: 11,
    sections: [
      {
        heading: 'Importance of Activities',
        content: 'The Activities Department plans recreational and social activities for residents. Activities help combat boredom and improve quality of life and self-esteem. Residents have the right to choose which activities they would like to participate in. Such activities must allow personal choice and promote physical, intellectual, social and emotional well-being.',
        imageUrl: '/assets/data/images/day-11/IMG_1014.JPEG'
      },
      {
        heading: 'CNA Role in Activities',
        content: 'Plan your work so residents can attend activities of choice. Review the calendar and be aware of the activities planned for that day. Tell the resident what activities are planned and encourage them to attend. Help the resident dress properly, but allow the resident to do as much self-care as possible. Inform the resident\'s family and friends of activities. Escort residents to and from activities. Talk to residents about their activities and praise their accomplishments.',
        imageUrl: '/assets/data/images/day-11/IMG_1015.JPEG'
      },
      {
        heading: 'Religious, Spiritual & Cultural Activities',
        content: 'Facilities provide religious services to promote spiritual health. Residents have the right to choose which services they would like to attend. Plan your work so residents can attend scheduled services. Review the calendar and be aware of scheduled services. Inform the resident\'s family and friends of scheduled services. Escort residents to and from services.',
        imageUrl: '/assets/data/images/day-11/IMG_1015.JPEG'
      },
      {
        heading: 'Community Activities & Individual Differences',
        content: 'Involvement with community activities enhances the physical, mental and social life of residents and staff, maintains relationships and contacts within the community, and can lead to the development of new interests. Each person sees the world differently — our age, background, life experiences and attitudes all shape our perceptions. We must try to understand the resident\'s viewpoint and avoid making quick judgments. If a resident\'s request is allowed per their care plan, proceed. If not, report the request to the Charge Nurse.',
        imageUrl: '/assets/data/images/day-11/IMG_1018.JPEG'
      }
    ]
  },
  {
    id: 'personal-belongings-misappropriation',
    title: 'Personal Belongings & Misappropriation',
    icon: 'inventory_2',
    color: '#5D4037',
    summary: "Residents' rights to keep and use personal property, the facility's duty to protect belongings, and what constitutes misappropriation of resident property.",
    day: 11,
    sections: [
      {
        heading: "Residents' Right to Personal Belongings",
        content: "Residents have the right to keep and use personal belongings, including clothing, jewelry, pictures, furniture and personal mementos. A resident's property is treated with care and respect. Though items may have no value to you, they are important to the resident and relate to personal choice, dignity and quality of life. The facility must take reasonable measures to protect the resident's property: items must be labeled with the resident's name, logged onto the personal belongings form in the medical record, and residents have access to a locked drawer in their room.",
        imageUrl: '/assets/data/images/day-11/IMG_1019.JPEG'
      },
      {
        heading: 'Misappropriation of Resident Property',
        content: "Misappropriation includes stealing, deliberate financial exploitation, use of a resident's property for the caregiver's benefit, and use of items owned by one resident for another resident. Examples: taking money, clothing or personal belongings from a resident; using a resident's personal care items (soap, lotion, powder) on another resident; using a resident's phone for personal calls; using a resident's television to watch what you want; eating food items that belong to the resident. A CNA found guilty of misappropriation must have their name entered into the nurse aide registry.",
        imageUrl: '/assets/data/images/day-11/IMG_1020.JPEG'
      },
      {
        heading: 'Reporting Lost, Stolen or Damaged Items',
        content: 'Any reports of lost, stolen or damaged items must be reported. All reports of misappropriation will be thoroughly investigated. Information to report: the name of the resident(s) involved; the date, time and location of the incident; the name(s) of the person(s) committing the incident, if known; the name(s) of any witnesses; and the type of incident committed.',
        imageUrl: '/assets/data/images/day-11/IMG_1021.JPEG'
      }
    ]
  },
  {
    id: 'abuse-neglect-restraints',
    title: 'Abuse, Neglect & Restraints',
    icon: 'report_problem',
    color: '#B71C1C',
    summary: 'Recognizing and reporting all forms of abuse (physical, verbal, mental) and neglect, the proper response when abuse is discovered, and the safe and appropriate use of physical and chemical restraints.',
    day: 11,
    sections: [
      {
        heading: 'Physical Abuse & Mistreatment',
        content: 'Physical abuse is inflicting injury, unreasonable confinement or punishment that results in physical harm. Examples: hitting, pinching, slapping, punching, biting, grabbing, kicking, pulling hair, shaking, rough handling, applying restraints inappropriately, using bath water that is too hot or cold. Mistreatment is the failure to care for a resident properly. Examples: putting a disposable brief on wrong; feeding a resident in a sloppy and thoughtless way; putting a brace or safety device on wrong.',
        imageUrl: '/assets/data/images/day-11/IMG_1021.JPEG'
      },
      {
        heading: 'Neglect: Active & Passive',
        content: 'Neglect is the failure of a caregiver to provide goods or services needed to avoid a clear and serious threat to physical or mental health. Active neglect (intentional) examples: purposely withholding assistance, food, or fluids; ignoring call lights; making the resident wait for your convenience; not feeding a resident who needs assistance with meals. Passive neglect (unintentional) examples: forgetting to place the call light within reach; leaving the resident on the toilet or bedpan; telling a resident you will return in 5 minutes and not doing so.',
        imageUrl: '/assets/data/images/day-11/IMG_1022.JPEG'
      },
      {
        heading: 'Verbal & Mental Abuse',
        content: 'Verbal abuse is the threat of injury, unreasonable confinement, or verbal intimidation through statements, pictures or gestures that are insulting or threatening. Verbal abuse is based on how the resident receives the message — not the intent. Examples: ignoring, name-calling, screaming, teasing, using demeaning or foul language, treating the resident like a child, talking about the person as if they were not there. Mental abuse is the intentional infliction of anguish, degradation, fear, or distress through verbal or nonverbal acts. Examples: yelling at a resident who is eating sloppily; threatening punishment for soiling; giving the "silent treatment."',
        imageUrl: '/assets/data/images/day-11/IMG_1022.JPEG'
      },
      {
        heading: 'Responding to & Reporting Abuse',
        content: 'If abuse is actively occurring: (1) STOP the abuse; (2) PROTECT the resident from additional abuse; (3) REPORT to a Supervisor. The person observing abuse must immediately report it to the charge nurse. The charge nurse must notify the Nursing Supervisor and/or Director of Nursing immediately. Information to report: the name of the resident; date, time and location; name(s) of person(s) committing the abuse; witnesses; and type of abuse. All reports of abuse will be thoroughly investigated immediately regardless of time of day. All injuries of undetermined origin will also be thoroughly investigated.',
        imageUrl: '/assets/data/images/day-11/IMG_1023.JPEG'
      },
      {
        heading: 'Physical & Chemical Restraints',
        content: 'A restraint is any object, device, garment, material or chemical that restricts a resident\'s freedom of movement or access to one\'s body. Physical restraint examples: leg/arm restraints, vest/jacket restraints, waist belts, geriatric chairs, hand mitts, full side rails, tucking a sheet so tight the resident cannot move, placement of a table in front of a chair the resident cannot move. Chemical restraints are drugs used to prevent a certain behavior or movement — for resident care, not discipline or staff convenience. Examples: antipsychotics (Haldol, Zyprexa, Risperdal, Seroquel), hypnotics (Ativan, Valium, Ambien), antidepressants (Zoloft, Paxil, Celexa).',
        imageUrl: '/assets/data/images/day-11/IMG_1025.JPEG'
      },
      {
        heading: 'Correct Application & Monitoring of Restraints',
        content: 'Restraints are dangerous — improper use and poor supervision have led to injuries and death. Restraints may be necessary to treat a medical condition or ensure safety when a resident is a danger to self or others. Correct application: use the restraint specified in the care plan; apply only after receiving proper instruction; use the correct size; do not use sheets, towels, tape, rope, straps or bandages; use intact restraints only — check for tears, frayed edges, missing straps or damage; position the resident in good body alignment before applying; the restraint should be snug but allow for some movement — a flat hand should slide between the restraint and the resident\'s body.',
        imageUrl: '/assets/data/images/day-11/IMG_1026.JPEG'
      }
    ]
  }
];

const updated = [...topics, ...day11];
writeFileSync(topicsPath, JSON.stringify(updated, null, 2));
console.log('Done. Total topics:', updated.length);
