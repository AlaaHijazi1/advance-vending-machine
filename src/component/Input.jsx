function Input({ type, id, min, handleInput }) {
  return (
    <input
      type={type}
      id={id}
      className="input-form"
      min={min && min}
      required
      onChange={handleInput}
    />
  );
}

export default Input;
