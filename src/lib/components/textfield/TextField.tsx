import { TextFieldProps } from "."

const TextField = ({
  id,
  value,
  onChange,
  placeholder = "",
  size = "medium",
  disabled = false,
}: TextFieldProps) => {
  return (
    <div className={`ui-textfield ${size} ${disabled}`}>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

export default TextField
