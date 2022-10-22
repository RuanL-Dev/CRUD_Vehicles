import styled from 'styled-components'

import IconImages from '../iconImage/IconImages'
import { SlMagnifier } from 'react-icons/Sl'

const IconImageContainer = styled.div`
  padding: 132px 0 32px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 740px;
  height: 60px;
  left: 228px;
  top: 132px;
  background-color: ${(props) => props.theme.secondary};
  padding: 10px 50px;
  border-radius: 100px;
  border: none;
  font-size: 30px;
  color: #000000;
`

const SearchInput = ({ ...props }) => {
  return (
    <>
      <IconImageContainer>
        <SlMagnifier />
        <StyledInput type="text" placeholder="Buscar" {...props}></StyledInput>
        <IconImages imageName="FilterIcon" type="svg" />
      </IconImageContainer>
    </>
  )
}

export default SearchInput