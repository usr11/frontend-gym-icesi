import "../../styles/textarea.css";

const Textarea = ({ text, ...props }) => {
  return (
    <div className="textarea__group_one">
      <textarea
        className="textarea__group_onetextarea__field"
        {...props}
        placeholder={text}
      ></textarea>
      <label htmlFor="name" className="textarea__group_onetextarea__label">
        {text}
      </label>
    </div>
  );
};

export default Textarea;
