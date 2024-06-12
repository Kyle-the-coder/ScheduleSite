import "./formbutton.css";

export function FormButton({ buttonName, disabledButton, buttonFunction }) {
  return (
    <button onClick={() => buttonFunction()} disabled={disabledButton}>
      <span class="transition"></span>
      <span class="gradient"></span>
      <span class="label">{buttonName}</span>
    </button>
  );
}
