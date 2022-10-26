import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import ControlledTextarea from '../input/ControlledTextarea'
import { editCarSchema } from '../../../modules/cars/car.schema'
import ButtonEdit from '../button/ButtonEdit'

const EditCard = ({ name, price, description, year, id }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    resolver: joiResolver(editCarSchema)
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
      <ButtonEdit type="submit" onClick={() => handleSaveEdit}>
        Salvar
      </ButtonEdit>
    </form>
  )
}

export default EditCard
