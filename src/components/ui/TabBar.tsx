import type { TabDef } from '@/types/calculator';

interface Props {
  tabs: TabDef[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function TabBar({ tabs, activeId, onChange }: Props) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab${activeId === tab.id ? ' active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
