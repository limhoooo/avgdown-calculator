interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export default function ToggleGroup({ options, value, onChange }: Props) {
  return (
    <div className="toggle-group">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`toggle-btn${value === opt.value ? ' active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
