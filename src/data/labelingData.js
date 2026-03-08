export const REGIONS = [
  { id: 'all', name: 'All Structures' },
  { id: 'head-neck', name: 'Head & Neck' },
  { id: 'upper-limb', name: 'Upper Limb' },
  { id: 'heart-great', name: 'Heart & Great Vessels' },
  { id: 'abdomen-pelvis', name: 'Abdomen & Pelvis' },
  { id: 'lower-limb', name: 'Lower Limb' },
];

// x,y are percentages of the SVG viewBox (550 x 830)
// Positions match the original text-label locations in the SVG
export const LABELS = [
  // ── Head & Neck ──
  { id: 1,  label: 'Venous sinuses',       region: 'head-neck',      type: 'vein',   x: 67.2, y: 5.6  },
  { id: 2,  label: 'Basilar a.',           region: 'head-neck',      type: 'artery', x: 67.0, y: 7.7  },
  { id: 3,  label: 'Internal carotid a.',  region: 'head-neck',      type: 'artery', x: 67.0, y: 9.9  },
  { id: 4,  label: 'External carotid a.',  region: 'head-neck',      type: 'artery', x: 67.0, y: 12.0 },
  { id: 5,  label: 'External jugular v.',  region: 'head-neck',      type: 'vein',   x: 67.0, y: 14.1 },
  { id: 6,  label: 'Internal jugular v.',  region: 'head-neck',      type: 'vein',   x: 67.0, y: 16.5 },
  { id: 7,  label: 'Vertebral a.',         region: 'head-neck',      type: 'artery', x: 67.2, y: 18.9 },
  { id: 8,  label: 'Common carotid a.',    region: 'head-neck',      type: 'artery', x: 71.9, y: 21.0 },

  // ── Upper Limb ──
  { id: 9,  label: 'Subclavian a. and v.', region: 'upper-limb',     type: 'both',   x: 33.5, y: 17.8 },
  { id: 10, label: 'Axillary a. and v.',   region: 'upper-limb',     type: 'both',   x: 30.9, y: 20.0 },
  { id: 11, label: 'Cephalic v.',          region: 'upper-limb',     type: 'vein',   x: 28.9, y: 22.2 },
  { id: 12, label: 'Brachial a. and v.',   region: 'upper-limb',     type: 'both',   x: 24.5, y: 33.9 },
  { id: 13, label: 'Basilic v.',           region: 'upper-limb',     type: 'vein',   x: 23.8, y: 36.5 },
  { id: 14, label: 'Median cubital v.',    region: 'upper-limb',     type: 'vein',   x: 23.1, y: 41.9 },
  { id: 15, label: 'Ulnar a.',             region: 'upper-limb',     type: 'artery', x: 22.8, y: 45.7 },
  { id: 16, label: 'Radial a.',            region: 'upper-limb',     type: 'artery', x: 22.9, y: 48.0 },
  { id: 17, label: 'Palmar digital v.',    region: 'upper-limb',     type: 'vein',   x: 14.4, y: 53.2 },
  { id: 18, label: 'Digital a.',           region: 'upper-limb',     type: 'artery', x: 14.7, y: 55.8 },

  // ── Heart & Great Vessels ──
  { id: 19, label: 'Superior vena cava',   region: 'heart-great',    type: 'vein',   x: 27.7, y: 24.5 },
  { id: 20, label: 'Inferior vena cava',   region: 'heart-great',    type: 'vein',   x: 26.5, y: 26.9 },
  { id: 21, label: 'Aorta',                region: 'heart-great',    type: 'artery', x: 77.6, y: 23.1 },
  { id: 22, label: 'Pulmonary a. and v.',  region: 'heart-great',    type: 'both',   x: 77.6, y: 25.1 },
  { id: 23, label: 'Heart',                region: 'heart-great',    type: 'organ',  x: 77.5, y: 27.4 },
  { id: 24, label: 'Coronary a. and v.',   region: 'heart-great',    type: 'both',   x: 77.6, y: 29.5 },

  // ── Abdomen & Pelvis ──
  { id: 25, label: 'Hepatic v.',                      region: 'abdomen-pelvis', type: 'vein',   x: 25.4, y: 29.4 },
  { id: 26, label: '(Hepatic) portal v.',              region: 'abdomen-pelvis', type: 'vein',   x: 25.4, y: 31.7 },
  { id: 27, label: 'Descending aorta',                region: 'abdomen-pelvis', type: 'artery', x: 71.9, y: 31.8 },
  { id: 28, label: 'Celiac trunk',                    region: 'abdomen-pelvis', type: 'artery', x: 71.9, y: 34.3 },
  { id: 29, label: 'Splenic a. and v.',                region: 'abdomen-pelvis', type: 'both',   x: 71.9, y: 36.3 },
  { id: 30, label: 'Superior mesenteric a. and v.',    region: 'abdomen-pelvis', type: 'both',   x: 72.0, y: 38.7 },
  { id: 31, label: 'Renal a. and v.',                  region: 'abdomen-pelvis', type: 'both',   x: 71.9, y: 42.2 },
  { id: 32, label: 'Gonadal a. and v.',                region: 'abdomen-pelvis', type: 'both',   x: 71.9, y: 44.2 },
  { id: 33, label: 'Common iliac a. and v.',            region: 'abdomen-pelvis', type: 'both',   x: 71.9, y: 46.3 },
  { id: 34, label: 'Internal iliac a. and v.',          region: 'abdomen-pelvis', type: 'both',   x: 71.9, y: 48.4 },
  { id: 35, label: 'External iliac a. and v.',          region: 'abdomen-pelvis', type: 'both',   x: 71.9, y: 50.5 },

  // ── Lower Limb ──
  { id: 36, label: 'Common femoral a. and v.',   region: 'lower-limb', type: 'both',   x: 68.2, y: 56.9 },
  { id: 37, label: 'Deep femoral a. and v.',     region: 'lower-limb', type: 'both',   x: 68.2, y: 59.0 },
  { id: 38, label: 'Femoral a. and v.',          region: 'lower-limb', type: 'both',   x: 68.2, y: 61.1 },
  { id: 39, label: 'Popliteal a. and v.',        region: 'lower-limb', type: 'both',   x: 68.2, y: 71.6 },
  { id: 40, label: 'Great saphenous v.',         region: 'lower-limb', type: 'vein',   x: 68.2, y: 75.9 },
  { id: 41, label: 'Small saphenous v.',         region: 'lower-limb', type: 'vein',   x: 68.2, y: 78.3 },
  { id: 42, label: 'Anterior tibial a. and v.',  region: 'lower-limb', type: 'both',   x: 68.3, y: 80.7 },
  { id: 43, label: 'Posterior tibial a. and v.', region: 'lower-limb', type: 'both',   x: 68.3, y: 82.8 },
  { id: 44, label: 'Peroneal a. and v.',         region: 'lower-limb', type: 'both',   x: 68.3, y: 85.0 },
  { id: 45, label: 'Arcuate a.',                region: 'lower-limb', type: 'artery', x: 38.9, y: 93.7 },
  { id: 46, label: 'Dorsal digital a.',         region: 'lower-limb', type: 'artery', x: 38.9, y: 95.8 },
  { id: 47, label: 'Dorsal venous arch',        region: 'lower-limb', type: 'vein',   x: 68.6, y: 93.4 },
  { id: 48, label: 'Dorsal digital vein',       region: 'lower-limb', type: 'vein',   x: 68.6, y: 95.4 },
];
