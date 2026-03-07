const blood = {
  id: 'blood',
  title: 'Blood',
  source: 'the blood is the lifePDF.pdf',
  description: 'Comprehensive study of blood composition, plasma proteins, hematocrit, RBC structure and lifecycle, hemoglobin, erythropoiesis, anemia, sickle-cell disease, WBCs, platelets, hemostasis, clotting cascade, anticoagulants, hemophilia, and ABO blood types.',
  icon: 'blood',
  sections: [
    // ===== MODULE 1: Overview, Functions, Plasma, Hematocrit, Hemopoiesis =====
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
          body: 'Adults have about 4–6 liters of blood composed of plasma (clear extracellular fluid) and formed elements (cells and platelets). Blood is more viscous than water and flows more slowly, has a temperature of ~100.4°F, pH about 7.4 (7.35–7.45), and accounts for ~8% of body weight. Average blood volume: males 5–6 L, females 4–5 L.'
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
          body: 'Most blood cells have short lifespans and need continual replacement. Embryonic yolk sac produces stem cells that colonize fetal bone marrow, liver, spleen, and thymus; liver stops producing blood cells at birth, but spleen and thymus remain involved with WBC production. Lymphoid hemopoiesis occurs in lymphoid tissues (thymus, tonsils, lymph nodes, spleen, Peyer\'s patches). Red bone marrow produces RBCs, WBCs, and platelets from hemocytoblasts (pluripotent stem cells) that can differentiate into multiple lines. In adults, active red marrow is in flat bones (sternum, ribs, skull, pelvis) and heads of femur and humerus.'
        },
        {
          title: 'Hemopoietic Growth Factors',
          body: 'Erythropoietin (EPO): from kidneys, increases RBC precursors. Thrombopoietin (TPO): from liver, stimulates platelet formation. Cytokines (CSFs and interleukins): local hormones in bone marrow stimulating WBC production. Recombinant forms are used clinically (e.g., EPO for kidney disease anemia, CSFs for cancer chemo, TPO for platelet support).'
        }
      ],
      keyTerms: [
        { term: 'Hematology', definition: 'The study of blood and blood disorders.' },
        { term: 'Hematocrit', definition: 'The percentage of blood volume occupied by cells; normal is ~42% for females and ~46% for males.' },
        { term: 'Plasma', definition: 'The clear extracellular fluid portion of blood, making up ~55% of blood volume.' },
        { term: 'Albumin', definition: 'The most abundant plasma protein; contributes to viscosity and osmolarity, influencing blood pressure and fluid balance.' },
        { term: 'Fibrinogen', definition: 'Plasma protein that is the precursor of fibrin threads used in blood clot formation.' },
        { term: 'Hemocytoblast', definition: 'Pluripotent stem cell in red bone marrow that can differentiate into any type of blood cell.' },
        { term: 'Erythropoietin (EPO)', definition: 'Hormone produced by kidneys that stimulates RBC precursor production in bone marrow.' },
        { term: 'Polycythemia', definition: 'Condition of too many RBCs (over ~65%), increasing blood viscosity and cardiac workload.' }
      ],
      memoryAids: [
        'Blood is TRP: Transport, Regulate, Protect — the three main functions.',
        'Hematocrit: "He-MAT-ocrit" — Males Are Typically higher (46% vs 42%) because of testosterone.',
        'Plasma proteins ABC: Albumins (most Abundant), B-globulins (Build immunity), Clotting fibrinogen.',
        'EPO = kidneys, TPO = liver, CSFs = bone marrow — Each growth factor has its own home organ.'
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
        {
          question: 'Which is NOT a listed function of blood?',
          options: { A: 'Transport of gases and nutrients', B: 'Regulation of pH and temperature', C: 'Protection from disease', D: 'Production of digestive enzymes' },
          answer: 'D',
          explanation: 'Blood transports, regulates, and protects, but does not produce digestive enzymes.'
        },
        {
          question: 'Approximately what percentage of total body weight does blood represent?',
          options: { A: '2%', B: '8%', C: '15%', D: '25%' },
          answer: 'B',
          explanation: 'Blood accounts for approximately 8% of total body weight.'
        },
        {
          question: 'Normal blood pH is closest to:',
          options: { A: '6.8', B: '7.0', C: '7.4', D: '8.0' },
          answer: 'C',
          explanation: 'Normal blood pH is about 7.4, ranging from 7.35 to 7.45.'
        },
        {
          question: 'Albumins in plasma primarily:',
          options: { A: 'Provide immune defenses', B: 'Help form blood clots', C: 'Contribute to viscosity and osmolarity, affecting BP and fluid balance', D: 'Transport nitrogenous wastes' },
          answer: 'C',
          explanation: 'Albumins are the most abundant plasma protein and their primary role is maintaining osmotic pressure and blood viscosity.'
        },
        {
          question: 'Which of the following is NOT a formed element of blood?',
          options: { A: 'Erythrocyte', B: 'Leukocyte', C: 'Platelet', D: 'Albumin' },
          answer: 'D',
          explanation: 'Albumin is a plasma protein, not a formed element. Formed elements include RBCs, WBCs, and platelets.'
        },
        {
          question: 'Blood doping is dangerous mainly because it:',
          options: { A: 'Decreases blood viscosity', B: 'Increases blood viscosity and cardiac workload', C: 'Eliminates plasma proteins', D: 'Causes immediate anemia' },
          answer: 'B',
          explanation: 'Blood doping increases RBC count, raising viscosity and forcing the heart to work much harder.'
        },
        {
          question: 'Hemocytoblasts are described as:',
          options: { A: 'Fully differentiated RBCs', B: 'Pluripotent stem cells that can form multiple cell lines', C: 'Platelet fragments', D: 'Cells that only make WBCs' },
          answer: 'B',
          explanation: 'Hemocytoblasts are pluripotent stem cells in red bone marrow capable of differentiating into all blood cell types.'
        },
        {
          question: 'Which plasma protein helps maintain osmotic pressure and blood volume?',
          options: { A: 'Albumin', B: 'Fibrinogen', C: 'Globulin', D: 'Hemoglobin' },
          answer: 'A',
          explanation: 'Albumin is the most abundant plasma protein and is the primary contributor to plasma osmotic pressure.'
        }
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
        { front: 'What is the normal blood pH range?', back: '7.35–7.45, with an average of about 7.4.' }
      ]
    },

    // ===== MODULE 2: RBC Structure, Hemoglobin, Erythropoiesis, Anemia =====
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
          body: 'Erythropoiesis produces ~2.5 million RBCs/second from hemocytoblasts in bone marrow. First committed cell is the proerythroblast, which has receptors for EPO. Erythroblasts multiply and synthesize hemoglobin, then become normoblasts that discard their nucleus to form reticulocytes. Reticulocytes (with a network of ER) enter blood as 0.5–1.5% of RBCs; full development takes 3–5 days with cell size reduction, increased cell number, Hb synthesis, and nucleus loss.'
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
          body: 'Iron is a key requirement; daily losses through urine, feces, and bleeding are ~0.9 mg in men and 1.7 mg in women, requiring 5–20 mg/day intake. Dietary iron: ferric (Fe³⁺) and ferrous (Fe²⁺); stomach acid converts Fe³⁺ to absorbable Fe²⁺. Gastroferritin from stomach binds Fe²⁺ and transports it to intestine; iron then binds transferrin in blood and goes to bone marrow (for Hb), muscle (for myoglobin), and all cells (for cytochromes). Liver stores excess iron as ferritin. B₁₂ and folic acid are needed for rapid cell division; vitamin C and copper are cofactors.'
        },
        {
          title: 'Hemoglobin Structure and Transport Roles',
          body: 'Hemoglobin has four globin chains (2 alpha, 2 beta); each chain has a heme group binding one O₂ to Fe²⁺, so each Hb can carry four O₂. Fetal hemoglobin uses gamma instead of beta chains. Hemoglobin carries about 23% of CO₂ (bound to globin) and can transport nitric oxide, helping regulate blood pressure via vasodilation.'
        },
        {
          title: 'Hemoglobin and Iron Recycling',
          body: 'In macrophages, globin is broken down into amino acids; heme splits into Fe³⁺ and biliverdin. Iron binds transferrin in blood, is stored as ferritin/hemosiderin in liver, muscle, and spleen, or used in bone marrow. Biliverdin is converted to bilirubin; liver secretes bilirubin into bile, which intestinal bacteria convert to urobilinogen and stercobilin (brown pigment of feces). Some reabsorbed urobilinogen becomes urobilin, excreted in urine.'
        },
        {
          title: 'Polycythemia – Excess RBCs',
          body: 'Primary polycythemia: cancer of erythropoietic cell line; RBC count up to 11 million/µL, hematocrit ~80%. Secondary polycythemia: from dehydration, emphysema, high altitude, or conditioning. Dangers: increased blood volume, pressure, and viscosity leading to embolism, stroke, or heart failure.'
        },
        {
          title: 'Anemia – Causes and Effects',
          body: 'Anemia: deficiency of RBCs or hemoglobin. Causes: inadequate erythropoiesis (B₁₂ deficiency → pernicious anemia, iron-deficiency, kidney failure with low EPO, aplastic anemia from marrow failure), hemorrhagic anemia from blood loss, hemolytic anemia from RBC destruction or hereditary Hb defects like thalassemia. Effects: tissue hypoxia and necrosis (shortness of breath, lethargy), low blood osmolarity causing tissue edema, and low viscosity causing tachycardia and low BP.'
        },
        {
          title: 'Sickle-Cell Anemia (SCA)',
          body: 'SCA is a genetic defect in Hb (Hb-S) where two amino acids are changed. At low O₂, RBCs become sickle-shaped, rupture easily, causing anemia and clot formation. Common in populations from the "malaria belt" (Mediterranean, sub-Saharan Africa, Asia); Hb-S persists because heterozygotes have increased resistance to malaria as RBCs leak K⁺, killing the parasite.'
        }
      ],
      keyTerms: [
        { term: 'Erythrocyte', definition: 'Red blood cell; a biconcave disc without organelles that carries hemoglobin for gas transport.' },
        { term: 'Hemoglobin', definition: 'Oxygen-carrying protein in RBCs with 4 globin chains, each with a heme group that binds one O₂.' },
        { term: 'Erythropoiesis', definition: 'The process of RBC production from hemocytoblasts in bone marrow.' },
        { term: 'Reticulocyte', definition: 'Immature RBC with residual ER network; normally 0.5–1.5% of circulating RBCs.' },
        { term: 'Proerythroblast', definition: 'The first committed cell in the RBC lineage with receptors for EPO.' },
        { term: 'Transferrin', definition: 'Blood protein that transports iron from the intestines to bone marrow and other tissues.' },
        { term: 'Bilirubin', definition: 'Yellow pigment derived from heme breakdown; secreted by liver into bile.' },
        { term: 'Sickle-Cell Anemia', definition: 'Genetic defect producing Hb-S; causes RBCs to sickle at low O₂, leading to anemia and clotting.' }
      ],
      memoryAids: [
        'RBC lifespan: "120 days to play" — after that, the spleen and liver macrophages take them away.',
        'Hemoglobin carries 4 O₂: "4 globin chains, 4 heme groups, 4 oxygen molecules" — everything comes in fours.',
        'Iron recycling path: "Heme → Biliverdin → Bilirubin → Bile → Stercobilin (brown feces)" — the colors tell the story (green → yellow → brown).',
        'Reticulocyte count is a "bone marrow report card" — low = marrow is failing, high = marrow is working hard.'
      ],
      inlineQuestions: [
        {
          question: 'The primary function of erythrocytes is to:',
          options: { A: 'Defend against pathogens', B: 'Transport O₂ and CO₂', C: 'Produce antibodies', D: 'Form blood clots' },
          answer: 'B',
          explanation: 'Erythrocytes (RBCs) carry hemoglobin which transports oxygen to tissues and carbon dioxide back to the lungs.'
        },
        {
          question: 'Hemoglobin can carry how many O₂ molecules per molecule?',
          options: { A: 'One', B: 'Two', C: 'Three', D: 'Four' },
          answer: 'D',
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
        {
          question: 'The first committed cell in the RBC lineage that responds to EPO is the:',
          options: { A: 'Hemocytoblast', B: 'Reticulocyte', C: 'Proerythroblast', D: 'Normoblast' },
          answer: 'C',
          explanation: 'The proerythroblast is the first committed cell in erythropoiesis and has receptors for EPO.'
        },
        {
          question: 'A low reticulocyte count in an anemic patient suggests:',
          options: { A: 'Recent blood loss', B: 'Bone marrow failure or insufficient EPO response', C: 'Excessive EPO production', D: 'Iron overload' },
          answer: 'B',
          explanation: 'Low reticulocytes in anemia indicate the bone marrow is not producing enough new RBCs.'
        },
        {
          question: 'The stimulus that directly triggers increased EPO release from kidneys is:',
          options: { A: 'High RBC count', B: 'Hypoxemia (low O₂) in the kidneys', C: 'Elevated blood glucose', D: 'High atmospheric O₂' },
          answer: 'B',
          explanation: 'When oxygen levels drop in the kidneys, they release EPO to stimulate more RBC production.'
        },
        {
          question: 'Which form of dietary iron is absorbable in the intestine after stomach processing?',
          options: { A: 'Ferric (Fe³⁺)', B: 'Ferrous (Fe²⁺)', C: 'Ferritin', D: 'Hemosiderin' },
          answer: 'B',
          explanation: 'Stomach acid converts Fe³⁺ to Fe²⁺ (ferrous), which is the absorbable form.'
        },
        {
          question: 'Bilirubin is derived from:',
          options: { A: 'Globin breakdown', B: 'Biliverdin from heme breakdown', C: 'Ferritin', D: 'Transferrin' },
          answer: 'B',
          explanation: 'When heme is broken down in macrophages, it first becomes biliverdin, which is then converted to bilirubin.'
        },
        {
          question: 'Pernicious anemia is most directly related to:',
          options: { A: 'Excess vitamin B₁₂', B: 'Lack of intrinsic factor leading to B₁₂ deficiency', C: 'High folic acid', D: 'Low vitamin C' },
          answer: 'B',
          explanation: 'Pernicious anemia results from inability to absorb B₁₂ due to lack of intrinsic factor.'
        },
        {
          question: 'Sickle-cell anemia results from:',
          options: { A: 'Iron deficiency', B: 'A genetic defect in Hb creating Hb-S with altered amino acids', C: 'Lack of vitamin K', D: 'Excess hemoglobin production' },
          answer: 'B',
          explanation: 'SCA is caused by a genetic mutation producing Hb-S, where two amino acids are changed in the hemoglobin molecule.'
        },
        {
          question: 'Which enzyme in RBCs facilitates conversion of CO₂ and water to carbonic acid?',
          options: { A: 'Hemoglobinase', B: 'Carbonic anhydrase', C: 'Catalase', D: 'Amylase' },
          answer: 'B',
          explanation: 'Carbonic anhydrase in RBCs converts CO₂ + H₂O to carbonic acid, important for CO₂ transport and pH balance.'
        }
      ],
      flashcards: [
        { front: 'How many new RBCs enter circulation per second?', back: 'About 2 million per second.' },
        { front: 'What shape are erythrocytes and why?', back: 'Biconcave discs (~7.5 μm wide) — this shape maximizes surface area/volume ratio for efficient gas exchange.' },
        { front: 'What is the normal reticulocyte count?', back: '0.5–1.5% of circulating RBCs. Low suggests marrow failure; high suggests active replacement.' },
        { front: 'How long does full RBC development take?', back: '3–5 days from proerythroblast to reticulocyte entering the blood.' },
        { front: 'What is the RBC lifespan and where are old ones removed?', back: '~120 days. Removed by fixed macrophages in the spleen and liver.' },
        { front: 'What role does transferrin play?', back: 'It transports iron in the blood to bone marrow (for Hb), muscle (for myoglobin), and all cells (for cytochromes).' },
        { front: 'How many O₂ can one hemoglobin molecule carry?', back: 'Four — one O₂ per heme group, with 4 heme groups per hemoglobin.' },
        { front: 'What is the pathway of bilirubin excretion?', back: 'Heme → biliverdin → bilirubin → bile → intestinal bacteria convert to urobilinogen → stercobilin (brown feces). Some urobilinogen reabsorbed → urobilin (yellow urine).' },
        { front: 'What causes sickle-cell anemia?', back: 'A genetic defect producing Hb-S with two changed amino acids. At low O₂, RBCs sickle, rupture easily, and form clots.' },
        { front: 'Why does the Hb-S gene persist in malaria regions?', back: 'Heterozygotes (carriers) have increased resistance to malaria — sickled RBCs leak K⁺, killing the malaria parasite.' }
      ]
    },

    // ===== MODULE 3: WBCs, Platelets, Hemostasis, Clotting, Blood Types =====
    {
      id: 'blood-s3',
      title: 'WBCs, Clotting & Blood Types',
      pageRange: 'Pages 17-24',
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
          title: 'Neutrophils',
          body: 'Also called polymorphonuclear leukocytes (polys); nuclei have 2–5 lobes connected by thin strands, with older cells having more lobes. Young neutrophils are "band cells" with horseshoe-shaped nuclei. They have fine, pale lilac granules, are 10–12 μm in diameter, and account for about 60–70% of circulating WBCs.'
        },
        {
          title: 'Platelets and Hemostasis Overview',
          body: 'Platelets are small cell fragments involved in clotting (thrombocytes). Hemostasis includes vascular spasm, platelet plug formation, and blood clotting (coagulation). Platelets release factors that help form plugs and support clot stabilization and vessel repair.'
        },
        {
          title: 'Clotting Cascade – Extrinsic and Intrinsic Pathways',
          body: 'Prothrombinase can be generated by either the extrinsic or intrinsic pathway; it is the key trigger for the common pathway forming fibrin threads. Extrinsic pathway: damaged tissues release tissue factor (thromboplastin, Factor III) activating Factor VII; in presence of Ca²⁺, Factor X combines with V to form prothrombinase—this pathway is rapid (seconds). Intrinsic pathway: activation occurs when endothelium is damaged and platelets contact collagen (activating Factor XII) and when platelets release phospholipids; requires several minutes.'
        },
        {
          title: 'Final Common Pathway and Thrombin',
          body: 'In the presence of Ca²⁺, prothrombinase converts prothrombin into thrombin. Thrombin converts soluble fibrinogen into insoluble fibrin threads and activates Factor XIII (fibrin-stabilizing factor). Thrombin has positive feedback effects: it accelerates formation of more prothrombinase and activates platelets to release phospholipids. Enzyme amplification means each activated factor activates many molecules in the next step, producing rapid clotting.'
        },
        {
          title: 'Vitamin K and Clotting',
          body: 'Normal clotting requires adequate vitamin K, a fat-soluble vitamin absorbed with dietary lipids; absorption is reduced if bile release is insufficient. Vitamin K is needed by the liver to synthesize clotting Factors II (prothrombin), VII, IX, and X; gut bacteria in the large intestine also produce vitamin K.'
        },
        {
          title: 'Clot Retraction, Repair, and Fibrinolysis',
          body: 'Clot retraction occurs within about 30 minutes: trapped platelets release Factor XIII to stabilize fibrin; platelet pseudopods contract and pull fibrin threads, condensing the clot and drawing wound edges together. Platelet-derived growth factor stimulates fibroblasts and smooth muscle cells to proliferate and repair the damaged vessel wall. Fibrinolysis: Factor XII accelerates formation of kallikrein, which converts plasminogen to plasmin (a fibrin-dissolving enzyme). The fibrinolytic system removes small, inappropriate clots and resolves clots at sites of completed repair.'
        },
        {
          title: 'Natural Anticoagulants and Intravascular Clotting',
          body: 'Natural anticoagulants include antithrombin (inactivates thrombin) and heparin (from basophils and mast cells, interferes with prothrombin activator formation). Thrombosis: clot forming in an unbroken vessel, often on rough endothelium or with slow blood flow. An embolus is a clot, air bubble, or fat droplet traveling in the bloodstream; pulmonary emboli lodge in lungs. Low-dose aspirin blocks thromboxane A₂ synthesis and reduces inappropriate clot formation.'
        },
        {
          title: 'Anticoagulant and Thrombolytic Drugs',
          body: 'Heparin: given during hemodialysis and surgery. Warfarin (Coumadin): vitamin K antagonist that blocks synthesis of clotting factors; acts more slowly than heparin. Stored banked blood is treated with CPD (citrate phosphate dextrose) which removes Ca²⁺ to prevent clotting. Thrombolytic agents (e.g., streptokinase, t-PA) activate plasminogen to dissolve clots.'
        },
        {
          title: 'Hemophilia',
          body: 'Genetic lack of one or more clotting factors; often sex-linked recessive in males. Hemophilia A: deficiency of Factor VIII (~83% of cases). Hemophilia B: deficiency of Factor IX (~15%). Hemophilia C: deficiency of Factor XI (autosomal, less severe). Physical exertion can cause prolonged bleeding and severe pain; treatment includes plasma or purified factor transfusions.'
        },
        {
          title: 'Blood Types – ABO Antigens and Antibodies',
          body: 'RBC surface antigens (agglutinogens) A and B are inherited combinations of proteins, glycoproteins, and glycolipids; at least 26 blood group systems exist (ABO, Rh, Kell, Lewis, Kidd, Duffy, etc.). Plasma antibodies (agglutinins) anti-A and anti-B are gamma globulins that recognize and bind foreign agglutinogens on RBCs. These antibodies cause RBC agglutination in mismatched transfusions.'
        }
      ],
      keyTerms: [
        { term: 'Neutrophil', definition: 'Most abundant WBC (60–70%); polymorphonuclear with 2–5 lobes; first responder to infection.' },
        { term: 'Hemostasis', definition: 'The process of stopping bleeding, involving vascular spasm, platelet plug formation, and coagulation.' },
        { term: 'Prothrombinase', definition: 'Enzyme complex formed by extrinsic or intrinsic pathway that converts prothrombin to thrombin.' },
        { term: 'Thrombin', definition: 'Enzyme that converts fibrinogen to fibrin threads and activates Factor XIII for clot stabilization.' },
        { term: 'Fibrinolysis', definition: 'The process of dissolving blood clots via plasmin breaking down fibrin.' },
        { term: 'Embolus', definition: 'A clot, air bubble, or fat droplet traveling through the bloodstream.' },
        { term: 'Hemophilia', definition: 'Genetic deficiency of clotting factors; Hemophilia A (Factor VIII) is most common.' },
        { term: 'Agglutinogen', definition: 'Antigen (A or B) on the RBC surface that determines blood type.' }
      ],
      memoryAids: [
        'Clotting pathways: "EXtrinsic = EXternal damage (tissue factor from outside vessels), INtrinsic = INternal (blood contacts collagen inside damaged vessel)."',
        'Hemophilia ABCs: A = Factor VIII (83%), B = Factor IX (15%), C = Factor XI (autosomal).',
        'Thrombus stays, Embolus travels: "Thrombus is like a THUMB stuck in place; Embolus is like an AMBULANCE moving through."',
        'Vitamin K clotting factors: "1972" — Factors II, VII, IX, X (rearranged digits of 1972).'
      ],
      inlineQuestions: [
        {
          question: 'The most numerous WBC type in normal blood is the:',
          options: { A: 'Lymphocyte', B: 'Monocyte', C: 'Neutrophil', D: 'Basophil' },
          answer: 'C',
          explanation: 'Neutrophils account for about 60–70% of all circulating white blood cells.'
        },
        {
          question: 'In the presence of Ca²⁺, prothrombinase converts:',
          options: { A: 'Fibrinogen to fibrin', B: 'Plasminogen to plasmin', C: 'Prothrombin to thrombin', D: 'Kallikrein to Factor XII' },
          answer: 'C',
          explanation: 'Prothrombinase converts prothrombin into thrombin, which then converts fibrinogen into fibrin.'
        },
        {
          question: 'Hemophilia A is due to a deficiency of:',
          options: { A: 'Factor VIII', B: 'Factor IX', C: 'Factor XI', D: 'Fibrinogen' },
          answer: 'A',
          explanation: 'Hemophilia A is the most common form (~83% of cases) and involves deficiency of clotting Factor VIII.'
        }
      ],
      quiz: [
        {
          question: 'Which feature is common to all leukocytes?',
          options: { A: 'Presence of hemoglobin', B: 'Lack of a nucleus', C: 'Presence of a nucleus and absence of hemoglobin', D: 'Biconcave shape' },
          answer: 'C',
          explanation: 'All WBCs have nuclei (unlike RBCs) and none contain hemoglobin.'
        },
        {
          question: 'In the extrinsic pathway, damaged tissues release:',
          options: { A: 'Factor XII', B: 'Tissue factor (thromboplastin, Factor III)', C: 'Plasminogen', D: 'Fibrinogen' },
          answer: 'B',
          explanation: 'Tissue factor (Factor III) from damaged tissues initiates the extrinsic clotting pathway.'
        },
        {
          question: 'Vitamin K is necessary for hepatic synthesis of:',
          options: { A: 'Factors II, VII, IX, and X', B: 'Factors I, II, and V only', C: 'All clotting factors equally', D: 'Only Factor XII' },
          answer: 'A',
          explanation: 'Vitamin K is specifically required for the liver to produce Factors II (prothrombin), VII, IX, and X.'
        },
        {
          question: 'Plasmin\'s primary role is to:',
          options: { A: 'Convert prothrombin to thrombin', B: 'Dissolve fibrin in clots', C: 'Activate Factor X', D: 'Promote platelet plug formation' },
          answer: 'B',
          explanation: 'Plasmin is a fibrin-dissolving enzyme that breaks down clots during fibrinolysis.'
        },
        {
          question: 'Low-dose aspirin reduces risk of inappropriate clots mainly by:',
          options: { A: 'Blocking vitamin K absorption', B: 'Blocking synthesis of thromboxane A₂', C: 'Destroying fibrinogen', D: 'Increasing RBC production' },
          answer: 'B',
          explanation: 'Aspirin inhibits thromboxane A₂ synthesis, reducing platelet adhesion and inappropriate clot formation.'
        },
        {
          question: 'Warfarin (Coumadin) acts by:',
          options: { A: 'Directly dissolving fibrin', B: 'Antagonizing vitamin K and blocking synthesis of clotting factors', C: 'Increasing platelet aggregation', D: 'Releasing tissue factor' },
          answer: 'B',
          explanation: 'Warfarin is a vitamin K antagonist that prevents the liver from synthesizing vitamin K-dependent clotting factors.'
        },
        {
          question: 'Which molecules on RBCs determine ABO blood types?',
          options: { A: 'Plasma globulins', B: 'Agglutinogens (A and B antigens) on the cell surface', C: 'Platelet factors', D: 'Complement proteins' },
          answer: 'B',
          explanation: 'ABO blood types are determined by agglutinogens (A and/or B antigens) on the surface of red blood cells.'
        },
        {
          question: 'The final step in the common coagulation pathway is conversion of:',
          options: { A: 'Fibrin to fibrinogen', B: 'Fibrinogen to fibrin by thrombin', C: 'Prothrombin to Factor X', D: 'Plasmin to plasminogen' },
          answer: 'B',
          explanation: 'The final step is thrombin converting soluble fibrinogen into insoluble fibrin threads that form the clot.'
        }
      ],
      flashcards: [
        { front: 'What are the two categories of WBCs?', back: 'Granulocytes (neutrophils, eosinophils, basophils) and Agranulocytes (monocytes, lymphocytes).' },
        { front: 'What percentage of WBCs are neutrophils?', back: '60–70% — they are the most abundant and are first responders to infection.' },
        { front: 'What are the three stages of hemostasis?', back: '1) Vascular spasm, 2) Platelet plug formation, 3) Blood clotting (coagulation).' },
        { front: 'What is the difference between extrinsic and intrinsic clotting pathways?', back: 'Extrinsic: triggered by tissue factor from damaged tissue (rapid, seconds). Intrinsic: triggered by blood contacting collagen in damaged endothelium (slower, minutes). Both produce prothrombinase.' },
        { front: 'What does thrombin do?', back: 'Converts fibrinogen → fibrin, activates Factor XIII, and has positive feedback effects accelerating more prothrombinase formation.' },
        { front: 'What vitamin K-dependent clotting factors does the liver make?', back: 'Factors II (prothrombin), VII, IX, and X — remember "1972".' },
        { front: 'What is fibrinolysis?', back: 'The process of dissolving clots. Plasminogen → plasmin (via kallikrein), and plasmin breaks down fibrin.' },
        { front: 'What is the difference between a thrombus and an embolus?', back: 'Thrombus: a clot forming in an unbroken vessel (stays put). Embolus: a clot/bubble/fat that breaks free and travels through the bloodstream.' },
        { front: 'What are agglutinogens vs agglutinins?', back: 'Agglutinogens: antigens (A, B) on RBC surfaces. Agglutinins: antibodies (anti-A, anti-B) in plasma that cause agglutination of foreign RBCs.' },
        { front: 'What are the three types of hemophilia?', back: 'A: Factor VIII deficiency (83%), B: Factor IX (15%), C: Factor XI (autosomal, less severe).' }
      ]
    }
  ]
};

export default blood;
