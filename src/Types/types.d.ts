type TodoItem = {
    id: number;
    completed: boolean;
    title: string;
}

type ComponentKey = {
    index: number;
}

type TodoItemProp = {
    todo: TodoItem;
} & ComponentKey;
