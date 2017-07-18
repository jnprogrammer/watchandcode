// Code goes here

var todoList = {
  todos: ['item 1','item 2','item 3'],
  displayTodos:function(){
    console.log('My Todos', this.todos);
  },
  addTodo:function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo:function(pos,newVal){
    this.todos[pos]=newVal;
    this.displayTodos();
  },
  deleteTodo:function(pos){
    this.todos.splice(pos,1);
    this.displayTodos();
  }
  
};
