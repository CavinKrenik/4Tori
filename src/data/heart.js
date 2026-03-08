const heart = {
  id: 'heart',
  title: 'The Heart',
  source: '8. heartPDF.pdf',
  description: 'Comprehensive coverage of heart anatomy, chambers, valves, conduction system, ECG interpretation, cardiac cycle, heart sounds, cardiac output, autonomic regulation, stroke volume determinants, congestive heart failure, and cardiovascular risk factors.',
  icon: 'heart',

  learningObjectives: [
    'Describe the location, orientation, and surface anatomy of the heart.',
    'Identify the layers of the pericardium and the three layers of the heart wall.',
    'Compare the four chambers of the heart and their structural differences.',
    'Describe the structure and function of the four heart valves and the fibrous skeleton.',
    'Trace the path of blood through the heart and coronary circulation.',
    'Explain the components of the cardiac conduction system and the sequence of impulse propagation.',
    'Interpret a normal ECG tracing including P wave, QRS complex, and T wave.',
    'Describe the phases of the cardiac cycle and their relationship to heart sounds.',
    'Calculate cardiac output and explain the concepts of stroke volume, heart rate, and cardiac reserve.',
    'Explain the autonomic regulation of heart rate including sympathetic and parasympathetic effects.',
    'Describe the three determinants of stroke volume: preload, contractility, and afterload.',
    'Explain the Frank-Starling law and its physiological significance.',
    'Differentiate between left-sided and right-sided congestive heart failure.',
    'Identify major cardiovascular risk factors and the effects of exercise on the heart.'
  ],

  clinicalCorrelations: [
    {
      title: 'Pericarditis',
      detail: 'Inflammation of the pericardium, often caused by viral infection, bacterial infection, or autoimmune disease. Produces a pericardial friction rub (rough, scratchy sound heard with a stethoscope). Excess fluid accumulation in the pericardial cavity (pericardial effusion) can compress the heart and impair filling. Symptoms include sharp chest pain that worsens with inspiration and improves when leaning forward.'
    },
    {
      title: 'Myocarditis',
      detail: 'Inflammation of the myocardium, commonly caused by viral infections (Coxsackievirus B, adenovirus), bacterial infections, or toxins. Weakens the heart muscle and reduces contractility, potentially leading to dilated cardiomyopathy and heart failure. Symptoms range from mild (fatigue, chest pain) to severe (arrhythmias, sudden cardiac death in young athletes). Diagnosis involves elevated cardiac enzymes, ECG changes, and cardiac MRI.'
    },
    {
      title: 'Cardiac Tamponade',
      detail: 'Life-threatening compression of the heart caused by rapid fluid accumulation in the pericardial sac. The rigid fibrous pericardium cannot expand, so even 100-200 mL of rapid fluid collection compresses the chambers, preventing adequate filling. Beck\'s triad: hypotension, distended jugular veins, and muffled heart sounds. Emergency treatment is pericardiocentesis (needle drainage of fluid).'
    },
    {
      title: 'Myocardial Infarction (MI)',
      detail: 'Sudden death of heart tissue caused by interruption of blood flow from coronary artery narrowing or complete occlusion (usually by thrombus on ruptured atherosclerotic plaque). Dead tissue is replaced by noncontractile scar tissue. Severity depends on size and location of the infarct. Anastomoses between coronary arteries may provide some collateral flow. Treatment includes clot-dissolving drugs (streptokinase, t-PA), heparin, balloon angioplasty, coronary stents, and bypass grafting.'
    },
    {
      title: 'Angina Pectoris',
      detail: 'Heart pain resulting from ischemia (inadequate blood flow) of the cardiac muscle, typically due to coronary artery disease. Stable angina occurs with exertion and is relieved by rest or nitroglycerin. Unstable angina occurs at rest and signals imminent MI. Variant (Prinzmetal) angina is caused by coronary artery spasm. Nitroglycerin causes vasodilation, reducing cardiac workload and improving coronary flow.'
    },
    {
      title: 'Endocarditis',
      detail: 'Infection and inflammation of the endocardium, especially the heart valves. Often caused by bacteria (Streptococcus, Staphylococcus) entering the bloodstream from dental procedures, IV drug use, or indwelling catheters. Vegetations (clumps of bacteria and clots) form on valve surfaces, causing damage, regurgitation, and potential embolization to brain, kidneys, or lungs. Prevention: prophylactic antibiotics for high-risk patients before dental procedures.'
    },
    {
      title: 'Congestive Heart Failure (CHF)',
      detail: 'The heart fails to pump effectively, causing blood to back up. Left-sided failure: blood backs into pulmonary circulation → pulmonary edema, dyspnea, suffocation. Right-sided failure: blood backs into systemic veins → peripheral edema, jugular venous distension, hepatomegaly. Often one side fails first, then the other follows. Risk factors: coronary artery disease, hypertension, valvular disease, cardiomyopathy.'
    },
    {
      title: 'Arrhythmias & Conduction Disorders',
      detail: 'Abnormal heart rhythms resulting from conduction system dysfunction. Heart block: SA or AV node fails to conduct properly — first-degree (prolonged PR), second-degree (dropped beats), third-degree (complete dissociation of P waves and QRS). Atrial fibrillation: chaotic atrial activity with loss of coordinated contraction. Ventricular fibrillation: lethal arrhythmia with disorganized ventricular activity — no effective pumping, requires immediate defibrillation.'
    }
  ],

  quickFacts: [
    'The heart beats ~100,000 times per day and pumps ~7,200 liters of blood daily.',
    'The left ventricle wall is 3× thicker than the right because it pumps to the entire systemic circulation.',
    'The SA node fires at ~100 bpm intrinsically; vagal tone slows resting HR to 70-80 bpm.',
    'Cardiac muscle is unique: autorhythmic, branching, intercalated discs with gap junctions, 1-2 nuclei per cell.',
    'A normal ECG: P wave (atrial depolarization), QRS complex (ventricular depolarization), T wave (ventricular repolarization).',
    'Cardiac output at rest: ~5.25 L/min (HR 75 × SV 70 mL). During exercise: up to 20-25 L/min.',
    'The coronary arteries fill during DIASTOLE (when the heart relaxes), not systole.',
    'The Frank-Starling law: greater stretch (preload) → stronger contraction → greater stroke volume.',
    'S1 ("lubb") = AV valves close; S2 ("dupp") = semilunar valves close.',
    'The cardiac conduction path: SA node → AV node → Bundle of His → bundle branches → Purkinje fibers.'
  ],

  sections: [
    // ===== MODULE 1: Heart Anatomy, Chambers & Valves =====
    {
      id: 'heart-s1',
      title: 'Heart Anatomy, Chambers & Valves',
      pageRange: 'Pages 1-8',
      learnItems: [
        {
          title: 'Heart Position & Orientation',
          body: 'The heart lies in the mediastinum between the lungs, with a base (broad superior portion) and an apex that tilts left and rests just above the diaphragm. It has anterior and inferior surfaces and right and left borders.'
        },
        {
          title: 'Pericardium',
          body: 'The fibrous pericardium is tough dense irregular connective tissue that protects, anchors, and prevents overstretching of the heart. The serous pericardium has parietal and visceral (epicardium) layers with a pericardial cavity and fluid between them.'
        },
        {
          title: 'Heart Wall Layers',
          body: 'The heart wall has three layers: epicardium (outer serous membrane), myocardium (thick cardiac muscle with fibrous skeleton responsible for pumping), and endocardium (smooth inner lining continuous with vessel endothelium).'
        },
        {
          title: 'Chambers of the Heart',
          body: 'The heart has four chambers: two superior atria (receiving chambers) and two inferior ventricles (pumping chambers). Each atrium has an auricle that slightly increases volume and contains pectinate muscles; atrial walls are thin due to light workload. Ventricles are separated by the interventricular septum and have internal ridges called trabeculae carneae.'
        },
        {
          title: 'Right Atrium and Right Ventricle',
          body: 'The right atrium receives blood from the superior vena cava, inferior vena cava, and coronary sinus; the interatrial septum contains the fossa ovalis (remnant of foramen ovale). The tricuspid (right AV) valve with three cusps leads to the right ventricle. The right ventricle forms most of the anterior surface; contains papillary muscles, trabeculae carneae, chordae tendineae, and opens into the pulmonary trunk via the pulmonary semilunar valve.'
        },
        {
          title: 'Left Atrium and Left Ventricle',
          body: 'The left atrium forms most of the base and receives four pulmonary veins (two right, two left). Blood flows through the bicuspid/mitral (left AV) valve with two cusps into the left ventricle. The left ventricle forms the apex, has the thickest myocardium, contains chordae tendineae and trabeculae carneae, and pumps through the aortic semilunar valve into the ascending aorta. Openings to the coronary arteries lie just above the aortic valve.'
        },
        {
          title: 'Myocardial Thickness and Function',
          body: 'Atria are thin-walled and deliver blood to nearby ventricles. The right ventricle pumps to the low-resistance lungs; the left ventricle has the thickest wall to supply the systemic circulation.'
        },
        {
          title: 'Fibrous Skeleton and Valve Types',
          body: 'The fibrous skeleton consists of dense connective tissue rings around valves, fused with the interventricular septum; it provides structural support, muscle attachment, and acts as an electrical insulator between atria and ventricles. AV valves include the right AV (tricuspid) and left AV (mitral/bicuspid) with chordae tendineae attaching cusps to papillary muscles. Semilunar valves include the pulmonary (right ventricle to pulmonary trunk) and aortic (left ventricle to aorta), controlling outflow from the ventricles.'
        },
        {
          title: 'AV Valve Mechanics',
          body: 'When ventricles relax: pressure falls, semilunar valves close, AV valves open, and blood flows from atria into ventricles. When ventricles contract: pressure rises, AV valves close; papillary muscles contract pulling on chordae tendineae to prevent prolapse; semilunar valves open and blood is ejected into the great arteries.'
        }
      ],
      keyTerms: [
        { term: 'Mediastinum', definition: 'The central compartment of the thoracic cavity between the lungs where the heart is located.' },
        { term: 'Pericardium', definition: 'The multi-layered sac surrounding the heart, consisting of a fibrous outer layer and a serous inner layer with parietal and visceral components.' },
        { term: 'Epicardium', definition: 'The outermost layer of the heart wall, also known as the visceral layer of the serous pericardium.' },
        { term: 'Myocardium', definition: 'The muscular middle layer of the heart wall composed of cardiac muscle, responsible for the pumping action of the heart.' },
        { term: 'Endocardium', definition: 'The smooth inner lining of the heart chambers and valves, continuous with the endothelium of blood vessels.' },
        { term: 'Auricle', definition: 'A small ear-shaped pouch extending from each atrium that slightly increases atrial volume.' },
        { term: 'Trabeculae Carneae', definition: 'Internal ridges of muscle found on the inner walls of the ventricles.' },
        { term: 'Fossa Ovalis', definition: 'A shallow depression in the interatrial septum that is the remnant of the fetal foramen ovale.' },
        { term: 'Chordae Tendineae', definition: 'Tendinous cords that connect the AV valve cusps to the papillary muscles, preventing valve prolapse during ventricular contraction.' },
        { term: 'Tricuspid Valve', definition: 'The right atrioventricular valve with three cusps, located between the right atrium and right ventricle.' },
        { term: 'Mitral (Bicuspid) Valve', definition: 'The left atrioventricular valve with two cusps, located between the left atrium and left ventricle.' },
        { term: 'Semilunar Valves', definition: 'The pulmonary and aortic valves that control blood flow out of the ventricles into the pulmonary trunk and aorta respectively.' },
        { term: 'Fibrous Skeleton', definition: 'Dense connective tissue rings around the heart valves that provide structural support, muscle attachment, and electrical insulation between atria and ventricles.' },
        { term: 'Papillary Muscles', definition: 'Cone-shaped muscles in the ventricles that attach to chordae tendineae and contract to prevent AV valve prolapse.' },
        { term: 'Interventricular Septum', definition: 'The muscular wall that separates the right and left ventricles.' }
      ],
      memoryAids: [
        'Try Before Purchasing Aspirins: Tricuspid → Bicuspid → Pulmonary → Aortic — the order of valves through which blood flows from right atrium to systemic circulation.',
        'Tricuspid = right (both have letters "ri" — tRIcuspid, RIght); Bicuspid/Mitral = left.',
        'Left is Larger: the Left ventricle has the thickest wall because it pumps to the entire systemic circulation.',
        'Lubb-Dupp: S1 (AV valves close) then S2 (semilunar valves close) — AV before SL, just like the alphabet (A before S).',
        'Chordae tendineae are like parachute cords — they hold the valve flaps down to prevent them from flying up (prolapsing) into the atria.'
      ],
      inlineQuestions: [
        {
          question: 'Which layer of the heart wall is composed mainly of cardiac muscle and provides the pumping action?',
          options: { A: 'Epicardium', B: 'Endocardium', C: 'Myocardium', D: 'Fibrous pericardium' },
          answer: 'C',
          explanation: 'The myocardium is the thick muscular middle layer of the heart wall made of cardiac muscle, responsible for contraction and pumping blood.'
        },
        {
          question: 'Which valve is located between the right atrium and right ventricle?',
          options: { A: 'Mitral (bicuspid) valve', B: 'Aortic semilunar valve', C: 'Pulmonary semilunar valve', D: 'Tricuspid valve' },
          answer: 'D',
          explanation: 'The tricuspid valve, also called the right AV valve, has three cusps and is located between the right atrium and right ventricle.'
        },
        {
          question: 'During ventricular contraction, the chordae tendineae:',
          options: { A: 'Open the semilunar valves', B: 'Pull AV valve cusps toward the atria', C: 'Prevent AV valve cusps from prolapsing into the atria', D: 'Close the coronary arteries' },
          answer: 'C',
          explanation: 'During ventricular contraction, papillary muscles pull on chordae tendineae to prevent the AV valve cusps from being pushed back (prolapsing) into the atria.'
        }
      ],
      quiz: [
        {
          question: 'The fibrous pericardium functions mainly to:',
          options: { A: 'Produce pericardial fluid', B: 'Anchor the heart and prevent overstretching', C: 'Conduct electrical impulses', D: 'Store blood' },
          answer: 'B',
          explanation: 'The fibrous pericardium is a tough, dense irregular connective tissue layer that protects the heart, anchors it to surrounding structures, and prevents overstretching.'
        },
        {
          question: 'Which chamber receives blood from the superior and inferior venae cavae and the coronary sinus?',
          options: { A: 'Left ventricle', B: 'Right ventricle', C: 'Right atrium', D: 'Left atrium' },
          answer: 'C',
          explanation: 'The right atrium is the receiving chamber for all systemic venous blood, arriving via the superior vena cava, inferior vena cava, and coronary sinus.'
        },
        {
          question: 'The fossa ovalis in the interatrial septum is a remnant of the fetal:',
          options: { A: 'Ductus arteriosus', B: 'Foramen ovale', C: 'Umbilical vein', D: 'Ductus venosus' },
          answer: 'B',
          explanation: 'The fossa ovalis is a shallow depression in the interatrial septum that marks where the foramen ovale allowed blood to bypass the lungs during fetal development.'
        },
        {
          question: 'The left atrium receives oxygenated blood directly from the:',
          options: { A: 'Pulmonary veins', B: 'Pulmonary trunk', C: 'Superior vena cava', D: 'Coronary sinus' },
          answer: 'A',
          explanation: 'The left atrium receives oxygenated blood from four pulmonary veins (two right, two left) returning from the lungs.'
        },
        {
          question: 'The valve that blood passes through to enter the ascending aorta is the:',
          options: { A: 'Pulmonary valve', B: 'Aortic semilunar valve', C: 'Tricuspid valve', D: 'Mitral valve' },
          answer: 'B',
          explanation: 'The aortic semilunar valve is located at the exit of the left ventricle and controls blood flow into the ascending aorta.'
        },
        {
          question: 'The chamber forming the apex of the heart is the:',
          options: { A: 'Right atrium', B: 'Left atrium', C: 'Right ventricle', D: 'Left ventricle' },
          answer: 'D',
          explanation: 'The left ventricle forms the apex of the heart, which points inferiorly and to the left.'
        },
        {
          question: 'Thin, flaplike extensions that increase the volume of the atria are called:',
          options: { A: 'Papillary muscles', B: 'Auricles', C: 'Trabeculae carneae', D: 'Chordae tendineae' },
          answer: 'B',
          explanation: 'Auricles are small ear-shaped pouches that project from each atrium, slightly increasing their volume.'
        },
        {
          question: 'Internal ridges of muscle found in the ventricles are called:',
          options: { A: 'Pectinate muscles', B: 'Trabeculae carneae', C: 'Intercalated discs', D: 'Crista terminalis' },
          answer: 'B',
          explanation: 'Trabeculae carneae are irregular ridges of muscle on the internal surfaces of the ventricles.'
        },
        {
          question: 'The fibrous skeleton of the heart does all of the following EXCEPT:',
          options: { A: 'Supports heart valves', B: 'Provides attachment for cardiac muscle', C: 'Acts as an electrical insulator between atria and ventricles', D: 'Pumps blood through the chambers' },
          answer: 'D',
          explanation: 'The fibrous skeleton provides structural support, muscle attachment, and electrical insulation, but it does not pump blood — that is the job of the myocardium.'
        },
        {
          question: 'Which statement about myocardial thickness is correct?',
          options: { A: 'Atrial walls are thicker than ventricular walls', B: 'Right ventricle has the thickest wall', C: 'Left ventricle wall is the thickest to pump to systemic circulation', D: 'All chambers have equal wall thickness' },
          answer: 'C',
          explanation: 'The left ventricle has the thickest myocardium because it must generate enough force to pump blood through the entire systemic circulation.'
        },
        {
          question: 'The pulmonary semilunar valve controls blood flow from:',
          options: { A: 'Right atrium to right ventricle', B: 'Right ventricle to pulmonary trunk', C: 'Left ventricle to aorta', D: 'Left atrium to left ventricle' },
          answer: 'B',
          explanation: 'The pulmonary semilunar valve is located at the exit of the right ventricle and controls blood flow into the pulmonary trunk toward the lungs.'
        },
        {
          question: 'The endocardium:',
          options: { A: 'Is the outermost heart layer', B: 'Lines the chambers and covers valves, continuous with vessel endothelium', C: 'Forms the fibrous pericardium', D: 'Is composed entirely of skeletal muscle' },
          answer: 'B',
          explanation: 'The endocardium is the smooth inner lining of the heart chambers and valves. It is continuous with the endothelium of blood vessels.'
        },
        {
          question: 'Which structure separates the right and left ventricles?',
          options: { A: 'Interventricular septum', B: 'Interatrial septum', C: 'Coronary sulcus', D: 'Fossa ovalis' },
          answer: 'A',
          explanation: 'The interventricular septum is a thick muscular wall that separates the right and left ventricles.'
        },
        {
          question: 'The chamber that forms most of the base of the heart is the:',
          options: { A: 'Right ventricle', B: 'Left ventricle', C: 'Right atrium', D: 'Left atrium' },
          answer: 'D',
          explanation: 'The left atrium forms most of the base (posterior surface) of the heart.'
        },
        {
          question: 'When ventricles relax, which valves are open?',
          options: { A: 'Semilunar valves', B: 'AV valves', C: 'All valves', D: 'No valves' },
          answer: 'B',
          explanation: 'When the ventricles relax, ventricular pressure drops below atrial pressure, causing the AV valves to open and allowing blood to flow from the atria into the ventricles. The semilunar valves close.'
        },
        {
          question: 'Papillary muscles are found in the:',
          options: { A: 'Atria and attach to pectinate muscles', B: 'Ventricles and attach to chordae tendineae', C: 'Aorta and control outflow', D: 'Pulmonary trunk only' },
          answer: 'B',
          explanation: 'Papillary muscles are located in the ventricles and are connected to AV valve cusps via chordae tendineae, preventing valve prolapse during contraction.'
        },
        {
          question: 'The right ventricle primarily pumps blood to the:',
          options: { A: 'Brain', B: 'Systemic circulation', C: 'Lungs', D: 'Coronary circulation only' },
          answer: 'C',
          explanation: 'The right ventricle pumps deoxygenated blood through the pulmonary semilunar valve into the pulmonary trunk and on to the lungs for gas exchange.'
        }
      ],
      flashcards: [
        { front: 'Where does the heart lie and what are its main landmarks?', back: 'The heart lies in the mediastinum between the lungs, with a base (broad superior portion) and an apex that tilts left and rests just above the diaphragm.' },
        { front: 'What is the function of the fibrous pericardium?', back: 'It protects the heart, anchors it to surrounding structures, and prevents overstretching.' },
        { front: 'What are the three layers of the heart wall from outside to inside?', back: 'Epicardium (outer serous membrane), myocardium (thick cardiac muscle), and endocardium (smooth inner lining continuous with vessel endothelium).' },
        { front: 'What are the four chambers of the heart?', back: 'Two superior atria (receiving chambers) and two inferior ventricles (pumping chambers).' },
        { front: 'What is the fossa ovalis?', back: 'A remnant of the fetal foramen ovale located in the interatrial septum of the right atrium.' },
        { front: 'What are trabeculae carneae?', back: 'Internal ridges of muscle found on the inner walls of the ventricles.' },
        { front: 'What blood vessels deliver blood to the right atrium?', back: 'The superior vena cava, inferior vena cava, and coronary sinus.' },
        { front: 'How many cusps does the tricuspid valve have and where is it located?', back: 'Three cusps; it is located between the right atrium and right ventricle.' },
        { front: 'How many pulmonary veins deliver blood to the left atrium?', back: 'Four pulmonary veins (two right and two left).' },
        { front: 'Which ventricle has the thickest myocardium and why?', back: 'The left ventricle has the thickest wall because it must pump blood through the entire systemic circulation.' },
        { front: 'What is the role of the fibrous skeleton of the heart?', back: 'It provides structural support for valves, attachment for cardiac muscle, and acts as an electrical insulator between atria and ventricles.' },
        { front: 'What are chordae tendineae and what do they do?', back: 'Tendinous cords connecting AV valve cusps to papillary muscles; they prevent valve cusps from prolapsing into the atria during ventricular contraction.' },
        { front: 'What happens to valves when ventricles relax?', back: 'Semilunar valves close, AV valves open, and blood flows from atria into ventricles.' },
        { front: 'What happens to valves when ventricles contract?', back: 'AV valves close (papillary muscles pull chordae tendineae to prevent prolapse), semilunar valves open, and blood is ejected into great arteries.' },
        { front: 'Where are the openings to the coronary arteries located?', back: 'Just above the aortic semilunar valve in the ascending aorta.' }
      ]
    },

    // ===== MODULE 2: Conduction System, ECG, Cardiac Cycle, CO & HR =====
    {
      id: 'heart-s2',
      title: 'Conduction System, ECG, Cardiac Cycle & Cardiac Output',
      pageRange: 'Pages 9-16',
      learnItems: [
        {
          title: 'Cardiac Conduction System Basics',
          body: 'The heartbeat is myogenic and autorhythmic, originating within the heart with regular, spontaneous depolarization. The SA node in the right atrium acts as the pacemaker, initiating each heartbeat and setting heart rate; the fibrous skeleton insulates atria from ventricles.'
        },
        {
          title: 'Conduction Pathway',
          body: 'The conduction pathway proceeds as follows: SA node to atrial myocardium to AV node (electrical gateway to ventricles). The AV bundle (bundle of His) carries signals from the AV node into the interventricular septum, where right and left bundle branches descend to the apex; Purkinje fibers then spread upward through the ventricular myocardium.'
        },
        {
          title: 'Firing Rates and Ectopic Pacemakers',
          body: 'The SA node fires 90-100 times per minute; the AV node fires at 40-50 per minute; ventricular fibers alone fire at 20-40 per minute. If both nodes are suppressed, the ventricular rate is too low and an artificial pacemaker may be needed. Extra beats from other sites are ectopic pacemakers; caffeine and nicotine increase their activity.'
        },
        {
          title: 'Timing of Atrial and Ventricular Excitation',
          body: 'SA node depolarization spreads through atria and to the AV node in about 50 ms. The AV node delay (~100 ms) due to smaller fibers allows atria to finish contracting and filling the ventricles before ventricular contraction. Excitation then spreads through both ventricles in about 50 ms.'
        },
        {
          title: 'Action Potential in Cardiac Muscle',
          body: 'The resting potential is about -90 mV; depolarization occurs as fast Na+ channels open and membrane potential peaks around +30 mV. A plateau phase (200-250 ms) due to slow Ca2+ entry and SR release maintains contraction. Repolarization occurs as Ca2+ channels close and K+ channels open; the long refractory period prevents tetanus and allows filling.'
        },
        {
          title: 'Electrocardiogram (ECG) Components',
          body: 'The ECG is a composite of all nodal and myocardial action potentials recorded on the body surface. The P wave represents SA node firing and atrial depolarization, followed by atrial systole. The PQ interval is the conduction time from atria to ventricles. The QRS complex represents AV node firing, ventricular depolarization and contraction (ventricular systole); atrial repolarization is masked. The T wave represents ventricular repolarization just before diastole.'
        },
        {
          title: 'ECG Uses and Abnormalities',
          body: 'The ECG helps diagnose conduction abnormalities, myocardial infarction, heart enlargement, and electrolyte or hormone imbalances. Examples include no P waves, extrasystoles with abnormal QRS/T, or arrhythmias from AV node conduction failure (no effective pumping).'
        },
        {
          title: 'Cardiac Cycle Phases and Volumes',
          body: 'At 75 bpm, one cardiac cycle lasts 0.8 seconds: atrial systole 0.1 s, ventricular systole 0.3 s, and a quiescent period of 0.4 s. End-diastolic volume (EDV) is about 130 ml at end of diastole; end-systolic volume (ESV) is about 60 ml at end of systole; stroke volume (SV) is approximately 70 ml, calculated as EDV minus ESV.'
        },
        {
          title: 'Heart Sounds',
          body: 'S1 ("lubb") is a louder, longer sound from closure of AV valves at the start of ventricular systole. S2 ("dupp") is a softer, sharper sound from closure of semilunar valves at the start of ventricular diastole. S3 may occur during rapid ventricular filling and is rarely heard in people over 30.'
        },
        {
          title: 'Cardiac Output and Heart Rate',
          body: 'Cardiac output (CO) equals heart rate (HR) multiplied by stroke volume (SV); resting CO is approximately 5.25 L/min (75 x 70 ml), typically 4-6 L/min. CO can reach about 21 L/min in fit individuals and up to 35 L/min in elite athletes; cardiac reserve equals max CO divided by rest CO. Tachycardia is a persistent resting HR above 100 bpm; bradycardia is HR below 60 bpm, common in endurance athletes who have higher stroke volume.'
        }
      ],
      keyTerms: [
        { term: 'Autorhythmicity', definition: 'The ability of cardiac muscle to generate its own rhythmic electrical impulses without external stimulation.' },
        { term: 'SA Node', definition: 'The sinoatrial node located in the right atrium that acts as the primary pacemaker of the heart, setting the heart rate.' },
        { term: 'AV Node', definition: 'The atrioventricular node that serves as the electrical gateway between atria and ventricles, providing a critical delay for ventricular filling.' },
        { term: 'Bundle of His (AV Bundle)', definition: 'The conduction pathway that carries electrical impulses from the AV node into the interventricular septum.' },
        { term: 'Purkinje Fibers', definition: 'Specialized conducting fibers that spread excitation upward through the ventricular myocardium, ensuring coordinated contraction.' },
        { term: 'Ectopic Pacemaker', definition: 'An abnormal site in the heart that generates extra beats outside the normal conduction pathway; activity increased by caffeine and nicotine.' },
        { term: 'P Wave', definition: 'The ECG deflection representing atrial depolarization initiated by SA node firing.' },
        { term: 'QRS Complex', definition: 'The ECG deflection representing ventricular depolarization and the onset of ventricular systole.' },
        { term: 'T Wave', definition: 'The ECG deflection representing ventricular repolarization occurring just before diastole.' },
        { term: 'PQ Interval', definition: 'The time on an ECG representing conduction from the atria through the AV node to the ventricles.' },
        { term: 'End-Diastolic Volume (EDV)', definition: 'The volume of blood in a ventricle at the end of diastole (filling), approximately 130 ml at rest.' },
        { term: 'End-Systolic Volume (ESV)', definition: 'The volume of blood remaining in a ventricle after contraction, approximately 60 ml at rest.' },
        { term: 'Stroke Volume (SV)', definition: 'The volume of blood ejected per heartbeat, calculated as EDV minus ESV, approximately 70 ml at rest.' },
        { term: 'Cardiac Output (CO)', definition: 'The volume of blood pumped by each ventricle per minute, calculated as HR times SV, approximately 5.25 L/min at rest.' },
        { term: 'Tachycardia', definition: 'A persistent resting heart rate greater than 100 beats per minute.' },
        { term: 'Bradycardia', definition: 'A persistent resting heart rate less than 60 beats per minute, commonly seen in endurance-trained athletes.' }
      ],
      memoryAids: [
        'Conduction pathway order: SA node → AV node → Bundle of His → Bundle Branches → Purkinje fibers. Remember: "Some Animals Have Big Paws."',
        'P-QRS-T on ECG: P = atrial dePolariZation, QRS = ventRicular depolariZation (and contRaction), T = venTricular repolariZaTion.',
        'Stroke Volume = EDV - ESV. Think "what goes in minus what stays = what goes out" (130 - 60 = 70 ml).',
        'S1 = AV valves close (start of systole), S2 = Semilunar valves close (start of diastole). "1" comes before "2" just as systole comes before diastole.',
        'CO = HR x SV. Think "your output depends on how fast you beat times how much you pump each beat."'
      ],
      inlineQuestions: [
        {
          question: 'The primary pacemaker that normally sets the heart rate is the:',
          options: { A: 'AV node', B: 'Purkinje fiber network', C: 'SA node', D: 'Bundle of His' },
          answer: 'C',
          explanation: 'The SA node (sinoatrial node) in the right atrium is the primary pacemaker that initiates each heartbeat and sets the heart rate at 90-100 bpm intrinsically.'
        },
        {
          question: 'On an ECG, the P wave represents:',
          options: { A: 'Ventricular depolarization', B: 'Atrial depolarization', C: 'Ventricular repolarization', D: 'Atrial repolarization' },
          answer: 'B',
          explanation: 'The P wave represents the depolarization of the atria initiated by SA node firing, which is followed by atrial contraction (systole).'
        },
        {
          question: 'The "lubb" (S1) heart sound is caused by:',
          options: { A: 'Opening of AV valves', B: 'Closure of AV valves at beginning of ventricular systole', C: 'Closure of semilunar valves', D: 'Turbulent flow in the venae cavae' },
          answer: 'B',
          explanation: 'S1 ("lubb") is the louder, longer heart sound produced by the closure of the AV valves (tricuspid and mitral) at the beginning of ventricular systole.'
        }
      ],
      quiz: [
        {
          question: 'The AV node\'s primary role in the conduction system is to:',
          options: { A: 'Initiate each heartbeat', B: 'Provide a delay so ventricles fill before contracting', C: 'Contract the atria', D: 'Pump blood into the aorta' },
          answer: 'B',
          explanation: 'The AV node provides a critical delay (~100 ms) to allow the atria to finish contracting and filling the ventricles before ventricular contraction begins.'
        },
        {
          question: 'Which structure carries impulses from the AV node into the interventricular septum?',
          options: { A: 'SA node', B: 'Purkinje fibers', C: 'AV bundle (bundle of His)', D: 'Coronary sinus' },
          answer: 'C',
          explanation: 'The AV bundle (bundle of His) carries electrical impulses from the AV node into the interventricular septum, where it divides into right and left bundle branches.'
        },
        {
          question: 'If both the SA and AV nodes fail, intrinsic ventricular fibers will fire at about:',
          options: { A: '10-20 beats/min', B: '20-40 beats/min', C: '60-80 beats/min', D: '90-100 beats/min' },
          answer: 'B',
          explanation: 'Without input from the SA and AV nodes, ventricular autorhythmic fibers fire at their intrinsic rate of only 20-40 beats per minute, which is usually too slow to sustain adequate circulation.'
        },
        {
          question: 'The plateau phase of the cardiac muscle action potential is mainly due to:',
          options: { A: 'Opening of fast Na+ channels', B: 'Closing of all ion channels', C: 'Influx of Ca2+ through slow channels and SR release', D: 'Efflux of K+ only' },
          answer: 'C',
          explanation: 'The plateau phase (200-250 ms) is maintained by the slow influx of calcium ions through voltage-gated Ca2+ channels and calcium release from the sarcoplasmic reticulum.'
        },
        {
          question: 'The long refractory period in cardiac muscle:',
          options: { A: 'Prevents tetanus and allows the heart to fill', B: 'Causes faster heart rates', C: 'Is shorter than in skeletal muscle', D: 'Prevents any contraction' },
          answer: 'A',
          explanation: 'The long refractory period in cardiac muscle prevents tetanic contractions (sustained contraction), ensuring the heart relaxes between beats to allow filling with blood.'
        },
        {
          question: 'The QRS complex corresponds to:',
          options: { A: 'Atrial repolarization only', B: 'Ventricular depolarization and onset of ventricular systole', C: 'Ventricular repolarization', D: 'SA node firing only' },
          answer: 'B',
          explanation: 'The QRS complex represents ventricular depolarization, which triggers ventricular contraction (systole). Atrial repolarization is hidden within the QRS complex.'
        },
        {
          question: 'The T wave on an ECG is generated by:',
          options: { A: 'Atrial depolarization', B: 'Atrial repolarization', C: 'Ventricular depolarization', D: 'Ventricular repolarization' },
          answer: 'D',
          explanation: 'The T wave represents ventricular repolarization, which occurs just before the ventricles enter diastole (relaxation).'
        },
        {
          question: 'A total cardiac cycle at 75 beats/min lasts about:',
          options: { A: '0.4 seconds', B: '0.6 seconds', C: '0.8 seconds', D: '1.0 second' },
          answer: 'C',
          explanation: 'At 75 bpm, one complete cardiac cycle lasts about 0.8 seconds (60 seconds / 75 beats), divided into atrial systole (0.1 s), ventricular systole (0.3 s), and a quiescent period (0.4 s).'
        },
        {
          question: 'End-diastolic volume (EDV) in a typical resting ventricle is about:',
          options: { A: '50 ml', B: '70 ml', C: '100 ml', D: '130 ml' },
          answer: 'D',
          explanation: 'End-diastolic volume, the amount of blood in the ventricle at the end of filling (diastole), is approximately 130 ml at rest.'
        },
        {
          question: 'Stroke volume is defined as:',
          options: { A: 'EDV + ESV', B: 'EDV - ESV', C: 'HR x EDV', D: 'HR x ESV' },
          answer: 'B',
          explanation: 'Stroke volume is the difference between end-diastolic volume and end-systolic volume (SV = EDV - ESV), approximately 70 ml at rest (130 - 60 = 70).'
        },
        {
          question: 'The "dupp" (S2) sound corresponds to:',
          options: { A: 'Opening of semilunar valves', B: 'Closure of AV valves', C: 'Closure of semilunar valves at beginning of ventricular diastole', D: 'Rapid ventricular filling' },
          answer: 'C',
          explanation: 'S2 ("dupp") is the softer, sharper heart sound produced by the closure of the semilunar valves (pulmonary and aortic) at the beginning of ventricular diastole.'
        },
        {
          question: 'At rest, if heart rate is 75 bpm and stroke volume is 70 ml, cardiac output is approximately:',
          options: { A: '3.5 L/min', B: '5.25 L/min', C: '7.0 L/min', D: '10.5 L/min' },
          answer: 'B',
          explanation: 'Cardiac output = HR x SV = 75 bpm x 70 ml = 5,250 ml/min = 5.25 L/min.'
        },
        {
          question: 'Tachycardia is defined as a persistent resting heart rate:',
          options: { A: 'Less than 60 bpm', B: 'Between 60-80 bpm', C: 'Greater than 100 bpm', D: 'Exactly 75 bpm' },
          answer: 'C',
          explanation: 'Tachycardia is defined as a persistent resting heart rate greater than 100 beats per minute.'
        },
        {
          question: 'Which condition is commonly associated with bradycardia in healthy individuals?',
          options: { A: 'Severe anemia', B: 'Endurance training (increased stroke volume)', C: 'Fever', D: 'Hyperthyroidism' },
          answer: 'B',
          explanation: 'Endurance-trained athletes commonly have bradycardia because their hearts have adapted to produce a larger stroke volume, so fewer beats are needed to maintain adequate cardiac output.'
        },
        {
          question: 'During the isovolumetric contraction phase:',
          options: { A: 'Semilunar valves are open and blood is ejected', B: 'All valves are closed and ventricular pressure rises', C: 'AV valves are open and ventricles fill', D: 'Semilunar valves are open but AV valves are closed' },
          answer: 'B',
          explanation: 'During isovolumetric contraction, all four valves are closed. The ventricles contract, building up pressure without changing volume, until pressure exceeds arterial pressure and semilunar valves open.'
        },
        {
          question: 'During ventricular ejection:',
          options: { A: 'AV valves are open and semilunar valves are closed', B: 'Both sets of valves are closed', C: 'Semilunar valves are open and blood leaves the ventricles', D: 'All chambers are relaxed' },
          answer: 'C',
          explanation: 'During ventricular ejection, the semilunar valves are open and blood is pumped out of the ventricles into the pulmonary trunk and aorta.'
        },
        {
          question: 'An ECG with no P waves and irregular QRS complexes likely indicates a problem with the:',
          options: { A: 'Ventricular myocardium only', B: 'SA node', C: 'Aortic valve', D: 'Coronary veins' },
          answer: 'B',
          explanation: 'The absence of P waves indicates the SA node is not generating normal atrial depolarization signals. Irregular QRS complexes suggest abnormal conduction, pointing to SA node dysfunction.'
        },
        {
          question: 'The SA node normally fires how many times per minute?',
          options: { A: '20-40', B: '40-50', C: '60-80', D: '90-100' },
          answer: 'D',
          explanation: 'The SA node has an intrinsic firing rate of 90-100 times per minute, though vagal tone normally slows the resting heart rate to about 70-80 bpm.'
        },
        {
          question: 'What does the PQ interval represent?',
          options: { A: 'Time for ventricular ejection', B: 'Conduction time from atria to ventricles', C: 'Ventricular repolarization', D: 'Duration of atrial diastole' },
          answer: 'B',
          explanation: 'The PQ interval represents the time it takes for the electrical impulse to travel from the atria through the AV node to the ventricles.'
        },
        {
          question: 'Which heart sound is associated with closure of the AV valves?',
          options: { A: 'S1 ("lubb")', B: 'S2 ("dupp")', C: 'S3', D: 'None of the above' },
          answer: 'A',
          explanation: 'S1 ("lubb") is produced by the closure of the AV valves (tricuspid and mitral) at the onset of ventricular systole.'
        },
        {
          question: 'If EDV is 130 ml and ESV is 60 ml, stroke volume is:',
          options: { A: '60 ml', B: '70 ml', C: '130 ml', D: '190 ml' },
          answer: 'B',
          explanation: 'Stroke volume = EDV - ESV = 130 ml - 60 ml = 70 ml.'
        },
        {
          question: 'An ECG is especially useful for detecting:',
          options: { A: 'Blood pressure in the aorta', B: 'Abnormal conduction pathways or MI', C: 'Serum cholesterol levels', D: 'Lung volume changes' },
          answer: 'B',
          explanation: 'The ECG is a primary diagnostic tool for detecting conduction abnormalities, myocardial infarction, heart enlargement, and electrolyte or hormone imbalances.'
        }
      ],
      flashcards: [
        { front: 'What does it mean that the heartbeat is myogenic and autorhythmic?', back: 'It means the heartbeat originates within the heart itself with regular, spontaneous depolarization without external nerve stimulation.' },
        { front: 'What is the role of the SA node?', back: 'The SA node in the right atrium acts as the primary pacemaker, initiating each heartbeat and setting the heart rate.' },
        { front: 'What is the conduction pathway of the heart?', back: 'SA node → atrial myocardium → AV node → AV bundle (bundle of His) → right and left bundle branches → Purkinje fibers.' },
        { front: 'What are the intrinsic firing rates of the SA node, AV node, and ventricular fibers?', back: 'SA node: 90-100/min; AV node: 40-50/min; ventricular fibers: 20-40/min.' },
        { front: 'Why is the AV node delay important?', back: 'The ~100 ms delay allows the atria to finish contracting and filling the ventricles before ventricular contraction begins.' },
        { front: 'What causes the plateau phase of the cardiac action potential?', back: 'Slow Ca2+ entry through voltage-gated calcium channels and calcium release from the sarcoplasmic reticulum, lasting 200-250 ms.' },
        { front: 'Why is the long refractory period in cardiac muscle important?', back: 'It prevents tetanus (sustained contraction), ensuring the heart relaxes between beats to allow filling with blood.' },
        { front: 'What does the P wave represent on an ECG?', back: 'Atrial depolarization initiated by SA node firing, followed by atrial systole.' },
        { front: 'What does the QRS complex represent?', back: 'Ventricular depolarization and the onset of ventricular contraction (systole). Atrial repolarization is masked within it.' },
        { front: 'What does the T wave represent?', back: 'Ventricular repolarization occurring just before diastole.' },
        { front: 'How long does one cardiac cycle last at 75 bpm?', back: '0.8 seconds: atrial systole 0.1 s, ventricular systole 0.3 s, quiescent period 0.4 s.' },
        { front: 'What are EDV, ESV, and SV at rest?', back: 'EDV ~130 ml, ESV ~60 ml, SV ~70 ml (SV = EDV - ESV).' },
        { front: 'What causes the S1 ("lubb") heart sound?', back: 'Closure of AV valves at the start of ventricular systole; it is louder and longer than S2.' },
        { front: 'What causes the S2 ("dupp") heart sound?', back: 'Closure of semilunar valves at the start of ventricular diastole; it is softer and sharper than S1.' },
        { front: 'How is cardiac output calculated?', back: 'CO = HR x SV. At rest: 75 bpm x 70 ml = 5.25 L/min (typically 4-6 L/min).' },
        { front: 'What is an ectopic pacemaker?', back: 'An abnormal site in the heart that generates extra beats outside the normal conduction pathway; caffeine and nicotine increase their activity.' }
      ]
    },

    // ===== MODULE 3: Autonomic HR Control, Stroke Volume, CHF, Risk Factors =====
    {
      id: 'heart-s3',
      title: 'Autonomic HR Control, Stroke Volume, CHF & Risk Factors',
      pageRange: 'Pages 17-24',
      learnItems: [
        {
          title: 'Cardiac Output and Reserve',
          body: 'Cardiac output (CO) is the amount ejected by each ventricle per minute: CO = HR x SV. Resting CO is approximately 5.25 L/min (75 bpm x 70 ml), usually 4-6 L/min; during vigorous exercise CO can reach about 21 L/min in fit people and up to about 35 L/min in world-class athletes. Cardiac reserve equals maximum CO divided by CO at rest; it increases with fitness and decreases with disease (about 4-5 normally, 7-8 in athletes).'
        },
        {
          title: 'Heart Rate Basics',
          body: 'Heart rate is measured from pulse; infants have about 120 bpm, young adult females 72-80 bpm, young adult males 64-72 bpm; HR rises again in the elderly. Tachycardia is a persistent resting HR above 100 bpm (due to stress, anxiety, drugs, heart disease, or increased body temperature). Bradycardia is a persistent resting HR below 60 bpm, common during sleep and in endurance-trained athletes (who have higher stroke volume).'
        },
        {
          title: 'Chronotropic Effects and Cardiac Centers',
          body: 'Positive chronotropic agents increase HR; negative chronotropic agents decrease HR. The cardiac center in the medulla oblongata has two neuronal pools: a cardioacceleratory center (sympathetic) and a cardioinhibitory center (parasympathetic).'
        },
        {
          title: 'Sympathetic Stimulation',
          body: 'The cardioacceleratory center stimulates sympathetic cardiac accelerator nerves to the SA node, AV node, and myocardium. These nerves release norepinephrine, which binds to beta-adrenergic receptors and increases HR (positive chronotropic effect). CO peaks at HR of 160-180 bpm; sympathetic stimulation can push HR up to about 230 bpm, but very high rates reduce SV and CO due to less filling time.'
        },
        {
          title: 'Parasympathetic Stimulation',
          body: 'The cardioinhibitory center sends parasympathetic fibers via the vagus nerves: the right vagus mainly to the SA node, the left vagus to the AV node. They release acetylcholine, opening K+ channels in nodal cells, hyperpolarizing them and slowing their firing rate, thus lowering HR. Vagal tone maintains resting HR around 70-80 bpm; if vagus nerves are cut, the SA node fires at its intrinsic rate (~100 bpm).'
        },
        {
          title: 'Inputs to the Cardiac Center',
          body: 'Higher brain centers (cortex, limbic system, hypothalamus) influence HR in response to sensory and emotional stimuli (e.g., fear, excitement). Proprioceptors in muscles and joints signal activity changes, causing HR to rise at the start of exercise before metabolic demands change. Baroreceptors in the aorta and carotid arteries send pressure information: if BP falls, firing rate drops and the cardiac center raises HR; if BP rises, firing rate increases and the cardiac center lowers HR. Chemoreceptors in the aortic arch, carotid arteries, and medulla monitor pH, CO2, and O2; hypercapnia and acidosis stimulate the cardiac center to increase HR.'
        },
        {
          title: 'Chemical Influences on HR',
          body: 'Neurotransmitters norepinephrine and epinephrine use cAMP as a second messenger and are potent cardiac stimulants. Caffeine prolongs cAMP effects by inhibiting its breakdown; nicotine stimulates catecholamine secretion. Thyroid hormone increases adrenergic receptors in the heart, raising sensitivity to sympathetic stimulation and HR. Potassium has strong chronotropic effects: moderate K+ elevation makes myocardium less excitable and slows HR; very high K+ or very low K+ can severely disturb rhythm.'
        },
        {
          title: 'Stroke Volume Determinants',
          body: 'Stroke volume is governed by three main factors: preload, contractility, and afterload. Preload is the amount of tension in ventricular myocardium before contraction; increased preload increases SV (Frank-Starling law: SV is proportional to EDV). Contractility is the force of contraction at a given preload; positive inotropic agents (e.g., norepinephrine, hypercalcemia, catecholamines, glucagon, digitalis) increase contractility; negative inotropic agents (e.g., hyperkalemia, hypocalcemia, hypoxia, hypercapnia) decrease it. Afterload is the pressure opposing semilunar valve opening (pressure in arteries); increased afterload decreases SV.'
        },
        {
          title: 'Effects of Exercise on CO',
          body: 'At the start of exercise, proprioceptors increase HR; ongoing muscular activity raises venous return, increasing preload and SV, so both HR and SV rise to increase CO. Sustained exercise can cause ventricular hypertrophy; a larger SV allows a lower resting HR (e.g., 40-60 bpm) and increases cardiac reserve.'
        },
        {
          title: 'Congestive Heart Failure (CHF)',
          body: 'CHF occurs when either ventricle fails to eject blood effectively, often due to coronary artery disease, hypertension, myocardial infarction, valve disorders, or congenital defects. Left-sided failure causes blood to back up into the lungs, leading to pulmonary edema, suffocation, and tissue hypoxia. Right-sided failure causes blood to back up in the systemic circulation, leading to peripheral edema and fluid accumulation in tissues.'
        },
        {
          title: 'Risk Factors for Heart Disease',
          body: 'Major risk factors include high blood cholesterol, high blood pressure, cigarette smoking, obesity, and lack of regular exercise. Other factors include diabetes mellitus, genetic predisposition, male gender, high fibrinogen levels, and left ventricular hypertrophy.'
        }
      ],
      keyTerms: [
        { term: 'Cardiac Reserve', definition: 'The ratio of maximum cardiac output to resting cardiac output; normally 4-5, up to 7-8 in trained athletes.' },
        { term: 'Chronotropic Effect', definition: 'An effect that changes heart rate. Positive chronotropic agents increase HR; negative chronotropic agents decrease HR.' },
        { term: 'Cardioacceleratory Center', definition: 'A neuronal pool in the medulla oblongata that increases heart rate via sympathetic cardiac accelerator nerves.' },
        { term: 'Cardioinhibitory Center', definition: 'A neuronal pool in the medulla oblongata that decreases heart rate via parasympathetic vagus nerve fibers.' },
        { term: 'Norepinephrine', definition: 'A neurotransmitter released by sympathetic cardiac accelerator nerves that binds to beta-adrenergic receptors to increase heart rate.' },
        { term: 'Acetylcholine', definition: 'A neurotransmitter released by parasympathetic vagus nerve fibers that opens K+ channels in nodal cells, hyperpolarizing them and slowing heart rate.' },
        { term: 'Vagal Tone', definition: 'The continuous parasympathetic influence via the vagus nerves that maintains resting heart rate at 70-80 bpm rather than the SA node intrinsic rate of ~100 bpm.' },
        { term: 'Baroreceptors', definition: 'Pressure-sensitive receptors in the aorta and carotid arteries that send information to the cardiac center to adjust heart rate in response to blood pressure changes.' },
        { term: 'Chemoreceptors', definition: 'Receptors in the aortic arch, carotid arteries, and medulla that monitor blood pH, CO2, and O2 levels and stimulate the cardiac center accordingly.' },
        { term: 'Preload', definition: 'The amount of tension or stretch in the ventricular myocardium before contraction, determined by end-diastolic volume.' },
        { term: 'Frank-Starling Law', definition: 'The principle that stroke volume increases as end-diastolic volume (preload) increases, due to greater stretch of cardiac muscle fibers.' },
        { term: 'Contractility', definition: 'The force of cardiac muscle contraction at a given preload, influenced by inotropic agents.' },
        { term: 'Inotropic Effect', definition: 'An effect that changes the force of cardiac contraction. Positive inotropic agents increase contractility; negative inotropic agents decrease it.' },
        { term: 'Afterload', definition: 'The pressure in the arteries that opposes the opening of the semilunar valves; increased afterload decreases stroke volume.' },
        { term: 'Congestive Heart Failure (CHF)', definition: 'A condition where one or both ventricles fail to eject blood effectively, leading to fluid backup in the lungs (left-sided) or systemic circulation (right-sided).' },
        { term: 'Pulmonary Edema', definition: 'Fluid accumulation in the lungs resulting from left-sided heart failure as blood backs up into the pulmonary circulation.' }
      ],
      memoryAids: [
        'Preload, Contractility, Afterload — the three SV determinants. Think "PCA" like a patient-controlled analgesia pump: the heart controls its own stroke volume.',
        'Frank-Starling Law: "The more you Fill, the more you Forcefully eject." Greater EDV = greater SV.',
        'Sympathetic = Speed up (norepinephrine, beta receptors); Parasympathetic = Put the brakes on (acetylcholine, vagus nerve).',
        'Left failure = Lungs (both start with L); Right failure = Rest of body (peripheral edema).',
        'Risk factors for heart disease: "CHOSL" — Cholesterol, Hypertension, Obesity, Smoking, Lack of exercise.'
      ],
      inlineQuestions: [
        {
          question: 'Cardiac output is defined as:',
          options: { A: 'Stroke volume x blood pressure', B: 'Heart rate x stroke volume', C: 'End-diastolic volume - end-systolic volume', D: 'Stroke volume / heart rate' },
          answer: 'B',
          explanation: 'Cardiac output is calculated as heart rate multiplied by stroke volume (CO = HR x SV), representing the total volume of blood pumped per ventricle per minute.'
        },
        {
          question: 'Norepinephrine increases HR by binding to which receptors in the heart?',
          options: { A: 'Muscarinic receptors', B: 'Alpha-adrenergic receptors', C: 'Beta-adrenergic receptors', D: 'Nicotinic receptors' },
          answer: 'C',
          explanation: 'Norepinephrine released by sympathetic cardiac accelerator nerves binds to beta-adrenergic receptors on the SA node, AV node, and myocardium to increase heart rate.'
        },
        {
          question: 'According to the Frank-Starling law of the heart:',
          options: { A: 'SV is unrelated to EDV', B: 'SV decreases as EDV increases', C: 'SV increases as EDV (preload) increases', D: 'SV depends only on afterload' },
          answer: 'C',
          explanation: 'The Frank-Starling law states that stroke volume increases as end-diastolic volume (preload) increases, because greater stretch of cardiac muscle fibers produces a more forceful contraction.'
        }
      ],
      quiz: [
        {
          question: 'In a healthy resting adult with HR = 75 bpm and SV = 70 ml, CO is approximately:',
          options: { A: '3 L/min', B: '5.25 L/min', C: '7 L/min', D: '10 L/min' },
          answer: 'B',
          explanation: 'CO = HR x SV = 75 x 70 ml = 5,250 ml/min = 5.25 L/min.'
        },
        {
          question: 'Tachycardia is defined as a persistent resting heart rate:',
          options: { A: 'Below 60 bpm', B: 'Between 60-80 bpm', C: 'Above 100 bpm', D: 'Exactly 75 bpm' },
          answer: 'C',
          explanation: 'Tachycardia is defined as a persistent resting heart rate exceeding 100 beats per minute, which can be caused by stress, anxiety, drugs, heart disease, or elevated body temperature.'
        },
        {
          question: 'Which structure provides sympathetic innervation to SA node, AV node, and myocardium?',
          options: { A: 'Vagus nerve', B: 'Cardiac accelerator nerves', C: 'Phrenic nerve', D: 'Glossopharyngeal nerve' },
          answer: 'B',
          explanation: 'The cardiac accelerator nerves are sympathetic nerves originating from the cardioacceleratory center that innervate the SA node, AV node, and myocardium.'
        },
        {
          question: 'Parasympathetic fibers reach the heart primarily via the:',
          options: { A: 'Sympathetic chain', B: 'Vagus nerves', C: 'Intercostal nerves', D: 'Hypoglossal nerve' },
          answer: 'B',
          explanation: 'Parasympathetic fibers travel to the heart via the vagus nerves (cranial nerve X), with the right vagus mainly innervating the SA node and the left vagus the AV node.'
        },
        {
          question: 'Opening of K+ channels in nodal cells by acetylcholine causes the cells to:',
          options: { A: 'Depolarize more rapidly and speed HR', B: 'Hyperpolarize and slow HR', C: 'Become impermeable to ions', D: 'Fire spontaneously at 200 bpm' },
          answer: 'B',
          explanation: 'Acetylcholine opens K+ channels, allowing potassium to flow out of the cell. This hyperpolarizes the nodal cells, making them take longer to reach threshold and thus slowing heart rate.'
        },
        {
          question: 'Vagal tone is responsible for:',
          options: { A: 'Raising resting HR to 100 bpm', B: 'Maintaining resting HR around 70-80 bpm', C: 'Completely stopping HR during sleep', D: 'Increasing CO during exercise' },
          answer: 'B',
          explanation: 'Vagal tone is the continuous parasympathetic influence that slows the SA node from its intrinsic rate of ~100 bpm down to a resting rate of about 70-80 bpm.'
        },
        {
          question: 'A drop in arterial blood pressure will cause baroreceptors to:',
          options: { A: 'Increase firing and lower HR', B: 'Decrease firing and allow cardiac center to increase HR', C: 'Stop firing and halt the heart', D: 'Have no effect on HR' },
          answer: 'B',
          explanation: 'When blood pressure falls, baroreceptor firing rate decreases, which signals the cardiac center to increase sympathetic output and raise heart rate to restore blood pressure.'
        },
        {
          question: 'Hypercapnia (elevated CO2) and acidosis will tend to:',
          options: { A: 'Inhibit the cardiac center and lower HR', B: 'Stimulate the cardiac center and increase HR', C: 'Have no effect on HR', D: 'Only affect skeletal muscle' },
          answer: 'B',
          explanation: 'Chemoreceptors detect elevated CO2 and decreased pH (acidosis), stimulating the cardiac center to increase heart rate to improve circulation and gas exchange.'
        },
        {
          question: 'Which of the following is a positive chronotropic agent?',
          options: { A: 'Acetylcholine', B: 'Hyperkalemia (severe)', C: 'Norepinephrine', D: 'Hypoxia' },
          answer: 'C',
          explanation: 'Norepinephrine is a positive chronotropic agent that increases heart rate by binding to beta-adrenergic receptors in the heart.'
        },
        {
          question: 'Thyroid hormone increases HR primarily by:',
          options: { A: 'Lowering body temperature', B: 'Reducing beta-adrenergic receptors in the heart', C: 'Increasing adrenergic receptors and sympathetic sensitivity', D: 'Blocking norepinephrine release' },
          answer: 'C',
          explanation: 'Thyroid hormone upregulates adrenergic receptors in the heart, making it more sensitive to sympathetic stimulation by norepinephrine and epinephrine.'
        },
        {
          question: 'Preload is best defined as:',
          options: { A: 'Pressure in the aorta', B: 'Amount of tension in ventricular myocardium before contraction', C: 'Force of contraction at zero EDV', D: 'Resistance in peripheral veins' },
          answer: 'B',
          explanation: 'Preload is the degree of stretch or tension in the ventricular wall just before contraction begins, determined by the volume of blood filling the ventricle (EDV).'
        },
        {
          question: 'A positive inotropic agent will primarily:',
          options: { A: 'Increase HR', B: 'Decrease HR', C: 'Increase contractility at a given preload', D: 'Decrease venous return' },
          answer: 'C',
          explanation: 'Positive inotropic agents (such as norepinephrine, catecholamines, glucagon, and digitalis) increase the force of contraction at a given preload.'
        },
        {
          question: 'Which of the following is a negative inotropic agent?',
          options: { A: 'Digitalis', B: 'Hypercalcemia', C: 'Catecholamines', D: 'Hyperkalemia' },
          answer: 'D',
          explanation: 'Hyperkalemia (elevated blood potassium) is a negative inotropic agent that decreases the force of cardiac contraction.'
        },
        {
          question: 'Afterload refers to:',
          options: { A: 'Venous return', B: 'Pressure in arteries that opposes opening of semilunar valves', C: 'EDV', D: 'End-systolic volume' },
          answer: 'B',
          explanation: 'Afterload is the arterial pressure that the ventricles must overcome to open the semilunar valves and eject blood.'
        },
        {
          question: 'Increased afterload generally:',
          options: { A: 'Increases stroke volume', B: 'Decreases stroke volume', C: 'Has no effect on stroke volume', D: 'Eliminates the need for valves' },
          answer: 'B',
          explanation: 'Increased afterload means greater resistance to blood ejection, which makes it harder for the ventricles to push blood out, thereby decreasing stroke volume.'
        },
        {
          question: 'A sustained program of aerobic exercise typically causes:',
          options: { A: 'Decreased stroke volume and increased resting HR', B: 'Ventricular hypertrophy with increased SV and lower resting HR', C: 'Atrophy of cardiac muscle', D: 'Complete dependence on sympathetic drive' },
          answer: 'B',
          explanation: 'Sustained aerobic exercise causes beneficial ventricular hypertrophy, increasing stroke volume. This higher SV allows a lower resting heart rate while maintaining adequate cardiac output.'
        },
        {
          question: 'Left-sided congestive heart failure causes blood to back up into the:',
          options: { A: 'Systemic veins, causing peripheral edema', B: 'Lungs, causing pulmonary edema', C: 'Coronary arteries, causing angina', D: 'Hepatic portal system only' },
          answer: 'B',
          explanation: 'When the left ventricle fails, blood backs up into the pulmonary circulation, causing pulmonary edema, difficulty breathing, and tissue hypoxia.'
        },
        {
          question: 'Right-sided heart failure is most associated with:',
          options: { A: 'Pulmonary edema', B: 'Peripheral edema and fluid accumulation in tissues', C: 'Hyperventilation', D: 'Increased brain perfusion' },
          answer: 'B',
          explanation: 'Right-sided heart failure causes blood to back up in the systemic venous circulation, leading to peripheral edema and fluid accumulation in tissues throughout the body.'
        },
        {
          question: 'Which is NOT listed as a major risk factor for heart disease?',
          options: { A: 'High blood cholesterol', B: 'High blood pressure', C: 'Cigarette smoking', D: 'Low fibrinogen levels' },
          answer: 'D',
          explanation: 'High fibrinogen levels (not low) are a risk factor. The major risk factors listed are high cholesterol, high blood pressure, cigarette smoking, obesity, and lack of exercise.'
        },
        {
          question: 'Which condition is listed as a risk factor that can promote atherosclerosis and heart disease?',
          options: { A: 'Regular aerobic exercise', B: 'Left ventricular hypertrophy', C: 'Low blood pressure', D: 'Hypothyroidism only' },
          answer: 'B',
          explanation: 'Left ventricular hypertrophy is listed as a risk factor for heart disease. Regular exercise is protective, not a risk factor.'
        },
        {
          question: 'In endurance-trained athletes, resting bradycardia is primarily due to:',
          options: { A: 'Low vagal tone', B: 'Reduced stroke volume', C: 'Increased stroke volume and cardiac efficiency', D: 'Chronic hyperthyroidism' },
          answer: 'C',
          explanation: 'Endurance athletes develop larger, more efficient hearts with greater stroke volume, so fewer beats per minute are needed to maintain adequate cardiac output at rest.'
        },
        {
          question: 'Cardiac reserve is defined as:',
          options: { A: 'CO x HR', B: 'Maximal CO divided by resting CO', C: 'EDV - ESV', D: 'SV / HR' },
          answer: 'B',
          explanation: 'Cardiac reserve is the ratio of maximum cardiac output to resting cardiac output, indicating how much the heart can increase its output above resting levels.'
        },
        {
          question: 'Which factor directly increases stroke volume by stretching ventricular myocardium?',
          options: { A: 'Afterload', B: 'Preload (EDV)', C: 'Heart rate', D: 'Arterial pressure' },
          answer: 'B',
          explanation: 'Preload (EDV) stretches the ventricular myocardium, and according to the Frank-Starling law, greater stretch leads to a more forceful contraction and increased stroke volume.'
        },
        {
          question: 'Which neurotransmitter released by sympathetic nerves increases heart rate?',
          options: { A: 'Acetylcholine', B: 'Dopamine', C: 'Norepinephrine', D: 'Serotonin' },
          answer: 'C',
          explanation: 'Sympathetic cardiac accelerator nerves release norepinephrine, which binds to beta-adrenergic receptors to increase heart rate.'
        },
        {
          question: 'Persistent resting HR below 60 bpm in a well-trained athlete is usually:',
          options: { A: 'Pathologic tachycardia', B: 'Bradycardia due to increased stroke volume', C: 'Sign of acute MI', D: 'Due to hyperthyroidism' },
          answer: 'B',
          explanation: 'In well-trained athletes, bradycardia (HR < 60 bpm) is normal and results from increased stroke volume and cardiac efficiency from sustained aerobic training.'
        },
        {
          question: 'Left-sided heart failure can lead to:',
          options: { A: 'Peripheral edema only', B: 'Pulmonary edema and dyspnea', C: 'Hyperventilation without fluid retention', D: 'Increased kidney size' },
          answer: 'B',
          explanation: 'Left-sided heart failure causes blood to back up into the lungs, resulting in pulmonary edema (fluid in the lungs) and dyspnea (difficulty breathing).'
        }
      ],
      flashcards: [
        { front: 'What is the formula for cardiac output?', back: 'CO = HR x SV. At rest: 75 bpm x 70 ml = 5.25 L/min (typically 4-6 L/min).' },
        { front: 'What is cardiac reserve?', back: 'Maximum CO divided by resting CO. Normally 4-5; in trained athletes 7-8. It increases with fitness and decreases with disease.' },
        { front: 'What is the difference between tachycardia and bradycardia?', back: 'Tachycardia: persistent resting HR > 100 bpm. Bradycardia: persistent resting HR < 60 bpm (common in endurance athletes with higher SV).' },
        { front: 'What are positive and negative chronotropic agents?', back: 'Positive chronotropic agents increase HR (e.g., norepinephrine). Negative chronotropic agents decrease HR (e.g., acetylcholine).' },
        { front: 'What are the two divisions of the cardiac center in the medulla?', back: 'The cardioacceleratory center (sympathetic) and the cardioinhibitory center (parasympathetic).' },
        { front: 'How does sympathetic stimulation increase heart rate?', back: 'Cardiac accelerator nerves release norepinephrine, which binds to beta-adrenergic receptors on the SA node, AV node, and myocardium.' },
        { front: 'How does parasympathetic stimulation decrease heart rate?', back: 'Vagus nerves release acetylcholine, which opens K+ channels in nodal cells, hyperpolarizing them and slowing their firing rate.' },
        { front: 'What is vagal tone?', back: 'The continuous parasympathetic influence via vagus nerves that maintains resting HR at 70-80 bpm. Without it, SA node would fire at ~100 bpm.' },
        { front: 'How do baroreceptors regulate heart rate?', back: 'Located in the aorta and carotid arteries, they detect BP changes. Low BP = decreased firing = cardiac center raises HR. High BP = increased firing = cardiac center lowers HR.' },
        { front: 'How do chemoreceptors influence heart rate?', back: 'They monitor pH, CO2, and O2. Hypercapnia and acidosis stimulate the cardiac center to increase HR.' },
        { front: 'How does thyroid hormone affect the heart?', back: 'It increases adrenergic receptors in the heart, raising sensitivity to sympathetic stimulation and increasing HR.' },
        { front: 'What are the three determinants of stroke volume?', back: 'Preload (EDV stretch), contractility (force of contraction), and afterload (arterial pressure opposing ejection).' },
        { front: 'What is the Frank-Starling law?', back: 'Stroke volume is proportional to end-diastolic volume (preload). Greater ventricular filling leads to greater stretch and more forceful contraction.' },
        { front: 'What are examples of positive and negative inotropic agents?', back: 'Positive: norepinephrine, hypercalcemia, catecholamines, glucagon, digitalis. Negative: hyperkalemia, hypocalcemia, hypoxia, hypercapnia.' },
        { front: 'How does increased afterload affect stroke volume?', back: 'Increased afterload (arterial pressure) opposes semilunar valve opening, making it harder to eject blood, thus decreasing stroke volume.' },
        { front: 'What is left-sided heart failure?', back: 'The left ventricle fails to pump effectively. Blood backs up into the lungs, causing pulmonary edema, suffocation, and tissue hypoxia.' },
        { front: 'What is right-sided heart failure?', back: 'The right ventricle fails to pump effectively. Blood backs up in the systemic circulation, causing peripheral edema and fluid accumulation in tissues.' },
        { front: 'What are the major risk factors for heart disease?', back: 'High blood cholesterol, high blood pressure, cigarette smoking, obesity, and lack of regular exercise.' },
        { front: 'How does sustained exercise affect the heart?', back: 'It causes ventricular hypertrophy, increases stroke volume, lowers resting HR (40-60 bpm), and increases cardiac reserve.' }
      ]
    }
  ],

  // ===== SCENARIO-BASED QUESTIONS =====
  scenarioQuestions: [
    {
      scenario: 'A 55-year-old man presents with crushing substernal chest pain radiating to his left arm. His ECG shows ST-segment elevation in leads V1-V4.',
      question: 'What is the most likely diagnosis, and which coronary artery is most likely occluded?',
      options: {
        A: 'Pericarditis; right coronary artery',
        B: 'Anterior wall MI; left anterior descending (LAD) artery',
        C: 'Angina pectoris; circumflex artery',
        D: 'Aortic stenosis; right coronary artery'
      },
      answer: 'B',
      explanation: 'ST elevation in V1-V4 indicates an anterior wall myocardial infarction. The LAD (left anterior descending) artery supplies the anterior wall and interventricular septum. Occlusion of the LAD is sometimes called the "widow maker" because of its large territory. The crushing pain, radiation, and ST elevation are classic MI findings.'
    },
    {
      scenario: 'A patient\'s ECG shows a normal P wave followed by a progressively lengthening PR interval until a QRS complex is dropped.',
      question: 'What type of heart block does this represent?',
      options: {
        A: 'First-degree AV block',
        B: 'Second-degree AV block (Mobitz Type I / Wenckebach)',
        C: 'Third-degree (complete) AV block',
        D: 'Bundle branch block'
      },
      answer: 'B',
      explanation: 'Progressive prolongation of the PR interval followed by a dropped QRS is the hallmark of Mobitz Type I (Wenckebach) second-degree AV block. The AV node has difficulty conducting each successive impulse until one is completely blocked. This is often benign and may occur in athletes with high vagal tone.'
    },
    {
      scenario: 'An endurance athlete has a resting heart rate of 48 bpm but a cardiac output of 5.8 L/min at rest.',
      question: 'How can the athlete maintain normal cardiac output with such a low heart rate?',
      options: {
        A: 'The athlete has higher blood viscosity that compensates',
        B: 'Increased stroke volume from ventricular hypertrophy compensates for the lower rate (Frank-Starling mechanism)',
        C: 'The athlete has abnormally high blood pressure',
        D: 'Sympathetic tone is maximal at rest'
      },
      answer: 'B',
      explanation: 'CO = HR × SV. The athlete\'s heart is enlarged (physiologic hypertrophy) with greater end-diastolic volume. By the Frank-Starling law, greater stretch → more forceful contraction → higher stroke volume (~121 mL vs normal 70 mL). So: 48 bpm × 121 mL ≈ 5.8 L/min. This is athletic bradycardia — a sign of excellent cardiac fitness, not disease.'
    },
    {
      scenario: 'A patient with chronic hypertension develops shortness of breath when lying flat (orthopnea) and crackles in the lung bases on auscultation.',
      question: 'Which type of heart failure is occurring and what is the pathophysiology?',
      options: {
        A: 'Right-sided failure; blood backs up in systemic veins causing hepatomegaly',
        B: 'Left-sided failure; the left ventricle cannot pump effectively, blood backs up into the pulmonary circulation causing pulmonary edema',
        C: 'Both sides failing equally with balanced symptoms',
        D: 'Valvular disease causing excessive forward flow'
      },
      answer: 'B',
      explanation: 'Left-sided heart failure causes blood to back up from the left ventricle → left atrium → pulmonary veins → pulmonary capillaries. The elevated pulmonary capillary pressure forces fluid into the alveoli (pulmonary edema), causing dyspnea and crackles. Orthopnea occurs because lying flat redistributes blood from legs to lungs, worsening edema. Chronic hypertension is the most common cause — the left ventricle eventually cannot overcome the high afterload.'
    },
    {
      scenario: 'A patient is administered a drug that blocks beta-adrenergic receptors (beta-blocker).',
      question: 'What effects would you expect on heart rate, contractility, and cardiac output?',
      options: {
        A: 'Increased HR, increased contractility, increased CO',
        B: 'Decreased HR, decreased contractility, decreased CO',
        C: 'No change — beta receptors are not involved in cardiac function',
        D: 'Decreased HR but increased contractility'
      },
      answer: 'B',
      explanation: 'Beta-blockers prevent norepinephrine from binding β₁ receptors on the SA node (decreasing HR — negative chronotropic) and myocardium (decreasing contractility — negative inotropic). Since CO = HR × SV, both components decrease, lowering CO. This is why beta-blockers are used to treat hypertension, angina, and post-MI — they reduce cardiac workload and oxygen demand.'
    },
    {
      scenario: 'A patient presents with sharp chest pain that worsens with deep breathing and improves when leaning forward. A scratchy, rubbing sound is heard on auscultation.',
      question: 'What is the most likely diagnosis?',
      options: {
        A: 'Myocardial infarction',
        B: 'Pericarditis with pericardial friction rub',
        C: 'Pleural effusion',
        D: 'Mitral valve prolapse'
      },
      answer: 'B',
      explanation: 'The classic triad of pericarditis: (1) sharp, pleuritic chest pain worse with inspiration, (2) pain relieved by sitting forward, and (3) pericardial friction rub (a scratchy sound from inflamed pericardial layers rubbing together). This is distinct from MI pain, which is crushing and unrelieved by position change. Pericarditis can progress to pericardial effusion and potentially cardiac tamponade.'
    },
    {
      scenario: 'During a cardiac catheterization, a patient\'s end-diastolic volume (EDV) is 140 mL, end-systolic volume (ESV) is 60 mL, and heart rate is 72 bpm.',
      question: 'Calculate the stroke volume, ejection fraction, and cardiac output.',
      options: {
        A: 'SV = 80 mL, EF = 57%, CO = 5.76 L/min',
        B: 'SV = 60 mL, EF = 43%, CO = 4.32 L/min',
        C: 'SV = 140 mL, EF = 100%, CO = 10.08 L/min',
        D: 'SV = 80 mL, EF = 40%, CO = 5.76 L/min'
      },
      answer: 'A',
      explanation: 'SV = EDV − ESV = 140 − 60 = 80 mL. Ejection fraction (EF) = SV/EDV × 100 = 80/140 × 100 ≈ 57% (normal is 55-70%). CO = HR × SV = 72 × 80 = 5,760 mL/min = 5.76 L/min. All values are within normal range, indicating healthy cardiac function.'
    },
    {
      scenario: 'A patient with a mechanical heart valve develops sudden weakness on one side, slurred speech, and facial drooping.',
      question: 'What is the most likely complication of the mechanical valve causing these neurological symptoms?',
      options: {
        A: 'Valve dehiscence causing hemorrhage',
        B: 'Thromboembolism — clot formed on the valve broke off and traveled to a cerebral artery',
        C: 'Endocarditis causing direct brain abscess',
        D: 'Valve regurgitation causing low cardiac output'
      },
      answer: 'B',
      explanation: 'Mechanical heart valves are thrombogenic — blood clots form on their surfaces. If a fragment breaks off (embolism), it travels through arterial circulation. A left-sided valve embolus enters the systemic circulation and can lodge in a cerebral artery, causing ischemic stroke with contralateral weakness, speech changes, and facial drooping. This is why patients with mechanical valves require lifelong anticoagulation (warfarin).'
    }
  ]
};

export default heart;
