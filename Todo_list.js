var todos = ['item1','item2','item3'];

function displayTodos(){
    console.log('My todos:',todos);
}

function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

function changeTodo(pos,newVal){
    todos[pos] = newVal;
    displayTodos();
}

function deleteTodo(pos){
    todos.splice(pos,1);
    displayTodos();
}