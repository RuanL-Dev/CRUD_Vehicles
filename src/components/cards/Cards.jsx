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
  cursor: pointer;
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

export default function Post() {
  return (
    <>
      <CardContainer>
        <StyledCardIcons>
          <IconImages imageName="EditIcon" type="svg" size="40px" />
          <IconImages imageName="DeleteIcon" type="svg" size="25px" />
          <IconImages imageName="LikeIcon" type="svg" size="25px" />
        </StyledCardIcons>
        <StyledCarName>SANDERO</StyledCarName>
        <StyledCarPrice>PREÇO: 22.000</StyledCarPrice>
        <StyledCarDescription>DESCRIÇÃO: Único dono, usado 6 anos</StyledCarDescription>
        <StyledCarYear>ANO: 2016</StyledCarYear>
      </CardContainer>
    </>
  )
}
