import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import ControlledTextarea from '../input/ControlledTextarea'
import { editCarSchema } from '../../../modules/cars/car.schema'
import ButtonSave from '../button/ButtonSave'

const EditCard = ({ name, price, description, year, id }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: joiResolver(editCarSchema),
    mode: 'all'
  })

  const handleSaveEdit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(handleSaveEdit)}>
      <ControlledTextarea
        placeholder="Altere o nome"
        name="name"
        control={control}
        defaultValue={name}
      />
      <ControlledTextarea
        placeholder="Altere o preço"
        name="price"
        control={control}
        defaultValue={price}
      />
      <ControlledTextarea
        placeholder="Altere a descrição"
        name="description"
        control={control}
        defaultValue={description}
      />
      <ControlledTextarea
        placeholder="Altere o ano"
        control={control}
        name="year"
        defaultValue={year}
      />
      <ButtonSave type="submit">
        SALVAR
      </ButtonSave>
    </form>
  )
}

export default EditCard
