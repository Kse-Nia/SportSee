interface ToggleProps {
  checked: boolean; // Switch backend of mockup
  onChange: () => void; //
  label?: string; // Accessibility
}

function ToggleDataSwitch({ checked, onChange, label }: ToggleProps) {
  const toggleId = useId();

  return (
    <div className="container--toggle">
      <input
        type="button"
        name=""
        id={toggleId}
        className="toggle--checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={uniqueId} className="toggle--label">
        <span className="toggle--label-background"></span>
        {/* Accessibility */}
        <span className="screen-only">{label || "Toggle"}</span>
      </label>
    </div>
  );
}

export default ToggleDataSwitch;
