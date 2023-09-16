// $.getJSON('https://api.unsplash.com/users/bavalos6/photos/?client_id=uYwGChTskwNyY4Fq0jRJuRYqxx3vr3q6p_Z-5Q4LejE',
// function(data){
//   console.log(data);
//
//   $.each(data, function(index, value){
//     console.log(value);
//
//     var name = value.user.name;
//     var bio = value.user.bio;
//     var imageURL = value.urls.regular;
//
//     // $('.name').text(name);
//     // $('.bio').text(bio);
//     // $('.image img').attr('src', imageURL);
// 		var image = document.getElementById("Foton");
// 		image.innerHTML = '<img src="' + imageURL + '"/></div>';
//     // $('.output').append('<div class="name">' + name + '</div><div class="bio">' + bio + '</div><div class="image"><img src="' + imageURL + '"/></div>')
//   });
// });


/* LIST OF VARIABLES */

var questionState = 0; //Keeps track of users place in quiz
var quizActive = true; //True until last question is answered
var cityArea = 0; //0-None 1-East 2-Northeast 3-West 4-Cd.Juarez
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var user_email = document.getElementById("user_email");
var mobile_number = document.getElementById("mobile_number");

var userStats = [
  0, //cute
  0, //spooky
  0, //lame
  0, //nerdy
  0, //silly
  0, //cool
];
var ubicacion;

var tempStats = userStats; //Holds stat increases relating to user selection

/* QUIZ BUILDING VARIABLES */

//The following array contains all question text elements

var questionText = [
  "¿En que zona te identificarias?", //q1
  "It's snack time. What are you eating?", //q2
  "What TV show did you most look forward to after school?", //q3
  "What toy could you not put down growing up?", //q4
  "What did you listen to in the 90s/early 00s?", //q5
  "What was your go to computer program at school?" //q6
];

//The following array contains all answer text elements for each question

var answerText = [ //question 1 answers
  ["East",
    "Northeast",
    "West",
    "Cd.Juarez"
  ],

  //question 2 answers
  ["Yowie",
    "Curly Wurlys and Chomps",
    "Mamee Noodles",
    "Fruit",
    "Sunnyboys",
    "Fruit rollups"
  ],

  //question 3 answers
  ["Round the Twist",
    "Rugrats",
    "Neighbours",
    "Are You Afraid of the Dark?",
    "Rocko's Modern Life",
    "Art Attack"
  ],

  //question 4 answers
  ["Cabbage Patch Doll",
    "Rubix Cube",
    "Slime",
    "Hot Wheels",
    "Mighty Max/Polly Pocket",
    "Tamagotchi"
  ],

  //question 5 answers
  ["Spice Girls",
    "I didn't listen to music",
    "rage",
    "Backstreet Boys",
    "The sweet sound of dial up",
    "So Fresh CDs"
  ],

  //question 6 answers
  ["Kid Pix",
    "Minesweeper",
    "Lemmings",
    "Zoombinis",
    "Microsoft Paint",
    "Pinball"
  ]
]

//The following array contains all personality stat increments for each answer of every question

var answerValues = [ //question 1 answer values
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ],

  //question 2 answer values
  [
    [0, 3, 0, 2, 0, 1],
    [2, 0, 0, 0, 3, 1],
    [0, 2, 0, 0, 1, 3],
    [2, 0, 3, 1, 0, 0],
    [1, 0, 0, 3, 2, 0],
    [3, 0, 1, 0, 2, 0]
  ],

  //question 3 answer values
  [
    [0, 1, 0, 0, 3, 2],
    [3, 0, 2, 0, 1, 0],
    [1, 0, 3, 0, 2, 0],
    [0, 3, 0, 1, 2, 0],
    [0, 0, 0, 2, 1, 3],
    [0, 0, 0, 3, 1, 2]
  ],

  //question 4 answer values
  [
    [2, 0, 3, 0, 1, 0],
    [0, 1, 0, 3, 0, 2],
    [0, 3, 2, 0, 0, 1],
    [0, 0, 0, 2, 1, 3],
    [2, 0, 0, 0, 3, 1],
    [3, 0, 0, 2, 1, 0]
  ],

  //question 5 answer values
  [
    [3, 0, 0, 0, 2, 1],
    [0, 2, 3, 1, 0, 0],
    [0, 0, 0, 2, 1, 3],
    [1, 3, 0, 0, 0, 2],
    [0, 0, 0, 3, 2, 1],
    [1, 0, 2, 0, 3, 0]
  ],

  //question 6 answer values
  [
    [1, 0, 0, 3, 2, 0],
    [0, 3, 0, 2, 0, 1],
    [3, 1, 0, 0, 0, 2],
    [1, 0, 0, 2, 3, 0],
    [0, 0, 3, 2, 1, 0],
    [0, 0, 1, 2, 0, 3]
  ]
]

