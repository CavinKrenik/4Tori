import { fullDataOverrides } from './fullDataOverrides';

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
    keyTerms: ['hormone', 'target cell', 'receptor', 'negative feedback', 'positive feedback', 'hypothalamus', 'pituitary', 'ADH', 'oxytocin', 'TSH', 'ACTH', 'FSH', 'LH', 'GnRH', 'TRH', 'CRH', 'GHRH', 'somatostatin', 'GH', 'IGF-I', 'PRL', 'MSH', 'melatonin', 'thymopoietin', 'thymosin', 'T3', 'T4', 'calcitonin'],
    memoryAids: ['Endocrine is mail; nervous is text message.', 'No receptor, no response.', 'Posterior pituitary releases ADH and oxytocin.'],
    realWorld: 'Hydration, stress, metabolism, growth, and reproduction are endocrine-regulated.',
    topics: [
      'Nervous vs endocrine basics',
      'Cell communication mechanisms',
      'Gap junction signaling',
      'Neurotransmitters',
      'Paracrine hormones',
      'Hormones in blood',
      'System overlap and neuroendocrine signaling',
      'General functions of hormones',
      'Exocrine vs endocrine glands',
      'Hormones and target cells',
      'Major endocrine organs',
      'Control of hormone secretion',
      'Thyroid negative feedback loop',
      'Oxytocin positive feedback',
      'Hypothalamus-pituitary overview',
      'Pituitary anatomy basics',
      'Hypothalamo-hypophyseal portal system',
      'Anterior pituitary tropic hormones',
      'GH and IGF functions',
      'Regulation of hGH',
      'Diabetogenic effect of excess GH',
      'TSH and thyroid stimulation',
      'FSH and LH functions',
      'Prolactin regulation',
      'ACTH and MSH',
      'Posterior pituitary hormones',
      'Regulation of ADH',
      'Pineal gland and melatonin',
      'Light regulation of melatonin',
      'Thymus involution and T-cell hormones',
      'Thyroid gland and calcitonin'
    ],
    questionBank: [
      { id: 'endo-q1', question: 'Which system has more persistent responses to long-term stimuli?', options: { A: 'Nervous', B: 'Endocrine', C: 'Respiratory', D: 'Digestive' }, answer: 'B', explanation: 'Endocrine signaling is slower but generally longer lasting.' },
      { id: 'endo-q2', question: 'A chemical messenger released into tissue fluid that affects nearby cells is called a:', options: { A: 'Neurotransmitter', B: 'Paracrine hormone', C: 'Autocrine enzyme', D: 'Exocrine hormone' }, answer: 'B', explanation: 'Paracrine messengers act locally on nearby cells.' },
      { id: 'endo-q3', question: 'Which is a true statement about endocrine glands?', options: { A: 'They have ducts to skin surfaces', B: 'They secrete hormones into blood', C: 'They produce only digestive enzymes', D: 'They never interact with the nervous system' }, answer: 'B', explanation: 'Endocrine glands are ductless and release hormones into blood.' },
      { id: 'endo-q4', question: 'Low levels of T3 and T4 will initially stimulate release of:', options: { A: 'TSH from thyroid', B: 'TRH from hypothalamus', C: 'ACTH from pituitary', D: 'PTH from parathyroids' }, answer: 'B', explanation: 'The loop starts with hypothalamic TRH release.' },
      { id: 'endo-q5', question: 'Oxytocin in milk ejection and uterine contractions is an example of:', options: { A: 'Negative feedback loop', B: 'Lack of feedback', C: 'Positive feedback loop', D: 'Neural reflex without hormones' }, answer: 'C', explanation: 'Oxytocin amplifies the stimulus in a positive feedback loop.' },
      { id: 'endo-q6', question: 'The part of the pituitary that is purely neural tissue is the:', options: { A: 'Anterior lobe', B: 'Posterior lobe', C: 'Intermediate lobe', D: 'Pineal body' }, answer: 'B', explanation: 'Posterior pituitary is neural tissue with hypothalamic axon terminals.' },
      { id: 'endo-q7', question: 'The endocrine system primarily communicates using:', options: { A: 'Electrical impulses', B: 'Neurotransmitters at synapses', C: 'Hormones in the bloodstream', D: 'Action potentials in neurons' }, answer: 'C', explanation: 'Endocrine communication uses hormones transported in blood.' },
      { id: 'endo-q8', question: 'Compared to endocrine responses, nervous system responses are typically:', options: { A: 'Slower and longer lasting', B: 'Faster and longer lasting', C: 'Faster and shorter in duration', D: 'Slower and shorter in duration' }, answer: 'C', explanation: 'Nervous responses are rapid and usually short-lived.' },
      { id: 'endo-q9', question: 'Which communication method uses pores that directly connect neighboring cells?', options: { A: 'Neurotransmitters', B: 'Hormones', C: 'Gap junctions', D: 'Paracrine signals' }, answer: 'C', explanation: 'Gap junctions allow direct passage of signaling molecules between adjacent cells.' },
      { id: 'endo-q10', question: 'Which system uses both electrical and chemical signals?', options: { A: 'Endocrine', B: 'Nervous', C: 'Lymphatic', D: 'Immune' }, answer: 'B', explanation: 'The nervous system uses action potentials and neurotransmitters.' },
      { id: 'endo-q11', question: 'Endocrine responses are usually:', options: { A: 'Rapid and short-lived', B: 'Rapid and localized', C: 'Slow and localized', D: 'Slow and long-lasting' }, answer: 'D', explanation: 'Hormonal effects can persist for long periods.' },
      { id: 'endo-q12', question: 'A chemical that can function as both a hormone and neurotransmitter is:', options: { A: 'Calcitonin', B: 'Thyroxine', C: 'Norepinephrine', D: 'Insulin' }, answer: 'C', explanation: 'Norepinephrine can act in both neural and endocrine contexts.' },
      { id: 'endo-q13', question: 'Neuroendocrine cells can secrete which of the following?', options: { A: 'Only neurotransmitters', B: 'Only steroid hormones', C: 'Oxytocin and catecholamines', D: 'Glucose and amino acids' }, answer: 'C', explanation: 'Neuroendocrine neurons release hormone signals such as oxytocin.' },
      { id: 'endo-q14', question: 'Exocrine glands release their products:', options: { A: 'Directly into blood', B: 'Into ducts to body surfaces or cavities', C: 'Into synaptic clefts', D: 'Into cerebrospinal fluid' }, answer: 'B', explanation: 'Exocrine secretion occurs through ducts.' },
      { id: 'endo-q15', question: 'Which is an example of an exocrine gland product?', options: { A: 'Insulin', B: 'Thyroxine', C: 'Sweat', D: 'ADH' }, answer: 'C', explanation: 'Sweat is secreted via exocrine ducts.' },
      { id: 'endo-q16', question: 'Endocrine glands are characterized by:', options: { A: 'Ducts opening to body surfaces', B: 'Hormone secretion into bloodstream', C: 'Only local effects', D: 'Storage of neurotransmitters' }, answer: 'B', explanation: 'Endocrine glands are ductless and release hormones into circulation.' },
      { id: 'endo-q17', question: 'Cells with specific receptors for a hormone are called:', options: { A: 'Neuroglia', B: 'Target cells', C: 'Exocrine cells', D: 'Erythrocytes' }, answer: 'B', explanation: 'Hormones act only on target cells with matching receptors.' },
      { id: 'endo-q18', question: 'Which of these is NOT a major endocrine organ listed in the lecture set?', options: { A: 'Thyroid gland', B: 'Parathyroid glands', C: 'Adrenal glands', D: 'Appendix' }, answer: 'D', explanation: 'Appendix is not a core endocrine organ in this module list.' },
      { id: 'endo-q19', question: 'What type of feedback is most common in hormone regulation?', options: { A: 'Negative feedback', B: 'Positive feedback', C: 'Neutral feedback', D: 'Recursive feedback' }, answer: 'A', explanation: 'Most endocrine pathways are controlled by negative feedback.' },
      { id: 'endo-q20', question: 'In the T3/T4 loop, which hormone directly stimulates thyroid follicular cells?', options: { A: 'TRH', B: 'TSH', C: 'ACTH', D: 'GH' }, answer: 'B', explanation: 'TSH from the anterior pituitary stimulates thyroid hormone release.' },
      { id: 'endo-q21', question: 'Elevated T3 levels will usually:', options: { A: 'Stimulate more TRH and TSH', B: 'Inhibit TRH and TSH', C: 'Have no effect on TRH', D: 'Only increase ACTH' }, answer: 'B', explanation: 'High thyroid hormone levels suppress upstream TRH and TSH.' },
      { id: 'endo-q22', question: 'Which event directly increases oxytocin release for milk ejection?', options: { A: 'Rising blood glucose', B: 'Elevated TSH', C: 'Suckling infant stimulating nerve endings', D: 'Low blood pressure in aorta' }, answer: 'C', explanation: 'Suckling triggers a neuroendocrine reflex that releases oxytocin.' },
      { id: 'endo-q23', question: 'The hypothalamus controls the pituitary gland using:', options: { A: 'Only nerve impulses', B: 'Nine releasing and inhibiting hormones', C: 'Digestive enzymes', D: 'Gap junctions exclusively' }, answer: 'B', explanation: 'The hypothalamus uses releasing and inhibiting hormones to regulate pituitary output.' },
      { id: 'endo-q24', question: 'The anterior pituitary develops from:', options: { A: 'Neural tissue in brainstem', B: 'Roof of the mouth', C: 'Spinal cord', D: 'Adrenal cortex' }, answer: 'B', explanation: 'Anterior pituitary has an oral ectoderm origin (roof of mouth).' },
      { id: 'endo-q25', question: 'The posterior pituitary mainly consists of:', options: { A: 'Glandular epithelial cells', B: 'Axon terminals of hypothalamic neurons and pituicytes', C: 'Skeletal muscle fibers', D: 'Chondrocytes' }, answer: 'B', explanation: 'Posterior pituitary stores and releases hormones made by hypothalamic neurons.' },
      { id: 'endo-q26', question: 'Which hormone from beta cells lowers blood glucose?', options: { A: 'Glucagon', B: 'Cortisol', C: 'Insulin', D: 'Growth hormone' }, answer: 'C', explanation: 'Insulin from pancreatic beta cells lowers blood glucose.' },
      { id: 'endo2-q1', question: 'The portal system that carries hypothalamic hormones to the anterior pituitary is the:', options: { A: 'Hypothalamo-pituitary vein', B: 'Hypothalamo-hypophyseal portal system', C: 'Systemic venous system', D: 'Dural venous sinus' }, answer: 'B', explanation: 'The portal system directly delivers hypothalamic factors to the anterior pituitary.' },
      { id: 'endo2-q2', question: 'Which hormone is NOT secreted by the anterior pituitary?', options: { A: 'FSH', B: 'LH', C: 'Oxytocin', D: 'ACTH' }, answer: 'C', explanation: 'Oxytocin is synthesized in hypothalamus and released from the posterior pituitary.' },
      { id: 'endo2-q3', question: 'Tropic hormones primarily:', options: { A: 'Regulate digestion', B: 'Target other endocrine glands', C: 'Act only on skeletal muscles', D: 'Stimulate neuron action potentials' }, answer: 'B', explanation: 'Tropic hormones regulate activity of other endocrine glands.' },
      { id: 'endo2-q4', question: 'Growth hormone promotes tissue growth by:', options: { A: 'Blocking IGF production', B: 'Stimulating mitosis and cellular differentiation', C: 'Reducing amino acid transport into cells', D: 'Inhibiting protein synthesis' }, answer: 'B', explanation: 'GH supports growth directly and indirectly through IGF.' },
      { id: 'endo2-q5', question: 'Which is a function of the GH-IGF system?', options: { A: 'Decreasing Na+ retention', B: 'Increasing lipid breakdown and glucose-sparing', C: 'Completely stopping protein synthesis', D: 'Lowering Ca2+ absorption' }, answer: 'B', explanation: 'GH-IGF promotes lipolysis and glucose-sparing while supporting protein anabolism.' },
      { id: 'endo2-q6', question: 'Low blood glucose triggers which response?', options: { A: 'Release of GHIH and reduction of hGH', B: 'Release of GHRH and increased hGH', C: 'Release of insulin from hypothalamus', D: 'Increased calcitonin secretion' }, answer: 'B', explanation: 'Low glucose tends to increase GHRH and GH output.' },
      { id: 'endo2-q7', question: 'Chronic excess of growth hormone can lead to:', options: { A: 'Hypoglycemia and low insulin', B: 'Lower blood glucose and anemia', C: 'High blood glucose and beta-cell burnout', D: 'Reduced insulin secretion and hypothermia' }, answer: 'C', explanation: 'Excess GH has diabetogenic effects and can stress beta cells.' },
      { id: 'endo2-q8', question: 'In adulthood, GH primarily:', options: { A: 'Stops bone remodeling', B: 'Increases osteoblastic activity and bone thickening', C: 'Eliminates muscle mass', D: 'Has no effect on tissues' }, answer: 'B', explanation: 'Adult GH still supports tissue maintenance and bone remodeling.' },
      { id: 'endo2-q9', question: 'GH levels are highest during:', options: { A: 'Prolonged fasting and no sleep', B: 'First 2 hours of deep sleep and after high-protein meals', C: 'Immediately after high-carb meals', D: 'Exposure to bright light' }, answer: 'B', explanation: 'GH pulses are strongest during deep sleep and with protein-rich intake/exercise.' },
      { id: 'endo2-q10', question: 'TSH is produced by:', options: { A: 'Thyroid follicular cells', B: 'Thyrotrophs in the anterior pituitary', C: 'Adrenal cortex cells', D: 'Pancreatic beta cells' }, answer: 'B', explanation: 'Thyrotrophs in the adenohypophysis release TSH.' },
      { id: 'endo2-q11', question: 'The primary effect of TSH is to:', options: { A: 'Stimulate adrenal medulla', B: 'Increase melatonin production', C: 'Stimulate synthesis and secretion of T3 and T4', D: 'Decrease metabolic rate' }, answer: 'C', explanation: 'TSH drives thyroid hormone synthesis and secretion.' },
      { id: 'endo2-q12', question: 'FSH in females:', options: { A: 'Stimulates uterine contractions', B: 'Initiates ovarian follicle formation and estrogen secretion', C: 'Causes milk ejection', D: 'Raises blood glucose' }, answer: 'B', explanation: 'FSH supports follicular development and estrogen production.' },
      { id: 'endo2-q13', question: 'FSH in males:', options: { A: 'Stimulates testosterone production in interstitial cells', B: 'Inhibits sperm production', C: 'Stimulates sperm production in testes', D: 'Induces ovulation' }, answer: 'C', explanation: 'FSH supports spermatogenesis.' },
      { id: 'endo2-q14', question: 'In females, LH does all of the following EXCEPT:', options: { A: 'Stimulates estrogen secretion', B: 'Triggers ovulation', C: 'Stimulates corpus luteum formation and progesterone secretion', D: 'Stimulates milk ejection' }, answer: 'D', explanation: 'Milk ejection is mediated by oxytocin, not LH.' },
      { id: 'endo2-q15', question: 'In males, LH stimulates:', options: { A: 'Sertoli cells to release FSH', B: 'Interstitial cells to secrete testosterone', C: 'Thyroid cells to secrete calcitonin', D: 'Beta cells to produce insulin' }, answer: 'B', explanation: 'LH stimulates Leydig/interstitial cells for testosterone secretion.' },
      { id: 'endo2-q16', question: 'Prolactin is mainly involved in:', options: { A: 'Regulation of blood pressure', B: 'Milk production in mammary glands', C: 'Uterine contraction during labor', D: 'Increasing heart rate' }, answer: 'B', explanation: 'PRL drives milk synthesis when conditions are appropriate.' },
      { id: 'endo2-q17', question: 'What effect does suckling have on prolactin?', options: { A: 'Increases hypothalamic inhibition of PRL', B: 'Reduces hypothalamic inhibition, raising PRL', C: 'Has no effect', D: 'Stops PRL release permanently' }, answer: 'B', explanation: 'Suckling reduces inhibitory input and raises prolactin output.' },
      { id: 'endo2-q18', question: 'ACTH primarily stimulates:', options: { A: 'Thyroid follicles to make thyroxine', B: 'Adrenal cortex to produce glucocorticoids', C: 'Pancreatic islets to produce insulin', D: 'Pineal gland to secrete melatonin' }, answer: 'B', explanation: 'ACTH targets adrenal cortex glucocorticoid secretion.' },
      { id: 'endo2-q19', question: 'Which hormone has uncertain function in humans but increases skin pigmentation in frogs?', options: { A: 'ADH', B: 'PRL', C: 'MSH', D: 'GH' }, answer: 'C', explanation: 'MSH function is limited/uncertain in humans.' },
      { id: 'endo2-q20', question: 'The posterior pituitary:', options: { A: 'Synthesizes ADH and oxytocin', B: 'Stores and releases ADH and oxytocin made in the hypothalamus', C: 'Stores T3 and T4', D: 'Releases ACTH and MSH' }, answer: 'B', explanation: 'Neurohypophysis stores/releases hypothalamic ADH and oxytocin.' },
      { id: 'endo2-q21', question: 'ADH functions include all of the following EXCEPT:', options: { A: 'Decreasing urine production', B: 'Decreasing sweating', C: 'Increasing blood pressure', D: 'Increasing digestive enzyme secretion' }, answer: 'D', explanation: 'ADH regulates water balance and vascular tone, not digestive enzyme secretion.' },
      { id: 'endo2-q22', question: 'During dehydration, ADH will:', options: { A: 'Decrease water reabsorption in kidneys', B: 'Increase urine output', C: 'Cause kidneys to retain more water and constrict arterioles', D: 'Increase sweating' }, answer: 'C', explanation: 'ADH conserves water and can increase blood pressure via vasoconstriction.' },
      { id: 'endo2-q23', question: 'The pineal gland primarily secretes:', options: { A: 'Insulin', B: 'Melatonin', C: 'Cortisol', D: 'Aldosterone' }, answer: 'B', explanation: 'Pineal secretion is mainly melatonin (from serotonin pathways).' },
      { id: 'endo2-q24', question: 'Melatonin levels are increased in:', options: { A: 'Hyperthyroidism', B: 'Seasonal Affective Disorder and PMS', C: 'Cushing syndrome', D: 'Diabetes insipidus' }, answer: 'B', explanation: 'Elevated melatonin is associated with SAD and can relate to PMS symptoms.' },
      { id: 'endo2-q25', question: 'In darkness, melatonin secretion:', options: { A: 'Decreases due to high norepinephrine', B: 'Increases due to lack of sympathetic norepinephrine inhibition', C: 'Stops entirely', D: 'Is unrelated to light' }, answer: 'B', explanation: 'Darkness favors melatonin release.' },
      { id: 'endo2-q26', question: 'The thymus secretes hormones that regulate:', options: { A: 'B-cell antibody production', B: 'Development and activation of T-lymphocytes', C: 'Erythrocyte maturation', D: 'Insulin sensitivity' }, answer: 'B', explanation: 'Thymic hormones support T-cell maturation and function.' },
      { id: 'endo2-q27', question: 'The largest endocrine gland is the:', options: { A: 'Pituitary', B: 'Thyroid', C: 'Adrenal cortex', D: 'Pancreas' }, answer: 'B', explanation: 'The thyroid is the largest endocrine gland.' },
      { id: 'endo2-q28', question: 'Thyroid follicular cells secrete:', options: { A: 'Calcitonin only', B: 'T3 and T4', C: 'PTH', D: 'Melatonin' }, answer: 'B', explanation: 'Follicular cells produce thyroid hormones T3 and T4.' },
      { id: 'endo2-q29', question: 'A major effect of thyroid hormone is:', options: { A: 'Decreasing metabolic rate', B: 'Lowering respiratory rate', C: 'Increasing metabolic rate and oxygen consumption', D: 'Reducing heart rate and contractility' }, answer: 'C', explanation: 'Thyroid hormones elevate metabolic activity and oxygen use.' },
      { id: 'endo2-q30', question: 'Calcitonin from C cells:', options: { A: 'Raises blood Ca2+', B: 'Lowers blood Ca2+ and promotes bone deposition', C: 'Has no effect on bone', D: 'Acts only on the kidneys' }, answer: 'B', explanation: 'Calcitonin lowers blood calcium, especially by promoting deposition in bone.' },
      { id: 'endo2-sq1', question: 'Which hormones are stored and released by the posterior pituitary?', options: { A: 'T3 and T4', B: 'FSH and LH', C: 'ADH and oxytocin', D: 'GH and PRL' }, answer: 'C', explanation: 'Posterior pituitary stores and releases ADH and oxytocin from hypothalamic neurons.' },
      { id: 'endo2-sq2', question: 'Which hormone stimulates the adrenal cortex to produce glucocorticoids?', options: { A: 'TSH', B: 'ACTH', C: 'FSH', D: 'GH' }, answer: 'B', explanation: 'ACTH stimulates adrenal cortex glucocorticoid production.' },
      { id: 'endo2-sq3', question: 'Chronic excess hGH will most likely lead to:', options: { A: 'Persistent hypoglycemia', B: 'Hyperglycemia and potential diabetes mellitus', C: 'Severe hypothyroidism', D: 'Immediate adrenal failure' }, answer: 'B', explanation: 'Excess GH can cause hyperglycemia and diabetogenic stress.' },
      { id: 'endo2-sq4', question: 'Melatonin secretion is highest:', options: { A: 'In bright sunlight', B: 'During darkness', C: 'After carbohydrate meals', D: 'During intense exercise' }, answer: 'B', explanation: 'Darkness increases melatonin secretion.' },
      { id: 'endo2-sq5', question: 'Calcitonin’s primary effect is to:', options: { A: 'Raise blood Ca2+ by bone resorption', B: 'Lower blood Ca2+ by promoting bone deposition', C: 'Increase Na+ retention', D: 'Stimulate insulin release' }, answer: 'B', explanation: 'Calcitonin reduces blood calcium by favoring deposition into bone.' },
      { id: 'endo2-sq6', question: 'Which hormone directly stimulates ovarian follicles and sperm production?', options: { A: 'LH', B: 'FSH', C: 'TSH', D: 'PRL' }, answer: 'B', explanation: 'FSH supports follicle development and spermatogenesis.' }
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
    overview: 'Body fluid relationships, plasma chemistry, formed elements, hematocrit, and hemopoiesis.',
    table: {
      title: 'Blood Components',
      columns: ['Component', 'Approx. Amount', 'Main Function'],
      rows: [
        ['Plasma', '55%', 'Transport medium and dissolved proteins/solutes'],
        ['Formed elements', '45%', 'Gas transport, defense, clotting'],
        ['RBC fraction', '~99% of formed elements', 'O2 and CO2 transport']
      ]
    },
    keyTerms: ['hematology', 'interstitial fluid', 'hemostasis', 'viscosity', 'osmolarity', 'venipuncture', 'hematocrit', 'serum', 'albumin', 'globulin', 'fibrinogen', 'erythrocyte', 'leukocyte', 'platelet', 'anemia', 'polycythemia', 'blood doping', 'hemopoiesis', 'hemocytoblast', 'erythropoietin', 'thrombopoietin', 'colony-stimulating factors'],
    memoryAids: ['55/45 split: plasma vs formed elements.', 'Albumin balances fluid; fibrinogen forms clots.', 'EPO boosts RBC, TPO boosts platelets, CSFs boost WBC lines.'],
    realWorld: 'Core for CBC interpretation, fluid balance, clotting risk, and anemia/polycythemia management.',
    topics: [
      'Body fluids and hematology',
      'Functions of blood',
      'Basic properties of blood',
      'Blood volume and osmolarity',
      'Blood sampling techniques',
      'Components and hematocrit',
      'Plasma and plasma proteins',
      'Non-protein plasma components',
      'Formed elements overview',
      'Anemia and polycythemia',
      'Blood doping risks',
      'Hemopoiesis sites and stem cells',
      'Adult red marrow distribution',
      'Hemopoietic growth factors',
      'Clinical use of recombinant growth factors'
    ],
    questionBank: [
      { id: 'blood1-q1', question: 'Which two body fluids directly service cells?', options: { A: 'Blood and lymph', B: 'Plasma and bile', C: 'Blood and interstitial fluid', D: 'CSF and interstitial fluid' }, answer: 'C', explanation: 'Cells exchange with interstitial fluid, which is supplied by blood plasma flow.' },
      { id: 'blood1-q2', question: 'Which is NOT a listed function of blood?', options: { A: 'Transport of gases and nutrients', B: 'Regulation of pH and temperature', C: 'Protection from disease', D: 'Production of digestive enzymes' }, answer: 'D', explanation: 'Blood transports and regulates but does not produce digestive enzymes as a primary function.' },
      { id: 'blood1-q3', question: 'Approximately what percentage of total body weight does blood represent?', options: { A: '2%', B: '8%', C: '15%', D: '25%' }, answer: 'B', explanation: 'Blood is about 8% of body weight in typical adults.' },
      { id: 'blood1-q4', question: 'Normal blood pH is closest to:', options: { A: '6.8', B: '7.0', C: '7.4', D: '8.0' }, answer: 'C', explanation: 'Physiologic blood pH is tightly regulated around 7.35-7.45.' },
      { id: 'blood1-q5', question: 'Which statement about blood viscosity is correct?', options: { A: 'Blood is thinner than water and flows faster', B: 'Blood is more viscous than water and flows more slowly', C: 'Blood and water have identical viscosity', D: 'Viscosity is unrelated to flow' }, answer: 'B', explanation: 'Blood viscosity is higher than water, increasing flow resistance.' },
      { id: 'blood1-q6', question: 'Venipuncture is preferred over arterial puncture because veins:', options: { A: 'Are deeper and have higher pressure', B: 'Have lower pressure and are closer to the surface', C: 'Contain no plasma', D: 'Do not clot' }, answer: 'B', explanation: 'Veins are safer and easier access points for routine blood sampling.' },
      { id: 'blood1-q7', question: 'A typical blood sample is about:', options: { A: '25% cells and 75% plasma', B: '55% plasma and 45% cells', C: '90% cells and 10% plasma', D: '10% cells and 90% plasma' }, answer: 'B', explanation: 'Whole blood is roughly 55% plasma and 45% formed elements.' },
      { id: 'blood1-q8', question: 'The hematocrit represents:', options: { A: 'Concentration of plasma proteins', B: 'Percentage of blood volume occupied by cells', C: 'Total blood volume', D: 'White blood cell count' }, answer: 'B', explanation: 'Hematocrit is packed-cell percentage of whole blood.' },
      { id: 'blood1-q9', question: 'Which is a normal average hematocrit value for males?', options: { A: '30%', B: '38%', C: '46%', D: '60%' }, answer: 'C', explanation: 'Average male hematocrit is around 46%.' },
      { id: 'blood1-q10', question: 'Albumins in plasma primarily:', options: { A: 'Provide immune defenses', B: 'Help form blood clots', C: 'Contribute to viscosity and osmolarity, affecting BP and fluid balance', D: 'Transport nitrogenous wastes' }, answer: 'C', explanation: 'Albumin is the dominant plasma protein for colloid osmotic pressure and fluid balance.' },
      { id: 'blood1-q11', question: 'Plasma globulins are mainly responsible for:', options: { A: 'Osmotic balance only', B: 'Blood clot formation', C: 'Immune system defense as antibodies', D: 'Oxygen transport' }, answer: 'C', explanation: 'Gamma globulins include immunoglobulins for immune defense.' },
      { id: 'blood1-q12', question: 'Fibrinogen\'s main role is to:', options: { A: 'Carry hormones', B: 'Act as a precursor of fibrin in clot formation', C: 'Transport iron', D: 'Neutralize toxins' }, answer: 'B', explanation: 'Fibrinogen is converted into fibrin strands during coagulation.' },
      { id: 'blood1-q13', question: 'A deficiency of plasma proteins can directly lead to:', options: { A: 'Hypertension from high osmolarity', B: 'Edema due to low osmolarity and fluid retention in tissues', C: 'Higher RBC production', D: 'Increased blood pH' }, answer: 'B', explanation: 'Low plasma protein reduces oncotic pull, promoting tissue fluid accumulation.' },
      { id: 'blood1-q14', question: 'Which ion is the major cation in plasma and contributes most to osmolarity?', options: { A: 'Potassium', B: 'Sodium', C: 'Calcium', D: 'Magnesium' }, answer: 'B', explanation: 'Sodium is the major extracellular cation and key osmotic contributor.' },
      { id: 'blood1-q15', question: 'Which of the following is NOT a formed element of blood?', options: { A: 'Erythrocyte', B: 'Leukocyte', C: 'Platelet', D: 'Albumin' }, answer: 'D', explanation: 'Albumin is a plasma protein, not a formed element.' },
      { id: 'blood1-q16', question: 'Polycythemia is defined as:', options: { A: 'Too few RBCs', B: 'Too many RBCs (over about 65%)', C: 'Too many WBCs', D: 'Deficiency of platelets' }, answer: 'B', explanation: 'Polycythemia reflects excess RBC concentration and high viscosity risk.' },
      { id: 'blood1-q17', question: 'A potential cause of polycythemia mentioned in the text is:', options: { A: 'Iron deficiency', B: 'Tissue hypoxia', C: 'Vitamin B12 deficiency', D: 'Hypotension' }, answer: 'B', explanation: 'Hypoxia can stimulate EPO and RBC overproduction.' },
      { id: 'blood1-q18', question: 'Blood doping is dangerous mainly because it:', options: { A: 'Decreases blood viscosity', B: 'Increases blood viscosity and cardiac workload', C: 'Eliminates plasma proteins', D: 'Causes immediate anemia' }, answer: 'B', explanation: 'Higher RBC load can increase viscosity and strain the heart.' },
      { id: 'blood1-q19', question: 'In adults, red bone marrow producing blood cells is found mainly in:', options: { A: 'Long bone shafts only', B: 'Flat bones and heads of femur and humerus', C: 'All bones equally', D: 'Only the skull' }, answer: 'B', explanation: 'Adult active red marrow is concentrated in axial/flat bones and proximal long bones.' },
      { id: 'blood1-q20', question: 'Hemocytoblasts are described as:', options: { A: 'Fully differentiated RBCs', B: 'Pluripotent stem cells that can form multiple cell lines', C: 'Platelet fragments', D: 'Cells that only make WBCs' }, answer: 'B', explanation: 'Hemocytoblasts are multipotent progenitors for blood lineages.' },
      { id: 'blood1-q21', question: 'Erythropoietin (EPO) is primarily produced by the:', options: { A: 'Liver', B: 'Thymus', C: 'Kidneys', D: 'Spleen' }, answer: 'C', explanation: 'Renal cells produce EPO in response to oxygen-related cues.' },
      { id: 'blood1-q22', question: 'Thrombopoietin mainly stimulates the formation of:', options: { A: 'RBCs', B: 'WBCs', C: 'Platelets', D: 'Plasma proteins' }, answer: 'C', explanation: 'TPO promotes megakaryocyte and platelet production.' },
      { id: 'blood1-q23', question: 'Colony-stimulating factors (CSFs) and interleukins mostly regulate:', options: { A: 'Plasma protein synthesis', B: 'WBC production', C: 'Platelet destruction', D: 'Hemoglobin breakdown' }, answer: 'B', explanation: 'CSFs and interleukins are major white-cell lineage regulators.' },
      { id: 'blood1-q24', question: 'Which statement about recombinant growth factors is true?', options: { A: 'Recombinant EPO treats high BP', B: 'CSFs are used to stimulate WBC formation in chemotherapy patients', C: 'TPO is used only for anemia in kidney disease', D: 'They are not yet available clinically' }, answer: 'B', explanation: 'Recombinant CSFs are widely used to support marrow recovery after chemotherapy.' },
      { id: 'blood1-sq1', question: 'Which blood component is most abundant by volume?', options: { A: 'RBCs', B: 'WBCs', C: 'Plasma', D: 'Platelets' }, answer: 'C', explanation: 'Plasma is the largest blood volume fraction.' },
      { id: 'blood1-sq2', question: 'Which plasma protein helps maintain osmotic pressure and blood volume?', options: { A: 'Albumin', B: 'Fibrinogen', C: 'Globulin', D: 'Hemoglobin' }, answer: 'A', explanation: 'Albumin is the primary oncotic-pressure protein.' },
      { id: 'blood1-sq3', question: 'A hematocrit of 30% in an adult is most consistent with:', options: { A: 'Anemia', B: 'Polycythemia', C: 'Normal male value', D: 'Normal female value' }, answer: 'A', explanation: '30% is below typical adult reference ranges.' },
      { id: 'blood1-sq4', question: 'Which hormone increases RBC precursor production?', options: { A: 'Thrombopoietin', B: 'Erythropoietin', C: 'Insulin', D: 'Thyroxine' }, answer: 'B', explanation: 'EPO directly stimulates erythroid lineage production.' },
      { id: 'blood1-sq5', question: 'Blood doping increases performance by:', options: { A: 'Increasing albumin levels', B: 'Increasing RBC count and oxygen-carrying capacity', C: 'Decreasing blood viscosity', D: 'Eliminating lactate' }, answer: 'B', explanation: 'More RBC mass can temporarily increase oxygen transport.' }
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

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createSeededOrder(key) {
  const letters = [...OPTION_LETTERS];
  let seed = hashString(String(key));

  for (let i = letters.length - 1; i > 0; i -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }

  return letters;
}

function getTargetLetter(key) {
  return createSeededOrder(key)[0];
}

const moduleLearnNotes = {
  'endocrine-lecture': [
    'The endocrine system communicates using hormones carried in blood, which creates slower but longer-lasting effects than neural signals.',
    'Hypothalamus and pituitary control are central: hypothalamus integrates neural input and pituitary distributes endocrine output.',
    'Pancreas, thyroid, adrenal glands, and gonads coordinate metabolism, stress response, growth, and reproduction.',
    'Most endocrine loops use negative feedback; positive feedback appears in specific events such as oxytocin release during labor.'
  ],
  'exercise-13-endo-blood': [
    'This lab links endocrine concepts with blood analysis skills used in practical anatomy and physiology.',
    'Agglutination in typing trays indicates antigen-antibody binding and is used for ABO and Rh interpretation.',
    'Hematocrit and smear review support reasoning about anemia, polycythemia, and formed element distribution.',
    'Interpretation improves when structure, hormone control, and blood function are considered together.'
  ],
  'blood-lecture': [
    'Blood is a fluid connective tissue with transport, regulatory, and protective functions.',
    'Plasma contains proteins and dissolved solutes, while formed elements include erythrocytes, leukocytes, and platelets.',
    'Hematocrit reports packed-cell proportion and helps identify volume and oxygen-carrying issues.',
    'Hemopoiesis in red marrow plus erythropoietin control keeps blood cell populations balanced.'
  ],
  'heart-lecture': [
    'The heart lies in the mediastinum, with the apex angled inferiorly and leftward.',
    'Heart wall layers are epicardium, myocardium, and endocardium; myocardium provides contractile force.',
    'Atria receive blood and ventricles eject blood to pulmonary and systemic circuits.',
    'Cardiac structure and flow patterns explain valve sounds, ECG events, and common clinical findings.'
  ],
  'exercise-14-heart': [
    'Heart practicals focus on chamber, valve, and vessel identification with correct flow direction.',
    'AV valves sit between atria and ventricles; semilunar valves regulate outflow from ventricles.',
    'Chordae tendineae and papillary muscles prevent AV valve prolapse during systole.',
    'Repeated flow tracing converts memorization into reliable anatomical reasoning.'
  ],
  'vessels-lecture': [
    'Arteries move blood away from the heart, veins return blood, and capillaries enable exchange.',
    'The vessel wall has tunica intima, tunica media, and tunica externa layers with different roles.',
    'Arterioles control resistance and perfusion; capillary beds support nutrient and gas transfer.',
    'Veins operate at low pressure and use valves plus skeletal muscle pumping to support return flow.'
  ],
  'exercise-15-vessels': [
    'Vessel practicals emphasize regional pathway mapping, pulse landmarks, and artery-versus-vein histology.',
    'Palpated pulse points correspond to superficial arterial segments with good clinical access.',
    'Anastomoses provide collateral routes that can protect tissue perfusion when flow is compromised.',
    'Spatial vessel tracing improves blood flow reasoning from heart to tissues and back.'
  ],
  'exercise-16-bp-lymph': [
    'Blood pressure measurement depends on cuff position, cuff size, and proper listening during deflation.',
    'Systolic and diastolic values summarize pressure during contraction and relaxation phases.',
    'Lymphatic drainage returns excess interstitial fluid to venous blood and helps prevent edema.',
    'Muscle pump and respiratory mechanics move lymph because there is no central lymph pump.'
  ],
  'lymph-immune-lecture': [
    'The lymphatic system supports fluid recovery, fat absorption, and immune surveillance.',
    'Primary lymphatic organs include red bone marrow and thymus; secondary organs include nodes and spleen.',
    'Lymphatic vessels resemble veins and rely on valves plus low-pressure movement mechanisms.',
    'Adaptive immunity adds specificity and memory through B-cell and T-cell responses.'
  ]
};

const moduleSectionLearnOverrides = {
  'endocrine-lecture': {
    1: [
      'Endocrine system uses hormones in bloodstream, so responses are slower than nervous signaling but longer lasting.',
      'Nervous system is fast and localized; endocrine signaling is broader and more persistent.',
      'Cell communication includes gap junctions, neurotransmitters, paracrine signals, and endocrine hormones.',
      'Some chemicals act in both systems (for example, norepinephrine and dopamine).',
      'Endocrine glands are ductless, while exocrine glands release products through ducts.',
      'Hormones affect only target cells with matching receptors.',
      'Major endocrine organs include hypothalamus, pituitary, thyroid, parathyroid, adrenal glands, pancreas, and gonads.',
      'Most pathways use negative feedback; oxytocin release is a key positive feedback example.',
      'Hypothalamus regulates pituitary using releasing and inhibiting hormones.',
      'Pituitary anatomy: anterior lobe is glandular, posterior lobe is neural tissue.'
    ],
    2: [
      'Hypothalamic releasing and inhibiting hormones travel through the hypothalamo-hypophyseal portal system to the anterior pituitary.',
      'Anterior pituitary secretes FSH, LH, TSH, ACTH, PRL, and GH under hypothalamic control.',
      'GH drives growth directly and through IGF-I, increasing protein synthesis and lipid metabolism.',
      'Low glucose raises GHRH/GH while high glucose favors inhibitory control of GH output.',
      'Excess GH can increase blood glucose and contribute to diabetogenic stress over time.',
      'Posterior pituitary stores and releases hypothalamic ADH and oxytocin.',
      'ADH conserves water and supports blood pressure; dehydration raises ADH release.',
      'Pineal melatonin increases in darkness and helps regulate circadian timing.',
      'Thymus supports T-lymphocyte development and undergoes involution after puberty.',
      'Thyroid follicular cells secrete T3/T4 to raise metabolic activity; C cells secrete calcitonin to lower blood calcium.'
    ]
  },
  'blood-lecture': {
    1: [
      'Cells are serviced by blood and interstitial fluid; nutrients and oxygen move from blood to cells while wastes move back.',
      'Blood functions include transport, regulation (pH, temperature, fluid balance), and protection (immunity and hemostasis).',
      'Whole blood is about 55% plasma and 45% formed elements; hematocrit reports the packed-cell percentage.',
      'Plasma is mostly water with proteins (albumin, globulins, fibrinogen) and dissolved solutes.',
      'Albumin strongly influences osmotic balance and fluid movement between blood and tissues.',
      'Formed elements include RBCs, WBC classes, and platelets; RBC concentration dominates formed-element volume.',
      'Anemia reflects low RBC/hemoglobin, while polycythemia reflects excessive RBC concentration and higher viscosity risk.',
      'Adult hemopoiesis occurs mainly in red marrow of flat bones and proximal femur/humerus.',
      'Growth factors: EPO increases RBC line, TPO increases platelets, and CSFs/interleukins support WBC production.',
      'Clinical support includes recombinant EPO and CSFs in select anemia and chemotherapy contexts.'
    ]
  }
};
const moduleSectionQuizOverrides = {
  'endocrine-lecture': {
    1: ['endo-q1', 'endo-q2', 'endo-q3', 'endo-q4', 'endo-q5', 'endo-q6'],
    2: ['endo2-sq1', 'endo2-sq2', 'endo2-sq3', 'endo2-sq4', 'endo2-sq5', 'endo2-sq6']
  },
  'blood-lecture': {
    1: ['blood1-sq1', 'blood1-sq2', 'blood1-sq3', 'blood1-sq4', 'blood1-sq5']
  }
};
function mergeSectionOverrides(baseOverrides = {}, extraOverrides = {}) {
  const merged = { ...baseOverrides };

  Object.entries(extraOverrides || {}).forEach(([moduleId, sectionMap]) => {
    merged[moduleId] = {
      ...(merged[moduleId] || {}),
      ...(sectionMap || {})
    };
  });

  return merged;
}

const mergedSectionLearnOverrides = mergeSectionOverrides(
  moduleSectionLearnOverrides,
  fullDataOverrides.sectionLearnOverrides
);

const mergedSectionQuizOverrides = mergeSectionOverrides(
  moduleSectionQuizOverrides,
  fullDataOverrides.sectionQuizOverrides
);

const termDefinitions = {
  hormone: 'A chemical messenger released into blood that changes target-cell activity.',
  'target cell': 'A cell that responds to a hormone because it has the matching receptor.',
  receptor: 'A membrane or intracellular protein that binds a signaling molecule.',
  'negative feedback': 'A control mechanism in which output reduces further stimulation.',
  'positive feedback': 'A control mechanism in which output reinforces additional activity.',
  hypothalamus: 'Neural-endocrine control center that regulates pituitary function.',
  pituitary: 'Endocrine gland at brain base that secretes major regulatory hormones.',
  adh: 'Antidiuretic hormone that increases kidney water reabsorption.',
  oxytocin: 'Hormone involved in uterine contraction and milk ejection.',
  tsh: 'Hormone that stimulates thyroid hormone production.',
  acth: 'Hormone that stimulates adrenal cortex secretion.',
  fsh: 'Hormone supporting ovarian follicle development and spermatogenesis.',
  lh: 'Hormone involved in ovulation and gonadal steroid secretion.',
  abo: 'Blood group system determined by A and B antigens on RBC membranes.',
  'rh factor': 'RBC antigen status (D antigen) used in Rh typing.',
  agglutination: 'Visible clumping caused by antigen-antibody interaction.',
  hematocrit: 'Percentage of blood volume occupied by formed elements.',
  'blood smear': 'Prepared blood sample slide used for cell morphology review.',
  'differential count': 'Relative percentages of major leukocyte types.',
  erythropoietin: 'Hormone that stimulates red blood cell production.',
  plasma: 'Liquid component of blood carrying proteins and dissolved solutes.',
  'formed elements': 'Cellular blood components: RBCs, WBCs, and platelets.',
  erythrocyte: 'Red blood cell specialized for oxygen and carbon dioxide transport.',
  leukocyte: 'White blood cell involved in immune defense.',
  platelet: 'Cell fragment involved in clot formation and hemostasis.',
  albumin: 'Most abundant plasma protein; major contributor to colloid osmotic pressure.',
  fibrinogen: 'Clotting protein precursor converted to fibrin.',
  hemopoiesis: 'Process of blood cell formation, mainly in red bone marrow.',
  mediastinum: 'Central thoracic region where the heart is located.',
  apex: 'Inferior pointed end of the heart directed to the left.',
  base: 'Superior broad region of the heart where great vessels attach.',
  pericardium: 'Protective double-walled sac around the heart.',
  epicardium: 'Outer heart wall layer; visceral serous pericardium.',
  myocardium: 'Muscular middle heart wall layer that generates pumping force.',
  endocardium: 'Inner heart lining continuous with vascular endothelium.',
  atrium: 'Heart chamber that primarily receives blood.',
  ventricle: 'Heart chamber that ejects blood from the heart.',
  'coronary sulcus': 'Surface groove separating atria from ventricles.',
  tricuspid: 'Right AV valve between right atrium and right ventricle.',
  mitral: 'Left AV valve between left atrium and left ventricle.',
  'pulmonary valve': 'Semilunar valve between right ventricle and pulmonary trunk.',
  'aortic valve': 'Semilunar valve between left ventricle and aorta.',
  'chordae tendineae': 'Tendon-like cords anchoring AV valve cusps.',
  'papillary muscle': 'Ventricular muscles that tension chordae tendineae during systole.',
  'vena cava': 'Large systemic vein returning blood to the right atrium.',
  aorta: 'Largest systemic artery leaving the left ventricle.',
  'tunica intima': 'Innermost vessel layer lined by endothelium.',
  'tunica media': 'Middle vessel layer containing smooth muscle and elastic tissue.',
  'tunica externa': 'Outermost vessel layer of connective tissue.',
  endothelium: 'Simple squamous epithelial lining of vessel lumens.',
  arteriole: 'Small artery that strongly influences peripheral resistance.',
  metarteriole: 'Short vessel segment connecting arterioles and capillary beds.',
  'capillary bed': 'Network of capillaries where exchange occurs.',
  venule: 'Small vessel collecting blood from capillaries.',
  vasomotion: 'Intermittent contraction and relaxation of precapillary sphincters.',
  'radial pulse': 'Pulse palpated at the radial artery near the wrist.',
  'carotid pulse': 'Pulse palpated over the common carotid artery in the neck.',
  'brachial pulse': 'Pulse palpated over the brachial artery at the arm/elbow region.',
  'dorsalis pedis': 'Pulse point on the dorsum of the foot.',
  'posterior tibial': 'Pulse point near the medial ankle behind the malleolus.',
  anastomosis: 'Natural vessel connection providing alternate blood routes.',
  'portal system': 'Vascular route where blood passes through two capillary beds in series.',
  systole: 'Contraction phase of the cardiac cycle.',
  diastole: 'Relaxation and filling phase of the cardiac cycle.',
  'pulse pressure': 'Difference between systolic and diastolic pressure.',
  korotkoff: 'Auscultatory sounds used to determine blood pressure values.',
  'thoracic duct': 'Main lymphatic duct draining most of the body.',
  'right lymphatic duct': 'Duct draining the right upper body quadrant.',
  edema: 'Swelling due to excess interstitial fluid accumulation.',
  lymph: 'Fluid recovered from interstitial spaces by lymphatic vessels.',
  lacteal: 'Intestinal lymphatic capillary that absorbs dietary lipids.',
  chyle: 'Lipid-rich lymph absorbed from intestinal lacteals.',
  'lymph node': 'Filtering lymphoid structure that houses immune cells.',
  thymus: 'Primary lymphatic organ where T cells mature.',
  spleen: 'Largest lymphatic organ; filters blood and removes old RBCs.',
  tonsils: 'Lymphoid tissues guarding respiratory and digestive entry points.',
  'peyer patches': 'Aggregated lymphoid nodules in the small intestine.',
  'innate immunity': 'Immediate, nonspecific immune defense.',
  'adaptive immunity': 'Specific immune defense with memory.'
};

function uniquePush(items, value) {
  if (!value || items.includes(value)) return;
  items.push(value);
}

function getTermDefinition(term, module) {
  const key = term.toLowerCase();
  return termDefinitions[key] || `${term} is a key concept in ${module.title}.`;
}

function normalizeCuratedQuestion(module, question, index, correctPool) {
  const hasFullChoices =
    Object.prototype.hasOwnProperty.call(question.options, 'A') &&
    Object.prototype.hasOwnProperty.call(question.options, 'B') &&
    Object.prototype.hasOwnProperty.call(question.options, 'C') &&
    Object.prototype.hasOwnProperty.call(question.options, 'D') &&
    ['A', 'B', 'C', 'D'].includes(question.answer);

  if (hasFullChoices) {
    const order = createSeededOrder(`${module.id}:${question.id || question.question || index}`);
    const remixed = {
      A: question.options[order[0]],
      B: question.options[order[1]],
      C: question.options[order[2]],
      D: question.options[order[3]]
    };

    const answer = OPTION_LETTERS[order.indexOf(question.answer)];
    return { ...question, options: remixed, answer };
  }

  const correctText = question.options[question.answer];
  const wrongTexts = [];

  Object.entries(question.options).forEach(([key, value]) => {
    if (key !== question.answer) uniquePush(wrongTexts, value);
  });

  for (let i = 0; wrongTexts.length < 3 && i < correctPool.length * 2; i += 1) {
    const candidate = correctPool[(index + i + 1) % correctPool.length];
    if (candidate !== correctText) uniquePush(wrongTexts, candidate);
  }

  for (let i = 0; wrongTexts.length < 3 && i < module.topics.length * 2; i += 1) {
    uniquePush(wrongTexts, module.topics[(index + i) % module.topics.length]);
  }

  while (wrongTexts.length < 3) {
    uniquePush(wrongTexts, `Not supported by ${module.title}`);
  }

  const answer = getTargetLetter(`${module.id}:${question.id || index}`);
  const options = { A: '', B: '', C: '', D: '' };
  options[answer] = correctText;

  let wrongIndex = 0;
  ['A', 'B', 'C', 'D'].forEach((letter) => {
    if (letter === answer) return;
    options[letter] = wrongTexts[wrongIndex];
    wrongIndex += 1;
  });

  return { ...question, options, answer };
}

function buildDefinitionQuestions(module) {
  const termCount = Math.min(module.keyTerms.length, 12);

  return Array.from({ length: termCount }, (_, index) => {
    const term = module.keyTerms[index];
    const correctDefinition = getTermDefinition(term, module);
    const distractorTerms = takeWrappedWindow(module.keyTerms.filter((item) => item !== term), index, 3);
    const wrongDefinitions = distractorTerms.map((item) => getTermDefinition(item, module));

    const answer = getTargetLetter(`${module.id}:def:${term}:${index}`);
    const options = { A: '', B: '', C: '', D: '' };
    options[answer] = correctDefinition;

    let wrongIndex = 0;
    ['A', 'B', 'C', 'D'].forEach((letter) => {
      if (letter === answer) return;
      options[letter] = wrongDefinitions[wrongIndex];
      wrongIndex += 1;
    });

    return {
      id: `${module.id}-def-${index + 1}`,
      question: `Which definition best matches "${term}"?`,
      options,
      answer,
      explanation: `${term}: ${correctDefinition}`
    };
  });
}

function buildExpandedQuestionBank(module) {
  const correctPool = module.questionBank.map((item) => item.options[item.answer]).filter(Boolean);
  const curated = module.questionBank.map((item, index) =>
    normalizeCuratedQuestion(module, item, index, correctPool)
  );

  const definitions = buildDefinitionQuestions(module);
  return [...curated, ...definitions];
}

function buildSectionLearn(module, topics, sectionIndex) {
  const notes = moduleLearnNotes[module.id] || [];
  const topicLine = topics.length
    ? `In this section, focus on: ${topics.join(', ')}.`
    : 'Use this section as a focused review of the assigned pages.';

  return [
    topicLine,
    notes[sectionIndex % Math.max(1, notes.length)] || module.overview,
    notes[(sectionIndex + 1) % Math.max(1, notes.length)] || `Goal: ${module.objective}`,
    `Why this matters: ${module.realWorld}`
  ];
}

function buildSectionFlashcards(module, keyTerms, topics) {
  const termCards = keyTerms.map((term, index) => ({
    id: `term-${index + 1}`,
    front: term,
    back: getTermDefinition(term, module)
  }));

  const topicCards = topics.slice(0, 4).map((topic, index) => ({
    id: `topic-${index + 1}`,
    front: `Explain this: ${topic}`,
    back: `Tie this concept to ${module.objective.toLowerCase()}.`
  }));

  const memoryCards = module.memoryAids.map((item, index) => ({
    id: `memory-${index + 1}`,
    front: `Memory anchor ${index + 1}`,
    back: item
  }));

  return [...termCards, ...topicCards, ...memoryCards].slice(0, 14);
}

function buildSections(module) {
  const sectionCount = Math.ceil(module.pageCount / SECTION_PAGE_SIZE);
  const topicsPerSection = Math.max(1, Math.ceil(module.topics.length / sectionCount));

  return Array.from({ length: sectionCount }, (_, index) => {
    const start = index * SECTION_PAGE_SIZE + 1;
    const end = Math.min(start + SECTION_PAGE_SIZE - 1, module.pageCount);

    const sectionTopics = module.topics.slice(index * topicsPerSection, (index + 1) * topicsPerSection);
    const topics = sectionTopics.length ? sectionTopics : ['Review and reinforce this section.'];
    const keyTerms = takeWrappedWindow(module.keyTerms, index * 2, 6);
    const learnOverride = mergedSectionLearnOverrides[module.id]?.[index + 1];
    const quizOverrideIds = mergedSectionQuizOverrides[module.id]?.[index + 1] || [];

    const quizSource = quizOverrideIds.length
      ? quizOverrideIds
          .map((quizId) => module.questionBank.find((item) => item.id === quizId))
          .filter(Boolean)
      : takeWrappedWindow(module.questionBank, index * 3, 6);

    const quiz = quizSource.map((question, questionIndex) => ({
      ...question,
      id: `${question.id}-s${index + 1}-${questionIndex + 1}`
    }));

    return {
      id: `${module.id}-section-${index + 1}`,
      title: `Section ${index + 1}`,
      pages: `Pages ${start}-${end}`,
      focus: topics[0],
      topics,
      keyTerms,
      learn: learnOverride || buildSectionLearn(module, topics, index),
      flashcards: buildSectionFlashcards(module, keyTerms, topics),
      quiz
    };
  });
}

function buildMixedQuiz(modules) {
  const mixed = [];
  let round = 0;

  while (mixed.length < 20) {
    let added = 0;

    modules.forEach((module) => {
      const question = module.questionBank[round];
      if (!question || mixed.length >= 20) return;

      mixed.push({
        ...question,
        id: `mixed-${mixed.length + 1}`,
        sourceModule: module.title
      });
      added += 1;
    });

    if (!added) break;
    round += 1;
  }

  return mixed;
}

function applyFullDataModuleOverrides(module) {
  const txtQuestionBank = fullDataOverrides.questionBankByModule?.[module.id] || [];
  const txtTopics = fullDataOverrides.topicsByModule?.[module.id] || [];

  return {
    ...module,
    topics: txtTopics.length ? txtTopics : module.topics,
    questionBank: txtQuestionBank.length ? txtQuestionBank : module.questionBank
  };
}

function buildExtraModulesFromFullData(baseModuleIds) {
  return Object.entries(fullDataOverrides.questionBankByModule || {})
    .filter(([moduleId, questions]) => !baseModuleIds.has(moduleId) && questions?.length)
    .map(([moduleId, questions]) => {
      const meta = fullDataOverrides.moduleMetaById?.[moduleId] || {};
      const topics = fullDataOverrides.topicsByModule?.[moduleId] || [];

      return {
        id: moduleId,
        title: meta.title || moduleId,
        source: meta.source || 'Imported from full data.txt',
        pageCount: meta.pageCount || 42,
        objective: meta.objective || 'Study imported module content.',
        overview: meta.overview || 'Imported module overview.',
        table: meta.table || {
          title: 'Module Summary',
          columns: ['Category', 'Focus', 'Outcome'],
          rows: [
            ['Learn', 'Section content', 'Understanding'],
            ['Practice', 'Question bank', 'Retention'],
            ['Quiz', 'Short checks', 'Progress']
          ]
        },
        keyTerms: meta.keyTerms || ['anatomy', 'physiology'],
        memoryAids: meta.memoryAids || ['Review each section before quiz.'],
        realWorld: meta.realWorld || 'Supports applied anatomy and physiology learning.',
        topics,
        questionBank: questions
      };
    });
}

const baseModuleIds = new Set(moduleBlueprints.map((module) => module.id));
const resolvedModuleBlueprints = [
  ...moduleBlueprints.map(applyFullDataModuleOverrides),
  ...buildExtraModulesFromFullData(baseModuleIds)
];

const modules = resolvedModuleBlueprints.map((module) => {
  const questionBank = buildExpandedQuestionBank(module);
  const withQuestionBank = { ...module, questionBank };
  return { ...withQuestionBank, sections: buildSections(withQuestionBank) };
});

const mixedQuiz = buildMixedQuiz(modules);

export const courseData = {
  appName: '4 Tori',
  title: '4 Tori: Anatomy and Physiology Study App',
  subtitle: 'Learn from uploaded PDFs in 6-8 page sections with A/B/C/D quizzes and a mixed final review.',
  sectionPageSize: SECTION_PAGE_SIZE,
  modules,
  mixedQuiz
};



















