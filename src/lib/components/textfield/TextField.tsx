import { useEffect, useMemo, useState } from "react"
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
  icon,
}: TextFieldProps) => {
  const DEFAULT_RIGHT_PADDING = {
    small: 7,
    medium: 11,
    large: 11,
  }
  const ICON_RIGHT_PADDING = 4
  const ICON_SIZE = {
    small: 16,
    medium: 16,
    large: 20,
  }

  const [iconWidth, setIconWidth] = useState<number>(0)
  const iconSize = useMemo(
    () => (size === "large" ? "small" : "xsmall"),
    [size]
  )

  useEffect(() => {
    if (icon) {
      setIconWidth(ICON_RIGHT_PADDING + ICON_SIZE[size])
    } else {
      setIconWidth(0)
    }
  }, [size])

  return (
    <div className={`ui-textfield ${size} ${disabled ? "disabled" : ""}`}>
      <input
        className="ui-textfield-input"
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          paddingRight: `${DEFAULT_RIGHT_PADDING[size] + iconWidth}px`,
        }}
      />
      {suffix && <span className="ui-textfield-suffix">{suffix}</span>}
      {icon && (
        <Icon className="ui-textfield-icon" size={iconSize} icon={icon} />
      )}
    </div>
  )
}

export default TextField
