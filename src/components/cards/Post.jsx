import styled from 'styled-components'

import Cards from './Cards'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 90%;
  margin-bottom: 3vh;
`

const MyFavorites = styled.div`
  margin-top: 30px;
`

const StyledTitleFavorites = styled.div`
  font-size: 18px;
`

const MyAnnounces = styled.div`
  margin-top: 30px;
`

const StyledTitleAnnounces = styled.div`
  font-size: 18px;
`

const PostContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 43px;
`

export default function Post() {
  return (
    <>
      <MainContainer>
        <MyFavorites>
          <StyledTitleFavorites>Favoritos</StyledTitleFavorites>
        </MyFavorites>
        <PostContainer>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </PostContainer>
        <MyAnnounces>
          <StyledTitleAnnounces>Meus anúncios</StyledTitleAnnounces>
        </MyAnnounces>
        <PostContainer>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </PostContainer>
      </MainContainer>
    </>
  )
}
