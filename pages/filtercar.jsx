import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { filterSchema } from '../modules/cars/car.schema'

import Body from '../src/components/layout/body/Body'
import ContainerPage from '../src/components/layout/container/ContainerPage'
import Input from '../src/components/input/Input'
import ButtonSave from '../src/components/button/ButtonSave'
import IconImages from '../src/components/iconImage/IconImages'

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  padding: 150px;
  margin-bottom: 5vh;
  position: relative;
`

const StyledArrow = styled.button`
  margin: 50px 750px 0px 0px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.background};
`

const SavingButtonContainer = styled.div`
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

const PriceForm = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  max-width: 450px;
`

export default function FilterCar() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(filterSchema),
    mode: 'all'
  })
  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cars/carfilter`,
        data
      )
      if (status === 200) {
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
          <StyledArrow onClick={handleClick}>
            <IconImages imageName="ArrowIcon" type="svg" />
          </StyledArrow>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input
                label="Marca"
                placeholder="Digite a marca do carro"
                name="carBrand"
                control={control}
              />
              <Input
                label="Cor"
                placeholder="Digite a cor do carro"
                name="carColour"
                control={control}
              />
              <Input
                label="Ano"
                placeholder="Digite o ano no formato (YYYY)"
                name="carYear"
                control={control}
              />
              <PriceForm>
                <Input label="Preço mín." placeholder="(R$)" name="LowestPrice" control={control} />
                <Input
                  label="Preço máx."
                  placeholder="(R$)"
                  name="HighestPrice"
                  control={control}
                />
              </PriceForm>
              <SavingButtonContainer>
                <ButtonSave type="submit" disabled={Object.keys(errors).length > 0 || !isValid}>
                  SALVAR
                </ButtonSave>
              </SavingButtonContainer>
            </Form>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
