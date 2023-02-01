var descriptionEl = $('.description');
var saveButtonEl = $('.btn');
var pastTimeEl = $('.past');
var presentTimeEl = $('.present');
var futureTimeEl = $('.future');
var currentDateEl = $('#currentDay');
var rowEl = $('.row');
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
var todaysTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

var input9 = $('#9 textarea');
var input10 = $('#10 textarea');
var input11 = $('#11 textarea');
var input12 = $('#12 textarea');
var input13 = $('#13 textarea');
var input14 = $('#14 textarea');
var input15 = $('#15 textarea');
var input16 = $('#16 textarea');
var input17 = $('#17 textarea');


// Calling the function that contains all of the other functions within the page.


  
  displayTime()
  
  function displayTime() {
    var todaysTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDateEl.text(todaysTime);
    console.log(todaysTime)
  }
  
  // status();
  // function status() {
  // currentTime = dayjs().format('hh').parseInt();

  // if (currentTime > timeEl.child['']) {
  //   timeEl.$(this).addClass(".past")
  //   }
  //   else if (currentTime < timeEl.child['']) {
  //       timeEl.$(this).addClass(".future")
  //     }
  //   else {
  //     timeEl.$(this).addClass('.present')
  //   };


    $(rowEl).each(function() {
      var todaysTime = dayjs().format('H');
      currentDateEl.innerText = todaysTime
      console.log(todaysTime);
      var specificHour = $(this).attr('id');

      if (specificHour < todaysTime) {
        $(this).addClass('past')
      } else if (specificHour > todaysTime) {
        $(this).addClass('future')
      } else if (specificHour == todaysTime) {
        $(this).addClass('present')
      }
      }
    );
    
    saveButtonEl.click(function() {
    var dataValue = $(this).siblings('.description').val();
    var currentDateEl = $(this).parent().attr('id');
    var inputData = JSON.parse(localStorage.getItem('taskList'))
     if (!inputData) {
       inputData = {};
     }
    inputData[currentDateEl] = dataValue
    localStorage.setItem('taskList', JSON.stringify(inputData));
  });
  


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
