import styled from 'styled-components'

import Body from '../src/components/layout/body/Body'
import Container from '../src/components/layout/container/Container'
import Input from '../src/components/input/Input'
import SavingButton from '../src/components/button/SavingButton'
import IconImages from '../src/components/iconImages/IconImages'

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
        <Container>
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
              <SavingButton>SALVAR</SavingButton>
            </SavingButtonContainer>
          </FormContainer>
        </Container>
      </Body>
    </>
  )
}
