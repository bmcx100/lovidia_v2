export interface TNewsData {
  id: number;
  isFeatured: boolean;
  source: string;
  author: string;
  date: string;
  headline: string;
  link: string;
  description: string;
  textToImage: string;
  image: string;
}

export const NewsData: TNewsData[] = [
  {
    id: 1,
    isFeatured: false,
    source: "News-Medical.net",
    author: "Vijay Kumar Malesu",
    date: "2024-03-07",
    headline: "Understanding long COVID: A call for better diagnosis and treatment",
    link: "https://news-medical.net/news/20240307/Understanding-long-COVID-A-call-for-better-diagnosis-and-treatment.aspx",
    description:
      "A recent review in Nature Reviews Microbiology highlights the need for better understanding of long COVID, affecting over 65 million globally. The article discusses the diverse systemic symptoms of long COVID, its risk factors, and the urgent need for research into its mechanisms and treatments. Key findings include immune system changes, potential viral reactivations, systemic impacts on organs, and neurological effects. The article also addresses the challenges in diagnosing long COVID and the current symptom-focused treatment strategies, emphasizing the importance of continued research and innovative diagnostic methods.",
    textToImage:
      "An image depicting various aspects of long COVID research, including scientists examining data on a computer, immune system changes illustrated with cells and molecules, and a background showing the global impact with a map. The scene should convey a sense of urgent scientific investigation into long COVID, with elements like microscopes, medical reports, and researchers in a lab environment.",
    image: "",
  },
  {
    id: 2,
    isFeatured: false,
    source: "Newsweek",
    author: "Pandora Dewan",
    date: "2024-03-09",
    headline: "Living with Long COVID: 'I Feel Poisoned'",
    link: "https://www.newsweek.com/living-long-covid-feel-poisoned-1875191",
    description:
      "Katherine Francis and the MacDonald family share their ongoing struggles with long COVID, highlighting the condition's wide-ranging impact on their lives. Despite appearing healthy outwardly, they experience severe symptoms like brain fog, fatigue, and cognitive dysfunction. Recent research reveals brain fog in long COVID is linked to blood-brain barrier disruptions and immune system anomalies, offering hope for targeted therapies. The personal stories of those affected underscore the complexity and severity of long COVID, while recent scientific advances suggest a path toward understanding and potentially treating this elusive condition.",
    textToImage:
      "A conceptual image showing individuals with long COVID experiencing symptoms like brain fog and fatigue, with a transparent overlay of the brain showing signs of inflammation and blood-brain barrier disruption. The scene should capture the contrast between their outward appearance and internal struggles, with elements like a home setting and hospital equipment in the background to symbolize their ongoing health battles.",
    image: "",
  },
  {
    id: 3,
    isFeatured: false,
    source: "Clinical Microbiology and Infection",
    author: "Nicolas Banholzer, Pascal Bittel, Philipp Jent, Matthias Egger, Tina Hascher, Lukas Fenner",
    date: "2024-03-08",
    headline:
      "Molecular detection of SARS-CoV-2 and other respiratory viruses in saliva and classroom air: a two winters tale",
    link: "https://www.clinicalmicrobiologyandinfection.com/article/S1198-743X(24)00114-9/fulltext",
    description:
      "A study analyzing saliva, air, and air cleaner filter samples from Swiss secondary schools over two winters showed a shift from SARS-CoV-2 dominance to other respiratory viruses like influenza and adenovirus. SARS-CoV-2 was more likely to be detected in air, suggesting its greater potential for airborne transmission compared to other viruses. This change reflects the transition of SARS-CoV-2 from epidemic to endemic and highlights the importance of understanding different transmission pathways for effective public health strategies.",
    textToImage:
      "An image depicting a scientific study in a classroom setting, with researchers collecting saliva and air samples to analyze for SARS-CoV-2 and other respiratory viruses. The scene should show a classroom with students and scientists using bioaerosol sampling devices and air cleaners, emphasizing the investigation of virus transmission in educational environments.",
    image: "",
  },
  {
    id: 4,
    isFeatured: false,
    source: "People",
    author: "Vanessa Etienne",
    date: "2024-03-08",
    headline: "Woman, 30, Dies After Blood Clot Symptoms Were Dismissed Twice as 'Long COVID and Anxiety'",
    link: "https://people.com/woman-30-dies-after-blood-clot-symptoms-were-dismissed-8606693",
    description:
      "Emily Chesterton, a 30-year-old actress, died from a pulmonary embolism caused by a blood clot misdiagnosed as long COVID and anxiety. Despite her worsening symptoms, she was only seen by a physician associate, not a doctor, leading to a fatal delay in proper diagnosis and treatment. Her parents advocate for clearer guidance on the role of medical associates in patient care, highlighting the tragic consequences of misdiagnosis and the importance of accurate initial assessments in emergency situations.",
    textToImage:
      "An image depicting the serious scenario of misdiagnosis in a medical setting, showing a concerned patient discussing symptoms with a healthcare professional. The scene should convey the gravity of medical misjudgment, emphasizing the need for thorough examination and the potential risks of underestimating symptoms.",
    image: "emily-chesterton.webp",
  },
  {
    id: 5,
    isFeatured: false,
    source: "Virology Blog",
    author: "David Tuller",
    date: "2024-03-11",
    headline:
      "Trial By Error: Letter to BMJ Seeking Correction in Study of Long Covid Physical-and-Mental Rehabilitation Program",
    link: "https://virology.ws/2024/03/11/trial-by-error-letter-to-bmj-seeking-correction-in-study-of-long-covid-physical-and-mental-rehabilitation-program/",
    description:
      "David Tuller challenges the claimed effectiveness of a Long Covid rehabilitation program in a study published by The BMJ, arguing the results do not support the claims made. Tuller's critique focuses on the discrepancy between the study's reported minimal differences in health-related quality of life outcomes and the claims of clinical effectiveness, advocating for a correction in the study to accurately reflect the data. His concerns are detailed in a letter to The BMJ's editor-in-chief, calling for adjustments to the study's conclusions based on the actual findings.",
    textToImage:
      "An image depicting a concerned researcher examining the data of a medical study, highlighting the need for accurate interpretation of results. The scene should show the researcher in a thoughtful pose, surrounded by papers and a computer displaying graphs and data, emphasizing the scrutiny and critique of scientific research in the context of Long Covid.",
    image: "",
  },
  {
    id: 6,
    isFeatured: false,
    source: "ScienceDirect",
    author:
      "Mark A. Faghy, Rae Duncan, Emily Hume, Lewis Gough, Clare Roscoe, Deepika Laddu, Ross Arena, Ruth E.M. Asthon, Caroline Dalton",
    date: "2024-03-11",
    headline:
      "Developing effective strategies to optimize physical activity and cardiorespiratory fitness in the long Covid population- The need for caution and objective assessment",
    link: "https://www.sciencedirect.com/science/article/pii/S0033062024000392",
    description:
      "This review highlights the complexity of managing Long Covid, especially post-exertional symptom exacerbation (PESE), which affects 86% of patients, limiting their physical activity and impacting quality of life. The article advocates for evidence-based guidelines for rehabilitation and the necessity of objective monitoring to safely manage Long Covid. It underlines the need for personalized rehabilitation approaches that consider the patient's specific symptoms and underlying mechanisms, advocating for a careful, monitored re-introduction of physical activity to avoid exacerbating symptoms.",
    textToImage:
      "An image illustrating the challenges of physical activity in Long Covid patients, showing a person experiencing fatigue and difficulty during exercise, with medical professionals monitoring and guiding the activity. The scene should reflect a clinical setting with emphasis on careful and personalized rehabilitation efforts for Long Covid sufferers.",
    image: "",
  },
  {
    id: 7,
    isFeatured: false,
    source: "CBS News",
    author: "Sara Moniuszko, Michael George",
    date: "2024-03-15",
    headline:
      "Up to 5.8 million kids have long COVID, study says. One mother discusses the 'heartbreaking' search for answers.",
    link: "https://www.cbsnews.com/news/millions-kids-long-covid-study-symptoms-mother-searching-for-answers/",
    description:
      "A study reveals that up to 5.8 million children may have long COVID, presenting a diverse range of symptoms like fatigue, headaches, and loss of taste/smell. The story of Amanda Goodhart and her son Logan, who suffers from persistent symptoms post-COVID, highlights the struggle families face. While most children recover, a significant number continue to experience symptoms for over a year, raising concerns about long-term health effects, including the risk of type 1 diabetes and multisystem inflammatory syndrome.",
    textToImage:
      "An image depicting a child affected by long COVID showing symptoms like fatigue and brain fog, being comforted by a parent in a home setting. The scene should convey the emotional and physical toll of long COVID in children and the parental concern for their wellbeing.",
    image: "",
  },
  {
    id: 8,
    isFeatured: false,
    source: "MedPage Today",
    author: "Joyce Frieden",
    date: "2024-03-15",
    headline: "Long COVID Patients, Advocates Rally for More Research, Funding, and Attention",
    link: "https://www.medpagetoday.com/infectiousdisease/longcovid/109210",
    description:
      "On International Long COVID Awareness Day, patients and advocates gathered at the Lincoln Memorial to demand increased government funding for research and reinstatement of mask mandates in healthcare facilities. They emphasized the urgent need for more resources, better education for healthcare providers, and concrete actions from the government to address the ongoing challenges posed by long COVID, which affects millions. The rally highlighted the diverse symptoms of long COVID, the frustration with current treatment options, and the call for immediate, effective policy responses.",
    textToImage:
      "An image of a rally in front of the Lincoln Memorial with long COVID patients and advocates holding signs demanding more research and funding. The crowd is diverse, with people of different ages and backgrounds, showing the widespread impact of long COVID and the unity in seeking solutions and government action.",
    image: "news8.webp",
  },
  {
    id: 9,
    isFeatured: false,
    source: "ContagionLive",
    author: "Sophia Abene",
    date: "2024-03-15",
    headline: "Role of Continuous Learning in Long COVID Treatment",
    link: "https://www.contagionlive.com/view/role-of-continuous-learning-in-long-covid-treatment",
    description:
      "On Long COVID Awareness Day, Dr. Jacob Teitelbaum emphasizes the need for a nuanced approach to Long COVID treatment, reflecting his experience with chronic fatigue syndrome. He advocates for the S.H.I.N.E. protocol, addressing Sleep, Hormonal imbalances, Infections, Nutrition, and Exercise to manage Long COVID's diverse symptoms like fatigue and brain fog. This personalized, holistic method underscores the importance of continuous learning and adaptation in treating Long COVID and similar post-viral conditions.",
    textToImage:
      "An image of a medical professional explaining the S.H.I.N.E. protocol to a patient with Long COVID, showcasing elements like sleep improvement, hormonal balance, infection management, nutrition, and exercise. The setting should be a consultation room, emphasizing the personalized and holistic approach to Long COVID treatment.",
    image: "",
  },
  {
    id: 10,
    isFeatured: false,
    source: "CHCH News",
    author: "News Staff",
    date: "2024-03-15",
    headline: "International Long COVID Awareness Day",
    link: "https://www.chch.com/international-long-covid-awareness-day/",
    description:
      "International Long COVID Awareness Day highlights the persistent condition affecting approximately 11% of Canadians post-COVID-19 infection, with symptoms like brain fog and shortness of breath. McMaster professor Manali Mukherjee notes the significant impact on the working population, particularly women, stressing the need for ongoing research to find effective treatments. While some recover around the 12-month mark, a substantial number remain symptomatic, with research and clinical trials crucial in addressing this pervasive health issue.",
    textToImage:
      "An image representing International Long COVID Awareness Day, featuring a diverse group of adults in a workplace setting, some of whom appear fatigued or in distress, illustrating the impact of long COVID on the working population. The background should subtly integrate elements like calendars and clocks to signify the passage of time and the long-term nature of the condition.",
    image: "",
  },
  {
    id: 11,
    isFeatured: false,
    source: "Independent.co.uk",
    author: "Molly Powel",
    date: "2024-05-12",
    headline: "International DJ forced to give up his dream after Long Covid Leaves him bedridden for a year",
    link: "https://www.independent.co.uk/news/health/international-dj-long-covid-bedridden-b2077173.html",
    description:
      "A DJ in the UK who traveled the world before he suddenly became bedridden for a year with long Covid, causing memory loss and mobility issues, has since 'lost his career' and now predominantly spends his days lying down.",
    textToImage: "An image",
    image: "",
  },
  {
    id: 12,
    isFeatured: false,
    source: "Harvard Business Review",
    author: "Katie Bach, Ludmila N. Praslova, and Beth Pollack",
    date: "2024-05-08",
    headline: "Long Covid at Work: A Manager's Guide - Harvard Business Review",
    link: "https://hbr.org/2024/05/long-covid-at-work-a-managers-guide",
    description:
      "How companies can retain employees with long Covid and other chronic illnesses and enable them to contribute more than they could otherwise.",
    textToImage: "An image",
    image: "",
  },
  {
    id: 13,
    isFeatured: false,
    source: "Daily Mail",
    author: "John Ely",
    date: "2024-04-29",
    headline: "AstraZeneca faces up to $320M bill for 'defective' Covid vaccine",
    link: "https://www.dailymail.co.uk/news/article-10765649/AstraZeneca-admits-Covid-vaccine-cause-rare-side-effect-legal-fight-victims.html",
    description:
      "More than £250million ($320 million) could be given to victims allegedly harmed by AstraZeneca's Covid vaccine. 51 families are pursuing legal action against AstraZeneca arguing the 'defective' jab was to blame for their injuries and deaths of loved ones.",
    textToImage: "An image",
    image: "",
  },
  {
    id: 14,
    isFeatured: true,
    source: "Dailymail.Com",
    author: "Cassidy Morrison",
    date: "2023-04-11",
    headline: "12-year-old boy's hellish battle with LONG COVID",
    link: "https://www.dailymail.co.uk/news/article-10752231/12-year-old-boys-hellish-battle-LONG-COVID.html",
    description:
      "A seventh grader has shared his hellish battle with long Covid. Symptoms like muscle pain, extreme fatigue and brain fog, which has left him wheelchair bound at times.",
    textToImage: "An image",
    image: "theo_and_mother.jpeg",
  },
  {
    id: 15,
    isFeatured: false,
    source: "Simon Fraser University",
    author: "Jeff Hodson",
    date: "2024-04-04",
    headline: "More awareness and investment needed to support people with long COVID",
    link: "https://www.sfu.ca/sfunews/stories/2024/04/more-awareness-and-investment-needed-to-support-people-with-long.html",
    description:
      "A report from Simon Fraser University (SFU) emphasizes the need for increased awareness and investment to support people with long COVID.",
    textToImage: "An image",
    image: "",
  },
  {
    id: 16,
    isFeatured: false,
    source: "ABC health",
    author: "Heidi Sheehan",
    date: "2024-04-02",
    headline: "Experts call for more research into long COVID, as study reveals high prevalence in WA",
    link: "https://www.msn.com/en-au/health/other/experts-call-for-more-research-into-long-covid-as-study-reveals-high-prevalence-in-wa/ar-BB1kXVss",
    description:
      "Researchers say more support is needed for patients suffering from long-term illness associated with a COVID-19 infection, with new data showing a large number of West Australians have been left unable to work due to their crippling symptoms.",
    textToImage: "An image",
    image: "",
  },
  {
    id: 17,
    isFeatured: false,
    source: "Authorea",
    author: "Harman Chopra, Timothy Furnish, Monica Verduzco-Gutierrez",
    date: "2024-04-02",
    headline: "Long-COVID Symptoms Improved after MDMA and Psilocybin Therapy: a case report",
    link: "https://www.authorea.com/doi/full/10.22541/au.171206643.31518756/v1",
    description:
      "Case report describes how a 44-year-old woman with Long-COVID symptoms found relief by using psychedelics as part of her treatment. Therapeutic functions being researched may be effective in treating conditions like depression, anxiety, PTSD.",
    textToImage: "An image",
    image: "",
  },
  {
    id: 18,
    isFeatured: false,
    source: "Medical Xpress",
    author: "Beth Duff-Brown",
    date: "2024-04-01",
    headline: "Are long COVID sufferers falling through the cracks?",
    link: "https://www.msn.com/en-us/health/other/are-long-covid-sufferers-falling-through-the-cracks/ar-BB1kTJ3B",
    description:
      "Researchers who study long COVID say its debilitating symptoms are often misdiagnosed by clinicians and dismissed by employers or loved ones because there is not a definitive consensus in the medical community. The results can be devastating for individuals and their families—and for the economy.",
    textToImage: "An image",
    image: "",
  },
];
