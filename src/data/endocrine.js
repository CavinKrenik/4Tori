const endocrine = {
  id: 'endocrine',
  title: 'Endocrine System',
  source: '6. Endocrine systemPDF.pdf',
  description: 'Comprehensive coverage of the endocrine system including nervous vs endocrine comparison, cell communication, hormone chemistry, transport, receptors, mechanisms of action (lipid-soluble vs water-soluble, G-proteins, cAMP, amplification), hormonal interactions, eicosanoids, growth factors, hypothalamus-pituitary axis, thyroid, parathyroids, adrenals, pancreas, gonads, other endocrine organs (heart ANP, kidneys, skin), stress responses (GAS), aging changes, and endocrine disorders including diabetes mellitus.',
  icon: 'endocrine',

  learningObjectives: [
    'Compare and contrast the nervous and endocrine systems in terms of speed, duration, and specificity.',
    'Describe the four types of cell communication: gap junctions, neurotransmitters, paracrine hormones, and endocrine hormones.',
    'Explain hormone transport in blood (bound vs unbound) and the significance of half-life.',
    'Differentiate between lipid-soluble and water-soluble hormone mechanisms of action.',
    'Describe the cAMP second messenger system including G-proteins, adenylate cyclase, and amplification.',
    'Explain up-regulation and down-regulation of hormone receptors.',
    'Describe hormonal interactions: permissive, synergistic, and antagonistic effects.',
    'Identify hypothalamic releasing/inhibiting hormones and anterior pituitary tropic hormones.',
    'Describe thyroid hormones (T3/T4), calcitonin, PTH, and calcium regulation.',
    'Distinguish adrenal cortex zones and their hormones (mineralocorticoids, glucocorticoids, androgens).',
    'Describe adrenal medulla hormones (epinephrine/norepinephrine) and their fight-or-flight effects.',
    'Explain pancreatic islet hormones (insulin, glucagon, somatostatin) and blood glucose regulation.',
    'Describe the three stages of General Adaptation Syndrome (alarm, resistance, exhaustion).',
    'Identify endocrine disorders: Graves disease, Cushing syndrome, Addison disease, diabetes mellitus Types I and II.',
    'Explain eicosanoids (prostaglandins, leukotrienes) and the action of NSAIDs.'
  ],

  clinicalCorrelations: [
    {
      title: 'Diabetes Mellitus',
      detail: 'Type I (~10%): autoimmune destruction of beta cells, diagnosed ~age 12, requires insulin. Type II (~90%): insulin resistance, risk factors include heredity, age >40, obesity. Signs: polyuria, polydipsia, polyphagia, hyperglycemia. Acute: ketoacidosis (lowered blood pH → dyspnea → coma). Chronic: neuropathy, atherosclerosis, retinal/kidney damage, gangrene.'
    },
    {
      title: 'Cushing Syndrome',
      detail: 'Excess cortical secretion causing hyperglycemia, hypertension, weakness, edema, muscle/bone loss from protein catabolism. Classic body changes: "buffalo hump" fat between shoulders and "moon face" with thin spindly legs. Poor wound healing.'
    },
    {
      title: 'Addison Disease',
      detail: 'Hyposecretion of glucocorticoids causing hypoglycemia, muscle weakness, low BP, dehydration from low Na+, skin darkening (similar to MSH effects), and risk of cardiac arrest.'
    },
    {
      title: 'Graves Disease (Toxic Goiter)',
      detail: 'Autoimmune: antibodies mimic TSH on thyroid receptors → excessive T3/T4 → weight loss, tremors, nervousness, exophthalmos. Contrast with endemic goiter from iodine deficiency → no T3/T4 → elevated TSH → thyroid enlargement.'
    },
    {
      title: 'Cholera Toxin & G-Proteins',
      detail: 'Cholera toxin locks G-protein in activated state in intestinal epithelium → persistent cAMP production → intestinal cells actively transport Cl⁻ (Na+ and water follow) into lumen → massive watery diarrhea → death from dehydration unless ions/fluids replaced and antibiotics given.'
    },
    {
      title: 'GH Disorders',
      detail: 'Childhood hypersecretion → gigantism; childhood hyposecretion → dwarfism. Adult hypersecretion → acromegaly (thickening of bones/soft tissues). Diabetogenic effect of excess GH: persistent hyperglycemia → beta-cell burnout → diabetes.'
    }
  ],

  quickFacts: [
    'Endocrine effects: slow onset (seconds-days), long-lasting (weeks). Nervous: fast (1-10 ms), brief.',
    'Negative feedback is the most common hormone regulation; positive feedback amplifies (e.g., oxytocin).',
    'Lipid-soluble hormones enter cells and activate genes directly; water-soluble use surface receptors and second messengers.',
    'One molecule of epinephrine can trigger breakdown of millions of glycogen molecules (amplification).',
    'Down-regulation: excess hormone → fewer receptors → less sensitivity. Up-regulation: low hormone → more receptors.',
    'Hormonal interactions: Permissive (thyroid strengthens epinephrine), Synergistic (estrogen + LH for oocyte), Antagonistic (insulin vs glucagon).',
    'Anterior pituitary hormones (FLAT PEG): FSH, LH, ACTH, TSH, PRL, Endorphins, GH.',
    'Posterior pituitary stores and releases ADH and oxytocin (made by hypothalamus).',
    'Thyroid is largest endocrine gland; T3/T4 increase metabolic rate; calcitonin lowers blood Ca²⁺.',
    'PTH raises blood Ca²⁺ by activating osteoclasts, increasing kidney reabsorption, promoting calcitriol.',
    'Adrenal cortex 3 zones: mineralocorticoids (aldosterone), glucocorticoids (cortisol), androgens.',
    'Adrenal medulla: sympathetic ganglion releasing epinephrine/norepinephrine (fight-or-flight).',
    'Pancreatic islets: alpha cells (glucagon), beta cells (insulin), delta cells (somatostatin).',
    'Heart secretes ANP: decreases blood volume and BP by increasing Na+ and H₂O loss by kidneys.',
    'NSAIDs (aspirin, ibuprofen) work by inhibiting prostaglandin synthesis without affecting leukotrienes.',
    'GAS stages: Alarm (fight-or-flight), Resistance (cortisol/aldosterone), Exhaustion (resource depletion).'
  ],

  sections: [
    // ===== SECTION 1: Endocrine Basics, Hormone Chemistry & Mechanisms =====
    {
      id: 'endocrine-s1',
      title: 'Endocrine Basics, Hormone Chemistry & Mechanisms of Action',
      pageRange: 'Pages 1-12',
      learnItems: [
        {
          title: 'Nervous vs Endocrine Basics',
          body: 'Endocrine system: hormones released into bloodstream, effects may take hours but last longer. Nervous system: uses neurotransmitters, effects in milliseconds, brief duration. Means: nervous has electrical + chemical; endocrine only chemical. Speed: nervous reacts 1-10 msec; endocrine reacts seconds to days. Adaptation: nervous adapts quickly; endocrine responses are more persistent. Area: nervous is targeted/specific (one organ); endocrine is general/widespread (many organs).'
        },
        {
          title: 'Cell Communication Mechanisms',
          body: 'Gap junctions: pores allowing signaling chemicals to move cell to cell. Neurotransmitters: released from neurons across synaptic gaps. Paracrine (local) hormones: act on nearby cells in tissue fluid. Hormones (strict): chemical messengers traveling in bloodstream to distant targets. Some chemicals act as both hormones and neurotransmitters (e.g., norepinephrine, dopamine, TRH, ADH). Neuroendocrine cells secrete hormones like oxytocin and catecholamines.'
        },
        {
          title: 'Exocrine vs Endocrine Glands',
          body: 'Exocrine: secrete products into ducts to body cavities/surfaces (sweat, oil, mucous, digestive). Endocrine: secrete hormones into bloodstream; includes pituitary, thyroid, parathyroid, adrenal, pineal. Some organs are mixed (2nd function): hypothalamus, thymus, pancreas, ovaries, testes, kidneys, stomach, liver, small intestine, skin, heart, placenta.'
        },
        {
          title: 'General Functions of Hormones',
          body: 'Help regulate: extracellular fluid, metabolism, biological clock, cardiac and smooth muscle contraction, glandular secretion, some immune functions. Support growth and development and reproduction.'
        },
        {
          title: 'Control of Hormone Secretion',
          body: 'Regulated by nervous signals, blood chemistry, or other hormones. Negative feedback: most common; changes in blood levels are reversed (e.g., T3/T4-TSH-TRH loop). Positive feedback: hormone-caused change triggers more hormone release (e.g., oxytocin during labor — contractions stimulate more oxytocin until delivery). Disorders arise from hyposecretion or hypersecretion.'
        },
        {
          title: 'Hormone Transport in Blood',
          body: 'Monoamines and peptide hormones are hydrophilic — mix easily with blood plasma. Steroids and thyroid hormones are hydrophobic — must bind to transport proteins. Bound hormone: attached to transport protein, prolongs half-life to weeks, protected from enzymes and kidney filtration. Only UNBOUND hormone can leave capillary to reach target cell (half-life a few minutes). Transport proteins: albumin, thyretin, and TBG (thyroxine-binding globulin) bind thyroid hormone; steroid hormones bind to globulins (transcortin). Aldosterone has NO transport protein — 20-minute half-life.'
        },
        {
          title: 'Hormone Receptors and Regulation',
          body: 'Hormones only affect target cells with specific membrane proteins called receptors. Receptors constantly being synthesized and broken down. Range: 2,000-100,000 receptors per target cell. Down-regulation: excess hormone → decrease in number of receptors (endocytosis and degradation) → decreases target cell sensitivity. Up-regulation: hormone deficiency → increase in number of receptors → target tissue becomes MORE sensitive. Long-term high pharmacological doses can bind to receptor sites of related hormones. Example: RU486 (mifepristone) blocks progesterone receptors, preventing pregnancy maintenance.'
        },
        {
          title: 'Mechanism: Lipid-Soluble Hormones',
          body: 'Lipid-soluble hormones (steroids, thyroid hormones) diffuse through the phospholipid bilayer and into cell. Bind to intracellular receptor turning on/off specific genes. New mRNA is formed and directs synthesis of new proteins. New protein alters cell\'s activity. This is a DIRECT mechanism — hormone acts as a transcription factor.'
        },
        {
          title: 'Mechanism: Water-Soluble Hormones',
          body: 'Water-soluble hormones (peptides, amines) CANNOT diffuse through plasma membrane. Hormone receptors are integral membrane proteins — hormone acts as FIRST messenger. Receptor protein activates G-protein in membrane. G-protein activates adenylate cyclase to convert ATP to cAMP (cyclic AMP) in the cytosol. cAMP is the SECOND messenger. cAMP activates kinases in cytosol to speed up or slow down physiological responses. Phosphodiesterase inactivates cAMP quickly — cell response turns off unless new hormones arrive.'
        },
        {
          title: 'Second Messengers and Variations',
          body: 'Some hormones increase cAMP: ADH, TSH, ACTH, glucagon, and epinephrine. Some decrease cAMP: growth hormone inhibiting hormone (GHIH/somatostatin). Other substances can also act as second messengers: calcium ions, cGMP. Same hormone may use different second messengers in different target cells.'
        },
        {
          title: 'Amplification of Hormone Effects',
          body: 'Single molecule of hormone binds to receptor → activates ~100 G-proteins → each activates adenylate cyclase producing ~1000 cAMP → each cAMP activates a protein kinase acting on thousands of substrate molecules. Result: one molecule of epinephrine can trigger breakdown of MILLIONS of glycogen molecules into glucose. This cascade explains why tiny hormone amounts have enormous physiological effects.'
        },
        {
          title: 'Cholera Toxin and G-Proteins',
          body: 'Cholera toxin locks G-protein in ACTIVATED state in intestinal epithelium → persistent cAMP production → intestinal cells actively transport chloride (Na+ and water follow) into the lumen → massive watery diarrhea → death from dehydration. Treatment: replace ions and fluids + antibiotic therapy. This demonstrates the critical importance of G-protein regulation.'
        },
        {
          title: 'Hormonal Interactions',
          body: 'Permissive effect: a second hormone strengthens the effects of the first (thyroid hormone strengthens epinephrine\'s effect on lipolysis). Synergistic effect: two hormones acting together produce a greater effect than either alone (estrogen + LH both needed for oocyte production). Antagonistic effects: two hormones with opposite effects (insulin promotes glycogen formation; glucagon stimulates glycogen breakdown).'
        },
        {
          title: 'Eicosanoids (Prostaglandins & Leukotrienes)',
          body: 'Local hormones released by ALL body cells. Leukotrienes: influence WBCs and inflammation. Prostaglandins: alter smooth muscle contraction, glandular secretion, blood flow, platelet function, nerve transmission, metabolism, and more. NSAIDs (ibuprofen, aspirin) treat pain, fever, and inflammation by inhibiting a key enzyme in prostaglandin synthesis WITHOUT affecting leukotriene synthesis. Discovery of how aspirin works was made in 1971. Usefulness of aspirin for fever and pain implies prostaglandins mediate those symptoms.'
        },
        {
          title: 'Growth Factors',
          body: 'Substances with mitogenic qualities — cause cell growth from cell division. Many act locally as autocrines or paracrines. Selected growth factors: epidermal growth factor (EGF), platelet-derived growth factor (PDGF), fibroblast growth factor (FGF), nerve growth factor (NGF), tumor angiogenesis factors, transforming growth factors.'
        }
      ],
      keyTerms: [
        { term: 'Hormone', definition: 'Chemical messenger secreted into bloodstream that stimulates response in distant target cells.' },
        { term: 'Paracrine Hormone', definition: 'Local hormone acting on nearby cells in tissue fluid rather than traveling through bloodstream.' },
        { term: 'Negative Feedback', definition: 'Most common regulation: changes in blood hormone levels are reversed to maintain homeostasis.' },
        { term: 'Transport Protein', definition: 'Blood protein (albumin, transcortin, TBG) that binds hydrophobic hormones, prolonging half-life.' },
        { term: 'Down-Regulation', definition: 'Excess hormone causes decrease in receptor number → less target cell sensitivity.' },
        { term: 'Up-Regulation', definition: 'Hormone deficiency causes increase in receptor number → greater target cell sensitivity.' },
        { term: 'First Messenger', definition: 'The water-soluble hormone itself that binds to the membrane receptor.' },
        { term: 'Second Messenger', definition: 'Intracellular signal (cAMP, Ca²⁺, cGMP) activated by hormone-receptor binding.' },
        { term: 'G-Protein', definition: 'Membrane protein activated by receptor binding; activates adenylate cyclase to produce cAMP.' },
        { term: 'Adenylate Cyclase', definition: 'Enzyme converting ATP to cAMP (second messenger) when activated by G-protein.' },
        { term: 'Phosphodiesterase', definition: 'Enzyme that rapidly inactivates cAMP, turning off the cell response.' },
        { term: 'Amplification', definition: 'Cascading effect where one hormone molecule triggers millions of product molecules.' },
        { term: 'Eicosanoids', definition: 'Local hormones (prostaglandins, leukotrienes) released by all body cells; involved in pain, fever, inflammation.' },
        { term: 'NSAIDs', definition: 'Nonsteroidal anti-inflammatory drugs (aspirin, ibuprofen) that inhibit prostaglandin synthesis.' }
      ],
      memoryAids: [
        'Nervous = phone call (instant, brief); Endocrine = text message (delayed but lasts longer).',
        'Lipid-soluble hormones go INSIDE the cell (direct gene activation). Water-soluble stay OUTSIDE (use second messengers).',
        'Amplification cascade: 1 hormone → 100 G-proteins → 1000s cAMP → millions of product molecules.',
        'Down-regulation: TOO MUCH hormone → FEWER receptors (cell turns down the volume). Up-regulation: TOO LITTLE → MORE receptors (cell turns up the volume).',
        'Hormonal interactions: "PSA" = Permissive (strengthens), Synergistic (together greater), Antagonistic (opposite effects).',
        'NSAIDs block prostaglandins but NOT leukotrienes — discovered in 1971.'
      ],
      quiz: [
        { id: 'en1-q1', question: 'Compared to the endocrine system, the nervous system response is:', options: { A: 'Slower and longer lasting', B: 'Faster and longer lasting', C: 'Faster and shorter in duration', D: 'Slower and shorter in duration' }, answer: 'C', explanation: 'The nervous system responds in 1-10 milliseconds with brief effects, while the endocrine system responds more slowly but effects persist longer.' },
        { id: 'en1-q2', question: 'A local hormone that affects nearby cells in the same tissue is called a:', options: { A: 'Neurotransmitter', B: 'Gap junction messenger', C: 'Paracrine hormone', D: 'Endocrine hormone' }, answer: 'C', explanation: 'Paracrine hormones are local hormones that act on nearby cells in tissue fluid, unlike endocrine hormones traveling through blood.' },
        { id: 'en1-q3', question: 'Only _____ hormone can leave capillaries to reach target cells.', options: { A: 'Bound', B: 'Unbound (free)', C: 'Albumin-linked', D: 'Transcortin-linked' }, answer: 'B', explanation: 'Only unbound hormone can leave capillaries to reach target cells. Bound hormone is protected but inactive, with a longer half-life.' },
        { id: 'en1-q4', question: 'Which hormone has NO transport protein and a 20-minute half-life?', options: { A: 'Cortisol', B: 'T4', C: 'Aldosterone', D: 'Estrogen' }, answer: 'C', explanation: 'Aldosterone has no transport protein and thus a very short half-life of about 20 minutes.' },
        { id: 'en1-q5', question: 'Down-regulation of receptors results from:', options: { A: 'Hormone deficiency', B: 'Excess hormone exposure', C: 'Receptor synthesis', D: 'Decreased phosphodiesterase' }, answer: 'B', explanation: 'Excess hormone → receptors undergo endocytosis and degradation (down-regulation) → decreased target cell sensitivity.' },
        { id: 'en1-q6', question: 'Lipid-soluble hormones act by:', options: { A: 'Activating G-proteins and cAMP', B: 'Diffusing into cells and activating genes directly', C: 'Binding membrane receptors only', D: 'Using calcium as second messenger' }, answer: 'B', explanation: 'Lipid-soluble hormones diffuse through the membrane into the cell, bind intracellular receptors, and directly activate/repress gene transcription.' },
        { id: 'en1-q7', question: 'In the cAMP second messenger system, the enzyme that converts ATP to cAMP is:', options: { A: 'Phosphodiesterase', B: 'Protein kinase', C: 'Adenylate cyclase', D: 'G-protein' }, answer: 'C', explanation: 'Adenylate cyclase, activated by G-protein, converts ATP to cAMP (the second messenger).' },
        { id: 'en1-q8', question: 'Amplification means that one hormone molecule can:', options: { A: 'Activate only one enzyme', B: 'Trigger breakdown of millions of product molecules', C: 'Bind to thousands of receptors simultaneously', D: 'Permanently activate the G-protein' }, answer: 'B', explanation: 'Through the cascade (1 hormone → 100 G-proteins → 1000s cAMP → kinases → substrate molecules), one epinephrine molecule can break down millions of glycogen molecules.' },
        { id: 'en1-q9', question: 'Cholera toxin causes deadly diarrhea because it:', options: { A: 'Destroys intestinal villi', B: 'Locks G-protein in activated state → persistent cAMP → Cl⁻/water secretion', C: 'Blocks all hormone receptors', D: 'Inhibits phosphodiesterase permanently' }, answer: 'B', explanation: 'Cholera toxin locks G-protein in activated state → continuous cAMP production → intestinal cells secrete Cl⁻, Na+, and water into lumen → massive diarrhea.' },
        { id: 'en1-q10', question: 'Insulin promoting glycogen formation while glucagon stimulates glycogen breakdown is an example of:', options: { A: 'Permissive effect', B: 'Synergistic effect', C: 'Antagonistic effect', D: 'Amplification' }, answer: 'C', explanation: 'Antagonistic effects: two hormones with opposite effects on the same process — insulin and glucagon have opposite effects on glycogen.' },
        { id: 'en1-q11', question: 'NSAIDs treat pain and inflammation by:', options: { A: 'Blocking leukotriene synthesis', B: 'Inhibiting prostaglandin synthesis', C: 'Activating complement', D: 'Increasing histamine release' }, answer: 'B', explanation: 'NSAIDs (aspirin, ibuprofen) inhibit a key enzyme in prostaglandin synthesis without affecting leukotriene synthesis.' },
        { id: 'en1-q12', question: 'Growth factors primarily act as:', options: { A: 'Endocrine hormones traveling through blood', B: 'Local autocrines or paracrines with mitogenic effects', C: 'Neurotransmitters at synapses', D: 'Transport proteins for steroids' }, answer: 'B', explanation: 'Growth factors are mitogenic substances that cause cell division; many act locally as autocrines or paracrines.' }
      ]
    },

    // ===== SECTION 2: Hypothalamus-Pituitary, Thyroid, Parathyroids, Adrenals, Pancreas & Other Organs =====
    {
      id: 'endocrine-s2',
      title: 'Glands & Hormones: Hypothalamus, Pituitary, Thyroid, Adrenals, Pancreas & More',
      pageRange: 'Pages 9-22',
      learnItems: [
        {
          title: 'Hypothalamus-Pituitary Overview',
          body: 'Both called master endocrine glands because their hormones control other glands. Hypothalamus receives input from cortex, thalamus, limbic system, and internal organs. Controls pituitary with releasing and inhibiting hormones via hypothalamo-hypophyseal portal system. Pituitary: pea-sized gland in sella turcica, attached to brain via infundibulum. Anterior lobe ~75% (glandular, develops from roof of mouth). Posterior lobe ~25% (neural tissue — axon terminals from hypothalamic neurons and pituicytes).'
        },
        {
          title: 'Anterior Pituitary Hormones',
          body: 'Adenohypophysis secretes under hypothalamic control: GH (from somatotropes — tissue growth via mitosis/differentiation + liver IGF-I), TSH (from thyrotrophs — stimulates T3/T4), FSH and LH (from gonadotrophs — gonads), PRL (from lactotrophs — milk production), ACTH and MSH (from corticotrophs — adrenal cortex/melanocytes). All are tropic hormones targeting other endocrine glands.'
        },
        {
          title: 'Growth Hormone (GH) Details',
          body: 'GH-IGF increase protein synthesis, enhance amino acid transport, reduce protein breakdown. Stimulate lipid metabolism (FFA and glycerol release), glucose-sparing, Na+/K+/Cl- retention, and Ca²⁺ absorption. Regulation: low blood glucose → GHRH → more GH; high blood glucose → GHIH → less GH. GH highest during deep sleep and after high-protein meals; falls to ~1/4 by age 75. Diabetogenic effect: excess GH → persistent hyperglycemia → beta-cell burnout → diabetes.'
        },
        {
          title: 'FSH and LH',
          body: 'FSH: forms ovarian follicles and stimulates estrogen secretion in females; stimulates sperm production in males. LH: stimulates estrogen, ovulation, corpus luteum formation, progesterone secretion in females; stimulates interstitial (Leydig) cells to secrete testosterone in males. Both controlled by GnRH from hypothalamus.'
        },
        {
          title: 'Prolactin and ACTH',
          body: 'PRL: causes milk production; suckling reduces hypothalamic inhibition (PIH) → raises PRL → milk production. ACTH: stimulates adrenal cortex to produce glucocorticoids. MSH: increases skin pigmentation in frogs, uncertain function in humans.'
        },
        {
          title: 'Posterior Pituitary — ADH and Oxytocin',
          body: 'Neurohypophysis does NOT synthesize hormones — stores and releases ADH and oxytocin from hypothalamic axon terminals. Oxytocin: stimulates uterine contractions (positive feedback during labor); causes milk ejection via myoepithelial contraction when suckling/hearing baby cry. ADH (vasopressin): decreases urine production, decreases sweating, increases BP. Dehydration → ADH release → water retention + vasoconstriction. Overhydration → ADH inhibition → more urine.'
        },
        {
          title: 'Pineal Gland and Melatonin',
          body: 'Peak secretion at 1-5 years; ~75% lower by puberty. Produces serotonin by day, converts to melatonin at night. Melatonin may regulate timing of puberty. In darkness: fewer retinal impulses → less norepinephrine → more melatonin → sleepiness. In light: norepinephrine inhibits melatonin. Melatonin is increased in SAD and PMS; phototherapy can reduce symptoms.'
        },
        {
          title: 'Thyroid Gland and Hormones',
          body: 'LARGEST endocrine gland with high blood flow; two lobes with isthmus on anterior/lateral trachea. Follicular cells in follicles secrete T3 and T4: increase metabolic rate, O₂ consumption, heat production, heart rate/contractility, respiratory rate, appetite, and breakdown of carbs/lipids/proteins. C (parafollicular) cells secrete calcitonin: DECREASES blood Ca²⁺ by promoting bone deposition (especially important in children). Regulation: TRH → TSH → T3/T4 (negative feedback).'
        },
        {
          title: 'Parathyroid Glands and PTH',
          body: '4 pea-sized glands on back of thyroid. PTH RAISES blood calcium levels by: increasing osteoclast activity (bone resorption), increasing Ca²⁺ reabsorption by kidneys, inhibiting phosphate reabsorption, promoting calcitriol (vitamin D3) formation by kidneys → increased Ca²⁺/Mg²⁺ absorption from intestine. PTH is opposite of calcitonin. High/low blood Ca²⁺ levels determine which hormone is released (PTH or calcitonin).'
        },
        {
          title: 'Adrenal Glands — Structure',
          body: 'One on top of each kidney; 3×3×1 cm, weighs 5 grams. Cortex (from mesoderm): 3 zones producing 3 types of hormones. Medulla (from ectoderm): modified sympathetic ganglion producing epinephrine/norepinephrine. Cortex and medulla are functionally distinct.'
        },
        {
          title: 'Adrenal Cortex — Mineralocorticoids',
          body: '95% of activity from aldosterone. Functions: increase Na+ reabsorption (Cl⁻, bicarbonate, and water follow), promote K+ and H+ excretion. Hypersecretion → aldosteronism: tumor causing high BP from Na+/water retention. Regulation involves renin-angiotensin-aldosterone system (RAAS).'
        },
        {
          title: 'Adrenal Cortex — Glucocorticoids',
          body: '95% of activity from cortisol. Functions: increase protein catabolism and lipolysis, conversion of amino acids to glucose (gluconeogenesis), provide resistance to stress by making nutrients available for ATP production, raise BP by vasoconstriction. Anti-inflammatory effects (reduce histamine from mast cells, decrease capillary permeability, depress phagocytosis — basis for cortisone skin creams). Regulated by ACTH.'
        },
        {
          title: 'Adrenal Cortex — Androgens & Adrenal Medulla',
          body: 'Androgens (zona reticularis): small amount of male hormone; insignificant in males; may contribute to sex drive in females; converted to estrogen in postmenopausal females. Adrenal Medulla: sympathetic ganglion with chromaffin cells; sympathetic stimulation releases epinephrine/norepinephrine. Effects: increase BP, heart rate, blood flow to skeletal muscle, pulmonary airflow; decrease digestion and urine formation; stimulate gluconeogenesis and glycogenolysis. Hormonal effect is longer lasting than direct sympathetic stimulation. Stress causes medullary cells to stimulate cortex.'
        },
        {
          title: 'Pancreatic Hormones',
          body: 'Retroperitoneal, inferior/dorsal to stomach. 1-2 million pancreatic islets (98% of organ produces digestive enzymes — exocrine). Endocrine: Beta cells (β) produce insulin: secreted when blood glucose rises after meals; stimulates glucose/amino acid uptake, glycogen/fat/protein synthesis; antagonizes glucagon. Alpha cells (α) produce glucagon: secreted during low carbohydrate/fasting; stimulates glycogenolysis, fat catabolism, gluconeogenesis. Delta cells (δ) produce somatostatin: modulates alpha and beta cell secretion. Hyperglycemic hormones: glucagon, epinephrine, norepinephrine, cortisol. Hypoglycemic hormone: insulin (the only one!).'
        },
        {
          title: 'Thymus',
          body: 'Located in mediastinum superior to heart; undergoes involution after puberty. Secretes thymopoietin and thymosins that regulate T-lymphocyte development and activation.'
        },
        {
          title: 'Endocrine Functions of Other Organs',
          body: 'Heart: atrial natriuretic peptide (ANP) — released with increased BP → decreases blood volume and BP by increasing Na+ and H₂O loss by kidneys. Skin: keratinocytes produce vitamin D3 (first step in synthesis). Liver: converts D3 to calcidiol, source of IGF-I, secretes ~15% of erythropoietin, secretes angiotensinogen (precursor of angiotensin II). Kidneys: convert calcidiol to calcitriol (active vitamin D), produce 85% of erythropoietin, convert angiotensinogen to angiotensin I. Stomach/small intestine: 10 enteric hormones coordinating digestive motility/secretion. Ovaries/Testes: estrogen/progesterone, testosterone/inhibin. Placenta: estrogen, progesterone for pregnancy.'
        },
        {
          title: 'Gonads — Ovaries and Testes',
          body: 'Ovaries: granulosa cells produce estradiol (first half of cycle), corpus luteum produces estradiol + progesterone. Functions: development of female reproductive system/physique, regulate menstrual cycle, sustain pregnancy, prepare mammary glands. Both ovaries secrete inhibin (suppresses FSH). Testes: interstitial (Leydig) cells produce testosterone and estrogen. Functions: male reproductive system development, sustain sperm production and sex drive. Sertoli cells secrete inhibin to suppress FSH and stabilize sperm production.'
        }
      ],
      keyTerms: [
        { term: 'Hypothalamo-Hypophyseal Portal System', definition: 'Portal blood system carrying releasing/inhibiting hormones from hypothalamus directly to anterior pituitary.' },
        { term: 'Tropic Hormone', definition: 'Hormone targeting and regulating another endocrine gland (TSH → thyroid, ACTH → adrenal cortex).' },
        { term: 'IGF-I', definition: 'Insulin-like growth factor from liver; mediates many GH growth-promoting effects.' },
        { term: 'ADH (Vasopressin)', definition: 'Posterior pituitary hormone decreasing urine production, decreasing sweating, increasing BP.' },
        { term: 'Calcitonin', definition: 'Thyroid C-cell hormone decreasing blood Ca²⁺ by promoting bone deposition.' },
        { term: 'PTH', definition: 'Parathyroid hormone raising blood Ca²⁺ via osteoclast activation, kidney reabsorption, and calcitriol.' },
        { term: 'Aldosterone', definition: 'Primary mineralocorticoid; increases Na+ reabsorption; 95% of mineralocorticoid activity.' },
        { term: 'Cortisol', definition: 'Primary glucocorticoid; increases gluconeogenesis, protein catabolism, stress resistance; anti-inflammatory.' },
        { term: 'Chromaffin Cells', definition: 'Modified neurons in adrenal medulla that release epinephrine/norepinephrine.' },
        { term: 'Insulin', definition: 'Beta-cell hormone; the ONLY hypoglycemic hormone; promotes glucose uptake and nutrient storage.' },
        { term: 'Glucagon', definition: 'Alpha-cell hormone; stimulates glycogenolysis, fat catabolism, and gluconeogenesis to raise blood glucose.' },
        { term: 'ANP', definition: 'Atrial natriuretic peptide; heart hormone that lowers blood volume/BP by increasing renal Na+ and H₂O excretion.' },
        { term: 'Melatonin', definition: 'Pineal hormone converted from serotonin at night; promotes sleepiness; increased in SAD/PMS.' }
      ],
      memoryAids: [
        'Anterior pituitary hormones: "FLAT PEG" = FSH, LH, ACTH, TSH, PRL, Endorphins, GH.',
        'ADH = Anti-Diuretic Hormone = anti-peeing; retains water.',
        'CalciTONIN TONES DOWN calcium. PTH PUTS (calcium) To High.',
        'Adrenal cortex zones (outer→inner): "GFR" = Glomerulosa (mineralocorticoids), Fasciculata (glucocorticoids), Reticularis (androgens). "Go Find Rex, the Salt, Sugar, Sex dog."',
        'Insulin is the ONLY hypoglycemic hormone; everything else raises blood sugar.',
        'GH = highest in deep SLEEP and after PROTEIN meals.',
        'Melatonin = "Mela-NIGHT-in" — rises at night, makes you sleepy.'
      ],
      quiz: [
        { id: 'en2-q1', question: 'The portal system carrying hypothalamic hormones to the anterior pituitary is the:', options: { A: 'Hepatic portal system', B: 'Hypothalamo-hypophyseal portal system', C: 'Systemic venous system', D: 'Pulmonary circulation' }, answer: 'B', explanation: 'The hypothalamo-hypophyseal portal system carries releasing/inhibiting hormones from hypothalamus directly to the anterior pituitary.' },
        { id: 'en2-q2', question: 'The posterior pituitary:', options: { A: 'Synthesizes ADH and oxytocin', B: 'Stores and releases ADH and oxytocin made in hypothalamus', C: 'Releases ACTH and MSH', D: 'Produces GH' }, answer: 'B', explanation: 'The posterior pituitary does not synthesize hormones — it stores and releases ADH and oxytocin made by hypothalamic neurons.' },
        { id: 'en2-q3', question: 'Excess GH in childhood causes _____, while in adults it causes _____.', options: { A: 'Dwarfism; acromegaly', B: 'Gigantism; acromegaly', C: 'Acromegaly; gigantism', D: 'Dwarfism; gigantism' }, answer: 'B', explanation: 'Childhood GH excess → gigantism (longitudinal growth). Adult GH excess → acromegaly (bone/tissue thickening, growth plates are closed).' },
        { id: 'en2-q4', question: 'Thyroid follicular cells secrete:', options: { A: 'Calcitonin only', B: 'T3 and T4', C: 'PTH', D: 'Melatonin' }, answer: 'B', explanation: 'Thyroid follicular cells secrete T3 and T4 (increase metabolic rate). Calcitonin is from C (parafollicular) cells.' },
        { id: 'en2-q5', question: 'PTH raises blood calcium by all EXCEPT:', options: { A: 'Increasing osteoclast activity', B: 'Promoting calcitriol formation in kidneys', C: 'Promoting bone deposition', D: 'Increasing Ca²⁺ reabsorption by kidneys' }, answer: 'C', explanation: 'PTH raises Ca²⁺ by activating osteoclasts (bone resorption), promoting calcitriol, and increasing kidney reabsorption. Bone deposition is the role of calcitonin.' },
        { id: 'en2-q6', question: 'The adrenal cortex zone producing mineralocorticoids (aldosterone) is the:', options: { A: 'Zona fasciculata', B: 'Zona reticularis', C: 'Zona glomerulosa', D: 'Medulla' }, answer: 'C', explanation: 'Zona glomerulosa produces mineralocorticoids (aldosterone). Fasciculata produces glucocorticoids. Reticularis produces androgens.' },
        { id: 'en2-q7', question: 'Cortisol functions include all EXCEPT:', options: { A: 'Gluconeogenesis', B: 'Anti-inflammatory effects', C: 'Lowering blood pressure', D: 'Increasing protein catabolism' }, answer: 'C', explanation: 'Cortisol RAISES BP by vasoconstriction. Other functions: gluconeogenesis, anti-inflammatory effects, increased protein catabolism and lipolysis.' },
        { id: 'en2-q8', question: 'The adrenal medulla releases hormones that are:', options: { A: 'Mineralocorticoids', B: 'Epinephrine and norepinephrine', C: 'Androgens', D: 'Glucocorticoids' }, answer: 'B', explanation: 'Adrenal medulla chromaffin cells release epinephrine and norepinephrine in response to sympathetic stimulation.' },
        { id: 'en2-q9', question: 'The ONLY hormone that lowers blood glucose is:', options: { A: 'Glucagon', B: 'Cortisol', C: 'Insulin', D: 'Epinephrine' }, answer: 'C', explanation: 'Insulin is the only hypoglycemic hormone. Glucagon, cortisol, epinephrine, and norepinephrine all RAISE blood glucose.' },
        { id: 'en2-q10', question: 'Glucagon is produced by pancreatic islet _____ cells and acts to:', options: { A: 'Beta; lower blood glucose', B: 'Alpha; raise blood glucose', C: 'Delta; modulate other islet cells', D: 'Alpha; lower blood glucose' }, answer: 'B', explanation: 'Alpha cells produce glucagon which raises blood glucose via glycogenolysis, fat catabolism, and gluconeogenesis.' },
        { id: 'en2-q11', question: 'ANP from the heart:', options: { A: 'Raises blood pressure', B: 'Decreases blood volume and BP by increasing Na+/H₂O loss by kidneys', C: 'Stimulates aldosterone release', D: 'Constricts blood vessels' }, answer: 'B', explanation: 'ANP (atrial natriuretic peptide) is released when BP rises; it decreases blood volume and BP by increasing renal excretion of Na+ and water.' },
        { id: 'en2-q12', question: 'FSH in females and males respectively:', options: { A: 'Produces testosterone; stimulates ovulation', B: 'Stimulates ovarian follicle development; stimulates sperm production', C: 'Causes milk ejection; increases BP', D: 'Stimulates estrogen only; inhibits sperm' }, answer: 'B', explanation: 'FSH stimulates ovarian follicle formation and estrogen in females, and sperm production (spermatogenesis) in testes in males.' },
        { id: 'en2-q13', question: 'Melatonin secretion is highest during:', options: { A: 'Bright sunlight', B: 'Darkness', C: 'Exercise', D: 'High-carb meals' }, answer: 'B', explanation: 'In darkness, fewer retinal impulses → less norepinephrine → increased melatonin → sleepiness.' },
        { id: 'en2-q14', question: 'The kidneys produce 85% of the body\'s:', options: { A: 'Calcitonin', B: 'Erythropoietin', C: 'Insulin', D: 'Cortisol' }, answer: 'B', explanation: 'Kidneys produce 85% of erythropoietin (stimulates bone marrow RBC production). Liver produces ~15%.' },
        { id: 'en2-q15', question: 'Aldosterone hypersecretion (aldosteronism) causes:', options: { A: 'Low blood pressure', B: 'High blood pressure from Na+/water retention', C: 'Hypoglycemia', D: 'Bone resorption' }, answer: 'B', explanation: 'Aldosteronism (tumor) → excessive Na+ and water reabsorption → high blood pressure.' }
      ]
    },

    // ===== SECTION 3: Stress, Aging, Endocrine Disorders & Diabetes =====
    {
      id: 'endocrine-s3',
      title: 'Stress (GAS), Aging & Endocrine Disorders',
      pageRange: 'Pages 22-30',
      learnItems: [
        {
          title: 'Stress and General Adaptation Syndrome (GAS)',
          body: 'Stress response = set of bodily changes called General Adaptation Syndrome (GAS). Any stimulus producing stress response = stressor. Stress resets body to meet emergency. Eustress: productive stress for challenges. Distress: harmful stress lowering resistance to infection. GAS has three stages: Alarm, Resistance, and Exhaustion.'
        },
        {
          title: 'Alarm Reaction (Fight-or-Flight)',
          body: 'Initiated by hypothalamic stimulation of sympathetic ANS and adrenal medulla. Effects: increases circulation, promotes ATP synthesis, nonessential body functions inhibited (digestive, urinary, reproductive). Catecholamines (epinephrine/norepinephrine) released for immediate response.'
        },
        {
          title: 'Resistance Reaction',
          body: 'Initiated by hypothalamic releasing hormones for long-term stress response (CRH, GHRH, TRH). Results: increased aldosterone secretion → conserve Na+ and raise BP, eliminate H+. Increased cortisol secretion → protein catabolism increased, alternative glucose sources found (gluconeogenesis). Increased thyroid hormone → increased metabolism. Allows body to continue to fight stressor over extended period.'
        },
        {
          title: 'Exhaustion Stage',
          body: 'Resources of body become depleted. Resistance stage cannot be maintained. Prolonged exposure to resistance-reaction hormones causes: wasting of muscle (protein catabolism), suppression of immune system, ulceration of GI tract, failure of pancreatic beta cells. Demonstrates that chronic stress is genuinely harmful.'
        },
        {
          title: 'Stress, Immune System, and Disease',
          body: 'Stress inhibits immune system, increasing risk of hypertension, asthma, migraine, gastritis, colitis, and depression. Macrophages secrete interleukin-1 linking stress and immunity; immune substances then suppress interleukin-1 in feedback loop.'
        },
        {
          title: 'Endocrine Changes with Aging',
          body: 'GH production decreases → muscle atrophy. TSH increases but metabolic rate still decreases, body fat increases, hypothyroidism more common. Thymus replaced with adipose after puberty. Adrenals produce less cortisol/aldosterone. Receptor sensitivity to glucose declines. Ovaries stop responding to gonadotropins → reduced estrogen → osteoporosis and atherosclerosis.'
        },
        {
          title: 'General Endocrine Disorders',
          body: 'Hyposecretion: inadequate hormone release from tumors/lesions destroying glands. Example: head trauma damaging pituitary → ADH deficiency → diabetes insipidus (chronic polyuria). Hypersecretion: excessive hormone from tumors or autoimmune. Example: Graves disease (antibodies mimic TSH).'
        },
        {
          title: 'Pituitary Disorders — GH Imbalance',
          body: 'GH hypersecretion in adults → acromegaly (thickening of bones/soft tissues). GH oversecretion in childhood/adolescence → gigantism. GH hyposecretion in childhood → dwarfism.'
        },
        {
          title: 'Thyroid Disorders',
          body: 'Hyperthyroidism: weight loss, tremors, nervousness, exophthalmos. Endemic goiter: iodine deficiency → no T3/T4, no negative feedback → elevated TSH → thyroid enlargement. Toxic goiter (Graves disease): antibodies mimic TSH → excessive T3/T4 + exophthalmos. Congenital hypothyroidism (infants): abnormal bone development, thick facial features, low temp, lethargy, brain damage, cretinism. Myxedema (adult hypothyroidism): low metabolic rate, sluggishness, weight gain, constipation, dry skin/hair, cold sensitivity, high BP, tissue swelling.'
        },
        {
          title: 'Parathyroid Disorders',
          body: 'Hypoparathyroidism: often from accidental surgical removal during thyroid surgery → can cause fatal tetany within 3-4 days. Hyperparathyroidism: excess PTH from tumor → soft, fragile, deformed bones + increased blood Ca²⁺ + renal calculi (kidney stones).'
        },
        {
          title: 'Adrenal Disorders',
          body: 'Cushing syndrome: excess cortical secretion → hyperglycemia, hypertension, weakness, edema, muscle/bone loss, "buffalo hump" and "moon face" with thin legs, poor wound healing. Adrenogenital syndrome (AGS): adrenal androgen hypersecretion → external genital enlargement in children/early puberty, masculinization in women (deeper voice, beard). Addison disease: glucocorticoid hyposecretion → hypoglycemia, muscle weakness, low BP, dehydration, skin darkening, risk of cardiac arrest.'
        },
        {
          title: 'Diabetes Mellitus — Core Features and Types',
          body: 'Due to insulin hyposecretion or resistance. Classic signs: polyuria, polydipsia, polyphagia + hyperglycemia, glycosuria, ketonuria. Osmotic diuresis: glucose above renal transport maximum remains in urine → increases osmolarity → pulls water. Type I (IDDM, ~10%): autoimmune destruction of beta cells, diagnosed ~age 12; treatment: diet, exercise, insulin injections/pump. Type II (NIDDM, ~90%): insulin resistance; risk factors: heredity, age >40, obesity; treatment: weight loss + oral meds.'
        },
        {
          title: 'Diabetes Pathology — Acute and Chronic',
          body: 'Acute: cells cannot absorb glucose → rely on fats/proteins → weight loss/weakness. Increased fat catabolism → elevated FFA and ketone bodies; ketonuria causes osmotic diuresis with Na+/K+ loss. Ketoacidosis: ketones lower blood pH → dyspnea → diabetic coma if untreated. Chronic hyperglycemia → neuropathy + atherosclerosis → retina/kidney damage (Type I), heart failure/gangrene (Type II).'
        },
        {
          title: 'Hyperinsulinism and Insulin Shock',
          body: 'Causes: excessive insulin injection or pancreatic islet tumor. Effects: hypoglycemia → weakness, hunger → triggers epinephrine, GH, glucagon release → anxiety, sweating, increased heart rate. Insulin shock: uncorrected hyperinsulinism → disorientation, convulsions, unconsciousness.'
        }
      ],
      keyTerms: [
        { term: 'General Adaptation Syndrome (GAS)', definition: 'Three-stage stress response: Alarm (fight-or-flight), Resistance (cortisol/aldosterone), Exhaustion (depletion).' },
        { term: 'Acromegaly', definition: 'Adult GH hypersecretion → thickening of bones and soft tissues.' },
        { term: 'Cushing Syndrome', definition: 'Excess cortisol → hyperglycemia, hypertension, weakness, buffalo hump, moon face.' },
        { term: 'Addison Disease', definition: 'Glucocorticoid hyposecretion → hypoglycemia, low BP, dehydration, skin darkening, cardiac arrest risk.' },
        { term: 'Graves Disease', definition: 'Autoimmune: antibodies mimic TSH → excessive thyroid hormone → weight loss, exophthalmos.' },
        { term: 'Myxedema', definition: 'Adult hypothyroidism → low metabolic rate, weight gain, cold sensitivity, tissue swelling.' },
        { term: 'Diabetes Mellitus', definition: 'Insulin hyposecretion (Type I) or resistance (Type II); polyuria, polydipsia, polyphagia, hyperglycemia.' },
        { term: 'Ketoacidosis', definition: 'Ketone bodies from fat catabolism lower blood pH → dyspnea → diabetic coma.' },
        { term: 'Hyperinsulinism', definition: 'Excess insulin causing hypoglycemia → weakness, anxiety, sweating; may progress to insulin shock.' },
        { term: 'Diabetes Insipidus', definition: 'ADH deficiency → chronic polyuria; caused by pituitary damage, distinct from diabetes mellitus.' }
      ],
      memoryAids: [
        'GAS stages: "ARE" = Alarm (fight-or-flight), Resistance (long-term hormones), Exhaustion (depletion).',
        'The 3 Ps of diabetes: Polyuria (peeing a lot), Polydipsia (drinking a lot), Polyphagia (eating a lot).',
        'Cushing = CUSHION (fat: moon face, buffalo hump). Addison = ADDITION of dark skin color.',
        'Type 1 = 1 problem (no insulin — autoimmune). Type 2 = 2 problems (insulin exists but cells resist it).',
        'Acromegaly = ACRO (extremities) + MEGALY (enlargement) in adults.',
        'Graves disease = GRAVE mistake by immune system: antibodies mimic TSH → thyroid hyperstimulation.'
      ],
      quiz: [
        { id: 'en3-q1', question: 'The three stages of General Adaptation Syndrome are:', options: { A: 'Onset, Stadium, Defervescence', B: 'Alarm, Resistance, Exhaustion', C: 'Acute, Subacute, Chronic', D: 'Initiation, Propagation, Termination' }, answer: 'B', explanation: 'GAS has three stages: Alarm (fight-or-flight from sympathetic/adrenal medulla), Resistance (hypothalamic releasing hormones for long-term), and Exhaustion (resource depletion).' },
        { id: 'en3-q2', question: 'During the resistance stage of GAS, which hormone conserves Na+ and raises BP?', options: { A: 'Insulin', B: 'Melatonin', C: 'Aldosterone', D: 'Calcitonin' }, answer: 'C', explanation: 'During resistance, increased aldosterone secretion conserves Na+ (and water), raising blood pressure and eliminating H+.' },
        { id: 'en3-q3', question: 'Prolonged exhaustion stage of GAS can cause all EXCEPT:', options: { A: 'Muscle wasting', B: 'Immune suppression', C: 'GI ulceration', D: 'Increased bone density' }, answer: 'D', explanation: 'Exhaustion causes muscle wasting (protein catabolism), immune suppression, GI ulceration, and beta-cell failure — not increased bone density.' },
        { id: 'en3-q4', question: 'Diabetes insipidus is caused by:', options: { A: 'Insulin resistance', B: 'ADH deficiency', C: 'Excess aldosterone', D: 'Thyroid hyperfunction' }, answer: 'B', explanation: 'Diabetes insipidus results from ADH deficiency (e.g., from head trauma damaging pituitary) → chronic polyuria. It is unrelated to insulin/glucose.' },
        { id: 'en3-q5', question: 'Graves disease involves:', options: { A: 'Iodine deficiency', B: 'Autoantibodies mimicking TSH', C: 'Lack of ACTH', D: 'Excess GH' }, answer: 'B', explanation: 'Graves disease: autoimmune antibodies mimic TSH on thyroid receptors → excessive T3/T4 production → hyperthyroidism with exophthalmos.' },
        { id: 'en3-q6', question: 'Cushing syndrome is associated with:', options: { A: 'Hypoglycemia and low BP', B: 'Hyperglycemia, hypertension, and muscle wasting', C: 'Weight loss and hypotension', D: 'Increased melatonin' }, answer: 'B', explanation: 'Cushing syndrome: excess cortisol → hyperglycemia, hypertension, weakness, edema, muscle/bone loss, buffalo hump, moon face.' },
        { id: 'en3-q7', question: 'Addison disease is characterized by:', options: { A: 'Hyperglycemia and obesity', B: 'Hypoglycemia, low BP, dehydration, skin darkening', C: 'Goiter and exophthalmos', D: 'Tetany and kidney stones' }, answer: 'B', explanation: 'Addison disease: glucocorticoid hyposecretion → hypoglycemia, muscle weakness, low BP, dehydration, skin darkening, cardiac arrest risk.' },
        { id: 'en3-q8', question: 'Type I diabetes is most closely associated with:', options: { A: 'Insulin resistance', B: 'Autoimmune destruction of beta cells', C: 'Onset after age 40', D: 'Obesity' }, answer: 'B', explanation: 'Type I diabetes: autoimmune destruction of pancreatic beta cells, usually diagnosed ~age 12, requires insulin therapy.' },
        { id: 'en3-q9', question: 'Ketoacidosis in diabetes:', options: { A: 'Raises blood pH', B: 'Lowers blood pH and may cause dyspnea and coma', C: 'Only affects thyroid', D: 'Is always asymptomatic' }, answer: 'B', explanation: 'Ketoacidosis: excessive ketone bodies from fat catabolism lower blood pH → dyspnea → potentially diabetic coma if untreated.' },
        { id: 'en3-q10', question: 'Hyperinsulinism can progress to:', options: { A: 'Ketoacidosis', B: 'Insulin shock (disorientation, convulsions, unconsciousness)', C: 'Hyperthyroidism', D: 'Acromegaly' }, answer: 'B', explanation: 'Uncorrected hyperinsulinism → severe hypoglycemia → insulin shock with disorientation, convulsions, or unconsciousness.' },
        { id: 'en3-q11', question: 'With aging, TSH levels tend to:', options: { A: 'Decrease', B: 'Increase to compensate for declining thyroid response', C: 'Stay constant', D: 'Drop to zero' }, answer: 'B', explanation: 'TSH increases with age trying to stimulate the thyroid, but metabolic rate still decreases and hypothyroidism becomes more common.' },
        { id: 'en3-q12', question: 'Congenital hypothyroidism in infants can cause:', options: { A: 'Gigantism', B: 'Abnormal bone development, brain damage, cretinism', C: 'Exophthalmos', D: 'Aldosteronism' }, answer: 'B', explanation: 'Congenital hypothyroidism (low TH in infants): abnormal bone development, thick facial features, low temp, lethargy, brain damage, dwarfism/cretinism.' },
        { id: 'en3-q13', question: 'Osmotic diuresis in diabetes occurs because:', options: { A: 'Kidneys reabsorb all glucose', B: 'Excess glucose in urine raises osmolarity and pulls water', C: 'ADH is absent', D: 'Kidneys stop filtering' }, answer: 'B', explanation: 'When glucose exceeds renal transport maximum, it remains in urine, raises osmolarity, and pulls water into urine via osmosis.' },
        { id: 'en3-q14', question: 'Hypoparathyroidism can cause fatal _____ within 3-4 days.', options: { A: 'Ketoacidosis', B: 'Tetany', C: 'Insulin shock', D: 'Myxedema coma' }, answer: 'B', explanation: 'Hypoparathyroidism (often from accidental surgical removal during thyroidectomy) → low Ca²⁺ → fatal tetany (muscle spasms) within 3-4 days.' },
        { id: 'en3-q15', question: 'Adrenogenital syndrome may cause in women:', options: { A: 'Feminization', B: 'Masculinization with deeper voice and beard', C: 'Complete hair loss', D: 'Hypothyroidism' }, answer: 'B', explanation: 'AGS: adrenal androgen hypersecretion → masculinization in women (deeper voice, beard growth).' }
      ]
    }
  ],

  // ===== MODULE-LEVEL QUIZ =====
  quiz: [
    { id: 'en-q1', question: 'The second messenger produced by adenylate cyclase is:', options: { A: 'ATP', B: 'cAMP', C: 'G-protein', D: 'cGMP' }, answer: 'B', explanation: 'Adenylate cyclase converts ATP to cAMP (cyclic AMP), which is the primary second messenger activating protein kinases.' },
    { id: 'en-q2', question: 'Which hormone is stored but NOT synthesized by the posterior pituitary?', options: { A: 'GH', B: 'ACTH', C: 'Oxytocin', D: 'TSH' }, answer: 'C', explanation: 'The posterior pituitary stores and releases ADH and oxytocin, both synthesized by hypothalamic neurons.' },
    { id: 'en-q3', question: 'The thyroid is the _______ endocrine gland.', options: { A: 'Smallest', B: 'Most vascular', C: 'Largest', D: 'Least important' }, answer: 'C', explanation: 'The thyroid is the largest endocrine gland, with high blood flow and two lobes connected by an isthmus.' },
    { id: 'en-q4', question: 'Calcitonin and PTH have _____ effects on blood calcium.', options: { A: 'Identical', B: 'Antagonistic (opposite)', C: 'Synergistic', D: 'Permissive' }, answer: 'B', explanation: 'Calcitonin lowers blood Ca²⁺ (promotes bone deposition); PTH raises blood Ca²⁺ (activates osteoclasts). They are antagonistic.' },
    { id: 'en-q5', question: 'The adrenal cortex zone producing glucocorticoids (cortisol) is the:', options: { A: 'Zona glomerulosa', B: 'Zona fasciculata', C: 'Zona reticularis', D: 'Medulla' }, answer: 'B', explanation: 'Zona fasciculata produces glucocorticoids (cortisol). Glomerulosa → mineralocorticoids. Reticularis → androgens.' },
    { id: 'en-q6', question: 'The fight-or-flight alarm reaction involves:', options: { A: 'Only cortisol release', B: 'Sympathetic ANS and adrenal medulla activation', C: 'Parasympathetic dominance', D: 'Increased digestion' }, answer: 'B', explanation: 'The alarm reaction (GAS stage 1) is initiated by hypothalamic activation of sympathetic ANS and adrenal medulla releasing epinephrine/norepinephrine.' },
    { id: 'en-q7', question: 'Which organ produces atrial natriuretic peptide (ANP)?', options: { A: 'Kidneys', B: 'Liver', C: 'Heart', D: 'Adrenals' }, answer: 'C', explanation: 'The heart secretes ANP in response to high BP, which decreases blood volume and BP by increasing renal Na+ and water excretion.' },
    { id: 'en-q8', question: 'Down-regulation means:', options: { A: 'More receptors produced in response to low hormone', B: 'Fewer receptors produced in response to excess hormone', C: 'Hormone concentration doubles', D: 'G-proteins are locked in active state' }, answer: 'B', explanation: 'Down-regulation: excess hormone → receptors undergo endocytosis/degradation → fewer receptors → decreased target cell sensitivity.' },
    { id: 'en-q9', question: 'Prostaglandins are synthesized by:', options: { A: 'Only the liver', B: 'All body cells', C: 'Only mast cells', D: 'Only the adrenal cortex' }, answer: 'B', explanation: 'Eicosanoids (including prostaglandins and leukotrienes) are local hormones released by ALL body cells.' },
    { id: 'en-q10', question: 'Somatostatin (from delta cells) functions as:', options: { A: 'The only hypoglycemic hormone', B: 'A paracrine modulator of alpha and beta cell secretion', C: 'The primary glucocorticoid', D: 'A transport protein for T4' }, answer: 'B', explanation: 'Somatostatin from pancreatic delta cells acts as a paracrine secretion that modulates the secretion of both alpha (glucagon) and beta (insulin) cells.' },
    { id: 'en-q11', question: 'A permissive hormonal interaction example is:', options: { A: 'Insulin vs glucagon', B: 'Thyroid hormone strengthening epinephrine\'s lipolysis effect', C: 'Estrogen + LH for oocyte production', D: 'PTH vs calcitonin' }, answer: 'B', explanation: 'Permissive: thyroid hormone strengthens epinephrine\'s effect on lipolysis. Synergistic: estrogen + LH. Antagonistic: insulin/glucagon, PTH/calcitonin.' },
    { id: 'en-q12', question: 'Type II diabetes is characterized primarily by:', options: { A: 'Total absence of insulin', B: 'Insulin resistance at target cells', C: 'Autoimmune thyroid attack', D: 'Excess GH' }, answer: 'B', explanation: 'Type II diabetes (~90% of cases): insulin resistance where target cells fail to respond properly to insulin despite its presence.' },
    { id: 'en-q13', question: 'The classic body changes of Cushing syndrome include:', options: { A: 'Goiter and exophthalmos', B: 'Buffalo hump and moon face with thin legs', C: 'Tetany and spasms', D: 'Severe dehydration only' }, answer: 'B', explanation: 'Cushing syndrome: "buffalo hump" (fat between shoulders) and "moon face" with thin spindly legs due to protein catabolism and fat redistribution.' },
    { id: 'en-q14', question: 'The only Ig class that crosses the placenta (relevant to natural passive immunity) is produced by the endocrine-regulated immune system. This relates to which endocrine concept?', options: { A: 'Thymus secretion of thymosins', B: 'Cortisol suppression of immune function', C: 'Adrenal androgen secretion', D: 'None — this is strictly an immune function' }, answer: 'A', explanation: 'The thymus secretes thymopoietin and thymosins that regulate T-lymphocyte development, demonstrating endocrine-immune integration.' },
    { id: 'en-q15', question: 'During amplification, one molecule of epinephrine can cause breakdown of:', options: { A: 'One glycogen molecule', B: 'One hundred glycogen molecules', C: 'Millions of glycogen molecules', D: 'No glycogen molecules' }, answer: 'C', explanation: 'Through the amplification cascade (1 hormone → 100 G-proteins → 1000s cAMP → kinases), one epinephrine molecule triggers breakdown of millions of glycogen molecules.' }
  ]
};

export default endocrine;
