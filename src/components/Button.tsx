import { createSignal } from "solid-js";

const Button = ({ text }) => {
  const [buttonText, setButtonText] = createSignal(text || "Click Me!");
  return (
    <div onClick={() => setButtonText(buttonText() + "*")}>{buttonText()}</div>
  );
};

export default Button;
