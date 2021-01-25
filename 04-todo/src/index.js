import './styles.css';

import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);

localStorage.setItem('mi-key', 'abc123');