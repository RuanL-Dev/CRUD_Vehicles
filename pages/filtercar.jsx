import styled from 'styled-components'

import Body from '../src/components/layout/body/Body'
import ContainerPage from '../src/components/layout/container/ContainerPage'
import Input from '../src/components/input/Input'
import ButtonSave from '../src/components/button/ButtonSave'
import IconImages from '../src/components/iconImage/IconImages'

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  padding: 150px;
  margin-bottom: 10vh;
`

const StyledArrow = styled.div`
  margin: 50px 750px 0px 0px;
  cursor: pointer;
`

const SavingButtonContainer = styled.div`
  padding-left: 240px;
  margin-top: 50px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const PriceForm = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

export default function AddingCar() {
  return (
    <>
      <Body>
        <ContainerPage>
          <StyledArrow>
            <IconImages imageName="ArrowIcon" type="svg" />
          </StyledArrow>
          <FormContainer>
            <Form>
              <Input label="Marca" name="carBrand" />
              <Input label="Cor" name="carColour" />
              <Input label="Ano" name="carYear" />
              <PriceForm>
                <Input label="Preço mín." name="LowestPrice" />
                <Input label="Preço máx." name="HighestPrice" />
              </PriceForm>
              <SavingButtonContainer>
                <ButtonSave>SALVAR</ButtonSave>
              </SavingButtonContainer>
            </Form>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
