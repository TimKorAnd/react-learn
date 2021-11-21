import React from 'react';



export default function TodoItem({todo, index}: TodoItemProp) {
    return (
        <li>
            <strong>{++index}</strong>
            {todo.title}
        </li>
    )
}
