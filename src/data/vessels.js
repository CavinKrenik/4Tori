const vessels = {
  id: 'vessels',
  title: 'Blood Vessels',
  source: '9. VesselsPDF.pdf',
  description: 'Comprehensive study of blood vessel anatomy, wall structure (tunics), artery and vein types, capillary structure and exchange mechanisms, hemodynamics, blood pressure regulation, neural and hormonal BP control, resistance, venous return, circulatory shock, special circulatory routes, and aging of the cardiovascular system.',
  icon: 'vessels',

  learningObjectives: [
    'Describe the three layers (tunics) of the blood vessel wall and their composition.',
    'Compare conducting (elastic) arteries, distributing (muscular) arteries, and arterioles.',
    'Explain the structure and types of capillaries (continuous, fenestrated, sinusoids).',
    'Describe venous anatomy, venous valves, and the pathology of varicose veins.',
    'Explain the three mechanisms of capillary exchange: diffusion, transcytosis, and bulk flow.',
    'Define net filtration pressure and Starling\'s law of the capillaries.',
    'Describe the causes and consequences of edema.',
    'Define blood pressure, resistance, and explain their relationship using F ∝ r⁴.',
    'Compare systemic vascular resistance factors: vessel radius, blood viscosity, and vessel length.',
    'Describe the mechanisms of venous return: skeletal muscle pump, thoracic pump, cardiac suction.',
    'Classify types of circulatory shock and describe compensated vs decompensated shock.',
    'Explain the baroreflex, chemoreflex, and medullary ischemic reflex in BP regulation.',
    'Describe the renin-angiotensin-aldosterone system (RAAS) and other hormonal BP controls.',
    'Explain local autoregulation (vasoactive substances, nitric oxide) and special circulatory routes.',
    'Identify clinical applications including hypertension staging, MAP calculation, syncope, and aging changes.'
  ],

  clinicalCorrelations: [
    {
      title: 'Hypertension Staging',
      detail: 'Normal: <120/80. Prehypertension: 120-129/80-89. Stage I: 130-159/90-99. Stage II: >160/100. Hypertensive Crisis: >180/120. Chronic hypertension weakens small arteries, causes aneurysms, and is a major risk for stroke, MI, and kidney failure.'
    },
    {
      title: 'Varicose Veins',
      detail: 'Twisted, dilated superficial veins caused by incompetent venous valves (congenital or from prolonged standing/pregnancy). Backflow and pooling increase pressure, forcing fluid into tissues causing inflammation and tenderness. Deep veins are protected by surrounding skeletal muscles.'
    },
    {
      title: 'Edema: Causes and Consequences',
      detail: 'Abnormal increase in interstitial fluid when filtration exceeds reabsorption. Causes include hypertension (excess filtration), increased capillary permeability (protein leak), decreased plasma proteins (liver disease, burns, malnutrition, kidney disease), congestive heart failure, poor venous return, and obstructed lymphatic drainage. Consequences: circulatory shock, tissue necrosis, pulmonary edema (suffocation), cerebral edema (seizures/coma). Not noticeable until 30% above normal.'
    },
    {
      title: 'Circulatory Shock',
      detail: 'Failure of CV system to deliver adequate O₂ and nutrients. Types: Cardiogenic (inadequate heart pumping, e.g., MI), Hypovolemic (most common—blood loss, burns, dehydration), Obstructive (tumor/aneurysm), Neurogenic (loss of vasomotor tone), Septic (bacterial toxins cause vasodilation), Anaphylactic (severe immune reaction, histamine release). Compensated shock activates RAAS, ADH, SNS, and baroreflexes. Decompensated shock involves life-threatening positive feedback loops.'
    },
    {
      title: 'Syncope (Fainting)',
      detail: 'Sudden, temporary loss of consciousness due to cerebral ischemia. Types: vasodepressor (emotional stress), situational (coughing/defecation pressure), drug-induced (antihypertensives/diuretics), orthostatic hypotension (BP drop on standing). Falling horizontal restores cerebral blood flow; elevated feet aid recovery.'
    },
    {
      title: 'Mean Arterial Pressure (MAP)',
      detail: 'MAP = (SBP + 2×DBP) / 3. Better indicator of tissue perfusion than BP alone. Low MAP (<60 mmHg) = inadequate perfusion. High MAP (>100 mmHg) = excessive vascular resistance. Used clinically to guide treatment in critical care.'
    }
  ],

  quickFacts: [
    'Arteries carry blood AWAY from the heart; veins carry blood BACK.',
    'Tunica media is the thickest layer in arteries; responsible for vasoconstriction/vasodilation.',
    'Vasa vasorum are "vessels of vessels"—small vessels nourishing walls of large vessels.',
    'Conducting (elastic) arteries expand during systole and recoil during diastole, dampening BP fluctuations.',
    'Precapillary sphincters regulate capillary bed perfusion via vasomotion (5-10 times/min).',
    'Capillaries are the ONLY vessels where exchange occurs between blood and tissues.',
    'Diffusion is the most important capillary exchange mechanism.',
    '60% of blood volume at rest is in systemic veins/venules (blood reservoirs).',
    'Starling\'s law: volume filtered ≈ volume reabsorbed; excess (3 L/day) collected by lymphatics.',
    'Blood pressure: 120/80 in aorta → 35 mmHg entering capillaries → 0 mmHg entering right atrium.',
    'Blood flow (F) is proportional to the fourth power of the radius: F ∝ r⁴.',
    'Arterioles are the primary resistance vessels that control moment-to-moment BP.',
    'Skeletal muscle pump, thoracic pump, and cardiac suction aid venous return.',
    'The RAAS system: renin → angiotensin I → (ACE in lungs) → angiotensin II (potent vasoconstrictor).',
    '200 miles of blood vessels per pound of fat—obesity increases total resistance and BP.',
    'Hypoxemia, hypercapnia, and acidosis stimulate chemoreceptors to raise BP.',
    'Capillary flow velocity is only 0.1 cm/sec (vs 40 cm/sec in aorta), allowing time for exchange.'
  ],

  sections: [
    // ===== SECTION 1: Vessel Anatomy, Types & Circulatory Routes =====
    {
      id: 'vessels-s1',
      title: 'Vessel Anatomy, Types & Circulatory Routes',
      pageRange: 'Pages 1-10',
      learnItems: [
        {
          title: 'Major Vessel Types & Circulatory Layout',
          body: 'Three principal categories of blood vessels form a closed system: arteries carry blood from the heart to tissues, veins carry blood back to the heart, and capillaries connect arterioles to venules for exchange. Arteries branch into arterioles then capillaries; capillaries merge into venules then veins. Vasa vasorum are small blood vessels within the walls of large vessels that nourish their deeper tissues.'
        },
        {
          title: 'Vessel Wall Layers (Tunics)',
          body: 'Tunica interna (intima): innermost layer of simple squamous endothelium (endothelium) overlying a basement membrane and layer of fibrous tissue; smooth inner surface repels blood cells and platelets; acts as a selectively permeable barrier. Tunica media: middle and usually thickest layer of smooth muscle, collagen, and sometimes elastic tissue; responsible for vasoconstriction and vasodilation. Tunica externa (adventitia): outermost layer of loose areolar connective tissue; anchors vessel to adjacent tissues and provides passage for small nerves, lymphatic vessels, and vasa vasorum.'
        },
        {
          title: 'Sympathetic Innervation of Vessels',
          body: 'Vascular smooth muscle is innervated by the sympathetic nervous system. Increased stimulation → vasoconstriction (muscle contraction, decreased diameter). Injury to artery/arteriole triggers vasospasm, reducing blood loss. Decreased stimulation or certain chemicals (nitric oxide, K⁺, H⁺, lactic acid) → vasodilation (increased diameter). This is the basis for vasomotor tone—a baseline level of sympathetic stimulation that maintains partial constriction of arterioles.'
        },
        {
          title: 'Conducting (Elastic) Arteries',
          body: 'Largest arteries: aorta, pulmonary trunk, common carotid, subclavian, and common iliac arteries. Tunica media has perforated sheets of elastic tissue alternating with thin layers of smooth muscle, collagen, and elastic fibers. They expand during systole and recoil during diastole, lessening BP fluctuations and providing continuous flow—acting as a "pressure reservoir."'
        },
        {
          title: 'Distributing (Muscular) Arteries',
          body: 'Medium-sized branches distributing blood to specific organs: femoral, splenic, brachial, and renal arteries. Smooth muscle layers constitute about three-quarters (¾) of wall thickness. Strong capacity for vasoconstriction and vasodilation to regulate blood distribution to organs.'
        },
        {
          title: 'Arterioles and Metarterioles',
          body: 'Arterioles are small arteries delivering blood to capillaries; tunica media has only a few layers of smooth muscle. Metarterioles branch into capillary beds. Precapillary sphincters at the entrance of capillary beds regulate whether blood enters capillaries or bypasses via thoroughfare channels. Vasomotion is the intermittent contraction and relaxation of precapillary sphincters, allowing capillary beds to fill 5-10 times per minute based on tissue demand.'
        },
        {
          title: 'Capillaries — Microcirculation',
          body: 'Microscopic vessels connecting arterioles to venules. Found near almost every cell, most extensive in active tissues (muscles, liver, kidneys, brain). Entire capillary bed fills with blood when tissue is active. Absent in: epithelia, cornea, lens of eye, and cartilage. Structure: single layer of simple squamous endothelium + basement membrane. Function: exchange of nutrients and wastes between blood and tissue fluid—this is their SOLE purpose.'
        },
        {
          title: 'Types of Capillaries',
          body: 'Continuous capillaries: intercellular clefts (small gaps) between neighboring cells; found in skeletal/smooth muscle, connective tissue, and lungs. Fenestrated capillaries: plasma membranes have many pores (fenestrations); found in kidneys, small intestine, choroid plexuses, ciliary processes, and endocrine glands—ideal for rapid filtration/absorption. Sinusoids: very large fenestrations with incomplete basement membrane; found in liver, bone marrow, spleen, anterior pituitary, and parathyroid glands—allow large proteins and blood cells to pass through.'
        },
        {
          title: 'Venules and Veins',
          body: 'Venules are small veins collecting blood from capillaries; proximal venules are porous and exchange fluid like capillaries; their porous endothelium allows WBC emigration (diapedesis). Veins have proportionally thinner walls than arteries (less muscle, no elastic laminae), expand easily (high capacitance), and operate at low pressure (~10 mmHg). Venous valves are thin folds of tunica interna preventing backflow; they work with skeletal muscles to push blood upward. Venous sinuses (coronary sinus, dural sinuses) have thin walls, large lumens, and no smooth muscle.'
        },
        {
          title: 'Varicose Veins',
          body: 'Twisted, dilated superficial veins caused by leaky venous valves (congenital or from prolonged standing/pregnancy). Valve failure allows backflow and pooling; increased pressure forces fluid into surrounding tissues → inflammation and tenderness. Deeper veins are less susceptible due to support of surrounding skeletal muscles.'
        },
        {
          title: 'Circulatory Routes and Anastomoses',
          body: 'Most common route: heart → arteries → arterioles → capillaries → venules → veins → heart. Portal systems: blood flows through two consecutive capillary networks before returning to heart (hypothalamus-anterior pituitary, kidneys, intestines-liver hepatic portal system). Anastomoses: points where two vessels merge. Types: arteriovenous shunts (artery → vein directly; in fingers/toes/ears for heat regulation), venous anastomoses (most common; alternate drainage routes), and arterial anastomoses (collateral circulation, e.g., coronary arteries).'
        },
        {
          title: 'Blood Distribution',
          body: '60% of blood volume at rest is in systemic veins and venules, functioning as blood reservoirs (especially skin and abdominal organ veins). Blood is diverted from reservoirs during increased activity via venoconstriction. Hemorrhage causes venoconstriction to help maintain blood pressure. Only ~15% of blood volume is in arteries and arterioles at rest.'
        }
      ],
      keyTerms: [
        { term: 'Tunica Interna (Intima)', definition: 'Innermost vessel layer: simple squamous endothelium + basement membrane; selectively permeable barrier.' },
        { term: 'Tunica Media', definition: 'Middle vessel layer of smooth muscle, collagen, elastic tissue; controls vasoconstriction/vasodilation.' },
        { term: 'Tunica Externa (Adventitia)', definition: 'Outermost vessel layer of areolar CT; anchors vessel and carries nerves/vasa vasorum.' },
        { term: 'Vasa Vasorum', definition: '"Vessels of vessels"—small blood vessels nourishing the walls of large vessels.' },
        { term: 'Conducting (Elastic) Arteries', definition: 'Largest arteries (aorta, pulmonary trunk) with elastic tissue that expands/recoils to dampen BP fluctuations.' },
        { term: 'Distributing (Muscular) Arteries', definition: 'Medium arteries (femoral, brachial) with ~¾ smooth muscle wall for organ-specific blood distribution.' },
        { term: 'Precapillary Sphincters', definition: 'Smooth muscle rings at capillary bed entrances; regulate perfusion via vasomotion.' },
        { term: 'Vasomotion', definition: 'Intermittent contraction/relaxation of precapillary sphincters (5-10×/min).' },
        { term: 'Continuous Capillaries', definition: 'Capillaries with intercellular clefts; found in muscle, CT, lungs.' },
        { term: 'Fenestrated Capillaries', definition: 'Capillaries with pores; found in kidneys, intestine, endocrine glands.' },
        { term: 'Sinusoids', definition: 'Capillaries with large fenestrations + incomplete basement membrane; liver, bone marrow, spleen.' },
        { term: 'Venous Valves', definition: 'Folds of tunica interna preventing venous backflow.' },
        { term: 'Portal System', definition: 'Circulatory route passing through two consecutive capillary beds before returning to heart.' },
        { term: 'Anastomosis', definition: 'Point where two blood vessels merge; provides alternate routes for blood flow.' },
        { term: 'Vasomotor Tone', definition: 'Baseline level of sympathetic stimulation maintaining partial arteriolar constriction.' }
      ],
      memoryAids: [
        'Tunics from inside out: "IME" = Interna, Media, Externa — "I Must Exit."',
        'Arteries carry Away (both start with A); Veins Venture back.',
        'Capillary types by pore size: Continuous (Closed tight), Fenestrated (Filtered pores), Sinusoids (Super-sized openings).',
        'Vasomotion = sphincters doing an on/off dance 5-10 times per minute.',
        '60% rule: 60% of blood sits in veins at rest — veins are the reservoir.'
      ],
      inlineQuestions: [
        {
          question: 'The vessel wall layer responsible for vasoconstriction and vasodilation is the:',
          options: { A: 'Tunica interna', B: 'Tunica media', C: 'Tunica externa', D: 'Endothelium' },
          answer: 'B',
          explanation: 'The tunica media is the middle layer containing smooth muscle, collagen, and elastic tissue — contraction narrows the vessel (vasoconstriction) and relaxation widens it (vasodilation).'
        },
        {
          question: 'Which type of capillary has large fenestrations and an incomplete basement membrane, allowing passage of blood cells and large proteins?',
          options: { A: 'Continuous capillaries', B: 'Fenestrated capillaries', C: 'Sinusoids', D: 'Metarterioles' },
          answer: 'C',
          explanation: 'Sinusoids have very large fenestrations and incomplete basement membranes — found in liver, bone marrow, and spleen where large molecules and blood cells must pass through.'
        },
        {
          question: 'Varicose veins result primarily from:',
          options: { A: 'Excess smooth muscle in vein walls', B: 'Incompetent venous valves allowing backflow and pooling', C: 'Too much elastic tissue in veins', D: 'High arterial pressure transmitted to veins' },
          answer: 'B',
          explanation: 'Leaky venous valves allow blood to flow backward and pool, stretching superficial veins. This is worsened by prolonged standing or pregnancy, and deeper veins are protected by surrounding skeletal muscles.'
        }
      ],
      quiz: [
        { id: 'v1-q1', question: 'Which vessel wall layer is primarily responsible for vasoconstriction and vasodilation?', options: { A: 'Tunica interna', B: 'Tunica media', C: 'Tunica externa', D: 'Endocardium' }, answer: 'B', explanation: 'The tunica media is the middle, usually thickest layer with smooth muscle that controls vessel diameter.' },
        { id: 'v1-q2', question: 'Which type of artery expands during systole and recoils during diastole to dampen BP fluctuations?', options: { A: 'Distributing arteries', B: 'Arterioles', C: 'Conducting (elastic) arteries', D: 'Metarterioles' }, answer: 'C', explanation: 'Conducting (elastic) arteries like the aorta have elastic recoil that smooths blood flow between heartbeats.' },
        { id: 'v1-q3', question: 'In distributing (muscular) arteries, smooth muscle constitutes approximately what fraction of wall thickness?', options: { A: 'One-quarter', B: 'One-half', C: 'Three-quarters', D: 'Nine-tenths' }, answer: 'C', explanation: 'Distributing arteries have smooth muscle layers making up about ¾ of their wall thickness.' },
        { id: 'v1-q4', question: 'Precapillary sphincters regulate blood flow into capillary beds through a process called:', options: { A: 'Autoregulation', B: 'Vasomotion', C: 'Hemostasis', D: 'Vasospasm' }, answer: 'B', explanation: 'Vasomotion is the intermittent contraction and relaxation of precapillary sphincters (5-10 times/min).' },
        { id: 'v1-q5', question: 'Which capillary type has very large fenestrations and an incomplete basement membrane?', options: { A: 'Continuous', B: 'Fenestrated', C: 'Sinusoids', D: 'Pericytic' }, answer: 'C', explanation: 'Sinusoids have very large fenestrations and incomplete basement membrane; found in liver, bone marrow, and spleen.' },
        { id: 'v1-q6', question: 'Fenestrated capillaries are found in all of the following EXCEPT:', options: { A: 'Kidneys', B: 'Skeletal muscle', C: 'Small intestine', D: 'Endocrine glands' }, answer: 'B', explanation: 'Skeletal muscle contains continuous capillaries. Fenestrated capillaries are in kidneys, intestine, choroid plexuses, and endocrine glands.' },
        { id: 'v1-q7', question: 'Varicose veins are caused primarily by:', options: { A: 'Excess smooth muscle in vein walls', B: 'Leaky venous valves allowing backflow', C: 'Too much elastic tissue', D: 'Arterial hypertension' }, answer: 'B', explanation: 'Incompetent venous valves allow backflow and pooling, causing dilation—especially in superficial veins unsupported by muscle.' },
        { id: 'v1-q8', question: 'What percentage of blood volume at rest is found in systemic veins and venules?', options: { A: '15%', B: '30%', C: '45%', D: '60%' }, answer: 'D', explanation: '60% of blood volume is in veins/venules at rest, making them blood reservoirs.' },
        { id: 'v1-q9', question: 'Chemicals that promote vasodilation include all EXCEPT:', options: { A: 'Nitric oxide', B: 'K⁺ ions', C: 'Norepinephrine', D: 'Lactic acid' }, answer: 'C', explanation: 'Norepinephrine from sympathetic nerves generally causes vasoconstriction. Nitric oxide, K⁺, H⁺, and lactic acid promote vasodilation.' },
        { id: 'v1-q10', question: 'A portal system is characterized by:', options: { A: 'Blood flowing through two consecutive capillary networks', B: 'Direct shunts between arteries and veins', C: 'Absence of venous valves', D: 'Single-pass capillary exchange' }, answer: 'A', explanation: 'In a portal system, blood passes through two consecutive capillary beds before returning to the heart (e.g., hepatic portal system).' },
        { id: 'v1-q11', question: 'Capillaries are absent in all of the following EXCEPT:', options: { A: 'Cornea of the eye', B: 'Cartilage', C: 'Liver', D: 'Epithelia' }, answer: 'C', explanation: 'The liver has extensive capillary beds (sinusoids). Capillaries are absent in avascular tissues: cornea, cartilage, and epithelia.' },
        { id: 'v1-q12', question: 'The vasa vasorum serves to:', options: { A: 'Prevent varicose veins', B: 'Constrict large arteries', C: 'Nourish the walls of large blood vessels', D: 'Connect arteries to veins directly' }, answer: 'C', explanation: 'Vasa vasorum are "vessels of vessels"—small blood vessels within the walls of large vessels that supply nutrients to their deeper tissues.' }
      ],
      flashcards: [
        { front: 'What are the three layers (tunics) of a blood vessel wall?', back: 'Tunica interna (endothelium + basement membrane), tunica media (smooth muscle, collagen, elastic tissue — controls diameter), tunica externa (areolar CT — anchors vessel, carries nerves/vasa vasorum).' },
        { front: 'What are vasa vasorum?', back: '"Vessels of vessels" — small blood vessels within the walls of large vessels that nourish their deeper tissues.' },
        { front: 'What are conducting (elastic) arteries and what do they do?', back: 'Largest arteries (aorta, pulmonary trunk). Elastic tissue expands during systole and recoils during diastole, dampening BP fluctuations — acting as a "pressure reservoir."' },
        { front: 'How do distributing (muscular) arteries differ from elastic arteries?', back: 'Medium-sized arteries (femoral, brachial). Smooth muscle makes up ~¾ of wall thickness, giving strong capacity for vasoconstriction/vasodilation to regulate organ-specific blood distribution.' },
        { front: 'What are precapillary sphincters and vasomotion?', back: 'Precapillary sphincters are smooth muscle rings at capillary bed entrances. Vasomotion is their intermittent contraction/relaxation (5-10×/min), regulating capillary perfusion based on tissue demand.' },
        { front: 'What are the three types of capillaries?', back: 'Continuous (intercellular clefts — muscle, lung). Fenestrated (membrane pores — kidneys, intestine, endocrine glands). Sinusoids (large fenestrations, incomplete basement membrane — liver, bone marrow, spleen).' },
        { front: 'What is the SOLE function of capillaries?', back: 'Exchange of nutrients and wastes between blood and tissue fluid. They are the ONLY vessels where exchange occurs.' },
        { front: 'What causes varicose veins?', back: 'Incompetent (leaky) venous valves allow backflow and blood pooling → dilation of superficial veins. Worsened by prolonged standing or pregnancy. Deep veins are protected by surrounding skeletal muscles.' },
        { front: 'What is a portal system?', back: 'A circulatory route where blood flows through two consecutive capillary networks before returning to the heart (e.g., hepatic portal system, hypothalamus-pituitary portal).' },
        { front: 'How much blood is in veins at rest?', back: '60% of total blood volume is in systemic veins/venules at rest — they serve as blood reservoirs. Only ~15% is in arteries/arterioles.' },
        { front: 'What is vasomotor tone?', back: 'A baseline level of sympathetic stimulation that maintains partial constriction of arterioles, keeping blood pressure at a stable resting level.' },
        { front: 'What chemicals promote vasodilation?', back: 'Nitric oxide, K⁺, H⁺, lactic acid, and CO₂ promote vasodilation. Norepinephrine from sympathetic nerves generally causes vasoconstriction.' },
        { front: 'Where are capillaries absent?', back: 'Capillaries are absent in avascular tissues: epidermis, cartilage, cornea, and lens of the eye.' },
        { front: 'What are arteriovenous anastomoses?', back: 'Direct shunts from artery to vein (bypassing capillaries), found in fingers, toes, and ears for heat regulation.' }
      ]
    },

    // ===== SECTION 2: Capillary Exchange, Hemodynamics & Blood Pressure =====
    {
      id: 'vessels-s2',
      title: 'Capillary Exchange, Hemodynamics & Blood Pressure',
      pageRange: 'Pages 10-22',
      learnItems: [
        {
          title: 'Capillary Exchange Overview',
          body: 'Exchange occurs ONLY across capillary walls between blood and surrounding tissues. Three routes across endothelial cells: intercellular clefts, fenestrations, and through cytoplasm. Three mechanisms: diffusion, transcytosis, and bulk flow (filtration/reabsorption).'
        },
        {
          title: 'Diffusion — Most Important Exchange Mechanism',
          body: 'Substances move down concentration gradients. All plasma solutes except large proteins pass freely across. Routes: through lipid bilayers (O₂, CO₂, steroid hormones are lipid-soluble), fenestrations, or intercellular clefts (glucose, electrolytes are lipid-insoluble). Blood-brain barrier: nonfenestrated endothelium with tight junctions prevents diffusion of water-soluble materials.'
        },
        {
          title: 'Transcytosis',
          body: 'Passage of material across endothelium in tiny vesicles by endocytosis and exocytosis (pinocytosis). Important for large, lipid-insoluble molecules like insulin, fatty acids, albumin, and maternal antibodies crossing placental circulation to the fetus.'
        },
        {
          title: 'Bulk Flow: Filtration and Reabsorption',
          body: 'Movement of large amounts of dissolved/suspended material in the same direction, in response to pressure. Much faster than diffusion or osmosis. Most important for regulation of relative volumes of blood and interstitial fluid. Filtration = movement OUT of capillary into interstitial fluid (driven by blood hydrostatic pressure + interstitial fluid osmotic pressure). Reabsorption = movement INTO capillary from interstitial fluid (driven by blood colloid osmotic pressure from plasma proteins, mainly albumin).'
        },
        {
          title: 'Capillary Pressures and Net Filtration Pressure',
          body: 'Blood hydrostatic pressure (BHP): high at arterial end, low at venous end — drives fluid OUT. Blood colloid osmotic pressure (BCOP): relatively constant along capillary — draws fluid IN (from plasma proteins, mainly albumin). Oncotic pressure = net COP (blood COP - tissue COP). Net outward pressure at arterial end: ~10 mmHg (filtration dominates). Net inward pressure at venous end: ~9 mmHg (reabsorption dominates). About 85% of filtered fluid is reabsorbed; the remaining ~3 L/day is collected by lymphatic capillaries.'
        },
        {
          title: 'Starling\'s Law of the Capillaries',
          body: 'The volume of fluid and solutes reabsorbed is almost as large as the volume filtered. This near-balance ensures that blood volume and interstitial fluid volume remain relatively constant. Net filtration pressure (NFP) determines whether fluid enters or exits capillaries.'
        },
        {
          title: 'Edema',
          body: 'Abnormal increase in interstitial fluid when filtration exceeds reabsorption. Causes of excess filtration: increased blood pressure (hypertension), increased capillary permeability (allows plasma proteins to escape). Causes of inadequate reabsorption: decreased plasma proteins → lower BCOP (from liver disease, burns, malnutrition, kidney disease). Other causes: poor venous return (CHF → pulmonary edema), insufficient muscular activity, kidney failure (water retention, hypertension), histamine release (increased permeability), obstructed lymphatic drainage. Not clinically detectable until 30% above normal. Consequences: circulatory shock, tissue necrosis, pulmonary edema (suffocation), cerebral edema (headaches, nausea, seizures, coma).'
        },
        {
          title: 'Hemodynamics — Factors Affecting Circulation',
          body: 'Key hemodynamic factors: pressure differences driving blood flow, velocity of flow, volume of flow, blood pressure, resistance, and venous return. These forces interact to produce blood flow through the cardiovascular system.'
        },
        {
          title: 'Velocity of Blood Flow',
          body: 'Speed (cm/sec) is inversely related to total cross-sectional area. Blood flows fastest in the aorta (~40 cm/sec) and slowest in capillaries (~0.1 cm/sec) — the slow rate across capillaries allows sufficient time for exchange. Flow speed increases again as vessels merge into veins but never regains arterial velocity. Circulation time: time for blood to travel from right atrium back to right atrium.'
        },
        {
          title: 'Blood Pressure',
          body: 'Pressure exerted by blood on vessel walls, caused by ventricular contraction. Highest in aorta: 120 mmHg systole, 80 mmHg diastole. Falls steadily with distance from left ventricle: 35 mmHg entering capillaries, 0 mmHg entering right atrium. If cardiac output increases → BP rises. If blood volume drops >10% → BP drops. Water retention → increased BP. BP is determined by cardiac output, blood volume, and peripheral resistance.'
        },
        {
          title: 'Hypertension and Hypotension',
          body: 'Hypertension: chronic resting BP >140/90; can weaken small arteries and cause aneurysms. Stages: Normal <120/80, Prehypertension 120-129/80-89, Stage I 130-159/90-99, Stage II >160/100, Hypertensive Crisis >180/120. Hypotension: chronic low resting BP from blood loss, dehydration, or anemia. Orthostatic hypotension: BP drop upon standing.'
        },
        {
          title: 'Mean Arterial Pressure (MAP)',
          body: 'MAP = (SBP + 2×DBP) / 3. Better indicator of tissue perfusion than BP alone. Low MAP (<60 mmHg) = inadequate perfusion. High MAP (>100 mmHg) = excessive resistance. Clinically critical in guiding treatment decisions in shock and critical care.'
        },
        {
          title: 'Resistance to Blood Flow',
          body: 'Friction between blood and vessel walls. Three factors: (1) Vessel radius — most important; smaller vessels → more resistance; F ∝ r⁴ (flow proportional to fourth power of radius); arterioles can constrict to 1/3 of relaxed radius, reducing flow by 81-fold. (2) Blood viscosity — ratio of RBCs to plasma; dehydration or polycythemia increases viscosity and resistance. (3) Total vessel length — longer vessels = more resistance; 200 miles of vessels per pound of fat (obesity → high BP). Systemic vascular resistance (SVR) is the total of all these factors. Arterioles control BP by changing diameter.'
        },
        {
          title: 'Laminar Flow',
          body: 'Blood flows in concentric layers (laminae) — fastest in the center, slowest at the vessel wall. Flow rate relates to the fourth power of radius. Example: if vessel radius = 3 mm, flow = 81 mm/sec; if radius = 1 mm, flow = 1 mm/sec.'
        },
        {
          title: 'Arterial Elasticity and Aging',
          body: 'Arterial expansion during systole and recoil during diastole maintains steady flow and smooths pressure fluctuations, reducing stress on small arteries. BP rises with age as arteries become less distensible. Importance: loss of compliance means the heart must work harder and systolic pressure increases.'
        }
      ],
      keyTerms: [
        { term: 'Diffusion', definition: 'Most important capillary exchange mechanism; substances move down concentration gradients.' },
        { term: 'Transcytosis', definition: 'Vesicle-mediated transport across endothelium via pinocytosis; used for large lipid-insoluble molecules.' },
        { term: 'Filtration', definition: 'Movement of fluid OUT of capillary into interstitial space, driven by blood hydrostatic pressure.' },
        { term: 'Reabsorption', definition: 'Movement of fluid INTO capillary from interstitial space, driven by blood colloid osmotic pressure.' },
        { term: 'Blood Colloid Osmotic Pressure (BCOP)', definition: 'Osmotic pressure from plasma proteins (mainly albumin) that draws fluid into capillaries.' },
        { term: 'Net Filtration Pressure', definition: 'Balance of hydrostatic and osmotic pressures determining whether fluid enters or exits capillaries.' },
        { term: 'Starling\'s Law', definition: 'Volume of fluid reabsorbed nearly equals volume filtered; excess collected by lymphatics.' },
        { term: 'Edema', definition: 'Abnormal increase in interstitial fluid when filtration exceeds reabsorption.' },
        { term: 'Systemic Vascular Resistance', definition: 'Total peripheral resistance from vessel radius, blood viscosity, and vessel length.' },
        { term: 'Laminar Flow', definition: 'Blood flows in layers; fastest in center, slowest at wall; flow ∝ r⁴.' },
        { term: 'Mean Arterial Pressure (MAP)', definition: 'MAP = (SBP + 2×DBP)/3; indicator of tissue perfusion.' },
        { term: 'Hypertension', definition: 'Chronic resting BP >140/90; weakens arteries, causes aneurysms.' },
        { term: 'Orthostatic Hypotension', definition: 'Drop in BP upon standing; may cause dizziness or syncope.' }
      ],
      memoryAids: [
        'Diffusion is the STAR of capillary exchange — it does the most work.',
        'Starling\'s Law: "What goes out, mostly comes back in" — 85% reabsorbed.',
        'MAP formula: "1 Systolic + 2 Diastolic, divide by 3" — diastole counts twice because it lasts longer.',
        'Flow ∝ r⁴: "Radius Rules" — double the radius = 16× the flow!',
        'Arterioles are the FAUCETS of the circulation — they control the pressure.'
      ],
      inlineQuestions: [
        {
          question: 'The MOST important mechanism of capillary exchange is:',
          options: { A: 'Transcytosis', B: 'Bulk flow', C: 'Diffusion', D: 'Active transport' },
          answer: 'C',
          explanation: 'Diffusion is the most important capillary exchange mechanism — substances move down their concentration gradients through lipid bilayers, fenestrations, or intercellular clefts.'
        },
        {
          question: 'A patient with liver disease has low albumin levels. This causes edema because:',
          options: { A: 'Blood hydrostatic pressure increases', B: 'Blood colloid osmotic pressure drops, reducing reabsorption', C: 'Capillary permeability decreases', D: 'Lymphatic drainage is blocked' },
          answer: 'B',
          explanation: 'Albumin is the main contributor to blood colloid osmotic pressure (BCOP). Low albumin from liver disease → reduced BCOP → less fluid reabsorbed at the venous end of capillaries → fluid accumulates in tissues (edema).'
        },
        {
          question: 'Blood flow is proportional to the fourth power of vessel radius (F ∝ r⁴). If a vessel\'s radius is halved, flow decreases by:',
          options: { A: '2-fold', B: '4-fold', C: '8-fold', D: '16-fold' },
          answer: 'D',
          explanation: 'F ∝ r⁴: (1/2)⁴ = 1/16. Halving the radius causes a 16-fold decrease in flow! This is why small changes in arteriolar diameter have dramatic effects on blood pressure and tissue perfusion.'
        },
        {
          question: 'According to Starling\'s law of the capillaries, approximately what percentage of filtered fluid is reabsorbed, with the remainder collected by lymphatics?',
          options: { A: '50% reabsorbed, 50% to lymphatics', B: '85% reabsorbed, ~3 L/day to lymphatics', C: '99% reabsorbed, almost none to lymphatics', D: '70% reabsorbed, ~10 L/day to lymphatics' },
          answer: 'B',
          explanation: 'Starling\'s law states that the volume reabsorbed is almost as large as the volume filtered. About 85% of filtered fluid returns to capillaries; the remaining ~3 L/day of escaped fluid and plasma proteins is collected by lymphatic capillaries.'
        },
        {
          question: 'A patient\'s BP is 120/80. Their mean arterial pressure (MAP) is:',
          options: { A: '100 mmHg', B: '93 mmHg', C: '80 mmHg', D: '120 mmHg' },
          answer: 'B',
          explanation: 'MAP = (SBP + 2×DBP) / 3 = (120 + 2×80) / 3 = (120 + 160) / 3 = 280/3 ≈ 93 mmHg. MAP is a better indicator of tissue perfusion than BP alone. Low MAP (<60) = inadequate perfusion; high MAP (>100) = excessive resistance.'
        }
      ],
      quiz: [
        { id: 'v2-q1', question: 'Which is the most important mechanism of capillary exchange?', options: { A: 'Transcytosis', B: 'Osmosis', C: 'Diffusion', D: 'Active transport' }, answer: 'C', explanation: 'Diffusion is the most important; substances move down concentration gradients through clefts, fenestrations, or lipid bilayers.' },
        { id: 'v2-q2', question: 'Blood colloid osmotic pressure is primarily generated by:', options: { A: 'Red blood cells', B: 'Electrolytes', C: 'Plasma proteins (mainly albumin)', D: 'Platelets' }, answer: 'C', explanation: 'Albumin and other plasma proteins create osmotic pressure that draws fluid into capillaries (reabsorption).' },
        { id: 'v2-q3', question: 'At the arterial end of a capillary bed, the net filtration pressure favors:', options: { A: 'Reabsorption into capillary', B: 'Filtration out of capillary', C: 'No net movement', D: 'Transcytosis only' }, answer: 'B', explanation: 'Net outward pressure of ~10 mmHg at the arterial end drives fluid out (filtration). Reabsorption dominates at the venous end.' },
        { id: 'v2-q4', question: 'Approximately what percentage of filtered capillary fluid is reabsorbed?', options: { A: '50%', B: '70%', C: '85%', D: '99%' }, answer: 'C', explanation: 'About 85% of filtered fluid is reabsorbed; the remaining ~3 L/day is collected by lymphatic capillaries.' },
        { id: 'v2-q5', question: 'A patient with liver disease develops edema. The most likely mechanism is:', options: { A: 'Increased blood hydrostatic pressure', B: 'Decreased plasma protein production → lower BCOP', C: 'Increased blood viscosity', D: 'Excessive ADH secretion' }, answer: 'B', explanation: 'Liver disease reduces albumin synthesis, lowering blood colloid osmotic pressure and impairing reabsorption → interstitial fluid accumulation.' },
        { id: 'v2-q6', question: 'Blood velocity is slowest in the capillaries because:', options: { A: 'Capillaries have the smallest individual diameter', B: 'Capillaries have the greatest total cross-sectional area', C: 'Capillaries lack smooth muscle', D: 'Venous valves slow flow' }, answer: 'B', explanation: 'Velocity is inversely related to total cross-sectional area; capillaries collectively have the largest total area, slowing flow to ~0.1 cm/sec to allow exchange.' },
        { id: 'v2-q7', question: 'Blood flow is proportional to the fourth power of the radius (F ∝ r⁴). If a vessel constricts to half its original radius, flow decreases by a factor of:', options: { A: '2', B: '4', C: '8', D: '16' }, answer: 'D', explanation: 'F ∝ r⁴: (1/2)⁴ = 1/16, so flow decreases 16-fold when radius is halved.' },
        { id: 'v2-q8', question: 'Systemic vascular resistance is determined by all EXCEPT:', options: { A: 'Vessel radius', B: 'Blood viscosity', C: 'Blood vessel length', D: 'Heart rate' }, answer: 'D', explanation: 'SVR depends on vessel radius, blood viscosity, and vessel length. Heart rate affects cardiac output but not resistance directly.' },
        { id: 'v2-q9', question: 'A MAP of 55 mmHg indicates:', options: { A: 'Normal perfusion', B: 'Hypertension', C: 'Inadequate tissue perfusion', D: 'Excessive resistance' }, answer: 'C', explanation: 'MAP < 60 mmHg means inadequate perfusion of vital organs. MAP = (SBP + 2×DBP)/3.' },
        { id: 'v2-q10', question: 'Transcytosis across capillary walls is most important for transporting:', options: { A: 'Oxygen and CO₂', B: 'Small electrolytes', C: 'Large lipid-insoluble molecules like insulin', D: 'Water' }, answer: 'C', explanation: 'Transcytosis uses vesicles to move large, lipid-insoluble molecules (insulin, maternal antibodies) across the endothelium.' },
        { id: 'v2-q11', question: 'Edema is NOT clinically detectable until interstitial fluid volume exceeds normal by:', options: { A: '10%', B: '20%', C: '30%', D: '50%' }, answer: 'C', explanation: 'Edema is not noticeable until interstitial fluid is about 30% above normal volume.' },
        { id: 'v2-q12', question: 'Which vessels are the primary resistance vessels controlling moment-to-moment blood pressure?', options: { A: 'Elastic arteries', B: 'Muscular arteries', C: 'Arterioles', D: 'Venules' }, answer: 'C', explanation: 'Arterioles can dramatically change diameter and control systemic vascular resistance and blood pressure.' }
      ],
      flashcards: [
        { front: 'What are the three mechanisms of capillary exchange?', back: 'Diffusion (most important — down concentration gradients), transcytosis (vesicle-mediated for large molecules), and bulk flow (filtration out / reabsorption in, driven by pressure).' },
        { front: 'What drives filtration vs reabsorption across capillaries?', back: 'Filtration (OUT): driven by blood hydrostatic pressure (higher at arterial end). Reabsorption (IN): driven by blood colloid osmotic pressure from plasma proteins, mainly albumin.' },
        { front: 'What is Starling\'s Law of the Capillaries?', back: 'Volume filtered ≈ volume reabsorbed. About 85% of filtered fluid returns; the remaining ~3 L/day is collected by lymphatic capillaries.' },
        { front: 'What causes edema?', back: 'Filtration exceeds reabsorption. Causes: hypertension, increased capillary permeability, decreased plasma proteins (low BCOP), CHF, poor venous return, lymphatic obstruction. Not detectable until 30% above normal.' },
        { front: 'Why is blood flow slowest in capillaries?', back: 'Velocity is inversely related to total cross-sectional area. Capillaries have the greatest total area, slowing flow to ~0.1 cm/sec (vs 40 cm/sec in aorta) — allowing time for exchange.' },
        { front: 'What is the relationship between vessel radius and blood flow?', back: 'Flow is proportional to the fourth power of radius: F ∝ r⁴. Halving the radius = 16-fold decrease in flow. This is why small arteriolar changes have dramatic BP effects.' },
        { front: 'What three factors determine systemic vascular resistance?', back: '(1) Vessel radius (most important, F ∝ r⁴), (2) Blood viscosity (hematocrit), (3) Total vessel length (200 miles per pound of fat — obesity increases BP).' },
        { front: 'What is MAP and how is it calculated?', back: 'Mean Arterial Pressure = (SBP + 2×DBP) / 3. Better indicator of tissue perfusion. Low MAP (<60) = inadequate perfusion. High MAP (>100) = excessive resistance.' },
        { front: 'What are the hypertension stages?', back: 'Normal: <120/80. Prehypertension: 120-129/80-89. Stage I: 130-159/90-99. Stage II: >160/100. Hypertensive Crisis: >180/120.' },
        { front: 'What is the blood-brain barrier?', back: 'Nonfenestrated continuous capillaries with tight junctions that prevent diffusion of water-soluble materials into brain tissue.' },
        { front: 'What is transcytosis and when is it important?', back: 'Vesicle-mediated transport across endothelium via pinocytosis. Important for large, lipid-insoluble molecules like insulin, fatty acids, albumin, and maternal antibodies crossing the placenta.' },
        { front: 'What determines blood pressure?', back: 'BP is determined by cardiac output, blood volume, and peripheral resistance. BP highest in aorta (120/80) → 35 mmHg entering capillaries → 0 mmHg entering right atrium.' },
        { front: 'What is laminar flow?', back: 'Blood flows in concentric layers — fastest in the center, slowest at the vessel wall. Flow rate relates to the fourth power of radius.' },
        { front: 'What are arterioles often called and why?', back: 'The "faucets" of the circulation — they are the primary resistance vessels that control moment-to-moment blood pressure by changing diameter.' }
      ]
    },

    // ===== SECTION 3: Venous Return, Shock, BP Regulation & Special Routes =====
    {
      id: 'vessels-s3',
      title: 'Venous Return, Shock & Blood Pressure Regulation',
      pageRange: 'Pages 22-35',
      learnItems: [
        {
          title: 'Mechanisms of Venous Return',
          body: 'Venous return is aided by: (1) Pressure gradient: venous pressure 12-18 mmHg in venules → ~5 mmHg central venous pressure. (2) Gravity: drains blood from head and neck. (3) Skeletal muscle pump: contracting limb muscles compress veins, pushing blood upward past one-way valves. (4) Thoracic (respiratory) pump: during inhalation, thoracic cavity expands (pressure drops) while abdominal pressure rises, forcing blood upward; central venous pressure fluctuates 2 mmHg (inhalation) to 6 mmHg (exhalation). (5) Cardiac suction: expanding atrial space draws blood toward the heart.'
        },
        {
          title: 'Venous Return and Physical Activity',
          body: 'Exercise increases venous return: faster/stronger heartbeat, muscle/lung/heart vessel dilation, increased respiratory rate (thoracic pump), and increased skeletal muscle pump activity. Venous pooling occurs with inactivity—venous pressure may be insufficient to push blood upward, causing dizziness or syncope from low cardiac output. Prevention: tensing leg muscles, wearing pressure suits (jet pilots).'
        },
        {
          title: 'Circulatory Shock — Overview',
          body: 'Failure of the cardiovascular system to deliver adequate O₂ and nutrients. Cells switch to anaerobic respiration → lactic acid builds up → cell damage and death. Result: inadequate tissue perfusion.'
        },
        {
          title: 'Types of Circulatory Shock',
          body: 'Cardiogenic shock: inadequate heart pumping (e.g., MI). Low venous return (LVR) shock has three forms: (1) Hypovolemic shock (most common): blood volume loss from trauma, bleeding, burns, dehydration. (2) Obstructed venous return shock: from tumor or aneurysm compressing veins. (3) Venous pooling (vascular) shock: prolonged standing/sitting or widespread vasodilation — includes neurogenic shock (loss of vasomotor tone from emotional shock to brainstem injury). Septic shock: bacterial toxins cause vasodilation and increased capillary permeability. Anaphylactic shock: severe immune reaction → histamine release → generalized vasodilation and increased permeability.'
        },
        {
          title: 'Compensated vs Decompensated Shock',
          body: 'Compensated shock: homeostatic mechanisms attempt to restore BP — activation of RAAS, ADH secretion, sympathetic nervous system activation, baroreflex, local vasoconstrictors. If person faints and falls horizontal, gravity restores brain blood flow (raising feet helps). Decompensated shock (life-threatening positive feedback loops): decreased CO → myocardial ischemia → further CO drop; slow circulation → DIC → slower circulation; brainstem ischemia/acidosis → loss of vasomotor tone → further CO drop.'
        },
        {
          title: 'Signs and Symptoms of Shock',
          body: 'Rapid resting heart rate (sympathetic stimulation). Weak, rapid pulse (reduced CO). Clammy, cool skin (cutaneous vasoconstriction). Sweating, altered mental state (cerebral ischemia). Reduced urine production (renal vasoconstriction + increased aldosterone/ADH). Thirst (extracellular fluid loss). Acidosis (lactic acid). Nausea (impaired GI circulation).'
        },
        {
          title: 'Syncope (Fainting)',
          body: 'Sudden, temporary loss of consciousness due to cerebral ischemia. Categories: vasodepressor syncope (sudden emotional stress), situational syncope (coughing, defecation, urination pressure), drug-induced syncope (antihypertensives, diuretics, vasodilators), orthostatic hypotension (BP decrease upon standing).'
        },
        {
          title: 'Neural Control: Cardiovascular Center',
          body: 'Located in the medulla oblongata. Receives input from: higher brain centers (cortex, limbic system, hypothalamus — anticipation, temperature), proprioceptors (physical activity), baroreceptors (pressure changes in vessels), and chemoreceptors (blood chemistry). Output to heart: parasympathetic via vagus nerve (decreases HR), sympathetic cardiac accelerator nerves (increase rate/contractility). Output to blood vessels: sympathetic vasomotor nerves maintain vasomotor tone, produce vasoconstriction in skin/viscera. Increased stimulation → constriction → higher BP.'
        },
        {
          title: 'Neural Control: Baroreflex',
          body: 'Baroreceptors (stretch receptors) in aortic arch, aortic sinuses (behind aortic valve), and carotid sinus detect BP changes. Autonomous negative feedback: baroreceptors send constant signals to brainstem. When BP rises: signal rate increases → inhibits vasomotor center → decreased sympathetic tone → vasodilation → BP falls. When BP drops: signal rate decreases → excites vasomotor center → increased sympathetic tone → vasoconstriction → BP rises. Clinical: carotid sinus massage can slow heart rate (treats paroxysmal SVT). Tight collar or neck hyperextension may cause carotid sinus syncope.'
        },
        {
          title: 'Neural Control: Chemoreflex',
          body: 'Chemoreceptors in aortic bodies and carotid bodies (aortic arch, subclavian arteries, external carotid arteries). Detect changes in blood pH, O₂, and CO₂. Primary role: adjust respiration. Secondary role: vasomotion. Hypoxemia (low O₂), hypercapnia (high CO₂), and acidosis → stimulate chemoreceptors → instruct vasomotor center → vasoconstriction → BP rises → improved lung perfusion and gas exchange.'
        },
        {
          title: 'Neural Control: Medullary Ischemic Reflex',
          body: 'When the brainstem itself receives inadequate perfusion, cardiac and vasomotor centers send sympathetic signals to heart and blood vessels → increased cardiac output + widespread vasoconstriction → BP rises. This is a last-resort emergency mechanism. Stress, anger, and arousal can also raise BP through other brain centers.'
        },
        {
          title: 'Hormonal Control: Renin-Angiotensin-Aldosterone System (RAAS)',
          body: 'Angiotensinogen (prohormone from liver) → Renin (enzyme released by kidneys when BP is low) converts it to Angiotensin I → ACE (angiotensin-converting enzyme, in lungs) converts to Angiotensin II. Angiotensin II is a VERY potent vasoconstrictor that rapidly raises BP. ACE inhibitors block this conversion to treat hypertension. Angiotensin II also stimulates aldosterone release from adrenal cortex.'
        },
        {
          title: 'Hormonal Control: Other Hormones',
          body: 'Aldosterone: promotes Na⁺ and water retention by kidneys → increases blood volume and BP. ADH (antidiuretic hormone): promotes water retention; at high concentrations, causes vasoconstriction. Atrial natriuretic factor (ANF): released when BP rises → promotes Na⁺/water excretion and generalized vasodilation → lowers BP. Epinephrine and norepinephrine: α-adrenergic receptors → vasoconstriction (most vessels); β-adrenergic receptors → vasodilation (skeletal/cardiac muscle vessels).'
        },
        {
          title: 'Local Autoregulation',
          body: 'Tissues independently regulate their own blood flow based on metabolic needs, especially important in brain, cardiac, and skeletal muscle. Physical changes: warming and decreased vascular stretching promote vasodilation. Vasoactive substances: K⁺, H⁺, lactic acid, and nitric oxide dilate systemic vessels when O₂ is low. Exception: pulmonary vessels CONSTRICT in response to low O₂ (redirects flow to better-ventilated lung regions).'
        },
        {
          title: 'Special Circulatory Routes: Brain',
          body: 'Total brain perfusion is kept constant—a few seconds of deprivation causes loss of consciousness; 4-5 minutes causes irreversible damage. Flow shifts between active regions as needed. Cerebral arteries dilate as BP falls and constrict as BP rises (autoregulation). Main chemical stimulus: pH. If CO₂ rises (hypercapnia) → pH drops → vasodilation. If CO₂ drops (hypocapnia from hyperventilation) → pH rises → vasoconstriction → may cause dizziness/syncope.'
        },
        {
          title: 'Special Circulatory Routes: Skeletal Muscle and Lungs',
          body: 'Skeletal muscle: highly variable flow. At rest, arterioles constrict (~1 L/min total flow). During exercise, arterioles dilate in response to epinephrine and sympathetic nerves; precapillary sphincters dilate from lactic acid and CO₂; flow can increase 20-fold. Isometric contraction causes faster fatigue than isotonic because sustained compression impedes flow. Lungs: low pulmonary blood pressure allows slower flow for gas exchange; oncotic pressure overrides hydrostatic (net reabsorption favored); unique hypoxic vasoconstriction redirects blood to better-ventilated areas.'
        },
        {
          title: 'Aging and the Cardiovascular System',
          body: 'General aging changes: decreased aortic compliance, reduced cardiac muscle fiber size, reduced cardiac output and max heart rate, increased systolic pressure. Total cholesterol and LDL increase while HDL decreases. Increased risk for congestive heart failure, coronary artery disease, and atherosclerosis.'
        },
        {
          title: 'Blood Pressure Measurement',
          body: 'Auscultatory method uses sphygmomanometer cuff on upper arm (1 inch above elbow bend) and stethoscope disk placed under the cuff on inner arm. Inflate cuff to 30 mmHg above expected systolic. Slowly deflate while listening: first Korotkoff sound = systolic pressure; last sound disappears = diastolic pressure. Pulse pressure = systolic - diastolic (normally ~40 mmHg). Common pulse points: carotid, radial, brachial, dorsalis pedis, posterior tibial.'
        }
      ],
      keyTerms: [
        { term: 'Skeletal Muscle Pump', definition: 'Contracting muscles compress veins, pushing blood upward past one-way valves.' },
        { term: 'Thoracic Pump', definition: 'Inhalation expands thorax (lower pressure) while raising abdominal pressure, driving venous blood upward.' },
        { term: 'Cardiogenic Shock', definition: 'Shock from inadequate heart pumping (e.g., after myocardial infarction).' },
        { term: 'Hypovolemic Shock', definition: 'Most common shock type; from blood/fluid volume loss (trauma, burns, dehydration).' },
        { term: 'Anaphylactic Shock', definition: 'Severe immune-mediated shock with histamine-driven vasodilation and increased permeability.' },
        { term: 'Baroreceptors', definition: 'Stretch receptors in aortic arch and carotid sinus that detect blood pressure changes.' },
        { term: 'Chemoreceptors', definition: 'Sensors detecting blood pH, O₂, CO₂ in aortic/carotid bodies.' },
        { term: 'Vasomotor Center', definition: 'Medulla oblongata region controlling sympathetic vasomotor tone and vessel diameter.' },
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System: renin → angiotensin I → ACE → angiotensin II (potent vasoconstrictor).' },
        { term: 'ACE Inhibitors', definition: 'Drugs that block conversion of angiotensin I to II, lowering blood pressure.' },
        { term: 'Atrial Natriuretic Factor', definition: 'Heart hormone promoting Na⁺/water excretion and vasodilation to lower BP when BP is high.' },
        { term: 'Autoregulation', definition: 'Local tissue ability to adjust own blood flow based on metabolic demands.' },
        { term: 'Korotkoff Sounds', definition: 'Sounds heard during BP measurement; first = systolic, last disappearance = diastolic.' },
        { term: 'Pulse Pressure', definition: 'Difference between systolic and diastolic pressures (normally ~40 mmHg).' }
      ],
      memoryAids: [
        'Venous return helpers: "GSTC" = Gravity, Skeletal pump, Thoracic pump, Cardiac suction.',
        'RAAS pathway: "Liver → Kidney → Lung → Action" = Angiotensinogen → Renin → ACE → Angiotensin II.',
        'Shock types: "CHANS" = Cardiogenic, Hypovolemic, Anaphylactic, Neurogenic, Septic.',
        'Baroreflexes work like a thermostat: high BP → signals increase → vasodilation → BP drops.',
        'Brain flow rule: "4-5 minutes without blood = irreversible damage."',
        'Pulmonary vessels are backwards: they CONSTRICT with low O₂ (opposite of systemic).'
      ],
      inlineQuestions: [
        {
          question: 'Which mechanisms help push venous blood back to the heart?',
          options: { A: 'Precapillary sphincters and vasomotion', B: 'Skeletal muscle pump and thoracic (respiratory) pump', C: 'Fenestrations and transcytosis', D: 'Vasoconstriction of arterioles' },
          answer: 'B',
          explanation: 'Venous return is aided by the skeletal muscle pump (contracting muscles compress veins past one-way valves), the thoracic pump (inhalation drops thoracic pressure, drawing blood upward), gravity, cardiac suction, and pressure gradients.'
        },
        {
          question: 'The MOST COMMON type of circulatory shock is:',
          options: { A: 'Cardiogenic shock', B: 'Septic shock', C: 'Hypovolemic shock', D: 'Anaphylactic shock' },
          answer: 'C',
          explanation: 'Hypovolemic shock (blood/fluid volume loss from trauma, bleeding, burns, or dehydration) is the most common form of circulatory shock.'
        },
        {
          question: 'In the RAAS system, angiotensin-converting enzyme (ACE) is located in the lungs and converts angiotensin I to:',
          options: { A: 'Renin', B: 'Aldosterone', C: 'Angiotensin II (a potent vasoconstrictor)', D: 'Angiotensinogen' },
          answer: 'C',
          explanation: 'ACE in the lungs converts angiotensin I to angiotensin II, which is a VERY potent vasoconstrictor that rapidly raises blood pressure. ACE inhibitors block this step to treat hypertension.'
        },
        {
          question: 'When baroreceptors in the carotid sinus detect a RISE in blood pressure, they signal the brainstem to:',
          options: { A: 'Increase sympathetic tone and vasoconstriction', B: 'Decrease sympathetic tone, causing vasodilation and lowering BP', C: 'Release renin from the kidneys', D: 'Increase heart rate and contractility' },
          answer: 'B',
          explanation: 'The baroreflex is a negative feedback system: rising BP → increased baroreceptor signal rate → inhibits vasomotor center → decreased sympathetic tone → vasodilation → BP falls back toward normal.'
        },
        {
          question: 'Total brain perfusion must be kept constant because deprivation for just 4-5 minutes causes:',
          options: { A: 'Temporary dizziness only', B: 'Reversible muscle weakness', C: 'Irreversible brain damage', D: 'Increased melatonin secretion' },
          answer: 'C',
          explanation: 'A few seconds without blood causes loss of consciousness; 4-5 minutes of deprivation causes irreversible brain damage. The brain autoregulates its blood flow — cerebral arteries dilate as BP falls and constrict as BP rises.'
        }
      ],
      quiz: [
        { id: 'v3-q1', question: 'Which mechanisms aid venous return? (Select the best answer)', options: { A: 'Skeletal muscle pump and thoracic pump', B: 'Precapillary sphincters and vasomotion', C: 'Diffusion and transcytosis', D: 'Fenestrations and sinusoids' }, answer: 'A', explanation: 'Venous return is aided by skeletal muscle pump, thoracic pump, gravity, cardiac suction, and pressure gradients.' },
        { id: 'v3-q2', question: 'The MOST COMMON type of circulatory shock is:', options: { A: 'Cardiogenic', B: 'Hypovolemic', C: 'Septic', D: 'Anaphylactic' }, answer: 'B', explanation: 'Hypovolemic shock (blood/fluid volume loss) is the most common form of shock.' },
        { id: 'v3-q3', question: 'During compensated shock, which system is activated to help restore blood pressure?', options: { A: 'Parasympathetic nervous system', B: 'Renin-angiotensin-aldosterone system', C: 'Somatic motor system', D: 'Enteric nervous system' }, answer: 'B', explanation: 'Compensated shock activates RAAS, ADH secretion, sympathetic NS, baroreflexes, and local vasoconstrictors.' },
        { id: 'v3-q4', question: 'Baroreceptors detecting increased blood pressure will cause:', options: { A: 'Increased sympathetic tone and vasoconstriction', B: 'Decreased sympathetic tone and vasodilation', C: 'Increased heart rate and contractility', D: 'Release of renin from kidneys' }, answer: 'B', explanation: 'High BP → increased baroreceptor signal rate → inhibits vasomotor center → decreased sympathetic tone → vasodilation → BP falls.' },
        { id: 'v3-q5', question: 'In the RAAS system, angiotensin-converting enzyme (ACE) is primarily located in the:', options: { A: 'Kidneys', B: 'Liver', C: 'Lungs', D: 'Heart' }, answer: 'C', explanation: 'ACE in the lungs converts angiotensin I to angiotensin II (a potent vasoconstrictor). ACE inhibitors target this enzyme.' },
        { id: 'v3-q6', question: 'Angiotensin II acts as a:', options: { A: 'Mild vasodilator', B: 'Potent vasoconstrictor', C: 'Diuretic', D: 'Parasympathetic stimulant' }, answer: 'B', explanation: 'Angiotensin II is a VERY potent vasoconstrictor that rapidly raises blood pressure; also stimulates aldosterone.' },
        { id: 'v3-q7', question: 'Anaphylactic shock results from:', options: { A: 'Blood loss from trauma', B: 'Bacterial toxins causing vasodilation', C: 'Severe allergic reaction with histamine release', D: 'Loss of vasomotor tone from brainstem injury' }, answer: 'C', explanation: 'Anaphylactic shock is a severe immune reaction where histamine causes generalized vasodilation and increased capillary permeability.' },
        { id: 'v3-q8', question: 'Chemoreceptors in the aortic and carotid bodies primarily detect:', options: { A: 'Blood pressure changes', B: 'Blood pH, O₂, and CO₂ levels', C: 'Blood glucose levels', D: 'Blood temperature' }, answer: 'B', explanation: 'Chemoreceptors detect blood chemistry changes (pH, O₂, CO₂). Their primary role is adjusting respiration, secondary role is vasomotion.' },
        { id: 'v3-q9', question: 'The medullary ischemic reflex is best described as:', options: { A: 'A routine BP adjustment response', B: 'A voluntary reflex activated by the cortex', C: 'A last-resort emergency response when the brainstem lacks perfusion', D: 'A reflex only active during exercise' }, answer: 'C', explanation: 'When the brainstem itself receives inadequate blood flow, it sends maximal sympathetic signals to raise CO and vasoconstriction—a last-resort mechanism.' },
        { id: 'v3-q10', question: 'Atrial natriuretic factor (ANF) is released in response to:', options: { A: 'Low blood pressure', B: 'High blood pressure', C: 'Dehydration', D: 'Low blood glucose' }, answer: 'B', explanation: 'ANF is released when BP is high; it promotes Na⁺ and water excretion (natriuresis) and generalized vasodilation to lower BP.' },
        { id: 'v3-q11', question: 'Pulmonary arteries respond to low O₂ by:', options: { A: 'Dilating to increase blood flow', B: 'Constricting to redirect blood to better-ventilated areas', C: 'Remaining unchanged', D: 'Increasing permeability' }, answer: 'B', explanation: 'Pulmonary vessels uniquely CONSTRICT in response to low O₂ (hypoxic vasoconstriction), opposite of systemic vessels which dilate.' },
        { id: 'v3-q12', question: 'Blood flow to skeletal muscle during vigorous exercise can increase by approximately:', options: { A: '2-fold', B: '5-fold', C: '10-fold', D: '20-fold' }, answer: 'D', explanation: 'During exercise, arteriolar dilation and sphincter relaxation from epinephrine, lactic acid, and CO₂ can increase skeletal muscle blood flow up to 20×.' },
        { id: 'v3-q13', question: 'A patient\'s BP is 130/85. Their MAP is closest to:', options: { A: '85 mmHg', B: '100 mmHg', C: '108 mmHg', D: '130 mmHg' }, answer: 'B', explanation: 'MAP = (130 + 2×85)/3 = (130+170)/3 = 300/3 = 100 mmHg.' },
        { id: 'v3-q14', question: 'Signs of circulatory shock include all EXCEPT:', options: { A: 'Rapid resting heart rate', B: 'Cool, clammy skin', C: 'Increased urine output', D: 'Thirst and acidosis' }, answer: 'C', explanation: 'Shock REDUCES urine formation due to renal vasoconstriction and increased aldosterone/ADH. All others are classic shock signs.' },
        { id: 'v3-q15', question: 'Irreversible brain damage occurs after approximately how many minutes without blood flow?', options: { A: '1-2 minutes', B: '4-5 minutes', C: '10-15 minutes', D: '30 minutes' }, answer: 'B', explanation: 'A few seconds without blood causes loss of consciousness; 4-5 minutes without flow causes irreversible brain damage.' }
      ],
      flashcards: [
        { front: 'What mechanisms aid venous return?', back: 'Pressure gradient, gravity (drains head/neck), skeletal muscle pump, thoracic (respiratory) pump, and cardiac suction.' },
        { front: 'How does the skeletal muscle pump work?', back: 'Contracting limb muscles compress veins, pushing blood upward past one-way valves. Inactivity leads to venous pooling, dizziness, or syncope.' },
        { front: 'How does the thoracic pump work?', back: 'During inhalation, thoracic cavity expands (pressure drops) while abdominal pressure rises → forces blood upward toward the heart.' },
        { front: 'What are the main types of circulatory shock?', back: 'Cardiogenic (MI), Hypovolemic (most common — blood loss), Obstructive (tumor), Neurogenic (loss of vasomotor tone), Septic (bacterial toxins), Anaphylactic (immune/histamine). Mnemonic: CHANS.' },
        { front: 'What is compensated vs decompensated shock?', back: 'Compensated: RAAS, ADH, SNS, baroreflexes attempt to restore BP. Decompensated: life-threatening positive feedback loops — decreased CO → ischemia → further CO drop.' },
        { front: 'How does the baroreflex work?', back: 'Baroreceptors in aortic arch/carotid sinus detect BP. High BP → increased signals → decreased sympathetic tone → vasodilation → BP falls. Low BP → decreased signals → vasoconstriction → BP rises. Negative feedback.' },
        { front: 'What do chemoreceptors detect and where are they?', back: 'Located in aortic and carotid bodies. Detect blood pH, O₂, CO₂. Hypoxemia, hypercapnia, acidosis → stimulate vasomotor center → vasoconstriction → BP rises.' },
        { front: 'What is the RAAS pathway?', back: 'Angiotensinogen (liver) → Renin (kidneys) → Angiotensin I → ACE (lungs) → Angiotensin II (very potent vasoconstrictor). Also stimulates aldosterone release.' },
        { front: 'What are ACE inhibitors?', back: 'Drugs that block angiotensin-converting enzyme in the lungs, preventing formation of angiotensin II — used to treat hypertension.' },
        { front: 'What is the medullary ischemic reflex?', back: 'A last-resort emergency: when the brainstem itself lacks perfusion, it sends maximal sympathetic signals → increased CO + widespread vasoconstriction → BP rises.' },
        { front: 'How are pulmonary vessels unique in their response to low O₂?', back: 'Pulmonary vessels CONSTRICT with low O₂ (opposite of systemic vessels which dilate). This redirects blood to better-ventilated lung regions.' },
        { front: 'What is syncope and what are its types?', back: 'Sudden loss of consciousness from cerebral ischemia. Types: vasodepressor (emotional), situational (coughing/straining), drug-induced (antihypertensives), orthostatic hypotension (standing up).' },
        { front: 'How long can the brain survive without blood flow?', back: 'A few seconds without blood = loss of consciousness. 4-5 minutes = irreversible brain damage. The brain autoregulates blood flow — arteries dilate as BP falls.' },
        { front: 'How much can skeletal muscle blood flow increase during exercise?', back: 'Up to 20-fold (from ~1 L/min at rest to ~20 L/min) due to arteriolar dilation from local metabolites (CO₂, lactic acid, K⁺) and epinephrine.' }
      ]
    }
  ],

  // ===== MODULE-LEVEL QUIZ =====
  quiz: [
    { id: 'v-q1', question: 'The tunica interna of a blood vessel is composed of:', options: { A: 'Smooth muscle and collagen', B: 'Simple squamous endothelium and basement membrane', C: 'Areolar connective tissue', D: 'Elastic laminae only' }, answer: 'B', explanation: 'The tunica interna consists of simple squamous endothelium overlying a basement membrane; it lines the lumen and acts as a selectively permeable barrier.' },
    { id: 'v-q2', question: 'Which chemical is a vasodilator released from endothelial cells?', options: { A: 'Norepinephrine', B: 'Aldosterone', C: 'Nitric oxide', D: 'Angiotensin II' }, answer: 'C', explanation: 'Nitric oxide promotes vasodilation by relaxing smooth muscle. K⁺, H⁺, and lactic acid also cause vasodilation.' },
    { id: 'v-q3', question: 'Sinusoid capillaries differ from other capillary types in that they:', options: { A: 'Have tighter junctions', B: 'Lack fenestrations entirely', C: 'Have very large fenestrations and an incomplete basement membrane', D: 'Are found only in skeletal muscle' }, answer: 'C', explanation: 'Sinusoids have very large fenestrations and incomplete basement membranes, allowing passage of large proteins and blood cells (found in liver, marrow, spleen).' },
    { id: 'v-q4', question: 'A patient with severe burns loses significant plasma proteins. This most likely leads to:', options: { A: 'Increased blood viscosity', B: 'Decreased blood colloid osmotic pressure causing edema', C: 'Varicose veins', D: 'Increased capillary reabsorption' }, answer: 'B', explanation: 'Protein loss lowers BCOP → less reabsorption → fluid accumulates in tissues (edema). Burns are a classic cause.' },
    { id: 'v-q5', question: 'The velocity of blood flow is slowest in capillaries primarily because:', options: { A: 'They have the smallest individual diameter', B: 'Blood pressure is lowest', C: 'Total cross-sectional area is greatest', D: 'They lack smooth muscle' }, answer: 'C', explanation: 'Velocity is inversely proportional to total cross-sectional area. Capillaries have the greatest combined area, slowing flow to allow exchange.' },
    { id: 'v-q6', question: 'If an arteriole constricts from a radius of 3 mm to 1 mm, blood flow through it changes from 81 mm/sec to:', options: { A: '27 mm/sec', B: '9 mm/sec', C: '3 mm/sec', D: '1 mm/sec' }, answer: 'D', explanation: 'F ∝ r⁴. When r = 3: flow = 3⁴ = 81. When r = 1: flow = 1⁴ = 1. An 81-fold decrease in flow!' },
    { id: 'v-q7', question: 'Which type of shock is caused by bacterial toxins triggering vasodilation and increased capillary permeability?', options: { A: 'Hypovolemic', B: 'Cardiogenic', C: 'Septic', D: 'Neurogenic' }, answer: 'C', explanation: 'Septic shock occurs when bacterial toxins cause widespread vasodilation and increased capillary permeability.' },
    { id: 'v-q8', question: 'The carotid sinus contains baroreceptors that:', options: { A: 'Detect blood chemistry changes', B: 'Monitor blood glucose', C: 'Detect changes in blood pressure', D: 'Regulate respiratory rate only' }, answer: 'C', explanation: 'Baroreceptors in the carotid sinus are stretch receptors that detect BP changes and trigger autonomic adjustments via the baroreflex.' },
    { id: 'v-q9', question: 'ACE inhibitors lower blood pressure by:', options: { A: 'Blocking aldosterone receptors', B: 'Preventing conversion of angiotensin I to angiotensin II', C: 'Stimulating histamine release', D: 'Increasing heart rate' }, answer: 'B', explanation: 'ACE inhibitors block angiotensin-converting enzyme in the lungs, preventing formation of angiotensin II (a potent vasoconstrictor).' },
    { id: 'v-q10', question: 'During exercise, skeletal muscle blood flow increases up to 20-fold primarily due to:', options: { A: 'Parasympathetic stimulation', B: 'Arteriolar dilation from epinephrine, lactic acid, and CO₂', C: 'Increased venous valve activity', D: 'Decreased cardiac output' }, answer: 'B', explanation: 'Arteriolar dilation from sympathetic/epinephrine stimulation and precapillary sphincter relaxation from local metabolites (lactic acid, CO₂) dramatically increase muscle perfusion.' },
    { id: 'v-q11', question: 'Venous pooling from prolonged standing may cause syncope because:', options: { A: 'Blood viscosity increases', B: 'Cardiac output drops, reducing cerebral perfusion', C: 'Arteriolar resistance increases', D: 'Baroreceptors become hypersensitive' }, answer: 'B', explanation: 'Without skeletal muscle pump activity, blood pools in leg veins → reduced venous return → reduced CO → reduced cerebral perfusion → dizziness/syncope.' },
    { id: 'v-q12', question: 'How does the blood-brain barrier differ from other capillary beds?', options: { A: 'It has sinusoidal capillaries', B: 'It has nonfenestrated endothelium with tight junctions', C: 'It lacks an endothelial layer', D: 'It has no basement membrane' }, answer: 'B', explanation: 'The blood-brain barrier consists of nonfenestrated continuous capillaries with tight junctions, preventing diffusion of water-soluble materials.' },
    { id: 'v-q13', question: 'Which hormone promotes Na⁺ and water retention by the kidneys, increasing blood volume and pressure?', options: { A: 'Atrial natriuretic factor', B: 'Nitric oxide', C: 'Aldosterone', D: 'Melatonin' }, answer: 'C', explanation: 'Aldosterone from the adrenal cortex promotes Na⁺ reabsorption (water follows) by the kidneys, increasing blood volume and BP.' },
    { id: 'v-q14', question: 'Decompensated shock involves:', options: { A: 'Successful restoration of blood pressure', B: 'Life-threatening positive feedback loops', C: 'Activation of baroreflexes only', D: 'Mild reduction in cardiac output' }, answer: 'B', explanation: 'Decompensated shock involves positive feedback loops: decreased CO → ischemia → further CO drop; DIC → slower circulation; brainstem ischemia → vasodilation → worse ischemia.' },
    { id: 'v-q15', question: 'All of the following are aging-related cardiovascular changes EXCEPT:', options: { A: 'Decreased aortic compliance', B: 'Increased maximum heart rate', C: 'Increased systolic pressure', D: 'Increased total cholesterol' }, answer: 'B', explanation: 'Maximum heart rate DECREASES with age. Aortic compliance decreases, systolic pressure increases, and cholesterol/LDL increase.' }
  ],

  // ===== SCENARIO-BASED QUESTIONS =====
  scenarioQuestions: [
    {
      scenario: 'A patient has an arteriole that constricts, reducing its radius by half.',
      question: 'What happens to blood flow through this vessel?',
      options: {
        A: 'Flow decreases by half (2×)',
        B: 'Flow decreases by 4×',
        C: 'Flow decreases by 16× (to 1/16th)',
        D: 'Flow remains the same because pressure compensates'
      },
      answer: 'C',
      explanation: 'Blood flow is proportional to the fourth power of the radius (F ∝ r⁴). If the radius is halved: (1/2)⁴ = 1/16. Flow drops to just 1/16th of its original value — a 16-fold decrease! This is why small changes in vessel diameter have dramatic effects on flow.'
    },
    {
      scenario: 'A trauma patient loses 1.5 liters of blood rapidly from a ruptured femoral artery.',
      question: 'Which type of shock is this patient developing, and what compensatory mechanism activates first?',
      options: {
        A: 'Cardiogenic shock; myocardial depressant factor released',
        B: 'Hypovolemic shock; baroreceptor reflex triggers sympathetic activation',
        C: 'Neurogenic shock; loss of vasomotor tone',
        D: 'Septic shock; bacterial toxins cause vasodilation'
      },
      answer: 'B',
      explanation: 'Acute hemorrhage causes hypovolemic shock (the most common type). The drop in blood pressure is detected by baroreceptors in the carotid sinus and aortic arch, which decrease their firing rate. This triggers a sympathetic response: increased HR, vasoconstriction, and RAAS activation to restore pressure and volume.'
    },
    {
      scenario: 'During a long lecture, a student stands up quickly and immediately feels dizzy and lightheaded.',
      question: 'What is the most likely physiological explanation?',
      options: {
        A: 'Increased cardiac output overwhelms cerebral vessels',
        B: 'Orthostatic hypotension — blood pools in lower extremities, reducing venous return and cerebral perfusion',
        C: 'Hyperventilation causes cerebral vasoconstriction',
        D: 'Baroreceptors over-correct, causing excessive vasoconstriction'
      },
      answer: 'B',
      explanation: 'Orthostatic (postural) hypotension occurs when gravitational pooling of blood in the legs upon standing reduces venous return → decreased stroke volume → decreased cardiac output → transient cerebral ischemia. Normally the baroreflex compensates within seconds, but prolonged sitting or dehydration can delay this response.'
    },
    {
      scenario: 'A patient with liver cirrhosis has severe abdominal swelling (ascites) and swollen ankles.',
      question: 'What is the primary mechanism causing this edema?',
      options: {
        A: 'Increased blood pressure forcing excess filtration',
        B: 'Decreased plasma protein production causing reduced blood colloid osmotic pressure',
        C: 'Blocked lymphatic drainage from tumor compression',
        D: 'Increased capillary permeability from histamine release'
      },
      answer: 'B',
      explanation: 'The liver produces albumin, the major plasma protein maintaining blood colloid osmotic pressure (BCOP). Cirrhosis impairs albumin synthesis → decreased BCOP → less reabsorption at capillary venous end → net fluid shift into interstitial spaces. This is why liver disease patients develop generalized edema and ascites.'
    },
    {
      scenario: 'A patient\'s BP is recorded as 150/90 mmHg.',
      question: 'Calculate the MAP and classify this blood pressure.',
      options: {
        A: 'MAP = 120 mmHg; Normal',
        B: 'MAP = 110 mmHg; Stage I Hypertension',
        C: 'MAP = 100 mmHg; Prehypertension',
        D: 'MAP = 130 mmHg; Stage II Hypertension'
      },
      answer: 'B',
      explanation: 'MAP = (SBP + 2×DBP) / 3 = (150 + 180) / 3 = 330/3 = 110 mmHg. The systolic of 150 and diastolic of 90 place this in Stage I Hypertension (SBP 130-159 or DBP 90-99). The elevated MAP (>100) indicates excessive vascular resistance and increased cardiac workload.'
    },
    {
      scenario: 'An elderly patient with a known abdominal aortic aneurysm suddenly develops severe tearing back pain and hypotension.',
      question: 'What is the most likely complication and what type of shock may develop?',
      options: {
        A: 'Aneurysm rupture causing hypovolemic shock from massive internal hemorrhage',
        B: 'Aortic dissection causing cardiogenic shock',
        C: 'Vasovagal response causing neurogenic shock',
        D: 'Pulmonary embolism causing obstructive shock'
      },
      answer: 'A',
      explanation: 'Aortic aneurysm rupture causes catastrophic internal blood loss (hypovolemic shock). The tearing pain and sudden hypotension are classic signs. Without emergency surgery, mortality is extremely high. This demonstrates why chronic hypertension is dangerous — it weakens arterial walls, promoting aneurysm formation and rupture.'
    },
    {
      scenario: 'A patient with a severe bee sting allergy is accidentally stung. Within minutes, their blood pressure drops to 60/40 and they develop widespread urticaria (hives).',
      question: 'What type of shock is occurring and what is the primary mediator?',
      options: {
        A: 'Septic shock caused by bacterial endotoxins',
        B: 'Neurogenic shock from autonomic failure',
        C: 'Anaphylactic shock caused by massive histamine release',
        D: 'Hypovolemic shock from fluid loss through the skin'
      },
      answer: 'C',
      explanation: 'Anaphylactic shock is a severe immune reaction where mast cells release massive amounts of histamine, causing widespread vasodilation (dropping BP) and increased capillary permeability (urticaria, potential airway edema). Treatment: epinephrine (reverses vasodilation, reduces edema), antihistamines, and IV fluids.'
    },
    {
      scenario: 'During a marathon, a runner\'s skeletal muscle blood flow increases from 1 L/min at rest to 20 L/min.',
      question: 'What mechanisms allow this 20-fold increase in muscle perfusion?',
      options: {
        A: 'Parasympathetic vasodilation and decreased heart rate',
        B: 'Arteriolar dilation from local metabolites (CO₂, lactic acid, K⁺) plus sympathetic-mediated precapillary sphincter relaxation',
        C: 'Increased blood viscosity forces more blood through muscles',
        D: 'Venous constriction redirects all blood to muscles'
      },
      answer: 'B',
      explanation: 'During exercise, active muscles produce CO₂, lactic acid, K⁺, and H⁺ — these metabolites cause local arteriolar dilation (autoregulation). Epinephrine relaxes precapillary sphincters via β₂ receptors. Meanwhile, sympathetic vasoconstriction reduces flow to inactive organs (GI, kidneys), redirecting blood to working muscles. This is redistribution of cardiac output.'
    },
    {
      scenario: 'A polycythemia patient has an abnormally high hematocrit of 65% (normal ~45%).',
      question: 'How does this affect blood viscosity and vascular resistance?',
      options: {
        A: 'Viscosity decreases, resistance decreases, flow increases',
        B: 'Viscosity increases, resistance increases, the heart must work harder',
        C: 'No change — hematocrit does not affect viscosity',
        D: 'Viscosity increases but resistance decreases due to more oxygen delivery'
      },
      answer: 'B',
      explanation: 'Blood viscosity increases with hematocrit. Higher viscosity means greater resistance to flow (SVR increases). The heart must generate more force to push thicker blood through vessels, increasing cardiac workload and risk of clot formation. This is why polycythemia increases risk of stroke and MI.'
    },
    {
      scenario: 'A pregnant woman in her third trimester develops swollen ankles and varicose veins in her legs.',
      question: 'What is the primary mechanism causing these vascular changes?',
      options: {
        A: 'Increased blood viscosity from pregnancy hormones',
        B: 'Uterine compression of pelvic veins increases venous pressure, causing valve incompetence and fluid accumulation',
        C: 'Decreased cardiac output during pregnancy',
        D: 'Arterial spasm from pregnancy-induced hypertension'
      },
      answer: 'B',
      explanation: 'The enlarged uterus compresses pelvic and abdominal veins, increasing venous pressure in the lower extremities. Sustained high venous pressure stretches vein walls and causes valve incompetence (varicose veins). Poor venous return increases capillary hydrostatic pressure → excess filtration → dependent edema in ankles. This typically resolves after delivery.'
    }
  ]
};

export default vessels;
