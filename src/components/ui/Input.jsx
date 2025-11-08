import "../../styles/input.css"

const Input = ({text, ...props }) => {
  return (
    <div className="form__group_one">
      <input className="form__group_oneform__field" {...props} placeholder={text}/>
      <label htmlFor="name" className="form__group_oneform__label">{text}</label>
    </div>
  );
};

export default Input;
