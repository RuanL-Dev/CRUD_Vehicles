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
              <Input label="Nome" />
              <Input label="Marca" />
              <Input label="Cor" />
              <Input label="Ano" />
              <Input label="Placa" />
            </Form>
            <SavingButtonContainer>
              <ButtonSave>SALVAR</ButtonSave>
            </SavingButtonContainer>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
