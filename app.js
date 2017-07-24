// Code goes here

var todoList = {
  todos: [],
  displayTodos:function(){
    
    if(this.todos.length === 0){
      console.log("Your todo list is empty")
    }else{
      console.log('My Todos:');
      for(var i= 0 ; i < this.todos.length;i++){
        if(this.todos[i].completed === true){
          console.log("(X)",this.todos[i].todoText);
        }else{
          console.log("( )",this.todos[i].todoText);
        }
      }
    }
  },
  addTodo:function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo:function(pos,todoText){
   // this.todos[pos]=todoText;
   this.todos[pos].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo:function(pos){
    this.todos.splice(pos,1);
    this.displayTodos();
  },
  toggleCompleted:function(pos){
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll:function(){
    var totalTodos = this.todos.length, completedTodos = 0;

    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    //case 1: if everything is true than toggle to false.
    if(completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false; 
      }
  //case 2: Otherwise, make everything true;
    }else{
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }

};


var handlers = {
  displayTodos:function(){
  todoList.displayTodos();
  },
  addTodo:function(){
  var addTodoTextInput = document.getElementById('addTodoTextInput');
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = '';
  },
  changeTodo:function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
    changeTodoPositionInput.value='';
    changeTodoTextInput.value ='';
  },
  deleteTodo:function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll:function(){
  todoList.toggleAll();
  }
};