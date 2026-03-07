const lymphatic = {
  id: 'lymphatic',
  title: 'Lymphatic & Immune System',
  source: '10 Lymphatic and Immune SystemsPDF.pdf',
  description: 'Lymphatic system functions, vessels, and organs; immune cells and tissues; nonspecific resistance including barriers, phagocytes, inflammation, and fever; specific immunity with T and B lymphocytes and cellular immunity.',
  icon: 'lymphatic',
  sections: [
    // ===== SECTION 1: Lymphatic & Immune Module 1 =====
    {
      id: 'lymphatic-s1',
      title: 'Lymphatic Functions, Vessels, Flow, Cells, Tissues & Organs',
      pageRange: 'Pages 1-10',
      learnItems: [
        {
          title: 'Lymphatic and Immune Systems Overview',
          body: 'The lymphatic and immune systems protect the body from infection and disease. The lymphatic system consists of organs, vessels, and lymph fluid (similar to interstitial fluid). Key organs: red bone marrow, thymus, spleen, lymph nodes, diffuse lymphatic tissue (tonsils, adenoids, Peyer\'s patches).'
        },
        {
          title: 'Functions of the Lymphatic System',
          body: 'Immunity: filters fluids from capillary beds through lymph nodes where immune cells respond to foreign cells/chemicals. Lipid absorption: lacteals in small intestine absorb dietary lipids. Fluid recovery: absorbs plasma proteins and fluid (2-4 L/day) from tissues and returns it to bloodstream; interference causes severe edema.'
        },
        {
          title: 'Lymph and Lymphatic Capillaries',
          body: 'Lymph: clear, colorless fluid similar to plasma but with much less protein. Lymphatic capillaries: closed at one end, tethered by protein filaments; endothelial cells loosely overlap to form valve-like flaps (open with high interstitial pressure, close with low pressure), allowing bacteria/cells to enter but not exit. Found throughout body except avascular tissues (cartilage, epidermis, cornea); in GI tract called lacteals (contain chyle).'
        },
        {
          title: 'Lymphatic Vessels',
          body: 'Larger vessels have three layers: tunica interna (endothelium + valves), tunica media (elastic fibers + smooth muscle), tunica externa (thin outer layer).'
        },
        {
          title: 'Route of Lymph Flow',
          body: 'Lymphatic capillaries -> collecting vessels (pass through lymph nodes) -> lymphatic trunks -> collecting ducts. Right lymphatic duct: drains right arm, right side of head/thorax, empties into right subclavian vein. Thoracic duct: larger/longer, begins as cisterna chyli (abdominal sac), drains below diaphragm + left arm/head/neck/thorax, empties into left subclavian vein.'
        },
        {
          title: 'Mechanisms of Lymph Flow',
          body: 'Low pressure/speed; moved by rhythmic contractions of lymphatic vessels (stretching stimulates contraction), skeletal muscle pump, thoracic pump (abdominal to thoracic flow), valves preventing backflow, and rapid bloodstream suction in subclavian veins. Exercise significantly increases lymphatic return.'
        },
        {
          title: 'Lymphatic Cells',
          body: 'T lymphocytes: mature in thymus. B lymphocytes: activation leads to plasma cells producing antibodies. Antigen-presenting cells (APCs): macrophages (from monocytes), dendritic cells (epidermis/mucous membranes/lymph organs), reticular cells (stroma of lymph organs).'
        },
        {
          title: 'Lymphatic Tissue',
          body: 'Diffuse lymphatic tissue: lymphocytes in mucous membranes/CT of organs; mucosa-associated lymphatic tissue (MALT) prevalent in exterior passages. Lymphatic nodules: dense oval lymphocyte masses that congregate in response to pathogens; Peyer patches are more permanent clusters at small/large intestine junction.'
        },
        {
          title: 'Lymphatic Organs Overview',
          body: 'Encapsulated with CT capsules at defined sites: lymph nodes, tonsils, thymus, spleen. Lymph nodes: in cervical/axillary/inguinal (surface) and thoracic/abdominal/pelvic (deep); scattered near mammary glands, axillae, groin. Tonsils: guard pharynx entrance. Thymus: between sternum and aortic arch. Spleen: inferior to diaphragm, dorsolateral to stomach.'
        },
        {
          title: 'Lymph Nodes Structure and Function',
          body: 'Bean-shaped, up to 1 inch long, along lymphatic vessels. Stroma: capsule, trabeculae, reticular fibers. Parenchyma: cortex (lymphatic nodules with germinal centers containing dendritic cells, APCs, macrophages; B cells become plasma cells) and medulla (B cells/plasma cells in medullary cords). One-way flow: afferent vessels in, sinuses to efferent vessels out at hilus; only nodes filter lymph.'
        },
        {
          title: 'Cancer Metastasis via Lymphatics',
          body: 'Malignant tumors spread via lymph/blood; secondary sites predictable by lymph flow direction from primary site. Cancerous nodes: firm, enlarged, nontender; infected nodes: tender, not firm.'
        }
      ],
      keyTerms: [
        { term: 'Lymph', definition: 'Clear, colorless fluid similar to plasma but with much less protein; flows through lymphatic vessels.' },
        { term: 'Lacteals', definition: 'Lymphatic capillaries in GI tract that absorb dietary lipids and contain chyle.' },
        { term: 'MALT', definition: 'Mucosa-associated lymphatic tissue; diffuse lymphatic tissue prevalent in passages open to the exterior.' },
        { term: 'Peyer Patches', definition: 'Permanent lymphatic nodule clusters at the small/large intestine junction.' },
        { term: 'T Lymphocytes', definition: 'Lymphocytes that mature in the thymus; involved in cell-mediated immunity.' },
        { term: 'B Lymphocytes', definition: 'Lymphocytes that differentiate into antibody-producing plasma cells.' },
        { term: 'Antigen-Presenting Cells (APCs)', definition: 'Macrophages, dendritic cells, and reticular cells that present antigens to lymphocytes.' },
        { term: 'Cisterna Chyli', definition: 'Abdominal sac where the thoracic duct begins; collects lymph from below the diaphragm.' },
        { term: 'Afferent Vessels', definition: 'Lymphatic vessels carrying lymph into a lymph node.' },
        { term: 'Efferent Vessels', definition: 'Lymphatic vessels carrying lymph out of a lymph node at the hilus.' },
        { term: 'Germinal Centers', definition: 'Areas in lymph node cortex containing dendritic cells, APCs, macrophages; site of B cell proliferation.' },
        { term: 'Metastasis', definition: 'Spread of malignant tumor cells via lymph or blood to establish secondary tumors at new sites.' }
      ],
      memoryAids: [
        'Lymphatic functions: "FIL" = Fluid recovery, Immunity, Lipid absorption.',
        'Lymph flow route: "Cap-Col-Trunk-Duct" = Capillaries -> Collecting vessels -> Trunks -> Ducts.',
        'Lymph node flow is one-way: "A before E" = Afferent in, Efferent out (at hilus).',
        'Cancerous nodes are "FEN" = Firm, Enlarged, Nontender; Infected nodes are "TNF" = Tender, Not Firm.'
      ],
      inlineQuestions: [
        {
          question: 'The lymphatic system\'s primary role in immunity is to:',
          options: { A: 'Produce RBCs', B: 'Filter capillary bed fluids through lymph nodes for immune response', C: 'Absorb water only', D: 'Store fat in adipocytes' },
          answer: 'B',
          explanation: 'The lymphatic system\'s immunity function filters fluids from capillary beds through lymph nodes where immune cells respond to foreign cells and chemicals.'
        },
        {
          question: 'Lymphatic capillaries are absent in:',
          options: { A: 'Muscle tissue', B: 'Avascular tissues like cartilage, epidermis, cornea', C: 'Liver', D: 'Intestines' },
          answer: 'B',
          explanation: 'Lymphatic capillaries are found throughout the body except in avascular tissues such as cartilage, epidermis, and cornea.'
        },
        {
          question: 'In lymph nodes, the cortex contains:',
          options: { A: 'Medullary cords', B: 'Lymphatic nodules with germinal centers and B cell proliferation', C: 'Red pulp', D: 'Hassall\'s corpuscles' },
          answer: 'B',
          explanation: 'The cortex of lymph nodes contains lymphatic nodules with germinal centers where dendritic cells, APCs, and macrophages reside and B cells proliferate into plasma cells.'
        }
      ],
      quiz: [
        {
          question: 'Daily fluid recovery by the lymphatic system is about:',
          options: { A: '0.5-1 L', B: '2-4 L', C: '5-6 L', D: '10 L' },
          answer: 'B',
          explanation: 'The lymphatic system absorbs plasma proteins and fluid (2-4 L/day) from tissues and returns it to the bloodstream.'
        },
        {
          question: 'Lacteals in the small intestine specialize in absorbing:',
          options: { A: 'Glucose', B: 'Dietary lipids', C: 'Amino acids', D: 'Vitamins' },
          answer: 'B',
          explanation: 'Lacteals in the small intestine are specialized for absorbing dietary lipids.'
        },
        {
          question: 'Lymph is most similar to:',
          options: { A: 'Blood plasma but with much less protein', B: 'Serum', C: 'Interstitial fluid', D: 'CSF' },
          answer: 'A',
          explanation: 'Lymph is a clear, colorless fluid similar to plasma but with much less protein.'
        },
        {
          question: 'Anchoring filaments in lymphatic capillaries mainly:',
          options: { A: 'Prevent collapse under external pressure', B: 'Pump lymph', C: 'Produce antibodies', D: 'Filter bacteria' },
          answer: 'A',
          explanation: 'Anchoring filaments tether lymphatic capillary endothelial cells, preventing collapse under external pressure.'
        },
        {
          question: 'Overlapping endothelial cells in lymphatic capillaries form:',
          options: { A: 'Permanent openings', B: 'Valve-like flaps that open with high interstitial pressure', C: 'Smooth muscle layers', D: 'Fenestrations' },
          answer: 'B',
          explanation: 'Endothelial cells loosely overlap to form valve-like flaps that open with high interstitial pressure and close with low pressure, allowing bacteria/cells to enter but not exit.'
        },
        {
          question: 'Larger lymphatic vessels resemble veins with:',
          options: { A: 'No valves', B: 'Endothelium, valves, elastic fibers/smooth muscle, thin externa', C: 'Thick tunica media only', D: 'No tunica interna' },
          answer: 'B',
          explanation: 'Larger lymphatic vessels have three layers: tunica interna (endothelium + valves), tunica media (elastic fibers + smooth muscle), and tunica externa (thin outer layer).'
        },
        {
          question: 'The thoracic duct drains all of the following EXCEPT:',
          options: { A: 'Below diaphragm', B: 'Left arm/head/neck/thorax', C: 'Right arm', D: 'Cisterna chyli' },
          answer: 'C',
          explanation: 'The right arm is drained by the right lymphatic duct, not the thoracic duct. The thoracic duct drains below the diaphragm plus left arm, head, neck, and thorax.'
        },
        {
          question: 'The right lymphatic duct empties into the:',
          options: { A: 'Left subclavian vein', B: 'Right subclavian vein', C: 'Cisterna chyli', D: 'Thoracic duct' },
          answer: 'B',
          explanation: 'The right lymphatic duct drains the right arm, right side of head/thorax, and empties into the right subclavian vein.'
        },
        {
          question: 'Which mechanism does NOT aid lymph flow?',
          options: { A: 'Rhythmic contractions of lymphatic vessels', B: 'Skeletal muscle pump', C: 'Arterial pulsations', D: 'Thoracic pump' },
          answer: 'C',
          explanation: 'Arterial pulsations do not aid lymph flow. Lymph is moved by rhythmic vessel contractions, skeletal muscle pump, thoracic pump, valves, and subclavian vein suction.'
        },
        {
          question: 'T lymphocytes mature in the:',
          options: { A: 'Spleen', B: 'Thymus', C: 'Bone marrow', D: 'Lymph nodes' },
          answer: 'B',
          explanation: 'T lymphocytes mature in the thymus gland.'
        },
        {
          question: 'B lymphocytes differentiate into:',
          options: { A: 'Macrophages', B: 'Plasma cells that produce antibodies', C: 'NK cells', D: 'Dendritic cells' },
          answer: 'B',
          explanation: 'B lymphocyte activation leads to plasma cells that produce antibodies.'
        },
        {
          question: 'Which cells are antigen-presenting cells (APCs)?',
          options: { A: 'RBCs', B: 'Macrophages, dendritic cells, reticular cells', C: 'Platelets', D: 'Erythrocytes' },
          answer: 'B',
          explanation: 'APCs include macrophages (from monocytes), dendritic cells (epidermis/mucous membranes/lymph organs), and reticular cells (stroma of lymph organs).'
        },
        {
          question: 'Mucosa-associated lymphatic tissue (MALT) is found in:',
          options: { A: 'Bone marrow only', B: 'Passages open to the exterior', C: 'Avascular tissues', D: 'Large arteries' },
          answer: 'B',
          explanation: 'MALT is diffuse lymphatic tissue prevalent in passages that are open to the exterior.'
        },
        {
          question: 'Peyer patches are:',
          options: { A: 'In the thymus', B: 'Permanent lymphatic nodule clusters at small/large intestine junction', C: 'In the spleen\'s red pulp', D: 'Tonsils' },
          answer: 'B',
          explanation: 'Peyer patches are more permanent lymphatic nodule clusters located at the small/large intestine junction.'
        },
        {
          question: 'Lymph nodes are concentrated near:',
          options: { A: 'Heart and lungs only', B: 'Mammary glands, axillae, groin', C: 'Kidneys', D: 'Liver only' },
          answer: 'B',
          explanation: 'Lymph nodes are scattered near mammary glands, axillae, and groin, as well as in cervical, axillary, inguinal, thoracic, abdominal, and pelvic regions.'
        },
        {
          question: 'Cancerous lymph nodes are typically:',
          options: { A: 'Tender and small', B: 'Firm, enlarged, nontender', C: 'Filled with pus', D: 'Absent' },
          answer: 'B',
          explanation: 'Cancerous nodes are firm, enlarged, and nontender. By contrast, infected nodes are tender and not firm.'
        },
        {
          question: 'The spleen is located:',
          options: { A: 'Between sternum and aortic arch', B: 'Inferior to diaphragm, dorsolateral to stomach', C: 'In the groin', D: 'In the neck' },
          answer: 'B',
          explanation: 'The spleen is located inferior to the diaphragm, dorsolateral to the stomach.'
        },
        {
          question: 'Interference with lymphatic drainage primarily causes:',
          options: { A: 'Hypertension', B: 'Severe edema', C: 'Anemia', D: 'High BP' },
          answer: 'B',
          explanation: 'Interference with lymphatic fluid recovery causes severe edema because the system normally absorbs 2-4 L/day of excess fluid from tissues.'
        },
        {
          question: 'Lymphatic capillaries allow entry of bacteria due to:',
          options: { A: 'Thick walls', B: 'Loosely overlapped endothelial cells forming valve-like flaps', C: 'Smooth muscle pumps', D: 'High pressure' },
          answer: 'B',
          explanation: 'Endothelial cells loosely overlap to form valve-like flaps that open with high interstitial pressure, allowing bacteria and cells to enter but not exit.'
        },
        {
          question: 'Which duct receives lymph from the cisterna chyli?',
          options: { A: 'Right lymphatic duct', B: 'Thoracic duct', C: 'Jugular trunk', D: 'Bronchomediastinal trunk' },
          answer: 'B',
          explanation: 'The thoracic duct begins as the cisterna chyli (abdominal sac) and is the larger/longer collecting duct.'
        },
        {
          question: 'Activation of B lymphocytes leads to:',
          options: { A: 'T cell maturation', B: 'Plasma cells producing antibodies', C: 'Macrophage differentiation', D: 'RBC production' },
          answer: 'B',
          explanation: 'B lymphocyte activation leads to differentiation into plasma cells that produce antibodies.'
        },
        {
          question: 'Lymph node flow is one-way from:',
          options: { A: 'Efferent to afferent vessels', B: 'Afferent vessels through sinuses to efferent vessels at hilus', C: 'Directly to veins', D: 'Capillaries to arteries' },
          answer: 'B',
          explanation: 'Lymph node flow is one-way: afferent vessels bring lymph in, it passes through sinuses, and exits via efferent vessels at the hilus.'
        }
      ],
      flashcards: [
        { front: 'What are the key organs of the lymphatic system?', back: 'Red bone marrow, thymus, spleen, lymph nodes, and diffuse lymphatic tissue (tonsils, adenoids, Peyer\'s patches).' },
        { front: 'What are the three functions of the lymphatic system?', back: 'Immunity (lymph node filtering), lipid absorption (lacteals), and fluid recovery (2-4 L/day returned to blood).' },
        { front: 'What is lymph?', back: 'Clear, colorless fluid similar to plasma but with much less protein.' },
        { front: 'How do lymphatic capillary valve-like flaps work?', back: 'Endothelial cells loosely overlap; flaps open with high interstitial pressure (allowing entry of bacteria/cells) and close with low pressure (preventing exit).' },
        { front: 'What is the route of lymph flow?', back: 'Lymphatic capillaries -> collecting vessels (through lymph nodes) -> lymphatic trunks -> collecting ducts (right lymphatic duct or thoracic duct).' },
        { front: 'What mechanisms drive lymph flow?', back: 'Rhythmic contractions of lymphatic vessels, skeletal muscle pump, thoracic pump, valves preventing backflow, and subclavian vein suction.' },
        { front: 'Name the three types of antigen-presenting cells (APCs).', back: 'Macrophages (from monocytes), dendritic cells (epidermis/mucous membranes/lymph organs), and reticular cells (stroma of lymph organs).' },
        { front: 'What is MALT?', back: 'Mucosa-associated lymphatic tissue; diffuse lymphatic tissue prevalent in passages open to the exterior.' },
        { front: 'Describe lymph node structure.', back: 'Bean-shaped; stroma (capsule, trabeculae, reticular fibers); parenchyma with cortex (germinal centers, B cell proliferation) and medulla (B cells/plasma cells in medullary cords). One-way flow: afferent in, efferent out at hilus.' },
        { front: 'How do cancerous lymph nodes differ from infected nodes?', back: 'Cancerous nodes: firm, enlarged, nontender. Infected nodes: tender, not firm.' }
      ]
    },

    // ===== SECTION 2: Lymphatic & Immune Module 2 =====
    {
      id: 'lymphatic-s2',
      title: 'Lymph Nodes, Organs, Immunology Basics & Nonspecific Resistance',
      pageRange: 'Pages 11-20',
      learnItems: [
        {
          title: 'Lymph Nodes - Flow and Structure',
          body: 'Flow is one-way: afferent vessels -> sinuses -> efferent vessels exiting at hilus; only lymph nodes filter lymph. Cortex: lymphatic nodules with germinal centers (dendritic cells, APCs, macrophages); B cells proliferate into antibody-secreting plasma cells. Medulla: B cells and plasma cells in medullary cords.'
        },
        {
          title: 'Cancer Metastasis and Lymph Nodes',
          body: 'Characteristic of malignant tumors; cancer cells travel via lymph or blood to establish new tumors at secondary sites, predictable by lymph flow direction from primary site. Cancerous nodes: firm, enlarged, nontender; infected nodes: tender, not firm.'
        },
        {
          title: 'Tonsils Location and Structure',
          body: 'Palatine tonsils: pair at posterior margin of oral cavity (most often infected). Lingual tonsils: pair at root of tongue. Pharyngeal tonsil (adenoid): single on pharyngeal wall. Tonsils covered by epithelium; pathogens enter crypts and meet lymphocytes.'
        },
        {
          title: 'Thymus Gland Structure',
          body: 'Large in infants (~70 g), atrophied in adults (~3 g); bilobed in mediastinum with capsule/trabeculae dividing into lobules. Cortex: tightly packed lymphocytes/macrophages. Medulla: reticular epithelial cells produce thymic hormones; contains Hassall\'s corpuscles.'
        },
        {
          title: 'Spleen Structure and Functions',
          body: 'Parenchyma: red pulp (erythrocyte-filled sinuses), white pulp (lymphocytes/macrophages around splenic artery branches). Functions: fetal blood production, blood reservoir, RBC disposal, immune reactions (filters blood, detects antigens).'
        },
        {
          title: 'Immunology Overview',
          body: 'Resistance wards off disease; susceptibility is lack of resistance. Nonspecific resistance: general mechanisms against wide range of pathogens (no specific response). Specific resistance/immunity: fights specific pathogens via cell-mediated (T cells) or antibody-mediated (B cells).'
        },
        {
          title: 'Nonspecific Resistance - Skin & Mucous Membranes',
          body: 'Mechanical: keratinized epidermis (shedding removes microbes), mucous (traps microbes), cilia/mucus (move to throat), washing (tears, urine, saliva). Chemical: sebum (inhibits bacteria/fungi), perspiration lysozymes (break down bacteria), acidic pH (gastric juice, vaginal secretions destroys bacteria).'
        },
        {
          title: 'Leukocytes in Cutaneous Defenses',
          body: 'Neutrophils: phagocytize bacteria, create killing zone via degranulation (lysosomes discharge) and respiratory burst (O2-, H2O2, HClO). Eosinophils: phagocytize antigen-antibody complexes/allergens/inflammatory chemicals; antiparasitic effects via enzyme release.'
        },
        {
          title: 'Internal Nonspecific Defenses - Antimicrobial Proteins',
          body: 'Interferons: produced by virus-infected lymphocytes/macrophages; diffuse to neighbors inducing antiviral proteins; activate NK cells/macrophages; destroy infected/cancer cells. Complement: inactive plasma proteins activated by pathogens to enhance inflammation/phagocytosis. Transferrins: iron-binding proteins that inhibit bacterial growth by limiting available iron.'
        },
        {
          title: 'Natural Killer (NK) Cells & Phagocytes',
          body: 'NK cells: kill microbes/tumor cells displaying abnormal MHC; found in blood/spleen/lymph nodes/marrow. Phagocytes: neutrophils/macrophages ingest microbes/particles; fixed macrophages in tissues (histiocytes/skin, Kupffer cells/liver, alveolar macrophages/lungs, microglia/brain); wandering macrophages in most tissues.'
        },
        {
          title: 'Phagocytosis Steps',
          body: 'Chemotaxis: attraction to chemicals from damaged tissues/complement/microbial products. Adherence: attachment to phagocyte membrane. Ingestion: engulf by pseudopods forming a phagosome. Digestion/killing: merge with lysosome (enzymes), lethal oxidants; exocytosis of residual body.'
        },
        {
          title: 'Inflammation - Signs and Mobilization',
          body: 'Defensive response to injury limiting pathogen spread, destroying them, removing debris, repairing tissue; -itis suffix indicates inflammation. Cardinal signs: redness (hyperemia), swelling (edema from increased permeability), heat (hyperemia), pain (bradykinin/prostaglandins, nerve pressure). Damaged cells/basophils/mast cells secrete bradykinin/histamine/leukotrienes causing vasodilation (hyperemia: redness/heat, increased metabolism/healing), increased capillary permeability (allows WBCs/antibodies/complement/fibrinogen). Fibrinogen clots to trap bacteria/scaffold repair; heparin prevents clotting in injury site.'
        },
        {
          title: 'Inflammation - Leukocyte Deployment',
          body: 'Margination: leukocytes adhere to vessel walls via cell adhesion molecules. Diapedesis: leukocytes squeeze between endothelial cells into tissues. Chemotaxis attracts leukocytes (neutrophils first); phagocytosis + respiratory burst + cytokines recruit macrophages/T cells.'
        },
        {
          title: 'Inflammation - Cleanup and Repair',
          body: 'Monocytes become macrophages for cleanup (arrive 8-12 hours). Edema decreases venous flow but increases lymphatic removal of bacteria/debris. Pus: tissue fluid, debris, dying neutrophils, microbes. PDGF from platelets/endothelium stimulates fibroblasts/collagen for repair; hyperemia provides materials/heat. Pain limits part use for healing.'
        },
        {
          title: 'Abscesses and Ulcers',
          body: 'Abscess: pus accumulation in confined space (pimples/boils). Ulcer: open sore; common in legs of diabetics with poor circulation (stasis ulcers from poor O2/nutrients).'
        }
      ],
      keyTerms: [
        { term: 'Palatine Tonsils', definition: 'Pair at posterior margin of oral cavity; the most commonly infected tonsils.' },
        { term: 'Pharyngeal Tonsil (Adenoid)', definition: 'Single tonsil on pharyngeal wall.' },
        { term: 'Hassall\'s Corpuscles', definition: 'Structures in thymus medulla associated with reticular epithelial cells that produce thymic hormones.' },
        { term: 'Red Pulp', definition: 'Spleen tissue containing erythrocyte-filled sinuses.' },
        { term: 'White Pulp', definition: 'Spleen tissue with lymphocytes and macrophages around splenic artery branches.' },
        { term: 'Nonspecific Resistance', definition: 'General defense mechanisms against a wide range of pathogens without specific targeting.' },
        { term: 'Specific Immunity', definition: 'Defense against specific pathogens via cell-mediated (T cells) or antibody-mediated (B cells) responses.' },
        { term: 'Respiratory Burst', definition: 'Neutrophil killing mechanism producing lethal oxidants (O2-, H2O2, HClO).' },
        { term: 'Interferons', definition: 'Proteins from virus-infected cells that induce antiviral proteins in neighbors and activate NK cells/macrophages.' },
        { term: 'Complement', definition: 'Inactive plasma proteins activated by pathogens to enhance inflammation, phagocytosis, and cytolysis.' },
        { term: 'Transferrins', definition: 'Iron-binding proteins that inhibit bacterial growth by limiting available iron.' },
        { term: 'Chemotaxis', definition: 'Attraction of phagocytes to chemicals from damaged tissues, complement, or microbial products.' },
        { term: 'Diapedesis', definition: 'Leukocytes squeezing between endothelial cells to exit blood vessels into tissues.' },
        { term: 'Margination', definition: 'Leukocytes adhering to vessel walls via cell adhesion molecules during inflammation.' },
        { term: 'PDGF', definition: 'Platelet-derived growth factor; stimulates fibroblasts to multiply and synthesize collagen for tissue repair.' },
        { term: 'Abscess', definition: 'Accumulation of pus in a confined space (e.g., pimples, boils).' }
      ],
      memoryAids: [
        'Cardinal signs of inflammation: "RSHP" = Redness, Swelling, Heat, Pain.',
        'Phagocytosis steps: "CAID" = Chemotaxis, Adherence, Ingestion, Digestion/killing.',
        'Tonsil types by location: "PPL" = Pharyngeal (pharynx wall), Palatine (oral cavity), Lingual (tongue root).',
        'Spleen tissues: "Red = RBCs, White = WBCs" - red pulp has erythrocyte sinuses, white pulp has lymphocytes.'
      ],
      inlineQuestions: [
        {
          question: 'The most commonly infected tonsils are:',
          options: { A: 'Lingual', B: 'Pharyngeal', C: 'Palatine', D: 'Appendix' },
          answer: 'C',
          explanation: 'Palatine tonsils, located as a pair at the posterior margin of the oral cavity, are the most often infected tonsils.'
        },
        {
          question: 'Cardinal signs of inflammation include all EXCEPT:',
          options: { A: 'Redness (hyperemia)', B: 'Swelling (edema)', C: 'Decreased metabolism', D: 'Pain' },
          answer: 'C',
          explanation: 'The cardinal signs are redness, swelling, heat, and pain. Inflammation actually increases metabolism (via hyperemia), not decreases it.'
        },
        {
          question: 'Diapedesis refers to:',
          options: { A: 'Leukocytes squeezing between endothelial cells into tissues', B: 'Clot formation', C: 'Fever onset', D: 'Antibody binding' },
          answer: 'A',
          explanation: 'Diapedesis is the process by which leukocytes squeeze between endothelial cells to exit blood vessels and enter tissues during inflammation.'
        }
      ],
      quiz: [
        {
          question: 'Lymph node parenchyma is divided into:',
          options: { A: 'Red and white pulp', B: 'Cortex and medulla', C: 'Lobules and sinuses', D: 'Germinal centers only' },
          answer: 'B',
          explanation: 'Lymph node parenchyma is divided into cortex (with germinal centers and B cell proliferation) and medulla (B cells/plasma cells in medullary cords). Red and white pulp are features of the spleen.'
        },
        {
          question: 'In lymph nodes, germinal centers in the cortex contain:',
          options: { A: 'Only plasma cells', B: 'Dendritic cells, APCs, macrophages; site of B cell proliferation', C: 'RBCs', D: 'Hassall\'s corpuscles' },
          answer: 'B',
          explanation: 'Germinal centers contain dendritic cells, APCs, and macrophages, and are the site where B cells proliferate into antibody-secreting plasma cells.'
        },
        {
          question: 'Cancerous lymph nodes are typically:',
          options: { A: 'Tender and soft', B: 'Firm, enlarged, nontender', C: 'Filled with pus', D: 'Smaller than normal' },
          answer: 'B',
          explanation: 'Cancerous nodes are firm, enlarged, and nontender. Infected nodes, by contrast, are tender and not firm.'
        },
        {
          question: 'The thymus medulla contains:',
          options: { A: 'Tightly packed lymphocytes', B: 'Reticular epithelial cells producing thymic hormones and Hassall\'s corpuscles', C: 'Red pulp', D: 'Peyer patches' },
          answer: 'B',
          explanation: 'The thymus medulla has reticular epithelial cells that produce thymic hormones and contains Hassall\'s corpuscles. The cortex has tightly packed lymphocytes.'
        },
        {
          question: 'Spleen white pulp consists mainly of:',
          options: { A: 'Erythrocytes', B: 'Lymphocytes and macrophages around splenic artery branches', C: 'Plasma proteins', D: 'Lacteals' },
          answer: 'B',
          explanation: 'White pulp contains lymphocytes and macrophages arranged around splenic artery branches.'
        },
        {
          question: 'Specific immunity includes:',
          options: { A: 'Skin barriers only', B: 'Cell-mediated (T cells) and antibody-mediated (B cells)', C: 'Fever only', D: 'All phagocytosis' },
          answer: 'B',
          explanation: 'Specific immunity fights specific pathogens via cell-mediated immunity (T cells) or antibody-mediated immunity (B cells).'
        },
        {
          question: 'Keratinized epidermis provides mechanical protection by:',
          options: { A: 'Producing antibodies', B: 'Closely packed cells; shedding removes microbes', C: 'Acid secretion', D: 'Cilia movement' },
          answer: 'B',
          explanation: 'Keratinized epidermis has closely packed cells and shedding removes microbes as a mechanical defense.'
        },
        {
          question: 'Lysozymes in perspiration:',
          options: { A: 'Inhibit viruses', B: 'Break down bacterial cell walls', C: 'Promote clotting', D: 'Increase pH' },
          answer: 'B',
          explanation: 'Perspiration lysozymes break down bacterial cell walls as part of the chemical defenses of the skin.'
        },
        {
          question: 'Neutrophils kill bacteria via:',
          options: { A: 'Phagocytosis only', B: 'Degranulation and respiratory burst (O2-, H2O2, HClO)', C: 'Antibody production', D: 'Fever induction' },
          answer: 'B',
          explanation: 'Neutrophils phagocytize bacteria and create a killing zone via degranulation (lysosome discharge) and respiratory burst producing lethal oxidants.'
        },
        {
          question: 'Interferons are produced by:',
          options: { A: 'Virus-infected lymphocytes/macrophages', B: 'RBCs', C: 'Platelets', D: 'Epithelial cells only' },
          answer: 'A',
          explanation: 'Interferons are produced by virus-infected lymphocytes and macrophages; they diffuse to neighbors inducing antiviral proteins.'
        },
        {
          question: 'Complement proteins enhance:',
          options: { A: 'RBC production', B: 'Inflammation, phagocytosis, cytolysis', C: 'Lipid absorption', D: 'Fluid recovery' },
          answer: 'B',
          explanation: 'Complement proteins are inactive plasma proteins activated by pathogens to enhance inflammation, phagocytosis, and cytolysis.'
        },
        {
          question: 'Fixed macrophages include:',
          options: { A: 'Only wandering cells', B: 'Kupffer cells in liver, alveolar macrophages in lungs', C: 'B cells', D: 'T cells' },
          answer: 'B',
          explanation: 'Fixed macrophages include histiocytes (skin), Kupffer cells (liver), alveolar macrophages (lungs), and microglia (brain).'
        },
        {
          question: 'The first step in phagocytosis is:',
          options: { A: 'Digestion', B: 'Chemotaxis (attraction to chemicals)', C: 'Exocytosis', D: 'Adherence only' },
          answer: 'B',
          explanation: 'Chemotaxis is the first step - attraction of phagocytes to chemicals from damaged tissues, complement, or microbial products.'
        },
        {
          question: 'Hyperemia during inflammation causes:',
          options: { A: 'Cooling', B: 'Redness, heat, increased metabolism/healing', C: 'Decreased permeability', D: 'Clot dissolution' },
          answer: 'B',
          explanation: 'Hyperemia (increased blood flow from vasodilation) causes redness, heat, and increased metabolism/healing at the inflammation site.'
        },
        {
          question: 'Pus consists mainly of:',
          options: { A: 'Healthy WBCs', B: 'Tissue fluid, debris, dying neutrophils, microbes', C: 'Plasma proteins', D: 'RBCs' },
          answer: 'B',
          explanation: 'Pus is a mixture of tissue fluid, debris, dying neutrophils, and microbes.'
        },
        {
          question: 'PDGF in inflammation stimulates:',
          options: { A: 'Bacteria growth', B: 'Fibroblasts to multiply and synthesize collagen', C: 'Virus replication', D: 'Edema reduction' },
          answer: 'B',
          explanation: 'PDGF (platelet-derived growth factor) from platelets/endothelium stimulates fibroblasts to multiply and synthesize collagen for tissue repair.'
        },
        {
          question: 'An abscess is:',
          options: { A: 'An open sore', B: 'Accumulation of pus in a confined space (e.g., boils)', C: 'Reduced blood flow', D: 'Lymph node enlargement' },
          answer: 'B',
          explanation: 'An abscess is pus accumulation in a confined space, such as pimples or boils. An open sore is an ulcer.'
        },
        {
          question: 'Which inflammatory chemical stimulates vasodilation and permeability?',
          options: { A: 'Insulin', B: 'Histamine', C: 'EPO', D: 'Thyroxine' },
          answer: 'B',
          explanation: 'Histamine (along with bradykinin and leukotrienes) is secreted by damaged cells, basophils, and mast cells to cause vasodilation and increased capillary permeability.'
        },
        {
          question: 'The spleen\'s red pulp contains:',
          options: { A: 'Lymphocytes only', B: 'Erythrocyte-filled sinuses', C: 'Thymic hormones', D: 'Lacteals' },
          answer: 'B',
          explanation: 'Red pulp consists of erythrocyte-filled sinuses, while white pulp contains lymphocytes and macrophages.'
        },
        {
          question: 'Nonspecific resistance differs from immunity by:',
          options: { A: 'Being specific to one pathogen', B: 'Being general against wide pathogens, lacking specific responses', C: 'Producing antibodies only', D: 'Involving T cells exclusively' },
          answer: 'B',
          explanation: 'Nonspecific resistance provides general mechanisms against a wide range of pathogens without specific targeting, unlike specific immunity which targets individual pathogens.'
        },
        {
          question: 'Eosinophils are particularly important against:',
          options: { A: 'Viruses', B: 'Parasites', C: 'Bacteria', D: 'Fungi only' },
          answer: 'B',
          explanation: 'Eosinophils have antiparasitic effects via enzyme release and also phagocytize antigen-antibody complexes, allergens, and inflammatory chemicals.'
        },
        {
          question: 'Transferrins inhibit bacterial growth by:',
          options: { A: 'Binding iron and limiting availability', B: 'Producing heat', C: 'Enhancing clotting', D: 'Increasing pH' },
          answer: 'A',
          explanation: 'Transferrins are iron-binding proteins that inhibit bacterial growth by reducing the amount of available iron that bacteria need to grow.'
        }
      ],
      flashcards: [
        { front: 'What are the three types of tonsils and their locations?', back: 'Palatine (pair at posterior oral cavity - most often infected), lingual (pair at root of tongue), pharyngeal/adenoid (single on pharyngeal wall).' },
        { front: 'Describe the thymus structure in infants vs. adults.', back: 'Large in infants (~70 g), atrophied in adults (~3 g). Bilobed in mediastinum; cortex has packed lymphocytes/macrophages; medulla has reticular epithelial cells producing thymic hormones and Hassall\'s corpuscles.' },
        { front: 'What are the functions of the spleen?', back: 'Fetal blood production, blood reservoir, RBC disposal, and immune reactions (filters blood, detects antigens).' },
        { front: 'What is the difference between nonspecific resistance and specific immunity?', back: 'Nonspecific: general mechanisms against wide range of pathogens (no specific response). Specific: targets particular pathogens via cell-mediated (T cells) or antibody-mediated (B cells) responses.' },
        { front: 'Name the mechanical and chemical skin defenses.', back: 'Mechanical: keratinized epidermis/shedding, mucous traps, cilia movement, washing (tears/urine/saliva). Chemical: sebum, lysozymes in perspiration, acidic pH (gastric juice, vaginal secretions).' },
        { front: 'How do neutrophils kill bacteria?', back: 'Phagocytosis, degranulation (lysosome discharge), and respiratory burst producing lethal oxidants (O2-, H2O2, HClO).' },
        { front: 'What are the three types of antimicrobial proteins?', back: 'Interferons (induce antiviral proteins), complement (enhance inflammation/phagocytosis/cytolysis), and transferrins (bind iron to limit bacterial growth).' },
        { front: 'What are the four steps of phagocytosis?', back: 'Chemotaxis (attraction to chemicals), adherence (attachment), ingestion (engulf via pseudopods forming phagosome), digestion/killing (lysosome merge, lethal oxidants, exocytosis of residual body).' },
        { front: 'What are the four cardinal signs of inflammation?', back: 'Redness (hyperemia), swelling (edema from increased permeability), heat (hyperemia), and pain (bradykinin/prostaglandins, nerve pressure).' },
        { front: 'What is the sequence of leukocyte deployment in inflammation?', back: 'Margination (adhere to vessel walls) -> diapedesis (squeeze between endothelial cells) -> chemotaxis (attract to site, neutrophils first) -> phagocytosis + respiratory burst -> macrophages/T cells recruited.' },
        { front: 'What is the difference between an abscess and an ulcer?', back: 'Abscess: pus accumulation in a confined space (pimples, boils). Ulcer: open sore, common in diabetics with poor circulation (stasis ulcers).' }
      ]
    },

    // ===== SECTION 3: Lymphatic & Immune Module 3 =====
    {
      id: 'lymphatic-s3',
      title: 'NK Cells, Antimicrobial Proteins, Fever, Cytokines & Cellular Immunity',
      pageRange: 'Pages 21-30',
      learnItems: [
        {
          title: 'Natural Killer (NK) Cells',
          body: 'Derived from T lymphocyte precursors; specialized for "self from funky self" (abnormal MHC antigens). Kill variety of microbes and tumor cells; found in blood, spleen, lymph nodes, red marrow. Attack cells displaying abnormal MHC antigens.'
        },
        {
          title: 'NK Cell Action - Perforin',
          body: 'NK cells secrete perforin (punches holes in target cell membrane) and other toxic substances.'
        },
        {
          title: 'Antimicrobial Proteins',
          body: 'Interferons: polypeptides from virus-infected lymphocytes/macrophages; diffuse to neighbors inducing antiviral proteins; activate NK cells/macrophages; destroy infected host cells; anticancer effects. Complement: inactive plasma proteins activated by pathogens via classical or alternate pathways; mechanisms: inflammation, opsonization (phagocytosis promotion), cytolysis (membrane attack complex). Transferrins: iron-binding proteins inhibiting bacterial growth by reducing available iron.'
        },
        {
          title: 'Complement Pathways and Actions',
          body: 'Classical pathway: begins with C1 activation. Alternate pathway: begins with C3 activation. Both lead to inflammation, enhanced phagocytosis, or microbe bursting; membrane attack complex (C5b-C9 ring) causes cytolysis.'
        },
        {
          title: 'Fever',
          body: 'Defense mechanism promoting interferon, metabolic rate/tissue repair, inhibiting pathogen reproduction. Macrophage cytokine interleukin-1 (pyrogen) stimulates hypothalamus to secrete PGE, resetting thermostat higher. Stages: onset, stadium, defervescence; >105 degrees F may cause delirium, 111-115 degrees F coma/death.'
        },
        {
          title: 'Cytokines and Cytokine Therapy',
          body: 'Small protein hormones from lymphocytes/APCs involved in immune responses. Alpha-interferon: treats Kaposi\'s sarcoma, genital herpes, hepatitis B/C, leukemias. Beta-interferon: treats multiple sclerosis. Interleukin-2: treats cancer (with side effects).'
        },
        {
          title: 'Lymphocytes in Specific Immunity',
          body: 'Specific immunity depends on lymphocytes: ~80% T cells (cell-mediated), 15% B cells (antibody-mediated), 5% NK cells (nonspecific).'
        },
        {
          title: 'T Lymphocytes (T Cells)',
          body: 'Fetal stem cells colonize thymus for 2-3 days; thymosins stimulate antigen receptor production leading to immunocompetent T cells.'
        },
        {
          title: 'T Cell Selection in Thymus',
          body: 'Negative selection: T cells unable to bind reticular epithelium or reacting to self antigens undergo clonal deletion (death), anergy (inactive), achieving self-tolerance (~1 in 100 survive). Positive selection: T cells binding MHC on epithelium (not self-reactive) divide into clones and leave to colonize lymphatic tissues.'
        },
        {
          title: 'Cellular (Cell-Mediated) Immunity',
          body: 'T lymphocytes attack foreign cells/diseased host cells via four T cell classes: cytotoxic (killer) T cells (attack), helper T cells (promote T/B/nonspecific), suppressor T cells (limit attack), memory T cells (future immunity).'
        },
        {
          title: 'Cytotoxic T Cell Activation',
          body: 'CD8 cell receptor binds foreign antigen fragment on MHC-I; costimulation from helper T cell cytokine prevents accidental response. Leads to clonal expansion into cytotoxic T cells and memory Tc cells in secondary organs like lymph nodes.'
        },
        {
          title: 'Cytotoxic T Cells (Tc/CD8)',
          body: 'Recognize antigen fragments on MHC-I (virus-infected, tumor cells, transplants). Activation requires MHC-I binding + helper T cytokine costimulation leading to clonal selection. Migrate to infection/tumor; attack by perforin (membrane holes), lymphotoxin (DNA fragmentation enzymes), gamma-interferon (activates phagocytes). Tumor necrosis factor kills cancer cells in 2-3 days.'
        },
        {
          title: 'Immunological Surveillance',
          body: 'Immune system detects tumor antigens on cancerous cells (especially virus-induced); cytotoxic T cells, macrophages, NK cells destroy them. Immunosuppressive drugs (e.g., transplant patients) increase viral cancer risk.'
        },
        {
          title: 'Graft Rejection',
          body: 'Transplant triggers cell- and antibody-mediated responses; histocompatibility antigen match reduces rejection. Cyclosporine inhibits IL-2 secretion by helper T cells (little B cell effect, preserves some resistance).'
        }
      ],
      keyTerms: [
        { term: 'Perforin', definition: 'Protein secreted by NK cells and cytotoxic T cells that punches holes in target cell membranes.' },
        { term: 'Opsonization', definition: 'Complement-mediated promotion of phagocytosis by coating pathogens.' },
        { term: 'Membrane Attack Complex (MAC)', definition: 'Ring of complement proteins C5b-C9 that causes cytolysis by creating pores in pathogen membranes.' },
        { term: 'Interleukin-1 (IL-1)', definition: 'Pyrogen cytokine from macrophages that stimulates hypothalamus to raise body temperature (fever).' },
        { term: 'Cytokines', definition: 'Small protein hormones from lymphocytes/APCs that regulate immune responses.' },
        { term: 'Thymosins', definition: 'Thymic hormones that stimulate T cell antigen receptor production, creating immunocompetent T cells.' },
        { term: 'Negative Selection', definition: 'Elimination of T cells that react to self antigens via clonal deletion or anergy; achieves self-tolerance.' },
        { term: 'Positive Selection', definition: 'Survival of T cells that properly bind MHC on epithelium without being self-reactive; they divide and colonize lymphatic tissues.' },
        { term: 'Cytotoxic (Killer) T Cells', definition: 'CD8+ T cells that attack virus-infected, tumor, and transplant cells recognized on MHC-I.' },
        { term: 'Helper T Cells', definition: 'T cells that promote T cell, B cell, and nonspecific defense responses via cytokines.' },
        { term: 'Lymphotoxin', definition: 'Substance from cytotoxic T cells that activates DNA fragmentation enzymes in target cells.' },
        { term: 'Tumor Necrosis Factor', definition: 'Cytokine that kills cancer cells in 2-3 days.' },
        { term: 'Cyclosporine', definition: 'Immunosuppressive drug that inhibits IL-2 secretion by helper T cells; used to prevent graft rejection.' },
        { term: 'Clonal Selection', definition: 'Process by which activated T cells divide into clones of effector and memory cells.' }
      ],
      memoryAids: [
        'Complement pathways: "C1 = Classical (C comes first), C3 = Alternate (A comes after)" - classical starts with C1, alternate starts with C3.',
        'Fever stages: "OSD" = Onset, Stadium, Defervescence.',
        'Lymphocyte percentages: "80-15-5" = T cells (80%), B cells (15%), NK cells (5%).',
        'Cytotoxic T cell weapons: "PLG-T" = Perforin (holes), Lymphotoxin (DNA fragmentation), Gamma-interferon (activates phagocytes), TNF (kills cancer).'
      ],
      inlineQuestions: [
        {
          question: 'NK cells primarily target cells displaying:',
          options: { A: 'Normal MHC', B: 'Abnormal MHC antigens', C: 'No antigens', D: 'RBC antigens' },
          answer: 'B',
          explanation: 'NK cells are specialized to recognize and attack cells displaying abnormal MHC antigens, including microbes and tumor cells.'
        },
        {
          question: 'Of circulating lymphocytes, approximately what percentage are T cells?',
          options: { A: '5%', B: '15%', C: '80%', D: '50%' },
          answer: 'C',
          explanation: 'Specific immunity depends on lymphocytes: approximately 80% are T cells (cell-mediated), 15% are B cells (antibody-mediated), and 5% are NK cells.'
        },
        {
          question: 'Cytotoxic T cells recognize antigens on:',
          options: { A: 'MHC-II only', B: 'MHC-I (virus/tumor/transplant cells)', C: 'Free antigens', D: 'Platelets' },
          answer: 'B',
          explanation: 'Cytotoxic T cells (CD8+) recognize antigen fragments presented on MHC-I molecules on virus-infected cells, tumor cells, and transplanted cells.'
        }
      ],
      quiz: [
        {
          question: 'Perforin secreted by NK cells:',
          options: { A: 'Promotes bacterial growth', B: 'Punches holes in target cell membranes', C: 'Produces antibodies', D: 'Resets body temperature' },
          answer: 'B',
          explanation: 'NK cells secrete perforin, which punches holes in target cell membranes, along with other toxic substances.'
        },
        {
          question: 'Interferons induce neighboring cells to produce:',
          options: { A: 'Bacteria', B: 'Antiviral proteins', C: 'Clotting factors', D: 'RBCs' },
          answer: 'B',
          explanation: 'Interferons are polypeptides that diffuse to neighboring cells and induce them to produce antiviral proteins.'
        },
        {
          question: 'The classical complement pathway begins with activation of:',
          options: { A: 'C3', B: 'C1', C: 'C5b', D: 'Plasmin' },
          answer: 'B',
          explanation: 'The classical complement pathway begins with C1 activation, while the alternate pathway begins with C3 activation.'
        },
        {
          question: 'The membrane attack complex is formed by complement proteins:',
          options: { A: 'C1-C3', B: 'C5b-C9', C: 'Interferons', D: 'Transferrins' },
          answer: 'B',
          explanation: 'The membrane attack complex (MAC) is a ring of complement proteins C5b-C9 that causes cytolysis by creating pores in pathogen membranes.'
        },
        {
          question: 'Transferrins inhibit bacteria by:',
          options: { A: 'Binding iron', B: 'Producing heat', C: 'Enhancing inflammation', D: 'Promoting phagocytosis' },
          answer: 'A',
          explanation: 'Transferrins are iron-binding proteins that inhibit bacterial growth by reducing the amount of available iron.'
        },
        {
          question: 'Interleukin-1 (pyrogen) during fever is secreted by:',
          options: { A: 'RBCs', B: 'Macrophages', C: 'T cells only', D: 'Platelets' },
          answer: 'B',
          explanation: 'Macrophages secrete the cytokine interleukin-1 (a pyrogen), which stimulates the hypothalamus to secrete PGE and reset the thermostat higher.'
        },
        {
          question: 'Fever benefits immunity by:',
          options: { A: 'Inhibiting metabolism', B: 'Promoting interferon, tissue repair, inhibiting pathogens', C: 'Cooling the body', D: 'Increasing bacterial growth' },
          answer: 'B',
          explanation: 'Fever is a defense mechanism that promotes interferon production, increases metabolic rate/tissue repair, and inhibits pathogen reproduction.'
        },
        {
          question: 'Alpha-interferon is used to treat:',
          options: { A: 'Diabetes', B: 'Hepatitis B/C and some leukemias', C: 'Hypertension', D: 'Anemia' },
          answer: 'B',
          explanation: 'Alpha-interferon is used to treat Kaposi\'s sarcoma, genital herpes, hepatitis B/C, and leukemias.'
        },
        {
          question: 'Thymosins in the thymus stimulate T cells to produce:',
          options: { A: 'Antibodies', B: 'Antigen receptors', C: 'Complement', D: 'Cytokines only' },
          answer: 'B',
          explanation: 'Thymosins stimulate antigen receptor production in T cells, making them immunocompetent.'
        },
        {
          question: 'Negative selection in thymus eliminates T cells that:',
          options: { A: 'Bind MHC properly', B: 'React to self antigens (clonal deletion/anergy)', C: 'Ignore all antigens', D: 'Produce interferons' },
          answer: 'B',
          explanation: 'Negative selection eliminates T cells that react to self antigens through clonal deletion (death) or anergy (inactivation), achieving self-tolerance. Only ~1 in 100 survive.'
        },
        {
          question: 'Cell-mediated immunity involves four classes of T cells EXCEPT:',
          options: { A: 'Cytotoxic T cells', B: 'Helper T cells', C: 'B cells', D: 'Suppressor T cells' },
          answer: 'C',
          explanation: 'B cells are part of antibody-mediated immunity, not cell-mediated. The four T cell classes are cytotoxic, helper, suppressor, and memory T cells.'
        },
        {
          question: 'Costimulation for cytotoxic T cell activation comes from:',
          options: { A: 'B cell cytokine', B: 'Helper T cell cytokine', C: 'NK cells', D: 'Macrophages alone' },
          answer: 'B',
          explanation: 'Costimulation from helper T cell cytokine is required for cytotoxic T cell activation, preventing accidental immune responses.'
        },
        {
          question: 'Lymphotoxin from cytotoxic T cells:',
          options: { A: 'Punches holes', B: 'Activates DNA fragmentation enzymes in target', C: 'Produces fever', D: 'Binds iron' },
          answer: 'B',
          explanation: 'Lymphotoxin from cytotoxic T cells activates DNA fragmentation enzymes in the target cell. Perforin is the one that punches holes.'
        },
        {
          question: 'Immunological surveillance is most effective against:',
          options: { A: 'Bacterial infections', B: 'Virus-induced tumors', C: 'Fungal infections', D: 'Parasites' },
          answer: 'B',
          explanation: 'Immunological surveillance is especially effective at detecting tumor antigens on cancerous cells, particularly virus-induced tumors.'
        },
        {
          question: 'Cyclosporine prevents graft rejection by:',
          options: { A: 'Killing B cells', B: 'Inhibiting IL-2 secretion by helper T cells', C: 'Enhancing complement', D: 'Increasing perforin' },
          answer: 'B',
          explanation: 'Cyclosporine inhibits IL-2 secretion by helper T cells, with little effect on B cells, thus preserving some immune resistance while preventing rejection.'
        },
        {
          question: 'Which pathway of complement activation begins with C3?',
          options: { A: 'Classical', B: 'Alternate', C: 'Final common', D: 'Interferon' },
          answer: 'B',
          explanation: 'The alternate complement pathway begins with C3 activation, while the classical pathway begins with C1.'
        },
        {
          question: 'Only about what fraction of T cells in the thymus become immunocompetent?',
          options: { A: '1 in 10', B: '1 in 100', C: 'All', D: '1 in 2' },
          answer: 'B',
          explanation: 'Only about 1 in 100 T cells survive the selection process in the thymus to become immunocompetent.'
        },
        {
          question: 'Helper T cells mainly:',
          options: { A: 'Directly kill infected cells', B: 'Promote T/B cell action and nonspecific defenses', C: 'Suppress all immunity', D: 'Produce antibodies' },
          answer: 'B',
          explanation: 'Helper T cells promote the action of T cells, B cells, and nonspecific defenses via cytokine secretion.'
        },
        {
          question: 'Gamma-interferon from cytotoxic T cells:',
          options: { A: 'Kills cancer cells', B: 'Activates phagocytic cells', C: 'Resets thermostat', D: 'Binds antigens' },
          answer: 'B',
          explanation: 'Gamma-interferon released by cytotoxic T cells activates phagocytic cells at the infection/tumor site.'
        },
        {
          question: 'Beta-interferon is used therapeutically for:',
          options: { A: 'Hepatitis', B: 'Multiple sclerosis', C: 'Anemia', D: 'Hypertension' },
          answer: 'B',
          explanation: 'Beta-interferon is used therapeutically to treat multiple sclerosis.'
        }
      ],
      flashcards: [
        { front: 'What do NK cells target and how do they kill?', back: 'Target cells displaying abnormal MHC antigens (microbes, tumor cells). Kill by secreting perforin (membrane holes) and other toxic substances.' },
        { front: 'What are the three types of antimicrobial proteins?', back: 'Interferons (induce antiviral proteins, activate NK cells/macrophages), complement (enhance inflammation/phagocytosis/cytolysis), transferrins (bind iron to starve bacteria).' },
        { front: 'Describe the classical vs. alternate complement pathways.', back: 'Classical: begins with C1 activation. Alternate: begins with C3 activation. Both lead to inflammation, enhanced phagocytosis, or cytolysis via membrane attack complex (C5b-C9).' },
        { front: 'How does fever develop and what are its stages?', back: 'Macrophages secrete IL-1 (pyrogen) -> hypothalamus secretes PGE -> thermostat reset higher. Stages: onset, stadium, defervescence. >105F = delirium; 111-115F = coma/death.' },
        { front: 'What is the distribution of circulating lymphocytes?', back: '~80% T cells (cell-mediated), 15% B cells (antibody-mediated), 5% NK cells (nonspecific).' },
        { front: 'What happens during T cell selection in the thymus?', back: 'Negative selection: T cells reacting to self antigens undergo clonal deletion/anergy (~99% eliminated). Positive selection: T cells properly binding MHC (not self-reactive) divide into clones and colonize lymphatic tissues.' },
        { front: 'Name the four classes of T cells in cell-mediated immunity.', back: 'Cytotoxic (killer) T cells (attack), helper T cells (promote T/B/nonspecific), suppressor T cells (limit attack), memory T cells (future immunity).' },
        { front: 'How do cytotoxic T cells attack targets?', back: 'Perforin (membrane holes), lymphotoxin (DNA fragmentation enzymes), gamma-interferon (activates phagocytes), and tumor necrosis factor (kills cancer cells in 2-3 days).' },
        { front: 'What is required for cytotoxic T cell activation?', back: 'CD8 receptor binds foreign antigen on MHC-I + costimulation from helper T cell cytokine. This leads to clonal expansion into effector and memory T cells.' },
        { front: 'How does cyclosporine prevent graft rejection?', back: 'Inhibits IL-2 secretion by helper T cells, with little B cell effect, preserving some immune resistance while preventing rejection.' },
        { front: 'What are the therapeutic uses of interferons?', back: 'Alpha-interferon: Kaposi\'s sarcoma, genital herpes, hepatitis B/C, leukemias. Beta-interferon: multiple sclerosis. Interleukin-2: cancer treatment.' }
      ]
    }
  ]
};

export default lymphatic;
