import { useEffect, useState } from 'react'
import axios from 'axios'

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
  const [data, setData] = useState([])
  const handleCards = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/carfilter`)
    setData(response.data)
  }

  useEffect(() => {
    handleCards()
  }, [])
  return (
    <>
      <MainContainer>
        <MyFavorites>
          <StyledTitleFavorites>Favoritos</StyledTitleFavorites>
        </MyFavorites>
        <PostContainer>
          {data.map((post) => (
            <Cards
              key={post._id}
              name={post.carModel}
              price={post.carPrice}
              description={post.carDescription}
              year={post.carYear}
            />
          ))}
        </PostContainer>
        <MyAnnounces>
          <StyledTitleAnnounces>Meus anúncios</StyledTitleAnnounces>
        </MyAnnounces>
        <PostContainer>
          {data.map((post) => (
            <Cards
              key={post._id}
              name={post.carModel}
              price={post.carPrice}
              description={post.carDescription}
              year={post.carYear}
            />
          ))}
        </PostContainer>
      </MainContainer>
    </>
  )
}
