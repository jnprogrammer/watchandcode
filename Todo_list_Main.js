// Code goes here

var todoList = {
  todos: [],
  displayTodos:function(){
    console.log('My Todos', this.todos);
  },
  addTodo:function(todoText){
    this.todos.push({
      todoText:todoText,
      completed:false
    });
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
