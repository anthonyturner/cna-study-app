import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const file = resolve('public/assets/data/topics.json');
const topics = JSON.parse(readFileSync(file, 'utf8'));

const idx = topics.findIndex(t => t.id === 'range-of-motion-restorative');
if (idx === -1) { console.error('Topic not found'); process.exit(1); }

topics[idx] = {
  "id": "range-of-motion-restorative",
  "title": "Range of Motion (ROM) Exercises",
  "icon": "accessibility_new",
  "color": "#6A1B9A",
  "summary": "Chapter 34 — Exercise, activity, bed rest complications, positioning devices, types of ROM, step-by-step ROM procedure, and ambulation aids.",
  "day": 10,
  "sections": [
    {
      "heading": "Why Exercise and Activity Matter",
      "content": "Exercise and activity are important for every body system. Physical and mental well-being are affected. The CNA assists the nurse and health team in promoting exercise and activity in all persons to the extent possible. Each care plan and nursing judgment about performing ROM considers the person's activity level and needed exercises.\n\nThe goal is always to:\n• Improve independence for the home setting.\n• Attain the highest level of function possible.\n• Prevent loss of function.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1090.JPEG"
    },
    {
      "heading": "Key Terms — Exercise and Activity",
      "content": "Abduction: Moving a body part away from the midline of the body.\nAdduction: Moving a body part toward the midline of the body.\nAmbulation: The act of walking.\nAtrophy: The decrease in size or wasting away of tissue.\nContracture: Permanent shortening and tightening of a muscle or joint, causing deformity.\nDisuse syndrome: The loss of muscle strength from inactivity.\nDorsiflexion: Standing the foot so the toes point up; bending the foot upward toward the shin.\nExternal rotation: Turning the joint outward.\nFootdrop: The foot falls down at the ankle; permanent plantar flexion.\nHyperextension: Excessive straightening of a body part beyond normal range.\nInternal rotation: Turning the joint inward.\nOrthotic: A device worn on a body part to correct a deformity; keeps the foot plantar-flexed (foot bent downward).\nPlantar flexion: Bending the foot downward at the ankle.\nPronation: Turning the joint downward.\nSupination: Turning the joint upward.\nSyncope: A brief loss of consciousness; fainting.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1090.JPEG"
    },
    {
      "heading": "Bed Rest — Overview and Reasons",
      "content": "Bed rest is ordered for health problems or to limit a change in the person's condition. Common reasons include:\n• Reduce oxygen needs.\n• Reduce swelling.\n• Promote healing.\n• Provide rest.\n\nWhen a person is on bed rest, all of their ADLs (Activities of Daily Living) are done in bed. The person performs some ADLs such as eating, grooming, shaving, and hair care. Bed rest with commode privileges allows use of a bedside commode. Bed rest with bathroom privileges allows the person to use the bathroom for elimination only. Bed rest definitions vary — always ask the nurse what bed rest means for each person.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1091.JPEG"
    },
    {
      "heading": "Complications of Bed Rest",
      "content": "Bed rest and lack of exercise and activity affect every body system. Complications can become life-threatening. These are the major complications to know and observe for:\n\nOrthostatic (Postural) Hypotension: Abnormally low blood pressure occurring when moving from lying to sitting or standing positions. The person is dizzy, weak, and may faint. When position changes are needed, change positions slowly and allow the person to sit at the edge of the bed before standing.\n\nAtrophy: A decrease in size — muscles atrophy (shrink) and weaken from inactivity. The condition begins in as little as one day of bed rest. Atrophy occurs most often in the neck, elbows, wrists, ankles, toes, and fingers.\n\nContracture: When a muscle shortens, it pulls on the joint and the joint deforms and loses its range of motion. The contracture becomes permanent without proper range-of-motion exercises, positioning, and splints.\n\nPressure injuries, urinary tract infections, kidney stones (renal calculi), constipation, fecal impaction, and pneumonia (inflammation of the lungs) are also complications of prolonged bed rest.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1091.JPEG"
    },
    {
      "heading": "Positioning Devices",
      "content": "Positioning devices maintain body alignment and prevent complications from bed rest. The nurse and care plan guide their use.\n\nBed board: Placed under the mattress to prevent the mattress from sagging. Bed boards are covered with canvas or other material. Used for persons with back problems.\n\nFoot board: A board placed upright at the foot end of the mattress. Keeps the feet in proper alignment (dorsiflexion) and prevents footdrop. Keep feet flat against it.\n\nTrochanter roll: Made from a bath blanket; prevents the hip and legs from turning outward (external rotation). The flat part is placed under the person from the hip to the knee.\n\nHand roll: Keeps the thumb in the opposite position to the fingers. Prevents contractures of the thumbs, fingers, and wrists. Foam finger cushions are also used.\n\nHip abduction wedge: Placed between the legs to keep them separated (abducted); commonly used after hip replacement surgery.\n\nSplint: A device used to prevent contractures and keep a body part in proper position. Applied to the hands, fingers, and wrists. Always check the skin under a splint for redness, irritation, or pressure areas.\n\nBed cradle: A frame placed on the bed and over the person to keep the weight of top linens off the feet and legs. Heavy top linens can cause footdrop and pressure injuries.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1093.JPEG"
    },
    {
      "heading": "What is Range of Motion (ROM)?",
      "content": "Range of motion (ROM) is the movement of a joint through its full extent without causing resistance or pain. ROM programs support mobility and circulation. Doctors may order ROM as part of a restorative care plan.\n\nExercise helps prevent contractures, atrophy, and disuse syndrome. Some exercise needs are for muscles and muscle groups. A trapeze is used for exercises to lift the trunk of the body from the bed and to transfer.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1094.JPEG"
    },
    {
      "heading": "Types of ROM",
      "content": "Active ROM (AROM): The resident performs all the movement independently. Joints, bones, ligaments, and muscles all receive the benefit. Examples include bathing, eating, grooming, dressing, and other ADLs.\n\nPassive ROM (PROM): The CNA provides all the movement while the resident relaxes completely. This is done when a person cannot move one or more body parts. Persons on bed rest need passive ROM or may benefit from transfer themselves because of illness or injury.\n\nActive-Assistive ROM (AAROM): The resident does part of the movement and the CNA assists with the rest.\n\nFocus on Children: Children do active ROM through play. Batting a balloon, throwing a ball, painting, playing \"set a price\" or \"Simon Says\" games, riding a bicycle, playing basketball with bean bags, or washing dishes all promote ROM.\n\nFocus on Older Persons: When not done correctly, ROM can injure a person. Older persons may resist exercise. Understanding what is happening, they may fear harm. Some may become agitated. Stay calm and ask the nurse for help. Follow the care plan.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1094.JPEG"
    },
    {
      "heading": "Delegation Guidelines for ROM",
      "content": "Performing range-of-motion exercises may be a routine nursing task or it may require RN assessment. When ROM is delegated, you need the following information:\n• Which joints are active, passive, or active-assistive.\n• Which motions to perform for each joint.\n• How many times to repeat each exercise.\n• What observations to report and record:\n  — The time the exercises were performed.\n  — The joints exercised and the exercises performed.\n  — The number of times each exercise was performed on each joint.\n  — Complaints of pain or signs of stiffness or spasm.\n  — How the joint or body part moved.\n  — How much the person took part in the exercise.\n  — What patient or resident concerns to report at once.\n\nSafety: Incorrect ROM can injure a person if not done correctly. Muscle spasms and pain are possible. Practice the measures in Box 34-1 to protect the person. Tell the person what you are doing.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1095.JPEG"
    },
    {
      "heading": "Performing ROM — Step-by-Step Procedure",
      "content": "Before the procedure:\n1. Knock before entering the room.\n2. Address the person correctly and introduce yourself.\n3. Identify the person (check ID bracelet/MDS identifiers).\n4. Explain the procedure. Follow Delegation Guidelines.\n\nDuring the procedure:\n5. Lower the bed rail near you if up.\n6. Position the person supine.\n7. Cover the person with a bath blanket; fan-fold linens to the foot of the bed.\n8. Exercise the joint if allowed by your agency. If the nurse instructs you to do so, follow the care plan.\n9. Place your hands over the rails to support the head.\n10. Support the joint being exercised.\n11. Perform head and neck exercises: flexion (bring the chin forward until it touches the chest), extension (return the head to the upright position), hyperextension (tilt the head back as far as possible), lateral flexion (tilt the head to the right and to the left), rotation (turn the head from side to side).\nRepeat flexion, extension, hyperextension, lateral flexion, and lateral rotation 5 times — or the number of times stated on the care plan.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1095.JPEG"
    },
    {
      "heading": "ROM Exercises — Shoulder",
      "content": "Support the wrist with one hand and support the elbow with the other hand.\n\nFlexion: Move the straight arm up in front and over the head.\nExtension: Return the arm straight out in front and back down to the side of the body. Do this with the arm straight (not in a raised position).\nHyperextension: Move the arm back behind the body as far as possible.\nAbduction: Move the straight arm away from the side of the body to shoulder level.\nAdduction: Move the straight arm to the side of the body.\nInternal rotation: Bend the elbow at a right angle with the upper arm at shoulder level, fingers pointing up. Move the forearm down so the fingers point to the floor.\nExternal rotation: Move the forearm up so the fingers point toward the head.\nRepeat flexion, extension, hyperextension, abduction, adduction, and internal and external rotation 5 times — or the number stated on the care plan.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1096.JPEG"
    },
    {
      "heading": "ROM Exercises — Elbow & Wrist",
      "content": "Elbow: Support the wrist with one hand and the elbow with the other.\nFlexion: Bend the arm so the fingers touch the shoulder.\nExtension: Straighten the arm.\nPronation: Turn the hand so the palm faces down.\nSupination: Turn the hand so the palm faces up.\n\nWrist: Hold the person's wrist with one hand. Use the other hand to perform exercises.\nFlexion: Bend the hand down (toward the inner wrist).\nExtension: Bend the hand back (toward the outer wrist).\nHyperextension: Bend the hand back as far as possible.\nRadial flexion: Bend the wrist toward the thumb.\nUlnar flexion: Bend the wrist toward the little finger.\nRepeat each exercise 5 times or as stated on the care plan.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1096.JPEG"
    },
    {
      "heading": "ROM Exercises — Hip & Knee",
      "content": "Hip: Place one hand under the knee and the other under the ankle.\nFlexion: Raise the leg toward the chest (bend at the hip and knee).\nExtension: Lower the leg, straighten at the hip and knee.\nHyperextension: Move the leg behind the body (turn person to prone).\nAbduction: Move the leg away from the body.\nAdduction: Move the leg toward and across the body.\nInternal rotation: Roll the leg inward (pigeon-toed direction).\nExternal rotation: Roll the leg outward.\n\nKnee: Keep one hand under the knee and move the lower leg.\nFlexion: Bend the knee toward the buttocks (heel toward the back of the thigh).\nExtension: Straighten the knee — lower the leg flat to the bed.\nRepeat each motion 5 times or as stated on the care plan.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1096.JPEG"
    },
    {
      "heading": "ROM Exercises — Ankle, Foot & Toes",
      "content": "Ankle: Support the ankle with one hand and hold the foot with the other.\nDorsiflexion: Pull the foot upward toward the shin — toes point up toward the ceiling.\nPlantar flexion: Point the foot downward — toes point away from the body.\nInversion: Turn the foot inward (sole facing the opposite foot).\nEversion: Turn the foot outward (sole facing away).\n\nToes: Hold the foot with one hand; use the other hand for exercises.\nFlexion: Curl all toes downward.\nExtension: Straighten all toes.\nAdduction: Bring all toes together.\nAbduction: Spread all toes apart.\n\nRepeat each motion 5 times or as stated on the care plan. Footdrop prevention: always keep the feet in dorsiflexion using foot boards or splints when the person is resting.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1097.JPEG"
    },
    {
      "heading": "Ambulation — Walking Aids",
      "content": "Ambulation is the act of walking. Some people need help walking. They may be weak or unsteady from bed rest, illness, surgery, or injury. Walkers and canes are common devices for safety. Sometimes crutches are used. The walking aid ordered depends on the person's condition, the support needed, and type of disability. A physical therapist (PT) teaches the person how to use the device.\n\nCanes: Canes are used for weakness on one side of the body. They provide balance and support. Single-tip and four-point canes are common. A four-point cane gives more support than a single-tip cane but is harder to move.\n• Proper grip is 6-10 inches to the side of the strong foot.\n• The cane is level with the hip on the strong side.\n• Step 1: Move the cane (on the strong side) forward 6-10 inches.\n• Step 2: Move the weak leg forward even with the cane.\n• Step 3: Move the strong leg forward ahead of the cane and the weak leg.\n\nWalkers: A walker gives more support than a cane. Wheels on the front legs and rubber tips on the back legs prevent the walker from moving while the person is standing. The person pushes the walker about 6-8 inches in front of their feet. Baskets, pouches, and trays can attach to allow the person to carry needed items hands-free.",
      "imageUrl": "/assets/data/images/range-of-motion/IMG_1097.JPEG"
    }
  ]
};

writeFileSync(file, JSON.stringify(topics, null, 2));
console.log('ROM topic updated with', topics[idx].sections.length, 'sections.');
