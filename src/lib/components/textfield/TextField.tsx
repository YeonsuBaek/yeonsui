import { TextFieldProps } from "."
import { Icon } from "../icon"

const TextField = ({
  id,
  value,
  onChange,
  placeholder = "",
  size = "medium",
  disabled = false,
  suffix,
}: TextFieldProps) => {
  return (
    <div className={`ui-textfield ${size} ${disabled}`}>
      <input
        className="ui-textfield-input"
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {suffix && <span className="ui-textfield-suffix">{suffix}</span>}
    </div>
  )
}

export default TextField
