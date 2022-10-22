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

const StyledIconArrow = styled.div`
  margin: 50px 750px 0px 0px;
  cursor: pointer;
`

const ContainerButtonSave = styled.div`
  padding-left: 240px;
  margin-top: 50px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default function NewCar() {
  return (
    <>
      <Body>
        <ContainerPage>
          <StyledIconArrow>
            <IconImages imageName="ArrowIcon" type="svg" />
          </StyledIconArrow>
          <FormContainer>
            <Form>
              <Input label="Nome" name="carModel" />
              <Input label="Marca" name="carBrand" />
              <Input label="Cor" name="carColor" />
              <Input label="Ano" name="carYear" />
              <Input label="Placa" name="carBoard" />
            </Form>
            <ContainerButtonSave>
              <ButtonSave>SALVAR</ButtonSave>
            </ContainerButtonSave>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
