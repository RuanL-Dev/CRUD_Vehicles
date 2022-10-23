import styled from 'styled-components'

const StyledButtonSave = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  color: rgba(2, 2, 2, 0.7);
  padding: 10px 25px;
  border-radius: 100px;
  border: 0;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  :disabled {
    background-color: grey;
  }

  ${(props) => !props.disabled && 'cursor: pointer;'};
`

const ButtonSave = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButtonSave disabled={disabled || loading} {...props}>
      {loading && (
        <>
          <p>{children}</p>
        </>
      )}
      {!loading && children}
    </StyledButtonSave>
  )
}

export default ButtonSave
