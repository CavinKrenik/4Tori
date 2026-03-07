const SECTION_PAGE_SIZE = 7;

const moduleBlueprints = [
  {
    id: 'endocrine-lecture',
    title: 'Endocrine System Lecture',
    source: '6. Endocrine systemPDF.pdf',
    pageCount: 97,
    objective: 'Master endocrine communication and hypothalamus-pituitary control.',
    overview: 'Hormone signaling, feedback loops, endocrine organs, and pituitary hormones.',
    table: {
      title: 'Nervous vs Endocrine',
      columns: ['Feature', 'Nervous', 'Endocrine'],
      rows: [
        ['Signal', 'Electrical + chemical', 'Hormones in blood'],
        ['Speed', 'Fast', 'Slower'],
        ['Duration', 'Short', 'Longer']
      ]
    },
    keyTerms: ['hormone', 'target cell', 'receptor', 'negative feedback', 'positive feedback', 'hypothalamus', 'pituitary', 'ADH', 'oxytocin', 'TSH', 'ACTH', 'FSH', 'LH'],
    memoryAids: ['Endocrine is mail; nervous is text message.', 'No receptor, no response.', 'Posterior pituitary releases ADH and oxytocin.'],
    realWorld: 'Hydration, stress, metabolism, growth, and reproduction are endocrine-regulated.',
    topics: [
      'Cell communication overview',
      'Gap junction signaling',
      'Neurotransmitters',
      'Paracrine hormones',
      'Hormones in blood',
      'Nervous vs endocrine differences',
      'Shared chemicals: norepinephrine and dopamine',
      'Hormone functions: metabolism, fluid, growth, reproduction',
      'Endocrine vs exocrine glands',
      'Major endocrine organs map',
      'Control of secretion: neural, humoral, hormonal',
      'Negative and positive feedback',
      'Hypothalamus-pituitary axis',
      'Posterior pituitary hormones',
      'Anterior pituitary hormones'
    ],
    questionBank: [
      { id: 'endo-q1', question: 'Which system is typically slower but longer lasting?', options: { A: 'Endocrine', B: 'Somatic reflex only', C: 'Skeletal system' }, answer: 'A', explanation: 'Hormonal signaling is slower but effects last longer.' },
      { id: 'endo-q2', question: 'A hormone can affect a cell only if the cell has a:', options: { A: 'Receptor', B: 'Centrosome', C: 'Ribosome cluster' }, answer: 'A', explanation: 'Target cells need matching receptors.' },
      { id: 'endo-q3', question: 'Which pair is released by posterior pituitary?', options: { A: 'ADH and oxytocin', B: 'TSH and ACTH', C: 'FSH and LH' }, answer: 'A', explanation: 'Posterior pituitary releases ADH and oxytocin.' },
      { id: 'endo-q4', question: 'Most endocrine pathways are regulated by:', options: { A: 'Negative feedback', B: 'Positive feedback', C: 'No feedback' }, answer: 'A', explanation: 'Negative feedback is the dominant control pattern.' },
      { id: 'endo-q5', question: 'Oxytocin in labor is an example of:', options: { A: 'Positive feedback', B: 'Simple diffusion', C: 'Countercurrent exchange' }, answer: 'A', explanation: 'Contractions increase oxytocin release and vice versa.' },
      { id: 'endo-q6', question: 'Which gland directs pituitary output?', options: { A: 'Hypothalamus', B: 'Spleen', C: 'Thymus' }, answer: 'A', explanation: 'Hypothalamus controls pituitary through releasing and inhibiting hormones.' }
    ]
  },
  {
    id: 'exercise-13-endo-blood',
    title: 'Exercise 13: Endocrine and Blood',
    source: 'BI232_Exercise 13 - Endocrine & Blood.pdf',
    pageCount: 44,
    objective: 'Practice endocrine and blood lab identification and interpretation.',
    overview: 'Gland ID, feedback logic, blood typing, hematocrit, and formed element review.',
    table: {
      title: 'Lab Focus',
      columns: ['Station', 'Skill', 'Output'],
      rows: [
        ['Anatomy ID', 'Label structures', 'Correct map'],
        ['Blood testing', 'Read sample results', 'Type/interpretation'],
        ['Case check', 'Apply physiology', 'Best answer']
      ]
    },
    keyTerms: ['ABO', 'Rh factor', 'agglutination', 'hematocrit', 'blood smear', 'differential count', 'erythropoietin'],
    memoryAids: ['Clumping means a matching antigen is present.', 'Hematocrit asks how much tube is packed cells.', 'RBC carry, WBC defend, platelets patch.'],
    realWorld: 'These skills map to blood bank work, CBC interpretation, and endocrine diagnostics.',
    topics: [
      'Endocrine gland model labeling',
      'Hormone target matching',
      'Feedback-loop worksheet',
      'Blood component separation',
      'Hematocrit reading',
      'Anemia vs polycythemia pattern',
      'Blood smear recognition',
      'Granulocyte vs agranulocyte ID',
      'ABO typing',
      'Rh typing',
      'Agglutination interpretation',
      'Integrated endocrine-blood review'
    ],
    questionBank: [
      { id: 'ex13-q1', question: 'Agglutination in a typing tray indicates:', options: { A: 'Antigen-antibody binding', B: 'No antigen present', C: 'Only plasma proteins' }, answer: 'A', explanation: 'Clumping signals matching antigen-antibody reaction.' },
      { id: 'ex13-q2', question: 'Hematocrit estimates the:', options: { A: 'Packed cell percentage', B: 'Only plasma glucose', C: 'Heart rate variability' }, answer: 'A', explanation: 'Hematocrit is the percent occupied by packed cells.' },
      { id: 'ex13-q3', question: 'Most abundant formed element is:', options: { A: 'Erythrocyte', B: 'Monocyte', C: 'Platelet' }, answer: 'A', explanation: 'RBCs are by far the most numerous formed element.' },
      { id: 'ex13-q4', question: 'Main hormone stimulating RBC production is:', options: { A: 'Erythropoietin', B: 'TSH', C: 'Prolactin' }, answer: 'A', explanation: 'Erythropoietin drives erythropoiesis.' },
      { id: 'ex13-q5', question: 'If anti-A causes clumping, the sample has:', options: { A: 'A antigen', B: 'No ABO antigen', C: 'Only B antigen' }, answer: 'A', explanation: 'Anti-A binds A antigen and clumps.' },
      { id: 'ex13-q6', question: 'Neutrophils belong to:', options: { A: 'Granulocytes', B: 'Agranulocytes', C: 'Thrombocytes' }, answer: 'A', explanation: 'Neutrophils are granular leukocytes.' }
    ]
  },
  {
    id: 'blood-lecture',
    title: 'Blood Lecture',
    source: 'the blood is the lifePDF.pdf',
    pageCount: 94,
    objective: 'Understand blood functions, composition, and blood cell production.',
    overview: 'Transportation, regulation, protection, plasma chemistry, and formed elements.',
    table: {
      title: 'Blood Components',
      columns: ['Component', 'Approx. Amount', 'Main Function'],
      rows: [
        ['Plasma', '55%', 'Transport medium'],
        ['Formed elements', '45%', 'Gas transport, defense, clotting'],
        ['RBC', 'Most formed elements', 'O2 and CO2 transport']
      ]
    },
    keyTerms: ['plasma', 'formed elements', 'hematocrit', 'erythrocyte', 'leukocyte', 'platelet', 'albumin', 'fibrinogen', 'hemopoiesis'],
    memoryAids: ['Remember the 55/45 split.', 'RBC carry, WBC defend, platelets patch.', 'Hematocrit is packed-cell percent.'],
    realWorld: 'CBC and hematocrit are core screening tools for many conditions.',
    topics: [
      'Blood and interstitial fluid relationship',
      'Transport functions of blood',
      'Regulatory functions of blood',
      'Protective functions of blood',
      'Blood volume and pH range',
      'Plasma and formed elements ratio',
      'Hematocrit and sex-based values',
      'Anemia and polycythemia',
      'Blood sampling techniques',
      'Plasma proteins: albumin, globulin, fibrinogen',
      'Leukocyte classes',
      'Hemopoiesis and marrow sites',
      'Erythropoietin and thrombopoietin control'
    ],
    questionBank: [
      { id: 'blood-q1', question: 'Plasma is approximately what percent of blood volume?', options: { A: '55 percent', B: '20 percent', C: '80 percent cells' }, answer: 'A', explanation: 'Blood is typically about 55% plasma.' },
      { id: 'blood-q2', question: 'Hematocrit measures:', options: { A: 'Percent of blood volume occupied by cells', B: 'Only WBC concentration', C: 'Pulse pressure' }, answer: 'A', explanation: 'Hematocrit is packed-cell volume percent.' },
      { id: 'blood-q3', question: 'Which blood function includes pH buffering?', options: { A: 'Regulation', B: 'Locomotion', C: 'Ventilation' }, answer: 'A', explanation: 'Blood helps regulate pH, temperature, and water balance.' },
      { id: 'blood-q4', question: 'Most abundant plasma protein is:', options: { A: 'Albumin', B: 'Hemoglobin', C: 'Actin' }, answer: 'A', explanation: 'Albumin is the most abundant plasma protein.' },
      { id: 'blood-q5', question: 'Platelets are primarily involved in:', options: { A: 'Clotting', B: 'Oxygen transport', C: 'Hormone synthesis' }, answer: 'A', explanation: 'Platelets are key to hemostasis.' },
      { id: 'blood-q6', question: 'Erythropoietin mainly increases:', options: { A: 'RBC production', B: 'Lymph flow', C: 'Insulin release' }, answer: 'A', explanation: 'EPO drives red blood cell production.' }
    ]
  },
  {
    id: 'heart-lecture',
    title: 'Heart Lecture',
    source: '8. heartPDF.pdf',
    pageCount: 84,
    objective: 'Learn heart anatomy, layers, chambers, and major flow pathways.',
    overview: 'Heart location, pericardium, wall layers, chambers, vessels, and circulation.',
    table: {
      title: 'Heart Wall Layers',
      columns: ['Layer', 'Position', 'Function'],
      rows: [
        ['Epicardium', 'Outer', 'Serous cover'],
        ['Myocardium', 'Middle', 'Contractile force'],
        ['Endocardium', 'Inner', 'Smooth lining']
      ]
    },
    keyTerms: ['mediastinum', 'apex', 'base', 'pericardium', 'epicardium', 'myocardium', 'endocardium', 'atrium', 'ventricle', 'coronary sulcus'],
    memoryAids: ['Atria arrive, ventricles venture out.', 'Apex points down and left.', 'E-M-E from outside in.'],
    realWorld: 'Heart structure knowledge supports ECG reading, imaging, and valve pathology understanding.',
    topics: [
      'Pulmonary and systemic circuits',
      'Heart location in mediastinum',
      'Base and apex orientation',
      'Heart surfaces and borders',
      'Fibrous and serous pericardium',
      'Parietal and visceral pericardium',
      'Pericardial cavity',
      'Heart wall layers',
      'Fibrous skeleton of heart',
      'Four chambers',
      'Coronary sulcus and grooves',
      'Coronary vessel supply',
      'Basic conduction pathway'
    ],
    questionBank: [
      { id: 'heart-q1', question: 'The heart is located mainly in the:', options: { A: 'Mediastinum', B: 'Abdominal cavity', C: 'Pelvic inlet' }, answer: 'A', explanation: 'The heart sits in the mediastinum between the lungs.' },
      { id: 'heart-q2', question: 'Primary contractile layer of the heart is:', options: { A: 'Myocardium', B: 'Endocardium', C: 'Fibrous pericardium' }, answer: 'A', explanation: 'Myocardium contains cardiac muscle.' },
      { id: 'heart-q3', question: 'Atria mainly:', options: { A: 'Receive blood', B: 'Pump to systemic circuit directly', C: 'Filter lymph' }, answer: 'A', explanation: 'Atria are receiving chambers.' },
      { id: 'heart-q4', question: 'Apex points:', options: { A: 'Inferior and left', B: 'Superior and right', C: 'Posterior only' }, answer: 'A', explanation: 'The apex tilts down and left.' },
      { id: 'heart-q5', question: 'Visceral pericardium is also called:', options: { A: 'Epicardium', B: 'Endocardium', C: 'Tunica intima' }, answer: 'A', explanation: 'Visceral serous pericardium is the epicardium.' },
      { id: 'heart-q6', question: 'Coronary arteries primarily supply:', options: { A: 'Myocardium', B: 'Pleura', C: 'Lymph nodes' }, answer: 'A', explanation: 'Coronary circulation nourishes heart muscle.' }
    ]
  },
  {
    id: 'exercise-14-heart',
    title: 'Exercise 14: The Heart',
    source: 'Exercise 14 - The Heart.pdf',
    pageCount: 38,
    objective: 'Apply heart anatomy via practical labeling and blood flow tracing.',
    overview: 'Valves, chambers, great vessels, and functional pathway drills.',
    table: {
      title: 'Heart Practical',
      columns: ['Task', 'Skill', 'Outcome'],
      rows: [
        ['External label', 'Orientation', 'Correct landmarks'],
        ['Internal label', 'Chamber/valve ID', 'Flow logic'],
        ['Path tracing', 'Sequence', 'Accurate route']
      ]
    },
    keyTerms: ['tricuspid', 'mitral', 'pulmonary valve', 'aortic valve', 'chordae tendineae', 'papillary muscle', 'vena cava', 'aorta'],
    memoryAids: ['Right to lungs, left to body.', 'AV valves sit between atria and ventricles.', 'Trace flow with arrows each time.'],
    realWorld: 'Supports bedside reasoning for murmurs and valvular disease patterns.',
    topics: [
      'External heart identification',
      'Great vessel mapping',
      'Internal chamber identification',
      'AV and semilunar valve positions',
      'Chordae and papillary function',
      'Right-side flow sequence',
      'Left-side flow sequence',
      'Pulmonary vs systemic comparison',
      'Conduction map review',
      'Practical checkoff review'
    ],
    questionBank: [
      { id: 'ex14-q1', question: 'Valve between right atrium and right ventricle is:', options: { A: 'Tricuspid', B: 'Aortic semilunar', C: 'Mitral annulus only' }, answer: 'A', explanation: 'Right AV valve is tricuspid.' },
      { id: 'ex14-q2', question: 'Right ventricle ejects into the:', options: { A: 'Pulmonary trunk', B: 'Aorta', C: 'Superior vena cava' }, answer: 'A', explanation: 'RV sends blood to pulmonary trunk.' },
      { id: 'ex14-q3', question: 'Chordae tendineae prevent AV valve:', options: { A: 'Prolapse', B: 'Opening', C: 'Calcification' }, answer: 'A', explanation: 'Chordae stabilize valve cusps during contraction.' },
      { id: 'ex14-q4', question: 'Pulmonary veins empty into:', options: { A: 'Left atrium', B: 'Right ventricle', C: 'Right atrium' }, answer: 'A', explanation: 'Pulmonary veins return oxygenated blood to LA.' },
      { id: 'ex14-q5', question: 'Bicuspid valve is also called:', options: { A: 'Mitral', B: 'Tricuspid', C: 'Pulmonic' }, answer: 'A', explanation: 'Left AV valve is mitral.' },
      { id: 'ex14-q6', question: 'Vena cavae drain into:', options: { A: 'Right atrium', B: 'Left ventricle', C: 'Pulmonary trunk' }, answer: 'A', explanation: 'Systemic venous return enters right atrium.' }
    ]
  },
  {
    id: 'vessels-lecture',
    title: 'Blood Vessels Lecture',
    source: '9. VesselsPDF.pdf',
    pageCount: 81,
    objective: 'Understand vessel types, wall layers, and microcirculatory control.',
    overview: 'Arteries, veins, capillaries, tunics, resistance, exchange, and return.',
    table: {
      title: 'Vessel Classes',
      columns: ['Type', 'Direction/Role', 'Key Feature'],
      rows: [
        ['Artery', 'Away from heart', 'Thick media'],
        ['Capillary', 'Exchange', 'Thin wall'],
        ['Vein', 'Toward heart', 'Valves']
      ]
    },
    keyTerms: ['tunica intima', 'tunica media', 'tunica externa', 'endothelium', 'arteriole', 'metarteriole', 'capillary bed', 'venule', 'vasomotion'],
    memoryAids: ['I-M-E from inside out.', 'Arteries resist pressure, veins store volume.', 'Capillaries are exchange markets.'],
    realWorld: 'Explains blood pressure trends, edema, perfusion deficits, and vascular disease.',
    topics: [
      'Arteries, veins, capillaries overview',
      'Direction of blood flow rules',
      'Tunica intima',
      'Tunica media',
      'Tunica externa',
      'Endothelial permeability',
      'Elastic and muscular arteries',
      'Arterioles and resistance',
      'Metarterioles and capillary beds',
      'Precapillary sphincters',
      'Capillary exchange basics',
      'Venules and venous return',
      'Pressure gradients and flow'
    ],
    questionBank: [
      { id: 'vessel-q1', question: 'Which tunic contains the most smooth muscle?', options: { A: 'Tunica media', B: 'Tunica intima', C: 'Tunica externa' }, answer: 'A', explanation: 'Smooth muscle is concentrated in tunica media.' },
      { id: 'vessel-q2', question: 'Capillaries specialize in:', options: { A: 'Exchange', B: 'Pulse generation', C: 'High-pressure storage' }, answer: 'A', explanation: 'Capillaries support nutrient and gas exchange.' },
      { id: 'vessel-q3', question: 'Arterioles are major control points for:', options: { A: 'Resistance', B: 'Hemoglobin binding', C: 'Lymph filtering' }, answer: 'A', explanation: 'Arteriolar tone strongly affects resistance.' },
      { id: 'vessel-q4', question: 'Venous valves mainly prevent:', options: { A: 'Backflow', B: 'Clotting', C: 'Osmosis' }, answer: 'A', explanation: 'Valves maintain one-way venous return.' },
      { id: 'vessel-q5', question: 'Blood flows from:', options: { A: 'Higher pressure to lower pressure', B: 'Lower to higher pressure', C: 'No gradient required' }, answer: 'A', explanation: 'Pressure gradient drives blood flow.' },
      { id: 'vessel-q6', question: 'Decreasing vessel radius generally:', options: { A: 'Raises resistance', B: 'Lowers resistance', C: 'Stops all flow instantly' }, answer: 'A', explanation: 'Smaller radius increases friction and resistance.' }
    ]
  },
  {
    id: 'exercise-15-vessels',
    title: 'Exercise 15: Blood Vessels',
    source: 'Exercise 15 - Blood Vessels.pdf',
    pageCount: 40,
    objective: 'Practice vessel tracing, pulse points, and histology ID.',
    overview: 'Hands-on vessel pathway mapping and artery/vein distinction drills.',
    table: {
      title: 'Practical Skills',
      columns: ['Skill', 'Method', 'Result'],
      rows: [
        ['Model tracing', 'Path follow', 'Correct route'],
        ['Pulse check', 'Palpation', 'Site accuracy'],
        ['Histology ID', 'Slide compare', 'Vessel class']
      ]
    },
    keyTerms: ['radial pulse', 'carotid pulse', 'brachial pulse', 'dorsalis pedis', 'posterior tibial', 'anastomosis', 'portal system'],
    memoryAids: ['Pulse points follow superficial arteries.', 'Arteries have thicker media than veins.', 'Practice route tracing out and back.'],
    realWorld: 'Pulse and vessel recognition are routine in emergency and bedside assessments.',
    topics: [
      'Major artery map',
      'Major vein map',
      'Upper limb vessels',
      'Lower limb vessels',
      'Head and neck vessels',
      'Thoracic and abdominal pathways',
      'Artery vs vein histology',
      'Capillary histology',
      'Pulse-point location drills',
      'Anastomosis and collateral flow',
      'Portal circulation concept',
      'Practical review'
    ],
    questionBank: [
      { id: 'ex15-q1', question: 'Wrist pulse is most commonly the:', options: { A: 'Radial pulse', B: 'Carotid pulse', C: 'Femoral pulse' }, answer: 'A', explanation: 'Radial artery is palpated at the wrist.' },
      { id: 'ex15-q2', question: 'Vessels carrying blood toward the heart are:', options: { A: 'Veins', B: 'Arteries', C: 'Capillary beds' }, answer: 'A', explanation: 'Direction toward heart defines veins.' },
      { id: 'ex15-q3', question: 'Which has a thicker tunica media?', options: { A: 'Artery', B: 'Vein', C: 'Capillary' }, answer: 'A', explanation: 'Arteries are adapted for higher pressure.' },
      { id: 'ex15-q4', question: 'Dorsalis pedis pulse is on the:', options: { A: 'Top of foot', B: 'Neck', C: 'Upper chest' }, answer: 'A', explanation: 'Dorsalis pedis is palpated on dorsal foot.' },
      { id: 'ex15-q5', question: 'Anastomosis means:', options: { A: 'Alternative vascular connection', B: 'Valve rupture', C: 'RBC destruction' }, answer: 'A', explanation: 'Anastomoses create collateral routes.' },
      { id: 'ex15-q6', question: 'Posterior tibial pulse is near the:', options: { A: 'Medial ankle', B: 'Radial styloid', C: 'Carotid bifurcation' }, answer: 'A', explanation: 'Posterior tibial is palpated near medial malleolus.' }
    ]
  },
  {
    id: 'exercise-16-bp-lymph',
    title: 'Exercise 16: Blood Pressure and Lymphatic',
    source: 'Exercise 16 - Blood Pressure & Lymphatic.pdf',
    pageCount: 22,
    objective: 'Measure blood pressure correctly and reason through lymphatic drainage.',
    overview: 'Systolic/diastolic mechanics, pulse points, ducts, and edema logic.',
    table: {
      title: 'BP Reading Basics',
      columns: ['Measure', 'Meaning', 'Example'],
      rows: [
        ['Systolic', 'Contraction pressure', 'Top number'],
        ['Diastolic', 'Relaxation pressure', 'Bottom number'],
        ['Pulse pressure', 'Systolic - diastolic', '120/80 -> 40']
      ]
    },
    keyTerms: ['systole', 'diastole', 'pulse pressure', 'Korotkoff', 'thoracic duct', 'right lymphatic duct', 'edema'],
    memoryAids: ['Top squeezes, bottom relaxes.', 'Pulse pressure is subtraction.', 'Thoracic duct is the major drain.'],
    realWorld: 'BP technique errors can mislead diagnosis; lymph failure explains swelling patterns.',
    topics: [
      'BP equipment use',
      'Cuff placement and level',
      'Inflation and release procedure',
      'Systolic and diastolic interpretation',
      'Pulse pressure calculation',
      'Pulse-point checks',
      'Lymphatic vessel review',
      'Thoracic duct pathway',
      'Right lymphatic duct pathway',
      'Cisterna chyli',
      'Muscle and thoracic pumps',
      'Edema scenarios'
    ],
    questionBank: [
      { id: 'ex16-q1', question: 'In 118/76, the 118 is:', options: { A: 'Systolic pressure', B: 'Diastolic pressure', C: 'Pulse pressure' }, answer: 'A', explanation: 'Top number is systolic.' },
      { id: 'ex16-q2', question: 'Pulse pressure is:', options: { A: 'Systolic minus diastolic', B: 'Diastolic minus systolic', C: 'Heart rate plus systolic' }, answer: 'A', explanation: 'Subtract diastolic from systolic.' },
      { id: 'ex16-q3', question: 'For accurate BP, cuff should be near:', options: { A: 'Heart level', B: 'Knee level', C: 'Forehead level' }, answer: 'A', explanation: 'Heart-level placement reduces hydrostatic error.' },
      { id: 'ex16-q4', question: 'Major lymphatic duct is:', options: { A: 'Thoracic duct', B: 'Coronary sinus', C: 'Pulmonary trunk' }, answer: 'A', explanation: 'Thoracic duct drains most body regions.' },
      { id: 'ex16-q5', question: 'Persistent tissue swelling from poor drainage is:', options: { A: 'Edema', B: 'Arrhythmia', C: 'Polycythemia' }, answer: 'A', explanation: 'Edema is excess interstitial fluid accumulation.' },
      { id: 'ex16-q6', question: 'Lymph movement is helped by:', options: { A: 'Skeletal muscle pump', B: 'Aortic valve closure', C: 'RBC aggregation' }, answer: 'A', explanation: 'Muscle activity compresses lymph vessels and drives flow.' }
    ]
  },
  {
    id: 'lymph-immune-lecture',
    title: 'Lymphatic and Immune Systems Lecture',
    source: '10 Lymphatic and Immune SystemsPDF.pdf',
    pageCount: 112,
    objective: 'Understand lymphatic fluid recovery, immune organs, and adaptive/innate defense.',
    overview: 'Lymph flow anatomy plus immune system structure and function.',
    table: {
      title: 'Lymphatic Functions',
      columns: ['Function', 'Process', 'Outcome'],
      rows: [
        ['Fluid recovery', 'Return interstitial fluid', 'Lower edema risk'],
        ['Immunity', 'Filter and monitor antigens', 'Defense'],
        ['Lipid absorption', 'Lacteal uptake', 'Nutrient transport']
      ]
    },
    keyTerms: ['lymph', 'lacteal', 'chyle', 'lymph node', 'thymus', 'spleen', 'tonsils', 'Peyer patches', 'thoracic duct', 'innate immunity', 'adaptive immunity'],
    memoryAids: ['Lymph is the return line for tissue fluid.', 'Thoracic duct drains most, right duct drains right upper quadrant.', 'Innate is immediate; adaptive is specific and remembered.'],
    realWorld: 'Explains edema, infection spread, vaccine response, and immune deficiencies.',
    topics: [
      'Lymphatic functions overview',
      'Lymph vs interstitial fluid',
      'Primary and secondary lymph organs',
      'Lymphatic capillary structure',
      'Anchoring filaments and flaps',
      'Lacteals and chyle',
      'Lymph vessel tunics',
      'Lymph flow pathway to veins',
      'Right lymphatic duct and thoracic duct',
      'Cisterna chyli',
      'Muscle and thoracic pumps',
      'Edema and drainage disorders',
      'Innate vs adaptive immunity',
      'B-cell and T-cell roles'
    ],
    questionBank: [
      { id: 'lymph-q1', question: 'A core lymphatic function is to:', options: { A: 'Return excess interstitial fluid', B: 'Generate skeletal muscle action potentials', C: 'Produce gastric acid' }, answer: 'A', explanation: 'Fluid recovery is a primary lymphatic role.' },
      { id: 'lymph-q2', question: 'Lacteals are located in the:', options: { A: 'Small intestine', B: 'Pericardial cavity', C: 'Cornea' }, answer: 'A', explanation: 'Lacteals absorb fats from the intestine.' },
      { id: 'lymph-q3', question: 'Most lymph drains into the:', options: { A: 'Thoracic duct', B: 'Right lymphatic duct', C: 'Aortic arch' }, answer: 'A', explanation: 'Thoracic duct is the major drainage channel.' },
      { id: 'lymph-q4', question: 'T-cell maturation occurs mainly in the:', options: { A: 'Thymus', B: 'Spleen', C: 'Pancreas' }, answer: 'A', explanation: 'The thymus supports T-cell maturation.' },
      { id: 'lymph-q5', question: 'Adaptive immunity is characterized by:', options: { A: 'Specificity and memory', B: 'No antigen specificity', C: 'Only barrier function' }, answer: 'A', explanation: 'Adaptive responses are specific and can remember prior antigens.' },
      { id: 'lymph-q6', question: 'Failure of lymph drainage most directly causes:', options: { A: 'Edema', B: 'Bradycardia', C: 'Hyperventilation' }, answer: 'A', explanation: 'Poor lymph return leads to fluid buildup in tissues.' }
    ]
  }
];

