import { useController } from 'react-hook-form'

import styled from 'styled-components'

const StyledInputArea = styled.input`
  border-radius: 100px;
  padding-left: 10px;
  border: none;
`

const ControlledTextarea = ({ name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange }
  } = useController({ name, control, defaultValue })
  return <StyledInputArea {...props} value={value} onChange={onChange} />
}

export default ControlledTextarea
