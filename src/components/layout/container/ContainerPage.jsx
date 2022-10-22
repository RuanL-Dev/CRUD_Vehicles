import styled from 'styled-components'

const StyledMainContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 896px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ContainerPage = ({ children }) => <StyledMainContainer>{children}</StyledMainContainer>

export default ContainerPage
