import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import styled from 'styled-components'

import ContainerPage from '../src/components/layout/container/ContainerPage'
import SearchInput from '../src/components/search/SearchInput'
import Body from '../src/components/layout/body/Body'
import ButtonAdd from '../src/components/button/ButtonAdd'
import Cards from '../src/components/cards/Cards'

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 90%;
  margin-bottom: 2vh;
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

const FavoritesPostContainer = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.like ? 'grid' : 'none')};
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 43px;
`

const AnnouncesPostContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 43px;
`

const fetcher = (url) => axios.get(url).then((res) => res.data)

function HomePage() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/cars/carfilter`, fetcher)
  console.log(data)

  const router = useRouter()
  const handleClick = () => {
    router.push('/newcar')
  }
  return (
    <>
      <Body>
        <ContainerPage>
          <SearchInput />
          <ButtonAdd type="submit" onClick={handleClick}>
            ADICIONAR
          </ButtonAdd>
          <SecondaryContainer>
            <MyFavorites>
              <StyledTitleFavorites>Favoritos</StyledTitleFavorites>
            </MyFavorites>
            <FavoritesPostContainer>
              <Cards />
            </FavoritesPostContainer>
            <MyAnnounces>
              <StyledTitleAnnounces>Meus anúncios</StyledTitleAnnounces>
            </MyAnnounces>
            <AnnouncesPostContainer>
              {data?.map((post) => (
                <Cards
                  key={post._id}
                  name={post.carModel}
                  price={post.carPrice}
                  description={post.carDescription}
                  year={post.carYear}
                  id={post._id}
                ></Cards>
              ))}
            </AnnouncesPostContainer>
          </SecondaryContainer>
        </ContainerPage>
      </Body>
    </>
  )
}

export default HomePage
