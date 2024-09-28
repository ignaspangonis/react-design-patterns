type Props = {
  inputs: React.ReactNode[]
}

const DynamicForm = ({ inputs }: Props) => {
  return <form className="form-group">{inputs}</form>
}

export default DynamicForm
