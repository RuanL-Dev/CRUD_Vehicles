import styled from 'styled-components'
import IconImages from '../iconImage/IconImages'

const CardContainer = styled.div`
  background-color: #f04f4f;
  width: 220px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
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
const StyledChildrenIcons = styled.div`

`

export default function Cards({ children, name, price, description, year }) {
  return (
    <>
      <CardContainer>
        <StyledChildrenIcons>{children}</StyledChildrenIcons>
        <StyledCarName>{name}</StyledCarName>
        <StyledCarPrice>PREÇO: {price}</StyledCarPrice>
        <StyledCarDescription>DESCRIÇÃO: {description}</StyledCarDescription>
        <StyledCarYear>ANO: {year}</StyledCarYear>
      </CardContainer>
    </>
  )
}
