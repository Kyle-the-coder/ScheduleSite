import "./formbutton.css";

export function FormButton({ buttonName, disabledButton, buttonFunction }) {
  return (
    <button
      onClick={() => buttonFunction && buttonFunction()}
      disabled={disabledButton}
      type="submit"
      className={`form-submit-button ${disabledButton ? "" : "enabled"}`}
    >
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">{buttonName}</span>
    </button>
  );
}
