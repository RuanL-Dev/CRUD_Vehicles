import styled from 'styled-components'

const StyledButtonEdit = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  color: rgba(2, 2, 2, 0.7);
  padding: 5px 10px;
  border-radius: 100px;
  border: 0;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 65px;
  font-size: 16px;
  transition: 0.4s;

  :hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  :disabled {
    background-color: grey;
  }
`

const ButtonEdit = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButtonEdit disabled={disabled || loading} {...props}>
      {loading && (
        <>
          <p>{children}</p>
        </>
      )}
      {!loading && children}
    </StyledButtonEdit>
  )
}

export default ButtonEdit
