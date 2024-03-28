export interface SymptomListType {
  listId: string;
  listTitle: string;
  listDetails: string;
}

export interface SymptomDataType {
  title: string;
  url: string;
  generalDescription: string;
  symptomsDescription: string;
  symptomsList: SymptomListType[];
  treatments: TreatmentsListType[];
}

export interface TreatmentsListType {
  treatmentTitle: string;
  treatmentDetails: TreatmentDetailsType[];
}

interface TreatmentDetailsType {
  treatmentDetailTitle: string;
  treatmentDetailCopy: string;
}

export interface MedicationListType {
  medicationId: string;
  medicationTitle: string;
  medicationDetails: string;
}

export const symptomsData: SymptomDataType[] = [
  {
    title: "Irritable Bowel",
    url: "ibs.png",
    generalDescription:
      "Irritable bowel syndrome (IBS) is a chronic condition and one of the symptoms now being experienced by those with Long Covid. It can cause extreme discomfort, affect daily functions and ability to work having 3-6 washroom visits. IBS is described by the Mayo Clinic as a disorder that affects the stomach and intestines, also called the gastrointestinal tract. Symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both. IBS is a chronic condition that you’ll need to manage long term.",
    symptomsDescription:
      "Irritable Bowel Syndrome (IBS) is a common gastrointestinal disorder that affects the stomach and intestines. Here are the typical symptoms associated with IBS:",
    symptomsList: [
      {
        listId: "1",
        listTitle: "Abdominal Pain and Cramping:",
        listDetails:
          "Individuals with IBS often experience discomfort or pain in the abdominal area. The pain can vary in intensity and may be relieved after a bowel movement.",
      },
      {
        listId: "2",
        listTitle: "Bloating and Gas:",
        listDetails:
          "Bloating and excess gas in the abdomen are common symptoms. This can lead to discomfort and a feeling of fullness.",
      },
      {
        listId: "3",
        listTitle: "Changes in Bowel Habits",
        listDetails:
          "IBS can cause alterations in how often you have bowel movements and the appearance of your stool. Some people may experience diarrhea, while others may have constipation. In some cases, symptoms alternate between diarrhea and constipation.",
      },
      {
        listId: "4",
        listTitle: "Indigestion:",
        listDetails:
          "Individuals with IBS may experience indigestion, which can include feelings of discomfort, fullness, or burning in the upper abdomen.",
      },
      {
        listId: "5",
        listTitle: "Mucus in Stool:",
        listDetails: " Some people with IBS notice mucus in their stool.]",
      },
    ],
    treatments: [
      {
        treatmentTitle: "Dietary Modifications:",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Low-FODMAP Diet:",
            treatmentDetailCopy:
              "Reducing fermentable carbohydrates (FODMAPs) can help alleviate symptoms.",
          },
          {
            treatmentDetailTitle: "Avoid Trigger Foods:",
            treatmentDetailCopy:
              "Identifying and avoiding specific foods that worsen symptoms.",
          },
          {
            treatmentDetailTitle: "Fiber:",
            treatmentDetailCopy:
              "Gradually increasing soluble fiber intake may improve bowel regularity.",
          },
        ],
      },
      {
        treatmentTitle: "Lifestyle Changes:",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Stress Management:",
            treatmentDetailCopy:
              "Stress reduction techniques such as meditation, yoga, or deep breathing exercises.",
          },
          {
            treatmentDetailTitle: "Regular Exercise:",
            treatmentDetailCopy:
              "Physical activity can promote better digestion and reduce stress.",
          },
          {
            treatmentDetailTitle: "Adequate Hydration:",
            treatmentDetailCopy:
              "Staying hydrated is essential for overall gut health.",
          },
        ],
      },

      {
        treatmentTitle: "Medications",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Antispasmodic Agents",
            treatmentDetailCopy:
              "These help relieve abdominal cramps and pain.",
          },
          {
            treatmentDetailTitle: "Laxatives or Antidiarrheals",
            treatmentDetailCopy:
              "Depending on predominant symptoms (constipation or diarrhea).",
          },
          {
            treatmentDetailTitle: "Probiotics",
            treatmentDetailCopy: "Some strains may improve gut health.",
          },
          {
            treatmentDetailTitle: "Peppermint Oil",
            treatmentDetailCopy: "Known for its antispasmodic properties.",
          },
        ],
      },
      {
        treatmentTitle: "Psychological Therapies",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Cognitive Behavioral Therapy (CBT)",
            treatmentDetailCopy:
              "Helps manage stress and anxiety related to IBS.",
          },
          {
            treatmentDetailTitle: "Hypnotherapy",
            treatmentDetailCopy:
              "May reduce symptoms and improve quality of life.",
          },
        ],
      },
      {
        treatmentTitle: "Consult a Healthcare Provider",
        treatmentDetails: [
          {
            treatmentDetailTitle: "",
            treatmentDetailCopy:
              "Always seek professional advice for personalized treatment recommendations.",
          },
        ],
      },
    ],
  },
  {
    title: "Anxiety",
    url: "anxiety.png",
    generalDescription:
      "Anxiety is a multifaceted emotional state that encompasses both mental and physical aspects. It is characterized by intense, excessive, and persistent worry and fear about everyday situations. People with anxiety often experience heightened arousal, apprehension, and distressing thoughts, which can be triggered by real or imagined dangers. Physically, anxiety activates various body systems, preparing the individual to respond to perceived threats. In summary, anxiety involves a complex interplay of mental and physiological responses, leading to apprehensive uneasiness and nervousness.",
    symptomsDescription: "Symptoms of Anxiety:",
    symptomsList: [
      {
        listId: "1",
        listTitle: "Excessive Worry:",
        listDetails:
          "Persistent and uncontrollable worry about various aspects of life, even when there is no immediate threat.",
      },
      {
        listId: "2",
        listTitle: "Restlessness:",
        listDetails:
          "Feeling on edge, unable to relax, and experiencing inner tension.",
      },
      {
        listId: "3",
        listTitle: "Physical Symptoms:",
        listDetails:
          "These may include muscle tension, trembling, sweating, and a racing heart.",
      },
      {
        listId: "4",
        listTitle: "Irrational Fears:",
        listDetails:
          "Intense fear of specific situations or objects (phobias).",
      },
      {
        listId: "5",
        listTitle: "Avoidance:",
        listDetails: "Avoiding situations or places that trigger anxiety.",
      },
      {
        listId: "6",
        listTitle: "Sleep Disturbances:",
        listDetails:
          "Difficulty falling asleep or staying asleep due to anxious thoughts.",
      },
      {
        listId: "7",
        listTitle: "Difficulty Concentrating:",
        listDetails:
          "Inability to focus or concentrate due to racing thoughts.",
      },
    ],
    treatments: [
      {
        treatmentTitle: "Psychotherapy (Talk Therapy):",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Cognitive Behavioral Therapy (CBT):",
            treatmentDetailCopy:
              "Helps identify and modify negative thought patterns.",
          },
          {
            treatmentDetailTitle: "Interpersonal Therapy:",
            treatmentDetailCopy:
              "Focuses on improving relationships and communication.",
          },
          {
            treatmentDetailTitle: "Problem-Solving Therapy:",
            treatmentDetailCopy: "Aims to enhance coping skills.",
          },
        ],
      },
      {
        treatmentTitle: "Medications:",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Antidepressants:",
            treatmentDetailCopy:
              "Selective Serotonin Reuptake Inhibitors (SSRIs), Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs), Tricyclic Antidepressants, Beta-Blockers, and Monoamine Oxidase Inhibitors (used less frequently).",
          },
        ],
      },
      {
        treatmentTitle: "Self-Care and Lifestyle Changes:",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Regular Exercise:",
            treatmentDetailCopy: "Helps reduce symptoms.",
          },
          {
            treatmentDetailTitle: "Healthy Diet:",
            treatmentDetailCopy: "Proper nutrition impacts mental health.",
          },
          {
            treatmentDetailTitle: "Adequate Sleep:",
            treatmentDetailCopy: "Prioritize good sleep habits.",
          },
          {
            treatmentDetailTitle: "Relaxation Techniques:",
            treatmentDetailCopy:
              "Practice mindfulness, meditation, and deep breathing.",
          },
          {
            treatmentDetailTitle: "Social Support:",
            treatmentDetailCopy: "Spend time with loved ones.",
          },
        ],
      },
      {
        treatmentTitle: "Medications Anxiety:",
        treatmentDetails: [
          {
            treatmentDetailTitle:
              "Selective Serotonin Reuptake Inhibitors (SSRIs):",
            treatmentDetailCopy:
              "Commonly prescribed for anxiety, include medications like Sertraline (Zoloft), Fluoxetine (Prozac), Citalopram (Celexa), and Escitalopram (Lexapro).",
          },
          {
            treatmentDetailTitle: "Benzodiazepines:",
            treatmentDetailCopy:
              "Provide quick relief for anxiety symptoms but have potential for dependence, include Alprazolam (Xanax), Lorazepam (Ativan), and Diazepam (Valium).",
          },
          {
            treatmentDetailTitle: "Other Medications:",
            treatmentDetailCopy:
              "Include Buspirone (BuSpar), Cannabidiol (CBD), SNRIs like duloxetine (Cymbalta) and venlafaxine (Effexor XR), Tricyclic Antidepressants (TCAs), and Beta-Blockers like Propranolol.",
          },
        ],
      },
    ],
  },
  {
    title: "Depression",
    url: "depression.png",
    generalDescription:
      "Depression, often occurring in the wake of persistent anxiety, is a profound and pervasive mood disorder. It engulfs individuals in a persistent state of sadness, hopelessness, and emotional numbness. Unlike anxiety, which is characterized by excessive worry and fear, depression manifests as a deep sense of despair, affecting one’s thoughts, feelings, and physical well-being. Symptoms may include loss of interest in previously enjoyed activities, changes in appetite and sleep patterns, fatigue, and feelings of worthlessness. Depression can significantly impair daily functioning and quality of life, necessitating professional intervention and support.",
    symptomsDescription: "Symptoms of Depression:",
    symptomsList: [
      {
        listId: "1",
        listTitle: "Persistent Sadness",
        listDetails: "Feeling down, hopeless, and sad most of the time.",
      },
      {
        listId: "2",
        listTitle: "Loss of Interest",
        listDetails: "Losing interest in activities once enjoyed.",
      },
      {
        listId: "3",
        listTitle: "Changes in Appetite",
        listDetails:
          "Significant weight loss or gain due to altered eating habits.",
      },
      {
        listId: "4",
        listTitle: "Fatigue",
        listDetails: "Feeling tired and lacking energy.",
      },
      {
        listId: "5",
        listTitle: "Sleep Problems",
        listDetails:
          "Insomnia (difficulty falling asleep) or hypersomnia (excessive sleep).",
      },
      {
        listId: "6",
        listTitle: "Feelings of Guilt or Worthlessness",
        listDetails: "Believing one is a burden or unworthy.",
      },
      {
        listId: "7",
        listTitle: "Difficulty Concentrating",
        listDetails:
          "Similar to anxiety, depression can impair focus and memory.",
      },
    ],
    treatments: [
      {
        treatmentTitle: "Psychotherapy (Talk Therapy)",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Cognitive Behavioral Therapy (CBT)",
            treatmentDetailCopy:
              "CBT helps individuals identify and change negative thought patterns and behaviors. It’s evidence-based and widely used for depression.",
          },
          {
            treatmentDetailTitle: "Interpersonal Therapy (IPT)",
            treatmentDetailCopy:
              "IPT focuses on improving relationships and communication. It’s helpful for addressing social and interpersonal issues related to depression.",
          },
          {
            treatmentDetailTitle: "Mindfulness-Based Cognitive Therapy (MBCT)",
            treatmentDetailCopy:
              "Combines CBT with mindfulness techniques to prevent relapse in recurrent depression.",
          },
        ],
      },
      {
        treatmentTitle: "Medications",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Antidepressants",
            treatmentDetailCopy:
              "These medications help regulate neurotransmitters in the brain. Common types include SSRIs, SNRIs, Atypical Antidepressants, Bupropion, and Tricyclic Antidepressants.",
          },
        ],
      },
      {
        treatmentTitle: "Lifestyle Changes",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Regular Exercise",
            treatmentDetailCopy:
              "Physical activity releases endorphins and improves mood.",
          },
          {
            treatmentDetailTitle: "Healthy Diet",
            treatmentDetailCopy:
              "Nutrient-rich foods can positively impact mental health.",
          },
          {
            treatmentDetailTitle: "Adequate Sleep",
            treatmentDetailCopy: "Prioritize good sleep hygiene.",
          },
          {
            treatmentDetailTitle: "Avoid Alcohol and Substance Abuse",
            treatmentDetailCopy: "These can worsen depression.",
          },
        ],
      },
      {
        treatmentTitle: "Social Support",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Connecting with Others",
            treatmentDetailCopy:
              "Connecting with friends, family, or support groups can alleviate feelings of isolation.",
          },
          {
            treatmentDetailTitle: "Pets",
            treatmentDetailCopy:
              "Spending time with pets can provide emotional support.",
          },
        ],
      },
      {
        treatmentTitle: "Self-Care Practices",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Mindfulness and Relaxation Techniques",
            treatmentDetailCopy:
              "Yoga, meditation, and deep breathing can reduce stress.",
          },
          {
            treatmentDetailTitle: "Creative Outlets",
            treatmentDetailCopy: "Engage in hobbies or artistic activities.",
          },
          {
            treatmentDetailTitle: "Journaling",
            treatmentDetailCopy:
              "Expressing thoughts and emotions can be therapeutic.",
          },
        ],
      },
      {
        treatmentTitle: "Medications for Depression",
        treatmentDetails: [
          {
            treatmentDetailTitle: "SSRIs",
            treatmentDetailCopy:
              "Often the first-line treatment for depression, SSRIs like Fluoxetine (Prozac), Citalopram (Celexa), and Sertraline (Zoloft) increase serotonin levels in the brain.",
          },
          {
            treatmentDetailTitle: "SNRIs",
            treatmentDetailCopy:
              "Affect both serotonin and norepinephrine levels, helpful for depression and pain management, like Venlafaxine (Effexor) and Duloxetine (Cymbalta).",
          },
          {
            treatmentDetailTitle: "Bupropion (Wellbutrin)",
            treatmentDetailCopy:
              "An atypical antidepressant affecting dopamine and norepinephrine, used when other medications’ side effects are a concern.",
          },
          {
            treatmentDetailTitle: "Tricyclic Antidepressants (TCAs)",
            treatmentDetailCopy:
              "Effective for some individuals but used less due to side effects.",
          },
          {
            treatmentDetailTitle: "Vortioxetine (Trintellix)",
            treatmentDetailCopy:
              "A newer option that affects serotonin receptors, useful when others aren’t effective.",
          },
          {
            treatmentDetailTitle: "Agomelatine",
            treatmentDetailCopy:
              "A unique medication acting on melatonin and serotonin receptors.",
          },
        ],
      },
    ],
  },
  {
    title: "Brain Fog",
    url: "brainfog.png",
    generalDescription:
      "People experiencing brain fog often feel mentally drained and struggle with various cognitive functions. Some common signs of brain fog include reduced cognitive functioning or difficulty with paying attention, keeping focus, multitasking, and memory recall. It can feel like mild memory loss, unusual forgetfulness, fuzzy memory, or sluggishness when trying to remember names, dates, where you put your keys, and other important things. Additionally, brain fog may lead to confusion, spaciness, and challenges in processing information. While it is not a medical term or diagnosis, brain fog can be associated with other conditions such as attention deficit hyperactivity disorder (ADHD), chronic pain, sleep disorders, eating disorders, nutritional deficiencies, and other complex health issues.",
    symptomsDescription: "Symptoms of Brain Fog:",
    symptomsList: [
      {
        listId: "1",
        listTitle: "Unusual forgetfulness",
        listDetails:
          "Difficulty recalling names, dates, where you placed your keys, and other important information.",
      },
      {
        listId: "2",
        listTitle: "Fuzzy memory or sluggishness",
        listDetails:
          "A sense of mental haziness when trying to remember things. Having to read sentences over again.",
      },
      {
        listId: "3",
        listTitle: "Difficulty paying attention or focusing",
        listDetails: "Challenges in maintaining concentration.",
      },
      {
        listId: "4",
        listTitle: "Confusion or spaciness",
        listDetails: "Feeling mentally disoriented.",
      },
      {
        listId: "5",
        listTitle: "Challenges with processing information",
        listDetails: "Struggling to process and comprehend new data.",
      },
    ],
    treatments: [
      {
        treatmentTitle: "Take a Real Break",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Meditation and Rest",
            treatmentDetailCopy:
              "Stepping away from a task, meditating, or taking a power nap can enhance mental performance and focus.",
          },
          {
            treatmentDetailTitle: "Creative Activities",
            treatmentDetailCopy:
              "Engaging in creative activities like painting, writing, dancing, or cooking to recharge the brain.",
          },
        ],
      },
      {
        treatmentTitle: "Challenge Your Brain",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Cognitive Activities",
            treatmentDetailCopy:
              "Engage in reading, solving crossword puzzles, playing memory games, learning new skills, or playing musical instruments to stimulate cognitive health.",
          },
        ],
      },
      {
        treatmentTitle: "Physical Exercise",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Regular Activity",
            treatmentDetailCopy:
              "Aerobic exercises, strength training, and stretching to improve blood flow to the brain, promote neuroplasticity, and enhance cognitive function.",
          },
        ],
      },
      {
        treatmentTitle: "Stay Socially Connected",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Social Interaction",
            treatmentDetailCopy:
              "Maintain mental sharpness by engaging in conversations, joining clubs, or participating in group activities.",
          },
        ],
      },
      {
        treatmentTitle: "Mindfulness and Relaxation Techniques",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Stress Reduction",
            treatmentDetailCopy:
              "Practice mindfulness meditation, deep breathing exercises, and progressive muscle relaxation to reduce stress and improve focus.",
          },
        ],
      },
      {
        treatmentTitle: "Medication",
        treatmentDetails: [
          {
            treatmentDetailTitle: "Pain Relief",
            treatmentDetailCopy:
              "Over-the-counter medications like Ibuprofen (Advil, Motrin IB), Naproxen (Aleve), Acetaminophen (Tylenol), and Aspirin can relieve pain associated with headaches.",
          },
        ],
      },
    ],
    medications: [
      {
        treatmentTitle: "Take a Real Break",
        treatmentDetails: "stuff",
      },
    ],
  },
];
