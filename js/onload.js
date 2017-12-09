

var saved = localStorage.getItem('todos');
var todos = (localStorage.getItem('todos')!==null) ? JSON.parse(saved) : [  ];
  window.onload=function(){
    
    };

        angular.forEach(todos, function(todo){
               if(todo.param)
                    todo.param = false;
        });
          
          localStorage.setItem('todos', JSON.stringify(todos));

