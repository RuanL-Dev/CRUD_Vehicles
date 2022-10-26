import { useState } from 'react'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import styled from 'styled-components'

import { GoTrashcan } from 'react-icons/go'
import { FaRegEdit } from 'react-icons/fa'
import { BsBookmarkHeart } from 'react-icons/bs'

import EditCard from './EditCard'

const CardContainer = styled.div`
  background-color: ${(props) => props.color};
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
  gap: 5px;
  margin-left: 140px;
  cursor: pointer;
  color: #0d0c0c;
  max-width: 60px;
  font-size: 20px;
  border: none;
`

const transformColor = (color) => {
  console.log(color)
  const colors = {
    branco: '#e9e3e3',
    branca: '#e9e3e3',
    vermelho: 'rgb(199, 0, 0)',
    rosa: 'rgb(255, 100, 255)',
    verde: 'rgb(0, 180, 0)',
    prata: 'silver',
    azul: 'rgb(20, 100, 255)',
    preto: 'rgb(0, 0, 0, 0.80)',
    preta: 'rgb(0, 0, 0, 0.80)',
    amarelo: 'rgb(215, 220, 128)',
    laranja: 'orange',
    cinza: 'grey',
    marrom: '	#5C4033',
    roxo: 'purple',
    roxa: 'purple'
  }
  return colors[color] || 'rgb(190, 190, 190, 0.35)'
}

export default function Card({ name, price, description, year, id, car }) {
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
      <CardContainer color={transformColor(car)}>
        <StyledCardIcons>
          <FaRegEdit onClick={handleEdit} />
          <GoTrashcan onClick={handleDelete} />
          <BsBookmarkHeart onClick={handleLike} />
        </StyledCardIcons>
        {!editCard && (
          <>
            <StyledCarName>{name}</StyledCarName>
            <StyledCarPrice>PREÇO R$: {price}</StyledCarPrice>
            <StyledCarDescription>DESCRIÇÃO: {description}</StyledCarDescription>
            <StyledCarYear>ANO: {year}</StyledCarYear>
          </>
        )}
        {editCard && (
          <EditCard year={year} name={name} price={price} description={description} id={id} />
        )}
      </CardContainer>
    </>
  )
}
