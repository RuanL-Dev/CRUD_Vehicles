import styled from 'styled-components'

const StyledButtonAdd = styled.button`
  background-color: ${(props) => props.theme.buttonColor};
  color: rgba(2, 2, 2, 0.7);
  padding: 12px 98px;
  border-radius: 100px;
  border: 0;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  :hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  :after {
    content: '';
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-top: 1px solid violet;
    border-bottom: 1px solid violet;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
  :before {
    content: '';
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-left: 1px solid violet;
    border-right: 1px solid violet;
    transform: scaleY(0);
    transition: transform 0.2s ease-in-out;
  }
  :hover:before {
    transform: scaleY(1);
  }

  :hover:after {
    transform: scaleX(1);
  }
  @media (max-width: 400px) {
    width: 250px;
    padding: 12px 50px;
    font-size: 20px;
  }
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
