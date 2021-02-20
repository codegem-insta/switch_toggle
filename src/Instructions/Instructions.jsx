import style from "./Instructions.module.css";
import logo from "./logo.png";

export function TopInstruction() {
  return (
    <div className={style.Instructions}>
      <p className={style.Arrow}>←</p>
      <img src={logo} alt="logo" />
      <br />
      React Side Bar
      <br />
      Made easy
      <br />
    </div>
  );
}

export function SwipeInstruction() {
  return (
    <div className={style.InstructionsBottom}>
      Swipe <div className={style.ArrowSwipe}>→</div>
    </div>
  );
}
