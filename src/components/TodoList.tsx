import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import {Todo} from './../model';
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props{
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
    <div className="container">
      <Droppable droppableId='TodoList'>
        {
          (provided,snapshot)=>(
            <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef} {...provided.droppableProps} >
              <span className="todosHeading">Active Tasks</span>
              {todos.map((todo, index)=>(
                <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                />
                ))}
                {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodoRemove'>
        {
          (provided,snapshot)=>(
            <div className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            ref={provided.innerRef} {...provided.droppableProps}>
                <span className="todosHeading">Completed Tasks</span>
                {completedTodos.map((todo,index)=>(
                    <SingleTodo
                    index={index}
                    todo={todo}
                    key={todo.id}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                    />
                  ))}
                {provided.placeholder}
            </div>
          )
        }
      </Droppable>

    </div>
  )
}

export default TodoList;
