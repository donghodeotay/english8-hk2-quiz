/* =========================================================================
 * exams.js — Tiếng Anh 8 Global Success — Semester 2 final exam practice.
 * 3 exams × 20 questions each. All questions and explanations in English.
 * Curriculum: Units 7–12 (Environmental protection, Shopping, Natural
 * disasters, Communication, Science & technology, Life on other planets).
 * ========================================================================= */

window.EXAMS = [

/* =========================== EXAM 1: Units 7–8 =========================== */
{
  id: "eng-1",
  title: "Exam 1 — Units 7 & 8: Environmental Protection & Shopping",
  topics: "Units 7–8 • Phonetics • Conditional sentences (type 1) • Gerund / to-infinitive • Past simple vs past continuous • Quantifiers • Reading",
  duration: 25,
  questions: [

    /* ---------- Phonetics ---------- */
    { q: "Choose the word that has a different stress pattern from the others.",
      options: [ "environment", "protection", "pollution", "atmosphere" ],
      correct: 3,
      explanation: "‘atmosphere’ is stressed on the 1st syllable: AT-mos-phere /ˈæt.mə.sfɪər/. The other three are stressed on the 2nd syllable: en-VI-ron-ment, pro-TEC-tion, po-LLU-tion." },

    { q: "Choose the word whose underlined part is pronounced differently: po**ll**ution, so**l**ution, que**st**ion, di**sc**ussion.",
      options: [ "pollution", "solution", "question", "discussion" ],
      correct: 2,
      explanation: "The endings ‘-tion/-sion’ in pollution /ʃən/, solution /ʃən/, discussion /ʃən/ produce a /ʃ/ sound. In ‘question’ the cluster gives /tʃ/ as in /ˈkwes.tʃən/, making it the odd one out." },

    /* ---------- Vocabulary (Unit 7) ---------- */
    { q: "_____ is the act of cutting down or burning trees in a large area.",
      options: [ "Pollution", "Deforestation", "Recycling", "Conservation" ],
      correct: 1,
      explanation: "‘Deforestation’ = the cutting down of forests. ‘Pollution’ = harmful substances in the environment; ‘recycling’ = re-using materials; ‘conservation’ = protecting nature." },

    { q: "We should reduce, reuse and _____ to protect the environment.",
      options: [ "remove", "react", "recycle", "replace" ],
      correct: 2,
      explanation: "The famous '3Rs' of environmental protection are Reduce, Reuse and Recycle." },

    /* ---------- Grammar: First conditional ---------- */
    { q: "If we don't protect the forests, many animals _____ their habitat.",
      options: [ "lose", "will lose", "lost", "would lose" ],
      correct: 1,
      explanation: "First conditional: If + S + present simple, S + will + V. The if-clause already has present simple, so the main clause needs ‘will + V’." },

    { q: "If people _____ (not / stop) using plastic bags, the oceans will be full of plastic waste.",
      options: [ "don't stop", "won't stop", "didn't stop", "haven't stopped" ],
      correct: 0,
      explanation: "In a first conditional, the if-clause uses the present simple — the negative is ‘don't / doesn't + V’. Never use ‘will’ in the if-clause." },

    /* ---------- Grammar: Verbs + V-ing / to-V (Unit 7) ---------- */
    { q: "I enjoy _____ tree-planting activities at the weekend.",
      options: [ "join", "to join", "joining", "joined" ],
      correct: 2,
      explanation: "‘Enjoy’ is followed by the gerund (V-ing): enjoy doing / enjoy joining." },

    { q: "We have decided _____ the local clean-up day next Sunday.",
      options: [ "join", "to join", "joining", "joined" ],
      correct: 1,
      explanation: "‘Decide’ is followed by the to-infinitive: decide to do." },

    { q: "She suggested _____ a poster about saving water.",
      options: [ "to make", "make", "making", "made" ],
      correct: 2,
      explanation: "‘Suggest’ is followed by V-ing (gerund): suggest doing / suggest making." },

    /* ---------- Vocabulary (Unit 8 — Shopping) ---------- */
    { q: "A place where many shops are gathered under one roof is called a _____.",
      options: [ "supermarket", "shopping mall", "convenience store", "boutique" ],
      correct: 1,
      explanation: "A ‘shopping mall’ (or ‘shopping centre’) houses many shops together. A ‘supermarket’ sells mainly food; a ‘convenience store’ is small; a ‘boutique’ sells fashionable clothes." },

    { q: "When prices are very low because the shop wants to clear stock, we say items are on _____.",
      options: [ "trend", "label", "sale", "tag" ],
      correct: 2,
      explanation: "‘On sale’ = items sold at reduced prices. ‘Tag’ and ‘label’ refer to the price marker; ‘trend’ is a fashion direction." },

    /* ---------- Grammar: Past simple vs past continuous (Unit 8) ---------- */
    { q: "While I _____ in the supermarket, my phone rang.",
      options: [ "shopped", "was shopping", "shop", "had shopped" ],
      correct: 1,
      explanation: "Past continuous (was/were + V-ing) is used for an action in progress when another (shorter) action interrupted it." },

    { q: "When the shop assistant _____ in, the customer was already trying on the dress.",
      options: [ "came", "was coming", "comes", "had come" ],
      correct: 0,
      explanation: "‘When’ + past simple is used for the shorter, completed action; the longer in-progress action takes past continuous." },

    /* ---------- Grammar: Quantifiers ---------- */
    { q: "There aren't _____ shoppers at the mall on Monday morning.",
      options: [ "much", "many", "a lot", "lots" ],
      correct: 1,
      explanation: "Use ‘many’ with plural countable nouns in negative/question forms: many shoppers, many books." },

    { q: "How _____ money do you usually spend on a weekend trip?",
      options: [ "many", "lots", "much", "few" ],
      correct: 2,
      explanation: "‘Money’ is uncountable, so we use ‘much’: How much money…?" },

    /* ---------- Communication ---------- */
    { q: "Customer: 'How much is this T-shirt?' Shop assistant: '_____'",
      options: [ "It's 200,000 dong.", "It's small.", "Yes, please.", "Over there." ],
      correct: 0,
      explanation: "‘How much…?’ asks about price, so the answer states the price." },

    /* ---------- Reading passage ---------- */
    { q: "Read the passage and answer Q17–Q20.\n\nLast Saturday, my class joined a clean-up programme at Tay Ho Lake. We met at 7 a.m. and were divided into four teams. While my team was picking up plastic bottles near the lakeside, another team was planting young trees. After two hours, we had collected more than ten bags of rubbish. I felt tired but very happy because I knew that we had helped to make our city a little greener.\n\nQ17. Where did the activity take place?",
      options: [ "At a public park", "At Tay Ho Lake", "At the school garden", "At a shopping mall" ],
      correct: 1,
      explanation: "The first sentence states: ‘…a clean-up programme at Tay Ho Lake.’" },

    { q: "Q18. How many teams were the students divided into?",
      options: [ "Two", "Three", "Four", "Five" ],
      correct: 2,
      explanation: "The text says ‘…we were divided into four teams.’" },

    { q: "Q19. What was the writer's team doing while another team was planting trees?",
      options: [ "Cleaning the streets", "Picking up plastic bottles near the lakeside",
                 "Painting walls", "Selling drinks" ],
      correct: 1,
      explanation: "‘…my team was picking up plastic bottles near the lakeside, another team was planting young trees.’" },

    { q: "Q20. How did the writer feel after the activity?",
      options: [ "Bored and tired", "Tired but happy", "Hungry and angry", "Sad but proud" ],
      correct: 1,
      explanation: "‘I felt tired but very happy…’ — the writer was tired but happy." }
  ]
},

/* =========================== EXAM 2: Units 9–10 =========================== */
{
  id: "eng-2",
  title: "Exam 2 — Units 9 & 10: Natural Disasters & Communication",
  topics: "Units 9–10 • Phonetics • Past simple / Past continuous / Past perfect • Reported speech • Disaster vocabulary • Reading",
  duration: 25,
  questions: [

    /* ---------- Phonetics ---------- */
    { q: "Choose the word whose underlined letters are pronounced differently: **ear**thquake, **ear**th, s**ear**ch, h**ear**t.",
      options: [ "earthquake", "earth", "search", "heart" ],
      correct: 3,
      explanation: "‘heart’ is pronounced /hɑːt/ — the ‘ear’ here is /ɑː/. In earthquake /ɜː/, earth /ɜː/, and search /ɜː/, the ‘ear’ is /ɜː/. So ‘heart’ is the odd one out." },

    { q: "Choose the word with a different stress pattern: 'tornado', 'volcano', 'tsunami', 'hurricane'.",
      options: [ "tornado", "volcano", "tsunami", "hurricane" ],
      correct: 3,
      explanation: "‘hurricane’ is stressed on the 1st syllable: HUR-ri-cane. The other three are stressed on the 2nd syllable: tor-NA-do, vol-CA-no, tsu-NA-mi." },

    /* ---------- Vocabulary (Unit 9) ---------- */
    { q: "A long period of unusually low rainfall, leading to a shortage of water, is called a _____.",
      options: [ "flood", "drought", "storm", "tornado" ],
      correct: 1,
      explanation: "‘Drought’ = an extended period of dry weather. ‘Flood’ is too much water; ‘storm’ is wind and rain; ‘tornado’ is a violent rotating column of air." },

    { q: "After the earthquake, many people were left _____.",
      options: [ "homeless", "homely", "homework", "houseful" ],
      correct: 0,
      explanation: "‘Homeless’ = without a home. ‘Homely’ means cosy/plain; ‘homework’ is school assignments; ‘houseful’ is not a standard adjective in this context." },

    { q: "The huge wave caused by an underwater earthquake is a _____.",
      options: [ "tsunami", "typhoon", "tornado", "thunderstorm" ],
      correct: 0,
      explanation: "A ‘tsunami’ is a giant ocean wave usually caused by a seabed earthquake." },

    /* ---------- Grammar: Past simple vs past continuous (Unit 9) ---------- */
    { q: "While they _____ TV, the lights suddenly went out.",
      options: [ "watched", "were watching", "watch", "had watched" ],
      correct: 1,
      explanation: "Past continuous (were watching) for the longer action in progress; past simple (went out) for the interrupting action." },

    { q: "When the earthquake _____, we _____ in the kitchen.",
      options: [ "happened / cooked", "happened / were cooking",
                 "was happening / cooked", "had happened / were cooking" ],
      correct: 1,
      explanation: "Past simple for the sudden event (happened); past continuous for the ongoing action (were cooking)." },

    /* ---------- Grammar: Past perfect (Unit 9) ---------- */
    { q: "By the time rescuers arrived, the storm _____ for hours.",
      options: [ "raged", "had raged", "was raging", "has raged" ],
      correct: 1,
      explanation: "Use past perfect (had + V3) for an action completed before another past action." },

    { q: "She told us that she _____ a documentary about volcanoes the night before.",
      options: [ "watches", "watched", "had watched", "has watched" ],
      correct: 2,
      explanation: "In reported speech, past simple in direct speech becomes past perfect in indirect speech: ‘watched’ → ‘had watched’." },

    /* ---------- Grammar: Reported speech (Unit 10) ---------- */
    { q: "Direct: 'I am studying English now,' said Mai. Reported: Mai said that she _____ English then.",
      options: [ "is studying", "was studying", "had studied", "studies" ],
      correct: 1,
      explanation: "Present continuous in direct speech → past continuous in reported speech: ‘am studying’ → ‘was studying’; ‘now’ → ‘then’." },

    { q: "Direct: 'I will help you tomorrow,' Tom said. Reported: Tom said that he _____ me the next day.",
      options: [ "will help", "would help", "helps", "had helped" ],
      correct: 1,
      explanation: "‘will’ → ‘would’ in reported speech; ‘tomorrow’ → ‘the next day’." },

    { q: "Direct: 'Where do you live?' he asked me. Reported: He asked me where _____.",
      options: [ "do I live", "I lived", "did I live", "I live" ],
      correct: 1,
      explanation: "Reported wh-question: change to statement order (S + V) and back-shift: ‘do you live’ → ‘I lived’." },

    { q: "Direct: 'Don't open the window,' the teacher said to us. Reported: The teacher told us _____ the window.",
      options: [ "not open", "to not open", "not to open", "don't open" ],
      correct: 2,
      explanation: "Reported negative command: ‘told + O + not + to-infinitive’." },

    /* ---------- Vocabulary (Unit 10) ---------- */
    { q: "‘Snail mail’ is an informal term for _____.",
      options: [ "instant messaging", "ordinary postal mail",
                 "video calls", "voice mail" ],
      correct: 1,
      explanation: "‘Snail mail’ jokingly compares ordinary postal mail with the slow speed of a snail, contrasting it with fast electronic email." },

    { q: "_____ is the technology of communicating using video and audio over the internet, like Zoom or Google Meet.",
      options: [ "Video conferencing", "Telegram", "Tele-translator", "Telepathy" ],
      correct: 0,
      explanation: "‘Video conferencing’ is the term used for online meetings with video and audio." },

    /* ---------- Communication ---------- */
    { q: "A: 'I can't get a phone signal here.' B: '_____'",
      options: [ "Congratulations!", "Try moving to higher ground.",
                 "Don't mention it.", "You're welcome." ],
      correct: 1,
      explanation: "Suggesting a solution to a no-signal problem is the only contextually appropriate response." },

    /* ---------- Reading passage ---------- */
    { q: "Read the passage and answer Q17–Q20.\n\nIn April 2026, a powerful earthquake struck a small coastal town. When it happened, most people were sleeping. Within minutes, sirens went off and rescue teams rushed to the area. By the time the sun rose, more than 50 families had been moved to a safe shelter. Local volunteers prepared hot meals while doctors took care of the injured. Although many houses had been destroyed, no one was killed. The community was grateful for the quick response.\n\nQ17. When did the earthquake happen?",
      options: [ "While most people were having breakfast",
                 "While most people were sleeping",
                 "While most people were going to school",
                 "While most people were working" ],
      correct: 1,
      explanation: "‘When it happened, most people were sleeping.’" },

    { q: "Q18. What had happened by sunrise?",
      options: [ "Houses had been rebuilt.",
                 "All injured people had recovered.",
                 "More than 50 families had been moved to a safe shelter.",
                 "The town had become normal again." ],
      correct: 2,
      explanation: "‘…more than 50 families had been moved to a safe shelter.’" },

    { q: "Q19. Who prepared hot meals?",
      options: [ "The army", "Local volunteers", "Tourists", "Government officials" ],
      correct: 1,
      explanation: "‘Local volunteers prepared hot meals…’" },

    { q: "Q20. Which is TRUE according to the passage?",
      options: [ "No one died despite many houses being destroyed.",
                 "The rescue teams arrived the next day.",
                 "All families lost their homes.",
                 "Doctors did not arrive in time." ],
      correct: 0,
      explanation: "‘…many houses had been destroyed, no one was killed.’" }
  ]
},

/* =========================== EXAM 3: Units 11–12 =========================== */
{
  id: "eng-3",
  title: "Exam 3 — Units 11 & 12: Science & Technology, Life on Other Planets",
  topics: "Units 11–12 • Phonetics • Will vs Be going to • Compound nouns • Present perfect • Modal verbs • Reading",
  duration: 25,
  questions: [

    /* ---------- Phonetics ---------- */
    { q: "Choose the word with a different stress pattern: 'computer', 'invention', 'astronaut', 'discovery'.",
      options: [ "computer", "invention", "astronaut", "discovery" ],
      correct: 2,
      explanation: "‘astronaut’ is stressed on the 1st syllable (AS-tro-naut). ‘computer’, ‘invention’ and ‘discovery’ are stressed on the 2nd." },

    { q: "Choose the word whose underlined sound is different: 'launch', 'planet', 'gravity', 'satellite'.",
      options: [ "launch", "planet", "gravity", "satellite" ],
      correct: 0,
      explanation: "‘launch’ has /ɔː/ (lɔːntʃ). The other three have a short /æ/ sound: planet /ˈplænɪt/, gravity /ˈɡrævəti/, satellite /ˈsætəlaɪt/." },

    /* ---------- Vocabulary (Unit 11) ---------- */
    { q: "A _____ is a person who creates new machines or systems.",
      options: [ "scientist", "inventor", "engineer", "designer" ],
      correct: 1,
      explanation: "An ‘inventor’ creates new things (e.g., Edison). A ‘scientist’ does research; an ‘engineer’ applies engineering principles; a ‘designer’ designs." },

    { q: "A _____ is a small flying machine without a pilot, often controlled remotely.",
      options: [ "drone", "robot", "rocket", "telescope" ],
      correct: 0,
      explanation: "A ‘drone’ is an unmanned aerial vehicle (UAV)." },

    /* ---------- Grammar: Compound nouns (Unit 11) ---------- */
    { q: "Choose the correct compound noun for ‘a brush used for teeth’.",
      options: [ "brush teeth", "teeth brush", "toothbrush", "tooth-brushing" ],
      correct: 2,
      explanation: "Compound nouns: noun + noun, with the first noun in singular form: tooth + brush → toothbrush." },

    { q: "Pick the correct compound noun: 'a station where buses stop'.",
      options: [ "buses station", "bus station", "stations bus", "bus's station" ],
      correct: 1,
      explanation: "Bus + station → ‘bus station’ (first noun stays singular)." },

    /* ---------- Grammar: Will vs Be going to (Unit 11) ---------- */
    { q: "I think people _____ explore Mars in the next 20 years.",
      options: [ "will", "are going to", "are", "would" ],
      correct: 0,
      explanation: "Use ‘will’ for predictions based on opinion (‘I think…’). ‘Be going to’ is for predictions based on present evidence." },

    { q: "Look at those clouds! It _____ rain soon.",
      options: [ "will", "would", "is going to", "shall" ],
      correct: 2,
      explanation: "Use ‘be going to’ for predictions based on visible evidence (the clouds are right there)." },

    { q: "She has booked her ticket. She _____ visit her grandmother on Sunday.",
      options: [ "will", "is going to", "would", "shall" ],
      correct: 1,
      explanation: "Use ‘be going to’ for plans/intentions already decided (she has the ticket)." },

    /* ---------- Grammar: Present perfect (Unit 12) ---------- */
    { q: "Humans _____ a manned mission to another galaxy yet.",
      options: [ "didn't send", "haven't sent", "don't send", "won't send" ],
      correct: 1,
      explanation: "‘Yet’ in negatives signals present perfect: have/has + not + V3." },

    { q: "Scientists _____ many strange creatures in the deep ocean over the past decade.",
      options: [ "discover", "discovered", "have discovered", "are discovering" ],
      correct: 2,
      explanation: "‘Over the past decade’ links the past to now → present perfect (have/has + V3)." },

    { q: "Choose the correct sentence using the present perfect.",
      options: [ "I have seen that movie last night.",
                 "I have already seen that movie.",
                 "I have see that movie.",
                 "I have seeing that movie." ],
      correct: 1,
      explanation: "‘Already’ pairs with present perfect (have + V3). Note: don't use ‘last night’ (a finished past time) with present perfect." },

    /* ---------- Grammar: Modal verbs (Unit 12) ---------- */
    { q: "Astronauts _____ wear special suits in space — there is no choice.",
      options: [ "may", "might", "must", "could" ],
      correct: 2,
      explanation: "‘Must’ expresses strong obligation/necessity. ‘May/might/could’ express possibility." },

    { q: "There _____ be life on Europa, one of Jupiter's moons — scientists aren't sure.",
      options: [ "must", "has to", "might", "shouldn't" ],
      correct: 2,
      explanation: "‘Might’ (or ‘may/could’) expresses possibility/uncertainty. ‘Must’ would mean strong certainty." },

    /* ---------- Vocabulary (Unit 12) ---------- */
    { q: "_____ is the force that pulls objects toward the centre of a planet.",
      options: [ "Friction", "Gravity", "Magnetism", "Pressure" ],
      correct: 1,
      explanation: "‘Gravity’ pulls objects toward a planet's centre. Earth's gravity gives us weight." },

    { q: "An _____ is a person trained to travel in a spacecraft.",
      options: [ "astronomer", "astronaut", "athlete", "architect" ],
      correct: 1,
      explanation: "An ‘astronaut’ travels into space. An ‘astronomer’ studies stars from Earth." },

    /* ---------- Reading passage ---------- */
    { q: "Read the passage and answer Q17–Q20.\n\nMars has fascinated humans for centuries. Often called the Red Planet, Mars is colder than Earth and has a much thinner atmosphere. Scientists have sent several robots, called rovers, to explore the surface. These rovers have collected soil samples and taken thousands of photos. Recent studies suggest that liquid water may have existed on Mars in the past. If life is ever discovered there, it might change the way we understand the universe. Many engineers are now working on rockets that can carry humans safely to Mars within the next decades.\n\nQ17. What is Mars often called?",
      options: [ "The Blue Planet", "The Red Planet", "The Bright Planet", "The Cold Planet" ],
      correct: 1,
      explanation: "‘Often called the Red Planet, Mars…’" },

    { q: "Q18. What have the rovers done on Mars?",
      options: [ "Built a base", "Met aliens",
                 "Collected soil samples and taken thousands of photos",
                 "Created an atmosphere" ],
      correct: 2,
      explanation: "‘These rovers have collected soil samples and taken thousands of photos.’" },

    { q: "Q19. According to the passage, what may have existed on Mars in the past?",
      options: [ "Humans", "Liquid water", "Forests", "Cities" ],
      correct: 1,
      explanation: "‘…liquid water may have existed on Mars in the past.’" },

    { q: "Q20. What are many engineers working on now?",
      options: [ "Robots that can fly to the Sun",
                 "Cars that drive themselves on Earth",
                 "Rockets that can safely carry humans to Mars",
                 "Special suits for swimming on Mars" ],
      correct: 2,
      explanation: "‘…working on rockets that can carry humans safely to Mars within the next decades.’" }
  ]
}

];
