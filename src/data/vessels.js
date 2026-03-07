const vessels = {
  id: 'vessels',
  title: 'Blood Vessels',
  source: '9. VesselsPDF.pdf',
  description: 'Structure and function of arteries, veins, and capillaries; hemodynamics, capillary exchange, blood pressure regulation, resistance, venous return, and introduction to the lymphatic system.',
  icon: 'vessels',
  sections: [
    // ===== SECTION 1: Vessels Module 1 =====
    {
      id: 'vessels-s1',
      title: 'Vessel Types, Tunics, Arteries, Capillaries & Veins',
      pageRange: 'Pages 1-8',
      learnItems: [
        {
          title: 'Major Vessel Types & Circulatory Layout',
          body: 'Three principal categories of vessels: arteries carry blood away from the heart, veins carry blood back to the heart, and capillaries connect the smallest arteries to the smallest veins. The cardiovascular system is a closed system of tubes; venules collect blood from capillaries and merge to form veins, while arteries branch into arterioles and then capillaries. Vasa vasorum are small blood vessels within the walls of large vessels that nourish their deeper tissues.'
        },
        {
          title: 'Vessel Wall Layers (Tunics)',
          body: 'Tunica interna (intima): innermost layer lining the lumen, made of simple squamous endothelium plus basement membrane and a thin layer of connective tissue; it acts as a selectively permeable barrier and smooth layer that repels blood cells and platelets. Tunica media: middle and usually thickest layer, consisting of smooth muscle, collagen, and sometimes elastic tissue; responsible for vasoconstriction and vasodilation. Tunica externa (adventitia): outermost layer of areolar connective tissue that anchors the vessel to adjacent tissues and provides passage for small nerves, lymphatic vessels, and the vasa vasorum.'
        },
        {
          title: 'Sympathetic Innervation of Vessels',
          body: 'Vascular smooth muscle is innervated by the sympathetic nervous system. Increased sympathetic stimulation causes vasoconstriction (smooth muscle contraction), decreasing vessel diameter; injury to an artery or arteriole triggers vasospasm, reducing blood loss. Decreased stimulation or certain chemicals (nitric oxide, K+, H+, lactic acid) promote vasodilation, increasing vessel diameter.'
        },
        {
          title: 'Arteries - Conducting (Elastic) Arteries',
          body: 'Conducting (elastic or large) arteries are the largest, including the aorta, pulmonary trunk, common carotid, subclavian, and common iliac arteries. Their tunica media contains perforated sheets of elastic tissue alternating with thin layers of smooth muscle, collagen, and elastic fibers. They expand during systole and recoil during diastole, helping to dampen blood pressure fluctuations.'
        },
        {
          title: 'Arteries - Distributing (Muscular) Arteries',
          body: 'Distributing (muscular or medium) arteries are smaller branches that distribute blood to specific organs, such as brachial, femoral, splenic, and renal arteries. In these arteries, smooth muscle layers make up about three-quarters of wall thickness, allowing strong vasoconstriction and vasodilation.'
        },
        {
          title: 'Arterioles and Metarterioles',
          body: 'Arterioles are small arteries delivering blood to capillaries; their tunica media has only a few layers of smooth muscle. Metarterioles branch into capillary beds; precapillary sphincters regulate whether blood enters the capillaries or bypasses them via a thoroughfare channel. Vasomotion is the intermittent contraction and relaxation of sphincters, allowing capillary beds to fill 5-10 times per minute.'
        },
        {
          title: 'Capillaries - Microcirculation and Structure',
          body: 'Capillaries are microscopic vessels connecting arterioles to venules; they are found near almost every cell but are most extensive in active tissues like muscles, liver, kidneys, and brain. Their walls are a single layer of simple squamous endothelium and a basement membrane, making them thin enough for exchange. Their primary function is exchange of nutrients and wastes between blood and tissue fluid; capillary beds are absent in epithelia, cornea, lens of eye, and cartilage.'
        },
        {
          title: 'Capillary Types',
          body: 'Continuous capillaries: have intercellular clefts (small gaps) between endothelial cells; found in skeletal muscle, smooth muscle, connective tissues, and lungs. Fenestrated capillaries: have many pores (fenestrations) in the plasma membrane; found in kidneys, small intestine, choroid plexuses, ciliary processes, and endocrine glands. Sinusoids: have very large fenestrations and incomplete basement membrane; found in liver, bone marrow, spleen, anterior pituitary, and parathyroid glands.'
        },
        {
          title: 'Veins and Venules',
          body: 'Venules are small veins that collect blood from capillaries; proximal venules are quite porous and exchange fluid with tissues like capillaries. As venules enlarge, they resemble small veins, with sparse smooth muscle and fibroblasts; their porous endothelium allows WBCs to exit into tissues. Veins have proportionally thinner walls than arteries of similar diameter, with less smooth muscle and no internal or external elastic lamina. Veins have lower average pressure (~10 mmHg), expand easily, and act as high-capacitance vessels; venous valves (folds of tunica interna) prevent backflow and aid skeletal muscle in upward blood flow. Venous sinuses (e.g., coronary sinus, dural venous sinuses) have thin walls, large lumens, and no smooth muscle.'
        },
        {
          title: 'Varicose Veins',
          body: 'Varicose veins are twisted, dilated superficial veins caused by leaky venous valves (congenital or from prolonged standing or pregnancy). Valve failure allows backflow and pooling, increasing pressure and forcing fluid into tissues, leading to inflamed, tender surrounding tissue. Deep veins are less susceptible due to the support of surrounding muscles.'
        }
      ],
      keyTerms: [
        { term: 'Tunica Interna (Intima)', definition: 'Innermost vessel layer of simple squamous endothelium and basement membrane; selectively permeable barrier.' },
        { term: 'Tunica Media', definition: 'Middle vessel layer of smooth muscle, collagen, and elastic tissue; controls vasoconstriction and vasodilation.' },
        { term: 'Tunica Externa (Adventitia)', definition: 'Outermost vessel layer of areolar connective tissue anchoring the vessel and carrying nerves and vasa vasorum.' },
        { term: 'Vasa Vasorum', definition: 'Small blood vessels within the walls of large vessels that nourish their deeper tissues.' },
        { term: 'Vasoconstriction', definition: 'Narrowing of a vessel due to smooth muscle contraction, typically from sympathetic stimulation.' },
        { term: 'Vasodilation', definition: 'Widening of a vessel due to smooth muscle relaxation, promoted by chemicals like nitric oxide.' },
        { term: 'Conducting (Elastic) Arteries', definition: 'Largest arteries (e.g., aorta) with elastic tissue that expands during systole and recoils during diastole.' },
        { term: 'Distributing (Muscular) Arteries', definition: 'Medium arteries distributing blood to specific organs; smooth muscle makes up ~3/4 of wall thickness.' },
        { term: 'Precapillary Sphincters', definition: 'Smooth muscle rings at capillary bed entrances that regulate blood flow into capillaries.' },
        { term: 'Vasomotion', definition: 'Intermittent contraction and relaxation of precapillary sphincters, filling capillary beds 5-10 times/min.' },
        { term: 'Continuous Capillaries', definition: 'Capillaries with intercellular clefts; found in skeletal muscle, smooth muscle, connective tissues, and lungs.' },
        { term: 'Fenestrated Capillaries', definition: 'Capillaries with pores (fenestrations); found in kidneys, small intestine, and endocrine glands.' },
        { term: 'Sinusoids', definition: 'Capillaries with very large fenestrations and incomplete basement membrane; found in liver, bone marrow, spleen.' },
        { term: 'Venous Valves', definition: 'Folds of tunica interna in veins that prevent backflow of blood.' },
        { term: 'Varicose Veins', definition: 'Twisted, dilated superficial veins caused by leaky venous valves.' }
      ],
      memoryAids: [
        'IME for tunics (inside to outside): Interna, Media, Externa - "I Must Exit"',
        'Arteries carry Away from the heart (both start with A); Veins carry blood back (V = "venture back").',
        'Capillary types by pore size: Continuous (Closed tight), Fenestrated (Filtered with pores), Sinusoids (Super-sized openings).',
        'Vasomotion = "Vaso-motion" - sphincters doing an on/off dance 5-10 times per minute.'
      ],
      inlineQuestions: [
        {
          question: 'Which type of vessel carries blood away from the heart?',
          options: { A: 'Veins', B: 'Arteries', C: 'Venules', D: 'Capillaries' },
          answer: 'B',
          explanation: 'Arteries carry blood away from the heart. Veins carry blood back to the heart, and capillaries connect the smallest arteries to the smallest veins.'
        },
        {
          question: 'Which vessel wall layer contains most of the smooth muscle for vasoconstriction and vasodilation?',
          options: { A: 'Tunica externa', B: 'Tunica media', C: 'Tunica interna', D: 'Endocardium' },
          answer: 'B',
          explanation: 'The tunica media is the middle and usually thickest layer, consisting of smooth muscle, collagen, and sometimes elastic tissue, making it responsible for vasoconstriction and vasodilation.'
        },
        {
          question: 'Which capillary type has intercellular clefts between neighboring cells and is common in skeletal muscle?',
          options: { A: 'Continuous capillaries', B: 'Fenestrated capillaries', C: 'Sinusoids', D: 'Venous sinuses' },
          answer: 'A',
          explanation: 'Continuous capillaries have intercellular clefts (small gaps) between endothelial cells and are found in skeletal muscle, smooth muscle, connective tissues, and lungs.'
        }
      ],
      quiz: [
        {
          question: 'The tunica interna (intima) is primarily composed of:',
          options: { A: 'Simple squamous endothelium and basement membrane', B: 'Dense irregular connective tissue', C: 'Skeletal muscle', D: 'Elastic cartilage' },
          answer: 'A',
          explanation: 'The tunica interna is the innermost layer lining the lumen, made of simple squamous endothelium plus basement membrane and a thin layer of connective tissue.'
        },
        {
          question: 'The tunica externa (adventitia) serves mainly to:',
          options: { A: 'Repel blood cells', B: 'Provide contractile force', C: 'Anchor the vessel and provide passage for nerves and vasa vasorum', D: 'Form valves in veins' },
          answer: 'C',
          explanation: 'The tunica externa is the outermost layer of areolar connective tissue that anchors the vessel to adjacent tissues and provides passage for small nerves, lymphatic vessels, and the vasa vasorum.'
        },
        {
          question: 'Vasa vasorum are:',
          options: { A: 'Capillaries in alveoli', B: 'Small vessels that nourish the walls of large vessels', C: 'Valves in large veins', D: 'Lymphatic vessels in myocardium' },
          answer: 'B',
          explanation: 'Vasa vasorum are small blood vessels within the walls of large vessels that nourish their deeper tissues.'
        },
        {
          question: 'Increased sympathetic stimulation of vascular smooth muscle causes:',
          options: { A: 'Vasodilation', B: 'Vasoconstriction', C: 'No change in diameter', D: 'Immediate clot formation' },
          answer: 'B',
          explanation: 'Increased sympathetic stimulation causes vasoconstriction (smooth muscle contraction), decreasing vessel diameter.'
        },
        {
          question: 'Which chemical listed promotes vasodilation?',
          options: { A: 'Calcium', B: 'Nitric oxide', C: 'Fibrinogen', D: 'Bilirubin' },
          answer: 'B',
          explanation: 'Nitric oxide, along with K+, H+, and lactic acid, promotes vasodilation by causing smooth muscle relaxation and increasing vessel diameter.'
        },
        {
          question: 'Conducting (elastic) arteries include all of these EXCEPT:',
          options: { A: 'Aorta', B: 'Pulmonary trunk', C: 'Common carotid', D: 'Radial artery' },
          answer: 'D',
          explanation: 'The radial artery is a distributing (muscular) artery, not a conducting (elastic) artery. Conducting arteries include the aorta, pulmonary trunk, common carotid, subclavian, and common iliac arteries.'
        },
        {
          question: 'Elastic arteries help stabilize blood pressure mainly by:',
          options: { A: 'Thick tunica externa', B: 'Expanding during systole and recoiling during diastole', C: 'Having many valves', D: 'Allowing reverse blood flow' },
          answer: 'B',
          explanation: 'Elastic arteries expand during systole and recoil during diastole, helping to dampen blood pressure fluctuations.'
        },
        {
          question: 'Distributing (muscular) arteries are characterized by:',
          options: { A: 'Very thin smooth muscle layer', B: 'Smooth muscle making up about 3/4 of wall thickness', C: 'No tunica media', D: 'Absence of any elastic tissue' },
          answer: 'B',
          explanation: 'In distributing (muscular) arteries, smooth muscle layers make up about three-quarters of wall thickness, allowing strong vasoconstriction and vasodilation.'
        },
        {
          question: 'Arterioles are best described as:',
          options: { A: 'Large elastic arteries', B: 'Small arteries with few layers of smooth muscle delivering blood to capillaries', C: 'Thin-walled vessels returning blood to the heart', D: 'Capillary-like veins' },
          answer: 'B',
          explanation: 'Arterioles are small arteries delivering blood to capillaries; their tunica media has only a few layers of smooth muscle.'
        },
        {
          question: 'Precapillary sphincters are found at the entrance to:',
          options: { A: 'Large veins', B: 'Elastic arteries', C: 'Capillary beds from metarterioles', D: 'Lymphatic ducts' },
          answer: 'C',
          explanation: 'Precapillary sphincters regulate whether blood enters the capillaries from metarterioles or bypasses them via a thoroughfare channel.'
        },
        {
          question: 'Vasomotion refers to:',
          options: { A: 'Heart contraction', B: 'Intermittent contraction and relaxation of precapillary sphincters', C: 'Sympathetic nerve firing', D: 'Respiratory pump activity' },
          answer: 'B',
          explanation: 'Vasomotion is the intermittent contraction and relaxation of precapillary sphincters, allowing capillary beds to fill 5-10 times per minute.'
        },
        {
          question: 'The main function of capillaries is to:',
          options: { A: 'Store blood as a reservoir', B: 'Distribute blood to specific organs', C: 'Exchange nutrients and wastes between blood and tissues', D: 'Generate blood pressure' },
          answer: 'C',
          explanation: 'The primary function of capillaries is exchange of nutrients and wastes between blood and tissue fluid.'
        },
        {
          question: 'Fenestrated capillaries are especially common in:',
          options: { A: 'Skin and skeletal muscle', B: 'Kidneys and small intestine', C: 'Bone marrow and spleen', D: 'Cornea and lens' },
          answer: 'B',
          explanation: 'Fenestrated capillaries have many pores (fenestrations) and are found in kidneys, small intestine, choroid plexuses, ciliary processes, and endocrine glands.'
        },
        {
          question: 'Sinusoidal capillaries are typically found in:',
          options: { A: 'Liver and bone marrow', B: 'Skeletal muscle only', C: 'Lungs', D: 'Skin' },
          answer: 'A',
          explanation: 'Sinusoids have very large fenestrations and incomplete basement membrane and are found in liver, bone marrow, spleen, anterior pituitary, and parathyroid glands.'
        },
        {
          question: 'Compared to arteries of the same diameter, veins generally have:',
          options: { A: 'Thicker tunica media and more elastic tissue', B: 'Thinner walls and less muscle, with valves present', C: 'No tunica externa', D: 'Higher blood pressure' },
          answer: 'B',
          explanation: 'Veins have proportionally thinner walls than arteries of similar diameter, with less smooth muscle and no internal or external elastic lamina, but they do have valves.'
        },
        {
          question: 'The average blood pressure within veins is approximately:',
          options: { A: '0 mmHg', B: '10 mmHg', C: '35 mmHg', D: '120 mmHg' },
          answer: 'B',
          explanation: 'Veins have lower average pressure (~10 mmHg) compared to arteries.'
        },
        {
          question: 'Venous valves are:',
          options: { A: 'Folds of tunica media preventing arterial backflow', B: 'Folds of tunica interna preventing backflow of venous blood', C: 'Present only in arteries', D: 'Found only in the heart' },
          answer: 'B',
          explanation: 'Venous valves are folds of tunica interna that prevent backflow and aid skeletal muscle in upward blood flow.'
        },
        {
          question: 'Venous sinuses differ from typical veins because they:',
          options: { A: 'Have thick smooth muscle', B: 'Lack smooth muscle and have thin walls and large lumens', C: 'Lack endothelium', D: 'Are found only in limbs' },
          answer: 'B',
          explanation: 'Venous sinuses (e.g., coronary sinus, dural venous sinuses) have thin walls, large lumens, and no smooth muscle.'
        },
        {
          question: 'Varicose veins are caused primarily by:',
          options: { A: 'Overactive valves', B: 'Leaky venous valves leading to backflow and pooling', C: 'Excess arterial pressure', D: 'Infection of the tunica interna' },
          answer: 'B',
          explanation: 'Varicose veins are twisted, dilated superficial veins caused by leaky venous valves (congenital or from prolonged standing or pregnancy).'
        },
        {
          question: 'Which veins are most prone to becoming varicose?',
          options: { A: 'Deep veins surrounded by muscle', B: 'Superficial veins exposed to prolonged standing or pregnancy', C: 'Coronary veins alone', D: 'Pulmonary veins' },
          answer: 'B',
          explanation: 'Superficial veins are most prone because they lack the support of surrounding muscles that deep veins have.'
        },
        {
          question: 'Which vessel type directly connects arterioles to venules and allows exchange?',
          options: { A: 'Veins', B: 'Arteries', C: 'Capillaries', D: 'Lymphatics' },
          answer: 'C',
          explanation: 'Capillaries are microscopic vessels connecting arterioles to venules whose primary function is exchange of nutrients and wastes.'
        },
        {
          question: 'The layer of a blood vessel that directly contacts blood is the:',
          options: { A: 'Tunica externa', B: 'Tunica media', C: 'Tunica interna (intima)', D: 'Pericardium' },
          answer: 'C',
          explanation: 'The tunica interna (intima) is the innermost layer lining the lumen and is the layer that directly contacts blood.'
        },
        {
          question: 'Conducting arteries, such as the aorta, are specialized to:',
          options: { A: 'Exchange nutrients', B: 'Expand and recoil to smooth out blood pressure', C: 'Store blood as a reservoir', D: 'Filter lymph' },
          answer: 'B',
          explanation: 'Conducting (elastic) arteries expand during systole and recoil during diastole, helping to dampen blood pressure fluctuations.'
        },
        {
          question: 'Venous valves are especially important in:',
          options: { A: 'Preventing backflow in veins of the limbs', B: 'Preventing backflow in large arteries', C: 'Regulating capillary exchange', D: 'Supporting lymphatic flow' },
          answer: 'A',
          explanation: 'Venous valves prevent backflow particularly in the limbs where blood must travel upward against gravity.'
        },
        {
          question: 'Metarterioles and precapillary sphincters are involved in:',
          options: { A: 'Controlling entry of blood into capillary beds', B: 'Returning lymph to the bloodstream', C: 'Synthesizing plasma proteins', D: 'Generating action potentials' },
          answer: 'A',
          explanation: 'Metarterioles branch into capillary beds, and precapillary sphincters regulate whether blood enters the capillaries or bypasses them via a thoroughfare channel.'
        }
      ],
      flashcards: [
        { front: 'What are the three principal categories of blood vessels?', back: 'Arteries (carry blood away from heart), veins (carry blood back to heart), and capillaries (connect smallest arteries to smallest veins).' },
        { front: 'What are vasa vasorum?', back: 'Small blood vessels within the walls of large vessels that nourish their deeper tissues.' },
        { front: 'Name the three tunics of a blood vessel from inside to outside.', back: 'Tunica interna (intima), tunica media, and tunica externa (adventitia).' },
        { front: 'What is the composition and function of the tunica media?', back: 'Smooth muscle, collagen, and sometimes elastic tissue; responsible for vasoconstriction and vasodilation.' },
        { front: 'What chemicals promote vasodilation?', back: 'Nitric oxide, K+, H+, and lactic acid promote vasodilation by relaxing smooth muscle.' },
        { front: 'Name examples of conducting (elastic) arteries.', back: 'Aorta, pulmonary trunk, common carotid, subclavian, and common iliac arteries.' },
        { front: 'How do elastic arteries stabilize blood pressure?', back: 'They expand during systole and recoil during diastole, dampening blood pressure fluctuations.' },
        { front: 'What is vasomotion?', back: 'The intermittent contraction and relaxation of precapillary sphincters, allowing capillary beds to fill 5-10 times per minute.' },
        { front: 'Name the three types of capillaries and where each is found.', back: 'Continuous (skeletal muscle, lungs), fenestrated (kidneys, small intestine, endocrine glands), sinusoids (liver, bone marrow, spleen).' },
        { front: 'What structures prevent backflow in veins?', back: 'Venous valves - folds of tunica interna that prevent backflow and aid skeletal muscle in upward blood flow.' },
        { front: 'What causes varicose veins?', back: 'Leaky venous valves (congenital or from prolonged standing/pregnancy) cause backflow and pooling, leading to twisted, dilated superficial veins.' }
      ]
    },

    // ===== SECTION 2: Vessels Module 2 =====
    {
      id: 'vessels-s2',
      title: 'Hemodynamics, Capillary Exchange, Resistance & Venous Return',
      pageRange: 'Pages 9-16',
      learnItems: [
        {
          title: 'Capillary Exchange Mechanisms',
          body: 'Exchange occurs only across capillary walls between blood and interstitial fluid via three routes: intercellular clefts, fenestrations, or through endothelial cytoplasm. Diffusion is the main mechanism (down concentration gradients); lipid-soluble substances (steroid hormones, O2, CO2) diffuse through lipid bilayer, while water-soluble substances (glucose, electrolytes) pass through channels, fenestrations, or clefts. Large proteins are held back by the endothelium. Transcytosis (endocytosis/exocytosis in vesicles) moves large lipid-insoluble molecules like insulin or maternal antibodies across the endothelium.'
        },
        {
          title: 'Bulk Flow - Filtration and Reabsorption',
          body: 'Bulk flow moves large amounts of dissolved or suspended material in response to pressure from high to low pressure areas. Filtration: movement out into interstitial fluid, promoted by blood hydrostatic pressure and interstitial osmotic pressure. Reabsorption: movement back into capillaries, promoted by blood colloid osmotic pressure (COP, mainly from albumin). Net filtration pressure = balance of these forces; Starling\'s law states that reabsorbed volume is almost equal to filtered volume (~85% reabsorbed, excess collected by lymphatics).'
        },
        {
          title: 'Net Filtration Pressure Dynamics',
          body: 'Arterial end of capillary: net outward pressure ~10 mmHg (higher hydrostatic pressure). Venous end: net inward pressure ~9 mmHg (higher COP relative to hydrostatic pressure). About 85% of filtered fluid is reabsorbed; remaining ~3 L/day is returned by lymphatics.'
        },
        {
          title: 'Edema - Causes',
          body: 'Edema is abnormal increase in interstitial fluid when filtration exceeds reabsorption. Excess filtration: increased BP (hypertension) or increased capillary permeability (e.g., histamine release). Inadequate reabsorption: decreased plasma proteins (low COP) from liver disease, burns, malnutrition, or kidney disease. Not noticeable until ~30% above normal.'
        },
        {
          title: 'Edema Consequences and Triggers',
          body: 'Poor venous return: congestive heart failure leads to pulmonary edema; insufficient muscle activity; kidney failure causes water retention and hypertension. Obstructed lymphatic drainage causes edema. Consequences: circulatory shock (low blood volume/BP), tissue necrosis (poor O2/waste removal), pulmonary edema (suffocation), cerebral edema (headaches, nausea, seizures, coma).'
        },
        {
          title: 'Hemodynamics - Key Factors',
          body: 'Hemodynamics involves pressure differences driving flow, velocity of flow, volume of flow, blood pressure, resistance, and venous return. Blood flow velocity is inversely proportional to total cross-sectional area (slowest in capillaries for exchange, fastest in aorta). Circulation time: time for a blood drop to go from right atrium back to right atrium.'
        },
        {
          title: 'Blood Pressure and Volume Flow',
          body: 'BP is highest in aorta (~120 mmHg systolic, 80 diastolic); falls steadily in systemic circulation (35 mmHg entering capillaries, 0 mmHg at right atrium). Cardiac output = SV x HR; BP rises with increased HR/CO or blood volume. Arterial elasticity (expansion/recoil) maintains steady flow, smooths pressure fluctuations, and reduces stress on small arteries; less elastic arteries with age raise BP.'
        },
        {
          title: 'Resistance to Flow',
          body: 'Resistance comes from friction between blood and vessel walls; factors include vessel radius, blood viscosity, and vessel length. Blood flow is proportional to the fourth power of vessel radius (r4); halving radius reduces flow to 1/16th (arterioles control BP by changing diameter). Increased viscosity (e.g., dehydration, polycythemia) increases resistance; longer vessels increase resistance (obesity worsens this). Systemic vascular resistance is the total of these factors.'
        },
        {
          title: 'Blood Flow Velocity and Laminar Flow',
          body: 'Laminar flow: blood flows in layers with faster flow in center; small vessel radius lowers average velocity, large radius increases it. Velocity decreases from aorta to capillaries (greater distance, smaller radii, larger total cross-sectional area) and increases from capillaries to vena cava as vessels merge. Capillary flow is slowest (~0.1 cm/sec) to allow exchange.'
        },
        {
          title: 'Mechanisms of Venous Return',
          body: 'Pressure gradient: venous pressure ~7-13 mmHg toward the heart (venules ~12-18 mmHg to central venous ~5 mmHg). Skeletal muscle pump: muscle contraction squeezes veins, pushing blood toward heart (valves prevent backflow). Thoracic pump: inhalation lowers thoracic pressure and raises abdominal pressure, forcing blood upward; central venous pressure fluctuates (2 mmHg inhale, 6 mmHg exhale). Cardiac suction: expanding atrial space pulls blood in.'
        },
        {
          title: 'Exercise and Venous Return',
          body: 'Exercise increases venous return via faster/stronger heart (increased CO/BP), vasodilation in skeletal muscle/lungs/heart, increased respiratory rate (thoracic pump), and skeletal muscle pump. Inactivity causes venous pooling (low venous pressure insufficient for upward flow), leading to low CO, dizziness, or syncope; prevented by leg muscle tensing.'
        },
        {
          title: 'Shock and Homeostasis',
          body: 'Shock: cardiovascular failure to deliver enough O2/nutrients, causing inadequate perfusion and switch to anaerobic respiration leading to lactic acid buildup, cell/tissue damage and death.'
        }
      ],
      keyTerms: [
        { term: 'Diffusion', definition: 'Main capillary exchange mechanism; substances move down concentration gradients across capillary walls.' },
        { term: 'Transcytosis', definition: 'Movement of large lipid-insoluble molecules (e.g., insulin) across endothelium via vesicles (endocytosis/exocytosis).' },
        { term: 'Filtration', definition: 'Movement of fluid out of capillaries into interstitial space, driven by blood hydrostatic pressure.' },
        { term: 'Reabsorption', definition: 'Movement of fluid back into capillaries, driven by blood colloid osmotic pressure (COP).' },
        { term: 'Blood Colloid Osmotic Pressure (COP)', definition: 'Osmotic pressure created mainly by albumin that draws fluid back into capillaries.' },
        { term: 'Starling\'s Law of Capillaries', definition: 'States that reabsorbed volume nearly equals filtered volume; ~85% reabsorbed, rest collected by lymphatics.' },
        { term: 'Edema', definition: 'Abnormal increase in interstitial fluid when filtration exceeds reabsorption.' },
        { term: 'Hemodynamics', definition: 'Study of forces involved in blood circulation including pressure, flow, velocity, and resistance.' },
        { term: 'Laminar Flow', definition: 'Smooth layered blood flow with faster flow in the center of the vessel.' },
        { term: 'Skeletal Muscle Pump', definition: 'Mechanism where muscle contraction squeezes veins, pushing blood toward heart; valves prevent backflow.' },
        { term: 'Thoracic Pump', definition: 'Inhalation lowers thoracic pressure and raises abdominal pressure, forcing venous blood upward.' },
        { term: 'Shock', definition: 'Cardiovascular failure to deliver adequate O2/nutrients causing inadequate tissue perfusion.' }
      ],
      memoryAids: [
        'Flow proportional to r4: "r to the FOUR = flow is FOUR times more sensitive to radius changes" - halve the radius, lose 1/16th of flow.',
        'Filtration at Arterial end, Reabsorption at Venous end: "FAR-V" = Filtration-Arterial, Reabsorption-Venous.',
        'Starling\'s 85% rule: "85% comes back, 15% goes to lymphatics" - the lymphatic clean-up crew.',
        'Three venous return pumps: "SMS" = Skeletal muscle, Muscular thoracic pump, Suction by heart.'
      ],
      inlineQuestions: [
        {
          question: 'The most important mechanism for capillary exchange is:',
          options: { A: 'Filtration', B: 'Diffusion down concentration gradients', C: 'Osmosis of water only', D: 'Active transport by endothelium' },
          answer: 'B',
          explanation: 'Diffusion is the main mechanism for capillary exchange, with substances moving down their concentration gradients across capillary walls.'
        },
        {
          question: 'Blood flow is proportional to the:',
          options: { A: 'Square of vessel radius', B: 'Fourth power of vessel radius', C: 'Cube of vessel length', D: 'Inverse of blood viscosity only' },
          answer: 'B',
          explanation: 'Blood flow is proportional to the fourth power of vessel radius (r4); halving the radius reduces flow to 1/16th.'
        },
        {
          question: 'Shock is primarily a failure of the cardiovascular system to:',
          options: { A: 'Increase blood viscosity', B: 'Deliver adequate O2 and nutrients to tissues', C: 'Lower blood pressure', D: 'Dilate veins' },
          answer: 'B',
          explanation: 'Shock is cardiovascular failure to deliver enough O2/nutrients, causing inadequate perfusion and switch to anaerobic respiration.'
        }
      ],
      quiz: [
        {
          question: 'Transcytosis in capillaries mainly transports:',
          options: { A: 'Small ions like Na+', B: 'Lipid-soluble gases like O2', C: 'Large lipid-insoluble molecules like insulin', D: 'Fibrin threads' },
          answer: 'C',
          explanation: 'Transcytosis (endocytosis/exocytosis in vesicles) moves large lipid-insoluble molecules like insulin or maternal antibodies across the endothelium.'
        },
        {
          question: 'At the arterial end of a capillary bed, the net filtration pressure is typically:',
          options: { A: '-9 mmHg (inward)', B: '0 mmHg', C: '+10 mmHg (outward)', D: '+20 mmHg (outward)' },
          answer: 'C',
          explanation: 'At the arterial end of capillary, net outward pressure is ~10 mmHg due to higher hydrostatic pressure.'
        },
        {
          question: 'According to Starling\'s law, approximately what percentage of filtered capillary fluid is reabsorbed?',
          options: { A: '50%', B: '85%', C: '100%', D: '25%' },
          answer: 'B',
          explanation: 'Starling\'s law states that reabsorbed volume is almost equal to filtered volume - about 85% is reabsorbed, with excess collected by lymphatics.'
        },
        {
          question: 'Edema can be caused by all of the following EXCEPT:',
          options: { A: 'Decreased plasma proteins lowering COP', B: 'Hypertension increasing hydrostatic pressure', C: 'Histamine increasing capillary permeability', D: 'Increased venous return reducing filtration' },
          answer: 'D',
          explanation: 'Increased venous return would not cause edema. Edema results from excess filtration or inadequate reabsorption.'
        },
        {
          question: 'Blood flow velocity is:',
          options: { A: 'Fastest in capillaries', B: 'Inversely proportional to total cross-sectional area', C: 'Constant throughout all vessels', D: 'Slower in aorta than in veins' },
          answer: 'B',
          explanation: 'Blood flow velocity is inversely proportional to total cross-sectional area - slowest in capillaries (for exchange) and fastest in the aorta.'
        },
        {
          question: 'Blood pressure is highest in the:',
          options: { A: 'Vena cava', B: 'Capillaries', C: 'Aorta', D: 'Right atrium' },
          answer: 'C',
          explanation: 'BP is highest in the aorta (~120 mmHg systolic, 80 diastolic) and falls steadily through systemic circulation.'
        },
        {
          question: 'Arterial elasticity helps to:',
          options: { A: 'Increase pressure fluctuations', B: 'Smooth out pressure fluctuations and maintain steady flow', C: 'Store blood indefinitely', D: 'Reduce velocity in capillaries' },
          answer: 'B',
          explanation: 'Arterial elasticity (expansion/recoil) maintains steady flow, smooths pressure fluctuations, and reduces stress on small arteries.'
        },
        {
          question: 'Which factor does NOT contribute to increased resistance to flow?',
          options: { A: 'Smaller vessel radius', B: 'Increased blood viscosity', C: 'Longer vessel length', D: 'Decreased hematocrit' },
          answer: 'D',
          explanation: 'Decreased hematocrit means lower viscosity, which actually decreases resistance. Smaller radius, increased viscosity, and longer vessel length all increase resistance.'
        },
        {
          question: 'The skeletal muscle pump aids venous return by:',
          options: { A: 'Increasing capillary permeability', B: 'Squeezing veins to push blood toward the heart, with valves preventing backflow', C: 'Lowering thoracic pressure', D: 'Dilating arteries' },
          answer: 'B',
          explanation: 'The skeletal muscle pump works by muscle contraction squeezing veins, pushing blood toward the heart while valves prevent backflow.'
        },
        {
          question: 'During inhalation, the thoracic pump:',
          options: { A: 'Increases abdominal pressure and forces blood upward', B: 'Lowers abdominal pressure', C: 'Decreases venous return', D: 'Only affects arterial flow' },
          answer: 'A',
          explanation: 'Inhalation lowers thoracic pressure and raises abdominal pressure, forcing blood upward toward the heart.'
        },
        {
          question: 'Prolonged inactivity can lead to:',
          options: { A: 'Venous pooling and low CO', B: 'Increased arterial pressure', C: 'Reduced capillary exchange', D: 'Higher hematocrit' },
          answer: 'A',
          explanation: 'Inactivity causes venous pooling (low venous pressure insufficient for upward flow), leading to low cardiac output, dizziness, or syncope.'
        },
        {
          question: 'Cerebral edema can cause all of the following EXCEPT:',
          options: { A: 'Headaches and nausea', B: 'Seizures and coma', C: 'Increased tissue perfusion', D: 'Tissue hypoxia' },
          answer: 'C',
          explanation: 'Cerebral edema decreases tissue perfusion, not increases it. It causes headaches, nausea, seizures, and coma.'
        },
        {
          question: 'Which is a consequence of edema?',
          options: { A: 'Circulatory shock from low blood volume', B: 'Decreased filtration', C: 'Reduced lymphatic flow', D: 'All of the above' },
          answer: 'A',
          explanation: 'Circulatory shock (low blood volume/BP) is a consequence of edema. Other consequences include tissue necrosis and pulmonary edema.'
        },
        {
          question: 'Laminar flow in blood vessels means:',
          options: { A: 'Turbulent mixing', B: 'Blood flowing in smooth layers with faster flow in the center', C: 'Complete stasis', D: 'Only in capillaries' },
          answer: 'B',
          explanation: 'Laminar flow means blood flows in smooth layers with faster flow in the center of the vessel.'
        },
        {
          question: 'Obesity increases resistance to blood flow mainly due to:',
          options: { A: 'Shorter vessels', B: 'Increased total vessel length', C: 'Lower viscosity', D: 'Larger radius' },
          answer: 'B',
          explanation: 'Obesity increases total vessel length, which increases resistance to blood flow.'
        },
        {
          question: 'Central venous pressure fluctuates mainly due to:',
          options: { A: 'Skeletal muscle pump', B: 'Respiratory cycle (thoracic pump)', C: 'Cardiac systole', D: 'Arterial pressure' },
          answer: 'B',
          explanation: 'Central venous pressure fluctuates with the respiratory cycle (2 mmHg on inhale, 6 mmHg on exhale) due to the thoracic pump.'
        },
        {
          question: 'Prolonged standing can cause syncope due to:',
          options: { A: 'Venous pooling and inadequate venous return', B: 'Excessive capillary exchange', C: 'High hematocrit', D: 'Vasodilation in the brain' },
          answer: 'A',
          explanation: 'Prolonged standing causes venous pooling and inadequate venous return, leading to low cardiac output and syncope.'
        },
        {
          question: 'The main force driving filtration out of capillaries is:',
          options: { A: 'Blood colloid osmotic pressure', B: 'Blood hydrostatic pressure', C: 'Interstitial hydrostatic pressure', D: 'Lymphatic suction' },
          answer: 'B',
          explanation: 'Blood hydrostatic pressure is the main force driving filtration out of capillaries into interstitial fluid.'
        },
        {
          question: 'Blood colloid osmotic pressure (COP) is mainly due to:',
          options: { A: 'Sodium ions', B: 'Plasma proteins like albumin', C: 'Red blood cells', D: 'Glucose' },
          answer: 'B',
          explanation: 'Blood colloid osmotic pressure is mainly due to plasma proteins, especially albumin, which draws fluid back into capillaries.'
        },
        {
          question: 'Edema is NOT typically caused by:',
          options: { A: 'Liver disease reducing plasma proteins', B: 'Congestive heart failure', C: 'Increased plasma protein concentration', D: 'Obstructed lymphatics' },
          answer: 'C',
          explanation: 'Increased plasma protein concentration would increase COP and promote reabsorption, not edema. Edema is caused by decreased proteins, CHF, or obstructed lymphatics.'
        },
        {
          question: 'Arterioles control systemic blood pressure mainly by regulating:',
          options: { A: 'Total blood volume', B: 'Vessel radius (flow proportional to r4)', C: 'Venous capacitance', D: 'Capillary density' },
          answer: 'B',
          explanation: 'Arterioles control BP by changing their diameter; blood flow is proportional to the fourth power of vessel radius.'
        },
        {
          question: 'Which mechanism does NOT contribute to venous return?',
          options: { A: 'Skeletal muscle pump', B: 'Thoracic pump during inhalation', C: 'Cardiac suction of atria', D: 'Arterial vasoconstriction' },
          answer: 'D',
          explanation: 'Arterial vasoconstriction does not contribute to venous return. Venous return is aided by the skeletal muscle pump, thoracic pump, and cardiac suction.'
        }
      ],
      flashcards: [
        { front: 'What are the three routes of capillary exchange?', back: 'Intercellular clefts, fenestrations, and through endothelial cytoplasm (transcytosis).' },
        { front: 'What is the main mechanism of capillary exchange?', back: 'Diffusion down concentration gradients. Lipid-soluble substances cross the lipid bilayer; water-soluble substances pass through channels, fenestrations, or clefts.' },
        { front: 'What is transcytosis?', back: 'Movement of large lipid-insoluble molecules (e.g., insulin, maternal antibodies) across endothelium via vesicles (endocytosis/exocytosis).' },
        { front: 'What forces drive filtration vs. reabsorption in capillaries?', back: 'Filtration: blood hydrostatic pressure + interstitial osmotic pressure push fluid out. Reabsorption: blood colloid osmotic pressure (COP from albumin) pulls fluid back in.' },
        { front: 'What is Starling\'s law of capillaries?', back: 'Reabsorbed volume nearly equals filtered volume: ~85% is reabsorbed, remaining ~3 L/day collected by lymphatics.' },
        { front: 'What causes edema?', back: 'Excess filtration (hypertension, increased permeability) or inadequate reabsorption (low plasma proteins/COP from liver disease, burns, malnutrition).' },
        { front: 'How is blood flow related to vessel radius?', back: 'Blood flow is proportional to the fourth power of radius (r4). Halving the radius reduces flow to 1/16th.' },
        { front: 'What are the mechanisms of venous return?', back: 'Pressure gradient, skeletal muscle pump, thoracic pump (inhalation), and cardiac suction.' },
        { front: 'Why is capillary blood flow the slowest?', back: 'Capillaries have the largest total cross-sectional area; velocity is inversely proportional to cross-sectional area. Slow flow (~0.1 cm/sec) allows time for exchange.' },
        { front: 'What is cardiovascular shock?', back: 'Cardiovascular failure to deliver enough O2/nutrients, causing inadequate perfusion, anaerobic respiration, lactic acid buildup, and cell/tissue damage.' }
      ]
    },

    // ===== SECTION 3: BP & Lymphatic Module =====
    {
      id: 'vessels-s3',
      title: 'Blood Pressure, Pulse Points, BP Measurement & Lymphatic Overview',
      pageRange: 'Pages 17-24',
      learnItems: [
        {
          title: 'Cardiac Cycle and Blood Pressure',
          body: 'The cardiac cycle is one contraction (systole) and relaxation (diastole) of the heart, lasting about 0.8 seconds. The dicrotic notch is a small secondary pressure increase at the beginning of diastole, caused by closure of aortic/pulmonary valves. Pulse pressure is the difference between systolic and diastolic pressures (~40 mmHg).'
        },
        {
          title: 'Heart Sounds in the Cardiac Cycle',
          body: 'First and second heart sounds (S1 and S2) are often described as "lubb-dupp" and are due to closing of the valves. S1 ("lubb"): closure of AV valves at start of systole. S2 ("dupp"): closure of semilunar valves at start of diastole.'
        },
        {
          title: 'Pulse Points',
          body: 'Common sites for taking pulse: carotid, radial, brachial, dorsalis pedis (dorsal foot artery), posterior tibial.'
        },
        {
          title: 'Taking a Blood Pressure - Step-by-Step',
          body: 'Place cuff on bare upper arm 1 inch above elbow bend, tight enough for two fingertips under top edge. Position stethoscope disk under cuff on inner side of upper arm. Place earpieces facing forward (toward nose tip), rest gauge in palm of cuffed arm. Inflate cuff rapidly to 30 points above usual systolic pressure, then slowly deflate while listening.'
        },
        {
          title: 'Lymphatic System - Three Functions',
          body: 'Fluid recovery: reabsorbs excess interstitial fluid (~15% of filtered fluid not returned by capillaries) and returns it to blood. Immunity: tissue fluid (lymph) is filtered through lymph nodes containing immune cells before returning to bloodstream. Lipid absorption: lacteals in small intestine villi absorb dietary lipids.'
        },
        {
          title: 'Lymphatic Organs - Thymus',
          body: 'Thymus: bilobed organ between sternum and aortic arch; microscopic features include cortex, medulla, and Hassall\'s corpuscles.'
        },
        {
          title: 'Lymphatic Organs - Spleen',
          body: 'Spleen: in left hypochondriac region, inferior to diaphragm and posterolateral to stomach; has white pulp and red pulp.'
        },
        {
          title: 'Lymphatic Organs - Lymph Nodes',
          body: 'Lymph nodes: most numerous (~450 in adults), located in cervical, axillary, intestinal, and inguinal regions. Microscopic: capsule, cortex with lymphoid follicles, medulla.'
        },
        {
          title: 'Lymphatic Vessels and Flow',
          body: 'Lymph flows through lymphatic vessels (lymphatics); openings are gaps between endothelial cells, anchored by filaments. Right lymphatic duct: formed by convergence of right jugular, subclavian, and bronchomediastinal trunks. Thoracic duct: drains from cisterna chyli (sac) and empties into left subclavian vein.'
        },
        {
          title: 'Other Lymphatic Structures',
          body: 'Appendix: contains abundant lymphoid nodules (follicles). Tonsils: three sets - pharyngeal (adenoids), palatine (pair), lingual (numerous); have crypts and lymphoid follicles.'
        }
      ],
      keyTerms: [
        { term: 'Cardiac Cycle', definition: 'One contraction (systole) and relaxation (diastole) of the heart, lasting about 0.8 seconds.' },
        { term: 'Dicrotic Notch', definition: 'Small secondary pressure increase at the beginning of diastole caused by closure of aortic/pulmonary valves.' },
        { term: 'Pulse Pressure', definition: 'Difference between systolic and diastolic pressures (~40 mmHg).' },
        { term: 'S1 (Lubb)', definition: 'First heart sound caused by closure of AV valves at start of systole.' },
        { term: 'S2 (Dupp)', definition: 'Second heart sound caused by closure of semilunar valves at start of diastole.' },
        { term: 'Lacteals', definition: 'Lymphatic capillaries in small intestine villi that absorb dietary lipids.' },
        { term: 'Hassall\'s Corpuscles', definition: 'Microscopic structures found in the thymus medulla.' },
        { term: 'White Pulp', definition: 'Lymphatic tissue in the spleen surrounding splenic arteries.' },
        { term: 'Red Pulp', definition: 'Tissue in the spleen containing erythrocyte-filled sinuses.' },
        { term: 'Right Lymphatic Duct', definition: 'Formed by convergence of right jugular, subclavian, and bronchomediastinal trunks.' },
        { term: 'Thoracic Duct', definition: 'Largest lymphatic duct; drains from cisterna chyli and empties into left subclavian vein.' },
        { term: 'Tonsils', definition: 'Three sets of lymphoid tissue (pharyngeal/adenoids, palatine, lingual) that guard the pharynx entrance.' }
      ],
      memoryAids: [
        'Heart sounds: "Lubb = Leaves (AV valves close, systole starts), Dupp = Done (semilunar valves close, diastole starts)".',
        'Pulse points: "Can Really Big Dogs Play?" = Carotid, Radial, Brachial, Dorsalis pedis, Posterior tibial.',
        'Lymphatic functions: "FIL" = Fluid recovery, Immunity, Lipid absorption.',
        'Thoracic duct drains LEFT and below; Right lymphatic duct drains RIGHT upper quarter only.'
      ],
      inlineQuestions: [
        {
          question: 'The cardiac cycle lasts approximately:',
          options: { A: '0.4 seconds', B: '0.8 seconds', C: '1.2 seconds', D: '2 seconds' },
          answer: 'B',
          explanation: 'The cardiac cycle is one contraction (systole) and relaxation (diastole) of the heart, lasting about 0.8 seconds.'
        },
        {
          question: 'Which is NOT a typical pulse point?',
          options: { A: 'Carotid', B: 'Radial', C: 'Hepatic', D: 'Posterior tibial' },
          answer: 'C',
          explanation: 'Hepatic is not a pulse point. Common pulse sites include carotid, radial, brachial, dorsalis pedis, and posterior tibial.'
        },
        {
          question: 'Which tonsil is also called the adenoid?',
          options: { A: 'Palatine', B: 'Lingual', C: 'Pharyngeal', D: 'Intestinal' },
          answer: 'C',
          explanation: 'The pharyngeal tonsil is also called the adenoid. It is a single tonsil on the pharyngeal wall.'
        }
      ],
      quiz: [
        {
          question: 'The dicrotic notch corresponds to:',
          options: { A: 'Closure of AV valves', B: 'A small secondary pressure increase at the beginning of diastole', C: 'Peak systolic pressure', D: 'Opening of semilunar valves' },
          answer: 'B',
          explanation: 'The dicrotic notch is a small secondary pressure increase at the beginning of diastole, caused by closure of aortic/pulmonary valves.'
        },
        {
          question: 'Pulse pressure is the difference between:',
          options: { A: 'Diastolic and venous pressure', B: 'Systolic and diastolic pressures', C: 'Arterial and capillary pressure', D: 'S1 and S2 sounds' },
          answer: 'B',
          explanation: 'Pulse pressure is the difference between systolic and diastolic pressures, normally about 40 mmHg.'
        },
        {
          question: 'The "lubb-dupp" sounds are caused by:',
          options: { A: 'Opening of all valves', B: 'Closing of the valves', C: 'Blood turbulence only', D: 'Muscle contractions' },
          answer: 'B',
          explanation: 'The first and second heart sounds (S1 and S2) are caused by closing of the valves - AV valves for S1 and semilunar valves for S2.'
        },
        {
          question: 'When placing a BP cuff, it should be tight enough to allow:',
          options: { A: 'One fingertip under it', B: 'Two fingertips under the top edge', C: 'The whole hand under it', D: 'No fingers under it' },
          answer: 'B',
          explanation: 'The BP cuff should be placed on bare upper arm 1 inch above elbow bend, tight enough for two fingertips under the top edge.'
        },
        {
          question: 'The lymphatic system\'s fluid recovery function returns about what percentage of filtered interstitial fluid to blood?',
          options: { A: '5%', B: '15%', C: '50%', D: '85%' },
          answer: 'B',
          explanation: 'The lymphatic system reabsorbs ~15% of filtered fluid that is not returned by capillaries and returns it to the blood.'
        },
        {
          question: 'Which lymphatic system function involves filtering lymph through lymph nodes?',
          options: { A: 'Fluid recovery', B: 'Lipid absorption', C: 'Immunity', D: 'Gas exchange' },
          answer: 'C',
          explanation: 'Immunity: tissue fluid (lymph) is filtered through lymph nodes containing immune cells before returning to the bloodstream.'
        },
        {
          question: 'Lacteals in the small intestine are specialized for:',
          options: { A: 'Gas exchange', B: 'Lipid absorption', C: 'Fluid recovery', D: 'Immunity only' },
          answer: 'B',
          explanation: 'Lacteals in small intestine villi absorb dietary lipids as one of the three main functions of the lymphatic system.'
        },
        {
          question: 'The thymus is located:',
          options: { A: 'In the left hypochondriac region', B: 'Between the sternum and aortic arch', C: 'Posterolateral to the stomach', D: 'In the inguinal region' },
          answer: 'B',
          explanation: 'The thymus is a bilobed organ located between the sternum and aortic arch.'
        },
        {
          question: 'The spleen\'s microscopic features include:',
          options: { A: 'Capsule and crypts', B: 'White pulp and red pulp', C: 'Hassall\'s corpuscles', D: 'Cisterna chyli' },
          answer: 'B',
          explanation: 'The spleen has white pulp (lymphatic tissue) and red pulp (erythrocyte-filled sinuses).'
        },
        {
          question: 'Lymph nodes are most numerous in which regions?',
          options: { A: 'Hepatic and splenic', B: 'Cervical, axillary, intestinal, inguinal', C: 'Femoral and popliteal', D: 'Cranial and sacral' },
          answer: 'B',
          explanation: 'Lymph nodes (~450 in adults) are located in cervical, axillary, intestinal, and inguinal regions.'
        },
        {
          question: 'The right lymphatic duct is formed by:',
          options: { A: 'Cisterna chyli', B: 'Convergence of right jugular, subclavian, and bronchomediastinal trunks', C: 'Thoracic duct branches', D: 'Appendix follicles' },
          answer: 'B',
          explanation: 'The right lymphatic duct is formed by convergence of the right jugular, subclavian, and bronchomediastinal trunks.'
        },
        {
          question: 'The thoracic duct empties into the:',
          options: { A: 'Right subclavian vein', B: 'Left subclavian vein', C: 'Superior vena cava', D: 'Cisterna chyli' },
          answer: 'B',
          explanation: 'The thoracic duct drains from the cisterna chyli and empties into the left subclavian vein.'
        },
        {
          question: 'Lymphatic capillaries have openings formed by:',
          options: { A: 'Valves', B: 'Gaps between endothelial cells', C: 'Smooth muscle contractions', D: 'Anchoring filaments alone' },
          answer: 'B',
          explanation: 'Lymphatic vessels have openings that are gaps between endothelial cells, anchored by filaments.'
        },
        {
          question: 'The appendix is notable for:',
          options: { A: 'Producing EPO', B: 'Containing abundant lymphoid nodules', C: 'Filtering plasma', D: 'Storing platelets' },
          answer: 'B',
          explanation: 'The appendix contains abundant lymphoid nodules (follicles), making it part of the lymphatic system.'
        },
        {
          question: 'A lymph node\'s cortex primarily contains:',
          options: { A: 'Red pulp', B: 'Lymphoid follicles', C: 'White pulp', D: 'Hassall\'s corpuscles' },
          answer: 'B',
          explanation: 'The lymph node cortex contains lymphoid follicles. Red/white pulp are spleen features and Hassall\'s corpuscles are thymus features.'
        },
        {
          question: 'When inflating the BP cuff, you should go about how much above expected systolic?',
          options: { A: '10 points', B: '20 points', C: '30 points', D: '50 points' },
          answer: 'C',
          explanation: 'Inflate the cuff rapidly to 30 points above usual systolic pressure, then slowly deflate while listening.'
        },
        {
          question: 'The spleen is located:',
          options: { A: 'Between sternum and aortic arch', B: 'Left hypochondriac region, inferior to diaphragm', C: 'Inguinal region', D: 'Cervical region' },
          answer: 'B',
          explanation: 'The spleen is located in the left hypochondriac region, inferior to the diaphragm and posterolateral to the stomach.'
        },
        {
          question: 'The "lubb" sound (S1) occurs due to:',
          options: { A: 'Closure of semilunar valves', B: 'Closure of AV valves', C: 'Opening of all valves', D: 'Blood entering capillaries' },
          answer: 'B',
          explanation: 'S1 ("lubb") is caused by closure of AV valves at the start of systole.'
        },
        {
          question: 'Which lymphatic structure drains most of the body and empties into the left subclavian vein?',
          options: { A: 'Right lymphatic duct', B: 'Cisterna chyli', C: 'Thoracic duct', D: 'Spleen' },
          answer: 'C',
          explanation: 'The thoracic duct is the larger/longer duct that drains most of the body and empties into the left subclavian vein.'
        },
        {
          question: 'The lymphatic system absorbs lipids in the small intestine via:',
          options: { A: 'Lymph nodes', B: 'Thymus', C: 'Lacteals', D: 'Spleen' },
          answer: 'C',
          explanation: 'Lacteals in small intestine villi are specialized for absorbing dietary lipids.'
        },
        {
          question: 'When measuring BP, the stethoscope disk goes:',
          options: { A: 'On the wrist', B: 'Under the cuff on the inner upper arm', C: 'Over the brachial artery only', D: 'On the carotid artery' },
          answer: 'B',
          explanation: 'Position the stethoscope disk under the cuff on the inner side of the upper arm.'
        },
        {
          question: 'Hassall\'s corpuscles are a feature of the:',
          options: { A: 'Spleen', B: 'Lymph node cortex', C: 'Thymus', D: 'Appendix' },
          answer: 'C',
          explanation: 'Hassall\'s corpuscles are a microscopic feature of the thymus, along with cortex and medulla.'
        }
      ],
      flashcards: [
        { front: 'How long does one cardiac cycle last?', back: 'About 0.8 seconds - one contraction (systole) and one relaxation (diastole).' },
        { front: 'What is the dicrotic notch?', back: 'A small secondary pressure increase at the beginning of diastole caused by closure of the aortic/pulmonary valves.' },
        { front: 'What causes the S1 and S2 heart sounds?', back: 'S1 ("lubb") = closure of AV valves at start of systole. S2 ("dupp") = closure of semilunar valves at start of diastole.' },
        { front: 'Name five common pulse points.', back: 'Carotid, radial, brachial, dorsalis pedis (dorsal foot artery), and posterior tibial.' },
        { front: 'What are the three functions of the lymphatic system?', back: 'Fluid recovery (~15% of filtered fluid), immunity (lymph node filtering), and lipid absorption (lacteals in small intestine).' },
        { front: 'Where is the thymus located and what are its microscopic features?', back: 'Between sternum and aortic arch; features include cortex, medulla, and Hassall\'s corpuscles.' },
        { front: 'Where is the spleen and what are its main tissue types?', back: 'Left hypochondriac region, inferior to diaphragm, posterolateral to stomach. Contains white pulp (lymphatic tissue) and red pulp (erythrocyte-filled sinuses).' },
        { front: 'What does the right lymphatic duct drain?', back: 'Right arm, right side of head and thorax; formed by convergence of right jugular, subclavian, and bronchomediastinal trunks.' },
        { front: 'What does the thoracic duct drain?', back: 'Everything below diaphragm plus left arm, head, neck, and thorax; begins as cisterna chyli and empties into left subclavian vein.' },
        { front: 'Name the three sets of tonsils.', back: 'Pharyngeal (adenoids - single), palatine (pair at back of oral cavity), and lingual (pair at root of tongue).' }
      ]
    }
  ]
};

export default vessels;
