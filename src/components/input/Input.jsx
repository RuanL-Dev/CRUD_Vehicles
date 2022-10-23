import { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid rgba(239, 239, 239, 0.6);
  border-radius: 100px;
  background-color: ${(props) => props.theme.background};
  padding: 15px 20px;
  box-sizing: border-box;
`

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...props} ref={ref} />
    </InputContainer>
  )
})

export default Input
