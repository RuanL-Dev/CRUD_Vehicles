import { useState } from 'react'
import styled from 'styled-components'
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { newcarSchema } from '../modules/user/newcar.schema'

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
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(newcarSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }
  console.log(errors)
  return (
    <>
      <Body>
        <ContainerPage>
          <StyledIconArrow>
            <IconImages imageName="ArrowIcon" type="svg" />
          </StyledIconArrow>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input label="Nome" name="carModel" {...register('carModel')} />
              <Input label="Marca" name="carBrand" {...register('carBrand')} />
              <Input label="Cor" name="carColor" {...register('carColor')} />
              <Input label="Ano" placeholder="(YYYY)" name="carYear" {...register('carYear')} />
              <Input label="Placa" name="carPlate" {...register('carPlate')} />
              <ContainerButtonSave>
                <ButtonSave type="submit">SALVAR</ButtonSave>
              </ContainerButtonSave>
            </Form>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