/* SHORTCUT VARIABLES */
//so I don't have to keep typing

var results = document.getElementById("results");
var quiz = document.getElementById("quiz");
var body = document.body.style;
var printResult = document.getElementById("topScore");
var printCampus = document.getElementById("campus");
var buttonElement = document.getElementById("button");

/* QUIZ FUNCTIONALITY */

buttonElement.addEventListener("click", changeState); //Add click event listener to main button

/* This function progresses the user through the quiz */
var buttonInfo = document.getElementById("buttonInfo");

buttonInfo.addEventListener("click", changeToQuiz);

function changeToQuiz() {
  document.getElementById("questions").innerHTML = "Selecciona la respuesta con la que más te identifiques";
  document.getElementById("button").style.display = 'inline';
}

function exportData(campus, lider) {
  // var firstname = document.getElementById("firstname");
  // var lastname = document.getElementById("lastname");
  // var user_email = document.getElementById("user_email");
  // var mobile_number = document.getElementById("mobile_number");
  data = 'firstname,lastname,email,mobile,campus,lider' + '\r\n' + firstname.value + ',' + lastname.value + ',' + user_email.value + ',' + mobile_number.value + ',' + campus + ',' + lider;

  var exportLink = document.createElement('a');
  exportLink.setAttribute('href', 'data:text/csv;base64,' + window.btoa(data));
  exportLink.appendChild(document.createTextNode('test.csv'));
  document.getElementById('results').appendChild(exportLink);
}

function changeState() {

  updatePersonality(tempStats); //Adds the values of the tempStats to the userStats
  if (quizActive) {

    /*True while the user has not reached the end of the quiz */

    initText(questionState); //sets up next question based on user's progress through quiz
    questionState++; //advances progress through quiz

    buttonElement.disabled = true; //disables button until user chooses next answer
    buttonElement.innerHTML = "Please select an answer";
    buttonElement.style.opacity = 0.7;

  } else {

    /*All questions answered*/

    setCustomPage(); //runs set up for result page
  }
}

/* This function determines the question and answer content based on user progress through the quiz */

