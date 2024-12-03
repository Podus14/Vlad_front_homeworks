import { memo } from "react";


export const DarkMode = memo(({setIsDark}) => {
  
  // не трогать
  console.log("rerender DarkMode");
  //
  return (
    <label>
      <input
        type="checkbox"
        onChange={e => {setIsDark(e.target.checked)}}
      />
      Dark mode
    </label>
  );
});
