import { Children } from "react";

function HoverButton({ childern, onSelect }) {
  //   document.querySelector("button").addEventListener("click", () => {
  //     console.log("p  ");
  //   });

  function handleClick() {
    console.log("hai");
  }
  return (
    <li>
      <button onClick={onSelect}>{childern}</button>
    </li>
  );
}

export default HoverButton;
