import styled from 'styled-components'

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
  margin: 20px 0;

  ${(props) => props.error && `border: 1px solid ${props.theme.error};`}
  &:focus {
    outline: none;
  }

  @media (max-width: 850px) {
    width: auto;
  }
  @media (max-width: 630px) {
    width: 400px;
  }
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`

const ContainerInput = styled.div`
  position: relative;
`

const FilterInput = ({ label, ...props }) => {
  return (
    <>
      <ContainerInput>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type="text" placeholder="Buscar" {...props}></StyledInput>
      </ContainerInput>
    </>
  )
}

export default FilterInput
