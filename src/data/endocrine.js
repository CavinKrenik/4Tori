const endocrine = {
  id: 'endocrine',
  title: 'Endocrine System',
  source: '6. Endocrine systemPDF.pdf',
  description: 'Comprehensive coverage of the endocrine system including nervous vs endocrine comparison, cell communication, hypothalamus-pituitary axis, thyroid, pineal, thymus, adrenal and pancreatic hormones, stress responses, aging changes, and endocrine disorders including diabetes mellitus.',
  icon: 'endocrine',
  sections: [
    // ===== MODULE 1 =====
    {
      id: 'endocrine-s1',
      title: 'Nervous vs Endocrine & Cell Communication',
      pageRange: 'Pages 1-8',
      learnItems: [
        {
          title: 'Nervous vs Endocrine Basics',
          body: 'Endocrine system: hormones released into the bloodstream, effects may take hours but last longer. Nervous system: uses neurotransmitters, effects in milliseconds, brief duration.'
        },
        {
          title: 'Cell Communication Mechanisms',
          body: 'Gap junctions: pores allowing signaling chemicals to move cell to cell. Neurotransmitters: released from neurons across synaptic gaps. Paracrine (local) hormones: act on nearby cells in tissue fluid. Hormones (strict): chemical messengers traveling in bloodstream to distant targets.'
        },
        {
          title: 'Differences: Nervous vs Endocrine',
          body: 'Means: nervous has electrical + chemical; endocrine only chemical. Speed: nervous reacts 1-10 msec and stops quickly; endocrine reacts more slowly (seconds-days), effects can persist for weeks. Adaptation: nervous adapts quickly and response declines; endocrine responses are more persistent. Area: nervous is targeted/specific (one organ); endocrine is general/widespread (many organs).'
        },
        {
          title: 'System Interactions & Overlap',
          body: 'Some chemicals act as both hormones and neurotransmitters (e.g., norepinephrine, dopamine, TRH, ADH). Neuroendocrine cells (neurons) secrete hormones like oxytocin and catecholamines. Both systems can act on same target (norepinephrine and glucagon both cause glycogen breakdown in liver). Systems regulate each other: neurons trigger hormone secretion, hormones can stimulate or inhibit neurons.'
        },
        {
          title: 'General Functions of Hormones',
          body: 'Help regulate: extracellular fluid, metabolism, biological clock, cardiac and smooth muscle contraction, glandular secretion, some immune functions. Support growth and development and reproduction.'
        },
        {
          title: 'Exocrine vs Endocrine Glands',
          body: 'Exocrine: secrete products into ducts to body cavities/surfaces (sweat, oil, mucous, digestive glands) with extracellular effects. Endocrine: secrete hormones into bloodstream with intracellular effects; includes pituitary, thyroid, parathyroid, adrenal, pineal. Some organs are mixed (2nd function): hypothalamus, thymus, pancreas, ovaries, testes, kidneys, stomach, liver, small intestine, skin, heart, placenta.'
        },
        {
          title: 'Hormones, Target Cells, and Components',
          body: 'Hormone: chemical messenger secreted into bloodstream that stimulates response in another tissue or organ. Target cells have specific receptors for a hormone. Endocrine system includes classic glands and hormone-producing cells in organs like brain, heart, and small intestine. Major Endocrine Organs: Hypothalamus, pituitary, pineal, thyroid, parathyroids, thymus, adrenal glands, pancreas, gonads (ovaries/testes).'
        },
        {
          title: 'Control of Hormone Secretion',
          body: 'Regulated by nervous signals, blood chemistry, or other hormones. Negative feedback: most common; changes in blood levels are reversed (e.g., T3/T4-TSH-TRH loop). Positive feedback: hormone-caused change triggers more hormone release (e.g., oxytocin and uterine contractions). Disorders can arise from hyposecretion or hypersecretion.'
        },
        {
          title: 'Thyroid Negative Feedback Example',
          body: 'Low T3/T4 or low metabolic rate leads to TRH from hypothalamus, then TSH from anterior pituitary, then T3/T4 release from thyroid. Elevated T3 inhibits TRH and TSH (classic negative feedback).'
        },
        {
          title: 'Positive Feedback - Oxytocin',
          body: 'Oxytocin stimulates uterine contractions; contractions stimulate more oxytocin release. Suckling stimulates nerve endings leading to hypothalamus then posterior pituitary then oxytocin then milk ejection.'
        },
        {
          title: 'Hypothalamus-Pituitary Overview',
          body: 'Both called master endocrine glands because their hormones control other glands. Hypothalamus is brain region above pituitary, receives input from cortex, thalamus, limbic system, and internal organs. Hypothalamus controls pituitary with 9 releasing and inhibiting hormones.'
        },
        {
          title: 'Pituitary Anatomy (Basic)',
          body: 'Pea-sized gland in sella turcica, attached to brain via infundibulum. Anterior lobe is approximately 75% (glandular), develops from roof of mouth. Posterior lobe is approximately 25%, made of axon terminals from hypothalamic neurons and pituicytes.'
        }
      ],
      keyTerms: [
        { term: 'Hormone', definition: 'Chemical messenger secreted into the bloodstream that stimulates a response in another tissue or organ.' },
        { term: 'Target Cell', definition: 'A cell that has specific receptors for a particular hormone and responds to its signal.' },
        { term: 'Paracrine Hormone', definition: 'A local hormone that acts on nearby cells in the same tissue fluid rather than traveling through the bloodstream.' },
        { term: 'Gap Junction', definition: 'Pores that directly connect neighboring cells, allowing signaling chemicals to move from cell to cell.' },
        { term: 'Negative Feedback', definition: 'The most common regulatory mechanism where changes in blood hormone levels are reversed to maintain homeostasis (e.g., T3/T4-TSH-TRH loop).' },
        { term: 'Positive Feedback', definition: 'A regulatory mechanism where a hormone-caused change triggers even more hormone release (e.g., oxytocin during labor).' },
        { term: 'Exocrine Gland', definition: 'A gland that secretes its products into ducts leading to body cavities or surfaces (e.g., sweat glands, oil glands).' },
        { term: 'Endocrine Gland', definition: 'A ductless gland that secretes hormones directly into the bloodstream (e.g., pituitary, thyroid, adrenal).' }
      ],
      memoryAids: [
        'Think of hormones as "text messages" sent through the bloodstream - they take a while to arrive but the message lasts longer. Neurotransmitters are like phone calls - instant but brief.',
        'ENDO = INTO blood (endocrine glands secrete INTO blood). EXO = EXIT via ducts (exocrine glands EXIT through ducts to surfaces).',
        'Negative feedback is like a thermostat: when the room gets warm enough, the heater turns off. Positive feedback is like a microphone next to a speaker: the sound keeps getting louder until someone intervenes.',
        'The hypothalamus is the "boss" and the pituitary is the "manager" - the boss gives 9 orders (releasing/inhibiting hormones) and the manager carries them out by directing all the other glands.'
      ],
      inlineQuestions: [
        {
          question: 'The endocrine system primarily communicates using:',
          options: { A: 'Electrical impulses', B: 'Neurotransmitters at synapses', C: 'Hormones in the bloodstream', D: 'Action potentials in neurons' },
          answer: 'C',
          explanation: 'The endocrine system uses hormones released into the bloodstream to communicate with distant target cells, unlike the nervous system which uses electrical impulses and neurotransmitters.'
        },
        {
          question: 'Which communication method uses pores that directly connect neighboring cells?',
          options: { A: 'Neurotransmitters', B: 'Hormones', C: 'Gap junctions', D: 'Paracrine signals' },
          answer: 'C',
          explanation: 'Gap junctions are pores that directly connect neighboring cells, allowing signaling chemicals to pass from one cell to another without entering the bloodstream.'
        },
        {
          question: 'What type of feedback is most common in hormone regulation?',
          options: { A: 'Negative feedback', B: 'Positive feedback', C: 'Neutral feedback', D: 'Recursive feedback' },
          answer: 'A',
          explanation: 'Negative feedback is the most common mechanism for hormone regulation. When hormone levels rise above the set point, the system reverses the change to maintain homeostasis.'
        }
      ],
      quiz: [
        {
          question: 'Compared to the endocrine system, the nervous system response is:',
          options: { A: 'Slower and longer lasting', B: 'Faster and longer lasting', C: 'Faster and shorter in duration', D: 'Slower and shorter in duration' },
          answer: 'C',
          explanation: 'The nervous system responds in 1-10 milliseconds and effects are brief, while the endocrine system responds more slowly (seconds to days) but effects persist longer.'
        },
        {
          question: 'A local hormone that affects nearby cells in the same tissue is called a:',
          options: { A: 'Neurotransmitter', B: 'Gap junction messenger', C: 'Paracrine hormone', D: 'Endocrine hormone' },
          answer: 'C',
          explanation: 'Paracrine hormones are local hormones that act on nearby cells in tissue fluid, unlike endocrine hormones which travel through the bloodstream to distant targets.'
        },
        {
          question: 'Which system uses both electrical and chemical signals?',
          options: { A: 'Endocrine', B: 'Nervous', C: 'Lymphatic', D: 'Immune' },
          answer: 'B',
          explanation: 'The nervous system uses both electrical signals (action potentials) and chemical signals (neurotransmitters), while the endocrine system uses only chemical signals (hormones).'
        },
        {
          question: 'Endocrine responses are typically:',
          options: { A: 'Rapid and short-lived', B: 'Rapid and localized', C: 'Slow and localized', D: 'Slow and long-lasting' },
          answer: 'D',
          explanation: 'Endocrine responses are characteristically slow (taking seconds to days to begin) and long-lasting (effects can persist for weeks), in contrast to the rapid, short-lived nervous system responses.'
        },
        {
          question: 'Which statement best describes endocrine effects?',
          options: { A: 'Always limited to one organ', B: 'Targeted to a single synapse', C: 'Often general and widespread', D: 'Only in skeletal muscle' },
          answer: 'C',
          explanation: 'Endocrine effects are often general and widespread, affecting many organs simultaneously, unlike the nervous system which targets specific organs.'
        },
        {
          question: 'A chemical that functions as both hormone and neurotransmitter is:',
          options: { A: 'Calcitonin', B: 'Thyroxine', C: 'Norepinephrine', D: 'Insulin' },
          answer: 'C',
          explanation: 'Norepinephrine can act as both a neurotransmitter (released at synapses in the nervous system) and a hormone (released from the adrenal medulla into the bloodstream).'
        },
        {
          question: 'Neuroendocrine cells can secrete which of the following?',
          options: { A: 'Only neurotransmitters', B: 'Only steroid hormones', C: 'Oxytocin and catecholamines', D: 'Glucose and amino acids' },
          answer: 'C',
          explanation: 'Neuroendocrine cells are neurons that secrete hormones such as oxytocin and catecholamines, bridging the nervous and endocrine systems.'
        },
        {
          question: 'Hormones help regulate all of the following EXCEPT:',
          options: { A: 'Extracellular fluid', B: 'Metabolism', C: 'Biological clock', D: 'Bone fracture repair by casts' },
          answer: 'D',
          explanation: 'Hormones regulate extracellular fluid, metabolism, biological clock, muscle contraction, glandular secretion, and immune functions, but bone fracture repair by casts is a mechanical intervention, not a hormonal function.'
        },
        {
          question: 'Which is NOT a general function of hormones?',
          options: { A: 'Growth and development', B: 'Reproduction', C: 'Contraction of cardiac and smooth muscle', D: 'Direct synthesis of DNA in neurons' },
          answer: 'D',
          explanation: 'Hormones support growth, development, reproduction, and contraction of cardiac and smooth muscle. Direct synthesis of DNA in neurons is not a general function of hormones.'
        },
        {
          question: 'Exocrine glands release their products:',
          options: { A: 'Directly into blood', B: 'Into ducts to body surfaces or cavities', C: 'Into synaptic clefts', D: 'Into the cerebrospinal fluid' },
          answer: 'B',
          explanation: 'Exocrine glands release their products through ducts to body surfaces or cavities, such as sweat glands releasing sweat onto the skin surface.'
        },
        {
          question: 'Which is an example of an exocrine gland product?',
          options: { A: 'Insulin', B: 'Thyroxine', C: 'Sweat', D: 'ADH' },
          answer: 'C',
          explanation: 'Sweat is an exocrine product released through ducts to the skin surface. Insulin, thyroxine, and ADH are all endocrine hormones released into the bloodstream.'
        },
        {
          question: 'Endocrine glands are characterized by:',
          options: { A: 'Ducts opening to body surfaces', B: 'Hormone secretion into the bloodstream', C: 'Only local effects', D: 'Storage of neurotransmitters' },
          answer: 'B',
          explanation: 'Endocrine glands are ductless glands characterized by secreting hormones directly into the bloodstream for widespread effects throughout the body.'
        },
        {
          question: 'Which organ has a secondary endocrine function?',
          options: { A: 'Sweat gland', B: 'Lung', C: 'Heart', D: 'Skeletal muscle' },
          answer: 'C',
          explanation: 'The heart has a secondary endocrine function (it produces atrial natriuretic peptide). Other mixed-function organs include the hypothalamus, thymus, pancreas, ovaries, testes, kidneys, stomach, liver, small intestine, skin, and placenta.'
        },
        {
          question: 'A hormone is best defined as:',
          options: { A: 'Any neurotransmitter in the brain', B: 'Chemical messenger secreted into bloodstream affecting distant tissues', C: 'Any molecule secreted into intestines', D: 'A local paracrine factor only' },
          answer: 'B',
          explanation: 'A hormone is specifically defined as a chemical messenger secreted into the bloodstream that stimulates a response in another (distant) tissue or organ.'
        },
        {
          question: 'Cells that have specific receptors for a hormone are called:',
          options: { A: 'Neuroglia', B: 'Target cells', C: 'Exocrine cells', D: 'Erythrocytes' },
          answer: 'B',
          explanation: 'Target cells are cells that possess specific receptors for a particular hormone, enabling them to recognize and respond to that hormone\'s signal.'
        },
        {
          question: 'Which of these is NOT a major endocrine organ listed in the PDF?',
          options: { A: 'Thyroid gland', B: 'Parathyroid glands', C: 'Adrenal glands', D: 'Appendix' },
          answer: 'D',
          explanation: 'The major endocrine organs include the hypothalamus, pituitary, pineal, thyroid, parathyroids, thymus, adrenal glands, pancreas, and gonads. The appendix is not a major endocrine organ.'
        },
        {
          question: 'In the T3/T4 feedback loop, which hormone directly stimulates thyroid follicular cells?',
          options: { A: 'TRH', B: 'TSH', C: 'ACTH', D: 'GH' },
          answer: 'B',
          explanation: 'TSH (thyroid-stimulating hormone) from the anterior pituitary directly stimulates thyroid follicular cells to produce and release T3 and T4.'
        },
        {
          question: 'Elevated T3 levels will:',
          options: { A: 'Stimulate more TRH and TSH release', B: 'Inhibit TRH and TSH release', C: 'Have no effect on TRH', D: 'Only increase ACTH' },
          answer: 'B',
          explanation: 'Elevated T3 levels inhibit both TRH (from hypothalamus) and TSH (from anterior pituitary) release through negative feedback, preventing further thyroid hormone production.'
        },
        {
          question: 'Oxytocin during labor is an example of:',
          options: { A: 'Negative feedback', B: 'Positive feedback', C: 'Neutral feedback', D: 'Feedforward inhibition' },
          answer: 'B',
          explanation: 'Oxytocin during labor is a classic example of positive feedback: oxytocin stimulates uterine contractions, which stimulate more oxytocin release, creating an amplifying cycle until delivery.'
        },
        {
          question: 'Which event directly increases oxytocin release for milk ejection?',
          options: { A: 'Rising blood glucose', B: 'Elevated TSH', C: 'Suckling infant stimulating nerve endings', D: 'Low blood pressure in aorta' },
          answer: 'C',
          explanation: 'Suckling stimulates nerve endings, which signal the hypothalamus and posterior pituitary to release oxytocin, causing myoepithelial cell contraction and milk ejection.'
        },
        {
          question: 'The hypothalamus controls the pituitary gland using:',
          options: { A: 'Only nerve impulses', B: 'Nine releasing and inhibiting hormones', C: 'Digestive enzymes', D: 'Gap junctions exclusively' },
          answer: 'B',
          explanation: 'The hypothalamus controls the pituitary gland by producing 9 releasing and inhibiting hormones that regulate pituitary hormone secretion.'
        },
        {
          question: 'The anterior pituitary develops from:',
          options: { A: 'Neural tissue in the brainstem', B: 'Roof of the mouth', C: 'Spinal cord', D: 'Adrenal cortex' },
          answer: 'B',
          explanation: 'The anterior pituitary (adenohypophysis) develops embryologically from the roof of the mouth (Rathke\'s pouch), making it glandular tissue rather than neural tissue.'
        },
        {
          question: 'The posterior pituitary mainly consists of:',
          options: { A: 'Glandular epithelial cells', B: 'Axon terminals of hypothalamic neurons and pituicytes', C: 'Skeletal muscle fibers', D: 'Chondrocytes' },
          answer: 'B',
          explanation: 'The posterior pituitary (neurohypophysis) is made of axon terminals from hypothalamic neurons and supporting pituicytes. It does not synthesize hormones but stores and releases them.'
        },
        {
          question: 'Which system has more persistent responses to long-term stimuli?',
          options: { A: 'Nervous', B: 'Endocrine', C: 'Respiratory', D: 'Digestive' },
          answer: 'B',
          explanation: 'The endocrine system has more persistent responses because hormones can circulate for extended periods, and endocrine responses do not adapt and decline as quickly as nervous system responses.'
        },
        {
          question: 'A chemical messenger released into tissue fluid that affects nearby cells is called a:',
          options: { A: 'Neurotransmitter', B: 'Paracrine hormone', C: 'Autocrine enzyme', D: 'Exocrine hormone' },
          answer: 'B',
          explanation: 'A paracrine hormone is a chemical messenger released into tissue fluid that acts locally on nearby cells, rather than traveling through the bloodstream like endocrine hormones.'
        },
        {
          question: 'Which is a true statement about endocrine glands?',
          options: { A: 'They have ducts to skin surfaces', B: 'They secrete hormones into blood', C: 'They produce only digestive enzymes', D: 'They never interact with the nervous system' },
          answer: 'B',
          explanation: 'Endocrine glands are ductless and secrete hormones directly into the blood. They do interact with the nervous system - in fact, the two systems regulate each other extensively.'
        },
        {
          question: 'Low levels of T3 and T4 will initially stimulate release of:',
          options: { A: 'TSH from thyroid', B: 'TRH from hypothalamus', C: 'ACTH from pituitary', D: 'PTH from parathyroids' },
          answer: 'B',
          explanation: 'Low T3/T4 levels are first detected by the hypothalamus, which responds by releasing TRH (thyrotropin-releasing hormone), which then stimulates TSH release from the anterior pituitary.'
        },
        {
          question: 'Oxytocin\'s role in milk ejection and uterine contractions is an example of:',
          options: { A: 'Negative feedback loop', B: 'Lack of feedback', C: 'Positive feedback loop', D: 'Neural reflex without hormones' },
          answer: 'C',
          explanation: 'Oxytocin in both milk ejection and uterine contractions operates via positive feedback: the stimulus (suckling or contractions) causes more hormone release, amplifying the response.'
        },
        {
          question: 'The part of the pituitary that is purely neural tissue is the:',
          options: { A: 'Anterior lobe', B: 'Posterior lobe', C: 'Intermediate lobe', D: 'Pineal body' },
          answer: 'B',
          explanation: 'The posterior lobe (neurohypophysis) is purely neural tissue, composed of axon terminals from hypothalamic neurons and pituicytes. The anterior lobe is glandular tissue.'
        }
      ],
      flashcards: [
        { front: 'What system uses hormones in the bloodstream for body-wide communication?', back: 'The endocrine system.' },
        { front: 'How does the nervous system differ from the endocrine system in speed?', back: 'The nervous system reacts in 1-10 milliseconds with brief effects; the endocrine system reacts more slowly (seconds to days) with effects lasting up to weeks.' },
        { front: 'What are gap junctions?', back: 'Pores that directly connect neighboring cells, allowing signaling chemicals to pass from cell to cell.' },
        { front: 'What are paracrine hormones?', back: 'Local hormones that act on nearby cells in tissue fluid rather than traveling through the bloodstream.' },
        { front: 'Name a chemical that acts as both a hormone and neurotransmitter.', back: 'Norepinephrine (also dopamine, TRH, and ADH).' },
        { front: 'What is the difference between exocrine and endocrine glands?', back: 'Exocrine glands secrete products into ducts to body surfaces/cavities. Endocrine glands secrete hormones directly into the bloodstream.' },
        { front: 'What is negative feedback in hormone regulation?', back: 'The most common regulatory mechanism where changes in blood hormone levels are reversed to maintain homeostasis (e.g., elevated T3 inhibits TRH and TSH).' },
        { front: 'Give an example of positive feedback in the endocrine system.', back: 'Oxytocin during labor: uterine contractions stimulate more oxytocin release, which causes stronger contractions, amplifying until delivery.' },
        { front: 'How many releasing/inhibiting hormones does the hypothalamus produce to control the pituitary?', back: 'Nine releasing and inhibiting hormones.' },
        { front: 'What are the two lobes of the pituitary and their relative sizes?', back: 'Anterior lobe (~75%, glandular, develops from roof of mouth) and posterior lobe (~25%, made of axon terminals and pituicytes).' }
      ]
    },

    // ===== MODULE 2 =====
    {
      id: 'endocrine-s2',
      title: 'Hypothalamus-Pituitary-Pineal-Thymus-Thyroid',
      pageRange: 'Pages 9-16',
      learnItems: [
        {
          title: 'Hypothalamo-Hypophyseal Portal System',
          body: 'Hypothalamus secretes releasing/inhibiting hormones into a portal system that goes directly to the anterior pituitary. Key hypothalamic hormones: GnRH, TRH, CRH, PRH, PIH, GHRH, somatostatin.'
        },
        {
          title: 'Anterior Pituitary Tropic Hormones',
          body: 'Anterior pituitary (adenohypophysis) secretes FSH, LH, TSH, ACTH, PRL, GH under hypothalamic control. Tropic hormones target other endocrine glands (gonads, thyroid, adrenal cortex, etc.).'
        },
        {
          title: 'GH and IGF Functions',
          body: 'GH from somatotropes promotes tissue growth directly (mitosis, differentiation) and indirectly via IGF-I from liver. GH-IGF increase protein synthesis, enhance amino acid transport, reduce protein breakdown. They stimulate lipid metabolism (FFA and glycerol release), glucose-sparing, and promote Na+, K+, Cl- retention and Ca2+ absorption.'
        },
        {
          title: 'Regulation of hGH',
          body: 'Low blood glucose triggers GHRH from hypothalamus leading to more hGH, which causes glycogen breakdown to glucose in liver. High blood glucose triggers GHIH from hypothalamus leading to less hGH, which means less glycogen breakdown.'
        },
        {
          title: 'Diabetogenic Effect & Aging of GH',
          body: 'Excess GH raises blood glucose, causing continual insulin release and potential beta-cell burnout, contributing to diabetes mellitus. In childhood/adolescence GH drives bone, cartilage, muscle growth; in adults it increases osteoblastic activity and bone thickening. GH levels are higher in deep sleep, after high-protein meals, and vigorous exercise, and lower after high-carb meals; levels fall to about one-quarter by age 75.'
        },
        {
          title: 'TSH - Thyroid-Stimulating Hormone',
          body: 'Hypothalamus regulates thyrotrophs, which produce TSH. TSH stimulates thyroid to synthesize and secrete T3 and T4, raising metabolic rate.'
        },
        {
          title: 'FSH - Follicle-Stimulating Hormone',
          body: 'GnRH from hypothalamus controls gonadotrophs which release FSH. FSH forms ovarian follicles and stimulates estrogen secretion in females, and stimulates sperm production in testes in males.'
        },
        {
          title: 'LH - Luteinizing Hormone',
          body: 'GnRH stimulates gonadotrophs to release LH. In females: stimulates estrogen secretion, ovulation, corpus luteum formation, and progesterone secretion. In males: stimulates interstitial cells to secrete testosterone.'
        },
        {
          title: 'PRL - Prolactin',
          body: 'Hypothalamus controls lactotrophs; they produce prolactin. Under proper conditions, PRL causes milk production; suckling reduces hypothalamic inhibition, raising PRL and milk production; when nursing stops, milk production slows.'
        },
        {
          title: 'ACTH and MSH',
          body: 'Hypothalamic releasing hormones stimulate corticotrophs to secrete ACTH and MSH. ACTH stimulates adrenal cortex cells to produce glucocorticoids. MSH function in humans is uncertain (known to increase skin pigmentation in frogs).'
        },
        {
          title: 'Posterior Pituitary - ADH and Oxytocin',
          body: 'Posterior pituitary (neurohypophysis) does not synthesize hormones; it stores and releases ADH and oxytocin from hypothalamic axon terminals. Oxytocin: during delivery, cervical stretch leads to more uterine contractions; after delivery, suckling/hearing baby leads to milk ejection via myoepithelial contraction. ADH (vasopressin): decreases urine production, decreases sweating, increases blood pressure.'
        },
        {
          title: 'Regulation of ADH',
          body: 'Dehydration triggers ADH release causing kidneys to retain water, sweat glands to reduce water loss, and arterioles to constrict to raise BP. Overhydration triggers ADH inhibition leading to more urine and less water retention.'
        },
        {
          title: 'Pineal Gland and Melatonin',
          body: 'Pineal gland: peak secretion at 1-5 years; about 75% lower by puberty. Produces serotonin by day and converts it to melatonin at night; melatonin may regulate timing of puberty. Melatonin is increased in Seasonal Affective Disorder (SAD) and PMS; phototherapy can reduce symptoms.'
        },
        {
          title: 'Light Regulation of Melatonin',
          body: 'In darkness, fewer impulses from retina lead through a pathway involving suprachiasmatic nucleus and superior cervical ganglion, resulting in lack of norepinephrine, increased melatonin, and sleepiness. In light, norepinephrine inhibits melatonin secretion, leading to less sleepiness.'
        },
        {
          title: 'Thymus',
          body: 'Located in mediastinum superior to heart; undergoes involution after puberty. Secretes thymopoietin and thymosins, which regulate development and later activation of T-lymphocytes.'
        },
        {
          title: 'Thyroid Gland & Hormones',
          body: 'Largest endocrine gland with high blood flow; two lobes with isthmus on anterior/lateral trachea. Follicular cells in follicles secrete T3 and T4, which increase metabolic rate and O2 consumption, heat production, heart rate/contractility, respiratory rate, appetite, and breakdown of carbs, lipids, and proteins. C (parafollicular) cells secrete calcitonin, decreasing blood Ca2+ by promoting bone deposition, especially in children.'
        }
      ],
      keyTerms: [
        { term: 'Hypothalamo-Hypophyseal Portal System', definition: 'A portal blood system that carries releasing and inhibiting hormones directly from the hypothalamus to the anterior pituitary gland.' },
        { term: 'Tropic Hormone', definition: 'A hormone that targets and regulates another endocrine gland (e.g., TSH targets the thyroid, ACTH targets the adrenal cortex).' },
        { term: 'Growth Hormone (GH)', definition: 'Hormone from somatotropes that promotes tissue growth directly via mitosis and differentiation, and indirectly via IGF-I from the liver.' },
        { term: 'IGF-I (Insulin-like Growth Factor)', definition: 'A hormone produced by the liver in response to GH that mediates many of GH\'s growth-promoting effects.' },
        { term: 'ADH (Antidiuretic Hormone)', definition: 'Also called vasopressin; stored in the posterior pituitary. Decreases urine production, decreases sweating, and increases blood pressure.' },
        { term: 'Melatonin', definition: 'Hormone produced by the pineal gland from serotonin at night; promotes sleepiness and may regulate puberty timing. Increased in SAD and PMS.' },
        { term: 'Calcitonin', definition: 'Hormone from thyroid C (parafollicular) cells that decreases blood calcium by promoting bone deposition, especially important in children.' },
        { term: 'Prolactin (PRL)', definition: 'Hormone from lactotrophs in the anterior pituitary that stimulates milk production; suckling reduces hypothalamic inhibition to increase PRL levels.' }
      ],
      memoryAids: [
        'FLAT PEG for anterior pituitary hormones: FSH, LH, ACTH, TSH, PRL, Endorphins, GH.',
        'ADH = Anti-Diuretic Hormone: think "anti-diuretic" = anti-peeing. It makes you retain water and pee less.',
        'Melatonin = "Mela-NIGHT-in" - it rises at night to make you sleepy. More darkness = more melatonin.',
        'Calci-TONE-in TONES DOWN calcium levels in the blood by depositing calcium into bones.',
        'GH is highest during deep SLEEP and after PROTEIN meals - think "Sleep and Protein = Growth".'
      ],
      inlineQuestions: [
        {
          question: 'Which hormone is NOT secreted by the anterior pituitary?',
          options: { A: 'FSH', B: 'LH', C: 'Oxytocin', D: 'ACTH' },
          answer: 'C',
          explanation: 'Oxytocin is produced by the hypothalamus and stored/released by the posterior pituitary, not the anterior pituitary. The anterior pituitary secretes FSH, LH, TSH, ACTH, PRL, and GH.'
        },
        {
          question: 'ADH functions include all of the following EXCEPT:',
          options: { A: 'Decreasing urine production', B: 'Decreasing sweating', C: 'Increasing blood pressure', D: 'Increasing digestive enzyme secretion' },
          answer: 'D',
          explanation: 'ADH (vasopressin) decreases urine production, decreases sweating, and increases blood pressure by constricting arterioles. It does not increase digestive enzyme secretion.'
        },
        {
          question: 'The largest endocrine gland is the:',
          options: { A: 'Pituitary', B: 'Thyroid', C: 'Adrenal cortex', D: 'Pancreas' },
          answer: 'B',
          explanation: 'The thyroid is the largest endocrine gland, with high blood flow and two lobes connected by an isthmus located on the anterior/lateral trachea.'
        }
      ],
      quiz: [
        {
          question: 'The portal system that carries hypothalamic hormones to the anterior pituitary is the:',
          options: { A: 'Hypothalamo-pituitary vein', B: 'Hypothalamo-hypophyseal portal system', C: 'Systemic venous system', D: 'Dural venous sinus' },
          answer: 'B',
          explanation: 'The hypothalamo-hypophyseal portal system is a specialized portal blood system that carries releasing and inhibiting hormones directly from the hypothalamus to the anterior pituitary.'
        },
        {
          question: 'Tropic hormones primarily:',
          options: { A: 'Regulate digestion', B: 'Target other endocrine glands', C: 'Act only on skeletal muscles', D: 'Stimulate neuron action potentials' },
          answer: 'B',
          explanation: 'Tropic hormones are hormones that target and regulate other endocrine glands, such as TSH targeting the thyroid and ACTH targeting the adrenal cortex.'
        },
        {
          question: 'Growth hormone promotes tissue growth by:',
          options: { A: 'Blocking IGF production', B: 'Stimulating mitosis and cellular differentiation', C: 'Reducing amino acid transport into cells', D: 'Inhibiting protein synthesis' },
          answer: 'B',
          explanation: 'GH promotes tissue growth directly by stimulating mitosis and cellular differentiation, and indirectly via IGF-I from the liver.'
        },
        {
          question: 'Which is a function of the GH-IGF system?',
          options: { A: 'Decreasing Na+ retention', B: 'Increasing lipid breakdown and glucose-sparing', C: 'Completely stopping protein synthesis', D: 'Lowering Ca2+ absorption' },
          answer: 'B',
          explanation: 'The GH-IGF system stimulates lipid metabolism (releasing FFA and glycerol) and is glucose-sparing. It also increases protein synthesis, Na+/K+/Cl- retention, and Ca2+ absorption.'
        },
        {
          question: 'Low blood glucose triggers which response?',
          options: { A: 'Release of GHIH and reduction of hGH', B: 'Release of GHRH and increased hGH', C: 'Release of insulin from hypothalamus', D: 'Increased calcitonin secretion' },
          answer: 'B',
          explanation: 'Low blood glucose triggers GHRH release from the hypothalamus, which stimulates increased hGH secretion. hGH then promotes glycogen breakdown to glucose in the liver.'
        },
        {
          question: 'Chronic excess of growth hormone can lead to:',
          options: { A: 'Hypoglycemia and low insulin', B: 'Lower blood glucose and anemia', C: 'High blood glucose and beta-cell burnout', D: 'Reduced insulin secretion and hypothermia' },
          answer: 'C',
          explanation: 'Chronic excess GH raises blood glucose (diabetogenic effect), causing continual insulin release that can exhaust beta cells, contributing to diabetes mellitus.'
        },
        {
          question: 'In adulthood, GH primarily:',
          options: { A: 'Stops bone remodeling', B: 'Increases osteoblastic activity and bone thickening', C: 'Eliminates muscle mass', D: 'Has no effect on tissues' },
          answer: 'B',
          explanation: 'In adults, GH increases osteoblastic activity and bone thickening, rather than driving longitudinal bone growth as it does in childhood.'
        },
        {
          question: 'GH levels are highest during:',
          options: { A: 'Prolonged fasting and no sleep', B: 'First 2 hours of deep sleep and after high-protein meals', C: 'Immediately after high-carb meals', D: 'Exposure to bright light' },
          answer: 'B',
          explanation: 'GH levels peak during the first 2 hours of deep sleep and after high-protein meals. They are lower after high-carb meals and decline to about one-quarter by age 75.'
        },
        {
          question: 'TSH is produced by:',
          options: { A: 'Thyroid follicular cells', B: 'Thyrotrophs in the anterior pituitary', C: 'Adrenal cortex cells', D: 'Pancreatic beta cells' },
          answer: 'B',
          explanation: 'TSH is produced by thyrotrophs (specialized cells) in the anterior pituitary, under regulation by the hypothalamus.'
        },
        {
          question: 'The primary effect of TSH is to:',
          options: { A: 'Stimulate adrenal medulla', B: 'Increase melatonin production', C: 'Stimulate synthesis and secretion of T3 and T4', D: 'Decrease metabolic rate' },
          answer: 'C',
          explanation: 'TSH stimulates the thyroid gland to synthesize and secrete T3 and T4, which raise the metabolic rate.'
        },
        {
          question: 'FSH in females:',
          options: { A: 'Stimulates uterine contractions', B: 'Initiates ovarian follicle formation and estrogen secretion', C: 'Causes milk ejection', D: 'Raises blood glucose' },
          answer: 'B',
          explanation: 'FSH in females initiates ovarian follicle formation and stimulates estrogen secretion from the developing follicles.'
        },
        {
          question: 'FSH in males:',
          options: { A: 'Stimulates testosterone production in interstitial cells', B: 'Inhibits sperm production', C: 'Stimulates sperm production in testes', D: 'Induces ovulation' },
          answer: 'C',
          explanation: 'In males, FSH stimulates sperm production (spermatogenesis) in the testes. Testosterone production is stimulated by LH, not FSH.'
        },
        {
          question: 'In females, LH does all of the following EXCEPT:',
          options: { A: 'Stimulates estrogen secretion', B: 'Triggers ovulation', C: 'Stimulates corpus luteum formation and progesterone secretion', D: 'Stimulates milk ejection' },
          answer: 'D',
          explanation: 'LH stimulates estrogen secretion, triggers ovulation, and promotes corpus luteum formation with progesterone secretion. Milk ejection is stimulated by oxytocin, not LH.'
        },
        {
          question: 'In males, LH stimulates:',
          options: { A: 'Sertoli cells to release FSH', B: 'Interstitial cells to secrete testosterone', C: 'Thyroid cells to secrete calcitonin', D: 'Beta cells to produce insulin' },
          answer: 'B',
          explanation: 'In males, LH stimulates interstitial (Leydig) cells in the testes to secrete testosterone.'
        },
        {
          question: 'Prolactin is mainly involved in:',
          options: { A: 'Regulation of blood pressure', B: 'Milk production in mammary glands', C: 'Uterine contraction during labor', D: 'Increasing heart rate' },
          answer: 'B',
          explanation: 'Prolactin\'s primary function is stimulating milk production in the mammary glands. Uterine contraction is the role of oxytocin.'
        },
        {
          question: 'What effect does suckling have on prolactin?',
          options: { A: 'Increases hypothalamic inhibition of PRL', B: 'Reduces hypothalamic inhibition, raising PRL', C: 'Has no effect', D: 'Stops PRL release permanently' },
          answer: 'B',
          explanation: 'Suckling reduces the hypothalamic inhibition of prolactin (reduces PIH), which raises PRL levels and increases milk production.'
        },
        {
          question: 'ACTH primarily stimulates:',
          options: { A: 'Thyroid follicles to make thyroxine', B: 'Adrenal cortex to produce glucocorticoids', C: 'Pancreatic islets to produce insulin', D: 'Pineal gland to secrete melatonin' },
          answer: 'B',
          explanation: 'ACTH (adrenocorticotropic hormone) primarily stimulates the adrenal cortex to produce glucocorticoids such as cortisol.'
        },
        {
          question: 'Which hormone\'s role in humans is uncertain, though it increases skin pigmentation in frogs?',
          options: { A: 'ADH', B: 'PRL', C: 'MSH', D: 'GH' },
          answer: 'C',
          explanation: 'MSH (melanocyte-stimulating hormone) is known to increase skin pigmentation in frogs, but its role in humans is uncertain.'
        },
        {
          question: 'The posterior pituitary:',
          options: { A: 'Synthesizes ADH and oxytocin', B: 'Stores and releases ADH and oxytocin made in the hypothalamus', C: 'Stores T3 and T4', D: 'Releases ACTH and MSH' },
          answer: 'B',
          explanation: 'The posterior pituitary (neurohypophysis) does not synthesize hormones. It stores and releases ADH and oxytocin, which are made by neurons in the hypothalamus.'
        },
        {
          question: 'During dehydration, ADH will:',
          options: { A: 'Decrease water reabsorption in kidneys', B: 'Increase urine output', C: 'Cause kidneys to retain more water and constrict arterioles', D: 'Increase sweating' },
          answer: 'C',
          explanation: 'During dehydration, ADH is released, causing kidneys to retain more water, sweat glands to reduce water loss, and arterioles to constrict to raise blood pressure.'
        },
        {
          question: 'The pineal gland primarily secretes:',
          options: { A: 'Insulin', B: 'Melatonin', C: 'Cortisol', D: 'Aldosterone' },
          answer: 'B',
          explanation: 'The pineal gland primarily secretes melatonin, which is converted from serotonin at night and promotes sleepiness.'
        },
        {
          question: 'Melatonin levels are increased in:',
          options: { A: 'Hyperthyroidism', B: 'Seasonal Affective Disorder and PMS', C: 'Cushing syndrome', D: 'Diabetes insipidus' },
          answer: 'B',
          explanation: 'Melatonin levels are increased in Seasonal Affective Disorder (SAD) and PMS. Phototherapy can reduce symptoms by suppressing melatonin production.'
        },
        {
          question: 'In darkness, melatonin secretion:',
          options: { A: 'Decreases due to high norepinephrine', B: 'Increases due to lack of sympathetic stimulation', C: 'Stops entirely', D: 'Is unrelated to light' },
          answer: 'B',
          explanation: 'In darkness, fewer impulses from the retina result in lack of norepinephrine stimulation, leading to increased melatonin secretion and sleepiness.'
        },
        {
          question: 'The thymus secretes hormones that regulate:',
          options: { A: 'B-cell antibody production', B: 'Development and activation of T-lymphocytes', C: 'Erythrocyte maturation', D: 'Insulin sensitivity' },
          answer: 'B',
          explanation: 'The thymus secretes thymopoietin and thymosins, which regulate the development and later activation of T-lymphocytes (T cells) for immune function.'
        },
        {
          question: 'Thyroid follicular cells secrete:',
          options: { A: 'Calcitonin only', B: 'T3 and T4', C: 'PTH', D: 'Melatonin' },
          answer: 'B',
          explanation: 'Thyroid follicular cells in follicles secrete T3 (triiodothyronine) and T4 (thyroxine). Calcitonin is secreted by C (parafollicular) cells, not follicular cells.'
        },
        {
          question: 'A major effect of thyroid hormone is:',
          options: { A: 'Decreasing metabolic rate', B: 'Lowering respiratory rate', C: 'Increasing metabolic rate and oxygen consumption', D: 'Reducing heart rate and contractility' },
          answer: 'C',
          explanation: 'Thyroid hormones T3 and T4 increase metabolic rate and O2 consumption, as well as heat production, heart rate, contractility, respiratory rate, appetite, and breakdown of carbs, lipids, and proteins.'
        },
        {
          question: 'Calcitonin from C cells:',
          options: { A: 'Raises blood Ca2+', B: 'Lowers blood Ca2+ and promotes bone deposition', C: 'Has no effect on bone', D: 'Acts only on the kidneys' },
          answer: 'B',
          explanation: 'Calcitonin from thyroid C (parafollicular) cells lowers blood calcium levels by promoting calcium deposition into bones, especially important in children.'
        },
        {
          question: 'Which hormones are stored and released by the posterior pituitary?',
          options: { A: 'T3 and T4', B: 'FSH and LH', C: 'ADH and oxytocin', D: 'GH and PRL' },
          answer: 'C',
          explanation: 'The posterior pituitary stores and releases ADH and oxytocin, which are synthesized by hypothalamic neurons and transported down their axons to the posterior pituitary.'
        },
        {
          question: 'Which hormone stimulates the adrenal cortex to produce glucocorticoids?',
          options: { A: 'TSH', B: 'ACTH', C: 'FSH', D: 'GH' },
          answer: 'B',
          explanation: 'ACTH (adrenocorticotropic hormone) from the anterior pituitary stimulates the adrenal cortex to produce glucocorticoids like cortisol.'
        },
        {
          question: 'Chronic excess hGH will most likely lead to:',
          options: { A: 'Persistent hypoglycemia', B: 'Hyperglycemia and potential diabetes mellitus', C: 'Severe hypothyroidism', D: 'Immediate adrenal failure' },
          answer: 'B',
          explanation: 'Chronic excess hGH raises blood glucose (diabetogenic effect), causing continual insulin release that can exhaust beta cells and lead to diabetes mellitus.'
        },
        {
          question: 'Melatonin secretion is highest:',
          options: { A: 'In bright sunlight', B: 'During darkness', C: 'After carbohydrate meals', D: 'During intense exercise' },
          answer: 'B',
          explanation: 'Melatonin secretion is highest during darkness, when reduced light stimulation leads to decreased norepinephrine and increased melatonin production.'
        },
        {
          question: 'Calcitonin\'s primary effect is to:',
          options: { A: 'Raise blood Ca2+ by bone resorption', B: 'Lower blood Ca2+ by promoting bone deposition', C: 'Increase Na+ retention', D: 'Stimulate insulin release' },
          answer: 'B',
          explanation: 'Calcitonin lowers blood calcium levels by promoting calcium deposition into bones, opposing the effects of PTH which raises blood calcium.'
        },
        {
          question: 'Which hormone directly stimulates ovarian follicles and sperm production?',
          options: { A: 'LH', B: 'FSH', C: 'TSH', D: 'PRL' },
          answer: 'B',
          explanation: 'FSH (follicle-stimulating hormone) directly stimulates ovarian follicle development in females and sperm production (spermatogenesis) in males.'
        }
      ],
      flashcards: [
        { front: 'What is the hypothalamo-hypophyseal portal system?', back: 'A portal blood system that carries releasing and inhibiting hormones directly from the hypothalamus to the anterior pituitary gland.' },
        { front: 'What hormones does the anterior pituitary secrete?', back: 'FSH, LH, TSH, ACTH, PRL, and GH, all under hypothalamic control.' },
        { front: 'How does GH promote growth?', back: 'Directly by stimulating mitosis and cellular differentiation, and indirectly via IGF-I produced by the liver.' },
        { front: 'What triggers increased hGH release?', back: 'Low blood glucose triggers GHRH from the hypothalamus, which increases hGH release.' },
        { front: 'What is the diabetogenic effect of GH?', back: 'Excess GH raises blood glucose, causing continual insulin release and potential beta-cell burnout, contributing to diabetes mellitus.' },
        { front: 'What does FSH do in females vs males?', back: 'In females: forms ovarian follicles and stimulates estrogen secretion. In males: stimulates sperm production in testes.' },
        { front: 'What does the posterior pituitary do?', back: 'It does not synthesize hormones; it stores and releases ADH and oxytocin made by hypothalamic neurons.' },
        { front: 'What are the functions of ADH?', back: 'Decreases urine production, decreases sweating, and increases blood pressure by constricting arterioles.' },
        { front: 'How is melatonin regulated by light?', back: 'In darkness, lack of norepinephrine increases melatonin and sleepiness. In light, norepinephrine inhibits melatonin secretion.' },
        { front: 'What do thyroid follicular cells secrete and what is the effect?', back: 'They secrete T3 and T4, which increase metabolic rate, O2 consumption, heat production, heart rate, respiratory rate, appetite, and breakdown of carbs, lipids, and proteins.' }
      ]
    },

    // ===== MODULE 3 =====
    {
      id: 'endocrine-s3',
      title: 'Stress, Aging, Endocrine Disorders & Diabetes',
      pageRange: 'Pages 17-24',
      learnItems: [
        {
          title: 'Stress, Immune System, and Disease',
          body: 'Stress can contribute to disease by inhibiting the immune system, increasing risk of hypertension, asthma, migraine, gastritis, colitis, and depression. Macrophages secrete interleukin-1, linking stress and immunity by stimulating immune substance production; these immune substances then suppress interleukin-1 in a feedback loop.'
        },
        {
          title: 'Endocrine Changes with Aging',
          body: 'Human growth hormone production decreases with age, leading to muscle atrophy. TSH production increases with age to stimulate the thyroid, but metabolic rate still decreases, body fat increases, and hypothyroidism becomes more common. Thymus is replaced with adipose tissue after puberty; adrenal glands produce less cortisol and aldosterone. Receptor sensitivity to glucose declines; ovaries stop responding to gonadotropins, reducing estrogen and contributing to osteoporosis and atherosclerosis.'
        },
        {
          title: 'General Endocrine Disorders',
          body: 'Variations in hormone concentration and target-cell sensitivity cause noticeable body effects. Hyposecretion: inadequate hormone release, often from tumors/lesions destroying glands; example: head trauma damaging pituitary leading to ADH deficiency causing diabetes insipidus with chronic polyuria. Hypersecretion: excessive hormone release from tumors or autoimmune disorders; example: toxic goiter (Graves disease) where antibodies mimic TSH on the thyroid.'
        },
        {
          title: 'Pituitary Disorders - GH Imbalance',
          body: 'Hypersecretion of GH: acromegaly in adults (thickening of bones and soft tissues). Childhood/adolescence: GH oversecretion causes gigantism; GH hyposecretion causes dwarfism.'
        },
        {
          title: 'Thyroid Disorders - Hyper and Hypo',
          body: 'Hyperthyroidism: symptoms include weight loss, tremors, nervousness, and exophthalmos. Endemic goiter: iodine deficiency leads to no thyroid hormone, no negative feedback, elevated TSH and enlarged thyroid. Toxic goiter (Graves disease): antibodies mimic TSH, causing high thyroid hormone and exophthalmos. Congenital hypothyroidism (low TH in infants): abnormal bone development, thick facial features, low temp, lethargy, brain damage, dwarfism/cretinism. Myxedema (adult hypothyroidism): low metabolic rate, sluggishness, sleepiness, weight gain, constipation, dry skin/hair, cold sensitivity, increased blood pressure and tissue swelling.'
        },
        {
          title: 'Parathyroid Disorders',
          body: 'Hypoparathyroidism: often after surgical removal during thyroid surgery, can cause fatal tetany within 3-4 days. Hyperparathyroidism: excess PTH from tumor leads to soft, fragile, deformed bones, increased blood Ca2+, and renal calculi (kidney stones).'
        },
        {
          title: 'Adrenal Disorders - Cortex',
          body: 'Cushing syndrome: excess cortical secretion causing hyperglycemia, hypertension, weakness, edema, muscle and bone loss from protein catabolism, poor wound healing. Cushing body changes: "buffalo hump" fat between shoulders and "moon face" with thin, spindly legs. Adrenogenital syndrome (AGS): adrenal androgen hypersecretion often accompanying Cushing leading to external genital enlargement in children and early puberty, and masculinization in women (deeper voice, beard). Addison\'s disease: hyposecretion of glucocorticoids causing hypoglycemia, muscle weakness, low BP, dehydration from low Na+, skin darkening similar to MSH effects, and risk of cardiac arrest.'
        },
        {
          title: 'Diabetes Mellitus - Core Features',
          body: 'Due to hyposecretion of insulin: signs include polyuria, polydipsia, polyphagia, plus hyperglycemia, glycosuria, and ketonuria. Osmotic diuresis: blood glucose above renal transport maximum means glucose remains in urine, increases osmolarity, pulls water into urine. Kidney tubules cannot reabsorb glucose fast enough without insulin, causing continued glucose and ketone loss and diuresis.'
        },
        {
          title: 'Types of Diabetes Mellitus',
          body: 'Type I (IDDM): approximately 10% of cases; often autoimmune destruction of beta cells; usually diagnosed around age 12. Type I treatment: diet, exercise, blood glucose monitoring, and insulin injections or pump. Type II (NIDDM): approximately 90%; insulin resistance with target cells failing to respond to insulin. Type II risk factors: heredity, age over 40, and obesity; treatment is weight loss (diet + exercise) and oral meds that improve insulin secretion or sensitivity.'
        },
        {
          title: 'Pathology of Diabetes - Acute and Chronic',
          body: 'Acute: cells cannot absorb glucose, rely on fats and proteins leading to weight loss and weakness. Increased fat catabolism leads to elevated FFA and ketone bodies; ketonuria causes osmotic diuresis with loss of Na+ and K+. Ketoacidosis: ketones lowering blood pH leading to dyspnea and possibly diabetic coma if untreated. Chronic hyperglycemia leads to neuropathy and cardiovascular damage due to atherosclerosis, affecting retina and kidneys (type I), causing heart failure and gangrene (type II).'
        },
        {
          title: 'Hyperinsulinism',
          body: 'Causes: excessive insulin injection or pancreatic islet tumor. Leads to hypoglycemia, weakness, hunger, and triggers epinephrine, GH, and glucagon release with anxiety, sweating, and increased heart rate. Insulin shock: uncorrected hyperinsulinism resulting in disorientation, convulsions, or unconsciousness.'
        }
      ],
      keyTerms: [
        { term: 'Acromegaly', definition: 'Condition caused by GH hypersecretion in adulthood, resulting in thickening of bones and soft tissues.' },
        { term: 'Cushing Syndrome', definition: 'Disorder from excess cortical secretion causing hyperglycemia, hypertension, weakness, edema, muscle/bone loss, "buffalo hump" and "moon face".' },
        { term: 'Addison\'s Disease', definition: 'Disorder from hyposecretion of glucocorticoids causing hypoglycemia, muscle weakness, low BP, dehydration, skin darkening, and risk of cardiac arrest.' },
        { term: 'Diabetes Mellitus', definition: 'Metabolic disorder due to insulin hyposecretion (Type I) or insulin resistance (Type II), characterized by polyuria, polydipsia, polyphagia, and hyperglycemia.' },
        { term: 'Ketoacidosis', definition: 'Dangerous condition where ketone bodies from excessive fat catabolism lower blood pH, causing dyspnea and possibly diabetic coma.' },
        { term: 'Myxedema', definition: 'Adult hypothyroidism characterized by low metabolic rate, sluggishness, weight gain, constipation, dry skin/hair, cold sensitivity, and tissue swelling.' },
        { term: 'Graves Disease (Toxic Goiter)', definition: 'Autoimmune hyperthyroid condition where antibodies mimic TSH, causing excessive thyroid hormone production and exophthalmos.' },
        { term: 'Hyperinsulinism', definition: 'Excess insulin from overdose or islet tumor causing hypoglycemia, weakness, hunger, anxiety, sweating, and potentially insulin shock.' }
      ],
      memoryAids: [
        'The 3 Ps of diabetes: Polyuria (peeing a lot), Polydipsia (drinking a lot), Polyphagia (eating a lot).',
        'Cushing = CUSHION: patients look cushioned with fat (moon face, buffalo hump). Addison = ADDITION of dark skin color.',
        'Type 1 = 1 letter short of insulin (body destroys beta cells, no insulin). Type 2 = 2 problems (insulin is made but cells resist it).',
        'Acromegaly = ACRO (extremities) + MEGALY (enlargement): bones and soft tissues thicken in adults with excess GH.',
        'Graves disease = GRAVE mistake by the immune system: antibodies mimic TSH and overstimulate the thyroid.'
      ],
      inlineQuestions: [
        {
          question: 'Stress can promote disease primarily by:',
          options: { A: 'Increasing antibody production', B: 'Inhibiting the immune system', C: 'Increasing bone mass', D: 'Stimulating pancreatic beta cells' },
          answer: 'B',
          explanation: 'Stress contributes to disease primarily by inhibiting the immune system, which increases susceptibility to conditions like hypertension, asthma, migraine, gastritis, colitis, and depression.'
        },
        {
          question: 'Acromegaly is caused by:',
          options: { A: 'GH hypersecretion in adulthood', B: 'GH hyposecretion in childhood', C: 'Thyroid hormone deficiency', D: 'Insulin resistance' },
          answer: 'A',
          explanation: 'Acromegaly is caused by hypersecretion of growth hormone in adulthood, resulting in thickening of bones and soft tissues. In childhood, GH hypersecretion causes gigantism instead.'
        },
        {
          question: 'Classic signs of diabetes mellitus due to insulin hyposecretion include all EXCEPT:',
          options: { A: 'Polyuria', B: 'Polydipsia', C: 'Polyphagia', D: 'Hypoglycemia' },
          answer: 'D',
          explanation: 'Diabetes mellitus causes hyperglycemia (high blood glucose), not hypoglycemia. The classic signs are polyuria (excess urination), polydipsia (excess thirst), and polyphagia (excess hunger).'
        }
      ],
      quiz: [
        {
          question: 'Interleukin-1 is secreted by:',
          options: { A: 'Thyroid follicles', B: 'Macrophages', C: 'Beta cells', D: 'Chromaffin cells' },
          answer: 'B',
          explanation: 'Interleukin-1 is secreted by macrophages, linking stress and immunity by stimulating immune substance production in a feedback loop.'
        },
        {
          question: 'Which change with aging contributes to muscle atrophy?',
          options: { A: 'Increased GH production', B: 'Decreased GH production', C: 'Increased melatonin', D: 'Increased calcitonin' },
          answer: 'B',
          explanation: 'Decreased GH production with aging leads to muscle atrophy, as GH is essential for maintaining muscle mass and tissue growth.'
        },
        {
          question: 'With age, TSH levels tend to:',
          options: { A: 'Decrease, causing hyperthyroidism', B: 'Increase, trying to stimulate the thyroid', C: 'Stay constant', D: 'Decrease to zero' },
          answer: 'B',
          explanation: 'TSH levels increase with age as the body tries to stimulate the declining thyroid, but metabolic rate still decreases and hypothyroidism becomes more common.'
        },
        {
          question: 'After puberty, the thymus:',
          options: { A: 'Enlarges significantly', B: 'Is replaced largely by adipose tissue', C: 'Starts secreting insulin', D: 'Stops making T-cell hormones but stays large' },
          answer: 'B',
          explanation: 'After puberty, the thymus undergoes involution and is replaced largely by adipose (fat) tissue, reducing its immune function.'
        },
        {
          question: 'An example of hormone hyposecretion is:',
          options: { A: 'Cushing syndrome', B: 'Toxic goiter', C: 'ADH deficiency causing diabetes insipidus', D: 'Hyperparathyroidism' },
          answer: 'C',
          explanation: 'ADH deficiency causing diabetes insipidus is an example of hyposecretion (inadequate hormone release). Cushing syndrome, toxic goiter, and hyperparathyroidism are all examples of hypersecretion.'
        },
        {
          question: 'Toxic goiter (Graves disease) involves:',
          options: { A: 'Iodine deficiency', B: 'Autoantibodies mimicking TSH', C: 'Lack of ACTH', D: 'Pituitary tumor only' },
          answer: 'B',
          explanation: 'Graves disease (toxic goiter) is an autoimmune condition where antibodies mimic TSH on the thyroid, causing excessive thyroid hormone production.'
        },
        {
          question: 'Gigantism results from:',
          options: { A: 'GH hypersecretion in adulthood', B: 'GH hypersecretion in childhood/adolescence', C: 'GH hyposecretion in old age', D: 'Excess cortisol' },
          answer: 'B',
          explanation: 'Gigantism results from GH hypersecretion during childhood/adolescence when growth plates are still open. In adulthood, the same condition causes acromegaly instead.'
        },
        {
          question: 'Which symptom is characteristic of hyperthyroidism?',
          options: { A: 'Weight gain and constipation', B: 'Weight loss and nervousness', C: 'Severe bradycardia', D: 'Thickened facial features at birth' },
          answer: 'B',
          explanation: 'Hyperthyroidism is characterized by weight loss, tremors, nervousness, and exophthalmos due to excess thyroid hormone increasing metabolic rate.'
        },
        {
          question: 'Endemic goiter is most directly caused by:',
          options: { A: 'Excess TSH', B: 'Iodine deficiency', C: 'Excess PTH', D: 'Lack of cortisol' },
          answer: 'B',
          explanation: 'Endemic goiter is caused by iodine deficiency, which prevents thyroid hormone production. Without negative feedback from T3/T4, TSH remains elevated, causing thyroid enlargement.'
        },
        {
          question: 'Myxedema typically presents with:',
          options: { A: 'High metabolic rate and sweating', B: 'Low metabolic rate, weight gain, and cold sensitivity', C: 'High fever and diarrhea', D: 'Early onset puberty' },
          answer: 'B',
          explanation: 'Myxedema (adult hypothyroidism) presents with low metabolic rate, sluggishness, sleepiness, weight gain, constipation, dry skin/hair, cold sensitivity, increased blood pressure, and tissue swelling.'
        },
        {
          question: 'Hypoparathyroidism is often due to:',
          options: { A: 'Adrenal tumors', B: 'Surgical removal of parathyroids', C: 'Autoantibodies to insulin', D: 'Pineal calcification' },
          answer: 'B',
          explanation: 'Hypoparathyroidism is most often caused by accidental surgical removal of the parathyroid glands during thyroid surgery, and can cause fatal tetany within 3-4 days.'
        },
        {
          question: 'Hyperparathyroidism can cause:',
          options: { A: 'Stronger, denser bones', B: 'Soft, fragile, deformed bones and kidney stones', C: 'Decrease in blood Ca2+', D: 'Massive hair growth' },
          answer: 'B',
          explanation: 'Hyperparathyroidism causes excess PTH from a tumor, leading to excessive bone resorption resulting in soft, fragile, deformed bones, elevated blood Ca2+, and renal calculi (kidney stones).'
        },
        {
          question: 'Cushing syndrome is associated with:',
          options: { A: 'Hypoglycemia and low BP', B: 'Hyperglycemia, hypertension, and muscle wasting', C: 'Massive weight loss and hypotension', D: 'Increased melatonin and SAD' },
          answer: 'B',
          explanation: 'Cushing syndrome features hyperglycemia, hypertension, weakness, edema, and muscle/bone loss from protein catabolism due to excess cortical secretion.'
        },
        {
          question: 'The classic body changes of Cushing syndrome include:',
          options: { A: 'Goiter and exophthalmos', B: 'Buffalo hump and moon face with thin legs', C: 'Tetany and spasms', D: 'Severe dehydration only' },
          answer: 'B',
          explanation: 'Cushing syndrome causes characteristic body changes including "buffalo hump" (fat between shoulders) and "moon face" with thin, spindly legs due to protein catabolism.'
        },
        {
          question: 'Adrenogenital syndrome may cause in women:',
          options: { A: 'Feminization', B: 'Masculinization with deeper voice and beard', C: 'Complete loss of hair', D: 'Severe hypothyroidism' },
          answer: 'B',
          explanation: 'Adrenogenital syndrome (AGS) involves adrenal androgen hypersecretion, which can cause masculinization in women including deeper voice and beard growth.'
        },
        {
          question: 'Addison\'s disease is due to:',
          options: { A: 'Hypersecretion of glucocorticoids', B: 'Hyposecretion of glucocorticoids', C: 'Hypersecretion of insulin', D: 'Hypersecretion of PTH' },
          answer: 'B',
          explanation: 'Addison\'s disease is caused by hyposecretion of glucocorticoids from the adrenal cortex, leading to hypoglycemia, muscle weakness, low BP, dehydration, and skin darkening.'
        },
        {
          question: 'A hallmark of Addison\'s disease is:',
          options: { A: 'Hyperglycemia and obesity', B: 'Hypoglycemia, low BP, dehydration, and skin darkening', C: 'Goiter', D: 'Exophthalmos' },
          answer: 'B',
          explanation: 'Addison\'s disease hallmarks include hypoglycemia, muscle weakness, low blood pressure, dehydration from low Na+, and skin darkening similar to MSH effects.'
        },
        {
          question: 'Osmotic diuresis in diabetes occurs because:',
          options: { A: 'Kidneys reabsorb all glucose', B: 'Excess glucose in urine raises osmolarity and pulls water', C: 'ADH is absent', D: 'Kidneys stop filtering blood' },
          answer: 'B',
          explanation: 'When blood glucose exceeds the renal transport maximum, glucose remains in urine, raises osmolarity, and pulls water into the urine via osmotic diuresis.'
        },
        {
          question: 'Type I diabetes is most closely associated with:',
          options: { A: 'Insulin resistance in target cells', B: 'Autoimmune destruction of beta cells', C: 'Onset only after age 40', D: 'No need for insulin therapy' },
          answer: 'B',
          explanation: 'Type I diabetes (IDDM) is most closely associated with autoimmune destruction of pancreatic beta cells, usually diagnosed around age 12, requiring insulin therapy.'
        },
        {
          question: 'Type II diabetes is characterized primarily by:',
          options: { A: 'Total absence of insulin', B: 'Failure of target cells to respond to insulin', C: 'Autoimmune attack on thyroid', D: 'Excess growth hormone' },
          answer: 'B',
          explanation: 'Type II diabetes (NIDDM) is characterized by insulin resistance, where target cells fail to respond properly to insulin despite its presence.'
        },
        {
          question: 'Major risk factors for Type II diabetes include:',
          options: { A: 'Iodine deficiency and hypercalcemia', B: 'Heredity, age over 40, and obesity', C: 'Low protein diet only', D: 'Excess melatonin' },
          answer: 'B',
          explanation: 'The major risk factors for Type II diabetes are heredity (genetic predisposition), age over 40, and obesity.'
        },
        {
          question: 'Acute effects of diabetes include:',
          options: { A: 'Increased glycogen stores and weight gain', B: 'Weight loss and weakness from using fats and proteins', C: 'Massive bone growth', D: 'Reduced ketone body production' },
          answer: 'B',
          explanation: 'In acute diabetes, cells cannot absorb glucose and must rely on fats and proteins for energy, leading to weight loss and weakness.'
        },
        {
          question: 'Ketoacidosis in diabetes:',
          options: { A: 'Raises blood pH', B: 'Lowers blood pH and may cause dyspnea and coma', C: 'Has no effect on respiration', D: 'Only affects thyroid hormones' },
          answer: 'B',
          explanation: 'Ketoacidosis occurs when ketone bodies from excessive fat catabolism lower blood pH, causing dyspnea (difficulty breathing) and potentially diabetic coma if untreated.'
        },
        {
          question: 'Chronic hyperglycemia can lead to all of the following EXCEPT:',
          options: { A: 'Neuropathy', B: 'Cardiovascular damage from atherosclerosis', C: 'Retinal and kidney damage', D: 'Increased bone density' },
          answer: 'D',
          explanation: 'Chronic hyperglycemia causes neuropathy, cardiovascular damage from atherosclerosis, and retinal/kidney damage, but does not increase bone density.'
        },
        {
          question: 'Hyperinsulinism is often caused by:',
          options: { A: 'Insulin resistance', B: 'Excess insulin injection or islet tumor', C: 'Thyroidectomy', D: 'Lack of glucagon' },
          answer: 'B',
          explanation: 'Hyperinsulinism is caused by excessive insulin injection or a pancreatic islet tumor that produces too much insulin.'
        },
        {
          question: 'A hallmark of insulin shock is:',
          options: { A: 'Very high blood glucose', B: 'Disorientation, convulsions, or unconsciousness from hypoglycemia', C: 'Severe hypernatremia', D: 'Excess ketone bodies in blood' },
          answer: 'B',
          explanation: 'Insulin shock results from uncorrected hyperinsulinism causing severe hypoglycemia, leading to disorientation, convulsions, or unconsciousness.'
        },
        {
          question: 'Which symptoms are typical of hyperinsulinism before shock?',
          options: { A: 'Lethargy only', B: 'Weakness, hunger, anxiety, sweating, increased HR', C: 'Weight gain without hunger', D: 'Tetany and exophthalmos' },
          answer: 'B',
          explanation: 'Before insulin shock, hyperinsulinism causes hypoglycemia leading to weakness, hunger, and triggers epinephrine release causing anxiety, sweating, and increased heart rate.'
        },
        {
          question: 'Which endocrine change with aging contributes to increased body fat and lower metabolic rate?',
          options: { A: 'Decreased TSH', B: 'Increased TSH with declining thyroid response', C: 'Increased GH', D: 'Increased cortisol secretion' },
          answer: 'B',
          explanation: 'With aging, TSH production increases trying to stimulate the thyroid, but the thyroid response declines, resulting in lower metabolic rate and increased body fat.'
        },
        {
          question: 'Endemic goiter is most directly related to a deficiency of:',
          options: { A: 'Calcium', B: 'Iodine', C: 'Sodium', D: 'Potassium' },
          answer: 'B',
          explanation: 'Endemic goiter is directly related to iodine deficiency, which prevents thyroid hormone synthesis and causes compensatory thyroid enlargement from elevated TSH.'
        },
        {
          question: 'Which combination describes Addison\'s disease?',
          options: { A: 'Hyperglycemia, moon face, buffalo hump', B: 'Hypoglycemia, low BP, dehydration, skin darkening', C: 'Weight loss, tremor, exophthalmos', D: 'Tetany and renal stones' },
          answer: 'B',
          explanation: 'Addison\'s disease is characterized by hypoglycemia, low blood pressure, dehydration from low Na+, and skin darkening. The first option describes Cushing syndrome.'
        },
        {
          question: 'Type II diabetes is best described as:',
          options: { A: 'Autoimmune beta-cell destruction', B: 'Insulin resistance at target cells', C: 'Complete absence of glucagon', D: 'Excess T3/T4' },
          answer: 'B',
          explanation: 'Type II diabetes is best described as insulin resistance at target cells - the body produces insulin but cells fail to respond to it properly.'
        },
        {
          question: 'Ketoacidosis is dangerous because it:',
          options: { A: 'Raises blood pH above normal', B: 'Lowers blood pH and can cause dyspnea and coma', C: 'Only affects the kidneys', D: 'Is always asymptomatic' },
          answer: 'B',
          explanation: 'Ketoacidosis is dangerous because ketone bodies lower blood pH (acidosis), which can cause dyspnea (difficulty breathing) and potentially lead to diabetic coma.'
        },
        {
          question: 'Hyperinsulinism from overdose of insulin will primarily cause:',
          options: { A: 'Hyperglycemia', B: 'Hypoglycemia with possible insulin shock', C: 'Hypernatremia', D: 'Hyperthyroidism' },
          answer: 'B',
          explanation: 'Hyperinsulinism from insulin overdose causes hypoglycemia (dangerously low blood glucose), which can progress to insulin shock with disorientation, convulsions, or unconsciousness.'
        }
      ],
      flashcards: [
        { front: 'How does stress affect the immune system?', back: 'Stress inhibits the immune system, increasing risk of hypertension, asthma, migraine, gastritis, colitis, and depression.' },
        { front: 'What happens to GH production with aging?', back: 'GH production decreases with age, leading to muscle atrophy.' },
        { front: 'What is acromegaly?', back: 'A condition caused by GH hypersecretion in adulthood, resulting in thickening of bones and soft tissues.' },
        { front: 'What is the difference between gigantism and dwarfism?', back: 'Gigantism is caused by GH oversecretion in childhood/adolescence; dwarfism is caused by GH hyposecretion in childhood/adolescence.' },
        { front: 'What is Graves disease?', back: 'An autoimmune condition (toxic goiter) where antibodies mimic TSH on the thyroid, causing excessive thyroid hormone production and exophthalmos.' },
        { front: 'What is Cushing syndrome and its classic body changes?', back: 'Excess cortical secretion causing hyperglycemia, hypertension, weakness, edema, muscle/bone loss, "buffalo hump" and "moon face" with thin legs.' },
        { front: 'What is Addison\'s disease?', back: 'Hyposecretion of glucocorticoids causing hypoglycemia, muscle weakness, low BP, dehydration, skin darkening, and risk of cardiac arrest.' },
        { front: 'What are the 3 Ps of diabetes mellitus?', back: 'Polyuria (excessive urination), polydipsia (excessive thirst), and polyphagia (excessive hunger).' },
        { front: 'What is the difference between Type I and Type II diabetes?', back: 'Type I (~10%): autoimmune destruction of beta cells, requires insulin. Type II (~90%): insulin resistance at target cells, treated with diet/exercise and oral medications.' },
        { front: 'What is insulin shock?', back: 'Result of uncorrected hyperinsulinism causing severe hypoglycemia, leading to disorientation, convulsions, or unconsciousness.' }
      ]
    }
  ]
};

export default endocrine;
