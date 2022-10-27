import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { editCarSchema } from '../../../modules/cars/car.schema'

import Body from '../layout/body/Body'
import Input from '../input/Input'
import ButtonAdd from '../button/ButtonAdd'

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  padding: 150px;
  margin-bottom: 10vh;
  position: relative;

  @media (max-width: 810px) {
    padding: 100px;
  }

  @media (max-width: 650px) {
    padding: 80px;
    padding-bottom: 100px;
  }

  @media (max-width: 650px) {
    padding: 50px;
    padding-bottom: 100px;
  }

  @media (max-width: 530px) {
    padding: 20px;
    padding-bottom: 100px;
  }

  @media (max-width: 470px) {
    padding: 10px;
    padding-bottom: 100px;
  }
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

  @media (max-width: 470px) {
    width: 400px;
  }

  @media (max-width: 445px) {
    width: 350px;
  }

  @media (max-width: 390px) {
    width: 280px;
  }

  @media (max-width: 330px) {
    width: 200px;
  }
`

export default function EditCardRouter({
  id,
  name,
  price,
  description,
  year,
  brand,
  carColor,
  plate,
  onSave
}) {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    resolver: joiResolver(editCarSchema),
    mode: 'all'
  })

  const handleForm = async ({
    carModel,
    carBrand,
    carColor,
    carPlate,
    carPrice,
    carDescription,
    carYear
  }) => {
    try {
      const { status } = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cars/carfilter`,
        {
          _id: id,
          carModel,
          carBrand,
          carColor,
          carPlate,
          carPrice,
          carDescription,
          carYear
        }
      )
      if (status === 201) {
        router.push('/')
        onSave()
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return (
    <>
      <Body>
        <FormContainer>
          <Form onSubmit={handleSubmit(handleForm)}>
            <Input
              label="Nome"
              placeholder="Insira um novo nome"
              name="carModel"
              control={control}
              defaultValue={name}
            />
            <Input
              label="Marca"
              placeholder="Digite a marca do carro"
              name="carBrand"
              control={control}
              defaultValue={brand}
            />
            <Input
              label="Cor"
              placeholder="Digite a cor do carro"
              name="carColor"
              control={control}
              defaultValue={carColor}
            />
            <Input
              label="Descrição"
              placeholder="Faça uma breve descrição do seu carro"
              name="carDescription"
              control={control}
              defaultValue={description}
            />
            <Input
              label="Ano"
              placeholder="Digite o ano no formato (YYYY)"
              name="carYear"
              control={control}
              defaultValue={year}
            />
            <Input
              label="Placa"
              placeholder="Digite a placa do carro"
              name="carPlate"
              control={control}
              defaultValue={plate}
            />
            <Input
              label="Preço"
              placeholder="Digite o preço do carro"
              name="carPrice"
              control={control}
              defaultValue={price}
            />
            <ContainerButtonSave>
              <ButtonAdd type="submit">SALVAR</ButtonAdd>
            </ContainerButtonSave>
          </Form>
        </FormContainer>
      </Body>
    </>
  )
}
