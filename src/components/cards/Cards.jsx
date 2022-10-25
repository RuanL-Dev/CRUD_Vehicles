import { useState } from 'react'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import styled from 'styled-components'

import { GoTrashcan } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { BsBookmarkHeart } from 'react-icons/bs'

import EditCard from './EditCard'

const CardContainer = styled.div`
  background-color: #f04f4f;
  width: 220px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  color: white;
`

const StyledCarName = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 25px;
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

const StyledCardIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 7px;
`

const StyledIconButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  background-color: #f04f4f;
  border: none;
`

const StyledChildren = styled.div``

export default function Card({ name, price, description, year, id }) {
  const { mutate } = useSWRConfig()
  const [editCard, setEditCard] = useState(false)
  const [like, setLike] = useState(false)

  const handleEdit = async () => {
    setEditCard(!editCard)
  }
  const handleLike = async () => {
    setLike(!like)
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/cars/addnewcar`, {
        data: {
          id
        }
      })
      if (response.status === 200) mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/cars/carfilter`)
      console.log(response.status)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <CardContainer>
        <StyledChildren>
          <StyledCardIcons>
            <StyledIconButton>
              <FaRegEdit onClick={handleEdit} />
            </StyledIconButton>
            <StyledIconButton>
              <GoTrashcan onClick={handleDelete} />
            </StyledIconButton>
            <StyledIconButton onClick={handleLike}>
              <BsBookmarkHeart />
            </StyledIconButton>
          </StyledCardIcons>
        </StyledChildren>
        {!editCard && (
          <>
            <StyledCarName>{name}</StyledCarName>
            <StyledCarPrice>PREÇO R$: {price}</StyledCarPrice>
            <StyledCarDescription>DESCRIÇÃO: {description}</StyledCarDescription>
            <StyledCarYear>ANO: {year}</StyledCarYear>
          </>
        )}
        {editCard && <EditCard id={id} />}
      </CardContainer>
    </>
  )
}
