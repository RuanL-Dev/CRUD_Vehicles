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
    resolver: joiResolver(editCarSchema),
    mode: 'all'
  })

  const handleSaveEdit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(handleSaveEdit)}>
      <ControlledTextarea
        placeholder="Digite o dado correto"
        name="name"
        control={control}
        defaultValue={name}
      />
      <ControlledTextarea
        placeholder="Digite o dado correto"
        name="price"
        control={control}
        defaultValue={price}
      />
      <ControlledTextarea
        placeholder="Digite o dado correto"
        name="description"
        control={control}
        defaultValue={description}
      />
      <ControlledTextarea control={control} name="year" defaultValue={year} />
      <ButtonEdit disabled={!isValid}>Salvar</ButtonEdit>
    </form>
  )
}

export default EditCard
