const TYPE_CONFIG = {
  artery: { color: '#d32f2f', bg: 'rgba(211,47,47,0.08)', label: 'Artery', icon: '🔴' },
  vein:   { color: '#1565c0', bg: 'rgba(21,101,192,0.08)', label: 'Vein',   icon: '🔵' },
  both:   { color: '#7b1fa2', bg: 'rgba(123,31,162,0.08)', label: 'Artery & Vein', icon: '🟣' },
  organ:  { color: '#e65100', bg: 'rgba(230,81,0,0.08)',   label: 'Organ',  icon: '🫀' },
};

export default function StructureCard({ label, onClose }) {
  if (!label) return null;

  const cfg = TYPE_CONFIG[label.type] || TYPE_CONFIG.artery;

  return (
    <div className="structure-card" style={{ '--card-accent': cfg.color, '--card-accent-bg': cfg.bg }}>
      <button className="structure-card-close" onClick={onClose} aria-label="Close">&times;</button>

      <div className="structure-card-header">
        <span className="structure-card-icon">{cfg.icon}</span>
        <div>
          <h3 className="structure-card-name">{label.label}</h3>
          <span className="structure-card-type" style={{ color: cfg.color, background: cfg.bg }}>
            {cfg.label}
          </span>
        </div>
      </div>

      <div className="structure-card-body">
        <div className="structure-card-field">
          <span className="structure-card-field-label">Function</span>
          <p>{label.function}</p>
        </div>

        <div className="structure-card-field">
          <span className="structure-card-field-label">Origin / Drainage</span>
          <p>{label.origin}</p>
        </div>

        <div className="structure-card-field">
          <span className="structure-card-field-label">Region Supplied</span>
          <p>{label.regionSupplied}</p>
        </div>

        {label.branches && label.branches.length > 0 && (
          <div className="structure-card-field">
            <span className="structure-card-field-label">Key Branches / Tributaries</span>
            <ul className="structure-card-branches">
              {label.branches.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        )}

        {label.clinical && (
          <div className="structure-card-clinical">
            <span className="structure-card-field-label">🩺 Clinical Relevance</span>
            <p>{label.clinical}</p>
          </div>
        )}
      </div>
    </div>
  );
}
