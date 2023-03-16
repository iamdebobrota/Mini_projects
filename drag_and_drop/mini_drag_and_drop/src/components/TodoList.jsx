import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoList({ todos }) {
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {todos.map((todo, index) => (
            <Draggable key={todo.id} draggableId={todo.id} index={index}>
              {(provided) => (
                <li
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}>
                  {todo.title}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
export default TodoList;
