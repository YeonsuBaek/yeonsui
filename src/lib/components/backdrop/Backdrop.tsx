import { BackdropProps } from '.'

const Backdrop = ({ color = 'dark' }: BackdropProps) => {
  return <div className={`ui-backdrop ${color}`} role="presentation" />
}

export default Backdrop
