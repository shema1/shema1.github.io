var app = angular.module( 'app', [ ] )

function TodoController ($scope) {
	$scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [  ];
	localStorage.setItem('todos', JSON.stringify($scope.todos));
    
    

	$scope.addTodo = function() {
        if($scope.todoText == '' || $scope.todoText == null){
            alert("field is empty")
        }else{
        $scope.todos.push({
            id: $scope.todos.length,
			name: $scope.todoText,
            comm:[],
            param : false,
		});
		$scope.todoText = ''; 
		localStorage.setItem('todos', JSON.stringify($scope.todos));
        }
	};
        
        $scope.removeItem = function(index) {
            $scope.todos.splice(index, 1);
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
    
        $scope.selectpost = function(index){
            var post =  $scope.todos[index];
            post.param = true;
            localStorage.setItem('todos', JSON.stringify($scope.todos));
		      }
        

    $scope.addComment = function(){
         if($scope.commText == '' || $scope.commText == null){
            alert("field is empty")
        }else{
        
        angular.forEach($scope.todos, function(comment){
             if(comment.param)
                comment.comm.push($scope.commText)
        });
        $scope.commText = ''; 
         localStorage.setItem('todos', JSON.stringify($scope.todos));
        
        }
    }
    
    $scope.removeComment = function(index,parentIndex){
        
         $scope.todos[parentIndex].comm.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        
    }
    


}


