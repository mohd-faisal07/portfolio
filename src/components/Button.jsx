function Button({ children, onclick, styles }) {
  return (
    <button onClick={onclick} className="`${styles}`">
      {children}
    </button>
  );
}

export default Button;
