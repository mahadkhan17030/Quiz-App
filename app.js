var questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]
  var currQues = document.getElementById("currentQuestion")
  var totalQues = document.getElementById("totalQuestion")
  var dispQues = document.getElementById("displayQuestion")
  var option = document.getElementById("options")
  var maindiv = document.getElementById("maindiv")
  // Result 
  var showResult = document.getElementById("showResult")
  var displayMarks = document.getElementById("dispMarks")
  var displayGrade = document.getElementById("dispGrade")
  var displayPercentage = document.getElementById("dispPercentage")
  var displayStatus = document.getElementById("dispStatus")
  var marks = 0;
  var currentIndex = 0;
  
  function initRender() {
    totalQues.innerHTML = questions.length
    currQues.innerHTML = currentIndex + 1;
    dispQues.innerHTML = questions[currentIndex].question
    option.innerHTML = ''
    for (var i = 0; i < questions[currentIndex].options.length; i++) {
      option.innerHTML += `
          <div class="col-6 text-center">
                  <button class="rounded-pill btn-outline-warning opt"
                   onclick ="checkAns('${questions[currentIndex].options[i]}','${questions[currentIndex].correctAns}')">
           ${questions[currentIndex].options[i]}</button>
              </div>
          `
    }
  }
  initRender()
  function next() {
    if (currentIndex + 1 == questions.length) {
      showResult.style.display = "flex"
      maindiv.style.display = "none"
      var totalmarks = questions.length
      var percentage = (marks / totalmarks) * 100
        displayMarks.innerHTML = marks
      displayPercentage.innerHTML = percentage.toFixed(2)
      if(percentage > 79){
        displayGrade.innerHTML = "A+"
      }
      if(percentage >= 60 ){
        displayGrade.innerHTML = "B"
      } 
      if(percentage <= 59 ){
        displayGrade.innerHTML ="C"
      }
      if (percentage <= 50) {
        displayStatus.innerHTML = "Fail"
        displayGrade.innerHTML = "F"
      }
      else {
        displayStatus.innerHTML = "Pass"
      }
    }
    else {
      currentIndex++
      initRender()
    }
  }
  
  function checkAns(a,b){
    next()
    if(a==b){
      marks++
    }
  }
  