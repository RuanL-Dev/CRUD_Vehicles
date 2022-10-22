import ContainerPage from '../src/components/layout/container/ContainerPage'
import SearchInput from '../src/components/search/SearchInput'
import Button from '../src/components/button/ButtonAdd'
import Body from '../src/components/layout/body/Body'

function HomePage() {
  return (
    <>
      <Body>
        <ContainerPage>
          <SearchInput></SearchInput>
          <Button onClick="OnClick">ADICIONAR</Button>
        </ContainerPage>
      </Body>
    </>
  )
}

export default HomePage