function initText(question) {

  var answerSelection = ""; //text varialbe containting HTML code for the radio buttons' content

  /* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/

  for (i = 0; i < answerText[question].length; i++) {

    answerSelection += "<li><input type='radio' name='question" +
      (question + 1) + "' onClick='setAnswer(" + i + ")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
  }

  document.getElementById("questions").innerHTML = questionText[question]; //set question text
  document.getElementById("answers").innerHTML = answerSelection; //set answer text
}

/* This function is called when a user selects an answer, NOT when answer is submitted */

function setAnswer(input) {
  if (questionState == 1) {
    switch (input) {
      case 0: //East
        cityArea = 1;
        break;
      case 1: //Northeast
        cityArea = 2;
        break;
      case 2: //West
        cityArea = 3;
        break;
      case 3: //Cd. Juarez
        cityArea = 4;
        break;
    }
  }
  clearTempStats(); //clear tempStats in case user reselects their answer

  tempStats = answerValues[questionState - 1][input]; //selects personality values based on user selection

  if (questionState < questionText.length) {

    /*True while the user has not reached the end of the quiz */

    buttonElement.innerHTML = "Continue";
    buttonElement.disabled = false;
    buttonElement.style.opacity = 1;

  } else {

    /*All questions answered - QUESTION TIME IS OVER!*/

    quizActive = false;
    buttonElement.innerHTML = "Display your custom website"
    buttonElement.disabled = false;
    buttonElement.style.opacity = 1;
  }
}

/* This function sets tempStats to 0 */

function clearTempStats() {

  tempStats = [0, 0, 0, 0, 0, 0];
}

/*This function adds the values of the tempStats to the userStats based on user selection */

function updatePersonality(tempStats) {
  for (i = 0; i < userStats.length; i++) {
    userStats[i] += tempStats[i];
  }
}

/* This function determines the highest personality value */

function setCustomPage() {

  var highestStatPosition = 0; //highest stat defaults as 'cute'

  /* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */

  for (i = 1; i < userStats.length; i++) {

    if (userStats[i] > userStats[highestStatPosition]) {
      highestStatPosition = i;
    }
  }

  displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered

  /* Hides the quiz content, shows results content */
  quiz.style.display = "none";
}

/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */

/* The following code manipulates the CSS based on the personality results */

function displayCustomPage(personality) {
  console.log(cityArea);
  console.log(personality);
  //EAST Leaders
  if (cityArea == 1) {
    switch (personality) {
      case 0: //cute code
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Betzabe Avalos";
        // printCampus.innerText = "East";
        exportData("East", "Betzabe Avalos");
        break;

      case 1: //spooky
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Rosario Avalos";
        // printCampus.innerText = "East";
        exportData("East", "Rosario Avalos");
        break;

      case 2: //lame
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Ana Avalos";
        // printCampus.innerText = "East";
        exportData("East", "Ana Avalos");
        break;

      case 3: //nerdy
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Claudia Nieto";
        // printCampus.innerText = "East";
        exportData("East", "Claudia Nieto");
        break;

      case 4: //silly
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Jovanny Hinojos";
        // printCampus.innerText = "East";
        exportData("East", "Jovanny Hinojos");
        break;

      case 5: //cool
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Kevin Cabral";
        // printCampus.innerText = "East";
        exportData("East", "Kevin Cabral");
        break;

      default:
        document.getElementById("error").style.display = "inline-block";
    }
  }
  //NORTHEAST Leaders
  else if (cityArea == 2) {
    switch (personality) {
      case 0: //cute code
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Chris Acosta";
        // printCampus.innerText = "Northeast";
        exportData("Northeast", "Chris Acosta");
        break;

      case 1: //spooky
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Abraham Alvarado";
        // printCampus.innerText = "Northeast";
        exportData("Northeast", "Abraham Alvarado");
        break;

      case 2: //lame
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Jesus Lozano";
        // printCampus.innerText = "Northeast";
        exportData("Northeast", "Jesus Lozano");
        break;

      case 3: //nerdy
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Adray Carrillo";
        // printCampus.innerText = "Northeast";
        exportData("Northeast", "Adray Carrillo");
        break;

      case 4: //silly
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Abby Talavera";
        // printCampus.innerText = "Northeast";
        exportData("Northeast", "Abby Talavera");
        break;

        // case 5: //cool
        //   results.style.display = "inline-block";
        //   results.classList.add("cool");
        //   body.background = "none";
        //   // body.backgroundImage = "url('https://web.archive.org/web/20091027004451/http://hk.geocities.com/cs_unknowman/Background/background.gif')";
        //   body.backgroundRepeat = "repeat";
        //   // body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
        // 	printResult.innerText = "Kevin Cabral";
        //   printCampus.innerText = "East";
        //   break;

      default:
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Adria Medina";
        // printCampus.innerText = "Northeast";
        exportData("Northeast", "Adria Medina");
        break;
    }
  }
  //WEST Leaders
  else if (cityArea == 3) {
    switch (personality) {
      case 0: //cute code
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Alexis Olivas";
        // printCampus.innerText = "West";
        exportData("West", "Alexis Olivas");
        break;

      case 1: //spooky
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Rodrigo Martinez";
        // printCampus.innerText = "West";
        exportData("West", "Rodrigo Martinez");
        break;

      case 2: //lame
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Rosalva Varela";
        // printCampus.innerText = "West";
        exportData("West", "Rosalva Varela");
        break;

      case 3: //nerdy
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Nayo Martinez";
        // printCampus.innerText = "West";
        exportData("West", "Nayo Martinez");
        break;

        // case 4: //silly
        //   results.style.display = "inline-block";
        //   results.classList.add("silly");
        //   body.background = "none";
        //   // body.backgroundImage = "url('https://web.archive.org/web/20091026075928/http://geocities.com/MotorCity/Pit/2600/pic/rainbow.gif')";
        //   body.backgroundRepeat = "repeat";
        //   // body.cursor = "url(https://web.archive.org/web/20090731114836/http://hk.geocities.com/godofcat/mcmug/cursor1p2.gif), auto";
        //   printResult.innerText = "Jovanny Hinojos";
        //   printCampus.innerText = "East";
        //   exportData("East", "Betzabe Avalos");
        //   break;
        //
        // case 5: //cool
        //   results.style.display = "inline-block";
        //   results.classList.add("cool");
        //   body.background = "none";
        //   // body.backgroundImage = "url('https://web.archive.org/web/20091027004451/http://hk.geocities.com/cs_unknowman/Background/background.gif')";
        //   body.backgroundRepeat = "repeat";
        //   // body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
        //   printResult.innerText = "Kevin Cabral";
        //   printCampus.innerText = "East";
        //   exportData("East", "Betzabe Avalos");
        //   break;

      default:
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Mike Richards";
        // printCampus.innerText = "West";
        exportData("West", "Mike Richards");
        break;
        // document.getElementById("error").style.display = "inline-block";
    }
  }

  //JUAREZ Leaders
  else if (cityArea == 4) {
    switch (personality) {
      case 0: //cute code
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Lalo Campos";
        // printCampus.innerText = "Juarez";
        exportData("Juarez", "Lalo Campos");
        break;

      case 1: //spooky
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Karen Leon";
        // printCampus.innerText = "Juarez";
        exportData("Juarez", "Karen Leon");
        break;

      case 2: //lame
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Mariel Felix";
        // printCampus.innerText = "Juarez";
        exportData("Juarez", "Mariel Felix");
        break;

      case 3: //nerdy
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Raul Hernandez";
        // printCampus.innerText = "Juarez";
        exportData("Juarez", "Raul Hernandez");
        break;

        // case 4: //silly
        //   results.style.display = "inline-block";
        //   results.classList.add("silly");
        //   body.background = "none";
        //   // body.backgroundImage = "url('https://web.archive.org/web/20091026075928/http://geocities.com/MotorCity/Pit/2600/pic/rainbow.gif')";
        //   body.backgroundRepeat = "repeat";
        //   // body.cursor = "url(https://web.archive.org/web/20090731114836/http://hk.geocities.com/godofcat/mcmug/cursor1p2.gif), auto";
        //   printResult.innerText = "Jovanny Hinojos";
        //   printCampus.innerText = "East";
        //   exportData("East", "Betzabe Avalos");
        //   break;
        //
        // case 5: //cool
        //   results.style.display = "inline-block";
        //   results.classList.add("cool");
        //   body.background = "none";
        //   // body.backgroundImage = "url('https://web.archive.org/web/20091027004451/http://hk.geocities.com/cs_unknowman/Background/background.gif')";
        //   body.backgroundRepeat = "repeat";
        //   // body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
        //   printResult.innerText = "Kevin Cabral";
        //   printCampus.innerText = "East";
        //   exportData("East", "Betzabe Avalos");
        //   break;

      default:
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Gabo Isaac";
        // printCampus.innerText = "Juarez";
        exportData("Juarez", "Gabo Isaac");
        break;
        // document.getElementById("error").style.display = "inline-block";
    }
  } else {
    switch (personality) {
      case 0: //cute code
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Chris Acosta";
        // printCampus.innerText = "Random";
        exportData("Random", "Betzabe Avalos");
        break;

      case 1: //spooky
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Abraham Alvarado";
        // printCampus.innerText = "Random";
        exportData("Random", "Betzabe Avalos");
        break;

      case 2: //lame
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Jesus Lozano";
        // printCampus.innerText = "Random";
        exportData("Random", "Betzabe Avalos");
        break;

      case 3: //nerdy
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Adray Carrillo";
        // printCampus.innerText = "Random";
        exportData("Random", "Betzabe Avalos");
        break;

      case 4: //silly
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Abby Talavera";
        // printCampus.innerText = "Random";
        exportData("Random", "Betzabe Avalos");
        break;

        // case 5: //cool
        //   results.style.display = "inline-block";
        //   results.classList.add("cool");
        //   body.background = "none";
        //   // body.backgroundImage = "url('https://web.archive.org/web/20091027004451/http://hk.geocities.com/cs_unknowman/Background/background.gif')";
        //   body.backgroundRepeat = "repeat";
        //   // body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
        // 	printResult.innerText = "Kevin Cabral";
        //   printCampus.innerText = "East";
        //   break;

      default:
        results.style.display = "inline-block";
        results.classList.add("vinonuevo");
        body.background = "linear-gradient(to bottom, #000000 0%, #0b2d39 99%)";
        body.backgroundRepeat = "repeat";
        // printResult.innerText = "Adria Medina";
        // printCampus.innerText = "Random";
        exportData("Random", "Betzabe Avalos");
        break;
    }
  }
}

(async()=> {

})
