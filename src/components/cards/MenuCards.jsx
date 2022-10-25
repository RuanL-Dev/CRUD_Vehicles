import styled from 'styled-components'

import { FaTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { RiHeart2Fill } from 'react-icons/ri'

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

export default function MenuCards() {
  return (
    <StyledCardIcons>
      <StyledButtonIcon>
        <FiEdit />
      </StyledButtonIcon>
      <StyledButtonIcon>
        <FaTrashAlt />
      </StyledButtonIcon>
      <StyledButtonIcon>
        <RiHeart2Fill />
      </StyledButtonIcon>
    </StyledCardIcons>
  )
}
