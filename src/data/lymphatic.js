const lymphatic = {
  id: 'lymphatic',
  title: 'Lymphatic & Immune System',
  source: '10 Lymphatic and Immune SystemsPDF.pdf',
  description: 'Comprehensive study of the lymphatic system (vessels, organs, lymph flow) and the immune system: nonspecific resistance (barriers, phagocytosis, inflammation, fever, NK cells, complement, interferons), specific immunity (T cell maturation and selection, cellular immunity, cytotoxic/helper/memory/suppressor T cells, antigen processing, MHC), antibody-mediated immunity (B cells, antibody structure and classes, immunological memory), hypersensitivity types I-IV, autoimmune diseases, immunodeficiency (SCID, AIDS), and aging.',
  icon: 'lymphatic',

  learningObjectives: [
    'Describe the three main functions of the lymphatic system: fluid recovery, immunity, and lipid absorption.',
    'Trace the route of lymph flow from capillaries through collecting ducts to the bloodstream.',
    'Compare the structure and functions of lymph nodes, tonsils, thymus, and spleen.',
    'Identify lymphatic cells (T cells, B cells, APCs) and lymphatic tissues (diffuse, nodules, MALT).',
    'Describe nonspecific resistance mechanisms: skin/mucous membrane barriers, leukocytes, antimicrobial proteins.',
    'Explain the process of phagocytosis including chemotaxis, adherence, ingestion, and digestion.',
    'Describe the four cardinal signs of inflammation and the stages of inflammatory response.',
    'Explain the mechanisms and benefits of fever.',
    'Differentiate between cellular immunity (T cells) and antibody-mediated immunity (B cells).',
    'Describe T cell maturation, positive/negative selection, and the four classes of T cells.',
    'Explain antigen processing (exogenous vs endogenous) and the role of MHC-I and MHC-II.',
    'Describe antibody structure, the five immunoglobulin classes (IgG, IgA, IgM, IgD, IgE), and antibody actions.',
    'Compare primary and secondary immune responses and explain immunological memory.',
    'Differentiate natural/artificial active and passive immunity.',
    'Classify the four types of hypersensitivity reactions (Type I-IV) with clinical examples.',
    'Describe autoimmune diseases, SCID, and AIDS including HIV structure and transmission.'
  ],

  clinicalCorrelations: [
    {
      title: 'Cancer Metastasis via Lymphatics',
      detail: 'Malignant tumors spread (metastasize) via lymph or blood to establish secondary tumors. Direction of lymph flow predicts secondary tumor sites. Cancerous lymph nodes are firm, enlarged, and nontender; infected nodes are tender and not firm.'
    },
    {
      title: 'Anaphylactic Shock (Type I Hypersensitivity)',
      detail: 'Severe allergic reaction: allergen caps IgE on mast cells/basophils → massive histamine release → bronchiolar constriction, dyspnea, generalized vasodilation, shock, and potentially death. Emergency treatment: epinephrine injection. Asthma (most common chronic illness in children) involves inhaled allergens triggering histamine and bronchiole constriction.'
    },
    {
      title: 'AIDS & HIV',
      detail: 'HIV invades helper T cells (CD4), macrophages, and dendritic cells via receptor-mediated endocytosis. As a retrovirus, it uses reverse transcriptase to make DNA from viral RNA, which integrates into host DNA (may be dormant months to years). Normal T-helper count: 600-1200 cells/µL; AIDS: <200 cells/µL → vulnerability to opportunistic infections (Pneumocystis, TB, CMV). Signs: flu-like → night sweats, weight loss → thrush → Kaposi sarcoma. Transmission: blood, semen, vaginal secretions, breast milk, placenta.'
    },
    {
      title: 'Autoimmune Diseases',
      detail: 'Failure of self-tolerance where immune system attacks body\'s own cells. Mechanisms: cross-reactivity, abnormal exposure of self-antigens, changes in self-antigen structure. Results in production of autoantibodies. Examples: rheumatoid arthritis, lupus (SLE), myasthenia gravis, Type I diabetes.'
    },
    {
      title: 'Graft Rejection',
      detail: 'After organ transplant, both cell-mediated and antibody-mediated immune responses target the graft. Close MHC matching reduces rejection severity. Immunosuppressive drugs (cyclosporine) inhibit IL-2 secretion by helper T cells while preserving some B-cell function for minimal infection resistance.'
    },
    {
      title: 'Fever: Defense Mechanism',
      detail: 'Macrophages secrete interleukin-1 (a pyrogen) which stimulates anterior hypothalamus to release PGE, resetting the thermostat higher. Benefits: promotes interferon activity, accelerates metabolic rate and tissue repair, inhibits pathogen reproduction. Stages: onset, stadium, defervescence. Danger: >105°F may cause delirium; 111-115°F can cause coma and death.'
    }
  ],

  quickFacts: [
    'Lymphatic system recovers 2-4 L/day of plasma proteins and fluid from interstitial space.',
    'Lacteals in small intestine absorb dietary lipids; lymph from lacteals is called chyle.',
    'Right lymphatic duct drains right arm, right head/thorax; thoracic duct drains everything else.',
    'Thoracic duct begins at cisterna chyli and empties into left subclavian vein.',
    'About 450 lymph nodes in the adult body concentrated near mammary glands, axillae, and groin.',
    'Cancerous lymph nodes: Firm, Enlarged, Nontender (FEN). Infected nodes: Tender, Not Firm.',
    'Thymus is largest in infants (~70g), involutes to ~3g by adulthood.',
    'Spleen functions: blood reservoir, RBC disposal, fetal blood production, immune reactions.',
    'Neutrophils are first responders creating a "killing zone" via degranulation and respiratory burst.',
    'NK cells: 5% of circulating lymphocytes; attack cells with abnormal MHC antigens.',
    'Complement system has classical and alternate pathways leading to inflammation, opsonization, or cytolysis (MAC).',
    'T cells: 80% of circulating lymphocytes; B cells: 15%; NK cells: 5%.',
    'Only 1 in 100 T cells in thymus passes positive and negative selection as immunocompetent.',
    'IgG: 75-85% of circulating antibodies; only Ig that crosses placenta.',
    'Primary immune response is slow; secondary is rapid (memory cells proliferate → not even sick).',
    'Four types of hypersensitivity: Type I (acute/anaphylaxis), II (cytotoxic), III (immune complex), IV (delayed).'
  ],

  sections: [
    // ===== SECTION 1: Lymphatic System Structure & Function =====
    {
      id: 'lymphatic-s1',
      title: 'Lymphatic System: Vessels, Flow, Cells, Tissues & Organs',
      pageRange: 'Pages 1-12',
      learnItems: [
        {
          title: 'Lymphatic and Immune Systems Overview',
          body: 'The lymphatic and immune systems maintain fluid balance and protect the body from infection and disease. The lymphatic system consists of organs, vessels, and lymph fluid (similar to interstitial fluid). Key organs: red bone marrow, thymus, spleen, lymph nodes, and diffuse lymphatic tissue (tonsils, adenoids, Peyer\'s patches).'
        },
        {
          title: 'Three Functions of the Lymphatic System',
          body: 'Fluid recovery: absorbs excess plasma proteins and fluid (2-4 L/day, about 15% of capillary filtrate) from tissues and returns it to the bloodstream; interference with lymphatic drainage leads to severe edema. Immunity: tissue fluid is filtered through lymph nodes where immune cells respond to foreign cells or chemicals. Lipid absorption: lacteals in small intestine absorb dietary lipids; lymph from lacteals is called chyle.'
        },
        {
          title: 'Lymph and Lymphatic Capillaries',
          body: 'Lymph: clear, colorless fluid similar to plasma but with much less protein. Lymphatic capillaries: closed at one end, tethered to surrounding tissue by protein filaments (prevent collapse). Endothelial cells loosely overlap creating valve-like flaps that open when interstitial pressure is high and close when low — designed to let fluid IN but not OUT. Found throughout the body EXCEPT in avascular tissues (cartilage, epidermis, cornea). In GI tract, called lacteals (contain chyle).'
        },
        {
          title: 'Lymphatic Vessels',
          body: 'Larger lymphatic vessels have three layers: tunica interna (endothelium + valves), tunica media (elastic fibers + smooth muscle), tunica externa (thin outer layer). Structure similar to veins but with thinner walls and more valves.'
        },
        {
          title: 'Route of Lymph Flow',
          body: 'Lymphatic capillaries → collecting vessels (pass through many lymph nodes) → lymphatic trunks (drain major body portions) → collecting ducts. Right lymphatic duct: receives lymph from right arm, right side of head/thorax; empties into right subclavian vein. Thoracic duct: larger and longer, begins as cisterna chyli (prominent abdominal sac), receives lymph from below diaphragm + left arm + left side of head/neck/thorax; empties into left subclavian vein.'
        },
        {
          title: 'Mechanisms of Lymph Flow',
          body: 'Lymph flows at low pressure and speed. Moved by: rhythmic contractions of lymphatic vessel walls (stretching stimulates contraction), skeletal muscle pump, thoracic pump (aids flow from abdominal to thoracic cavity), valves preventing backflow, and rapidly flowing blood in subclavian veins which draws lymph in. Exercise significantly increases lymphatic return.'
        },
        {
          title: 'Lymphatic Cells',
          body: 'T lymphocytes: mature in thymus; involved in cell-mediated immunity. B lymphocytes: activation causes proliferation and differentiation into plasma cells that produce antibodies. Antigen-presenting cells (APCs): macrophages (from monocytes), dendritic cells (in epidermis, mucous membranes, and lymphatic organs), reticular cells (contribute to lymph organ stroma).'
        },
        {
          title: 'Lymphatic Tissue',
          body: 'Diffuse lymphatic tissue: lymphocytes scattered in mucous membranes and connective tissue of many organs. Mucosa-associated lymphatic tissue (MALT): particularly prevalent in passages open to the exterior. Lymphatic nodules: dense oval masses of lymphocytes that congregate in response to pathogens. Peyer patches: more permanent congregations (clusters) found at the junction of small and large intestine.'
        },
        {
          title: 'Lymph Nodes',
          body: 'Bean-shaped organs, up to 1 inch long, located along lymphatic vessels. About 450 in the adult body, concentrated near mammary glands, axillae, and groin (cervical, axillary, inguinal near surface; thoracic, abdominal, pelvic deep). Stroma: capsule, trabeculae, reticular fibers. Parenchyma: cortex contains lymphatic nodules with germinal centers (dendritic cells, APCs, macrophages; B cells proliferate into plasma cells); medulla contains B cells and plasma cells in medullary cords. One-way flow: afferent vessels → sinuses → efferent vessels exit at hilus. Only lymph NODES filter lymph.'
        },
        {
          title: 'Tonsils',
          body: 'Guard entrance to pharynx. Three types: palatine tonsils (pair at posterior margin of oral cavity — most often infected), lingual tonsils (pair at root of tongue), pharyngeal tonsil/adenoid (single, on pharyngeal wall). Covered by epithelium; pathogens enter tonsillar crypts and encounter lymphocytes.'
        },
        {
          title: 'Thymus Gland',
          body: 'Large in infants (~70 g) but atrophies in adults (~3 g) — involution after puberty. Two-lobed organ in mediastinum (between sternum and aortic arch). Divided into lobules by capsule and trabeculae; each lobule has cortex (tightly packed lymphocytes + macrophages) and medulla (reticular epithelial cells producing thymic hormones: thymopoietin and thymosins; also contains Hassall\'s corpuscles). T cells mature here.'
        },
        {
          title: 'Spleen',
          body: 'Located inferior to diaphragm, dorsolateral to stomach. Parenchyma: red pulp (sinuses filled with erythrocytes) and white pulp (lymphocytes and macrophages surrounding branches of splenic artery). Functions: blood production in fetus, blood reservoir, RBC disposal (removes old/damaged RBCs), and immune reactions (filters blood, quickly detects antigens).'
        },
        {
          title: 'Cancer Metastasis via Lymphatics',
          body: 'Characteristic of malignant tumors — cancer cells spread from one organ to another via blood or lymphatic system, establishing secondary tumors where they lodge. Secondary sites can be predicted by direction of lymph flow from primary tumor. Cancerous lymph nodes: firm, enlarged, nontender. Infected lymph nodes: tender, not firm.'
        }
      ],
      keyTerms: [
        { term: 'Lymph', definition: 'Clear, colorless fluid similar to plasma but with much less protein.' },
        { term: 'Lacteals', definition: 'Lymphatic capillaries in GI tract that absorb dietary lipids; contain chyle.' },
        { term: 'Cisterna Chyli', definition: 'Prominent abdominal sac where the thoracic duct begins.' },
        { term: 'MALT', definition: 'Mucosa-associated lymphatic tissue in passages open to the exterior.' },
        { term: 'Peyer Patches', definition: 'Permanent lymphatic nodule clusters at the small/large intestine junction.' },
        { term: 'Germinal Centers', definition: 'Lymph node cortex areas where dendritic cells reside and B cells proliferate into plasma cells.' },
        { term: 'Hassall\'s Corpuscles', definition: 'Distinctive structures in the thymus medulla; contain reticular epithelial cells.' },
        { term: 'Red Pulp', definition: 'Splenic tissue with sinuses filled with erythrocytes.' },
        { term: 'White Pulp', definition: 'Splenic tissue with lymphocytes/macrophages surrounding splenic artery branches.' },
        { term: 'Afferent Vessels', definition: 'Lymphatic vessels carrying lymph INTO a lymph node.' },
        { term: 'Efferent Vessels', definition: 'Lymphatic vessels carrying lymph OUT of a lymph node at the hilus.' },
        { term: 'Metastasis', definition: 'Spread of malignant tumor cells via lymph or blood to establish secondary tumors.' }
      ],
      memoryAids: [
        'Lymphatic functions: "FIL" = Fluid recovery, Immunity, Lipid absorption.',
        'Lymph flow route: "Cap-Col-Trunk-Duct" = Capillaries → Collecting vessels → Trunks → Ducts.',
        'Node flow is one-way: "A before E" = Afferent in, Efferent out (at hilus).',
        'Cancerous nodes: "FEN" = Firm, Enlarged, Nontender. Infected: "TNF" = Tender, Not Firm.',
        'Thymus timeline: HUGE in babies, TINY in adults (involution after puberty).',
        'Spleen functions: "BIRD" = Blood reservoir, Immune reactions, RBC disposal, Development (fetal blood production).'
      ],
      inlineQuestions: [
        {
          question: 'The three main functions of the lymphatic system are:',
          options: { A: 'Gas exchange, hormone transport, waste removal', B: 'Fluid recovery, immunity, lipid absorption', C: 'Blood production, pH regulation, heat distribution', D: 'Oxygen delivery, CO₂ removal, nutrient transport' },
          answer: 'B',
          explanation: 'The lymphatic system recovers 2-4 L/day of fluid and plasma proteins from tissues, provides immunity via lymph node filtration, and absorbs dietary lipids via lacteals (chyle) in the small intestine.'
        },
        {
          question: 'Lymph flows through a lymph node in which direction?',
          options: { A: 'Bidirectionally through afferent vessels', B: 'One-way: afferent vessels in, efferent vessels out at the hilus', C: 'From efferent to afferent vessels', D: 'Randomly through diffuse channels' },
          answer: 'B',
          explanation: 'Lymph node flow is one-way: lymph enters through multiple afferent vessels, passes through sinuses where immune cells can respond to foreign material, and exits through fewer efferent vessels at the hilus.'
        },
        {
          question: 'The thymus is largest during infancy (~70g) and shrinks to ~3g by adulthood. This process is called:',
          options: { A: 'Metastasis', B: 'Involution', C: 'Diapedesis', D: 'Opsonization' },
          answer: 'B',
          explanation: 'Thymic involution is the natural shrinking of the thymus after puberty. Despite this, the T cells it produced during early life continue to function throughout adulthood.'
        }
      ],
      quiz: [
        { id: 'ly1-q1', question: 'The lymphatic system recovers approximately how much fluid from tissues per day?', options: { A: '0.5-1 L', B: '2-4 L', C: '8-10 L', D: '15-20 L' }, answer: 'B', explanation: 'The lymphatic system absorbs about 2-4 L/day of plasma proteins and fluid from tissues.' },
        { id: 'ly1-q2', question: 'Lacteals are found in the:', options: { A: 'Lungs', B: 'Brain', C: 'Small intestine', D: 'Liver' }, answer: 'C', explanation: 'Lacteals are lymphatic capillaries in the small intestine that absorb dietary lipids (chyle).' },
        { id: 'ly1-q3', question: 'The thoracic duct empties into the:', options: { A: 'Right subclavian vein', B: 'Left subclavian vein', C: 'Inferior vena cava', D: 'Aorta' }, answer: 'B', explanation: 'The thoracic duct (larger and longer) drains the majority of the body and empties into the left subclavian vein.' },
        { id: 'ly1-q4', question: 'Lymph nodes filter lymph. The flow through a node is:', options: { A: 'Bidirectional through afferent vessels', B: 'One-way: afferent vessels in, efferent out at hilus', C: 'From efferent to afferent', D: 'Diffuse and directionless' }, answer: 'B', explanation: 'Lymph enters via afferent vessels, flows through sinuses, and exits via efferent vessels at the hilus — one-way flow.' },
        { id: 'ly1-q5', question: 'The thymus is largest during:', options: { A: 'Adolescence', B: 'Infancy', C: 'Middle adulthood', D: 'Old age' }, answer: 'B', explanation: 'The thymus is largest in infants (~70g) and involutes after puberty to about 3g by adulthood.' },
        { id: 'ly1-q6', question: 'The spleen\'s red pulp contains:', options: { A: 'Lymphocytes surrounding arteries', B: 'Sinuses filled with erythrocytes', C: 'Hassall\'s corpuscles', D: 'Germinal centers' }, answer: 'B', explanation: 'Red pulp consists of sinuses filled with erythrocytes. White pulp contains lymphocytes/macrophages.' },
        { id: 'ly1-q7', question: 'Cancerous lymph nodes are typically:', options: { A: 'Tender and soft', B: 'Firm, enlarged, and nontender', C: 'Small and mobile', D: 'Warm and fluctuant' }, answer: 'B', explanation: 'Cancerous nodes are FEN: Firm, Enlarged, Nontender. Infected nodes are tender and not firm.' },
        { id: 'ly1-q8', question: 'Which tonsils are most often infected?', options: { A: 'Lingual', B: 'Pharyngeal (adenoid)', C: 'Palatine', D: 'Tubal' }, answer: 'C', explanation: 'Palatine tonsils (pair at posterior margin of oral cavity) are most commonly infected.' },
        { id: 'ly1-q9', question: 'Lymphatic capillaries are absent in all EXCEPT:', options: { A: 'Cartilage', B: 'Epidermis', C: 'Skeletal muscle', D: 'Cornea' }, answer: 'C', explanation: 'Lymphatic capillaries are absent in avascular tissues (cartilage, epidermis, cornea) but present in skeletal muscle.' },
        { id: 'ly1-q10', question: 'Peyer patches are permanent collections of lymphatic nodules found at the:', options: { A: 'Root of the tongue', B: 'Pharynx entrance', C: 'Junction of small and large intestine', D: 'Cervical region' }, answer: 'C', explanation: 'Peyer patches are permanent lymphatic nodule clusters at the small/large intestine junction.' }
      ]
    },

    // ===== SECTION 2: Nonspecific Resistance to Disease =====
    {
      id: 'lymphatic-s2',
      title: 'Nonspecific Resistance: Barriers, Phagocytosis, Inflammation & Fever',
      pageRange: 'Pages 12-22',
      learnItems: [
        {
          title: 'Resistance vs Susceptibility',
          body: 'Resistance = ability to ward off disease. Lack of resistance = susceptibility. Two categories: nonspecific resistance (general defense against wide range of pathogens — no specificity or memory) and specific resistance/immunity (defense against specific pathogens — has specificity and memory). Nonspecific mechanisms function regardless of invader type.'
        },
        {
          title: 'External Barriers: Skin and Mucous Membranes',
          body: 'Mechanical protection: skin (epidermis) — closely packed, keratinized cells; shedding removes microbes. Mucous membranes secrete viscous mucus; cilia trap and move microbes toward throat. Washing action of tears, urine, and saliva. Chemical protection: sebum inhibits bacteria and fungus growth; perspiration contains lysozyme that breaks down bacterial cells; acidic pH of gastric juice and vaginal secretions destroys bacteria.'
        },
        {
          title: 'Leukocytes in Nonspecific Defense',
          body: 'Neutrophils: phagocytize bacteria, create a "killing zone" via degranulation (lysosomes discharge into tissue fluid) and respiratory burst (toxic chemicals created: superoxide O₂⁻, H₂O₂, HClO). Eosinophils: phagocytize antigen-antibody complexes, allergens, and inflammatory chemicals; have antiparasitic effects — aggregate and release enzymes against parasites.'
        },
        {
          title: 'Antimicrobial Proteins',
          body: 'Interferons: polypeptides secreted by virally-infected lymphocytes and macrophages; diffuse to neighboring cells and stimulate them to produce antiviral proteins. Also have anticancer effects — activate NK cells and macrophages to destroy infected/cancerous cells. Complement proteins: inactive proteins in blood plasma that, when activated, enhance immune, allergic, and inflammatory reactions. Classical pathway (C1 activation) and alternate pathway (C3 activation). Mechanisms: enhanced inflammation, opsonization (promotes phagocytosis), and cytolysis via membrane attack complex (MAC: C5b-C9 form a ring in enemy cell membrane). Transferrins: iron-binding proteins that inhibit bacterial growth by reducing available iron.'
        },
        {
          title: 'Natural Killer (NK) Cells',
          body: 'Derived from T-lymphocyte precursors. Kill a variety of microbes and tumor cells. Found in blood, spleen, lymph nodes, and red bone marrow. Attack cells displaying abnormal MHC antigens. Use perforin to punch holes in target cells — specialized for distinguishing "self" from "funky self."'
        },
        {
          title: 'Phagocytosis',
          body: 'Phagocytes include neutrophils and macrophages (developed from monocytes). Fixed macrophages: histiocytes (skin), Kupffer cells (liver), alveolar macrophages (lungs), microglia (brain), plus macrophages in spleen, red marrow, and lymph nodes. Wandering macrophages in most tissues. Steps: (1) Chemotaxis — attraction to chemicals from damaged tissues, complement proteins, or microbial products. (2) Adherence — attachment to phagocyte plasma membrane. (3) Ingestion — engulfment by pseudopods forming a phagosome. (4) Digestion and killing — phagosome merges with lysosome containing digestive enzymes; lethal oxidants formed. (5) Exocytosis of residual body.'
        },
        {
          title: 'Inflammation: Cardinal Signs and Purpose',
          body: 'Defensive response to tissue injury. Purpose: limits pathogen spread, destroys them, removes debris, initiates tissue repair. Suffix "-itis" denotes inflammation. Four cardinal signs: (1) Redness (erythema) — caused by hyperemia (increased blood flow). (2) Swelling (edema) — from increased capillary permeability and filtration. (3) Heat — from hyperemia. (4) Pain — from inflammatory chemicals (bradykinin, prostaglandins) secreted by damaged cells and pressure on nerves.'
        },
        {
          title: 'Inflammation: Mobilization of Defenses',
          body: 'Bradykinin, histamine, and leukotrienes released by damaged cells, basophils (blood), and mast cells (tissue). Effects: (1) Vasodilation → hyperemia (causes redness and heat, increases metabolic rate, promotes healing, dilutes toxins, provides O₂/nutrients, aids waste removal). (2) Increased capillary permeability → blood cells, plasma chemicals (antibodies, complement, fibrinogen) enter tissue (clotting sequesters bacteria, forms scaffold for repair).'
        },
        {
          title: 'Inflammation: Leukocyte Deployment',
          body: 'Margination: leukocytes adhere to blood vessel walls via cell adhesion molecules. Diapedesis: leukocytes squeeze between endothelial cells into tissue space. Neutrophils are quickest to respond — phagocytosis, respiratory burst, secrete cytokines to recruit macrophages and T cells.'
        },
        {
          title: 'Containment, Cleanup, and Repair',
          body: 'Containment: fibrinogen in tissue forms clots trapping microbes; heparin prevents clotting at injury site; pathogens are trapped in fluid pockets surrounded by clot. Chemotaxis attracts leukocytes. Cleanup: monocytes arrive in 8-12 hours, become macrophages (primary cleanup agents). Edema and increased lymphatic flow favor removal of bacteria/debris. Pus = mixture of tissue fluid, cellular debris, dying neutrophils, and microbes. Repair: platelets and endothelial cells secrete PDGF (platelet-derived growth factor) → fibroblasts multiply and synthesize collagen. Fibrin clot provides scaffold. Hyperemia provides materials; heat accelerates metabolism. Pain limits use of body part, allowing repair.'
        },
        {
          title: 'Abscesses and Ulcers',
          body: 'Pus = dead phagocytes, damaged tissue cells, and fluid. Abscess = pus accumulation in a confined space not open to outside (pimples, boils). Ulcer = open sore. People with poor circulation (diabetics with atherosclerosis) develop stasis ulcers in leg tissues due to poor O₂ and nutrient supply.'
        },
        {
          title: 'Fever',
          body: 'A defense mechanism that can do more good than harm. Macrophages secrete interleukin-1 (a pyrogen) → stimulates anterior hypothalamus to secrete PGE → resets thermostat higher. Benefits: promotes interferon activity, accelerates metabolic rate and tissue repair, inhibits pathogen reproduction. Danger: >105°F may cause delirium; 111-115°F → coma/death. Three stages: onset, stadium, defervescence (breaking of fever).'
        }
      ],
      keyTerms: [
        { term: 'Nonspecific Resistance', definition: 'General defense mechanisms effective against a wide range of pathogens; no specificity or memory.' },
        { term: 'Interferons', definition: 'Antiviral polypeptides secreted by virus-infected cells; diffuse to neighbors to stimulate antiviral protein production.' },
        { term: 'Complement System', definition: 'Inactive plasma proteins activated by pathogens; enhance inflammation, opsonization, and cytolysis (MAC).' },
        { term: 'Membrane Attack Complex (MAC)', definition: 'Complement proteins C5b-C9 forming a ring in enemy cell membrane, causing cytolysis.' },
        { term: 'Opsonization', definition: 'Coating of pathogen with complement/antibody to promote phagocytosis.' },
        { term: 'Phagocytosis', definition: 'Ingestion and destruction of microbes by neutrophils and macrophages.' },
        { term: 'Respiratory Burst', definition: 'Neutrophil production of toxic chemicals (superoxide, H₂O₂, HClO) to kill microbes.' },
        { term: 'Chemotaxis', definition: 'Attraction of phagocytes toward chemicals from damaged tissues or microbes.' },
        { term: 'Diapedesis', definition: 'Leukocytes squeezing between endothelial cells to enter tissue space.' },
        { term: 'Margination', definition: 'Leukocytes adhering to blood vessel walls via cell adhesion molecules.' },
        { term: 'Pyrogen', definition: 'Substance that induces fever; IL-1 from macrophages stimulates hypothalamus to raise thermostat.' },
        { term: 'Pus', definition: 'Mixture of tissue fluid, cellular debris, dying neutrophils, and microbes.' },
        { term: 'NK Cells', definition: 'Lymphocytes that kill virus-infected and tumor cells displaying abnormal MHC antigens using perforin.' }
      ],
      memoryAids: [
        'Cardinal signs of inflammation: "RSHP" = Redness, Swelling, Heat, Pain.',
        'Phagocytosis steps: "CAIDK" = Chemotaxis, Adherence, Ingestion, Digestion, Kill (exocytosis).',
        'Fixed macrophages by location: "HiKA-MM" = Histiocytes (skin), Kupffer (liver), Alveolar (lungs), Microglia (brain), Marrow/nodes Macrophages.',
        'Complement end game: "IOC" = Inflammation, Opsonization, Cytolysis (MAC).',
        'Fever stages: "OSD" = Onset, Stadium, Defervescence.'
      ],
      inlineQuestions: [
        {
          question: 'Neutrophils kill bacteria using a "respiratory burst" that produces toxic chemicals including:',
          options: { A: 'Antibodies and complement', B: 'Superoxide, hydrogen peroxide, and hypochlorous acid', C: 'Interferons and interleukins', D: 'Histamine and bradykinin' },
          answer: 'B',
          explanation: 'The neutrophil respiratory burst creates superoxide (O₂⁻), hydrogen peroxide (H₂O₂), and hypochlorous acid (HClO) — a potent killing zone that destroys bacteria. This is a nonspecific defense mechanism.'
        },
        {
          question: 'The complement system destroys pathogens by forming a ring of proteins (C5b-C9) in the enemy cell membrane called the:',
          options: { A: 'Respiratory burst', B: 'Opsonization complex', C: 'Membrane attack complex (MAC)', D: 'Antigen-antibody complex' },
          answer: 'C',
          explanation: 'The membrane attack complex (MAC) consists of complement proteins C5b-C9 that form a ring/pore in the target cell\'s membrane, causing cytolysis (the cell bursts from uncontrolled water influx).'
        },
        {
          question: 'Fever is initiated when macrophages release which pyrogen?',
          options: { A: 'Interferon-gamma', B: 'Histamine', C: 'Interleukin-1', D: 'Prostaglandin E' },
          answer: 'C',
          explanation: 'Macrophages secrete interleukin-1 (IL-1), a pyrogen that stimulates the anterior hypothalamus to release PGE, which resets the body\'s thermostat to a higher temperature. The fever then promotes interferon activity, speeds tissue repair, and inhibits pathogen reproduction.'
        }
      ],
      quiz: [
        { id: 'ly2-q1', question: 'Which cells are the quickest to respond during inflammation?', options: { A: 'Monocytes', B: 'Basophils', C: 'Neutrophils', D: 'Eosinophils' }, answer: 'C', explanation: 'Neutrophils are first responders — they phagocytize bacteria, perform respiratory bursts, and recruit macrophages/T cells.' },
        { id: 'ly2-q2', question: 'The respiratory burst in neutrophils produces all EXCEPT:', options: { A: 'Superoxide (O₂⁻)', B: 'Hydrogen peroxide (H₂O₂)', C: 'Hypochlorous acid (HClO)', D: 'Immunoglobulin G (IgG)' }, answer: 'D', explanation: 'IgG is an antibody produced by B cells/plasma cells, not a product of neutrophil respiratory burst.' },
        { id: 'ly2-q3', question: 'Interferons are produced primarily by:', options: { A: 'Platelets', B: 'Virally-infected lymphocytes and macrophages', C: 'Red blood cells', D: 'Osteoclasts' }, answer: 'B', explanation: 'Interferons are polypeptides secreted by virus-infected lymphocytes and macrophages that stimulate neighboring cells to produce antiviral proteins.' },
        { id: 'ly2-q4', question: 'The complement system destroys pathogens through cytolysis using the:', options: { A: 'Respiratory burst', B: 'Perforin pathway', C: 'Membrane attack complex (MAC)', D: 'Histamine cascade' }, answer: 'C', explanation: 'The MAC (C5b-C9) forms a ring in the enemy cell membrane, creating pores that cause cytolysis.' },
        { id: 'ly2-q5', question: 'The correct sequence of phagocytosis is:', options: { A: 'Ingestion → Chemotaxis → Digestion → Adherence', B: 'Chemotaxis → Adherence → Ingestion → Digestion', C: 'Adherence → Chemotaxis → Digestion → Ingestion', D: 'Digestion → Ingestion → Adherence → Chemotaxis' }, answer: 'B', explanation: 'Phagocytosis proceeds: Chemotaxis (attraction) → Adherence (attachment) → Ingestion (engulfment) → Digestion/killing.' },
        { id: 'ly2-q6', question: 'Kupffer cells are fixed macrophages found in the:', options: { A: 'Brain', B: 'Skin', C: 'Liver', D: 'Lungs' }, answer: 'C', explanation: 'Kupffer cells are fixed macrophages in the liver. Microglia are in the brain, histiocytes in the skin, alveolar macrophages in the lungs.' },
        { id: 'ly2-q7', question: 'The cardinal sign of inflammation caused by increased capillary permeability is:', options: { A: 'Redness', B: 'Heat', C: 'Swelling (edema)', D: 'Pain' }, answer: 'C', explanation: 'Increased permeability allows fluid and proteins to escape into tissue = swelling/edema. Redness and heat come from hyperemia.' },
        { id: 'ly2-q8', question: 'Diapedesis is the process by which:', options: { A: 'Bacteria are ingested by macrophages', B: 'Leukocytes squeeze between endothelial cells into tissue', C: 'Blood clots form', D: 'Pyrogens reset the thermostat' }, answer: 'B', explanation: 'Diapedesis is leukocytes squeezing between endothelial cells of blood vessel walls to enter tissue spaces.' },
        { id: 'ly2-q9', question: 'Fever is initiated by which cytokine from macrophages?', options: { A: 'Interferon-gamma', B: 'Interleukin-2', C: 'Interleukin-1', D: 'TNF-beta' }, answer: 'C', explanation: 'IL-1 (a pyrogen from macrophages) stimulates the anterior hypothalamus to release PGE, which resets the thermostat higher.' },
        { id: 'ly2-q10', question: 'Transferrins inhibit bacterial growth by:', options: { A: 'Punching holes in bacterial membranes', B: 'Reducing available iron', C: 'Stimulating T cells', D: 'Activating complement' }, answer: 'B', explanation: 'Transferrins are iron-binding proteins that inhibit bacterial growth by sequestering iron that bacteria need to multiply.' },
        { id: 'ly2-q11', question: 'Monocytes arrive at an inflammation site and become macrophages after approximately:', options: { A: '1-2 minutes', B: '8-12 hours', C: '3-5 days', D: '2-3 weeks' }, answer: 'B', explanation: 'Monocytes are the primary agents of cleanup, arriving in 8-12 hours and becoming macrophages in the tissue.' },
        { id: 'ly2-q12', question: 'PDGF (platelet-derived growth factor) stimulates:', options: { A: 'Phagocytosis by neutrophils', B: 'Fibroblast multiplication and collagen synthesis', C: 'Mast cell degranulation', D: 'NK cell activation' }, answer: 'B', explanation: 'PDGF from platelets and endothelial cells stimulates fibroblasts to multiply and synthesize collagen for tissue repair.' }
      ]
    },

    // ===== SECTION 3: Specific Immunity — Cellular and Antibody-Mediated =====
    {
      id: 'lymphatic-s3',
      title: 'Specific Immunity: T Cells, B Cells, Antibodies & Disorders',
      pageRange: 'Pages 22-45',
      learnItems: [
        {
          title: 'Specific Immunity Overview',
          body: 'Immunity is the body\'s ability to defend against specific foreign material (bacteria, toxins, viruses, pollen, etc.). Differs from nonspecific defense by: specificity (recognizes self vs non-self) and memory (2nd encounter produces more vigorous response). The immune system consists of cells and tissues producing the immune response; immunology is the study of these responses.'
        },
        {
          title: 'T and B Cell Maturation',
          body: 'T cells mature in thymus — responsible for cell-mediated immunity (attack antigens directly). Effective against fungi, viruses, parasites, cancer, and tissue transplants. B cells mature in bone marrow — responsible for antibody-mediated (humoral) immunity. When activated, B cells differentiate into plasma cells that secrete antibodies. Effective mainly against bacteria. Circulating lymphocyte percentages: T cells 80%, B cells 15%, NK cells 5%.'
        },
        {
          title: 'Antigens and Epitopes',
          body: 'Antigens: molecules or bits of foreign material (whole microbes, microbial parts, toxins, pollen, transplanted organs, incompatible blood cells). Required characteristics: immunogenicity (ability to provoke immune response) and reactivity (ability to react with antibodies/cells it caused). Entry routes: bloodstream → deposited in spleen; skin → end up in lymph nodes; mucous membrane → lodge in MALT. Antigens are large, complex molecules (usually proteins); if they have simple repeating subunits, they\'re usually NOT antigenic (e.g., plastic joint replacements). Epitope (antigenic determinant): the small part of an antigen that triggers the immune response. Hapten: smaller substance that can\'t trigger response alone but can if attached to a body protein (e.g., poison ivy lipid).'
        },
        {
          title: 'Antigen Receptor Diversity',
          body: 'The immune system recognizes and responds to ~1 billion different epitopes (even artificial molecules). This diversity comes from genetic recombination of a few hundred small gene segments. Each B or T cell has its own unique set of gene segments coding its unique antigen receptor.'
        },
        {
          title: 'Major Histocompatibility Complex (MHC)',
          body: 'All cells have unique surface markers (integral membrane proteins called HLA antigens). MHC-I molecules: found on ALL nucleated cells EXCEPT red blood cells — if a cell is infected with virus, MHC-I displays bits of viral protein, marking it for T cell recognition. MHC-II molecules: found ONLY on antigen-presenting cells (macrophages, B cells, thymus cells) — display processed foreign proteins for helper T cell recognition. Histocompatibility testing: similarity of MHC antigens between individuals; required before organ transplants; can help identify biological parents.'
        },
        {
          title: 'Antigen Processing: Exogenous Pathway',
          body: 'Foreign antigen in body fluid is phagocytized by an APC (macrophage, B cell, dendritic/Langerhans cell in skin). Antigen is digested; fragments are bound to MHC-II molecules and inserted into the APC\'s membrane. APC migrates to lymphatic tissue to find helper T cells. Helper T cells "see" antigens ONLY if presented as part of MHC-II molecules.'
        },
        {
          title: 'Antigen Processing: Endogenous Pathway',
          body: 'Endogenous antigens are foreign proteins produced WITHIN a body cell (viral or cancerous proteins). Fragments of abnormal proteins become part of MHC-I molecules displayed on the cell surface. Signals that a cell needs help because it is infected or has turned cancerous. Cytotoxic T cells "see" antigens ONLY if presented as part of MHC-I molecules.'
        },
        {
          title: 'T Cell Selection in Thymus',
          body: 'Stem cells colonize fetal thymus for 2-3 days. Thymosins stimulate maturing T cells to produce antigen receptors → immunocompetent cells. Negative selection: immunocompetent T cells must (1) bind to reticular epithelium and (2) NOT react to self-antigens. Failure leads to clonal deletion (destruction) or anergy (alive but unresponsive) → produces self-tolerance. Positive selection: T cells that CAN bind MHC on reticular epithelium and do NOT react to self divide rapidly → form clones → leave thymus to colonize lymphatic tissues. Only 1 in 100 T cells emerges immunocompetent.'
        },
        {
          title: 'Cellular Immunity — Four Classes of T Cells',
          body: 'T lymphocytes attack and destroy foreign cells and diseased host cells. Four classes: (1) Cytotoxic (killer) T cells (CD8/T8/Tc): carry out the attack. (2) Helper T cells (CD4/T4/Th): help promote T and B cell action and nonspecific mechanisms. (3) Suppressor T cells: limit/slow down the immune reaction as pathogen disappears, preventing autoimmune reactions. (4) Memory T cells: provide swift recall response if a 2nd exposure occurs.'
        },
        {
          title: 'Cytotoxic T Cell Activation and Function',
          body: 'CD8 cell receptor binds to foreign antigen fragments on MHC-I (on infected/cancerous body cells or transplants). Costimulation from helper T cell (prevents accidental immune response). Proliferates and differentiates into a clone of Tc cells and memory Tc cells (occurs in secondary lymphatic organs like lymph nodes). Attack: migrate to infection/tumor site → secrete perforin (punches holes in target cell) → secrete lymphotoxin (activates enzymes fragmenting target DNA) → secrete gamma-interferon (activates phagocytes) → tumor necrosis factor (kills cancer cells in 2-3 days).'
        },
        {
          title: 'Helper T Cell Activation and Function',
          body: 'CD4 cell receptor binds to foreign antigen fragments on MHC-II (on APCs). Costimulation with interleukin. Proliferates into clone of Th cells and long-lived memory Th cells. Function: costimulate ALL other lymphocytes by secreting cytokines (especially IL-2). IL-2 has autocrine function — costimulates the helper T cell itself to proliferate and secrete more IL-2 (positive feedback → rapid expansion of helper T cells). Helper T cells coordinate both humoral and cellular immunity.'
        },
        {
          title: 'Immunological Surveillance and Graft Rejection',
          body: 'Cancerous cells display abnormal surface antigens (tumor antigens). Surveillance = immune system finds, recognizes, and destroys cells with tumor antigens — done by Tc cells, macrophages, and NK cells. Most effective against viral-induced tumors. Transplant patients on immunosuppressive drugs suffer most from viral-induced cancers. Graft rejection: after transplant, both cell-mediated and antibody-mediated responses target the graft. Close MHC matching → weaker rejection. Cyclosporine inhibits IL-2 secretion by helper T cells while preserving B cell function.'
        },
        {
          title: 'Cytokines and Cytokine Therapy',
          body: 'Cytokines: small protein hormones secreted by lymphocytes and APCs involved in immune responses. Clinical uses: alpha-interferon for Kaposi\'s sarcoma, genital herpes, hepatitis B/C, some leukemias. Beta-interferon for multiple sclerosis. Interleukin-2 for cancer treatment (with side effects).'
        },
        {
          title: 'Antibody-Mediated (Humoral) Immunity',
          body: 'Millions of different B cells, each recognizing different antigens. B cells stay in lymph nodes, spleen, or Peyer\'s patches (let antigens come to them). B cell receptors bind to antigen (more intense if on APC). Helper T cell costimulates → rapid division and differentiation into long-lived memory cells and a clone of plasma cells. Plasma cells produce antibodies at ~2000 molecules/sec for 4-5 days; each plasma cell secretes only one kind of antibody. Antibodies enter circulation to attack antigens.'
        },
        {
          title: 'Antibody Structure',
          body: 'Glycoproteins called immunoglobulins (Ig). Structure: 4 polypeptide chains (2 heavy + 2 light), hinged midregion (T or Y shape), variable region tips (antigen-binding sites), and constant region (determines antibody class). Five classes based on constant region: IgG, IgA, IgM, IgD, IgE.'
        },
        {
          title: 'Antibody Classes (IgG, IgA, IgM, IgD, IgE)',
          body: 'IgA: monomer in plasma; dimer in mucus, saliva, tears, milk, intestinal secretions; prevents pathogen adherence to epithelia. IgD: monomer on B cell membrane; functions as B cell antigen receptor. IgE: monomer in tonsils, skin, mucous membranes; stimulates histamine release from mast cells/basophils; attracts eosinophils — major role in allergies. IgG: monomer; 75-85% of circulating antibodies; ONLY Ig that crosses placenta to fetus; dominant in secondary immune response; binds complement. IgM: monomer on B cell membrane (antigen receptor); pentamer in plasma; first Ig produced in primary immune response; excellent at agglutination.'
        },
        {
          title: 'Antibody Actions',
          body: 'Neutralization: block toxin effects or prevent pathogen attachment to body cells. Immobilization: attack bacterial cilia/flagella. Agglutination and precipitation: cross-link antigens causing clumping and precipitation. Complement activation: trigger complement cascade. Enhanced phagocytosis: through precipitation, complement activation, or opsonization (coating pathogen for easier recognition).'
        },
        {
          title: 'Immunological Memory',
          body: 'Primary immune response: first exposure — steady, slow response; memory cells may remain for decades. Secondary immune response: 2nd exposure — thousands of memory cells rapidly proliferate and differentiate into plasma cells and cytotoxic T cells. Antibody titer (measure of serum antibody levels) rises rapidly. Recognition and removal occurs so quickly the person may not even get sick.'
        },
        {
          title: 'Active and Passive Immunity',
          body: 'Natural active immunity: production of own antibodies/T cells from infection or natural exposure — produces memory cells. Artificial active immunity: production of own antibodies/T cells from vaccination — produces memory cells. Natural passive immunity: temporary; fetus acquires antibodies from mother (through placenta, breast milk). Artificial passive immunity: temporary; injection of immune serum with antibodies (used for snakebite, rabies, tetanus).'
        },
        {
          title: 'Hypersensitivity (Allergy) Types I-IV',
          body: 'Type I (Acute/Anaphylaxis): most common; allergen caps IgE on mast cells/basophils → inflammatory chemicals release → local edema, mucus hypersecretion, congestion (hives, watery eyes, runny nose). Asthma: inhaled allergens trigger histamine and bronchiolar constriction (most common chronic illness in children). Anaphylactic shock: bronchiolar constriction + vasodilation + shock → death possible; treat with epinephrine. Type II (Antibody-Dependent Cytotoxic): IgG/IgM binds to cell surface antigens → lysis via complement fixation (transfusion reactions) or interferes with/overstimulates cell receptors (myasthenia gravis, erythroblastosis fetalis). Type III (Immune Complex): widespread antigen-antibody complexing → intense inflammation; involved in acute glomerulonephritis and systemic lupus erythematosus (SLE). Type IV (Delayed): 12-72 hour delay; APCs display antigens to helper T cells which secrete interferon and lymphokines activating Tc cells and macrophages. Examples: cosmetic allergies, poison ivy (haptens), TB skin test.'
        },
        {
          title: 'Autoimmune Diseases',
          body: 'Failure of self-tolerance. Causes: cross-reactivity (antibodies against foreign antigen also attack self), abnormal exposure of self-antigens, changes in structure of self-antigens. Result: production of autoantibodies that attack body\'s own cells.'
        },
        {
          title: 'Immunodeficiency: SCID and AIDS',
          body: 'SCID (Severe Combined Immunodeficiency Disease): hereditary lack of both T and B cells → extreme vulnerability to opportunistic infections. AIDS (Acquired Immunodeficiency Syndrome): caused by HIV. HIV structure: retrovirus using reverse transcriptase. HIV invades helper T cells (CD4), macrophages, and dendritic cells via receptor-mediated endocytosis. Once inside, reverse transcriptase converts viral RNA → DNA → integrates into host cell DNA (may be dormant months to years). Normal Th count: 600-1200 cells/µL; AIDS: <200 cells/µL → susceptible to opportunistic infections (Toxoplasma, Pneumocystis, herpes, CMV, TB). Signs: early flu-like → night sweats, fatigue, weight loss → thrush (white patches on mucous membranes) → Kaposi sarcoma (purple skin lesions from blood vessel endothelial cancer). Transmission: blood, semen, vaginal secretions, breast milk, placenta. NOT transmitted by casual contact. Latex condoms effective barrier.'
        },
        {
          title: 'Tumor Immunotherapy',
          body: 'Inactive cytotoxic T cells from patient are cultured with IL-2, creating lymphokine-activated killer (LAK) cells, then reinjected. Can cause tumor regression but has severe complications.'
        },
        {
          title: 'Aging and the Immune System',
          body: 'More susceptible to all types of infections and malignancies. Response to vaccines is decreased. More autoantibodies are produced. Reduced immune function: T cells less responsive to antigens, age-related thymus atrophy, decreased thymic hormone production, B cells less responsive, antibody production is slowed.'
        }
      ],
      keyTerms: [
        { term: 'Cellular Immunity', definition: 'T cell-mediated immune response; attacks infected/cancerous cells and transplants directly.' },
        { term: 'Antibody-Mediated Immunity', definition: 'B cell/plasma cell response producing antibodies that circulate in blood/lymph to attack antigens.' },
        { term: 'Antigen', definition: 'Foreign molecule that provokes an immune response; has immunogenicity and reactivity.' },
        { term: 'Epitope', definition: 'The specific small part of an antigen that triggers the immune response (antigenic determinant).' },
        { term: 'Hapten', definition: 'Small molecule that triggers immune response only when attached to a body protein (e.g., poison ivy).' },
        { term: 'MHC-I', definition: 'Surface markers on ALL nucleated cells; display endogenous antigens (viral/cancer) for cytotoxic T cells.' },
        { term: 'MHC-II', definition: 'Surface markers ONLY on APCs; display exogenous antigens for helper T cells.' },
        { term: 'Cytotoxic T Cells (CD8)', definition: 'Kill infected/cancerous cells using perforin, lymphotoxin, and TNF; recognize MHC-I.' },
        { term: 'Helper T Cells (CD4)', definition: 'Costimulate all lymphocytes via IL-2; coordinate cellular and humoral immunity; recognize MHC-II.' },
        { term: 'Plasma Cells', definition: 'Differentiated B cells producing antibodies at ~2000 molecules/sec for 4-5 days.' },
        { term: 'IgG', definition: '75-85% of circulating Ig; monomer; only Ig crossing placenta; dominant in secondary response.' },
        { term: 'IgE', definition: 'Monomer in skin/mucous membranes; triggers histamine release; major role in Type I allergy.' },
        { term: 'IgM', definition: 'Pentamer in plasma; first Ig in primary response; excellent at agglutination.' },
        { term: 'IgA', definition: 'Dimer in secretions (saliva, tears, milk, mucus); prevents pathogen adherence to epithelia.' },
        { term: 'Clonal Selection', definition: 'Antigen-stimulated lymphocyte produces a clone of identical cells against that specific antigen.' },
        { term: 'Immunological Memory', definition: 'Memory cells from primary response enable rapid, stronger secondary response upon re-exposure.' },
        { term: 'Anergy', definition: 'T cell alive but unresponsive; result of failed negative selection — contributes to self-tolerance.' },
        { term: 'Reverse Transcriptase', definition: 'HIV enzyme converting viral RNA to DNA for integration into host cell genome.' }
      ],
      memoryAids: [
        'MHC classes: "Class I = all cells type I" (all nucleated cells); "Class II = APCs type II" (macrophages, B cells).',
        'T cell recognition: "CD8 sees MHC-I" (8÷1=8); "CD4 sees MHC-II" (4×2=8... or just 4→2).',
        'Antibody classes: "GAMED" = IgG (75-85%), IgA (secretions), IgM (1st response), IgE (allergies), IgD (B cell receptor).',
        'Hypersensitivity types: "ACID" = Type I Anaphylactic, Type II Cytotoxic, Type III Immune complex, Type IV Delayed.',
        'Primary = Slow; Secondary = Swift (memory cells are ready).',
        'Active immunity has memory cells; Passive immunity is temporary (borrowed antibodies).',
        'HIV target: CD4 helper T cells — AIDS = <200 CD4 cells/µL.',
        'Only 1 in 100 T cells survives thymic selection — extremely stringent quality control!'
      ],
      inlineQuestions: [
        {
          question: 'MHC-I molecules are found on all nucleated cells and display antigens for recognition by:',
          options: { A: 'Helper T cells (CD4)', B: 'B lymphocytes', C: 'Cytotoxic T cells (CD8)', D: 'Natural killer cells only' },
          answer: 'C',
          explanation: 'MHC-I displays endogenous antigens (viral or cancer proteins produced inside the cell) for recognition by cytotoxic T cells (CD8). MHC-II on APCs displays exogenous antigens for helper T cells (CD4).'
        },
        {
          question: 'Which immunoglobulin class makes up 75-85% of circulating antibodies and is the ONLY one that crosses the placenta?',
          options: { A: 'IgA', B: 'IgM', C: 'IgE', D: 'IgG' },
          answer: 'D',
          explanation: 'IgG is the most abundant circulating antibody (75-85%), the only Ig class that crosses the placenta to provide natural passive immunity to the fetus, and dominates during the secondary immune response.'
        },
        {
          question: 'Type I hypersensitivity (anaphylaxis) involves allergens cross-linking which antibody class on mast cells?',
          options: { A: 'IgG', B: 'IgM', C: 'IgE', D: 'IgA' },
          answer: 'C',
          explanation: 'In Type I hypersensitivity, allergens cross-link IgE antibodies already bound to mast cells and basophils, triggering massive histamine release → vasodilation, bronchiolar constriction, edema. Severe cases (anaphylactic shock) require emergency epinephrine.'
        }
      ],
      quiz: [
        { id: 'ly3-q1', question: 'MHC-I molecules are found on:', options: { A: 'Only antigen-presenting cells', B: 'All nucleated cells except RBCs', C: 'Only T lymphocytes', D: 'Only B lymphocytes' }, answer: 'B', explanation: 'MHC-I is on ALL nucleated cells except RBCs. MHC-II is only on APCs (macrophages, B cells, thymus cells).' },
        { id: 'ly3-q2', question: 'Helper T cells (CD4) recognize antigens presented on:', options: { A: 'MHC-I molecules', B: 'MHC-II molecules', C: 'Free-floating antigens', D: 'Complement proteins' }, answer: 'B', explanation: 'CD4 helper T cells recognize antigen fragments on MHC-II molecules on antigen-presenting cells.' },
        { id: 'ly3-q3', question: 'What percentage of T cells survive positive and negative selection in the thymus?', options: { A: '50%', B: '25%', C: '1%', D: '10%' }, answer: 'C', explanation: 'Only 1 in 100 T cells emerges immunocompetent — the rest are eliminated by clonal deletion or anergy.' },
        { id: 'ly3-q4', question: 'Cytotoxic T cells destroy target cells using all EXCEPT:', options: { A: 'Perforin', B: 'Lymphotoxin', C: 'Antibodies', D: 'Tumor necrosis factor' }, answer: 'C', explanation: 'Antibodies are produced by plasma cells (B cell lineage). Cytotoxic T cells use perforin, lymphotoxin, gamma-interferon, and TNF.' },
        { id: 'ly3-q5', question: 'The antibody class that constitutes 75-85% of circulating antibodies and can cross the placenta is:', options: { A: 'IgA', B: 'IgM', C: 'IgG', D: 'IgE' }, answer: 'C', explanation: 'IgG is the most abundant circulating antibody and the only class that crosses the placenta to the fetus.' },
        { id: 'ly3-q6', question: 'The first immunoglobulin produced during a primary immune response is:', options: { A: 'IgG', B: 'IgA', C: 'IgE', D: 'IgM' }, answer: 'D', explanation: 'IgM (pentamer) is the first antibody produced in a primary response; excellent at agglutination.' },
        { id: 'ly3-q7', question: 'IgE is primarily involved in:', options: { A: 'Crossing the placenta', B: 'Allergic reactions — triggering histamine release', C: 'Opsonization of bacteria', D: 'Activating cytotoxic T cells' }, answer: 'B', explanation: 'IgE on mast cells/basophils triggers histamine release when allergen binds — key player in Type I hypersensitivity/allergies.' },
        { id: 'ly3-q8', question: 'A vaccination provides:', options: { A: 'Natural active immunity', B: 'Artificial active immunity', C: 'Natural passive immunity', D: 'Artificial passive immunity' }, answer: 'B', explanation: 'Vaccination = artificial active immunity — your body produces its own antibodies and memory cells in response to the vaccine antigen.' },
        { id: 'ly3-q9', question: 'Type IV hypersensitivity is characterized by:', options: { A: 'Immediate IgE-mediated reaction', B: 'IgG/IgM cytotoxic lysis', C: 'Immune complex deposition', D: '12-72 hour delayed T cell-mediated response' }, answer: 'D', explanation: 'Type IV (delayed) takes 12-72 hours; involves APCs presenting antigen to helper T cells → Tc cell and macrophage activation. Examples: poison ivy, TB skin test.' },
        { id: 'ly3-q10', question: 'HIV primarily targets which cells?', options: { A: 'Cytotoxic T cells (CD8)', B: 'Helper T cells (CD4)', C: 'B lymphocytes', D: 'Natural killer cells' }, answer: 'B', explanation: 'HIV invades CD4 helper T cells, macrophages, and dendritic cells. AIDS is diagnosed when CD4 count falls below 200 cells/µL.' },
        { id: 'ly3-q11', question: 'In the secondary immune response:', options: { A: 'Response is slower than primary', B: 'Only IgM is produced', C: 'Memory cells rapidly proliferate → person may not get sick', D: 'No antibodies are produced' }, answer: 'C', explanation: 'Secondary response: thousands of memory cells rapidly proliferate → recognition and removal so fast the person may not even get sick.' },
        { id: 'ly3-q12', question: 'Plasma cells produce antibodies at approximately:', options: { A: '10 molecules/sec', B: '200 molecules/sec', C: '2000 molecules/sec', D: '20,000 molecules/sec' }, answer: 'C', explanation: 'Each plasma cell produces ~2000 antibody molecules per second for 4-5 days, and secretes only one kind of antibody.' },
        { id: 'ly3-q13', question: 'Systemic lupus erythematosus (SLE) is an example of which hypersensitivity type?', options: { A: 'Type I', B: 'Type II', C: 'Type III', D: 'Type IV' }, answer: 'C', explanation: 'SLE involves widespread antigen-antibody complexation (Type III immune complex hypersensitivity) causing intense inflammation.' },
        { id: 'ly3-q14', question: 'Which antibody class prevents pathogen adherence to epithelia and is found in saliva, tears, and breast milk?', options: { A: 'IgG', B: 'IgA', C: 'IgD', D: 'IgM' }, answer: 'B', explanation: 'IgA (dimer in secretions) is found in mucus, saliva, tears, milk, and intestinal secretions — prevents pathogen adherence.' },
        { id: 'ly3-q15', question: 'Autoimmune diseases result from:', options: { A: 'Excess antibody production against foreign antigens', B: 'Failure of self-tolerance leading to attack on body\'s own cells', C: 'Overactive NK cells', D: 'Too many memory cells' }, answer: 'B', explanation: 'Autoimmune diseases occur when self-tolerance fails — immune system attacks body\'s own cells via autoantibodies.' }
      ]
    }
  ],

  // ===== MODULE-LEVEL QUIZ =====
  quiz: [
    { id: 'ly-q1', question: 'The lymphatic system\'s three main functions are:', options: { A: 'Gas exchange, hormone transport, waste removal', B: 'Fluid recovery, immunity, lipid absorption', C: 'Blood production, pH regulation, heat distribution', D: 'Oxygen delivery, CO₂ removal, nutrient transport' }, answer: 'B', explanation: 'The lymphatic system recovers fluid, provides immunity via lymph node filtration, and absorbs lipids via lacteals.' },
    { id: 'ly-q2', question: 'The cisterna chyli is the origin of the:', options: { A: 'Right lymphatic duct', B: 'Thoracic duct', C: 'Spleen', D: 'Thymus' }, answer: 'B', explanation: 'The thoracic duct begins at the cisterna chyli (a prominent abdominal sac) and drains most of the body.' },
    { id: 'ly-q3', question: 'White pulp of the spleen contains:', options: { A: 'Sinuses filled with erythrocytes', B: 'Lymphocytes and macrophages surrounding splenic artery branches', C: 'Hassall\'s corpuscles', D: 'Germinal centers only' }, answer: 'B', explanation: 'White pulp consists of lymphocytes and macrophages surrounding small branches of the splenic artery (immune function). Red pulp has RBC-filled sinuses.' },
    { id: 'ly-q4', question: 'The complement system\'s membrane attack complex (MAC) causes:', options: { A: 'Fever', B: 'Opsonization', C: 'Cytolysis by forming a ring/pore in the enemy cell membrane', D: 'Chemotaxis' }, answer: 'C', explanation: 'MAC (C5b-C9) inserts into the plasma membrane of target cells, forming pores that cause cytolysis (cell bursting).' },
    { id: 'ly-q5', question: 'Negative selection of T cells in the thymus ensures that:', options: { A: 'Only the fastest-growing T cells survive', B: 'T cells that react to self-antigens are eliminated', C: 'B cells are produced', D: 'NK cells are activated' }, answer: 'B', explanation: 'Negative selection eliminates T cells that react to self-antigens (via clonal deletion or anergy), establishing self-tolerance.' },
    { id: 'ly-q6', question: 'Helper T cells are crucial because they:', options: { A: 'Directly kill cancer cells', B: 'Produce antibodies', C: 'Costimulate all other lymphocytes via cytokines, coordinating the entire immune response', D: 'Form the membrane attack complex' }, answer: 'C', explanation: 'Helper T cells (CD4) secrete IL-2 and other cytokines to costimulate T cells, B cells, and nonspecific mechanisms. They coordinate everything.' },
    { id: 'ly-q7', question: 'An antigen that can provoke an immune response only when attached to a body protein is called a:', options: { A: 'Hapten', B: 'Epitope', C: 'Cytokine', D: 'Complement' }, answer: 'A', explanation: 'A hapten is too small to trigger immunity alone but becomes antigenic when bound to a larger body protein (e.g., poison ivy).' },
    { id: 'ly-q8', question: 'In antibody-mediated immunity, antibodies are produced by:', options: { A: 'Helper T cells', B: 'Cytotoxic T cells', C: 'Plasma cells (differentiated B cells)', D: 'Macrophages' }, answer: 'C', explanation: 'Activated B cells differentiate into plasma cells that secrete antibodies at ~2000/sec.' },
    { id: 'ly-q9', question: 'A patient previously vaccinated against measles is exposed again. The rapid, strong response is due to:', options: { A: 'Innate immunity', B: 'Primary immune response', C: 'Immunological memory (secondary response)', D: 'Passive immunity from the vaccine' }, answer: 'C', explanation: 'Memory cells from vaccination enable a rapid, powerful secondary response — recognition is so fast the person may not get sick.' },
    { id: 'ly-q10', question: 'Type I hypersensitivity involves:', options: { A: 'IgG/IgM binding cell surface antigens', B: 'Immune complex deposition', C: 'IgE on mast cells triggering histamine release', D: 'Delayed T cell response' }, answer: 'C', explanation: 'Type I (acute): allergen crosslinks IgE on mast cells/basophils → histamine release → edema, congestion, hives. Severe form = anaphylaxis.' },
    { id: 'ly-q11', question: 'Which antibody class is found as a pentamer in plasma and is the first produced during a primary immune response?', options: { A: 'IgG', B: 'IgA', C: 'IgE', D: 'IgM' }, answer: 'D', explanation: 'IgM exists as a pentamer in plasma (monomer on B cell membrane). It\'s the first antibody class produced during primary response and is excellent at agglutination.' },
    { id: 'ly-q12', question: 'HIV uses which enzyme to convert its RNA genome into DNA?', options: { A: 'DNA polymerase', B: 'Reverse transcriptase', C: 'RNA polymerase', D: 'Helicase' }, answer: 'B', explanation: 'HIV is a retrovirus that uses reverse transcriptase to create DNA from its RNA genome, which then integrates into host cell DNA.' },
    { id: 'ly-q13', question: 'Natural passive immunity is exemplified by:', options: { A: 'Vaccination', B: 'Recovering from chickenpox', C: 'Fetus receiving maternal antibodies through the placenta', D: 'Injection of tetanus antiserum' }, answer: 'C', explanation: 'Natural passive immunity: fetus acquires antibodies from mother via placenta and breast milk. It\'s temporary (no memory cells formed).' },
    { id: 'ly-q14', question: 'Aging affects the immune system by:', options: { A: 'Increasing thymus size', B: 'Making T cells more responsive', C: 'Increasing susceptibility to infections and producing more autoantibodies', D: 'Accelerating antibody production' }, answer: 'C', explanation: 'With aging: thymus atrophies, T/B cells less responsive, more autoantibodies produced, increased susceptibility to infections and malignancies.' },
    { id: 'ly-q15', question: 'The endogenous antigen pathway involves display of foreign proteins on:', options: { A: 'MHC-II by APCs', B: 'MHC-I by infected body cells', C: 'IgG receptors', D: 'Complement receptors' }, answer: 'B', explanation: 'Endogenous antigens (viral/cancer proteins made inside cells) are displayed on MHC-I molecules, signaling cytotoxic T cells that the cell is infected.' }
  ]
};

export default lymphatic;
