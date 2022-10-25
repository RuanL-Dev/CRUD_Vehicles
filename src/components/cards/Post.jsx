import { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components'

import { GoTrashcan } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'

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

const MyFavoritesPostContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 43px;
  display: ${(props) => (props.like ? 'block' : 'none')};
`
const MyAnnouncesContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 43px;
`
const StyledCardIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 7px;
`

const StyledButtonIcon = styled.button`
  cursor: pointer;
  font-size: 18px;
  background-color: #f04f4f;
  border: none;
`

export default function Post({ id, name, price, description, year }) {
  const [data, setData] = useState([])
  const [like, setLike] = useState(false)
  console.log(like)

  const handleClickLike = (data) => {}

  const handleEditPost = () => {
    console.log('EDITAR')
    console.log(id)
  }

  const handleDeletePost = () => {
    console.log('DELETAR')
    console.log(id)
  }

  const handleCards = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cars/carfilter`)
    setData(response.data)
  }

  useEffect(() => {
    handleCards()
  }, [])
  return (
    <>
      <MainContainer>
        <MyFavoritesPostContainer like={like} onClick={() => setLike(!like)}>
          {like && (
            <Cards name={name} price={price} description={description} year={year} id={id}></Cards>
          )}
        </MyFavoritesPostContainer>
        <MyAnnouncesContainer>
          <Cards name={name} price={price} description={description} year={year} id={id}></Cards>
          <StyledCardIcons>
            <StyledButtonIcon>
              <FiEdit onClick={handleEditPost} />
            </StyledButtonIcon>
            <StyledButtonIcon>
              <GoTrashcan onClick={handleDeletePost} />
            </StyledButtonIcon>
            <StyledButtonIcon>
              <FiHeart onClick={() => setLike(!like)} />
            </StyledButtonIcon>
          </StyledCardIcons>
        </MyAnnouncesContainer>
      </MainContainer>
    </>
  )
}
