(function(){

angular.module("turtleFacts").controller("listCtrl", ListController);
     
     ListController.$inject = ['quizMetrics','DataService']

     function ListController(quizMetrics,DataService)
     {
        var vm =this;

       vm.quizMetrics=quizMetrics;
       
       vm.data=DataService.turtlesData;
       vm.search="";
       vm.activeTurtle={};
       vm.activateQuiz = activateQuiz;
       vm.changeActiveTurtle=changeActiveTurtle;
        
        function activateQuiz()
        {
        	quizMetrics.changeState(true);
        }

       function changeActiveTurtle(index)
       {
          vm.activeTurtle = index;
        }
       
     }

     

})();
