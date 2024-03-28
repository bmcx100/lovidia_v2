export interface SymptomDataType {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  symptoms: string[];
  treatmentOptions: TreatmentOptionType[];
  medications: MedicationType[];
}

export interface TreatmentOptionType {
  id: string;
  heading: string;
  detail: string;
}

export interface MedicationType {
  id: string;
  heading: string;
  detail: string;
}

export const SymptomsData = [
  {
    id: "brain-fog",
    title: "Brain Fog",
    imgUrl: "brainfog.png",
    description:
      "People experiencing brain fog often feel mentally drained and struggle with various cognitive functions...",
    symptoms: [
      "Unusual forgetfulness: Difficulty recalling names, dates, where you placed your keys, and other important information.",
      "Fuzzy memory or sluggishness: A sense of mental haziness when trying to remember things.",
      "Difficulty paying attention or focusing: Challenges in maintaining concentration.",
      "Confusion or spaciness: Feeling mentally disoriented.",
      "Challenges with processing information: Struggling to process and comprehend new data.",
    ],
    treatmentOptions: [
      {
        id: "take-a-break",
        heading: "Take a Real Break",
        detail:
          "Stepping away from a task and giving your brain a break can enhance performance and focus. Try meditation, calling a friend, taking a nap, or doing something creative.",
      },
      {
        id: "challenge-brain",
        heading: "Challenge Your Brain",
        detail:
          "Stimulate cognitive health with activities like reading, crossword puzzles, playing memory-enhancing games, learning new skills or languages, and playing musical instruments.",
      },
      {
        id: "physical-exercise",
        heading: "Physical Exercise",
        detail:
          "Regular physical activity improves brain health. Include aerobic exercises, strength training, and stretching to increase blood flow to the brain and enhance cognitive function.",
      },
      {
        id: "stay-connected",
        heading: "Stay Socially Connected",
        detail:
          "Maintaining social interactions helps keep the brain sharp. Engage in conversations, join clubs, or participate in group activities.",
      },
      {
        id: "mindfulness-relaxation",
        heading: "Mindfulness and Relaxation Techniques",
        detail:
          "Reduce stress and improve focus with mindfulness meditation, deep breathing exercises, and progressive muscle relaxation.",
      },
    ],
    medications: [
      {
        id: "otc-pain-relief",
        heading: "Over-the-counter pain relief",
        detail:
          "Medications like Ibuprofen (Advil, Motrin IB), Naproxen (Aleve), Acetaminophen (Tylenol), and Aspirin can temporarily relieve pain associated with headaches.",
      },
    ],
  },
  {
    id: "chronic-fatigue-syndrome",
    title: "Chronic Fatigue Syndrome",
    imgUrl: "fatigue.png",
    description:
      "Chronic Fatigue Syndrome (CFS), also known as myalgic encephalomyelitis (ME), is a complex and long-term disorder characterized by profound fatigue that persists despite adequate rest...",
    symptoms: [
      "Malaise: A general feeling of discomfort or illness.",
      "Body pain: Muscular and joint pain.",
      "Poor concentration and memory loss.",
      "Sore throat.",
      "Tender lymph nodes.",
      "Headache.",
      "Dizziness that worsens with moving from lying down or sitting to standing.",
      "Sleep disturbances.",
      "Extreme exhaustion lasting more than a day following physical or mental activity",
    ],
    treatmentOptions: [
      {
        id: "cbt",
        heading: "Cognitive Behavioral Therapy (CBT)",
        detail:
          "A professional counselor helps individuals improve daily activities and lifestyle.",
      },
      {
        id: "graded-exercise",
        heading: "Graded Exercise Program",
        detail:
          "Gradually increasing exercise intensity and duration to build tolerance for physical activity.",
      },
      {
        id: "relaxation-techniques",
        heading: "Relaxation Techniques",
        detail: "Practices like yoga and meditation can reduce stress.",
      },
      {
        id: "regular-exercise",
        heading: "Maintain Regular Exercise",
        detail:
          "Pacing oneself during both mental and physical exertion aids recovery.",
      },
      {
        id: "limit-caffeine",
        heading: "Limit Caffeine Intake",
        detail: "To prevent insomnia.",
      },
      {
        id: "sleep-routine",
        heading: "Establish a Sleep Routine",
        detail:
          "Helps in regularizing sleep patterns and improving sleep quality.",
      },
      {
        id: "manage-stress",
        heading: "Manage Physical and Emotional Stress",
        detail:
          "Implementing strategies to manage stress can alleviate some symptoms of CFS.",
      },
      {
        id: "avoid-refined-carbs",
        heading: "Avoid processed and refined carbohydrates",
        detail: "Eating a healthy diet can help manage symptoms.",
      },
    ],
    medications: [
      {
        id: "ibuprofen",
        heading: "Ibuprofen",
        detail: "Advil, Motrin or by prescription, used for pain relief.",
      },
      {
        id: "naproxen",
        heading: "Naproxen",
        detail: "Aleve, or prescription, used for pain relief.",
      },
    ],
  },
  {
    id: "depression",
    title: "Depression",
    imgUrl: "depression.png",
    description:
      "Depression, often occurring in the wake of persistent anxiety, is a profound and pervasive mood disorder. It engulfs individuals in a persistent state of sadness, hopelessness, and emotional numbness. Unlike anxiety, which is characterized by excessive worry and fear, depression manifests as a deep sense of despair, affecting one’s thoughts, feelings, and physical well-being...",
    symptoms: [
      "Persistent Sadness: Feeling down, hopeless, and sad most of the time.",
      "Loss of Interest: Losing interest in activities once enjoyed.",
      "Changes in Appetite: Significant weight loss or gain due to altered eating habits.",
      "Fatigue: Feeling tired and lacking energy.",
      "Sleep Problems: Insomnia or hypersomnia.",
      "Feelings of Guilt or Worthlessness: Believing one is a burden or unworthy.",
      "Difficulty Concentrating: Impaired focus and memory.",
    ],
    treatmentOptions: [
      {
        id: "psychotherapy",
        heading: "Psychotherapy (Talk Therapy)",
        detail:
          "Includes Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and Mindfulness-Based Cognitive Therapy (MBCT) to address negative thought patterns, improve relationships, and prevent depression relapse.",
      },
      {
        id: "lifestyle-changes",
        heading: "Lifestyle Changes",
        detail:
          "Regular exercise, a healthy diet, good sleep hygiene, and avoiding alcohol and substance abuse can improve mental health.",
      },
      {
        id: "social-support",
        heading: "Social Support",
        detail:
          "Connecting with friends, family, or support groups to alleviate feelings of isolation. Pets can also provide emotional support.",
      },
      {
        id: "self-care",
        heading: "Self-Care Practices",
        detail:
          "Mindfulness and relaxation techniques, engaging in creative outlets, and journaling can be therapeutic.",
      },
    ],
    medications: [
      {
        id: "ssris",
        heading: "Selective Serotonin Reuptake Inhibitors (SSRIs)",
        detail:
          "First-line treatment for depression, increasing serotonin levels in the brain. Examples include Fluoxetine (Prozac), Citalopram (Celexa), and Sertraline (Zoloft).",
      },
      {
        id: "snris",
        heading: "Serotonin and Norepinephrine Reuptake Inhibitors (SNRIs)",
        detail:
          "Impact both serotonin and norepinephrine levels, used for depression and pain management. Examples are Venlafaxine (Effexor) and Duloxetine (Cymbalta).",
      },
      {
        id: "bupropion",
        heading: "Bupropion (Wellbutrin)",
        detail:
          "An atypical antidepressant affecting dopamine and norepinephrine, used for patients concerned about sexual side effects or weight gain with other medications.",
      },
      {
        id: "tcas",
        heading: "Tricyclic Antidepressants (TCAs)",
        detail:
          "Less commonly prescribed due to side effects, but effective for certain individuals. Examples include Amitriptyline and Nortriptyline.",
      },
      {
        id: "vortioxetine",
        heading: "Vortioxetine (Trintellix)",
        detail:
          "A newer antidepressant affecting serotonin receptors, helpful when other options haven’t worked well.",
      },
      {
        id: "agomelatine",
        heading: "Agomelatine",
        detail:
          "Acts on melatonin and serotonin receptors, a unique mechanism of action not as widely used.",
      },
    ],
  },
  {
    id: "dyspnea",
    title: "Dyspnea",
    imgUrl: "brainfog.png",
    description:
      "Dyspnea, known as shortness of breath, is the sensation that you can’t get enough air into your lungs. It might feel like your chest is tight, you’re gasping for air, or you’re working harder to breathe. Dyspnea can be a symptom of underlying conditions, such as heart and lung problems, asthma, allergies, anxiety, or Chronic obstructive pulmonary disease (COPD). Acute Dyspnea arrives suddenly and is short-term, while Chronic Dyspnea persists for longer periods, often due to underlying health conditions.",
    symptoms: [
      "Out of Breath: Feeling like you can’t catch your breath or get enough air.",
      "Tightness in Your Chest: Sensation of constriction or pressure.",
      "Air Hunger: Feeling hungry for air, as if not getting enough oxygen.",
      "Inability to Breathe Deeply: Experienced during mild exertion, unable to take deep breaths.",
      "Suffocation: Feeling of being unable to breathe properly.",
      "Heart Palpitations: Irregular or rapid heartbeats.",
      "Coughing: Sometimes accompanied by coughing.",
    ],
    treatmentOptions: [
      {
        id: "stop-smoking",
        heading: "Stop Smoking",
        detail: "Quitting smoking can significantly improve lung function.",
      },
      {
        id: "avoid-pollutants-allergens",
        heading: "Avoid Pollutants and Allergens",
        detail: "Minimize exposure to environmental toxins and allergens.",
      },
      {
        id: "weight-management",
        heading: "Weight Management",
        detail:
          "Losing weight can alleviate strain on the respiratory system if overweight.",
      },
      {
        id: "avoid-high-altitude",
        heading: "Avoid Exertion at High Elevations",
        detail: "High altitudes can exacerbate dyspnea.",
      },
      {
        id: "address-conditions",
        heading: "Heart and Lung Conditions",
        detail:
          "Addressing heart failure, COPD, asthma, or other specific issues is crucial.",
      },
      {
        id: "treat-anemia",
        heading: "Anemia",
        detail:
          "Treating low red blood cell levels can improve oxygen transport.",
      },
    ],
    medications: [
      {
        id: "bronchodilators",
        heading: "Bronchodilators",
        detail:
          "Help relax the airway muscles, such as albuterol and ipratropium.",
      },
      {
        id: "steroids",
        heading: "Steroids (Corticosteroids)",
        detail: "Medications like Prednisone to reduce inflammation.",
      },
      {
        id: "anticoagulants",
        heading: "Anticoagulants",
        detail:
          "Including Enoxparin (Lovenox), warfarin (Coumadin), and heparin to prevent blood clots.",
      },
    ],
  },
  {
    id: "fibromyalgia-muscle-soreness",
    title: "Fibromyalgia / Muscle Soreness",
    imgUrl: "brainfog.png",
    description:
      "Chronic muscle soreness often presents as a persistent discomfort that extends beyond the typical post-exercise muscle ache. Myofascial Pain Syndrome (MPS) is long-term pain that affects specific muscles and the thin connective tissue (fascia) surrounding them. Fibromyalgia involves chronic, widespread pain, affecting muscles, tendons, and ligaments, leading to exhaustion, impaired attention, and reduced mental clarity.",
    symptoms: [
      "Deep, Aching Pain: The pain is often described as a deep ache within the affected muscle.",
      "Persistent Discomfort: Constant burning feeling and functional interruption.",
      "Tender Knots: Palpable knots or tender areas develop within the muscle.",
      "Sleep Disturbances: Pain can interfere with sleep quality.",
      "General Malaise and Fatigue: Feel unwell overall.",
    ],
    treatmentOptions: [
      {
        id: "exercise",
        heading: "Exercise",
        detail: "Gentle movement and stretching.",
      },
      {
        id: "massage",
        heading: "Massage",
        detail: "Targeted massage therapy can relax tense muscles.",
      },
      {
        id: "physical-therapy",
        heading: "Physical Therapy",
        detail: "Strengthening exercises restore muscle function.",
      },
      {
        id: "heat-therapy",
        heading: "Heat",
        detail:
          "Apply directly to the sore area, warm bath, shower, therapeutic spa.",
      },
    ],
    medications: [
      {
        id: "nsaids",
        heading: "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)",
        detail: "Ibuprofen (Advil, Motrin IB) and Aleve (naproxen sodium).",
      },
      {
        id: "prescription-nsaid",
        heading: "Prescription NSAID",
        detail:
          "Celecoxib (Celebrex), Diclofenac (Voltaren), Fenoprofen (Nalfron), Indomethacin (Indocin).",
      },
      {
        id: "tramadol",
        heading: "Fibromyalgia Medication",
        detail: "Tramadol: An opioid analgesic helps alleviate pain.",
      },
      {
        id: "amitriptyline",
        heading: "Amitriptyline",
        detail:
          "A tricyclic antidepressant that addresses pain and improves sleep quality.",
      },
    ],
  },
  {
    id: "irritable-bowel-syndrome-ibs",
    title: "Irritable Bowel Syndrome (IBS)",
    imgUrl: "ibs.png",
    description:
      "Irritable bowel syndrome (IBS) is a chronic condition and one of the symptoms now being experienced by those with Long Covid. It can cause extreme discomfort, affecting daily functions and ability to work, characterized by 3-6 washroom visits per day. IBS affects the stomach and intestines, leading to symptoms like cramping, abdominal pain, bloating, gas, and changes in bowel habits.",
    symptoms: [
      "Abdominal Pain and Cramping: Discomfort or pain in the abdominal area, often relieved after a bowel movement.",
      "Bloating and Gas: Common symptoms leading to discomfort and fullness.",
      "Changes in Bowel Habits: Alternations between diarrhea and constipation, affecting stool frequency and appearance.",
      "Indigestion: Feelings of discomfort, fullness, or burning in the upper abdomen.",
      "Mucus in Stool: Presence of mucus in the stool.",
    ],
    treatmentOptions: [
      {
        id: "dietary-modifications",
        heading: "Dietary Modifications",
        detail:
          "Low-FODMAP diet to reduce fermentable carbohydrates, avoiding trigger foods, and increasing soluble fiber intake.",
      },
      {
        id: "lifestyle-changes",
        heading: "Lifestyle Changes",
        detail:
          "Stress management techniques, regular exercise, and adequate hydration to improve gut health.",
      },
      {
        id: "psychological-therapies",
        heading: "Psychological Therapies",
        detail:
          "Cognitive Behavioral Therapy (CBT) for stress and anxiety, and hypnotherapy to reduce symptoms.",
      },
      {
        id: "consult-healthcare",
        heading: "Consult a Healthcare Provider",
        detail:
          "Seek professional advice for personalized treatment recommendations.",
      },
    ],
    medications: [
      {
        id: "antispasmodic-agents",
        heading: "Antispasmodic Agents",
        detail: "Medications to relieve abdominal cramps and pain.",
      },
      {
        id: "laxatives-antidiarrheals",
        heading: "Laxatives or Antidiarrheals",
        detail:
          "Used depending on whether constipation or diarrhea is predominant.",
      },
      {
        id: "probiotics",
        heading: "Probiotics",
        detail: "Certain strains may improve gut health.",
      },
      {
        id: "peppermint-oil",
        heading: "Peppermint Oil",
        detail:
          "Known for antispasmodic properties to help relieve IBS symptoms.",
      },
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety",
    imgUrl: "anxiety.png",
    description:
      "Anxiety is a multifaceted emotional state characterized by intense, excessive, and persistent worry and fear about everyday situations. It involves a complex interplay of mental and physiological responses, leading to apprehensive uneasiness and nervousness.",
    symptoms: [
      "Excessive Worry: Persistent worry about various aspects of life, even without immediate threat.",
      "Restlessness: Feeling on edge, unable to relax, experiencing inner tension.",
      "Physical Symptoms: Muscle tension, trembling, sweating, racing heart.",
      "Irrational Fears: Intense fear of specific situations or objects.",
      "Avoidance: Avoiding situations or places that trigger anxiety.",
      "Sleep Disturbances: Difficulty sleeping due to anxious thoughts.",
      "Difficulty Concentrating: Inability to focus due to racing thoughts.",
    ],
    treatmentOptions: [
      {
        id: "psychotherapy",
        heading: "Psychotherapy (Talk Therapy)",
        detail:
          "Includes Cognitive Behavioral Therapy (CBT), Interpersonal Therapy, and Problem-Solving Therapy to identify and modify negative thought patterns and enhance coping skills.",
      },
      {
        id: "self-care-lifestyle",
        heading: "Self-Care and Lifestyle Changes",
        detail:
          "Regular exercise, healthy diet, adequate sleep, relaxation techniques, and social support.",
      },
      {
        id: "therapy-medication-combination",
        heading: "Combination of Psychotherapy and Medication",
        detail: "Using both psychotherapy and medication to treat anxiety.",
      },
    ],
    medications: [
      {
        id: "ssris",
        heading: "Selective Serotonin Reuptake Inhibitors (SSRIs)",
        detail:
          "Commonly prescribed for anxiety, SSRIs include Sertraline (Zoloft), Fluoxetine (Prozac), Citalopram (Celexa), Escitalopram (Lexapro).",
      },
      {
        id: "benzodiazepines",
        heading: "Benzodiazepines",
        detail:
          "Provide quick relief but have dependence potential. Includes Alprazolam (Xanax), Lorazepam (Ativan), Diazepam (Valium).",
      },
      {
        id: "other-medications",
        heading: "Other Medications",
        detail:
          "Buspirone (BuSpar), Cannabidiol (CBD), SNRIs like Duloxetine (Cymbalta) and Venlafaxine (Effexor XR), TCAs, and Beta-Blockers for managing symptoms.",
      },
    ],
  },
  {
    id: "post-orthostatic-tachycardia-syndrome-pots",
    title: "Post Orthostatic Tachycardia Syndrome (POTS)",
    imgUrl: "brainfog.png",
    description:
      "Postural Orthostatic Tachycardia Syndrome (POTS) is a blood circulation disorder that can be disruptive to daily life. It presents physical, social, and emotional challenges, with symptoms like lightheadedness, brain fog, and fatigue. The condition may be linked to autoimmune disorders and requires careful management.",
    symptoms: [
      "Lightheadedness and Fainting: Sudden lightheadedness upon standing, potentially leading to fainting.",
      "Brain Fog: Persistent mental fogginess affecting concentration and cognitive function.",
      "Fatigue: Overwhelming exhaustion that can occur even after minimal exertion.",
      "Exercise Intolerance: Difficulty in maintaining an exercise routine due to symptom triggers.",
      "Headaches and Blurry Vision: Impacting focus and daily activities.",
    ],
    treatmentOptions: [
      {
        id: "self-care",
        heading: "Self-care Practices",
        detail:
          "Includes staying hydrated, increasing salt intake, wearing compression stockings, practicing endurance therapy, getting up slowly, and managing meal size to prevent blood pressure drops.",
      },
      {
        id: "avoiding-triggers",
        heading: "Avoiding Triggers",
        detail:
          "Identifying and avoiding triggers like heat, stress, or certain foods is crucial.",
      },
    ],
    medications: [
      {
        id: "fludrocortisone",
        heading: "Fludrocortisone (corticosteroids)",
        detail:
          "Helps the body retain sodium, aiding in blood pressure management.",
      },
      {
        id: "atenolol",
        heading: "Atenolol (beta blockers)",
        detail: "Decreases heart rate, useful in managing POTS symptoms.",
      },
      {
        id: "midodrine",
        heading: "Midodrine (vasopressors)",
        detail:
          "Narrows blood vessels and acts as an anti-hypotensive, helping to manage low blood pressure in POTS.",
      },
    ],
  },
];
