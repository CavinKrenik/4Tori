// ──────────────────────────────────────────────
// Lecture Review Module Data
// Source: public/NEEDTOKNOW/ files
// Format: Same progressive-learning structure as other modules
// ──────────────────────────────────────────────

const reviewData = {
  id: 'review',
  title: 'Lecture Review',
  description: 'Cross-topic exam prep drawn from past test questions, pathway tables, and quick-reference notes. Five review sections covering Endocrine & ANS, Heart & Blood, Blood Vessels & Lymphatic, the Brain, and the Senses.',
  icon: '📖',

  sections: [
    // ═══════════════════════════════════════════════
    // SECTION 1 — Endocrine System & ANS Review
    // ═══════════════════════════════════════════════
    {
      id: 'review-s1',
      title: 'Endocrine System & Autonomic Nervous System',
      pageRange: 'Exam Review',
      learnItems: [
        {
          title: 'Hypothalamic Releasing Hormones',
          body: 'The hypothalamus controls the anterior pituitary through releasing and inhibiting hormones:\n• TRH (Thyrotropin-releasing hormone) → stimulates TSH release\n• CRH (Corticotropin-releasing hormone) → stimulates ACTH release\n• GnRH (Gonadotropin-releasing hormone) → stimulates FSH and LH release\n• GHRH (Growth hormone-releasing hormone) → stimulates GH release\n• Somatostatin (GHIH) → inhibits GH release\n• Prolactin-inhibiting hormone (dopamine) → inhibits PRL release',
          table: {
            title: 'Hypothalamic Hormones',
            headers: ['Hormone', 'Target', 'Action'],
            rows: [
              ['TRH', 'Anterior pituitary', 'Stimulates TSH release'],
              ['CRH', 'Anterior pituitary', 'Stimulates ACTH release'],
              ['GnRH', 'Anterior pituitary', 'Stimulates FSH & LH release'],
              ['GHRH', 'Anterior pituitary', 'Stimulates GH release'],
              ['Somatostatin', 'Anterior pituitary', 'Inhibits GH release'],
              ['PIH (Dopamine)', 'Anterior pituitary', 'Inhibits PRL release'],
            ]
          }
        },
        {
          title: 'Anterior Pituitary Hormones',
          body: 'The anterior pituitary (adenohypophysis) produces six major hormones. The hypophyseal portal system connects the hypothalamus directly with the anterior pituitary, delivering releasing hormones via portal blood vessels.',
          table: {
            title: 'Anterior Pituitary Hormones',
            headers: ['Hormone', 'Full Name', 'Key Function'],
            rows: [
              ['GH', 'Growth Hormone', 'Growth, protein synthesis, fat mobilization'],
              ['TSH', 'Thyroid Stimulating Hormone', 'Stimulates thyroid to release T3/T4'],
              ['ACTH', 'Adrenocorticotropic Hormone', 'Stimulates adrenal cortex (cortisol)'],
              ['FSH', 'Follicle Stimulating Hormone', 'Gamete development'],
              ['LH', 'Luteinizing Hormone', 'Ovulation, testosterone production'],
              ['PRL', 'Prolactin', 'Milk production'],
            ]
          }
        },
        {
          title: 'Posterior Pituitary & Other Glands',
          body: 'The posterior pituitary (neurohypophysis) stores and releases two hormones made by the hypothalamus: ADH (antidiuretic hormone) promotes water reabsorption at the kidneys, and Oxytocin stimulates uterine contractions and milk ejection.\n\nThe pineal gland produces melatonin, which regulates sleep-wake cycles.',
        },
        {
          title: 'Thyroid & Parathyroid Glands',
          body: 'The thyroid gland produces thyroid hormones (T3 and T4) that boost metabolism, and calcitonin that lowers blood calcium. Proper growth requires GH, thyroid hormone, insulin, and calcitriol working together.\n\nThe parathyroid glands produce PTH (parathyroid hormone) which raises blood calcium—an antagonist to calcitonin.',
        },
        {
          title: 'Adrenal Gland Zones',
          body: 'The adrenal cortex has three zones, each producing different hormones. The adrenal medulla produces catecholamines (mostly epinephrine). The adrenal medulla secretes mostly epinephrine (adrenaline), not norepinephrine.',
          table: {
            title: 'Adrenal Cortex Zones',
            headers: ['Zone', 'Hormone', 'Stimulated By'],
            rows: [
              ['Zona glomerulosa', 'Aldosterone (mineralocorticoid)', 'High K⁺, angiotensin II, ACTH'],
              ['Zona fasciculata', 'Cortisol (glucocorticoid)', 'ACTH'],
              ['Zona reticularis', 'Androgens (sex hormones)', 'ACTH'],
            ]
          }
        },
        {
          title: 'Cortisol Functions',
          body: 'Cortisol is secreted by the zona fasciculata and has important metabolic effects:\n• Promotes breakdown of fat and protein (catabolic)\n• Raises blood glucose (gluconeogenesis)\n• Has anti-inflammatory and immunosuppressive effects\n• Does NOT promote glycogen synthesis or stimulate protein synthesis\n\nRemember: cortisol breaks things down to raise blood sugar during stress.',
        },
        {
          title: 'Pancreatic Islets & Hormone Interactions',
          body: 'The pancreatic islets contain three cell types:\n• Alpha (A) cells → glucagon (raises blood glucose)\n• Beta (B) cells → insulin (lowers blood glucose)\n• Delta cells → somatostatin (inhibits both insulin and glucagon)\n\nFSH and testosterone demonstrate the synergistic effect—neither alone can stimulate significant sperm production, but together they produce ~300,000 sperm per minute.',
        },
        {
          title: 'Hormone Signaling: G Proteins & Second Messengers',
          body: 'Peptide hormones (water-soluble) bind to cell surface receptors and use intracellular second messengers. The link between a first messenger (the hormone) and a second messenger (like cAMP) is usually a G protein.\n\nThe G protein activates adenylate cyclase, which converts ATP to cAMP, amplifying the hormonal signal inside the cell.',
        },
        {
          title: 'Diabetes Mellitus: Type I vs. Type II',
          body: 'Both types involve problems with insulin, but they differ in cause:\n• Type I DM: Autoantibodies destroy pancreatic beta cells → no insulin production\n• Type II DM: Target cells are unresponsive to insulin (insulin resistance)\n• Type II is more common than Type I\n• Both cause hyperglycemia; long-term effects include diabetic neuropathy\n\nFalse statement to watch for: "Both type I and type II DM are characterized by lack of, or low levels of, insulin" — Type II has normal or even high insulin levels, but cells don\'t respond.',
        },
        {
          title: 'GH Excess & Pituitary Tumors',
          body: 'A pituitary tumor producing excess GH leads to:\n• Hyperglycemia (GH is anti-insulin) → can progress to diabetes\n• Acromegaly in adults (enlarged hands, feet, jaw)\n• Gigantism if before growth plate closure\n\nGH promotes protein synthesis and fat mobilization while being antagonistic to insulin\'s blood-sugar-lowering effects.',
        },
        {
          title: 'ANS: Sympathetic vs. Parasympathetic',
          body: 'The autonomic nervous system has two divisions:\n• Sympathetic ("fight or flight"): thoracolumbar origin → elevated HR, BP, blood glucose, sweating\n• Parasympathetic ("rest and digest"): craniosacral origin → increased gastric motility, pupil constriction, decreased HR\n\nThe background rate of sympathetic and parasympathetic activity is called autonomic tone (or visceral tone).',
        },
        {
          title: 'ANS Motor Pathway',
          body: 'In the ANS, the lower motor neurons directly innervate effector organs. There is always a synapse between the CNS and the effector organ (two-neuron chain: preganglionic → ganglionic).\n\nDecreasing autonomic tone of blood vessel smooth muscle results in increased vessel diameter AND increased blood flow (vasodilation).',
        },
        {
          title: 'Cholinergic vs. Adrenergic Receptors',
          body: 'Parasympathetic postganglionic fibers release acetylcholine (ACh) onto muscarinic receptors. Effects: decreased HR, decreased BP, increased salivation/sweating.\n\nSympathetic postganglionic fibers release norepinephrine onto adrenergic receptors:\n• Alpha-1: vasoconstriction\n• Beta-1: increased HR and contractility\n• Alpha-2: inhibits norepinephrine release\n\nGreen mamba venom scenario: HR decreases, BP drops, sweating/drooling → muscarinic cholinergic receptor binding.',
        },
        {
          title: 'Parasympathetic Cranial Nerves',
          body: 'Four cranial nerves carry parasympathetic fibers:\n• CN III (Oculomotor) — pupil constriction, accommodation\n• CN VII (Facial) — lacrimal, submandibular, sublingual glands\n• CN IX (Glossopharyngeal) — parotid gland\n• CN X (Vagus) — heart, lungs, GI tract\n\nCN XII (Hypoglossal) is NOT parasympathetic — it is a somatic motor nerve to the tongue.',
        },
      ],
      keyTerms: [
        { term: 'Hypophyseal portal system', definition: 'Vascular connection between hypothalamus and anterior pituitary that delivers releasing/inhibiting hormones.' },
        { term: 'Autonomic tone', definition: 'The background rate of sympathetic and parasympathetic activity (also called visceral tone).' },
        { term: 'G protein', definition: 'Membrane protein that links first messengers (hormones) to second messengers (cAMP) in peptide hormone signaling.' },
        { term: 'Zona fasciculata', definition: 'Middle layer of adrenal cortex; produces glucocorticoids (cortisol).' },
        { term: 'Zona glomerulosa', definition: 'Outer layer of adrenal cortex; produces mineralocorticoids (aldosterone).' },
        { term: 'Somatostatin', definition: 'Hormone from delta cells and hypothalamus that inhibits GH, insulin, and glucagon.' },
        { term: 'Muscarinic receptors', definition: 'ACh receptors on effector organs of the parasympathetic system; mediate rest-and-digest responses.' },
        { term: 'Synergistic effect', definition: 'When two hormones together produce a greater effect than either alone (e.g., FSH + testosterone for spermatogenesis).' },
      ],
      memoryAids: [
        'Adrenal cortex zones from outside in: GFR — Glomerulosa (salt), Fasciculata (sugar), Reticularis (sex). "The deeper you go, the sweeter it gets."',
        'Parasympathetic cranial nerves: "1973" → CN III, VII, IX, X.',
        'Sympathetic activation does EVERYTHING up: heart rate up, BP up, glucose up, sweat up. The only thing that goes down is digestion.',
        'Delta cells = "D for Damper" — somatostatin dampens both insulin and glucagon.',
      ],
      inlineQuestions: [
        {
          question: 'The zona fasciculata of the adrenal cortex produces:',
          options: { A: 'Androgens', B: 'Epinephrine', C: 'Glucocorticoids', D: 'Norepinephrine', E: 'Mineralocorticoids' },
          answer: 'C',
          explanation: 'The zona fasciculata is the middle zone of the adrenal cortex and produces glucocorticoids (cortisol).'
        },
        {
          question: 'The link between a first messenger and a second messenger in peptide hormone signaling is usually:',
          options: { A: 'A G protein', B: 'cAMP', C: 'Calcium ion levels', D: 'A transcription factor', E: 'cGMP' },
          answer: 'A',
          explanation: 'G proteins couple hormone receptors to intracellular second messenger systems like cAMP.'
        },
        {
          question: 'During sympathetic activation, which occurs?',
          options: { A: 'Elevated heart rate', B: 'Sweating', C: 'Elevated blood pressure', D: 'Elevated blood glucose', E: 'All of the answers are correct' },
          answer: 'E',
          explanation: 'Sympathetic activation causes all of these: elevated HR, sweating, elevated BP, and elevated blood glucose.'
        },
        {
          question: 'The delta cells of the pancreatic islets produce:',
          options: { A: 'Peptide P', B: 'Insulin', C: 'Somatostatin', D: 'Cortisol', E: 'Glucagon' },
          answer: 'C',
          explanation: 'Delta cells produce somatostatin, which inhibits both insulin and glucagon secretion.'
        },
        {
          question: 'Which statement about diabetes mellitus is FALSE?',
          options: { A: 'Type II is more common than Type I', B: 'Target cells are unresponsive to insulin in Type II', C: 'Both types are characterized by lack of or low levels of insulin', D: 'Diabetic neuropathy is a long-term effect', E: 'Autoantibodies destroy beta cells in Type I' },
          answer: 'C',
          explanation: 'Type II DM has normal or high insulin levels — the problem is insulin resistance, not low insulin.'
        },
      ],
      quiz: [
        { question: 'The zona fasciculata in the adrenal gland secretes:', options: { A: 'Cortisol', B: 'Estradiol', C: 'Epinephrine', D: 'Glucagon', E: 'Aldosterone' }, answer: 'A', explanation: 'The zona fasciculata produces cortisol (a glucocorticoid).' },
        { question: 'The hypophyseal portal system connects the ________ with the ________.', options: { A: 'Posterior pituitary; hypothalamus', B: 'Anterior pituitary; hypothalamus', C: 'Pituitary glands; thyroid', D: 'Hypothalamus; thyroid', E: 'Anterior pituitary; posterior pituitary' }, answer: 'B', explanation: 'The hypophyseal portal system is a vascular link between the hypothalamus and anterior pituitary.' },
        { question: 'The zona glomerulosa of the adrenal cortex is stimulated by:', options: { A: 'High H⁺', B: 'High blood Na⁺', C: 'High blood K⁺', D: 'ANP', E: 'None of the above' }, answer: 'C', explanation: 'High blood potassium directly stimulates the zona glomerulosa to release aldosterone.' },
        { question: 'Proper growth requires which of these hormones EXCEPT?', options: { A: 'Calcitriol', B: 'Insulin', C: 'Growth hormone', D: 'Thyroid hormone', E: 'No except — all are required' }, answer: 'E', explanation: 'Proper growth requires GH, thyroid hormone, insulin, AND calcitriol.' },
        { question: 'A decrease in the autonomic tone of blood vessel smooth muscle would result in:', options: { A: 'An increase in vessel diameter', B: 'A decrease in vessel diameter', C: 'Oscillation in vessel diameter', D: 'An increase in blood flow', E: 'Both A and D' }, answer: 'E', explanation: 'Decreased tone → vasodilation → increased diameter AND increased blood flow.' },
        { question: 'The division of the ANS that maintains homeostasis during resting conditions is the ________ division.', options: { A: 'Sympathetic', B: 'Parasympathetic', C: 'Somatomotor', D: 'Intramural', E: 'Thoracolumbar' }, answer: 'B', explanation: 'The parasympathetic division maintains resting "rest and digest" homeostasis.' },
        { question: 'Parasympathetic stimulation:', options: { A: 'Causes blood vessels in the skin to dilate', B: 'Causes the pupils to dilate', C: 'Increases gastric motility', D: 'Increases heart rate', E: 'More than one of the above' }, answer: 'C', explanation: 'Parasympathetic stimulation increases gastric motility (rest and digest).' },
        { question: 'Jose has a pituitary tumor producing excess GH. What symptom would you expect?', options: { A: 'Hyperglycemia that could lead to diabetes', B: 'Decreased urine output', C: 'High blood amino acids causing kidney failure', D: 'Decreased somatomedins', E: 'Decreased triglycerides causing obesity' }, answer: 'A', explanation: 'Excess GH is anti-insulin → hyperglycemia, potentially leading to diabetes.' },
        { question: 'In the ANS, which statement is true?', options: { A: 'Motor neurons are connected by gap junctions', B: 'All motor neuron cell bodies are in ganglia outside the CNS', C: 'Neurons have dendrites but no axons', D: 'Lower motor neurons directly innervate effector organs', E: 'There is always a synapse between the CNS and the effector' }, answer: 'E', explanation: 'The ANS always has a two-neuron chain (preganglionic → postganglionic) before the effector.' },
        { question: 'Which is true regarding cortisol?', options: { A: 'It promotes breakdown of fat and protein', B: 'It promotes glycogen synthesis', C: 'It stimulates protein synthesis', D: 'It inhibits fat digestion', E: 'It stimulates glucose intake by most organs' }, answer: 'A', explanation: 'Cortisol is catabolic — it breaks down fat and protein to raise blood glucose.' },
        { question: 'FSH and testosterone together producing 300,000 sperm/min when neither can alone is an example of:', options: { A: 'The synergistic effect', B: 'The cascade effect', C: 'The antagonistic effect', D: 'Hormone clearance', E: 'The permissive effect' }, answer: 'A', explanation: 'Synergistic effect: two hormones together produce a greater effect than either alone.' },
        { question: 'The background rate of sympathetic and parasympathetic activity is called:', options: { A: 'Visceral motor activity', B: 'Visceral tone', C: '"Fight-or-flight" activity', D: 'Autonomic tone', E: 'Autonomic reflex arc activity' }, answer: 'D', explanation: 'Autonomic tone (also called visceral tone) is the baseline level of ANS activity.' },
        { question: 'The adrenal medulla secretes mostly:', options: { A: 'Norepinephrine', B: 'Endorphins', C: 'Dopamine', D: 'Epinephrine (adrenaline)', E: 'Acetylcholine' }, answer: 'D', explanation: 'The adrenal medulla secretes about 80% epinephrine and 20% norepinephrine.' },
        { question: 'All of the following are parasympathetic cranial nerves EXCEPT:', options: { A: 'XII', B: 'III', C: 'X', D: 'IX', E: 'VII' }, answer: 'A', explanation: 'CN XII (Hypoglossal) is a purely somatic motor nerve to the tongue, not parasympathetic.' },
        { question: 'Green mamba venom causes decreased HR, decreased BP, sweating, and drooling. The venom binds to ________ receptors.', options: { A: 'Alpha-1 adrenergic', B: 'Beta-1 adrenergic', C: 'Nicotinic cholinergic', D: 'Alpha-2 adrenergic', E: 'Muscarinic cholinergic' }, answer: 'E', explanation: 'The parasympathetic effects (low HR, low BP, salivation, sweating) indicate muscarinic receptor activation.' },
      ],
      flashcards: [
        { front: 'What does the zona fasciculata produce?', back: 'Glucocorticoids (primarily cortisol)' },
        { front: 'What connects the hypothalamus to the anterior pituitary?', back: 'The hypophyseal portal system' },
        { front: 'What stimulates the zona glomerulosa?', back: 'High blood K⁺, angiotensin II, and ACTH' },
        { front: 'What do delta cells of the pancreatic islets produce?', back: 'Somatostatin — inhibits both insulin and glucagon' },
        { front: 'What is autonomic tone?', back: 'The background rate of sympathetic and parasympathetic activity' },
        { front: 'What effect does a G protein have in hormone signaling?', back: 'It links the first messenger (hormone) to the second messenger (cAMP)' },
        { front: 'Why is "both types of DM have low insulin" false?', back: 'Type II has normal/high insulin — cells are resistant, not deficient' },
        { front: 'Which 4 cranial nerves carry parasympathetic fibers?', back: 'III (Oculomotor), VII (Facial), IX (Glossopharyngeal), X (Vagus)' },
        { front: 'What does the adrenal medulla mostly secrete?', back: 'Epinephrine (~80%) — a catecholamine' },
        { front: 'What is the synergistic effect?', back: 'Two hormones together produce a greater effect than either alone (e.g., FSH + testosterone)' },
        { front: 'What are the 3 adrenal cortex zones (outside→in) and their products?', back: 'Glomerulosa (aldosterone), Fasciculata (cortisol), Reticularis (androgens) — "GFR: salt, sugar, sex"' },
        { front: 'Effects of cortisol?', back: 'Catabolic: breaks down fat & protein, raises blood glucose, anti-inflammatory' },
        { front: 'Muscarinic vs. nicotinic receptors?', back: 'Muscarinic: parasympathetic effector organs (slow HR, GI motility). Nicotinic: all autonomic ganglia & skeletal muscle.' },
      ],
    },

    // ═══════════════════════════════════════════════
    // SECTION 2 — Heart & Blood Review
    // ═══════════════════════════════════════════════
    {
      id: 'review-s2',
      title: 'Heart & Blood',
      pageRange: 'Exam Review',
      learnItems: [
        {
          title: 'Left vs. Right Heart Failure',
          body: 'Heart failure occurs when the heart cannot pump blood effectively:\n• Left ventricular failure → blood backs up into the pulmonary circulation → pulmonary edema (fluid in the lungs)\n• Right ventricular failure → blood backs up into systemic veins → systemic edema (peripheral swelling, jugular distension)\n\nLeft-sided failure is the most common initial presentation; right-sided failure often follows.',
        },
        {
          title: 'ECG Interpretation',
          body: 'A normal ECG has three key waveforms:\n• P wave = atrial depolarization (NOT atrial repolarization)\n• QRS complex = ventricular depolarization (atrial repolarization is hidden here)\n• T wave = ventricular repolarization\n\nIf there is a complete SA→AV block, the rate of P waves will be faster than the rate of QRS complexes (P waves and QRS become dissociated).',
        },
        {
          title: 'Cardiac Cycle: Valve Mechanics',
          body: 'During ventricular contraction (systole):\n• Pressure rises → AV valves close (S1, "lubb") → semilunar valves open\n• Blood is ejected into pulmonary trunk and aorta\n\nDuring ventricular relaxation (diastole):\n• Pressure drops → semilunar valves close (S2, "dupp") → AV valves open\n• Blood flows from atria into ventricles',
        },
        {
          title: 'Cardiac Cycle Phases (in order)',
          body: 'The five phases of the cardiac cycle occur in this sequence:',
          table: {
            title: 'Cardiac Cycle Phases',
            headers: ['Phase', 'Name', 'Key Event'],
            rows: [
              ['1', 'Late ventricular diastole', 'Passive filling of ventricles'],
              ['2', 'Atrial contraction', 'Atrial "kick" tops off ventricular volume'],
              ['3', 'Isovolumetric contraction', 'All valves closed, pressure builds'],
              ['4', 'Ventricular ejection', 'Semilunar valves open, blood is ejected'],
              ['5', 'Isovolumetric relaxation', 'All valves closed, pressure drops'],
            ]
          }
        },
        {
          title: 'Cardiac Refractory Period',
          body: 'Cardiac muscle has a LONG absolute refractory period (~250 ms, nearly as long as the contraction itself). This is critical because:\n• If it were as short as skeletal muscle\'s refractory period (1-2 ms), tetanic contractions could occur\n• Tetanus would stop the heart\'s pumping action — no filling between beats = death\n• The long refractory period ensures the heart relaxes and fills between each beat.',
        },
        {
          title: 'Fibrous Skeleton of the Heart',
          body: 'The fibrous skeleton is dense connective tissue surrounding the valve rings. Its functions include:\n• Separates the atria and ventricles\n• Anchors the heart valves\n• Provides electrical insulation between atria and ventricles\n• Prevents over-stretching of the cardiac muscle\n\nAll four functions (a, b, c, d) are correct — answer choice "a, b, c, d."',
        },
        {
          title: 'Heart Rate Regulation',
          body: 'Multiple factors increase heart rate:\n• Decreased blood pressure (baroreceptor reflex)\n• Increased proprioceptor signals (exercise)\n• Decreased pH (acidosis)\n• Decreased O₂ levels (hypoxia)\n\nDecreased blood CO₂ does NOT increase heart rate — it actually decreases it (less need for gas exchange). Stroke volume is increased by increased venous return (Frank-Starling mechanism).',
        },
        {
          title: 'Blood Donation Response',
          body: 'After donating blood (losing ~1 pint):\n• Heart rate INCREASES (compensatory response to maintain cardiac output)\n• Reticulocytes increase (immature RBCs released to replace lost cells)\n• Mean arterial pressure, cardiac output, stroke volume, and capillary hydrostatic pressure all decrease initially\n\nThe increase in heart rate is the fastest compensatory mechanism for acute blood loss.',
        },
        {
          title: 'Blood Component Review: Plasma Proteins',
          body: 'Plasma contains three major protein groups:\n• Albumins — most abundant; maintain osmotic pressure\n• Fibrinogens — necessary for blood clotting (form fibrin mesh)\n• Immunoglobulins (globulins) — antibodies for immune defense\n\nLipoproteins transport lipids but are not the primary clotting proteins.',
        },
        {
          title: 'Hemoglobin & Oxygen Transport',
          body: 'Hemoglobin in erythrocytes can chemically attach to both oxygen AND carbon dioxide (not just oxygen alone). It does not bind nitrogen.\n• Oxyhemoglobin: Hb carrying O₂\n• Carbaminohemoglobin: Hb carrying CO₂ (on the globin portion)\n• Most CO₂ is transported as bicarbonate in plasma',
        },
        {
          title: 'Leukocyte Functions',
          body: 'White blood cells defend against pathogens — that is their primary function. Key cell types:\n• Monocytes → migrate to tissues and become macrophages\n• Neutrophils → most abundant WBC, first responders\n• Lymphocytes → produce antibodies (B cells) and cell-mediated immunity (T cells)\n• Basophils → release histamine and heparin\n• Eosinophils → fight parasites and modulate allergies',
        },
        {
          title: 'Hemostasis & Clotting Pathways',
          body: 'Hemostasis occurs in three main steps:\n1. Vascular spasm — injured vessel constricts\n2. Platelet plug formation — platelets adhere and aggregate\n3. Coagulation — clotting cascade forms fibrin mesh\n\nSerotonin is the molecule used for vasoconstriction in both inflammation and hemostasis.',
          table: {
            title: 'Clotting Pathways',
            headers: ['Pathway', 'Trigger', 'Key Factors'],
            rows: [
              ['Extrinsic', 'Tissue damage', 'Factor III (thromboplastin) + Factor VII + Ca²⁺'],
              ['Intrinsic', 'Vessel damage (contact)', 'Factors XII, XI, IX, VIII'],
              ['Common', 'Both pathways converge', 'Factor X → thrombin → fibrin'],
            ]
          }
        },
        {
          title: 'Common Pathway & Fibrin Formation',
          body: 'In the common pathway:\n1. Prothrombinase converts prothrombin → thrombin\n2. Thrombin converts fibrinogen → fibrin\n3. Fibrin forms the mesh that stabilizes the blood clot\n\nThe extrinsic pathway starts with thromboplastin (factor III) combining with factor VII and calcium.',
        },
        {
          title: 'Blood Types & Antigen-Antibody Rules',
          body: 'An individual with Type B, Rh-positive blood has:\n• B antigen and D (Rh) antigen on red blood cells\n• Can produce anti-A antibodies (against antigens they DON\'T have)\n• Answer: "B and D; A" — has B and D antigens, makes anti-A antibodies\n\nRemember: you make antibodies against the antigens you lack.',
        },
      ],
      keyTerms: [
        { term: 'Pulmonary edema', definition: 'Fluid accumulation in the lungs, typically from left-sided heart failure.' },
        { term: 'P wave', definition: 'ECG waveform representing atrial depolarization.' },
        { term: 'QRS complex', definition: 'ECG waveform representing ventricular depolarization.' },
        { term: 'Isovolumetric contraction', definition: 'Phase where all valves are closed and ventricular pressure builds rapidly.' },
        { term: 'Fibrinogen', definition: 'Plasma protein converted to fibrin by thrombin during clot formation.' },
        { term: 'Reticulocyte', definition: 'Immature red blood cell released from bone marrow, increases after blood loss.' },
        { term: 'Thromboplastin', definition: 'Tissue factor (Factor III) that initiates the extrinsic clotting pathway.' },
        { term: 'Serotonin', definition: 'Molecule released by platelets that causes vasoconstriction during hemostasis.' },
      ],
      memoryAids: [
        'Left failure = Lungs (L=L). Right failure = Rest of body (systemic edema).',
        'P-QRS-T = "Pee on the QRS TV" — Atria depolarize (P), Ventricles depolarize (QRS), Ventricles repolarize (T).',
        'Cardiac cycle order: "Late Atrial Iso-C Eject Iso-R" — LAIEI.',
        'Extrinsic = External tissue damage (factor III). Intrinsic = Internal vessel contact (factor XII starts it).',
        'Blood types: You make antibodies against what you DON\'T have.',
      ],
      inlineQuestions: [
        {
          question: 'Left side ventricular failure would result in:',
          options: { A: 'Systemic edema', B: 'Pulmonary edema', C: 'Increased systemic blood pressure', D: 'Decreased pulmonary blood pressure', E: 'More than one of the above' },
          answer: 'B',
          explanation: 'Left-sided failure causes blood to back up into the pulmonary circuit → pulmonary edema.'
        },
        {
          question: 'In an ECG, the P wave is generated when the:',
          options: { A: 'Ventricles depolarize', B: 'Atria repolarize', C: 'Atria depolarize', D: 'Purkinje fibers initiate an impulse', E: 'Ventricles repolarize' },
          answer: 'C',
          explanation: 'The P wave represents atrial depolarization (atrial contraction follows).'
        },
        {
          question: 'During ventricular contraction:',
          options: { A: 'Semilunar valves open and AV valves close', B: 'Only AV valves close', C: 'Only semilunar valves close', D: 'Only AV valves open', E: 'Semilunar valves close and AV valves open' },
          answer: 'A',
          explanation: 'Rising ventricular pressure closes AV valves and opens semilunar valves for ejection.'
        },
        {
          question: 'Plasma proteins necessary for blood clotting are the:',
          options: { A: 'Fibrinogens', B: 'Immunoglobulins', C: 'Lipoproteins', D: 'Albumins' },
          answer: 'A',
          explanation: 'Fibrinogen is converted to fibrin to form the clot mesh.'
        },
        {
          question: 'The hemoglobin found in erythrocytes is able to chemically attach to:',
          options: { A: 'Only nitrogen', B: 'Oxygen, carbon dioxide, and nitrogen', C: 'Only oxygen', D: 'Only carbon dioxide', E: 'Both oxygen and carbon dioxide' },
          answer: 'E',
          explanation: 'Hemoglobin binds O₂ (at iron) and CO₂ (at globin chains), but not nitrogen.'
        },
      ],
      quiz: [
        { question: 'If the absolute refractory period in cardiac muscle cells was the same as skeletal muscle cells:', options: { A: 'Tetanic contractions might stop the heart\'s pumping action', B: 'It would be less than 1-2 ms', C: 'Cardiac cells would take longer to respond to a second stimulation', D: 'Contractions would last as long as the refractory period' }, answer: 'A', explanation: 'A short refractory period would allow tetanic contractions, preventing proper filling.' },
        { question: 'The molecule used for vasoconstriction in inflammation and hemostasis is:', options: { A: 'Histamine', B: 'Serotonin', C: 'Heparin', D: 'Dopamine' }, answer: 'B', explanation: 'Serotonin (5-HT) released by platelets causes vasoconstriction.' },
        { question: 'Which clotting pathway begins with thromboplastin (factor III) combining with factor VII and calcium?', options: { A: 'The common pathway', B: 'The extrinsic pathway', C: 'The intrinsic pathway', D: 'All three pathways' }, answer: 'B', explanation: 'The extrinsic pathway is initiated by tissue damage releasing thromboplastin (factor III).' },
        { question: 'An individual has type B, Rh-positive blood. The individual has ________ antigen(s) and can produce anti-________ antibodies.', options: { A: 'B; A and D', B: 'A; B and D', C: 'D; A and B', D: 'A and D; B', E: 'B and D; A' }, answer: 'E', explanation: 'Type B Rh+ has B and D antigens; makes anti-A antibodies (against what they lack).' },
        { question: 'The monocyte is the leukocyte that migrates into tissues and becomes a:', options: { A: 'Macrophage', B: 'Mast cell', C: 'Neutrophil', D: 'Lymphocyte', E: 'Eosinophil' }, answer: 'A', explanation: 'Monocytes differentiate into macrophages when they leave the blood and enter tissues.' },
        { question: 'If there is a complete block between the SA and AV node, how is the ECG affected?', options: { A: 'The ventricles will stop beating', B: 'The QRS duration will be longer', C: 'The P-R interval will be shorter', D: 'There will be bigger P waves', E: 'The rate of P waves will be faster than QRS complexes' }, answer: 'E', explanation: 'In complete heart block, atria and ventricles beat independently — P waves are faster (SA rate) than QRS complexes (escape rhythm).' },
        { question: 'After donating blood, which would be increased compared to pre-donation?', options: { A: 'Heart rate', B: 'Mean arterial pressure', C: 'Cardiac output', D: 'Stroke volume', E: 'Capillary hydrostatic pressure' }, answer: 'A', explanation: 'Heart rate increases to compensate for lost blood volume and maintain cardiac output.' },
        { question: 'All of the following increase heart rate EXCEPT:', options: { A: 'Decreased blood pressure', B: 'Increased proprioceptor signals', C: 'Decreased pH', D: 'Decreased blood CO₂ levels', E: 'Decreased oxygen levels' }, answer: 'D', explanation: 'Decreased CO₂ = less need for gas exchange, so heart rate decreases (all others increase it).' },
        { question: 'Which cells produce antibodies?', options: { A: 'Monocytes', B: 'Lymphocytes', C: 'Neutrophils', D: 'Basophils' }, answer: 'B', explanation: 'B lymphocytes (plasma cells) produce antibodies.' },
        { question: 'Stroke volume is increased by:', options: { A: 'Negative inotropic agents', B: 'High arterial blood pressure', C: 'Increased afterload', D: 'Increased venous return', E: 'Dehydration' }, answer: 'D', explanation: 'Increased venous return stretches the ventricle (preload) → stronger contraction (Frank-Starling).' },
        { question: 'After blood donation, you would expect increased:', options: { A: 'Neutrophils', B: 'Erythrocytes', C: 'Lymphocytes', D: 'Platelets', E: 'Reticulocytes' }, answer: 'E', explanation: 'EPO stimulates release of immature RBCs (reticulocytes) to replace lost red cells.' },
        { question: 'The main function of leukocytes is to:', options: { A: 'Carry oxygen', B: 'Defend against pathogens', C: 'Carry carbon dioxide', D: 'Trigger allergies', E: 'Form clots' }, answer: 'B', explanation: 'The primary function of white blood cells is immune defense against pathogens.' },
        { question: 'Which are functions of the fibrous skeleton of the heart? (a) Separates atria/ventricles (b) Anchors valves (c) Electrical insulation (d) Prevents overstretching', options: { A: 'b, d', B: 'a, b, c', C: 'a, c, d', D: 'a, b, c, d', E: 'None' }, answer: 'D', explanation: 'All four are true functions of the fibrous skeleton.' },
        { question: 'Renin is released from the kidney and:', options: { A: 'Angiotensin I increases salt reabsorption', B: 'Angiotensin I is converted to angiotensin II', C: 'Angiotensinogen is converted to angiotensin I', D: 'Blood pressure goes down', E: 'Blood flow to kidneys decreases' }, answer: 'C', explanation: 'Renin converts angiotensinogen (from the liver) into angiotensin I.' },
      ],
      flashcards: [
        { front: 'Left ventricular failure leads to what type of edema?', back: 'Pulmonary edema — blood backs up into the lungs' },
        { front: 'What does the P wave represent?', back: 'Atrial depolarization' },
        { front: 'What happens during isovolumetric contraction?', back: 'All valves are closed, ventricular pressure builds rapidly' },
        { front: 'What is the order of the cardiac cycle phases?', back: '1. Late ventricular diastole → 2. Atrial contraction → 3. Isovolumetric contraction → 4. Ventricular ejection → 5. Isovolumetric relaxation' },
        { front: 'Why is the cardiac refractory period so long?', back: 'To prevent tetanic contractions that would stop the heart\'s pumping action' },
        { front: 'What increases heart rate? (4 things)', back: 'Decreased BP, increased proprioceptor signals, decreased pH, decreased O₂ levels' },
        { front: 'Which clotting pathway uses factor III + VII?', back: 'The extrinsic pathway (triggered by tissue damage)' },
        { front: 'Common pathway steps?', back: 'Prothrombinase → prothrombin to thrombin → fibrinogen to fibrin → clot mesh' },
        { front: 'What does serotonin do in hemostasis?', back: 'Causes vasoconstriction (released by activated platelets)' },
        { front: 'After blood donation, what rises first?', back: 'Heart rate (fastest compensatory mechanism), then reticulocytes' },
        { front: 'Type B, Rh+ blood: which antigens and antibodies?', back: 'Has B and D antigens; makes anti-A antibodies' },
        { front: 'Monocytes become what when they enter tissues?', back: 'Macrophages' },
      ],
    },

    // ═══════════════════════════════════════════════
    // SECTION 3 — Blood Vessels & Lymphatic Review
    // ═══════════════════════════════════════════════
    {
      id: 'review-s3',
      title: 'Blood Vessels & Lymphatic System',
      pageRange: 'Exam Review',
      learnItems: [
        {
          title: 'Artery Characteristics',
          body: 'All arteries carry blood AWAY from the heart. This is true regardless of oxygenation status — the pulmonary arteries carry deoxygenated blood.\n\nKey facts:\n• Not all arteries carry oxygenated blood\n• Not all arteries have valves (only veins have valves)\n• All arteries are lined with endothelium (not just large ones)\n• As blood moves away from the heart, individual vessel diameter decreases while total cross-sectional area increases.',
        },
        {
          title: 'Venous Return Mechanisms',
          body: 'Blood returns to the heart through veins aided by several mechanisms:\n• Skeletal muscle pump — contracting muscles squeeze veins\n• Thoracic (respiratory) pump — breathing creates pressure gradients\n• Arterial pulsations — compress adjacent veins\n• Rhythmic contractions of lymphatic vessels\n• Venous valves — prevent backflow\n\nThere is NO "lymphatic node pump" — this is a made-up answer. Jogging increases venous return due to increased skeletal muscular pump activity.',
        },
        {
          title: 'Capillary Exchange & Starling Forces',
          body: 'At the capillary level, fluid movement depends on hydrostatic and osmotic pressures:\n• Arterial end: blood hydrostatic pressure (BHP) > blood colloid osmotic pressure (BCOP) → filtration\n• Venous end: BCOP > BHP → reabsorption\n\nThe most important force driving reabsorption at the venous end is blood colloid osmotic pressure (oncotic pressure) — the "pull" of plasma proteins.',
        },
        {
          title: 'Edema Formation',
          body: 'Edema (excess interstitial fluid) can occur when:\n• Endothelial permeability goes up (inflammation)\n• Capillary hydrostatic pressure is elevated (heart failure)\n• Plasma protein concentration is reduced (liver disease, malnutrition)\n• Blood pressure is high\n\nAll of these can cause edema — the answer is "all of the above."',
        },
        {
          title: 'Blood Pressure Regulation',
          body: 'Normal blood pressure regulation involves multiple factors:\n• Vasoconstriction raises BP; vasodilation lowers it\n• Powerful vasoconstrictors: norepinephrine and angiotensin II\n• Histamine causes vasodilation → decreases BP (bee sting → massive histamine → vasodilation → BP drops)\n\nHypertension is commonly defined as chronic resting BP higher than 140/90 mmHg.',
        },
        {
          title: 'Lymphatic System Overview',
          body: 'Lymph flow is driven by:\n• Skeletal muscle pump\n• Thoracic pump\n• Arterial pulsations squeezing lymphatic vessels\n• Rhythmic contractions of lymphatic vessels themselves\n\nThere is NO "lymphatic node pump." Tonsils are collections of very large lymph nodes responsible for capturing pathogens entering via the respiratory system.',
        },
        {
          title: 'Immune Cell Migration to Infection',
          body: 'When pathogens invade, immune cells follow a specific sequence to reach the site:',
          table: {
            title: 'Steps of Immune Cell Movement',
            headers: ['Step', 'Process', 'Description'],
            rows: [
              ['1', 'Chemotaxis', 'Cells move toward chemical signals (chemical gradient)'],
              ['2', 'Adhesion (CAM binding)', 'Leukocytes stick to capillary walls using cell adhesion molecules'],
              ['3', 'Diapedesis', 'Cells squeeze between endothelial cells to exit the blood'],
              ['4', 'Phagocytosis', 'Cells engulf and destroy pathogens'],
            ]
          }
        },
        {
          title: 'Inflammation: First Responders',
          body: 'Neutrophils are the FIRST leukocytes to arrive at an inflamed site. They are the most abundant WBC and the primary phagocytes of acute inflammation.\n\nThe order of arrival: Neutrophils → Monocytes/Macrophages → Lymphocytes.',
        },
        {
          title: 'Complement System Activation',
          body: 'The classic pathway of complement activation:\n1. A pathogen enters the body\n2. Antibodies (usually IgG or IgM) bind to the pathogen\'s antigen\n3. Complement protein C1 binds to the antibody-antigen complex\n4. This triggers a cascade activating other complement proteins\n\nKey: The classic pathway begins when C1 binds to an antibody attached to an antigen.',
        },
        {
          title: 'MHC Molecules & Antigen Presentation',
          body: 'Two classes of major histocompatibility complex (MHC) molecules:\n• MHC Class I — found on ALL nucleated body cells; present intracellular antigens to CD8+ cytotoxic T cells\n• MHC Class II — found ONLY on antigen-presenting cells (APCs) and lymphocytes; present extracellular antigens to CD4+ helper T cells\n\nNOT found on: RBCs (no nucleus), granulocytes alone, or liver cells.',
        },
        {
          title: 'Immunoglobulins (Antibody Classes)',
          body: 'Five classes of immunoglobulins with distinct roles:',
          table: {
            title: 'Immunoglobulin Classes',
            headers: ['Ig Class', 'Key Role', 'Special Features'],
            rows: [
              ['IgM', 'First antibody in primary infection', 'Pentamer; fastest initial response'],
              ['IgG', 'Most abundant; long-term immunity', 'Secondary response; crosses placenta'],
              ['IgA', 'Secretory immunity', 'Found in saliva, tears, breast milk; dimer'],
              ['IgE', 'Allergic reactions', 'Binds mast cells; mediates anaphylaxis'],
              ['IgD', 'B-cell activation', 'Surface receptor on naive B cells'],
            ]
          }
        },
        {
          title: 'T Cell Maturation & NK Cells',
          body: 'Stem cells that will form T cells gain immunocompetence in the thymus (not the spleen, liver, or kidneys).\n\nNK (Natural Killer) cells and cytotoxic T cells destroy target cells using perforins — proteins that punch holes in cell membranes. They do NOT use phagocytosis or complement directly.',
        },
        {
          title: 'Hypersensitivity Reactions',
          body: 'Four types of hypersensitivity, each with different mechanisms:',
          table: {
            title: 'Hypersensitivity Types (ACID)',
            headers: ['Type', 'Name', 'Mechanism', 'Example'],
            rows: [
              ['I', 'Acute (Allergic)', 'IgE-mediated, mast cell degranulation', 'Anaphylaxis, hay fever'],
              ['II', 'Cytotoxic (Antibody-dependent)', 'Antibodies attack cells directly', 'Hemolytic anemia, transfusion reactions'],
              ['III', 'Immune complex', 'Antigen-antibody complex deposition', 'Lupus, serum sickness'],
              ['IV', 'Delayed (T-cell mediated)', 'T cells attack self cells', 'Type 1 diabetes, contact dermatitis'],
            ]
          }
        },
        {
          title: 'Immunity Types & Antibody Actions',
          body: 'Immunity from antibodies crossing the placenta is natural passive immunity (mother → fetus, no active immune response by the baby).\n\nAgglutination is when antibodies tie together (cross-link) cells identified as non-self, clumping them for easier removal. This is different from opsonization (coating for phagocytosis) and diapedesis (cell migration through vessel walls).',
        },
      ],
      keyTerms: [
        { term: 'Chemotaxis', definition: 'Movement of cells along a chemical gradient toward a site of infection.' },
        { term: 'Diapedesis', definition: 'Process by which leukocytes squeeze between endothelial cells to exit blood vessels.' },
        { term: 'Oncotic pressure', definition: 'Colloid osmotic pressure exerted by plasma proteins; drives reabsorption at capillary venous end.' },
        { term: 'Perforins', definition: 'Proteins released by NK cells and cytotoxic T cells that create pores in target cell membranes.' },
        { term: 'Agglutination', definition: 'Antibody-mediated clumping of cells identified as non-self.' },
        { term: 'Natural passive immunity', definition: 'Immunity from antibodies transferred from mother to fetus via placenta or breast milk.' },
        { term: 'MHC Class II', definition: 'Molecules found only on APCs and lymphocytes that present antigens to helper T cells.' },
        { term: 'Classic complement pathway', definition: 'Complement activation triggered when C1 binds to an antibody-antigen complex.' },
      ],
      memoryAids: [
        'GAMED for immunoglobulin order of abundance in blood: IgG > IgA > IgM > IgE > IgD.',
        'Hypersensitivity types = ACID: Allergic, Cytotoxic, Immune complex, Delayed.',
        'Immune cell arrival: "Never Make Lunch" = Neutrophils first, Monocytes second, Lymphocytes third.',
        'Natural passive immunity = "Naturally Passed" from mom to baby (antibodies cross the placenta).',
        'Vasoconstriction power pair: NE (norepinephrine) and Angiotensin II.',
      ],
      inlineQuestions: [
        {
          question: 'Which statement best describes arteries?',
          options: { A: 'All contain valves to prevent backflow', B: 'All carry blood away from the heart', C: 'Only large arteries are lined with endothelium', D: 'All carry oxygenated blood away from the heart' },
          answer: 'B',
          explanation: 'Arteries carry blood AWAY from the heart, regardless of oxygen content (e.g., pulmonary arteries carry deoxygenated blood).'
        },
        {
          question: 'What is the most important force driving reabsorption at the venous end of a capillary?',
          options: { A: 'Oncotic pressure', B: 'Blood hydrostatic pressure', C: 'Tissue fluid colloid osmotic pressure', D: 'Blood colloid osmotic pressure', E: 'Interstitial hydrostatic pressure' },
          answer: 'D',
          explanation: 'Blood colloid osmotic pressure (BCOP) from plasma proteins is the main force pulling fluid back into capillaries.'
        },
        {
          question: 'Stem cells that will form T cells gain immunocompetence in the:',
          options: { A: 'Kidneys', B: 'Liver', C: 'Thymus', D: 'Spleen', E: 'Thyroid' },
          answer: 'C',
          explanation: 'T cells mature and gain immunocompetence in the Thymus (T = Thymus).'
        },
        {
          question: 'The classic pathway of complement activation begins when C1 binds to:',
          options: { A: 'An antibody attached to an antigen', B: 'The plasma membrane of bacteria', C: 'The cell wall of bacteria', D: 'A plasma protein', E: 'A cell surface antigen' },
          answer: 'A',
          explanation: 'In the classic pathway, C1 binds to the Fc portion of an antibody that is already attached to an antigen.'
        },
        {
          question: 'Which leukocytes are the first to arrive at an inflamed site?',
          options: { A: 'B lymphocytes', B: 'T lymphocytes', C: 'Monocytes', D: 'Neutrophils' },
          answer: 'D',
          explanation: 'Neutrophils are the fastest responders and most abundant WBC at acute inflammation sites.'
        },
      ],
      quiz: [
        { question: 'As blood moves away from the heart:', options: { A: 'Individual vessel diameter increases', B: 'Blood volume decreases', C: 'Resistance to flow decreases', D: 'Pressure increases', E: 'None of the above' }, answer: 'E', explanation: 'As blood moves away from the heart, individual vessel diameter decreases, total cross-sectional area increases, and pressure decreases.' },
        { question: 'How is venous return affected when you go for an easy jog?', options: { A: 'Increased due to decreased muscle pump', B: 'Decreased due to increased muscle pump', C: 'Increased due to increased skeletal muscle pump', D: 'Decreased due to decreased muscle pump' }, answer: 'C', explanation: 'Jogging activates the skeletal muscle pump, squeezing veins to push blood back to the heart.' },
        { question: 'Immunoglobulins that respond fastest to an initial infection with no change in secondary infections are:', options: { A: 'IgA', B: 'IgD', C: 'IgE', D: 'IgG', E: 'IgM' }, answer: 'E', explanation: 'IgM is the first antibody produced (pentamer). IgG increases in secondary responses; IgM does not.' },
        { question: 'Class II MHC molecules are found only on:', options: { A: 'Granulocytes and microphages', B: 'Liver cells and splenic macrophages', C: 'Red blood cells', D: 'All nucleated body cells', E: 'Lymphocytes and antigen-presenting cells' }, answer: 'E', explanation: 'MHC Class II is restricted to APCs (dendritic cells, macrophages) and lymphocytes.' },
        { question: 'Which of the following are powerful vasoconstrictors?', options: { A: 'Norepinephrine and angiotensin II', B: 'Norepinephrine and natriuretic peptides', C: 'Epinephrine and ADH', D: 'Norepinephrine and ADH', E: 'Epinephrine and aldosterone' }, answer: 'A', explanation: 'Norepinephrine and angiotensin II are the two most powerful vasoconstrictors.' },
        { question: 'Hypertension is commonly defined as chronic resting BP higher than:', options: { A: '130/60', B: '120/75', C: '200/90', D: '140/90', E: '180/90' }, answer: 'D', explanation: 'Standard hypertension threshold is ≥140/90 mmHg (stage 2 in modern guidelines).' },
        { question: 'A massive release of histamine from a bee sting causes ________ and a(n) ________ in arterial BP.', options: { A: 'Vasodilation; increase', B: 'Vasoconstriction; increase', C: 'Vasoconstriction; decrease', D: 'Vasoconstriction; oscillation', E: 'Vasodilation; decrease' }, answer: 'E', explanation: 'Histamine → vasodilation → decreased peripheral resistance → decreased blood pressure.' },
        { question: 'Autoimmune responses activating macrophages and cytotoxic T cells to attack self cells (e.g., type 1 DM) are the result of:', options: { A: 'Autoimmune diseases', B: 'Type III hypersensitivity', C: 'Type IV (delayed) hypersensitivity', D: 'Type I (acute) hypersensitivity', E: 'Type II (cytotoxic) hypersensitivity' }, answer: 'C', explanation: 'Type IV (delayed) hypersensitivity is T-cell mediated — examples include contact dermatitis and type 1 DM destruction of beta cells.' },
        { question: 'Some antibodies tie together cells identified as non-self. This is termed:', options: { A: 'Agglutination', B: 'Diapedesis', C: 'Opsonization', D: 'Pavementing' }, answer: 'A', explanation: 'Agglutination = antibody-mediated cross-linking and clumping of foreign cells.' },
        { question: 'Immunity from antibodies crossing the placenta is called ________ immunity.', options: { A: 'Natural active', B: 'Auto', C: 'Artificial active', D: 'Artificial passive', E: 'Natural passive' }, answer: 'E', explanation: 'Maternal antibodies naturally passed to fetus = natural passive immunity.' },
        { question: 'NK and cytotoxic T cells destroy cells using:', options: { A: 'Phagocytosis', B: 'Lysozymes', C: 'Complement', D: 'Perforins', E: 'Respiratory burst' }, answer: 'D', explanation: 'Perforins create pores in target cell membranes, leading to cell lysis.' },
        { question: 'Edema may occur when:', options: { A: 'Endothelial permeability goes up', B: 'Capillary hydrostatic pressure is elevated', C: 'Plasma protein concentration is reduced', D: 'Blood pressure is high', E: 'All of the answers are correct' }, answer: 'E', explanation: 'All of these mechanisms can increase fluid filtration or decrease reabsorption → edema.' },
        { question: 'Which of the following forces does NOT help lymph flow?', options: { A: 'Arterial pulsations', B: 'Skeletal muscle pump', C: 'Lymphatic node pump', D: 'Rhythmic contractions of lymphatic vessels', E: 'Thoracic pump' }, answer: 'C', explanation: 'There is no "lymphatic node pump" — the other four mechanisms are all real.' },
        { question: 'Chemotaxis is the process by which:', options: { A: 'Chemical messengers stimulate pain', B: 'CAMs on leukocytes adhere to capillary walls', C: 'Cells exit blood by squeezing through vessel walls', D: 'Cells migrate along chemical gradients' }, answer: 'D', explanation: 'Chemotaxis = cell movement along a chemical gradient toward a signal source.' },
      ],
      flashcards: [
        { front: 'What defines an artery?', back: 'It carries blood AWAY from the heart (regardless of O₂ content)' },
        { front: 'What drives reabsorption at the venous end of capillaries?', back: 'Blood colloid osmotic pressure (BCOP) — the pull of plasma proteins' },
        { front: 'Where do T cells mature?', back: 'The thymus (T = Thymus)' },
        { front: 'Which antibody class responds first to a new infection?', back: 'IgM — a pentamer that is the first responder' },
        { front: 'What are the 4 steps of immune cell migration?', back: '1. Chemotaxis 2. Adhesion (CAM binding) 3. Diapedesis 4. Phagocytosis' },
        { front: 'What are the 4 types of hypersensitivity (ACID)?', back: 'I-Allergic (IgE), II-Cytotoxic (antibody), III-Immune complex, IV-Delayed (T-cell)' },
        { front: 'What is natural passive immunity?', back: 'Immunity from maternal antibodies crossing the placenta or in breast milk' },
        { front: 'How do NK cells and cytotoxic T cells kill?', back: 'Using perforins — proteins that punch holes in target cell membranes' },
        { front: 'What is agglutination?', back: 'Antibody-mediated cross-linking that clumps non-self cells together' },
        { front: 'What is the hypertension threshold?', back: '≥140/90 mmHg (chronic resting blood pressure)' },
        { front: 'What causes edema? (4 factors)', back: 'Increased endothelial permeability, high capillary hydrostatic pressure, low plasma proteins, high blood pressure' },
        { front: 'MHC Class I vs Class II?', back: 'Class I: all nucleated cells (→ CD8 T cells). Class II: APCs & lymphocytes only (→ CD4 T cells)' },
      ],
    },

    // ═══════════════════════════════════════════════
    // SECTION 4 — The Brain Review
    // ═══════════════════════════════════════════════
    {
      id: 'review-s4',
      title: 'The Brain',
      pageRange: 'Exam Review',
      learnItems: [
        {
          title: 'Brain Regions & Vital Centers',
          body: 'Autonomic centers controlling blood pressure, heart rate, and vomiting are located in the medulla oblongata (not the cerebellum, pons, or diencephalon).\n\nThe hypothalamus controls:\n• The autonomic nervous system\n• Body temperature regulation\n• Thirst\n• The endocrine system\n\nThe hypothalamus does NOT produce melatonin — that\'s the pineal gland.',
        },
        {
          title: 'Cerebrospinal Fluid (CSF)',
          body: 'Key facts about CSF:\n• Produced by the choroid plexus (NOT by arachnoid villi)\n• Circulates in the subarachnoid space (NOT the subdural space)\n• Returns to blood via arachnoid villi/granulations\n• Provides buoyancy, protection, and nutrient/waste transport\n\nCSF is NOT "the primary delivery mode for nutrients to neurons" — that role belongs to blood capillaries. Lumbar puncture extracts CSF from the subarachnoid space.',
        },
        {
          title: 'Cerebral Cortex: Lobes & Functions',
          body: 'Each lobe of the cerebrum has specialized functions:\n• Frontal lobe: motor cortex, Broca\'s area (speech production), prefrontal cortex (planning, personality)\n• Parietal lobe: somatosensory cortex (post-central gyrus)\n• Temporal lobe: auditory cortex, Wernicke\'s area (language comprehension)\n• Occipital lobe: visual cortex\n• Insula: hidden lobe deep within lateral sulcus\n\nCortical regions that interpret sensory information and relate to sensory memory are called association areas.',
        },
        {
          title: 'Corpus Callosum & Split Brain',
          body: 'The corpus callosum is the major commissure connecting the left and right hemispheres. If it is cut (split-brain surgery for seizures):\n• A patient cannot verbally identify an object placed in their LEFT hand\n• Left hand → right hemisphere (non-verbal) → cannot communicate with left hemisphere\'s language centers\n• They can still speak, recognize written words, move their left arm, and touch their nose.',
        },
        {
          title: 'Language Areas: Broca\'s & Wernicke\'s',
          body: 'Two critical language areas in the brain:\n• Broca\'s area (left frontal lobe): speech production. Damage → nonfluent/expressive aphasia (can understand but can\'t speak fluently)\n• Wernicke\'s area (left temporal lobe): speech comprehension. Damage → fluent/receptive aphasia (speaks fluently but words make no sense)\n\nDamage to the area corresponding to Broca\'s (in the RIGHT hemisphere) may impair interpretation of tonal qualities of a person\'s voice.',
        },
        {
          title: 'Reading a Poem Aloud: Cortical Pathway',
          body: 'The proper cortical sequence for reading a poem aloud:\n1. Visual cortex (6) — see the text\n2. Visual association area (1) — recognize the letters/words\n3. Wernicke\'s area (5) — comprehend meaning\n4. Broca\'s area (3) — formulate speech\n5. Premotor area (2) — plan motor movements\n6. Primary motor area (4) — execute mouth/tongue movements\n\nCorrect sequence: 6, 1, 5, 3, 2, 4',
        },
        {
          title: 'Cranial Nerves: Origins',
          body: 'Cranial nerves and their brainstem origins. The pons gives rise to:\n• CN V (Trigeminal)\n• CN VI (Abducens)\n• CN VII (Facial)\n• CN VIII (Vestibulocochlear)\n\nCN IV (Trochlear) does NOT originate in the pons — it originates in the midbrain (mesencephalon). It\'s the only CN that exits from the dorsal brainstem.',
        },
        {
          title: 'Oculomotor Nerve (CN III)',
          body: 'CN III (Oculomotor) controls most eye muscles:\n• Superior rectus, inferior rectus, medial rectus, inferior oblique\n• Also controls pupil constriction and lens accommodation\n\nThe lateral rectus is NOT controlled by CN III — it\'s controlled by CN VI (Abducens). Remember: LR₆SO₄ (Lateral Rectus = CN VI, Superior Oblique = CN IV).',
        },
        {
          title: 'Limbic System: Emotion & Memory',
          body: 'The limbic system structures handle emotion and memory:\n• Amygdala: emotional association with memories. Damage → dissociation of memories from emotional content\n• Hippocampus: memory consolidation (short-term → long-term). Damage + emotional conditioning → negative emotional response to associated stimuli (e.g., tequila after alcohol poisoning)\n• Habenular nuclei: part of the epithalamus, involved in emotional responses to odors',
        },
        {
          title: 'Cerebellum',
          body: 'The cerebellum coordinates movement, balance, and muscle tone. Damage produces characteristic signs:\n• Inability to maintain balance while walking\n• Uncoordinated voluntary movements (ataxia)\n• Decreased skeletal muscle tone (hypotonia)\n• Normal intelligence (cerebellum doesn\'t process cognition)\n\nIf a patient can start movements but they\'re uncoordinated, with poor balance and low muscle tone but normal intellect — think cerebellum.',
        },
        {
          title: 'Glial Cells & Astrocytes',
          body: 'Astrocytes are the most abundant glial cells in the CNS. Their functions include:\n• Maintaining the blood-brain barrier\n• Buffering potassium (K⁺) levels in the extracellular fluid\n• Metabolizing excess neurotransmitters\n• Providing structural support\n\nAstrocytes do NOT conduct action potentials — only neurons do that.',
        },
        {
          title: 'Sleep Stages & Brain Waves',
          body: 'Brain wave patterns change through sleep stages:',
          table: {
            title: 'Sleep Stages & Brain Waves',
            headers: ['State/Stage', 'Brain Wave', 'Key Features'],
            rows: [
              ['Awake, alert', 'Beta waves', 'High frequency, low amplitude'],
              ['Relaxed, pre-sleep', 'Alpha waves', 'Slower, eyes closed'],
              ['Stage 1-2', 'Theta waves', 'Light sleep, sleep spindles (stage 2)'],
              ['Stage 3-4', 'Delta waves', 'Deep sleep; sleepwalking occurs here'],
              ['REM sleep', 'Beta waves', 'Dreaming, nightmares, muscle atonia'],
            ]
          }
        },
        {
          title: 'RAS & Adenosine',
          body: 'The Reticular Activating System (RAS) maintains wakefulness and alertness. The RAS decreases activity when adenosine binds to it.\n\nAdenosine accumulates during wakefulness and promotes sleepiness. Caffeine blocks adenosine receptors, preventing this decrease in RAS activity — that\'s why coffee keeps you awake!',
        },
        {
          title: 'Fluent Aphasia & Special Cases',
          body: 'Fluent aphasia (Wernicke\'s aphasia) is most often associated with damage to Wernicke\'s area — but "none of the above" may be the test answer if the options list only: median forebrain, hippocampus, cingulate gyrus, caudate nucleus.\n\nKey aphasia types:\n• Nonfluent (Broca\'s): can\'t speak properly but understands\n• Fluent (Wernicke\'s): speaks fluently but nonsensically\n• Global: both production and comprehension impaired',
        },
      ],
      keyTerms: [
        { term: 'Medulla oblongata', definition: 'Brainstem region containing vital autonomic centers (HR, BP, breathing, vomiting).' },
        { term: 'Choroid plexus', definition: 'Specialized tissue in brain ventricles that produces cerebrospinal fluid.' },
        { term: 'Broca\'s area', definition: 'Left frontal lobe region controlling speech production; damage causes nonfluent aphasia.' },
        { term: 'Wernicke\'s area', definition: 'Left temporal lobe region for language comprehension; damage causes fluent aphasia.' },
        { term: 'Amygdala', definition: 'Limbic structure that associates memories with emotions.' },
        { term: 'Association areas', definition: 'Cortical regions that interpret sensory information and relate to sensory memory.' },
        { term: 'Adenosine', definition: 'Molecule that decreases RAS activity, promoting sleepiness; blocked by caffeine.' },
        { term: 'Corpus callosum', definition: 'Major commissure connecting the two cerebral hemispheres.' },
      ],
      memoryAids: [
        'LR₆SO₄: Lateral Rectus = CN VI, Superior Oblique = CN IV. Everything else = CN III.',
        'CSF path: Choroid plexus → ventricles → subarachnoid space → arachnoid villi → venous blood.',
        'Cerebellum damage = "Drunk person symptoms" — uncoordinated, poor balance, low muscle tone, but still smart.',
        'Reading aloud sequence: "See it, Know it, Get it, Say it, Plan it, Do it" = Visual cortex → Visual association → Wernicke\'s → Broca\'s → Premotor → Motor.',
        'Sleep waves go BATBD: Beta (awake) → Alpha (relaxed) → Theta (light sleep) → Delta (deep sleep) → Beta again (REM/dreams).',
      ],
      inlineQuestions: [
        {
          question: 'Autonomic centers that control blood pressure, heart rate, and vomiting are located in the:',
          options: { A: 'Diencephalon', B: 'Cerebellum', C: 'Medulla oblongata', D: 'Mesencephalon', E: 'Pons' },
          answer: 'C',
          explanation: 'The medulla oblongata in the brainstem houses vital autonomic centers.'
        },
        {
          question: 'The visual cortex is located in the:',
          options: { A: 'Temporal lobe', B: 'Parietal lobe', C: 'Insula', D: 'Occipital lobe', E: 'Frontal lobe' },
          answer: 'D',
          explanation: 'The visual cortex (primary visual area) is in the occipital lobe.'
        },
        {
          question: 'After cutting the corpus callosum, a patient would likely be unable to:',
          options: { A: 'Verbally identify an object in their left hand', B: 'Touch their nose with eyes closed', C: 'Speak', D: 'Recognize written words', E: 'Move their left arm' },
          answer: 'A',
          explanation: 'Left hand input goes to right hemisphere, which cannot communicate with the left hemisphere\'s language centers.'
        },
        {
          question: 'Functions of astrocytes include all of the following EXCEPT:',
          options: { A: 'Maintaining the blood-brain barrier', B: 'Conducting action potentials', C: 'Buffering potassium levels', D: 'Metabolizing excess neurotransmitters', E: 'More than one of the above' },
          answer: 'B',
          explanation: 'Astrocytes do NOT conduct action potentials — that\'s a neuron function.'
        },
        {
          question: 'The RAS decreases activity by binding to:',
          options: { A: 'Guanine', B: 'Thymine', C: 'Adenosine', D: 'Cysteine', E: 'Uracil' },
          answer: 'C',
          explanation: 'Adenosine accumulates during wakefulness and decreases RAS activity, promoting sleep.'
        },
      ],
      quiz: [
        { question: 'Sleepwalking may occur in which stage of sleep?', options: { A: 'Stage four with theta waves', B: 'Stage three with theta waves', C: 'Stage one with beta waves', D: 'Stage one with alpha waves', E: 'None of the above' }, answer: 'E', explanation: 'Sleepwalking occurs in deep sleep (stages 3-4) with DELTA waves, not theta waves.' },
        { question: 'Cerebrospinal fluid:', options: { A: 'Is produced by the arachnoid villi', B: 'Circulates in the subdural space', C: 'Returns to circulation via villi in the pia mater', D: 'Is the primary nutrient delivery mode for neurons', E: 'None of the above' }, answer: 'E', explanation: 'All listed options are false. CSF is produced by the choroid plexus, circulates in the subarachnoid space, and returns via arachnoid villi.' },
        { question: 'Terry has dissociation of memories from emotional content after a car accident. What\'s damaged?', options: { A: 'Putamen', B: 'Amygdala', C: 'General interpretive area', D: 'Thalamus', E: 'Prefrontal lobe' }, answer: 'B', explanation: 'The amygdala associates emotions with memories — damage dissociates them.' },
        { question: 'Cortical regions interpreting sensory information related to sensory memory are called ________ areas.', options: { A: 'Somesthetic', B: 'Commissural', C: 'Sensory', D: 'Processing', E: 'Association' }, answer: 'E', explanation: 'Association areas integrate and interpret sensory information.' },
        { question: 'After cutting the corpus callosum, a patient would likely be unable to:', options: { A: 'Verbally identify an object in their left hand', B: 'Touch their nose with eyes closed', C: 'Speak', D: 'Recognize written words', E: 'Move their left arm' }, answer: 'A', explanation: 'Left hand input goes to right hemisphere, which cannot communicate with the left hemisphere\'s language centers.' },
        { question: 'Damage to the right-hemisphere area corresponding to Broca\'s may cause inability to:', options: { A: 'Interpret tonal qualities of voice', B: 'Understand words they read', C: 'Interpret facial expressions', D: 'Understand words they hear', E: 'None of the above' }, answer: 'A', explanation: 'The right-hemisphere homologue of Broca\'s area processes prosody (tonal qualities of speech).' },
        { question: 'Which cranial nerve does NOT originate in the pons?', options: { A: 'VIII', B: 'VI', C: 'VII', D: 'V', E: 'IV' }, answer: 'E', explanation: 'CN IV (Trochlear) originates in the midbrain, not the pons.' },
        { question: 'Preparing to sleep, which brain waves would you observe?', options: { A: 'Theta', B: 'Alpha', C: 'Gamma', D: 'Beta', E: 'Delta' }, answer: 'B', explanation: 'Alpha waves appear when relaxed with eyes closed, just before falling asleep.' },
        { question: 'Nightmares with beta waves occur during which sleep stage?', options: { A: 'Stage 4, beta', B: 'REM, beta', C: 'Stage 3, theta', D: 'Stage 3, delta', E: 'None of the above' }, answer: 'B', explanation: 'Nightmares occur during REM sleep, which exhibits beta wave patterns.' },
        { question: 'All of the following are true of the hypothalamus EXCEPT:', options: { A: 'Controls the ANS', B: 'Regulates body temperature', C: 'Regulates thirst', D: 'Produces melatonin', E: 'Controls the endocrine system' }, answer: 'D', explanation: 'Melatonin is produced by the pineal gland, not the hypothalamus.' },
        { question: 'The oculomotor nerve (CN III) does NOT control the:', options: { A: 'Inferior rectus', B: 'Lateral rectus', C: 'Superior rectus', D: 'Inferior oblique', E: 'Medial rectus' }, answer: 'B', explanation: 'The lateral rectus is controlled by CN VI (Abducens), not CN III. LR₆SO₄.' },
        { question: 'Mikalia has poor balance, uncoordinated movements, decreased muscle tone, but normal intelligence. What is damaged?', options: { A: 'Post-central gyrus', B: 'Cerebellum', C: 'Corpus callosum', D: 'Brainstem', E: 'Occipital lobe' }, answer: 'B', explanation: 'Cerebellar damage = ataxia, poor balance, hypotonia, but intact cognition.' },
        { question: 'CSF samples for analysis are extracted from the:', options: { A: 'Epidural space', B: 'Arachnoid mater', C: 'Cerebral ventricles', D: 'Subarachnoid space', E: 'Dura mater' }, answer: 'D', explanation: 'Lumbar puncture draws CSF from the subarachnoid space.' },
        { question: 'Proper sequence for reading a poem aloud: (1) visual assoc. (2) premotor (3) Broca\'s (4) primary motor (5) Wernicke\'s (6) visual cortex', options: { A: '1,2,4,5,6,3', B: '1,6,5,3,4,2', C: '5,4,3,6,1,2', D: '6,1,5,3,2,4', E: '6,1,3,5,4,2' }, answer: 'D', explanation: 'See→Recognize→Comprehend→Speak→Plan→Move = 6,1,5,3,2,4.' },
      ],
      flashcards: [
        { front: 'Where are autonomic centers for HR, BP, and vomiting?', back: 'Medulla oblongata' },
        { front: 'What produces CSF?', back: 'Choroid plexus (returns via arachnoid villi)' },
        { front: 'Broca\'s area damage causes what type of aphasia?', back: 'Nonfluent (expressive) aphasia — understands but can\'t produce speech fluently' },
        { front: 'What does the amygdala do?', back: 'Associates emotions with memories; damage → emotional dissociation' },
        { front: 'What happens after corpus callosum is cut?', back: 'Can\'t verbally identify objects in left hand (right hemisphere can\'t talk to left)' },
        { front: 'What chemical decreases RAS activity?', back: 'Adenosine (caffeine blocks it)' },
        { front: 'What brain waves during REM sleep?', back: 'Beta waves (same as awake; nightmares/dreaming occur here)' },
        { front: 'LR₆SO₄ means what?', back: 'Lateral Rectus = CN VI, Superior Oblique = CN IV; all other eye muscles = CN III' },
        { front: 'Cerebellum damage symptoms?', back: 'Poor balance, ataxia, hypotonia, but normal intelligence' },
        { front: 'Hypothalamus does NOT produce what?', back: 'Melatonin (that\'s the pineal gland)' },
        { front: 'What waves appear when relaxing before sleep?', back: 'Alpha waves (transition to theta in light sleep)' },
        { front: 'Reading aloud cortical sequence?', back: 'Visual cortex → Visual assoc. → Wernicke\'s → Broca\'s → Premotor → Primary motor' },
      ],
    },

    // ═══════════════════════════════════════════════
    // SECTION 5 — The Senses Review
    // ═══════════════════════════════════════════════
    {
      id: 'review-s5',
      title: 'The Senses',
      pageRange: 'Exam Review',
      learnItems: [
        {
          title: 'Receptor Classifications',
          body: 'Sensory receptors can be classified by structure:\n• Free dendritic endings — detect pain, temperature, crude touch\n• Encapsulated endings — ONLY mechanoreceptors (pressure, vibration, stretch)\n• Special receptor cells — specialized for vision, hearing, taste, smell\n\nNociceptors are free nerve endings that specialize in pain sensation.',
        },
        {
          title: 'Receptor Types by Location',
          body: 'Receptors are also classified by what they detect:\n• Exteroceptors — external stimuli (environment)\n• Interoceptors — internal stimuli (blood pressure, blood chemistry)\n• Proprioceptors — body position, limb movement, joint angles\n• Somatoceptors — touch, pressure, temperature on the body surface\n• Nociceptors — pain specifically\n\nWhile bouncing down a hill, nociceptors are the ones "holding your attention" — pain demands priority processing!',
        },
        {
          title: 'Adaptation & Sensory Processing',
          body: 'Decreased sensitivity to a continued stimulus is called adaptation (not boredom!).\n\nOlfaction (smell) has special properties:\n• Adapts RAPIDLY (watch out: "adapts slowly" is the FALSE statement on tests)\n• Uses synthetic integration (combining multiple receptors into one perception)\n• Has neuronal replacement (olfactory neurons regenerate)\n• May involve pain (trigeminal nerve responds to irritants)\n\nWatch for: "adapts slowly" is the FALSE statement about olfaction.',
        },
        {
          title: 'Taste (Gustation)',
          body: 'Taste involves multiple receptor types:\n• Chemoreceptors — detect dissolved chemicals (primary)\n• Nociceptors — detect spicy/painful flavors (capsaicin)\n• Thermoreceptors — detect temperature of food\n• Mechanoreceptors — detect texture\n\nThe five taste modalities: sweet, sour, salty, bitter, and umami.\nSalty taste is triggered by monovalent metallic cations (like Na⁺).\nAll receptor types (chemo, noci, thermo, mechano) play a role in taste perception.',
        },
        {
          title: 'Proprioceptors & Mechanoreceptors',
          body: 'Key encapsulated receptors and their functions:\n• Meissner\'s corpuscle — light touch (NOT a proprioceptor)\n• Pacinian corpuscle — deep pressure and vibration (proprioceptor)\n• Ruffini\'s corpuscle — stretch and sustained pressure (proprioceptor)\n• End bulbs of Krause — uncertain function (NOT a proprioceptor per some sources)\n\nMeissner\'s corpuscle would NOT function as a proprioceptor — it\'s for discriminative touch only.',
        },
        {
          title: 'The Eye: Tunics & Refraction',
          body: 'The eye has three tunics (layers):\n• Fibrous tunic (sclera + cornea) — mechanical support, protection, extrinsic muscle attachment\n• Vascular tunic (choroid, ciliary body, iris) — blood supply, focusing\n• Neural tunic (retina) — photoreception\n\nThe fibrous tunic does NOT produce aqueous humor (that\'s the ciliary body) and is NOT important for focusing (that\'s lens + cornea).\n\nMost refraction occurs at the cornea (not the lens). The lens provides fine-tuning/accommodation.',
        },
        {
          title: 'Aqueous Humor & Glaucoma',
          body: 'Aqueous humor fills the anterior cavity (between cornea and lens).\n• Produced by the ciliary body\n• Excessive production or blocked drainage → increased intraocular pressure → glaucoma\n• Glaucoma damages the optic nerve and can cause blindness\n\nVitreous humor is the gel-like substance filling the posterior cavity — it is permanent and not replaced.',
        },
        {
          title: 'Retinal Processing & Photoreception',
          body: 'Photoreception in rods and cones:\n• Retinal (a vitamin A derivative) is the light-absorbing pigment\n• When photons hit cis-retinal, it converts to trans-retinal\n• This causes closing of sodium channels → hyperpolarization of the photoreceptor\n• Hyperpolarization decreases neurotransmitter release\n\nAmacrine cells perform lateral inhibition — they sharpen contrast in visual processing.\n\nWhen all three cone populations are stimulated equally, we perceive white.',
        },
        {
          title: 'Color Vision & Visual Conditions',
          body: 'Three cone types (trichromatic vision):\n• Red cones, Green cones, Blue cones\n• Equal stimulation of all three → white perception\n\nVisual conditions:\n• Myopia (nearsightedness) — needs concave corrective lens\n• Hyperopia (farsightedness) — needs convex corrective lens\n• Presbyopia — age-related loss of accommodation\n• Astigmatism — irregular corneal curvature\n• Emmetropia — normal vision (does NOT need corrective lens)',
        },
        {
          title: 'Hearing: Sound Discrimination',
          body: 'How we tell different pitches apart:\n• Different frequencies stimulate different regions of the basilar membrane in the cochlear duct\n• High frequencies → base of cochlea; Low frequencies → apex\n• This is the tonotopic organization (place theory)\n\nIt is NOT because different frequencies cause different types of action potentials — all action potentials follow the all-or-none principle.',
        },
        {
          title: 'Equilibrium: Vestibular System',
          body: 'Two types of equilibrium:\n• Static equilibrium — gravity and linear acceleration\n  → Detected by maculae containing otoliths (calcium carbonate crystals)\n  → Otolith inertia relative to hair cells detects head position\n• Dynamic equilibrium — angular/rotational acceleration\n  → Detected by cristae ampullaris in the semicircular canals\n  → Endolymph movement bends hair cells in the ampullae\n\nThe crista ampullaris is associated with dynamic equilibrium in angular acceleration.',
        },
        {
          title: 'Special Senses: Signal Transduction',
          body: 'In the special senses (vision, hearing, taste, smell, equilibrium), specialized receptor cells transduce signals by releasing neurotransmitters.\n\nThis is different from general senses where receptors generate action potentials directly. Special sense receptor cells convert stimuli into graded potentials, then release neurotransmitters to stimulate sensory neurons.',
        },
      ],
      keyTerms: [
        { term: 'Nociceptors', definition: 'Sensory receptors specialized for pain detection; they are free nerve endings.' },
        { term: 'Adaptation', definition: 'Decreased sensitivity to a continued, unchanging stimulus.' },
        { term: 'Emmetropia', definition: 'Normal vision — the eye focuses images correctly on the retina without corrective lenses.' },
        { term: 'Retinal', definition: 'Vitamin A derivative that absorbs photons and changes shape (cis→trans) to initiate vision.' },
        { term: 'Lateral inhibition', definition: 'Process by amacrine cells that sharpens contrast in visual processing.' },
        { term: 'Basilar membrane', definition: 'Membrane in the cochlea whose different regions vibrate at different frequencies (tonotopic).' },
        { term: 'Otoliths', definition: 'Calcium carbonate crystals in the maculae that detect gravity and linear acceleration.' },
        { term: 'Crista ampullaris', definition: 'Sensory structure in semicircular canal ampullae that detects angular/rotational acceleration.' },
      ],
      memoryAids: [
        'Emmetropia = "Em-perfect" — normal vision, no correction needed.',
        'Light hits retinal: cis→trans → Na⁺ channels CLOSE → hyperpolarization. "Light shuts the door."',
        'Pitch discrimination: "Place theory" — each PLACE on the basilar membrane tunes to a different frequency.',
        'Static = Stones (otoliths). Dynamic = Ducts (semicircular canals).',
        'Cornea does MOST refraction. Lens does fine FOCUSING (accommodation).',
      ],
      inlineQuestions: [
        {
          question: 'Which structural classification of sensory receptor is only mechanoreceptors?',
          options: { A: 'Delta cells', B: 'Special receptor cells', C: 'Free dendritic endings', D: 'Encapsulated', E: 'More than one of the above' },
          answer: 'D',
          explanation: 'All encapsulated receptors are mechanoreceptors (Meissner\'s, Pacinian, Ruffini\'s).'
        },
        {
          question: 'Decreased sensitivity to a continued stimulus is called:',
          options: { A: 'Boredom', B: 'Conduction', C: 'Adaptation', D: 'Translation', E: 'Projection' },
          answer: 'C',
          explanation: 'Adaptation is the physiological decrease in receptor sensitivity to a constant stimulus.'
        },
        {
          question: 'In the human eye, most refraction occurs when light passes through the:',
          options: { A: 'Lens', B: 'Iris', C: 'Vitreous humor', D: 'Cornea', E: 'Aqueous humor' },
          answer: 'D',
          explanation: 'The cornea performs ~70% of the eye\'s total refraction; the lens fine-tunes.'
        },
        {
          question: 'Perception of gravity and linear acceleration depends on:',
          options: { A: 'Cupula pressure on hair cells', B: 'Tectorial membrane vibrations', C: 'Endolymph in semicircular canals', D: 'Bending of hair cells in ampullae', E: 'Inertia of otoliths relative to macular hair cells' },
          answer: 'E',
          explanation: 'Otoliths lag behind head movement, bending the hair cells of the maculae to detect gravity and linear acceleration.'
        },
      ],
      quiz: [
        { question: 'The taste sensation triggered by monovalent metallic cations is:', options: { A: 'Sweet', B: 'Minty', C: 'Sour', D: 'Umami', E: 'Salty' }, answer: 'E', explanation: 'Salty taste is detected when Na⁺ and other monovalent metallic cations enter taste receptor cells.' },
        { question: 'Taste involves:', options: { A: 'Mechanoreceptors', B: 'Nociceptors', C: 'Chemoreceptors', D: 'Thermoreceptors', E: 'All of the above' }, answer: 'E', explanation: 'Taste perception involves all four types: chemoreceptors (primary), nociceptors (spicy), thermoreceptors (temperature), mechanoreceptors (texture).' },
        { question: 'Pain receptors that hold your attention while falling are called:', options: { A: 'Exteroceptors', B: 'Somatoceptors', C: 'Proprioceptors', D: 'Nociceptors', E: 'Interoceptors' }, answer: 'D', explanation: 'Nociceptors specialize in pain and demand priority processing.' },
        { question: 'The following are true of olfaction EXCEPT:', options: { A: 'Adapts slowly', B: 'Uses analytical integration', C: 'Uses synthetic integration', D: 'Has neuronal replacement', E: 'May involve pain' }, answer: 'A', explanation: 'Olfaction actually adapts rapidly, not slowly.' },
        { question: 'Which would NOT function as a proprioceptor?', options: { A: 'Ruffini\'s corpuscle', B: 'Pacinian corpuscle', C: 'End bulbs of Krause', D: 'Meissner\'s corpuscle', E: 'All are proprioceptors' }, answer: 'D', explanation: 'Meissner\'s corpuscles detect light/discriminative touch, not body position.' },
        { question: 'All are true of the fibrous tunic of the eye EXCEPT:', options: { A: 'Provides mechanical support', B: 'Where extrinsic eye muscles insert', C: 'Important in focusing', D: 'Consists of sclera and cornea', E: 'Produces aqueous humor' }, answer: 'E', explanation: 'The fibrous tunic does NOT produce aqueous humor (the ciliary body does).' },
        { question: 'When all three cone populations are stimulated equally, we perceive:', options: { A: 'Red', B: 'Blackness', C: 'White', D: 'Green', E: 'Blue' }, answer: 'C', explanation: 'Equal stimulation of all three cone types = white light perception.' },
        { question: 'Excessive production of aqueous humor may lead to:', options: { A: 'Secreted in bright light', B: 'Lacrimal component', C: 'Gelatinous fluid in anterior chamber', D: 'Converts to vitreous with age', E: 'Glaucoma' }, answer: 'E', explanation: 'Excessive aqueous humor increases intraocular pressure → glaucoma → optic nerve damage.' },
        { question: 'Different pitches are distinguished because:', options: { A: 'Different frequencies cause different action potential frequencies', B: 'Different frequencies stimulate different basilar membrane regions', C: 'Different frequencies cause different kinds of action potentials', D: 'Different frequencies change eardrum vibration amplitude', E: 'Many different receptor types respond to single frequencies' }, answer: 'B', explanation: 'Place theory: each frequency activates a specific region of the basilar membrane.' },
        { question: 'When photons convert cis-retinal to trans-retinal, it leads to:', options: { A: 'Closing of K⁺ channels → hyperpolarization', B: 'Opening of both Na⁺ and K⁺ channels', C: 'Opening of K⁺ channels → depolarization', D: 'Opening of Na⁺ channels → depolarization', E: 'Closing of Na⁺ channels → hyperpolarization' }, answer: 'E', explanation: 'Light → cis-retinal to trans-retinal → Na⁺ channels close → photoreceptor hyperpolarizes.' },
        { question: 'Which eye condition does NOT need corrective lenses?', options: { A: 'Myopia', B: 'Emmetropia', C: 'Astigmatism', D: 'Hyperopia', E: 'Presbyopia' }, answer: 'B', explanation: 'Emmetropia = normal vision with proper focus on the retina.' },
        { question: 'In special senses, receptor cells transduce signals by:', options: { A: 'Voltage-regulated gates', B: 'Electrical synapses', C: 'Acting as mechanoreceptors', D: 'Releasing neurotransmitters', E: 'None of the above' }, answer: 'D', explanation: 'Special sense receptor cells release neurotransmitters to stimulate sensory neurons.' },
        { question: 'The crista ampullaris is associated with:', options: { A: 'Hearing high-pitch sounds', B: 'Dynamic equilibrium in angular acceleration', C: 'Static equilibrium', D: 'Color vision', E: 'Static acceleration in linear acceleration' }, answer: 'B', explanation: 'Cristae ampullaris in the semicircular canal ampullae detect rotational/angular acceleration.' },
        { question: 'Amacrine cells are responsible for:', options: { A: 'Summation of receptor fields', B: 'Divergence', C: 'Cochlear tuning', D: 'Accommodation', E: 'Lateral inhibition' }, answer: 'E', explanation: 'Amacrine cells perform lateral inhibition to enhance contrast in the retina.' },
        { question: 'A pigment synthesized from vitamin A is:', options: { A: 'Opsin', B: 'Retinal', C: 'Transducin', D: 'cGMP', E: 'Rhodopsin' }, answer: 'B', explanation: 'Retinal is the vitamin A derivative that combines with opsin to form visual pigments.' },
      ],
      flashcards: [
        { front: 'Which receptor type is for pain only?', back: 'Nociceptors — free nerve endings' },
        { front: 'What is adaptation (sensory)?', back: 'Decreased sensitivity to a continued, unchanging stimulus' },
        { front: 'Where does most refraction in the eye occur?', back: 'The cornea (~70%); the lens fine-tunes (accommodation)' },
        { front: 'Salty taste is triggered by what?', back: 'Monovalent metallic cations (like Na⁺)' },
        { front: 'What detects gravity and linear acceleration?', back: 'Maculae with otoliths — their inertia bends hair cells' },
        { front: 'Cis-retinal → trans-retinal causes what?', back: 'Na⁺ channels close → photoreceptor hyperpolarizes ("light shuts the door")' },
        { front: 'What is emmetropia?', back: 'Normal vision — no corrective lens needed' },
        { front: 'How do we discriminate pitch?', back: 'Different frequencies vibrate different regions of the basilar membrane (place theory)' },
        { front: 'Crista ampullaris detects what?', back: 'Dynamic equilibrium — angular/rotational acceleration' },
        { front: 'What do amacrine cells do?', back: 'Lateral inhibition — sharpen contrast in retinal processing' },
        { front: 'Excessive aqueous humor causes what?', back: 'Glaucoma — increased intraocular pressure damages the optic nerve' },
        { front: 'All three cone types stimulated equally = ?', back: 'We perceive white' },
      ],
    },
  ],
};

export default reviewData;
