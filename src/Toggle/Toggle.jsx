import style from "./Toggle.module.css";

function Toggle() {
  return (
    <>
      <input className={style.Toggle} type='checkbox' id='switch'/>

      <label className={style.Label} htmlFor='switch'>
        <span className={style.Button}/>
      </label>
    </>
  );
}

export default Toggle;
