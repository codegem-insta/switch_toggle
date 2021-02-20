import style from "./Toggle.module.css";

function Toggle() {
  return (
    <>
      <input className={style.CheckBox} type='checkbox' id='switch'/>

      <label className={style.Toggle} htmlFor='switch'>
        <span className={style.Circle}/>
      </label>
    </>
  );
}

export default Toggle;
