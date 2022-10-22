import styled from 'styled-components'

const StyledButtonAdd = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  color: rgba(2, 2, 2, 0.7);
  padding: 12px 98px;
  border-radius: 100px;
  border: 0;
  font-size: 30px;
  cursor: pointer;
`

const ButtonAdd = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButtonAdd disabled={disabled || loading} {...props}>
      {loading && (
        <>
          <p>{children}</p>
        </>
      )}
      {!loading && children}
    </StyledButtonAdd>
  )
}

export default ButtonAdd
