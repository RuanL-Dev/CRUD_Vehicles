import ContainerPage from '../src/components/layout/container/ContainerPage'
import SearchInput from '../src/components/search/SearchInput'
import Button from '../src/components/button/ButtonAdd'
import Body from '../src/components/layout/body/Body'
import Post from '../src/components/cards/Post'

function HomePage() {
  return (
    <>
      <Body>
        <ContainerPage>
          <SearchInput />
          <Button onClick="OnClick">ADICIONAR</Button>
          <Post />
        </ContainerPage>
      </Body>
    </>
  )
}

export default HomePage
