import { FormBuilder } from '../libs/form-builder/Builder'
import { InputConfig } from '../libs/form-builder/types'

type Props = {
  currentInputs: InputConfig[]
}

const DynamicForm = ({ currentInputs }: Props) => {
  const inputs = currentInputs
    .reduce(
      (formBuilder, value) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formBuilder[value.type](value.props as any),
      new FormBuilder(),
    )
    .build()

  return <form className="form-group">{inputs}</form>
}

export default DynamicForm
