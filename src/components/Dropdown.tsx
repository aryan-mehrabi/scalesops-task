export default function Dropdown<T extends { id: number; title: string }>({
  options,
  onChange,
  label,
  value,
}: {
  onChange: (option: T) => void;
  options: T[];
  label: string;
  value: T | undefined;
}) {
  const renderOptions = () => {
    return options.map(option => (
      <li key={option.id} onClick={() => onChange(option)}>
        <a className="dropdown-item" href="#">
          {option.title}
        </a>
      </li>
    ));
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {value?.title || label}
      </button>
      <ul className="dropdown-menu">{renderOptions()}</ul>
    </div>
  );
}
