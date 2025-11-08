import "../../styles/button.css"

const Button = ({children, ...props}) => {
  return <button className="button_class" {...props}>{children}</button>
}

export default Button;