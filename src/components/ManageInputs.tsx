import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { FaGripVertical, FaTrash } from 'react-icons/fa'

import { InputConfig } from '../libs/form-builder/types'
import { componentTypeToLabel } from '../libs/form-builder/constants'
import { RoundButton } from './Button'

type Props = {
  inputs: InputConfig[]
  setInputs: (inputs: InputConfig[]) => void
  onRemove: (key: string) => void
}

const ManageInputs = ({ inputs, setInputs, onRemove }: Props) => {
  const isEmpty = inputs.length === 0

  function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const newInputs = reorder(inputs, result.source.index, result.destination.index)
    setInputs(newInputs)
  }

  return (
    <section className="form-group">
      {!isEmpty && <h3>Reorder and remove the inputs:</h3>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="inputs" type="list" direction="vertical">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="list-container">
              {inputs.map((input, index) => (
                <Draggable key={input.props.key} draggableId={input.props.key} index={index}>
                  {providedDrag => (
                    <div
                      {...providedDrag.dragHandleProps}
                      {...providedDrag.draggableProps}
                      ref={providedDrag.innerRef}
                      className="list-item"
                    >
                      <p className="list-item__text">
                        {input.props.label} | {componentTypeToLabel[input.type]}
                      </p>
                      <RoundButton onClick={() => onRemove(input.props.key)}>
                        <FaTrash color="#868788" />
                      </RoundButton>
                      <FaGripVertical color="#868788" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  )
}

export default ManageInputs
