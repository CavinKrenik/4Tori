// ============================================================
// Lecture Review Data – Pathways, Key Concepts & Test Questions
// ============================================================

const reviewData = {
  // ===== PATHWAY REVIEW SECTIONS =====
  pathways: [
    // ---- ENDOCRINE ----
    {
      id: 'endocrine-pathways',
      category: 'Endocrine System',
      icon: '⚗️',
      color: '#8b5cf6',
      title: 'Hypothalamic-Pituitary Axis & Endocrine Glands',
      tables: [
        {
          title: 'Anterior Pituitary Pathways',
          subtitle: 'Three-Tier System: Hypothalamus → Anterior Pituitary → Target Gland',
          headers: ['Hypothalamic Hormone', 'Pituitary Hormone', 'Target Gland & Action'],
          rows: [
            ['TRH (Thyrotropin-releasing)', 'TSH (Thyroid-stimulating)', 'Thyroid → T3 & T4 (increases metabolic rate)'],
            ['CRH (Corticotropin-releasing)', 'ACTH (Adrenocorticotropic)', 'Adrenal Cortex → Cortisol (stress response, increases glucose)'],
            ['GnRH (Gonadotropin-releasing)', 'FSH & LH', 'Gonads → Estrogen, Progesterone, Testosterone'],
            ['GHRH (Growth Hormone-releasing)', 'GH (Growth Hormone)', 'Liver/Bones → IGF-1 (growth & protein synthesis)'],
            ['Somatostatin (GHIH)', 'GH (Inhibits)', 'Stops growth and metabolic actions'],
            ['PIH (Dopamine)', 'PRL – Prolactin (Inhibits)', 'Prevents milk production until needed'],
          ],
        },
        {
          title: 'Posterior Pituitary (Storage & Release)',
          subtitle: 'Produced in hypothalamus, released by posterior pituitary — no intermediate hormone',
          headers: ['Hormone', 'Target', 'Action'],
          rows: [
            ['ADH (Vasopressin)', 'Kidney tubules', 'Reabsorbs water → increases blood pressure'],
            ['Oxytocin', 'Uterus / Mammary glands', 'Contractions & milk let-down'],
          ],
        },
      ],
      flowSteps: [],
      keyPoints: [
        'The hypophyseal portal system connects the hypothalamus to the anterior pituitary.',
        'Negative feedback: peripheral hormones inhibit hypothalamus/pituitary to maintain homeostasis.',
        'Anterior pituitary mnemonic (FLAT PEG): FSH, LH, ACTH, TSH, PRL, Endorphins, GH.',
      ],
    },
    {
      id: 'peripheral-glands',
      category: 'Endocrine System',
      icon: '⚗️',
      color: '#8b5cf6',
      title: 'Peripheral Endocrine Glands',
      tables: [
        {
          title: 'Thyroid & Parathyroid — Calcium Balance',
          headers: ['Gland', 'Hormone', 'Trigger', 'Action'],
          rows: [
            ['Thyroid (Follicular cells)', 'T3 & T4', 'TSH from pituitary', 'Increases basal metabolic rate'],
            ['Thyroid (Parafollicular cells)', 'Calcitonin', 'High blood Ca²⁺', 'Lowers calcium — inhibits osteoclasts'],
            ['Parathyroid', 'PTH', 'Low blood Ca²⁺', 'Raises calcium — stimulates osteoclasts, kidney reabsorption'],
          ],
        },
        {
          title: 'Adrenal Gland',
          headers: ['Region', 'Hormone(s)', 'Category', 'Function'],
          rows: [
            ['Cortex – Zona Glomerulosa', 'Aldosterone', 'Mineralocorticoid', 'Salt retention → increases blood pressure'],
            ['Cortex – Zona Fasciculata', 'Cortisol', 'Glucocorticoid', 'Stress response, increases blood glucose'],
            ['Cortex – Zona Reticularis', 'Androgens', 'Sex hormones', 'Weak male sex hormones'],
            ['Medulla', 'Epinephrine & Norepinephrine', 'Catecholamines', 'Fight-or-flight response'],
          ],
        },
        {
          title: 'Pancreas, Pineal & Gonads',
          headers: ['Gland / Cells', 'Hormone', 'Function'],
          rows: [
            ['Pancreas – Alpha cells', 'Glucagon', 'Raises blood sugar'],
            ['Pancreas – Beta cells', 'Insulin', 'Lowers blood sugar'],
            ['Pancreas – Delta cells', 'Somatostatin', 'Inhibits insulin & glucagon release'],
            ['Pineal gland', 'Melatonin', 'Regulates circadian rhythm (sleep-wake cycle)'],
            ['Gonads (female)', 'Estrogen / Progesterone', 'Secondary sex characteristics / pregnancy'],
            ['Gonads (male)', 'Testosterone', 'Male sex characteristics'],
          ],
        },
      ],
      flowSteps: [],
      keyPoints: [
        'Cortex mnemonic: "Salt, Sugar, Sex" — Glomerulosa, Fasciculata, Reticularis.',
        'Adrenal medulla = modified sympathetic ganglion (neural crest origin).',
        'Insulin & glucagon are antagonistic — they balance blood glucose.',
      ],
    },

    // ---- BLOOD & HEMOSTASIS ----
    {
      id: 'blood-production',
      category: 'Blood',
      icon: '🩸',
      color: '#dc2626',
      title: 'Hematopoiesis & Hormonal Regulation',
      tables: [
        {
          title: 'Stem Cell Lineages',
          subtitle: 'All blood cells originate from a hemocytoblast (pluripotent stem cell)',
          headers: ['Stem Cell Line', 'Produces'],
          rows: [
            ['Myeloid stem cells', 'RBCs (Erythrocytes), Platelets (from Megakaryocytes), Granulocytes (Neutrophils, Eosinophils, Basophils), Monocytes'],
            ['Lymphoid stem cells', 'Lymphocytes (B-cells, T-cells, NK cells)'],
          ],
        },
        {
          title: 'Hormonal Regulation of Blood Cell Production',
          headers: ['Hormone', 'Function'],
          rows: [
            ['Erythropoietin (EPO)', 'Stimulates RBC production (from kidneys)'],
            ['Thrombopoietin (TPO)', 'Stimulates platelet production'],
            ['Colony-stimulating factors (CSF)', 'Stimulate WBC production'],
          ],
        },
      ],
      flowSteps: [],
      keyPoints: [
        'Hemocytoblast → Myeloid or Lymphoid progenitor — determines cell fate.',
        'EPO is released by the kidneys in response to hypoxia (low O₂).',
        'Reticulocytes are immature RBCs released into blood — they mature in 1-2 days.',
      ],
    },
    {
      id: 'hemostasis-coagulation',
      category: 'Blood',
      icon: '🩸',
      color: '#dc2626',
      title: 'Hemostasis & the Coagulation Cascade',
      tables: [
        {
          title: 'Coagulation Pathways',
          headers: ['Pathway', 'Trigger', 'Key Factors'],
          rows: [
            ['Extrinsic', 'Tissue damage', 'Factor III (Tissue Factor) + Factor VII — Fast'],
            ['Intrinsic', 'Vessel wall damage', 'Factors XII, XI, IX, VIII — Slower'],
            ['Common', 'Both pathways converge', 'Factor X → Prothrombinase → Thrombin → Fibrin'],
          ],
        },
      ],
      flowSteps: [
        { step: 1, title: 'Vascular Spasm', detail: 'Injured vessel constricts smooth muscle to reduce blood flow and blood loss.' },
        { step: 2, title: 'Platelet Plug Formation', detail: 'Platelets adhere to exposed collagen (via von Willebrand factor) and form a temporary plug.' },
        { step: 3, title: 'Coagulation (Clotting Cascade)', detail: 'Extrinsic & intrinsic pathways converge at Factor X in the common pathway.' },
        { step: 4, title: 'Common Pathway Finale', detail: 'Prothrombinase converts Prothrombin → Thrombin. Thrombin converts Fibrinogen → Fibrin mesh that stabilizes the clot.' },
      ],
      keyPoints: [
        'Hemostasis = 3 steps: Vascular Spasm → Platelet Plug → Coagulation.',
        'Extrinsic is faster because it starts outside the blood (tissue damage).',
        'Fibrin is the final product — it forms the stable mesh of the clot.',
        'Serotonin is the molecule used for vasoconstriction in hemostasis.',
      ],
    },

    // ---- CARDIAC CYCLE ----
    {
      id: 'cardiac-cycle',
      category: 'The Heart',
      icon: '❤️',
      color: '#ef4444',
      title: 'The Cardiac Cycle — Order of Phases',
      tables: [
        {
          title: 'Cardiac Cycle Phases (in order)',
          headers: ['Phase', 'Valves', 'What Happens'],
          rows: [
            ['1. Late Ventricular Diastole', 'AV valves open; semilunar closed', 'Passive filling — ~80% of ventricular volume'],
            ['2. Atrial Contraction', 'AV valves open', '"Atrial Kick" tops off remaining ~20%'],
            ['3. Isovolumetric Contraction', 'All valves closed', 'Ventricles contract; pressure builds; S1 "lub"'],
            ['4. Ventricular Ejection', 'Semilunar valves open', 'Blood pumped out of ventricles into arteries'],
            ['5. Isovolumetric Relaxation', 'All valves closed', 'Ventricles relax; pressure drops; S2 "dub"'],
          ],
        },
        {
          title: 'ECG Waves',
          headers: ['Wave', 'Event'],
          rows: [
            ['P wave', 'Atrial depolarization'],
            ['QRS complex', 'Ventricular depolarization'],
            ['T wave', 'Ventricular repolarization'],
          ],
        },
      ],
      flowSteps: [],
      keyPoints: [
        'S1 ("lub") = AV valves close at start of isovolumetric contraction.',
        'S2 ("dub") = semilunar valves close at start of isovolumetric relaxation.',
        'The cardiac muscle has a long absolute refractory period to prevent tetanic contractions.',
        'Stroke volume is increased by increased venous return (Frank-Starling law).',
        'Left ventricular failure → pulmonary edema; Right ventricular failure → systemic edema.',
      ],
    },

    // ---- IMMUNITY ----
    {
      id: 'immunity-antibodies',
      category: 'Lymphatic & Immune System',
      icon: '🛡️',
      color: '#10b981',
      title: 'Immunoglobulins, Hypersensitivity & Complement',
      tables: [
        {
          title: 'Immunoglobulins (Antibodies)',
          headers: ['Ig Class', 'Structure', 'Main Role', 'Memory Aid'],
          rows: [
            ['IgM', 'Pentamer', 'First antibody produced during primary response', '"M" for Main first responder'],
            ['IgG', 'Monomer', 'Most abundant; long-term immunity; crosses placenta', '"G" for Greatest abundance / secondary response'],
            ['IgA', 'Dimer', 'Found in secretions (saliva, tears, mucus, breast milk)', '"A" for Apertures (secretions)'],
            ['IgE', 'Monomer', 'Allergic reactions; triggers mast cells; parasite defense', '"E" for allErgy'],
            ['IgD', 'Monomer', 'B-cell activation / receptor', '"D" for Detection (B-cell receptor)'],
          ],
        },
        {
          title: 'Hypersensitivity Types',
          headers: ['Type', 'Mechanism', 'Timing', 'Examples'],
          rows: [
            ['Type I', 'IgE-mediated', 'Immediate', 'Anaphylaxis, hay fever, asthma'],
            ['Type II', 'Antibody-mediated (Cytotoxic)', 'Hours', 'Blood transfusion reaction, hemolytic anemia'],
            ['Type III', 'Immune Complex deposition', 'Hours', 'Lupus, rheumatoid arthritis'],
            ['Type IV', 'T-cell mediated (Delayed)', '24-72 hours', 'Poison ivy, TB skin test, type 1 diabetes'],
          ],
        },
      ],
      flowSteps: [
        { step: 1, title: 'Chemotaxis', detail: 'Leukocytes follow chemical signals ("scents") toward the site of infection.' },
        { step: 2, title: 'Adhesion (Margination)', detail: 'Leukocytes stick to blood vessel walls using CAMs / Selectins.' },
        { step: 3, title: 'Diapedesis (Emigration)', detail: 'Cells squeeze between endothelial cells to leave the bloodstream into tissue.' },
        { step: 4, title: 'Phagocytosis', detail: 'Leukocytes engulf and destroy the pathogen.' },
      ],
      keyPoints: [
        'Complement (Classical Pathway): Antigen + Antibody (IgG/IgM) → C1 binding → cascade → MAC → cell lysis.',
        'NK cells and Cytotoxic T cells destroy target cells using perforins.',
        'Neutrophils are the first WBCs to arrive at an inflamed site.',
        'T cells gain immunocompetence in the thymus.',
        'Class II MHC molecules are found on lymphocytes and antigen-presenting cells.',
        'Natural passive immunity = antibodies crossing the placenta (IgG).',
      ],
    },
  ],

  // ===== TEST REVIEW QUESTIONS =====
  testReview: [
    // ---- HEART & BLOOD TEST ----
    {
      id: 'heart-blood-test',
      category: 'Heart & Blood',
      icon: '❤️',
      color: '#ef4444',
      questions: [
        { q: 'Left side ventricular failure would result in:', options: ['Systemic edema', 'Pulmonary edema', 'Increased systemic blood pressure', 'Decreased pulmonary blood pressure'], answer: 1 },
        { q: 'The type of leukocyte that will migrate in the blood and take up residence in the tissues as a macrophage is a(n)', options: ['Monocyte', 'Eosinophil', 'Basophil', 'Lymphocyte', 'Neutrophil'], answer: 0 },
        { q: 'In an EKG, the P wave is generated when the', options: ['Ventricles depolarize', 'Atria repolarize', 'Atria depolarize', 'Purkinje fibers initiate an impulse', 'Ventricles repolarize'], answer: 2 },
        { q: 'An individual has type B, Rh-positive blood. The individual has ________ antigen(s) and can produce anti-________ antibodies.', options: ['B; A and D', 'A; B and D', 'D; A and B', 'A and D; B', 'B and D; A'], answer: 4 },
        { q: 'The molecule used for vasoconstriction in inflammation and hemostasis is:', options: ['Histamine', 'Serotonin', 'Heparin', 'Dopamine'], answer: 1 },
        { q: 'If the length of the absolute refractory period in cardiac muscle cells was the same as skeletal muscle cells:', options: ['Tetanic contractions might occur, stopping the heart\'s pumping action', 'It would be less than 1-2 ms', 'It would be much longer before cardiac cells could respond', 'Contractions would last as long as the refractory period'], answer: 0 },
        { q: 'Plasma proteins that are necessary for blood clotting are the', options: ['Fibrinogens', 'Immunoglobulins', 'Lipoproteins', 'Albumins'], answer: 0 },
        { q: 'The hemoglobin found in erythrocytes is able to chemically attach to', options: ['Only nitrogen', 'Oxygen, carbon dioxide, and nitrogen', 'Only oxygen', 'Only carbon dioxide', 'Both oxygen and carbon dioxide'], answer: 4 },
        { q: 'Following a blood donation you would expect to see an increase in the number of?', options: ['Neutrophils', 'Erythrocytes', 'Lymphocytes', 'Platelets', 'Reticulocytes'], answer: 4 },
        { q: 'The P wave of a normal electrocardiogram indicates:', options: ['Atrial repolarization', 'Ventricular depolarization', 'Atrial depolarization', 'Ventricular repolarization'], answer: 2 },
        { q: 'When renin is released from the kidney,', options: ['Angiotensin I increases salt reabsorption', 'Angiotensin I is converted to angiotensin II', 'Angiotensinogen is converted into angiotensin I', 'Blood pressure goes down', 'Blood flow to the kidneys decreases'], answer: 2 },
        { q: 'Which are functions performed by the fibrous skeleton of the heart?\na: Separates the atria and ventricles\nb: Anchors the heart valves\nc: Provides electrical insulation\nd: Prevents over-stretching of cardiac muscle', options: ['b, d', 'a, b, c', 'a, c, d', 'a, b, c, d', 'None of these'], answer: 3 },
        { q: 'Which clotting pathway begins the combining of thromboplastin (factor III) with factor VII and calcium?', options: ['The common pathway', 'The extrinsic pathway', 'The intrinsic pathway', 'Each of the three pathways'], answer: 1 },
        { q: 'During ventricular contraction', options: ['The semilunar valves open and the AV valves close', 'Only the AV valves close', 'Only the semilunar valves close', 'Only the AV valves open', 'The semilunar valves close and AV valves open'], answer: 0 },
        { q: 'The main function of leukocytes is to', options: ['Carry oxygen through the blood', 'Defend against pathogens', 'Carry carbon dioxide through the blood', 'Trigger allergies', 'Form clots'], answer: 1 },
        { q: 'If there is a complete block between the SA node and the AV node, how would the ECG be affected?', options: ['The ventricles will stop beating', 'The QRS duration will be longer', 'The P-R interval will be shorter', 'There will be much bigger P waves', 'The rate of P waves will be faster than the rate of QRS complexes'], answer: 4 },
        { q: 'After donating a pint of blood, which of the following would be increased?', options: ['Heart rate', 'Mean arterial pressure', 'Cardiac output', 'Stroke volume', 'Hydrostatic pressure in the capillaries'], answer: 0 },
        { q: 'All of the following will lead to an increase in heart rate EXCEPT', options: ['Decreased blood pressure', 'Increased signals from proprioceptors', 'Decreased pH', 'Decreased blood CO₂ levels', 'Decreased oxygen levels'], answer: 3 },
        { q: 'Which of the following cells produces antibodies?', options: ['Monocyte', 'Lymphocytes', 'Neutrophil', 'Basophil'], answer: 1 },
        { q: 'Stroke volume is increased by ________.', options: ['Negative inotropic agents', 'High arterial blood pressure', 'Increased afterload', 'Increased venous return', 'Dehydration'], answer: 3 },
      ],
    },
    // ---- ENDOCRINE & ANS TEST ----
    {
      id: 'endocrine-ans-test',
      category: 'Endocrine & ANS',
      icon: '⚗️',
      color: '#8b5cf6',
      questions: [
        { q: 'The zona fasciculata of the adrenal cortex produces', options: ['Androgens', 'Epinephrine', 'Glucocorticoids', 'Norepinephrine', 'Mineralocorticoids'], answer: 2 },
        { q: 'The link between a first messenger and a second messenger in a cell that responds to peptide hormones is usually', options: ['A G protein', 'cAMP', 'Calcium ion levels', 'A transcription factor', 'cGMP'], answer: 0 },
        { q: 'Parasympathetic stimulation', options: ['Causes blood vessels in the skin to dilate', 'Causes the pupils to dilate', 'Increases gastric motility', 'Increases heart rate', 'More than one of the above'], answer: 2 },
        { q: 'Jose has a pituitary tumor producing excess GH. Which symptom would you expect?', options: ['Hyperglycemia that could lead to diabetes', 'Decreased urine output', 'High blood levels of amino acids', 'Decreased levels of somatomedins', 'Decreased triglyceride levels'], answer: 0 },
        { q: 'In the autonomic nervous system,', options: ['Motor neurons do not synapse but are connected by gap junctions', 'All motor neuron cell bodies are found in ganglia outside CNS', 'Neurons have dendrites but no axons', 'The lower motor neurons directly innervate effector organs', 'There is always a synapse between the CNS and the effector organ'], answer: 4 },
        { q: 'The hypophyseal portal system connects the ________ with the ________.', options: ['Posterior pituitary; hypothalamus', 'Anterior pituitary; hypothalamus', 'Pituitary glands; thyroid', 'Hypothalamus; thyroid', 'Anterior pituitary; posterior pituitary'], answer: 1 },
        { q: 'The zona glomerulosa of the adrenal cortex is stimulated by', options: ['High H⁺', 'High blood Na⁺', 'High blood K⁺', 'ANP', 'None of the above'], answer: 2 },
        { q: 'Proper growth requires which of these hormones EXCEPT?', options: ['Calcitriol', 'Insulin', 'Growth hormone', 'Thyroid hormone', 'No except — proper growth requires them all'], answer: 4 },
        { q: 'A decrease in the autonomic tone of blood vessel smooth muscle would result in', options: ['An increase in vessel diameter', 'A decrease in vessel diameter', 'Oscillation in vessel diameter', 'An increase in blood flow through the vessel', 'Both A and D'], answer: 4 },
        { q: 'The division of the ANS that maintains homeostasis during resting conditions is the ________ division.', options: ['Sympathetic', 'Parasympathetic', 'Somatomotor', 'Intramural', 'Thoracolumbar'], answer: 1 },
        { q: 'During sympathetic activation, ________ occurs.', options: ['Elevated heart rate', 'Sweating', 'Elevated blood pressure', 'Elevated blood glucose', 'All of the answers are correct'], answer: 4 },
        { q: 'Which statement about diabetes mellitus is false?', options: ['Type II DM is more common than type I DM', 'Target cells are unresponsive to insulin in type II DM', 'Both type I and type II DM are characterized by lack of insulin', 'Diabetic neuropathy is a common long-term effect of DM', 'Autoantibodies destroy pancreatic beta cells in type I DM'], answer: 2 },
        { q: 'Which of the following is true regarding cortisol?', options: ['It promotes breakdown of fat and protein', 'It promotes glycogen synthesis', 'It stimulates protein synthesis', 'It inhibits fat digestion', 'It stimulates glucose intake by most organs'], answer: 0 },
        { q: 'A green mamba venom causes decreased heart rate, decreased BP, sweating and drooling. The venom must bind to ________ receptors.', options: ['Alpha-1 adrenergic', 'Beta-1 adrenergic', 'Nicotinic cholinergic', 'Alpha-2 adrenergic', 'Muscarinic cholinergic'], answer: 4 },
        { q: 'The zona fasciculata in the adrenal gland secretes ________.', options: ['Cortisol', 'Estradiol', 'Epinephrine', 'Glucagon', 'Aldosterone'], answer: 0 },
        { q: 'FSH and testosterone together produce ~300,000 sperm/min, but neither alone can. This is an example of:', options: ['The synergistic effect', 'The cascade effect', 'The antagonistic effect', 'Hormone clearance', 'The permissive effect'], answer: 0 },
        { q: 'The background rate of sympathetic and parasympathetic activity is called ________.', options: ['Visceral motor activity', 'Visceral tone', '"Fight-or-flight" activity', 'Autonomic tone', 'Autonomic reflex arc activity'], answer: 3 },
        { q: 'The delta cells of the pancreatic islets produce', options: ['Peptide P', 'Insulin', 'Somatostatin', 'Cortisol', 'Glucagon'], answer: 2 },
        { q: 'All of the following cranial nerves serve the parasympathetic nervous system, EXCEPT', options: ['XII', 'III', 'X', 'IX', 'VII'], answer: 0 },
        { q: 'The adrenal medulla secretes mostly ________.', options: ['Norepinephrine', 'Endorphins', 'Dopamine', 'Epinephrine (adrenaline)', 'Acetylcholine'], answer: 3 },
      ],
    },
    // ---- BLOOD VESSELS & LYMPH TEST ----
    {
      id: 'vessels-lymph-test',
      category: 'Blood Vessels & Lymphatic',
      icon: '🌊',
      color: '#3b82f6',
      questions: [
        { q: 'This collection of very large lymph nodes is responsible for capturing pathogens that enter via the respiratory system', options: ['Tonsils', 'Thymus', 'Liver', 'Spleen', 'Lymph nodes'], answer: 0 },
        { q: 'Chemotaxis is the process by which', options: ['Chemical messengers stimulate pain sensation in inflammation', 'CAMs on leukocytes adhere to endothelial CAMs', 'Cells exit blood by squeezing through vessel walls', 'Cells migrate along chemical gradients'], answer: 3 },
        { q: 'As blood moves away from the heart', options: ['The diameter of individual vessels increases', 'The volume of blood moving decreases', 'The resistance to flow decreases', 'The pressure increases', 'None of the above'], answer: 4 },
        { q: 'Immunity that results from antibodies crossing the placenta is called ________ immunity.', options: ['Natural active', 'Auto', 'Artificial active', 'Artificial passive', 'Natural passive'], answer: 4 },
        { q: 'The classic pathway of complement activation begins when C1 binds to', options: ['An antibody attached to an antigen', 'The plasma membrane of bacteria', 'The cell wall of bacteria', 'A plasma protein', 'A cell surface antigen'], answer: 0 },
        { q: 'Which statement best describes arteries?', options: ['All contain valves to prevent backflow', 'All carry blood away from the heart', 'Only large arteries are lined with endothelium', 'All carry oxygenated blood away from the heart'], answer: 1 },
        { q: 'How is venous return affected when you go for an easy jog?', options: ['Increased due to decreased skeletal muscular pump', 'Decreased due to increased skeletal muscular pump', 'Increased due to increased skeletal muscular pump', 'Decreased due to decreased skeletal muscular pump'], answer: 2 },
        { q: 'Immunoglobulins fastest to respond to initial infection, with no change in secondary infections are', options: ['IgA', 'IgD', 'IgE', 'IgG', 'IgM'], answer: 4 },
        { q: 'Class II MHC molecules are found only on which of the following?', options: ['Granulocytes and microphages', 'Liver cells and macrophages in the spleen', 'Red blood cells', 'All body cells with a nucleus', 'Lymphocytes and antigen-presenting cells'], answer: 4 },
        { q: 'Stem cells that will form T cells gain immunocompetence in the', options: ['Kidneys', 'Liver', 'Thymus', 'Spleen', 'Thyroid'], answer: 2 },
        { q: 'Which of the following are powerful vasoconstrictors?', options: ['Norepinephrine and angiotensin II', 'Norepinephrine and natriuretic peptides', 'Epinephrine and ADH', 'Norepinephrine and ADH', 'Epinephrine and aldosterone'], answer: 0 },
        { q: 'The most important force driving reabsorption at the venous end of a capillary is?', options: ['Oncotic pressure', 'Blood hydrostatic pressure', 'Tissue fluid colloid osmotic pressure', 'Blood colloid osmotic pressure', 'Interstitial hydrostatic pressure'], answer: 3 },
        { q: 'Hypertension is commonly considered to be a chronic resting blood pressure higher than ________.', options: ['130/60', '120/75', '200/90', '140/90', '180/90'], answer: 3 },
        { q: 'A bee sting can trigger massive histamine release, causing ________ and a(n) ________ in arterial blood pressure.', options: ['Vasodilation; increase', 'Vasoconstriction; increase', 'Vasoconstriction; decrease', 'Vasoconstriction; oscillation', 'Vasodilation; decrease'], answer: 4 },
        { q: 'Autoimmune responses that activate macrophages and cytotoxic T cells (e.g., type 1 diabetes) are the result of ________.', options: ['Autoimmune diseases', 'Type III hypersensitivity', 'Type IV (delayed) hypersensitivity', 'Type I (acute) hypersensitivity', 'Type II hypersensitivity'], answer: 2 },
        { q: 'Antibodies tying together non-self cells is termed:', options: ['Agglutination', 'Diapedesis', 'Opsonization', 'Pavementing'], answer: 0 },
        { q: 'Which leukocytes are the first to arrive at an inflamed site?', options: ['B lymphocytes', 'T lymphocytes', 'Monocytes', 'Neutrophils'], answer: 3 },
        { q: 'Edema may occur when', options: ['Endothelial permeability goes up', 'Capillary hydrostatic pressure is elevated', 'Plasma protein concentration is reduced', 'Blood pressure is high', 'All of the answers are correct'], answer: 4 },
        { q: 'NK and cytotoxic T cells destroy cells using', options: ['Phagocytosis', 'Lysozymes', 'Complement', 'Perforins', 'Bleach-like substances during respiratory burst'], answer: 3 },
        { q: 'Which of the following forces does NOT help lymph to flow?', options: ['Arterial pulsations', 'The skeletal muscle pump', 'The lymphatic node pump', 'Rhythmic contractions of lymphatic vessels', 'The thoracic pump'], answer: 2 },
      ],
    },
    // ---- BRAIN TEST ----
    {
      id: 'brain-test',
      category: 'Brain & Nervous System',
      icon: '🧠',
      color: '#f59e0b',
      questions: [
        { q: 'An individual in the stage of sleep where sleepwalking may occur is in', options: ['Stage four with theta waves', 'Stage three with theta waves', 'Stage one with beta waves', 'Stage one with alpha waves', 'None of the above'], answer: 4 },
        { q: 'Autonomic centers that control blood pressure, heart rate, and vomiting are located in the', options: ['Diencephalon', 'Cerebellum', 'Medulla oblongata', 'Mesencephalon', 'Pons'], answer: 2 },
        { q: 'Cerebrospinal fluid:', options: ['Is produced by the arachnoid villi', 'Circulates in the subdural space', 'Returns to circulatory system via villi in the pia mater', 'Is the primary delivery mode for nutrients to neurons', 'None of the above'], answer: 4 },
        { q: 'Terry suffers from dissociation of memories from their emotional content. What brain system is probably damaged?', options: ['The putamen', 'The amygdala', 'The general interpretive area', 'The thalamus', 'The prefrontal lobe'], answer: 1 },
        { q: 'The visual cortex is located in the', options: ['Temporal lobe', 'Parietal lobe', 'Insula', 'Occipital lobe', 'Frontal lobe'], answer: 3 },
        { q: 'Cortical regions that interpret sensory information and relate to sensory memory are called ________ areas.', options: ['Somesthetic', 'Commissural', 'Sensory', 'Processing', 'Association'], answer: 4 },
        { q: 'After cutting the corpus callosum, the patient would likely be unable to', options: ['Verbally identify an object placed in left hand', 'Touch their nose with eyes closed', 'Speak', 'Recognize written words', 'Move their left arm'], answer: 0 },
        { q: 'Damage to the area corresponding to Broca\'s on the right hemisphere (for a right-handed person) may cause inability to', options: ['Interpret tonal qualities of a person\'s voice', 'Understand words they read', 'Interpret facial expressions', 'Understand words they hear', 'None of the above'], answer: 0 },
        { q: 'Which of the following cranial nerves does NOT originate in the pons?', options: ['Eight', 'Six', 'Seven', 'Five', 'Four'], answer: 4 },
        { q: 'Functions of astrocytes include all of the following, except', options: ['Maintaining the blood-brain barrier', 'Conducting action potentials', 'Buffering potassium levels', 'Metabolizing excess neurotransmitters', 'More than one of the above'], answer: 1 },
        { q: 'While preparing to sleep and relaxed, what type of brain waves would you expect?', options: ['Theta', 'Alpha', 'Gamma', 'Beta', 'Delta'], answer: 1 },
        { q: 'Nightmares about a teddy bear with fangs would likely occur during ________ sleep and exhibit ________ brain waves', options: ['Stage 4, beta', 'REM, beta', 'Stage 3, theta', 'Stage 3, delta', 'None of the above'], answer: 1 },
        { q: 'The RAS decreases activity by binding to', options: ['Guanine', 'Thymine', 'Adenosine', 'Cysteine', 'Uracil'], answer: 2 },
        { q: 'Andrea can no longer be around tequila without a negative emotional response after her alcohol poisoning. This could be the result of her:', options: ['Habenular nuclei', 'Basal nuclei', 'Hippocampus', 'Red nucleus', 'Substantia nigra'], answer: 2 },
        { q: 'All of the following are true of the hypothalamus, EXCEPT', options: ['Controls the ANS', 'Regulates body temperature', 'Regulates thirst', 'Produces melatonin', 'Controls the endocrine system'], answer: 3 },
        { q: 'Fluent aphasia is most often associated with damage to ___________.', options: ['Median forebrain', 'Hippocampus', 'Cingulate gyrus', 'Caudate nucleus', 'None of the above'], answer: 4 },
        { q: 'Which of the following is NOT controlled by the oculomotor nerve?', options: ['Inferior rectus', 'Lateral rectus', 'Superior rectus', 'Inferior oblique', 'Medial rectus'], answer: 1 },
        { q: 'Mikalia has: inability to maintain balance, normal intelligence, uncoordinated voluntary movements, decreased skeletal muscle tone. She is probably suffering from a condition affecting the', options: ['Post central gyrus', 'Cerebellum', 'Corpus callosum', 'Brainstem', 'Occipital lobe'], answer: 1 },
        { q: 'To analyze CSF for infections, fluid would logically be withdrawn from the', options: ['Epidural space', 'Arachnoid mater', 'Cerebral ventricles', 'Subarachnoid space', 'Dura mater'], answer: 3 },
        { q: 'Arrange the cortical areas in proper sequence to read a poem aloud:\n(1) visual association area (2) premotor area (3) Broca\'s area (4) primary motor area (5) Wernicke\'s area (6) visual cortex', options: ['1, 2, 4, 5, 6, 3', '1, 6, 5, 3, 4, 2', '5, 4, 3, 6, 1, 2', '6, 1, 5, 3, 2, 4', '6, 1, 3, 5, 4, 2'], answer: 3 },
      ],
    },
    // ---- SENSES TEST ----
    {
      id: 'senses-test',
      category: 'Special Senses',
      icon: '👁️',
      color: '#ec4899',
      questions: [
        { q: 'The taste sensation triggered by monovalent metallic cations is', options: ['Sweet', 'Minty', 'Sour', 'Umami', 'Salty'], answer: 4 },
        { q: 'Taste involves', options: ['Mechanoreceptors', 'Nociceptors', 'Chemoreceptors', 'Thermoreceptors', 'All of the above'], answer: 2 },
        { q: 'Which structural classification of sensory receptor are only mechanoreceptors?', options: ['Delta cells', 'Special receptor cells', 'Free dendritic endings', 'Encapsulated', 'More than one of the above'], answer: 3 },
        { q: 'Receptors that specialize in pain are called', options: ['Exteroceptors', 'Somatoceptors', 'Proprioceptors', 'Nociceptors', 'Interoceptors'], answer: 3 },
        { q: 'The following are true of olfaction, EXCEPT', options: ['Adapts slowly', 'Uses analytical integration', 'Uses synthetic integration', 'Has neuronal replacement', 'May involve pain'], answer: 0 },
        { q: 'Decreased sensitivity to a continued stimulus is called', options: ['Boredom', 'Conduction', 'Adaptation', 'Translation', 'Projection'], answer: 2 },
        { q: 'Which of the following would NOT function as a proprioceptor?', options: ['Ruffini\'s corpuscle', 'Pacinian corpuscle', 'End bulbs of Krause', 'Meissner\'s corpuscle', 'All of the above are proprioceptors'], answer: 2 },
        { q: 'All of the following are involved in the perception of taste except', options: ['Mechanoreceptors', 'Nociceptors', 'Thermoreceptors', 'Chemoreceptors', 'No except — all play a role in taste'], answer: 4 },
        { q: 'All of the following are true of the fibrous tunic of the eye, except', options: ['Provides mechanical support and protection', 'Is where extrinsic eye muscles insert', 'Is important in focusing for the eye', 'Consists of the sclera and cornea', 'Produces aqueous humor'], answer: 4 },
        { q: 'In the human eye, most refraction occurs when light passes through the', options: ['Lens', 'Iris', 'Vitreous humor', 'Cornea', 'Aqueous humor'], answer: 3 },
        { q: 'The amacrine cells are responsible for', options: ['Summation of receptor fields', 'Divergence', 'Cochlear tuning', 'Accommodation', 'Lateral inhibition'], answer: 4 },
        { q: 'When all three cone populations are stimulated equally, we perceive', options: ['Red', 'Blackness', 'White', 'Green', 'Blue'], answer: 2 },
        { q: 'Which description best matches aqueous humor?', options: ['Secreted in bright light', 'Provides liquid component of lacrimal secretions', 'Gelatinous fluid filling anterior chamber', 'Converts to vitreous humor with age', 'Excessive production may lead to glaucoma'], answer: 4 },
        { q: 'Perception of gravity and linear acceleration depends on', options: ['Pressure exerted by the cupula on hair cells', 'Vibrations of tectorial membrane striking hair cells', 'Movement of endolymph within semicircular canals', 'Bending of hair cells in the ampullae', 'Inertia of the otoliths relative to hair cells of the maculae'], answer: 4 },
        { q: 'An eye that does NOT need a corrective lens to focus has:', options: ['Myopia', 'Emmetropia', 'Astigmatism', 'Hyperopia', 'Presbyopia'], answer: 1 },
        { q: 'In the special senses, specialized receptor cells transduce the signal by', options: ['Voltage regulated gates', 'Electrical synapses', 'Acting as mechanoreceptors', 'Releasing neurotransmitters', 'None of the above'], answer: 3 },
        { q: 'A pigment synthesized from vitamin A is', options: ['Opsin', 'Retinal', 'Transducin', 'cGMP', 'Rhodopsin'], answer: 1 },
        { q: 'Distinguishing the pitch of sounds is possible because', options: ['Different frequencies cause different action potential frequencies', 'Different frequencies stimulate different regions of the basilar membrane', 'Different frequencies cause different kinds of action potentials', 'Different frequencies make the eardrum vibrate with different amplitudes', 'There are many different receptor types, each responding to a single frequency'], answer: 1 },
        { q: 'When photons convert cis-retinal to trans-retinal it leads to:', options: ['Closing of K⁺ channels → hyperpolarization', 'Opening of both Na⁺ and K⁺ channels simultaneously', 'Opening of K⁺ channels → depolarization', 'Opening of Na⁺ channels → depolarization', 'Closing of Na⁺ channels → hyperpolarization'], answer: 4 },
        { q: 'What is the crista ampullaris associated with?', options: ['Hearing high-pitch sounds', 'Dynamic equilibrium in angular acceleration', 'Static equilibrium when standing still', 'Vision related to color', 'Static acceleration in linear acceleration'], answer: 1 },
      ],
    },
  ],
};

export default reviewData;
