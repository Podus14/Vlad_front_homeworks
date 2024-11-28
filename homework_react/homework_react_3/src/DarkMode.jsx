export const DarkMode = ({ isDark, setIsDark }) => {
  // не трогать
  console.log("rerender DarkMode");
  //
  return (
    <label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      Dark mode
    </label>
  );
};
