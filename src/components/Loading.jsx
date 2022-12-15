import s from '../Style/Loading.module.css'
const Loading = () => {
  return (
    <div className={s["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default Loading;
