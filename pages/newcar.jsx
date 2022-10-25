import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { newcarSchema } from '../modules/user/newcar/newcar.schema'

import Body from '../src/components/layout/body/Body'
import ContainerPage from '../src/components/layout/container/ContainerPage'
import Input from '../src/components/input/Input'
import ButtonSave from '../src/components/button/ButtonSave'
import IconImages from '../src/components/iconImage/IconImages'

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  padding: 150px;
  margin-bottom: 10vh;
  position: relative;
`

const StyledIconArrow = styled.button`
  margin: 50px 750px 0px 0px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.background};
`

const ContainerButtonSave = styled.div`
  position: absolute;
  right: 50px;
  bottom: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`

export default function NewCar() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(newcarSchema),
    mode: 'all'
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/addnewcar`,
        data
      )
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  const handleClick = () => {
    router.push('/')
  }
  return (
    <>
      <Body>
        <ContainerPage>
          <StyledIconArrow onClick={handleClick}>
            <IconImages imageName="ArrowIcon" type="svg" />
          </StyledIconArrow>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input
                label="Nome"
                placeholder="Insira um novo nome"
                name="carModel"
                control={control}
              />
              <Input
                label="Marca"
                placeholder="Digite a marca do carro"
                name="carBrand"
                control={control}
              />
              <Input
                label="Cor"
                placeholder="Digite a cor do carro"
                name="carColor"
                control={control}
              />
              <Input
                label="Descrição"
                placeholder="Faça uma breve descrição do seu carro"
                name="carDescription"
                control={control}
              />
              <Input
                label="Ano"
                placeholder="Digite o ano no formato (YYYY)"
                name="carYear"
                control={control}
              />
              <Input
                label="Placa"
                placeholder="Digite a placa do carro"
                name="carPlate"
                control={control}
              />
              <Input
                label="Preço"
                placeholder="Digite o preço do carro"
                name="carPrice"
                control={control}
              />
              <ContainerButtonSave>
                <ButtonSave type="submit" disabled={Object.keys(errors).length > 0 || !isValid}>
                  SALVAR
                </ButtonSave>
              </ContainerButtonSave>
            </Form>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
