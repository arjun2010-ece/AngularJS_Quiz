(function(){

   angular.module("turtleFacts").controller("quizCtrl", QuizController);

   QuizController.$inject = ['quizMetrics','DataService'];
   

   function QuizController(quizMetrics,DataService)
   {
   	var vm=this;
	   vm.quizMetrics=quizMetrics;
      vm.dataService=DataService;
      vm.activeQuestion=0;
      vm.questionAnswered=questionAnswered;
      vm.setActiveQuestion = setActiveQuestion;
      vm.selectAnswer = selectAnswer;

      var numQuestionsAnswered = 0;
      vm.error=false;
      vm.finalise=false;

      function setActiveQuestion(index)
      {

         if(index === undefined)
         {
               var breakout = false;
               var quizLength = DataService.quizQuestions.length-1;
               while(!breakout)
               {
                  vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion:0 ;

                   if(vm.activeQuestion===0)
                   {
                     vm.error=true;
                   }
                  if(DataService.quizQuestions[vm.activeQuestion].selected === null)
                     {
                           breakout=true;
                     }   


               }

         }
         else{
            vm.activeQuestion = index;
         }


      }

      function questionAnswered()
      {
         if (DataService.quizQuestions[vm.activeQuestion].selected !== null) 
         {
            numQuestionsAnswered++;
            if(numQuestionsAnswered >= DataService.quizQuestions.length)
            {
                  //finalize the quiz
                   for (var i = 0; i <= DataService.quizQuestions.length; i++)
                   {
                        if(DataService.quizQuestions[i].selected === null)
                        {
                            setActiveQuestion(i);
                            return;
                        }    
                   } 
                   vm.error=false;
                   vm.finalise=true;
                   return;
            }
         }

      	vm.setActiveQuestion();
      
      } //end of questionAnswered function
   	
      
      function selectAnswer(index)
      {
            
         DataService.quizQuestions[vm.activeQuestion].selected = index;

      }

   } //end of QuizController function


})();
