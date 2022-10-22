import styled from 'styled-components'

const StyledTitle = styled.p`
  font-size: 18px;
`

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  width: 489px;
  height: 387.46px;
  left: 390px;
`

const StyledCarName = styled.p`
  font-size: 14px;
`

const StyledCarPrice = styled.p`
  font-size: 14px;
`

const StyledCarDescription = styled.p`
  font-size: 14px;
`

const StyledCarYear = styled.p`
  font-size: 14px;
`

export default function Post() {
  return (
    <>
      <StyledTitle>Meus anúncios</StyledTitle>
      <PostContainer>
        <StyledCarName>SANDERO</StyledCarName>
        <StyledCarPrice>PREÇO: 22.000</StyledCarPrice>
        <StyledCarDescription>DESCRIÇÃO: Único dono, usado 6 anos</StyledCarDescription>
        <StyledCarYear>ANO: 2016</StyledCarYear>
      </PostContainer>
    </>
  )
}
