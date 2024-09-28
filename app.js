//Q1 Declare an empty array using JS literal notation to store
// student names in future.
var studentNames=[];
studentNames.push("saeed");
studentNames.push("ayub");

console.log(studentNames);

//Q2 Declare an empty array using JS object notation to store
// student names in future.
var student= new Array();

student.push("kamran");
student.push("imran");

console.log(studentNames); 
//Q3 Declare and initialize a strings array.
var studentNum = ["Alice", "Bob", "Charlie", "David"];
console.log(studentNum[0]);
console.log(studentNum.length);

//Q4 Declare and initialize a numbers array.

var numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//Q5 Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];
var booleanArray = new Array(true, false, true, false);
console.log(booleanArray)

//Q6 Declare and initialize a mixed array.
var mixedArray = [42, "Hello", true, null, {name: "Alice"}, [1, 2, 3]];
var mixedArray = new Array(42, "Hello", true, null, {name: "Alice"}, [1, 2, 3]);
console.log(mixedArray)

//Q7 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:

   // Declare and initialize an array with education qualifications
   var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
   var qualificationList = document.getElementById("qualification-list");
   qualifications.forEach(function(qualification) {
       var listItem = document.createElement("li");
       // Set the text content of the list item to the qualification
       listItem.textContent = qualification;
       // Append the list item to the UL element
       qualificationList.appendChild(listItem);})

//Q8 Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


  var students = ["Alice", "Bob", "Charlie"];
  var scores = [450, 370, 485];
  
  // Total marks
  const totalMarks = 500;
  var studentList = document.getElementById("student-list");
  for (var i = 0; i < students.length; i++) {
      var name = students[i];
      var score = scores[i];
      var percentage = (score / totalMarks) * 100;
      var listItem = document.createElement("li");
      listItem.textContent = `${name}: Score = ${score}, Percentage = ${percentage.toFixed(2)}%`;
      studentList.appendChild(listItem);
  }

  //Q9 Initialize an array with color names. Display the array
// elements in your browser..................

        var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
        function displayColors() {
            const colorList = document.getElementById("color-list");
            colorList.innerHTML = ""; // Clear the list
            colors.forEach(color => {
                var listItem = document.createElement("li");
                listItem.textContent = color;
                colorList.appendChild(listItem);
            });
        }
        displayColors();
        var colorToAddBeginning = prompt("What color do you want to add to the beginning?");
        colors.unshift(colorToAddBeginning);
        displayColors();
        var colorToAddEnd = prompt("What color do you want to add to the end?");
        colors.push(colorToAddEnd);
        displayColors();

        var indexToRemove = parseInt(prompt("At which index do you want to remove colors?"));
        var numberToRemove = parseInt(prompt("How many colors do you want to remove?"));
        colors.splice(indexToRemove, numberToRemove);
        displayColors();

        var newColor1 = prompt("Enter the first color to add to the beginning:");
        var newColor2 = prompt("Enter the second color to add to the beginning:");
        colors.unshift(newColor1, newColor2);
        displayColors();

        colors.shift();
        displayColors();

        colors.pop();
        displayColors();
        var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
        var colorToAdd = prompt("What color do you want to add?");
        colors.splice(indexToAdd, 0, colorToAdd);
        displayColors();

        var indexToDelete = parseInt(prompt("At which index do you want to delete colors?"));
        var howManyToDelete = parseInt(prompt("How many colors do you want to delete?"));
        colors.splice(indexToDelete, howManyToDelete);
        displayColors();

        //Q10 Write a program to store student scores in an array &
         // sort the array in ascending order using Array’s sort
         // method.

        var scores = [85, 92, 78, 90, 66, 95, 88, 73];
        function displayScores(scoresArray) {
            const scoreList = document.getElementById("score-list");
            scoreList.innerHTML = ""; 
            scoresArray.forEach(score => {
                let listItem = document.createElement("li");
                listItem.textContent = score;
                scoreList.appendChild(listItem);
            });
        }
        displayScores(scores);

        scores.sort((a, b) => a - b);
        displayScores(scores);

//Q11  Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

 var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

 var selectedCities = cities.slice(2,4); 

 function displaySelectedCities() {
     const cityList = document.getElementById("selected-city-list");
     cityList.innerHTML = "";
     selectedCities.forEach(city => {
         var listItem = document.createElement("li");
         listItem.textContent = city;
         cityList.appendChild(listItem);
     });
 }
 displaySelectedCities();
 //Q12  Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

 var arr = ["This ", "is ", "my ", "cat"];
 var combinedString = arr.join('');

 document.getElementById("combined-string").textContent = combinedString;

 //Q15 Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  document.write('<label for="manufacturers">Choose a phone manufacturer:</label>');
  document.write('<select id="manufacturers">');

  for (var i = 0; i < manufacturers.length; i++) {
      document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
  }
  document.write('</select>');('</select>');