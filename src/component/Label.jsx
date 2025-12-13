function Label({ text }) {
  const htmlFor = text.toLowerCase();
  return (
    <label htmlFor={htmlFor} className="label-form">
      {text}
    </label>
  );
}

export default Label;
