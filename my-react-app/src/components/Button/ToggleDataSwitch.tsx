import { useId } from "react"; // Hook for unique ID

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

function ToggleDataSwitch({ checked, onChange, label }: ToggleProps) {
  const toggleId = useId(); // Unique ID for accessibility

  return (
    <div className="container--toggle">
    <input
      type="checkbox"
      id={toggleId}
      className="toggle--checkbox"
      checked={checked}
      onChange={onChange}
      role="switch"       
      aria-checked={checked}
    />
    <label htmlFor={toggleId} className="toggle--label">
      <span className="screen-only">{label || "Toggle"}</span>
    </label>
  </div>
);
}

export default ToggleDataSwitch;
