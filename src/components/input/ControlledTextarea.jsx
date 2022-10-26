import { useController } from 'react-hook-form'

import styled from 'styled-components'
import Textarea from './Textarea'

const StyledInputArea = styled.input`
  border-radius: 100px;
  padding-left: 10px;
  border: none;
`

const ControlledTextarea = ({ name, control, defaultValue = '', ...props }) => {
  console.log(name, control, defaultValue)
  const {
    field: { value, onChange }
  } = useController({ name, control, defaultValue })
  return <StyledInputArea {...props} value={value} onChange={onChange} />
}

export default ControlledTextarea
