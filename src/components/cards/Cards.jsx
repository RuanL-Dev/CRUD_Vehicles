import styled from 'styled-components'

import IconImages from '../iconImage/IconImages'

const CardContainer = styled.div`
  background-color: #f04f4f;
  width: 220px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  color: white;
`

const StyledCardIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 7px;
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
const StyledButtonIcon = styled.button`
  cursor: pointer;
`

export default function Cards({ name, price, description, year }) {
  return (
    <>
      <CardContainer>
        <StyledCardIcons>
          <StyledButtonIcon>
            <IconImages imageName="EditIcon" type="svg" size="40px" />
          </StyledButtonIcon>
          <StyledButtonIcon>
            <IconImages imageName="DeleteIcon" type="svg" size="25px" />
          </StyledButtonIcon>
          <StyledButtonIcon>
            <IconImages imageName="LikeIcon" type="svg" size="25px" />
          </StyledButtonIcon>
        </StyledCardIcons>
        <StyledCarName>{name}</StyledCarName>
        <StyledCarPrice>PREÇO: {price}</StyledCarPrice>
        <StyledCarDescription>DESCRIÇÃO: {description}</StyledCarDescription>
        <StyledCarYear>ANO: {year}</StyledCarYear>
      </CardContainer>
    </>
  )
}
