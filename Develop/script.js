var descriptionEl = $('.description');
var saveButtonEl = $('.btn');
var pastTimeEl = $('.past');
var presentTimeEl = $('.present');
var futureTimeEl = $('.future');
var currentDateEl = $('.currentDay');
var hour = $('.hour');
var nineAM = $('.description-9');
var tenA = $('.description-10');
var elevenAM = $('.description-11');
var noon = $('.description-12');
var onePM = $('.description-13');
var twoPM = $('.description-14');
var threePM = $('.description-15');
var fourPM = $('.description-16');
var fivePM = $('.description-17');

var nineContainer = $('#hour-9');
var tenContainer = $('#hour-10');
var elevenContainer = $('#hour-11');
var twelveContainer = $('#hour-12');
var thirteenContainer = $('#hour-13');
var fourteenContainer = $('#hour-14');
var fifteenContainer = $('#hour-15');
var sixteenContainer = $('#hour-16');
var seventeenContainer = $('#hour-17');

var timeEl = [
nineAM = 9,
tenAM = 10,
elevenAM = 11,
noon = 12,
onePM = 13,
twoPM = 14,
threePM = 15,
fourPM = 16,
fivePM = 17
];

var inputText9 = localStorage.setItem('nineAM', nineAM);
var inputText10 = localStorage.setItem('tenAM', tenAM);
var inputText11 = localStorage.setItem('elevenAM', elevenAM);
var inputText12 = localStorage.setItem('noon', noon);
var inputText13 = localStorage.setItem('onePM', onePM);
var inputText14 = localStorage.setItem('twoPM', twoPM);
var inputText15 = localStorage.setItem('threePM', threePM);
var inputText16= localStorage.setItem('fourPM', fourPM);
var inputText17 = localStorage.setItem('fivePM', fivePM);


// Calling the function that contains all of the other functions within the page.

function runApp() {
  
  displayTime()
  
  function displayTime() {
    var todaysTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDateEl.text(todaysTime);
  }
  
  function status() {
  currentTime = dayjs().format('hh').parseInt();

  if (currentTime > timeEl.child['']) {
    timeEl.$(this).addClass(".past")
    }
    else if (currentTime < timeEl.child['']) {
        timeEl.$(this).addClass(".future")
      }
    else {
      timeEl.$(this).addClass('.present')
    };

    
    
    saveButtonEl.on('click', function() {
      preventDefault();
      var dataValue = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(dataValue);
      if (inputData) {
        var inputData = localStorage.getItem(time, value);
        inputData[dataValue] = value;
        descriptionEl.innerText=text
        localStorage.setItem(time, value);
      };
      
      var dataValue = JSON.parse(localStorage.getItem(inputData))
      console.log(time);
      console.log(value);
    });
    
  };
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

// $('.saveBtn').on('click', function() {
//   returnText()
//   var value = $(this).siblings('.description').val();
//   var time = $(this).parent().attr('id');
//   localStorage.setItem(time, value);
//  var text = localStorage.getItem(time, value)
//  if(text){
//   inputDescription.innerText=text
//  }
//   console.log(time)
//   console.log(value)
// });