function takeWrappedWindow(items, start, count) {
  if (!items.length) return [];
  const out = [];
  for (let i = 0; i < count; i += 1) out.push(items[(start + i) % items.length]);
  return out;
}

function buildSections(module) {
  const sectionCount = Math.ceil(module.pageCount / SECTION_PAGE_SIZE);
  const topicBuckets = Array.from({ length: sectionCount }, () => []);
  module.topics.forEach((topic, index) => topicBuckets[index % sectionCount].push(topic));

  return Array.from({ length: sectionCount }, (_, index) => {
    const start = index * SECTION_PAGE_SIZE + 1;
    const end = Math.min(start + SECTION_PAGE_SIZE - 1, module.pageCount);
    const q1 = module.questionBank[index % module.questionBank.length];
    const q2 = module.questionBank[(index + 2) % module.questionBank.length];
    return {
      id: `${module.id}-section-${index + 1}`,
      title: `Section ${index + 1}`,
      pages: `Pages ${start}-${end}`,
      focus: topicBuckets[index][0] || 'Review block',
      topics: topicBuckets[index].length ? topicBuckets[index] : ['Review and reinforce this section.'],
      keyTerms: takeWrappedWindow(module.keyTerms, index * 2, 5),
      quiz: q1.id === q2.id ? [q1] : [q1, q2]
    };
  });
}

function buildMixedQuiz(modules) {
  const mixed = [];
  modules.forEach((module) => {
    module.questionBank.slice(0, 4).forEach((question, index) => {
      mixed.push({ ...question, id: `mixed-${module.id}-${index + 1}`, sourceModule: module.title });
    });
  });
  return mixed;
}

const modules = moduleBlueprints.map((module) => ({ ...module, sections: buildSections(module) }));
const mixedQuiz = buildMixedQuiz(modules);

export const courseData = {
  appName: '4 Tori',
  title: '4 Tori: Anatomy and Physiology Study App',
  subtitle: 'Learn from uploaded PDFs in 6-8 page sections with one-question-at-a-time quizzes.',
  sectionPageSize: SECTION_PAGE_SIZE,
  modules,
  mixedQuiz
};

