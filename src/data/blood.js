const blood = {
  id: 'blood',
  title: 'Blood',
  source: 'the blood is the lifePDF.pdf',
  description: 'Comprehensive study of blood composition, plasma proteins, hematocrit, RBC structure and lifecycle, hemoglobin, erythropoiesis, anemia, sickle-cell disease, WBC types and functions, differential count, platelets, hemostasis, clotting cascade, anticoagulants, hemophilia, ABO and Rh blood types, transfusion reactions, and disseminated intravascular clotting.',
  icon: 'blood',

  learningObjectives: [
    'Describe the composition and functions of blood (transportation, regulation, protection).',
    'Explain the components of plasma and the roles of albumins, globulins, and fibrinogen.',
    'Define hematocrit and compare normal values for males and females.',
    'Describe erythrocyte structure, hemoglobin function, and the process of erythropoiesis.',
    'Explain the negative feedback loop of erythropoietin (EPO) and RBC homeostasis.',
    'Compare and contrast the types, structures, and functions of all five WBC types.',
    'Interpret a differential WBC count and recognize abnormal findings.',
    'Describe platelet structure, thrombopoiesis, and the three stages of hemostasis.',
    'Outline the extrinsic, intrinsic, and common pathways of the coagulation cascade.',
    'Explain fibrinolysis, natural anticoagulants, and the role of vitamin K in clotting.',
    'Classify the ABO and Rh blood group systems and predict transfusion compatibility.',
    'Describe hemolytic disease of the newborn and the role of RhoGAM.',
    'Identify clinical disorders including anemia, polycythemia, sickle-cell disease, leukemia, hemophilia, and DIC.'
  ],

  clinicalCorrelations: [
    {
      title: 'Sickle-Cell Disease & Malaria Resistance',
      detail: 'SCA is caused by Hb-S, a genetic defect changing 2 amino acids in hemoglobin. At low O₂, RBCs sickle and rupture. Heterozygotes (carriers) have increased malaria resistance because sickled RBCs leak K⁺, killing the Plasmodium parasite—a classic example of heterozygote advantage.'
    },
    {
      title: 'Hemolytic Disease of the Newborn (Erythroblastosis Fetalis)',
      detail: 'Occurs when an Rh⁻ mother carries a second Rh⁺ fetus. During the first pregnancy, fetal Rh⁺ blood mixes with the mother at delivery, causing her to produce anti-Rh antibodies. In subsequent Rh⁺ pregnancies, maternal antibodies cross the placenta and attack fetal RBCs, causing severe anemia and toxic bilirubin buildup. Prevention: RhoGAM injection after first delivery binds fetal Rh antigens before the mother can mount an immune response.'
    },
    {
      title: 'Disseminated Intravascular Clotting (DIC)',
      detail: 'A life-threatening paradox where widespread clotting AND bleeding occur simultaneously. So many clotting factors are consumed by excessive clot formation that too few remain for normal hemostasis. Associated with infections, hypoxia, trauma, hypotension, and hemolysis. Clots cause ischemia and necrosis leading to multisystem organ failure.'
    },
    {
      title: 'Pernicious Anemia & Intrinsic Factor',
      detail: 'Caused by inability to absorb vitamin B₁₂ due to lack of intrinsic factor secreted by gastric parietal cells. Without B₁₂, erythropoiesis is impaired, producing large, fragile, oval-shaped RBCs (megaloblastic anemia). Treatment: B₁₂ injections bypassing the GI tract.'
    },
    {
      title: 'Blood Doping in Athletics',
      detail: 'Reinfusing previously stored RBCs before competition increases O₂ delivery but dangerously raises blood viscosity and cardiac workload. Banned by the Olympic committee. Can lead to stroke, embolism, or heart failure.'
    },
    {
      title: 'Warfarin vs Heparin',
      detail: 'Heparin acts immediately by interfering with prothrombin activator formation; used during surgery and hemodialysis. Warfarin (Coumadin) is a vitamin K antagonist that blocks hepatic synthesis of factors II, VII, IX, X; slower onset. Both are anticoagulants but by different mechanisms.'
    }
  ],

  quickFacts: [
    'Adults have 4–6 liters of blood; males average 5–6 L, females 4–5 L.',
    'Blood is ~55% plasma, ~45% formed elements (99% of which are RBCs).',
    'Normal blood pH: 7.35–7.45 (average 7.4). Temperature: ~100.4°F.',
    'Blood accounts for ~8% of total body weight.',
    'Normal hematocrit: females 38–46% (avg 42%), males 40–54% (avg 46%).',
    'RBCs live ~120 days and are produced at ~2 million per second.',
    'Each hemoglobin molecule carries 4 O₂ (one per heme group).',
    'Neutrophils are the most abundant WBC (60–70%), first responders to bacteria.',
    'Normal platelet count: 130,000–400,000/µL.',
    'Vitamin K is needed for liver to synthesize clotting factors II, VII, IX, X.',
    'Type O is the most common blood type; AB is the rarest in the U.S.',
    'Type AB = universal recipient (no plasma antibodies); Type O = universal donor (no RBC antigens).',
    'Hemophilia A (Factor VIII deficiency) accounts for ~83% of hemophilia cases.',
    'Sodium makes up ~90% of plasma cations and is the major osmolarity contributor.'
  ],

  sections: [
    // ===== SECTION 1: Blood Overview, Plasma & Hemopoiesis =====
    {
      id: 'blood-s1',
      title: 'Blood Overview, Plasma & Hemopoiesis',
      pageRange: 'Pages 1-8',
      learnItems: [
        {
          title: 'Body Fluids and Hematology',
          body: 'Cells are serviced by blood (plasma + cells) and interstitial fluid, which bathes body cells. Nutrients and oxygen diffuse from blood → interstitial fluid → cells; wastes move in the reverse direction. Hematology is the study of blood and blood disorders.'
        },
        {
          title: 'Functions of Blood',
          body: 'Transportation: carries O₂, CO₂, metabolic wastes, nutrients, heat, and hormones. Regulation: helps regulate pH via buffers, body temperature via water\'s coolant properties and vasodilation of surface vessels, and water content of cells via dissolved ions and proteins. Protection: defends against disease and prevents blood loss (hemostasis).'
        },
        {
          title: 'Basic Properties of Blood',
          body: 'Adults have about 4–6 liters of blood composed of plasma (clear extracellular fluid) and formed elements (cells and platelets). Blood is more viscous than water and flows more slowly, has a temperature of ~100.4°F, pH about 7.4 (7.35–7.45), and accounts for ~8% of body weight. Average blood volume: males 5–6 L, females 4–5 L. Hormonal negative feedback systems maintain constant blood volume and osmotic pressure. If osmolarity is too high, fluid absorption into blood causes high BP; if too low, fluid remains in tissues causing edema. One cause of edema is deficiency of plasma protein due to diet or disease.'
        },
        {
          title: 'Blood Sampling Techniques',
          body: 'Venipuncture: sample from a vein (e.g., median cubital) with a syringe; veins are preferred over arteries because they have lower pressure and are closer to the surface. Finger or heel stick: used by diabetics for daily blood sugar and commonly in infants.'
        },
        {
          title: 'Components and Hematocrit',
          body: 'Blood is ~55% plasma and ~45% cells; of the cells, ~99% are RBCs and <1% are WBCs and platelets. Hematocrit is the percentage of blood volume occupied by cells. Normal hematocrit: females 38–46% (avg 42%), males 40–54% (avg 46%), with higher male values influenced by testosterone.'
        },
        {
          title: 'Plasma and Plasma Proteins',
          body: 'Plasma: ~>90% water, ~7% proteins, and ~2% other solutes (enzymes, nutrients, wastes, hormones, electrolytes, gases). If blood clots, the remaining fluid is serum. Major plasma proteins: Albumins are the most abundant and contribute to viscosity and osmolarity, influencing blood pressure, flow, and fluid balance. Globulins (alpha, beta, gamma) are antibodies providing immune defense. Fibrinogen is the precursor of fibrin threads that form blood clots. The liver makes most plasma proteins; globulins are produced by plasma cells from B lymphocytes.'
        },
        {
          title: 'Non-protein Plasma Components',
          body: 'Nitrogenous compounds: amino acids and wastes (urea) from protein catabolism, normally removed by kidneys. Nutrients include glucose, vitamins, fats, and minerals; some O₂ and CO₂ are carried in plasma. Electrolytes, especially sodium (about 90% of plasma cations), contribute heavily to blood osmolarity.'
        },
        {
          title: 'Formed Elements Overview',
          body: 'Red blood cells (erythrocytes). White blood cells (leukocytes): Granular types include neutrophils, eosinophils, basophils. Agranular types include lymphocytes (T cells, B cells, NK cells) and monocytes. Platelets are special cell fragments important for clotting.'
        },
        {
          title: 'Hematocrit Disorders: Anemia and Polycythemia',
          body: 'Anemia: too few RBCs or too little hemoglobin. Polycythemia: too many RBCs (>65%), which can result from dehydration, tissue hypoxia, or blood doping. Blood doping involves reinfusing stored RBCs before an athletic event to increase O₂ delivery. It is dangerous because it increases blood viscosity and forces the heart to work harder; banned by the Olympic committee.'
        },
        {
          title: 'Hemopoiesis – Sites and Stem Cells',
          body: 'Most blood cells have short lifespans and need continual replacement. Embryonic yolk sac produces stem cells that colonize fetal bone marrow, liver, spleen, and thymus; liver stops producing blood cells at birth, but spleen and thymus remain involved with WBC production. Lymphoid hemopoiesis occurs in lymphoid tissues (thymus, tonsils, lymph nodes, spleen, Peyer\'s patches). Red bone marrow produces RBCs, WBCs, and platelets from hemocytoblasts (pluripotent stem cells) that can differentiate into multiple lines. Committed cells are destined for one specific cell line. In adults, active red marrow is in flat bones (sternum, ribs, skull, pelvis) and heads of femur and humerus.'
        },
        {
          title: 'Stages of Blood Cell Formation',
          body: 'Pluripotent stem cells (0.1% of red marrow cells) replenish themselves and differentiate into myeloid or lymphoid stem cells. Myeloid line: progenitor cells (colony-forming units, e.g., CFU-E for RBCs) can no longer divide and are specialized. Next generation is blast cells with recognizable histological characteristics that mature into final cell types. Lymphoid line: pre-B cells and prothymocytes leave marrow and finish development in lymphatic tissue (B & T lymphocytes).'
        },
        {
          title: 'Hemopoietic Growth Factors',
          body: 'Erythropoietin (EPO): from kidneys, increases RBC precursors. Thrombopoietin (TPO): from liver, stimulates platelet formation. Cytokines (CSFs and interleukins): local hormones in bone marrow stimulating WBC production. Recombinant forms are used clinically: EPO for end-stage kidney disease anemia, CSFs (granulocyte-macrophage CSF, granulocyte CSF) for cancer chemo patients to stimulate WBC formation, TPO to prevent platelet depletion during chemotherapy.'
        }
      ],
      keyTerms: [
        { term: 'Hematology', definition: 'The study of blood and blood disorders.' },
        { term: 'Hematocrit', definition: 'The percentage of blood volume occupied by cells; normal is ~42% for females and ~46% for males.' },
        { term: 'Plasma', definition: 'The clear extracellular fluid portion of blood, making up ~55% of blood volume.' },
        { term: 'Serum', definition: 'The fluid remaining after blood clots — plasma minus clotting factors (especially fibrinogen).' },
        { term: 'Albumin', definition: 'The most abundant plasma protein; contributes to viscosity and osmolarity, influencing blood pressure and fluid balance.' },
        { term: 'Globulins', definition: 'Plasma proteins (alpha, beta, gamma) that include antibodies providing immune defense; produced by plasma cells from B lymphocytes.' },
        { term: 'Fibrinogen', definition: 'Plasma protein that is the precursor of fibrin threads used in blood clot formation.' },
        { term: 'Hemocytoblast', definition: 'Pluripotent stem cell in red bone marrow that can differentiate into any type of blood cell.' },
        { term: 'Erythropoietin (EPO)', definition: 'Hormone produced by kidneys that stimulates RBC precursor production in bone marrow.' },
        { term: 'Thrombopoietin (TPO)', definition: 'Hormone from the liver that stimulates platelet (megakaryocyte) formation.' },
        { term: 'Colony-Stimulating Factors (CSFs)', definition: 'Cytokines in bone marrow that stimulate WBC production; used clinically in chemotherapy patients.' },
        { term: 'Polycythemia', definition: 'Condition of too many RBCs (over ~65%), increasing blood viscosity and cardiac workload.' }
      ],
      memoryAids: [
        'Blood is TRP: Transport, Regulate, Protect — the three main functions.',
        'Hematocrit: "He-MAT-ocrit" — Males Are Typically higher (46% vs 42%) because of testosterone.',
        'Plasma proteins ABC: Albumins (most Abundant), B-globulins (Build immunity), Clotting fibrinogen.',
        'EPO = kidneys, TPO = liver, CSFs = bone marrow — Each growth factor has its own home organ.',
        '55/45 split: plasma vs formed elements. Of cells, 99% are RBCs.'
      ],
      inlineQuestions: [
        {
          question: 'Which two body fluids directly service cells?',
          options: { A: 'Blood and lymph', B: 'Plasma and bile', C: 'Blood and interstitial fluid', D: 'CSF and interstitial fluid' },
          answer: 'C',
          explanation: 'Cells are serviced by blood (carrying nutrients and oxygen) and interstitial fluid (which bathes the cells directly).'
        },
        {
          question: 'The hematocrit represents:',
          options: { A: 'Concentration of plasma proteins', B: 'Percentage of blood volume occupied by cells', C: 'Total blood volume', D: 'White blood cell count' },
          answer: 'B',
          explanation: 'Hematocrit is the percentage of total blood volume that is occupied by cells (primarily RBCs).'
        },
        {
          question: 'Erythropoietin (EPO) is primarily produced by the:',
          options: { A: 'Liver', B: 'Thymus', C: 'Kidneys', D: 'Spleen' },
          answer: 'C',
          explanation: 'EPO is produced by the kidneys in response to low oxygen levels and stimulates RBC production in bone marrow.'
        }
      ],
      quiz: [
        { id: 'b1-q1', question: 'Which is NOT a listed function of blood?', options: { A: 'Transport of gases and nutrients', B: 'Production of digestive enzymes', C: 'Regulation of pH and temperature', D: 'Protection from disease' }, answer: 'B', explanation: 'Blood transports, regulates, and protects, but does not produce digestive enzymes.' },
        { id: 'b1-q2', question: 'Approximately what percentage of total body weight does blood represent?', options: { A: '2%', B: '15%', C: '8%', D: '25%' }, answer: 'C', explanation: 'Blood accounts for approximately 8% of total body weight.' },
        { id: 'b1-q3', question: 'Normal blood pH is closest to:', options: { A: '6.8', B: '7.4', C: '7.0', D: '8.0' }, answer: 'B', explanation: 'Normal blood pH is about 7.4, ranging from 7.35 to 7.45.' },
        { id: 'b1-q4', question: 'Albumins in plasma primarily:', options: { A: 'Provide immune defenses', B: 'Help form blood clots', C: 'Transport nitrogenous wastes', D: 'Contribute to viscosity and osmolarity, affecting BP and fluid balance' }, answer: 'D', explanation: 'Albumins are the most abundant plasma protein and their primary role is maintaining osmotic pressure and blood viscosity.' },
        { id: 'b1-q5', question: 'Which of the following is NOT a formed element of blood?', options: { A: 'Albumin', B: 'Erythrocyte', C: 'Leukocyte', D: 'Platelet' }, answer: 'A', explanation: 'Albumin is a plasma protein, not a formed element. Formed elements include RBCs, WBCs, and platelets.' },
        { id: 'b1-q6', question: 'Blood doping is dangerous mainly because it:', options: { A: 'Decreases blood viscosity', B: 'Eliminates plasma proteins', C: 'Increases blood viscosity and cardiac workload', D: 'Causes immediate anemia' }, answer: 'C', explanation: 'Blood doping increases RBC count, raising viscosity and forcing the heart to work much harder.' },
        { id: 'b1-q7', question: 'Hemocytoblasts are described as:', options: { A: 'Fully differentiated RBCs', B: 'Platelet fragments', C: 'Cells that only make WBCs', D: 'Pluripotent stem cells that can form multiple cell lines' }, answer: 'D', explanation: 'Hemocytoblasts are pluripotent stem cells in red bone marrow capable of differentiating into all blood cell types.' },
        { id: 'b1-q8', question: 'A deficiency of plasma proteins can directly lead to:', options: { A: 'Hypertension from high osmolarity', B: 'Edema due to low osmolarity and fluid staying in tissues', C: 'Higher RBC production', D: 'Increased blood pH' }, answer: 'B', explanation: 'Low plasma protein reduces oncotic pull, allowing fluid to remain in tissues and causing edema.' },
        { id: 'b1-q9', question: 'Which ion is the major cation in plasma, contributing most to blood osmolarity?', options: { A: 'Potassium', B: 'Calcium', C: 'Sodium', D: 'Magnesium' }, answer: 'C', explanation: 'Sodium makes up about 90% of plasma cations and accounts for more of blood osmolarity than any other solute.' },
        { id: 'b1-q10', question: 'In adults, red bone marrow producing blood cells is found mainly in:', options: { A: 'Long bone shafts only', B: 'Flat bones and heads of femur and humerus', C: 'All bones equally', D: 'Only the skull' }, answer: 'B', explanation: 'Active red marrow in adults is in flat bones (sternum, ribs, skull, pelvis) and heads of femur and humerus.' }
      ],
      flashcards: [
        { front: 'What are the three main functions of blood?', back: 'Transportation (O₂, CO₂, nutrients, hormones), Regulation (pH, temperature, water content), and Protection (disease defense, hemostasis).' },
        { front: 'What is hematocrit?', back: 'The percentage of blood volume occupied by cells. Normal: ~42% females, ~46% males.' },
        { front: 'What are the three major plasma proteins?', back: 'Albumins (most abundant, osmotic pressure), Globulins (immune defense), Fibrinogen (clot formation).' },
        { front: 'What is the difference between plasma and serum?', back: 'Serum is the fluid remaining after blood clots — it is plasma minus clotting factors (especially fibrinogen).' },
        { front: 'What are hemocytoblasts?', back: 'Pluripotent stem cells in red bone marrow that can differentiate into all blood cell types (RBCs, WBCs, platelets).' },
        { front: 'Where is active red bone marrow found in adults?', back: 'In flat bones (sternum, ribs, skull, pelvis) and heads of femur and humerus.' },
        { front: 'What does erythropoietin (EPO) do and where is it made?', back: 'Made by the kidneys; stimulates RBC precursor production in bone marrow.' },
        { front: 'What is polycythemia?', back: 'Too many RBCs (>65%), causing increased blood viscosity and cardiac workload. Can result from dehydration, hypoxia, or blood doping.' },
        { front: 'Why are veins preferred for blood sampling?', back: 'Veins have lower pressure and are closer to the surface than arteries.' },
        { front: 'What are the stages of blood cell formation?', back: 'Pluripotent stem cells → myeloid or lymphoid stem cells → progenitor cells (colony-forming units) → blast cells → mature cell types.' }
      ]
    },

    // ===== SECTION 2: RBCs, Hemoglobin & Anemia =====
    {
      id: 'blood-s2',
      title: 'RBCs, Hemoglobin & Anemia',
      pageRange: 'Pages 9-16',
      learnItems: [
        {
          title: 'RBC Structure and Function',
          body: 'New RBCs enter circulation at about 2 million per second. Erythrocytes are biconcave discs (~7.5 μm wide, 2 μm thick at rim) with no organelles, maximizing surface area/volume for gas exchange. Main function is gas transport: about 33% of cytoplasm is hemoglobin, carrying O₂ to tissues and CO₂ back to lungs. RBCs contain carbonic anhydrase, which forms carbonic acid from CO₂ and water, important in gas transport and pH balance.'
        },
        {
          title: 'Erythropoiesis – Steps',
          body: 'Erythropoiesis produces ~2.5 million RBCs/second from hemocytoblasts in bone marrow. First committed cell is the proerythroblast, which has receptors for EPO. Erythroblasts multiply and synthesize hemoglobin, then become normoblasts that discard their nucleus to form reticulocytes. Reticulocytes (with a network of ER) enter blood as 0.5–1.5% of RBCs; full development takes 3–5 days with cell size reduction, increased cell number, Hb synthesis, and nucleus loss. Blood loss speeds up the process, increasing reticulocyte count.'
        },
        {
          title: 'Reticulocyte Count and Bone Marrow Status',
          body: 'Normal reticulocyte count: 0.5–1.5% of circulating RBCs. Low reticulocyte count in anemia suggests bone marrow problems (e.g., leukemia, nutritional deficit, or lack of EPO response). High reticulocyte count may indicate recent blood loss or effective iron therapy.'
        },
        {
          title: 'Erythrocyte Homeostasis (Feedback)',
          body: 'Drop in RBC count → hypoxemia in kidneys → increased EPO → stimulated bone marrow → RBC count rises in 3–4 days (negative feedback). Stimuli for erythropoiesis: low atmospheric O₂, increased exercise, and hemorrhage.'
        },
        {
          title: 'RBC Life Cycle and Removal',
          body: 'RBC lifespan is about 120 days; they wear out from bending through capillaries and cannot repair due to lack of organelles. Old RBCs are removed by fixed macrophages in spleen and liver; breakdown products are recycled.'
        },
        {
          title: 'Nutritional Requirements for RBC Production',
          body: 'Iron is a key requirement; daily losses through urine, feces, and bleeding are ~0.9 mg in men and 1.7 mg in women, requiring 5–20 mg/day intake. Dietary iron: ferric (Fe³⁺) and ferrous (Fe²⁺); stomach acid converts Fe³⁺ to absorbable Fe²⁺. Gastroferritin from stomach binds Fe²⁺ and transports it to intestine; iron then binds transferrin in blood and goes to bone marrow (for Hb), muscle (for myoglobin), and all cells (for cytochromes). Liver stores excess iron as ferritin (iron bound to apoferritin). B₁₂ and folic acid are needed for rapid cell division; vitamin C and copper are cofactors for enzymes synthesizing RBCs.'
        },
        {
          title: 'Hemoglobin Structure and Transport Roles',
          body: 'Hemoglobin has four globin chains (2 alpha, 2 beta); each chain has a heme group binding one O₂ to Fe²⁺, so each Hb can carry four O₂. Fetal hemoglobin uses gamma instead of beta chains. Hemoglobin carries about 23% of CO₂ (bound to amino acids in globin portion) and can transport nitric oxide (NO) and super nitric oxide (SNO), helping regulate blood pressure via vasodilation. NO is released in lungs during CO₂ release and in tissues during O₂ release.'
        },
        {
          title: 'Hemoglobin and Iron Recycling',
          body: 'In macrophages of liver or spleen: globin is broken down into amino acids and recycled; heme splits into Fe³⁺ and biliverdin (green pigment). Iron binds transferrin in blood, is stored as ferritin/hemosiderin in liver, muscle, and spleen, or used in bone marrow. Biliverdin is converted to bilirubin (yellow); liver secretes bilirubin into bile. Intestinal bacteria convert it to urobilinogen then stercobilin (brown pigment of feces). Some urobilinogen reabsorbed from intestines into blood becomes urobilin (yellow pigment excreted in urine).'
        },
        {
          title: 'RBC Counts and Hemoglobin Concentration',
          body: 'RBC count and hemoglobin concentration indicate oxygen-carrying capacity. Hematocrit: men 42–52%, women 37–48%. Hemoglobin: men 13–18 g/dL, women 12–16 g/dL. RBC count: men 4.6–6.2 million/µL, women 4.2–5.4 million/µL. Values are lower in women because androgens stimulate RBC production and women have periodic menstrual losses.'
        },
        {
          title: 'Polycythemia – Excess RBCs',
          body: 'Primary polycythemia: cancer of erythropoietic cell line; RBC count up to 11 million/µL, hematocrit ~80%. Secondary polycythemia: from dehydration, emphysema, high altitude, or conditioning; RBC count up to 8 million/µL. Dangers: increased blood volume, pressure, and viscosity leading to embolism, stroke, or heart failure.'
        },
        {
          title: 'Anemia – Causes and Effects',
          body: 'Anemia: deficiency of RBCs or hemoglobin. Causes: inadequate erythropoiesis (B₁₂ deficiency → pernicious anemia due to lack of intrinsic factor from stomach, iron-deficiency, kidney failure with low EPO, aplastic anemia from complete marrow failure with unknown cause), hemorrhagic anemia from blood loss, hemolytic anemia from RBC destruction, thalassemia (hereditary deficiency of hemoglobin). Effects: tissue hypoxia and necrosis (shortness of breath, lethargy), low blood osmolarity causing tissue edema, low viscosity causing tachycardia and low BP.'
        },
        {
          title: 'Sickle-Cell Anemia (SCA)',
          body: 'SCA is a genetic defect in Hb (Hb-S) where two amino acids are changed. At very low O₂ levels, RBCs are deformed by changes in hemoglobin molecule, becoming sickle-shaped; these cells rupture easily causing anemia and clots. Common in populations from the "malaria belt" (Mediterranean Europe, sub-Saharan Africa, Asia). Hb-S gene persists because heterozygotes have increased resistance to malaria: RBC membranes leak K⁺ and lowered K⁺ levels kill the Plasmodium parasite infecting the red blood cells (heterozygote advantage).'
        }
      ],
      keyTerms: [
        { term: 'Erythrocyte', definition: 'Red blood cell; a biconcave disc without organelles that carries hemoglobin for gas transport.' },
        { term: 'Hemoglobin', definition: 'Oxygen-carrying protein in RBCs with 4 globin chains (2 alpha, 2 beta), each with a heme group that binds one O₂ to Fe²⁺.' },
        { term: 'Carbonic Anhydrase', definition: 'Enzyme in RBCs that converts CO₂ + H₂O to carbonic acid; important for gas transport and pH balance.' },
        { term: 'Erythropoiesis', definition: 'The process of RBC production from hemocytoblasts in bone marrow.' },
        { term: 'Reticulocyte', definition: 'Immature RBC with residual ER network; normally 0.5–1.5% of circulating RBCs.' },
        { term: 'Proerythroblast', definition: 'First committed cell in the RBC lineage with receptors for EPO.' },
        { term: 'Transferrin', definition: 'Blood protein that transports iron from the intestines to bone marrow and other tissues.' },
        { term: 'Ferritin', definition: 'Iron storage protein in the liver; formed when iron binds to apoferritin.' },
        { term: 'Bilirubin', definition: 'Yellow pigment derived from heme breakdown; secreted by liver into bile.' },
        { term: 'Biliverdin', definition: 'Green pigment that is the first breakdown product of heme; converted to bilirubin.' },
        { term: 'Sickle-Cell Anemia', definition: 'Genetic defect producing Hb-S; causes RBCs to sickle at low O₂, leading to anemia and clotting.' },
        { term: 'Pernicious Anemia', definition: 'Anemia caused by inability to absorb vitamin B₁₂ due to lack of intrinsic factor from the stomach.' }
      ],
      memoryAids: [
        'RBC lifespan: "120 days to play" — after that, the spleen and liver macrophages take them away.',
        'Hemoglobin carries 4 O₂: "4 globin chains, 4 heme groups, 4 oxygen molecules" — everything comes in fours.',
        'Iron recycling path: "Heme → Biliverdin (green) → Bilirubin (yellow) → Bile → Stercobilin (brown feces)" — the colors tell the story.',
        'Reticulocyte count is a "bone marrow report card" — low = marrow is failing, high = marrow is working hard.',
        'Iron absorption: stomach acid converts Fe³⁺ → Fe²⁺ (the "+2 is absorbed too").'
      ],
      inlineQuestions: [
        {
          question: 'The primary function of erythrocytes is to:',
          options: { A: 'Defend against pathogens', B: 'Transport O₂ and CO₂', C: 'Produce antibodies', D: 'Form blood clots' },
          answer: 'B',
          explanation: 'Erythrocytes carry hemoglobin which transports oxygen to tissues and carbon dioxide back to the lungs.'
        },
        {
          question: 'Hemoglobin can carry how many O₂ molecules per molecule?',
          options: { A: 'One', B: 'Two', C: 'Four', D: 'Six' },
          answer: 'C',
          explanation: 'Each hemoglobin molecule has 4 globin chains, each with a heme group that binds one O₂, for a total of 4 O₂.'
        },
        {
          question: 'Average lifespan of an RBC is about:',
          options: { A: '30 days', B: '60 days', C: '120 days', D: '1 year' },
          answer: 'C',
          explanation: 'RBCs live about 120 days before being removed by macrophages in the spleen and liver.'
        }
      ],
      quiz: [
        { id: 'b2-q1', question: 'The first committed cell in the RBC lineage that responds to EPO is the:', options: { A: 'Hemocytoblast', B: 'Reticulocyte', C: 'Proerythroblast', D: 'Normoblast' }, answer: 'C', explanation: 'The proerythroblast is the first committed cell in erythropoiesis and has receptors for EPO.' },
        { id: 'b2-q2', question: 'A low reticulocyte count in an anemic patient suggests:', options: { A: 'Recent blood loss', B: 'Bone marrow failure or insufficient EPO response', C: 'Excessive EPO production', D: 'Iron overload' }, answer: 'B', explanation: 'Low reticulocytes in anemia indicate the bone marrow is not producing enough new RBCs.' },
        { id: 'b2-q3', question: 'The stimulus that directly triggers increased EPO release from kidneys is:', options: { A: 'High RBC count', B: 'Elevated blood glucose', C: 'Hypoxemia (low O₂) in the kidneys', D: 'High atmospheric O₂' }, answer: 'C', explanation: 'When oxygen levels drop in the kidneys, they release EPO to stimulate more RBC production.' },
        { id: 'b2-q4', question: 'Which form of dietary iron is absorbable in the intestine?', options: { A: 'Ferric (Fe³⁺)', B: 'Ferritin', C: 'Hemosiderin', D: 'Ferrous (Fe²⁺)' }, answer: 'D', explanation: 'Stomach acid converts Fe³⁺ to Fe²⁺ (ferrous), which is the absorbable form.' },
        { id: 'b2-q5', question: 'Bilirubin is derived from:', options: { A: 'Globin breakdown', B: 'Biliverdin from heme breakdown', C: 'Ferritin', D: 'Transferrin' }, answer: 'B', explanation: 'When heme is broken down, it first becomes biliverdin, which is then converted to bilirubin.' },
        { id: 'b2-q6', question: 'Pernicious anemia is most directly related to:', options: { A: 'Excess vitamin B₁₂', B: 'High folic acid', C: 'Lack of intrinsic factor leading to B₁₂ deficiency', D: 'Low vitamin C' }, answer: 'C', explanation: 'Pernicious anemia results from inability to absorb B₁₂ due to lack of intrinsic factor.' },
        { id: 'b2-q7', question: 'Sickle-cell anemia results from:', options: { A: 'Iron deficiency', B: 'Lack of vitamin K', C: 'Excess hemoglobin production', D: 'A genetic defect creating Hb-S with altered amino acids' }, answer: 'D', explanation: 'SCA is caused by a genetic mutation producing Hb-S, where two amino acids are changed.' },
        { id: 'b2-q8', question: 'Which enzyme in RBCs converts CO₂ and water to carbonic acid?', options: { A: 'Carbonic anhydrase', B: 'Hemoglobinase', C: 'Catalase', D: 'Amylase' }, answer: 'A', explanation: 'Carbonic anhydrase in RBCs converts CO₂ + H₂O to carbonic acid, important for CO₂ transport and pH balance.' },
        { id: 'b2-q9', question: 'Why are hemoglobin values lower in women than men?', options: { A: 'Women have larger blood volume', B: 'Androgens stimulate RBC production and women have menstrual losses', C: 'Women have higher EPO levels', D: 'Women lack transferrin' }, answer: 'B', explanation: 'Androgens stimulate RBC production, and women have periodic menstrual blood losses.' },
        { id: 'b2-q10', question: 'The brown color of feces is due to:', options: { A: 'Biliverdin', B: 'Urobilin', C: 'Stercobilin from bilirubin metabolism', D: 'Transferrin' }, answer: 'C', explanation: 'Intestinal bacteria convert bilirubin to urobilinogen, then to stercobilin, which gives feces its brown color.' }
      ],
      flashcards: [
        { front: 'How many new RBCs enter circulation per second?', back: 'About 2 million per second.' },
        { front: 'What shape are erythrocytes and why?', back: 'Biconcave discs (~7.5 μm wide) — this shape maximizes surface area/volume ratio for efficient gas exchange.' },
        { front: 'What is the normal reticulocyte count?', back: '0.5–1.5% of circulating RBCs. Low suggests marrow failure; high suggests active replacement.' },
        { front: 'How long does full RBC development take?', back: '3–5 days from proerythroblast to reticulocyte entering the blood.' },
        { front: 'What is the RBC lifespan and where are old ones removed?', back: '~120 days. Removed by fixed macrophages in the spleen and liver.' },
        { front: 'What role does transferrin play?', back: 'It transports iron in the blood to bone marrow (for Hb), muscle (for myoglobin), and all cells (for cytochromes).' },
        { front: 'How many O₂ can one hemoglobin molecule carry?', back: 'Four — one O₂ per heme group, with 4 heme groups per hemoglobin.' },
        { front: 'What is the pathway of bilirubin excretion?', back: 'Heme → biliverdin (green) → bilirubin (yellow) → bile → intestinal bacteria convert to urobilinogen → stercobilin (brown feces). Some urobilinogen reabsorbed → urobilin (yellow urine).' },
        { front: 'What causes sickle-cell anemia?', back: 'A genetic defect producing Hb-S with two changed amino acids. At low O₂, RBCs sickle, rupture easily, and form clots.' },
        { front: 'Why does the Hb-S gene persist in malaria regions?', back: 'Heterozygotes have increased resistance to malaria — sickled RBCs leak K⁺, killing the malaria parasite (heterozygote advantage).' },
        { front: 'What are the normal hemoglobin and RBC count ranges?', back: 'Hb: men 13–18 g/dL, women 12–16 g/dL. RBC: men 4.6–6.2 million/µL, women 4.2–5.4 million/µL.' }
      ]
    },

    // ===== SECTION 3: WBCs, Platelets, Hemostasis, Clotting & Blood Types =====
    {
      id: 'blood-s3',
      title: 'WBCs, Clotting & Blood Types',
      pageRange: 'Pages 17-32',
      learnItems: [
        {
          title: 'WBC Types and Basic Features',
          body: 'Leukocytes (WBCs) have nuclei and no hemoglobin. They are classified as granulocytes (neutrophils, eosinophils, basophils) or agranulocytes (monocytes, lymphocytes) based on presence of visible cytoplasmic granules.'
        },
        {
          title: 'Leukopoiesis and Lifespan',
          body: 'Committed progenitors have receptors for colony-stimulating factors released by mature WBCs in response to infection. Red bone marrow stores and releases granulocytes and monocytes; some lymphocytes leave unfinished and complete development in thymus (T cells). Granulocytes leave blood after ~8 hours and live about 5 more days; monocytes leave in ~20 hours and become macrophages that can live for years; some lymphocytes provide immunity for decades.'
        },
        {
          title: 'Neutrophils – Structure and Function',
          body: 'Also called polymorphonuclear leukocytes (polys); nuclei have 2–5 lobes connected by thin strands (older cells have more lobes). Young neutrophils are "band cells" with horseshoe-shaped nuclei. Fine, pale lilac granules; 10–12 μm diameter; 60–70% of circulating WBCs. Function: fastest response to bacteria. Direct actions: release lysozymes which destroy/digest bacteria, release defensin proteins that act like antibiotics and poke holes in bacterial cell walls, release strong oxidants (bleach-like chemicals) that destroy bacteria. Increased in bacterial infections.'
        },
        {
          title: 'Eosinophils – Structure and Function',
          body: 'Nucleus with 2 or 3 lobes connected by thin strand. Large, uniform-sized granules stain orange-red with acidic dyes (do not obscure nucleus). Diameter 10–12 μm; 2–4% of circulating WBCs. Function: leave capillaries to enter tissue fluid, release histaminase (slows inflammation caused by basophils), attack parasitic worms, phagocytize antibody-antigen complexes. Increased in parasitic infections and allergies.'
        },
        {
          title: 'Basophils – Structure and Function',
          body: 'Large, dark purple, variable-sized granules stain with basic dyes (obscure the nucleus). Irregular, S-shaped, bilobed nuclei; 8–10 μm diameter; <1% of circulating WBCs. Function: involved in inflammatory and allergy reactions. Leave capillaries and enter connective tissue as mast cells. Release heparin, histamine, and serotonin which heighten the inflammatory response and account for hypersensitivity (allergic) reactions. Increased in chicken pox, diabetes, autoimmune disorders, and allergies.'
        },
        {
          title: 'Lymphocytes – Structure and Function',
          body: 'Dark, oval to round nucleus; cytoplasm sky blue in color varying from a rim to normal amount. Small cells 6–9 μm, large cells 10–14 μm (increase in viral infections); 20–25% of circulating WBCs. B cells: destroy bacteria and toxins, turn into plasma cells that produce antibodies, provide immunological memory. T cells: attack viruses, fungi, transplanted organs, cancer cells, and some bacteria; present antigens to other immune cells. Natural killer (NK) cells: attack many different microbes and some tumor cells, destroy foreign invaders by direct attack. Increased in diverse infections and immune responses.'
        },
        {
          title: 'Monocytes – Structure and Function',
          body: 'Kidney or horseshoe-shaped nucleus; largest WBC in circulating blood; 12–20 μm diameter; foamy blue-gray cytoplasm; 3–8% of circulating WBCs. Do not remain in blood long before migrating to tissues; differentiate into macrophages. Fixed macrophages in specific tissues: alveolar macrophages in lungs, Kupffer cells in liver. Wandering macrophages gather at sites of infection. Function: take longer to reach infection sites but arrive in larger numbers; destroy microbes and clean up dead tissue. Increased in viral infections and inflammation.'
        },
        {
          title: 'Emigration and Phagocytosis',
          body: 'WBCs roll along endothelium, stick to it, and squeeze between cells. Adhesion molecules (selectins) on endothelium near injury sites help WBCs stick. Integrins on neutrophils assist movement through vessel wall. Neutrophils and macrophages phagocytize bacteria and debris via chemotaxis — attracted by kinins from injury site and bacterial toxins.'
        },
        {
          title: 'Differential WBC Count',
          body: 'Detection of changes in numbers and percentages of circulating WBCs indicates infection, poisoning, leukemia, chemotherapy effects, parasites, or allergy. Normal values: neutrophils 60–70% (up in bacterial infection), lymphocytes 20–25% (up in viral infection), monocytes 3–8% (up in fungal/viral infection), eosinophils 2–4% (up in parasites or allergies), basophils <1% (up in allergies or hypothyroid).'
        },
        {
          title: 'Leukocyte Disorders',
          body: 'Leukopenia: low WBC count (<5,000/µL); caused by radiation, poisons, infectious disease; risk of elevated infections. Leukocytosis: high WBC count (>10,000/µL); caused by infection, allergy, and disease. Leukemia: cancer of hemopoietic tissue (myeloid or lymphoid). Acute leukemia: uncontrolled production of immature WBCs that crowd out normal marrow cells, preventing RBC and platelet production. Chronic leukemia: accumulation of mature WBCs that do not die. Effects: disrupted normal cell percentages, susceptibility to opportunistic infection, anemia, and impaired clotting.'
        },
        {
          title: 'Bone Marrow Transplant',
          body: 'Intravenous transfer of healthy bone marrow. Procedure: destroy sick marrow with radiation and chemotherapy, donor matching via WBC surface antigens (histocompatibility), inject donor marrow into patient\'s vein for reseeding. Success depends on donor-recipient histocompatibility. Treatment for leukemia, sickle-cell disease, breast/ovarian/testicular cancer, lymphoma, and aplastic anemia.'
        },
        {
          title: 'Platelet Anatomy and Production',
          body: 'Platelets (thrombocytes): disc-shaped, 2–4 μm cell fragments with no nucleus. Normal count: 130,000–400,000/µL. Pseudopods provide amoeboid movement and phagocytosis. Thrombopoiesis: hemocytoblast develops receptors for thrombopoietin (from liver/kidney) → megakaryoblast → megakaryocyte (100 μm, remains in marrow, replicates DNA without dividing) → infoldings split off platelets that enter bloodstream (live 10 days). Some stored in spleen released as needed.'
        },
        {
          title: 'Platelet Functions',
          body: 'Secrete clotting factors, growth factors for endothelial repair, and vasoconstrictors in broken vessels. Form temporary platelet plugs. Dissolve old blood clots. Phagocytize bacteria. Attract WBCs to sites of inflammation. Alpha granules contain clotting factors and platelet-derived growth factor (PDGF) causing proliferation of vascular endothelial cells, smooth muscle, and fibroblasts for vessel repair. Dense granules contain ADP, ATP, Ca²⁺, serotonin, fibrin-stabilizing factor, and enzymes producing thromboxane A₂.'
        },
        {
          title: 'Hemostasis – Three Mechanisms',
          body: 'Stopping bleeding in a quick, localized manner when blood vessels are damaged. Three mechanisms: 1) Vascular spasm — prompt constriction of broken vessel triggered by pain receptors (lasts minutes), smooth muscle injury (longer-lasting), and platelet-released serotonin; provides time for other mechanisms. 2) Platelet plug formation. 3) Blood clotting (coagulation).'
        },
        {
          title: 'Platelet Plug Formation – Three Steps',
          body: 'Normal endothelium is smooth and coated with prostacyclin (platelet repellent); broken vessel exposes rough collagen. Step 1 — Platelet adhesion: platelets stick to exposed collagen. Step 2 — Platelet release reaction: adhesion-activated platelets extend projections, release thromboxane A₂ and ADP (activating other platelets); serotonin and thromboxane A₂ are vasoconstrictors decreasing blood flow. Step 3 — Platelet aggregation: activated platelets stick together forming a platelet plug, reinforced by fibrin threads. Positive feedback cycle active until break is sealed.'
        },
        {
          title: 'Coagulation – The Clotting Cascade',
          body: 'Blood clotting forms a gel of insoluble fibrin fibers trapping cells. Clotting in an unbroken vessel is called thrombosis. Required: Ca²⁺, liver-made enzymes, and substances from platelets/damaged tissues. A cascade of reactions where each factor activates the next: prothrombinase + Ca²⁺ converts prothrombin → thrombin; thrombin converts fibrinogen → insoluble fibrin threads. Procoagulants (clotting factors) circulate in inactive form, mostly made by the liver.'
        },
        {
          title: 'Extrinsic and Intrinsic Pathways',
          body: 'Extrinsic pathway (seconds): damaged tissues release tissue factor (thromboplastin, Factor III) activating Factor VII; in presence of Ca²⁺, Factor X combines with V to form prothrombinase. Intrinsic pathway (minutes): damaged endothelium and platelet contact with collagen activates Factor XII; damaged platelets release phospholipids; requires Ca²⁺ and Factors XII, X, V. Both pathways normally occur together.'
        },
        {
          title: 'Final Common Pathway and Thrombin',
          body: 'Prothrombinase + Ca²⁺ converts prothrombin to thrombin. Thrombin converts soluble fibrinogen to insoluble fibrin threads and activates Factor XIII (fibrin-stabilizing factor). Thrombin has positive feedback effects: accelerates prothrombinase formation and activates platelets to release phospholipids. Enzyme amplification means each activated factor activates many molecules in the next step, producing rapid clotting.'
        },
        {
          title: 'Vitamin K and Clotting',
          body: 'Normal clotting requires adequate vitamin K, a fat-soluble vitamin absorbed with dietary lipids; absorption reduced if bile release is insufficient. Required for liver synthesis of clotting Factors II (prothrombin), VII, IX, and X. Also produced by bacteria in the large intestine.'
        },
        {
          title: 'Clot Retraction, Repair, and Fibrinolysis',
          body: 'Clot retraction in ~30 minutes: trapped platelets release Factor XIII stabilizing fibrin; platelet pseudopods contract pulling fibrin threads, condensing clot and drawing wound edges together. Platelet-derived growth factor (PDGF) stimulates fibroblast and smooth muscle proliferation for vessel repair. Fibrinolysis: Factor XII accelerates kallikrein formation; kallikrein converts plasminogen → plasmin (fibrin-dissolving enzyme/"clot buster"). Positive feedback: plasmin promotes more kallikrein formation. The fibrinolytic system removes small inappropriate clots and resolves completed repairs.'
        },
        {
          title: 'Hemostatic Control and Natural Anticoagulants',
          body: 'Clot remains localized because: fibrin absorbs thrombin, rapid blood flow dilutes clotting factors, endothelial cells and WBCs produce prostacyclin opposing thromboxane A₂. Natural anticoagulants: antithrombin (from liver) deactivates thrombin before it acts on fibrinogen; heparin (from basophils and mast cells) interferes with prothrombin activator formation.'
        },
        {
          title: 'Intravascular Clotting and Aspirin',
          body: 'Thrombosis: clot (thrombus) in an unbroken vessel; forms on rough endothelium or with slow blood flow (stasis) allowing local clotting factor buildup. May dissolve spontaneously or dislodge and travel. Embolus: a clot, air bubble, or fat droplet traveling in blood; pulmonary emboli lodge in lungs. Low-dose aspirin blocks thromboxane A₂ synthesis, reducing inappropriate clot formation and risk of strokes, TIAs, and MIs.'
        },
        {
          title: 'Anticoagulant and Thrombolytic Drugs',
          body: 'Heparin: given during hemodialysis and surgery (immediate effect). Warfarin (Coumadin): vitamin K antagonist blocking synthesis of clotting factors; slower onset than heparin. Stored banked blood treated with CPD (citrate phosphate dextrose) which removes Ca²⁺ to prevent clotting. Thrombolytic agents: streptokinase and tissue plasminogen activator (t-PA) directly or indirectly activate plasminogen to dissolve clots.'
        },
        {
          title: 'Hemophilia',
          body: 'Genetic lack of clotting factors affecting coagulation; often sex-linked recessive in males (inherited from mother). Hemophilia A: missing Factor VIII (~83% of cases). Hemophilia B: missing Factor IX (~15%). Hemophilia C: missing Factor XI (autosomal, less severe because alternate clotting activator exists). Physical exertion causes prolonged bleeding and severe pain. Treatment: plasma or purified clotting factor transfusions; Factor VIII now produced by transgenic bacteria.'
        },
        {
          title: 'ABO Blood Group System',
          body: 'Blood type determined by presence/absence of agglutinogens (antigens A and B) on RBCs: Type A has A antigens, Type B has B antigens, Type AB has both, Type O has neither. Type O is most common; AB is rarest. Antibodies (agglutinins) anti-A and/or anti-B appear 2–8 months after birth, reaching maximum at age 10. You do not have antibodies that would react against your own antigens. Each antibody can attach to several antigens simultaneously causing agglutination (clumping). At least 26 different blood group systems exist (ABO, Rh, Kell, Lewis, Kidd, Duffy, etc.).'
        },
        {
          title: 'Rh Blood Group System',
          body: 'Rh (D) agglutinogens discovered in rhesus monkeys (1940). Rh⁺ if D agglutinogens present on RBCs; frequencies vary among ethnic groups. Anti-D agglutinins are NOT normally present — they form only when an Rh⁻ individual is exposed to Rh⁺ blood (via transfusion or pregnancy). No problems with first exposure; subsequent exposures cause hemolytic reactions.'
        },
        {
          title: 'Hemolytic Disease of the Newborn',
          body: 'Rh⁻ mother carrying Rh⁺ fetus: mixing of blood occurs at birth. Mother creates Rh antibodies unless she receives RhoGAM soon after first delivery, miscarriage, or abortion. RhoGAM binds fetal agglutinogens in her blood, removing them before she mounts an immune response. In subsequent Rh⁺ pregnancies without RhoGAM, maternal antibodies cross placenta and attack fetal blood, causing severe anemia and toxic brain syndrome from excessive bilirubin. Treatment: phototherapy to degrade bilirubin or exchange transfusion to completely replace infant\'s blood.'
        },
        {
          title: 'Transfusion Reactions and Universal Types',
          body: 'Incompatible transfusions: antigen-antibody complexes cause agglutination of donated RBCs; agglutinated cells block blood vessels, rupture (hemolyze), and release free hemoglobin that can block kidney tubules and cause death. Problems arise from incompatibility between donor\'s cells and recipient\'s plasma; donor plasma is too diluted to cause problems. Type AB is "universal recipient" (lacks anti-A and anti-B antibodies); Type O is "universal donor" (lacks A and B antigens on cells). Caution: always cross-match for other antigens; give packed cells with minimum plasma to avoid donor antibody issues.'
        },
        {
          title: 'Disseminated Intravascular Clotting (DIC)',
          body: 'Life-threatening paradox: widespread blood clotting AND bleeding occur simultaneously throughout the body. So many clotting factors consumed by excessive clotting that too few remain for normal hemostasis. Associated with infections, hypoxia, low blood flow rates, trauma, hypotension, and hemolysis. Clots cause ischemia and necrosis leading to multisystem organ failure.'
        }
      ],
      keyTerms: [
        { term: 'Neutrophil', definition: 'Most abundant WBC (60–70%); polymorphonuclear with 2–5 lobes; fastest responder to bacteria; releases lysozymes, defensins, and strong oxidants.' },
        { term: 'Eosinophil', definition: 'Granulocyte (2–4%); orange-red granules; releases histaminase, attacks parasitic worms, phagocytizes antibody-antigen complexes; increased in parasites and allergies.' },
        { term: 'Basophil', definition: 'Rarest granulocyte (<1%); releases heparin, histamine, and serotonin; becomes mast cells in connective tissue; involved in inflammation and allergic reactions.' },
        { term: 'Lymphocyte', definition: 'Agranulocyte (20–25%); includes B cells (antibody production), T cells (cell-mediated immunity), and NK cells (direct attack on microbes and tumor cells).' },
        { term: 'Monocyte', definition: 'Largest WBC (3–8%); differentiates into macrophages in tissues (alveolar macrophages, Kupffer cells); cleans up debris and dead tissue.' },
        { term: 'Leukopenia', definition: 'Low WBC count (<5,000/µL); caused by radiation, poisons, or infectious disease; increases risk of infection.' },
        { term: 'Leukocytosis', definition: 'High WBC count (>10,000/µL); caused by infection, allergy, or disease.' },
        { term: 'Leukemia', definition: 'Cancer of hemopoietic tissue; uncontrolled WBC production; can be acute (immature cells) or chronic (mature cells that don\'t die).' },
        { term: 'Thrombocyte (Platelet)', definition: 'Disc-shaped cell fragment (2–4 μm, no nucleus); normal count 130,000–400,000/µL; involved in hemostasis.' },
        { term: 'Hemostasis', definition: 'The process of stopping bleeding: vascular spasm, platelet plug formation, and coagulation.' },
        { term: 'Prothrombinase', definition: 'Enzyme complex formed by extrinsic or intrinsic pathway that converts prothrombin to thrombin.' },
        { term: 'Thrombin', definition: 'Enzyme that converts fibrinogen to fibrin threads and activates Factor XIII; has positive feedback effects accelerating clotting.' },
        { term: 'Fibrinolysis', definition: 'The process of dissolving blood clots via plasmin breaking down fibrin.' },
        { term: 'Plasmin', definition: 'Fibrin-dissolving enzyme formed from plasminogen by kallikrein; the "clot buster."' },
        { term: 'Embolus', definition: 'A clot, air bubble, or fat droplet traveling through the bloodstream; pulmonary embolus lodges in lungs.' },
        { term: 'Thrombus', definition: 'A clot forming in an unbroken blood vessel, often due to rough endothelium or blood stasis.' },
        { term: 'Hemophilia', definition: 'Genetic deficiency of clotting factors; A = Factor VIII (83%), B = Factor IX (15%), C = Factor XI (autosomal).' },
        { term: 'Agglutinogen', definition: 'Antigen (A or B) on the RBC surface that determines ABO blood type.' },
        { term: 'Agglutinin', definition: 'Antibody (anti-A or anti-B) in plasma that causes agglutination (clumping) of foreign RBCs.' },
        { term: 'RhoGAM', definition: 'Injection given to Rh⁻ mothers to prevent formation of anti-Rh antibodies by binding fetal Rh antigens.' },
        { term: 'DIC', definition: 'Disseminated intravascular clotting; paradoxical widespread clotting and bleeding simultaneously; life-threatening multisystem failure.' }
      ],
      memoryAids: [
        'WBC percentages: "Never Let Monkeys Eat Bananas" — Neutrophils 60–70%, Lymphocytes 20–25%, Monocytes 3–8%, Eosinophils 2–4%, Basophils <1%.',
        'Clotting pathways: "EXtrinsic = EXternal tissue damage (fast, seconds); INtrinsic = INternal vessel damage (slow, minutes)."',
        'Hemophilia ABCs: A = Factor VIII (83%), B = Factor IX (15%), C = Factor XI (autosomal).',
        'Thrombus stays, Embolus travels: "Thrombus is like a THUMB stuck in place; Embolus is like an AMBULANCE moving through."',
        'Vitamin K clotting factors: "1972" — Factors II, VII, IX, X (rearranged digits of 1972).',
        'Blood type antibodies: "You have antibodies against what you LACK." Type A has anti-B, Type B has anti-A, Type O has both, Type AB has neither.',
        'Platelet plug steps: "AAA" — Adhesion, Activation (release), Aggregation.'
      ],
      inlineQuestions: [
        {
          question: 'The most numerous WBC type in normal blood is the:',
          options: { A: 'Lymphocyte', B: 'Monocyte', C: 'Neutrophil', D: 'Basophil' },
          answer: 'C',
          explanation: 'Neutrophils account for about 60–70% of all circulating white blood cells.'
        },
        {
          question: 'In the clotting cascade, prothrombinase converts:',
          options: { A: 'Fibrinogen to fibrin', B: 'Plasminogen to plasmin', C: 'Prothrombin to thrombin', D: 'Kallikrein to Factor XII' },
          answer: 'C',
          explanation: 'Prothrombinase converts prothrombin into thrombin, which then converts fibrinogen into fibrin.'
        },
        {
          question: 'A patient with Type AB blood has which antibodies in their plasma?',
          options: { A: 'Anti-A only', B: 'Anti-B only', C: 'Both anti-A and anti-B', D: 'Neither anti-A nor anti-B' },
          answer: 'D',
          explanation: 'Type AB has both A and B antigens on RBCs and neither antibody in plasma, making them the universal recipient.'
        }
      ],
      quiz: [
        { id: 'b3-q1', question: 'Which feature is common to all leukocytes?', options: { A: 'Presence of hemoglobin', B: 'Lack of a nucleus', C: 'Biconcave shape', D: 'Presence of a nucleus and absence of hemoglobin' }, answer: 'D', explanation: 'All WBCs have nuclei (unlike RBCs) and none contain hemoglobin.' },
        { id: 'b3-q2', question: 'Neutrophils destroy bacteria by releasing all of the following EXCEPT:', options: { A: 'Lysozymes', B: 'Defensin proteins', C: 'Strong oxidants', D: 'Histamine' }, answer: 'D', explanation: 'Histamine is released by basophils, not neutrophils. Neutrophils use lysozymes, defensins, and oxidants.' },
        { id: 'b3-q3', question: 'Which WBC type releases histaminase to slow inflammation?', options: { A: 'Neutrophil', B: 'Eosinophil', C: 'Basophil', D: 'Monocyte' }, answer: 'B', explanation: 'Eosinophils release histaminase, which counters the inflammatory effects of histamine released by basophils.' },
        { id: 'b3-q4', question: 'Basophils that leave capillaries and enter connective tissue become:', options: { A: 'Macrophages', B: 'Plasma cells', C: 'Mast cells', D: 'Kupffer cells' }, answer: 'C', explanation: 'Basophils become mast cells in connective tissue, where they continue to release heparin, histamine, and serotonin.' },
        { id: 'b3-q5', question: 'B lymphocytes provide immunity by:', options: { A: 'Directly attacking cancer cells', B: 'Turning into plasma cells that produce antibodies', C: 'Releasing lysozymes', D: 'Phagocytizing debris' }, answer: 'B', explanation: 'B cells differentiate into plasma cells that produce antibodies, and they provide immunological memory.' },
        { id: 'b3-q6', question: 'The largest circulating WBC that becomes a macrophage in tissues is the:', options: { A: 'Neutrophil', B: 'Basophil', C: 'Lymphocyte', D: 'Monocyte' }, answer: 'D', explanation: 'Monocytes are the largest WBCs and differentiate into macrophages after entering tissues.' },
        { id: 'b3-q7', question: 'A differential WBC count showing 80% neutrophils most likely indicates:', options: { A: 'Viral infection', B: 'Parasitic infection', C: 'Bacterial infection', D: 'Allergy' }, answer: 'C', explanation: 'Elevated neutrophils (normally 60–70%) strongly suggest a bacterial infection.' },
        { id: 'b3-q8', question: 'In the extrinsic pathway, damaged tissues release:', options: { A: 'Factor XII', B: 'Plasminogen', C: 'Tissue factor (thromboplastin, Factor III)', D: 'Fibrinogen' }, answer: 'C', explanation: 'Tissue factor (Factor III) from damaged tissues initiates the extrinsic clotting pathway.' },
        { id: 'b3-q9', question: 'Vitamin K is necessary for hepatic synthesis of:', options: { A: 'Factors II, VII, IX, and X', B: 'Factors I, II, and V only', C: 'All clotting factors equally', D: 'Only Factor XII' }, answer: 'A', explanation: 'Vitamin K is required for liver synthesis of Factors II (prothrombin), VII, IX, and X.' },
        { id: 'b3-q10', question: 'Plasmin\'s primary role is to:', options: { A: 'Convert prothrombin to thrombin', B: 'Promote platelet aggregation', C: 'Dissolve fibrin in clots', D: 'Activate Factor X' }, answer: 'C', explanation: 'Plasmin is a fibrin-dissolving enzyme that breaks down clots during fibrinolysis.' },
        { id: 'b3-q11', question: 'Low-dose aspirin reduces risk of clots mainly by:', options: { A: 'Blocking vitamin K absorption', B: 'Destroying fibrinogen', C: 'Increasing RBC production', D: 'Blocking synthesis of thromboxane A₂' }, answer: 'D', explanation: 'Aspirin inhibits thromboxane A₂ synthesis, reducing platelet adhesion and inappropriate clot formation.' },
        { id: 'b3-q12', question: 'Warfarin (Coumadin) acts by:', options: { A: 'Directly dissolving fibrin', B: 'Antagonizing vitamin K and blocking clotting factor synthesis', C: 'Increasing platelet aggregation', D: 'Releasing tissue factor' }, answer: 'B', explanation: 'Warfarin is a vitamin K antagonist preventing the liver from synthesizing vitamin K-dependent clotting factors.' },
        { id: 'b3-q13', question: 'Hemophilia A involves deficiency of:', options: { A: 'Factor IX', B: 'Factor XI', C: 'Factor VIII', D: 'Fibrinogen' }, answer: 'C', explanation: 'Hemophilia A is the most common form (~83%) and involves deficiency of clotting Factor VIII.' },
        { id: 'b3-q14', question: 'Type O blood is called "universal donor" because:', options: { A: 'It has both A and B antigens', B: 'It has neither A nor B antigens on RBCs', C: 'It has no antibodies in plasma', D: 'It has the highest Rh factor' }, answer: 'B', explanation: 'Type O RBCs lack A and B antigens, so they theoretically will not be attacked by recipient antibodies.' },
        { id: 'b3-q15', question: 'An Rh⁻ mother carrying her second Rh⁺ fetus is at risk for:', options: { A: 'Sickle-cell crisis', B: 'DIC only', C: 'Hemolytic disease of the newborn', D: 'Polycythemia' }, answer: 'C', explanation: 'Without RhoGAM after first exposure, the mother forms anti-Rh antibodies that attack subsequent Rh⁺ fetal blood.' },
        { id: 'b3-q16', question: 'RhoGAM prevents hemolytic disease of the newborn by:', options: { A: 'Destroying maternal T cells', B: 'Binding fetal Rh antigens before the mother forms antibodies', C: 'Increasing fetal RBC production', D: 'Removing all maternal antibodies' }, answer: 'B', explanation: 'RhoGAM binds fetal Rh agglutinogens in maternal blood, removing them before the mother mounts an immune response.' },
        { id: 'b3-q17', question: 'In DIC, the paradox is:', options: { A: 'Too many clotting factors and no bleeding', B: 'Widespread clotting AND bleeding occur at the same time', C: 'Only venous clotting occurs', D: 'Only arterial bleeding occurs' }, answer: 'B', explanation: 'DIC consumes clotting factors through excessive clot formation, leaving too few for normal hemostasis, causing simultaneous clotting and bleeding.' },
        { id: 'b3-q18', question: 'The three steps of platelet plug formation in order are:', options: { A: 'Aggregation, adhesion, release', B: 'Release, aggregation, adhesion', C: 'Adhesion, release reaction, aggregation', D: 'Spasm, adhesion, retraction' }, answer: 'C', explanation: 'Platelet plug formation proceeds: 1) adhesion to collagen, 2) release reaction (ADP, thromboxane A₂), 3) aggregation into a plug.' },
        { id: 'b3-q19', question: 'Acute leukemia is characterized by:', options: { A: 'Accumulation of mature WBCs that do not die', B: 'Uncontrolled production of immature WBCs crowding out normal marrow', C: 'Only platelet overproduction', D: 'Decreased WBC production' }, answer: 'B', explanation: 'Acute leukemia produces immature WBCs that overwhelm bone marrow, preventing normal RBC and platelet production.' },
        { id: 'b3-q20', question: 'If a patient has Type AB blood, which antibodies are in their plasma?', options: { A: 'Anti-A only', B: 'Both anti-A and anti-B', C: 'Anti-B only', D: 'Neither anti-A nor anti-B' }, answer: 'D', explanation: 'Type AB has both antigens on RBCs and no antibodies in plasma — making them universal recipients.' }
      ],
      flashcards: [
        { front: 'What are the two categories of WBCs?', back: 'Granulocytes (neutrophils, eosinophils, basophils) and Agranulocytes (monocytes, lymphocytes).' },
        { front: 'What are the normal WBC percentages?', back: 'Neutrophils 60–70%, Lymphocytes 20–25%, Monocytes 3–8%, Eosinophils 2–4%, Basophils <1%.' },
        { front: 'How do neutrophils destroy bacteria?', back: 'Release lysozymes (digest bacteria), defensins (antibiotic proteins that poke holes in cell walls), and strong oxidants (bleach-like chemicals).' },
        { front: 'What do eosinophils do?', back: 'Release histaminase (slows inflammation), attack parasitic worms, and phagocytize antibody-antigen complexes. Increased in parasites/allergies.' },
        { front: 'What do basophils release and what do they become?', back: 'Release heparin, histamine, and serotonin. Leave blood and become mast cells in connective tissue.' },
        { front: 'What are the three types of lymphocytes?', back: 'B cells (produce antibodies, memory), T cells (attack viruses/cancer/transplants), NK cells (direct attack on microbes/tumors).' },
        { front: 'What are the three stages of hemostasis?', back: '1) Vascular spasm, 2) Platelet plug formation (adhesion → release → aggregation), 3) Blood clotting (coagulation).' },
        { front: 'What is the difference between extrinsic and intrinsic clotting pathways?', back: 'Extrinsic: triggered by tissue factor from damaged tissue (rapid, seconds). Intrinsic: triggered by blood contacting collagen in damaged endothelium (slower, minutes). Both produce prothrombinase.' },
        { front: 'What does thrombin do?', back: 'Converts fibrinogen → fibrin, activates Factor XIII, and has positive feedback effects accelerating prothrombinase formation and platelet activation.' },
        { front: 'What vitamin K-dependent clotting factors does the liver make?', back: 'Factors II (prothrombin), VII, IX, and X — remember "1972".' },
        { front: 'What is fibrinolysis?', back: 'Dissolving clots: Factor XII → kallikrein → converts plasminogen to plasmin → plasmin digests fibrin. Positive feedback loop.' },
        { front: 'What is the difference between a thrombus and an embolus?', back: 'Thrombus: clot in an unbroken vessel (stays put). Embolus: clot/bubble/fat that travels through bloodstream; pulmonary embolus lodges in lungs.' },
        { front: 'What are agglutinogens vs agglutinins?', back: 'Agglutinogens: A/B antigens on RBC surfaces determining blood type. Agglutinins: anti-A/anti-B antibodies in plasma that cause agglutination of foreign RBCs.' },
        { front: 'What blood types does each type have for antigens and antibodies?', back: 'Type A: A antigen, anti-B. Type B: B antigen, anti-A. Type AB: both antigens, no antibodies (universal recipient). Type O: no antigens, both antibodies (universal donor).' },
        { front: 'What is hemolytic disease of the newborn?', back: 'Rh⁻ mother forms anti-Rh antibodies after first Rh⁺ pregnancy. In subsequent Rh⁺ pregnancies, antibodies cross placenta and destroy fetal RBCs causing severe anemia and bilirubin toxicity. Prevention: RhoGAM injection.' },
        { front: 'What are the three types of hemophilia?', back: 'A: Factor VIII deficiency (83%), B: Factor IX (15%), C: Factor XI (autosomal, less severe).' },
        { front: 'What is DIC?', back: 'Disseminated intravascular clotting: paradoxical widespread clotting AND bleeding simultaneously. Clotting factors are consumed, causing bleeding. Clots cause organ ischemia. Life-threatening.' }
      ]
    }
  ],

  // ===== MODULE-LEVEL COMPREHENSIVE QUIZ =====
  quiz: [
    { id: 'blood-mq1', question: 'If a patient presents with fatigue, shortness of breath, and a hematocrit of 28%, the most likely diagnosis is:', options: { A: 'Polycythemia', B: 'Leukemia', C: 'Anemia', D: 'Thrombocytopenia' }, answer: 'C', explanation: 'A hematocrit of 28% is well below normal (37–54%), indicating deficiency of RBCs or hemoglobin — anemia.' },
    { id: 'blood-mq2', question: 'A patient with Type AB blood can safely receive blood from:', options: { A: 'Only Type AB donors', B: 'Only Type O donors', C: 'Any ABO type (universal recipient)', D: 'Only Type A donors' }, answer: 'C', explanation: 'Type AB has no anti-A or anti-B antibodies in plasma, so donated RBCs of any ABO type will not be agglutinated.' },
    { id: 'blood-mq3', question: 'If a patient has Type AB blood, which antibodies are in their plasma?', options: { A: 'Anti-A only', B: 'Anti-B only', C: 'Both anti-A and anti-B', D: 'Neither anti-A nor anti-B' }, answer: 'D', explanation: 'Type AB has both A and B antigens on RBCs and neither antibody in plasma — they would agglutinate their own cells otherwise.' },
    { id: 'blood-mq4', question: 'A pregnant Rh⁻ woman is carrying her first Rh⁺ fetus. To prevent hemolytic disease of the newborn in future pregnancies, the physician should:', options: { A: 'Give the baby a blood transfusion immediately', B: 'Administer RhoGAM to the mother after delivery', C: 'Give heparin to the mother', D: 'Administer EPO to the fetus' }, answer: 'B', explanation: 'RhoGAM binds fetal Rh antigens in maternal blood, preventing the mother from producing anti-Rh antibodies that would attack future Rh⁺ fetuses.' },
    { id: 'blood-mq5', question: 'A patient on warfarin (Coumadin) should be monitored because the drug:', options: { A: 'Increases RBC production', B: 'Blocks vitamin K, inhibiting synthesis of clotting factors II, VII, IX, X', C: 'Dissolves existing clots directly', D: 'Increases platelet count' }, answer: 'B', explanation: 'Warfarin is a vitamin K antagonist that prevents hepatic synthesis of vitamin K-dependent clotting factors, requiring monitoring to prevent excessive bleeding.' },
    { id: 'blood-mq6', question: 'A child with hemophilia A bleeds longer than normal because they lack:', options: { A: 'Platelets', B: 'Vitamin K', C: 'Factor VIII', D: 'Factor XII' }, answer: 'C', explanation: 'Hemophilia A is deficiency of Factor VIII, the most common form (83% of cases), causing impaired coagulation.' },
    { id: 'blood-mq7', question: 'A 25-year-old male who recently moved to a high-altitude city develops secondary polycythemia. The stimulus is:', options: { A: 'Increased atmospheric O₂', B: 'Low atmospheric O₂ stimulating EPO production', C: 'High blood glucose', D: 'Increased blood volume from IV fluids' }, answer: 'B', explanation: 'At high altitude, low atmospheric O₂ causes kidney hypoxia, increased EPO release, and compensatory RBC overproduction.' },
    { id: 'blood-mq8', question: 'An incompatible blood transfusion results in agglutination, which directly causes:', options: { A: 'Increased O₂ delivery', B: 'RBC clumping blocking vessels and hemolysis causing free Hb that can block kidney tubules', C: 'Production of more plasma proteins', D: 'Decreased blood viscosity' }, answer: 'B', explanation: 'Agglutinated RBCs block small vessels and rupture, releasing hemoglobin that can damage kidneys and potentially cause death.' },
    { id: 'blood-mq9', question: 'A patient with DIC has simultaneous:', options: { A: 'Elevated RBCs and low WBCs', B: 'Widespread clotting and hemorrhaging', C: 'Only arterial bleeding', D: 'Only venous thrombosis' }, answer: 'B', explanation: 'DIC is the paradox of widespread clotting consuming clotting factors, leading to simultaneous bleeding throughout the body.' },
    { id: 'blood-mq10', question: 'Which clinical scenario would most likely show an elevated eosinophil count?', options: { A: 'Acute bacterial pneumonia', B: 'Parasitic worm infection', C: 'Severe dehydration', D: 'Iron-deficiency anemia' }, answer: 'B', explanation: 'Eosinophils increase in parasitic infections and allergies.' },
    { id: 'blood-mq11', question: 'A patient presenting with splenomegaly, anemia, and elevated immature WBCs most likely has:', options: { A: 'Iron-deficiency anemia', B: 'Polycythemia vera', C: 'Acute leukemia', D: 'Hemophilia B' }, answer: 'C', explanation: 'Acute leukemia produces immature WBCs that crowd out normal marrow cells, causing anemia; the spleen may enlarge as it tries to compensate.' },
    { id: 'blood-mq12', question: 'During a vascular spasm, which platelet product acts as a vasoconstrictor?', options: { A: 'Heparin', B: 'Prostacyclin', C: 'Serotonin', D: 'Defensins' }, answer: 'C', explanation: 'Platelets release serotonin, a chemical vasoconstrictor, during vascular spasm to help reduce blood flow through the injured vessel.' },
    { id: 'blood-mq13', question: 'A patient with liver failure would most likely develop bleeding because:', options: { A: 'The liver produces most clotting factors and plasma proteins', B: 'The liver makes all WBCs', C: 'The liver produces EPO', D: 'The liver removes bilirubin from blood' }, answer: 'A', explanation: 'The liver synthesizes most clotting factors (including the vitamin K-dependent factors) and fibrinogen. Liver failure impairs clotting.' },
    { id: 'blood-mq14', question: 'Streptokinase is used clinically to:', options: { A: 'Promote clot formation', B: 'Dissolve existing blood clots by activating plasminogen', C: 'Increase platelet count', D: 'Block vitamin K' }, answer: 'B', explanation: 'Streptokinase is a thrombolytic agent that activates plasminogen to form plasmin, which dissolves fibrin clots.' },
    { id: 'blood-mq15', question: 'If a patient has a reticulocyte count of 5% after iron therapy, this suggests:', options: { A: 'Bone marrow failure', B: 'The therapy is working and marrow is actively producing new RBCs', C: 'The patient has leukemia', D: 'EPO production has stopped' }, answer: 'B', explanation: 'A high reticulocyte count (normal 0.5–1.5%) indicates the bone marrow is actively producing new RBCs — a positive response to iron therapy.' },
    { id: 'blood-mq16', question: 'Why does blood doping increase risk of stroke or heart failure?', options: { A: 'It decreases O₂ carrying capacity', B: 'Extra RBCs increase viscosity, raise BP, and place more stress on the heart', C: 'It eliminates WBCs', D: 'It causes immediate anemia' }, answer: 'B', explanation: 'Reinfusing stored RBCs greatly increases blood viscosity, raising blood pressure and cardiac workload, risking stroke or heart failure.' },
    { id: 'blood-mq17', question: 'Natural killer (NK) cells differ from B and T cells in that they:', options: { A: 'Only attack bacteria', B: 'Require antigen presentation before acting', C: 'Attack many different microbes and tumor cells by direct attack without prior sensitization', D: 'Produce antibodies' }, answer: 'C', explanation: 'NK cells provide innate immunity by directly attacking a variety of microbes and tumor cells without needing specific antigen recognition.' },
    { id: 'blood-mq18', question: 'A blood smear shows cells with 2–5-lobed nuclei and pale lilac granules. These are:', options: { A: 'Eosinophils', B: 'Basophils', C: 'Neutrophils', D: 'Lymphocytes' }, answer: 'C', explanation: 'Neutrophils have multi-lobed nuclei (2–5 lobes) and fine, pale lilac granules — the hallmark appearance of polys.' },
    { id: 'blood-mq19', question: 'Kupffer cells in the liver are tissue macrophages derived from:', options: { A: 'Neutrophils', B: 'Eosinophils', C: 'Monocytes', D: 'Basophils' }, answer: 'C', explanation: 'Monocytes differentiate into macrophages in tissues. Kupffer cells are fixed liver macrophages.' },
    { id: 'blood-mq20', question: 'In a patient with kidney failure, you would expect:', options: { A: 'Excess EPO and polycythemia', B: 'Normal RBC counts', C: 'Decreased EPO and anemia', D: 'Increased WBCs' }, answer: 'C', explanation: 'Kidneys produce EPO; failure leads to insufficient EPO, reduced erythropoiesis, and anemia.' },
    { id: 'blood-mq21', question: 'Which component of hemoglobin directly binds oxygen?', options: { A: 'Alpha globin chain', B: 'Beta globin chain', C: 'Heme group (Fe²⁺)', D: 'Carbonic anhydrase' }, answer: 'C', explanation: 'Oxygen binds to the ferrous ion (Fe²⁺) in each heme group of hemoglobin.' },
    { id: 'blood-mq22', question: 'Type O blood has which antigens and antibodies?', options: { A: 'A antigens, anti-B antibodies', B: 'B antigens, anti-A antibodies', C: 'No antigens, both anti-A and anti-B antibodies', D: 'Both antigens, no antibodies' }, answer: 'C', explanation: 'Type O has neither A nor B antigens on RBCs (universal donor) but has both anti-A and anti-B antibodies in plasma.' },
    { id: 'blood-mq23', question: 'Positive feedback in blood clotting is seen when:', options: { A: 'Thrombin inhibits more prothrombinase formation', B: 'Thrombin accelerates prothrombinase formation and platelet activation', C: 'Plasmin forms more clots', D: 'Fibrinogen prevents thrombin action' }, answer: 'B', explanation: 'Thrombin has positive feedback: it accelerates its own production by stimulating more prothrombinase and activating platelets.' },
    { id: 'blood-mq24', question: 'Heparin prevents clotting by:', options: { A: 'Blocking vitamin K', B: 'Dissolving fibrin', C: 'Interfering with prothrombin activator formation', D: 'Destroying platelets' }, answer: 'C', explanation: 'Heparin (from basophils and mast cells, or given clinically) interferes with the formation of prothrombin activator (prothrombinase).' },
    { id: 'blood-mq25', question: 'A patient with aplastic anemia has pancytopenia (low RBCs, WBCs, and platelets) because:', options: { A: 'Only RBC production is affected', B: 'Complete bone marrow failure prevents production of all cell lines', C: 'The spleen is overactive', D: 'Vitamin K is deficient' }, answer: 'B', explanation: 'Aplastic anemia involves complete cessation of bone marrow function, preventing production of all blood cell types.' },
    { id: 'blood-mq26', question: 'Selectins and integrins are important in WBC function because they:', options: { A: 'Transport oxygen like hemoglobin', B: 'Help WBCs adhere to endothelium and migrate to infection sites', C: 'Form blood clots', D: 'Produce antibodies' }, answer: 'B', explanation: 'Selectins on endothelium help WBCs stick near injury; integrins on neutrophils assist movement through vessel walls (emigration).' },
    { id: 'blood-mq27', question: 'If anti-A serum causes agglutination of a patient\'s blood sample, the patient has:', options: { A: 'Type B blood', B: 'Type O blood', C: 'Type A or Type AB blood', D: 'Rh⁻ blood only' }, answer: 'C', explanation: 'Anti-A binds to A antigens. If agglutination occurs, the patient has A antigens — either Type A or Type AB blood.' },
    { id: 'blood-mq28', question: 'A newborn with erythroblastosis fetalis shows severe anemia and jaundice. The jaundice is caused by:', options: { A: 'Iron deficiency', B: 'Excessive bilirubin from destroyed fetal RBCs', C: 'High hemoglobin levels', D: 'Vitamin K excess' }, answer: 'B', explanation: 'Maternal antibodies destroy fetal RBCs; the excess heme breakdown produces toxic levels of bilirubin causing jaundice and potential brain damage.' },
    { id: 'blood-mq29', question: 'Which scenario best describes the purpose of a bone marrow transplant?', options: { A: 'Replace defective liver tissue', B: 'Reseed destroyed bone marrow with healthy donor stem cells', C: 'Increase vitamin K absorption', D: 'Replace damaged heart valves' }, answer: 'B', explanation: 'A bone marrow transplant involves destroying sick marrow with radiation/chemo and reseeding with histocompatible donor marrow stem cells.' },
    { id: 'blood-mq30', question: 'Banked blood is treated with CPD (citrate phosphate dextrose) to prevent clotting by:', options: { A: 'Adding vitamin K', B: 'Removing Ca²⁺', C: 'Adding thrombin', D: 'Destroying fibrinogen' }, answer: 'B', explanation: 'CPD removes calcium ions (Ca²⁺) from stored blood, and since Ca²⁺ is required at multiple steps of the clotting cascade, this prevents clot formation.' }
  ]
};

export default blood;
