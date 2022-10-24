import { useRouter } from 'next/router'

import styled from 'styled-components'

import IconImages from '../iconImage/IconImages'

const IconImageContainer = styled.div`
  padding: 132px 0 32px 0;
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
const StyledFilterImage = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.background};
`

const SearchInput = ({ ...props }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/filtercar')
  }

  return (
    <>
      <IconImageContainer>
        <StyledInput type="text" placeholder="Buscar" {...props}></StyledInput>
        <StyledFilterImage onClick={handleClick}>
          <IconImages imageName="FilterIcon" type="svg" />
        </StyledFilterImage>
      </IconImageContainer>
    </>
  )
}

export default SearchInput
