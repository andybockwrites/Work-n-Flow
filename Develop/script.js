var descriptionEl = $('.description');
var saveButtonEl = $('.btn');
var pastTimeEl = $('.past');
var presentTimeEl = $('.present');
var futureTimeEl = $('.future');
var currentDateEl = $('#currentDay');
var rowEl = $('.row');
var hour = $('.hour');

var input9 = $('#9 textarea')
var input10 = $('#10 textarea')
var input11 = $('#11 textarea')
var input12 = $('#12 textarea')
var input13 = $('#13 textarea')
var input14 = $('#14 textarea')
var input15 = $('#15 textarea')
var input16 = $('#16 textarea')
var input17 = $('#17 textarea')


$(document).ready(function () {
  var inputData = JSON.parse(localStorage.getItem('taskList'));
  console.log(inputData);

  if (inputData){
    input9.text(inputData['9'])
    input10.text(inputData['10'])
    input11.text(inputData['11'])
    input12.text(inputData['12'])
    input13.text(inputData['13'])
    input14.text(inputData['14'])
    input15.text(inputData['15'])
    input16.text(inputData['16'])
    input17.text(inputData['17'])
}

  displayTime()
  function displayTime() {
    var todaysTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDateEl.text(todaysTime);
    console.log(todaysTime)
  }
  
    $(rowEl).each(function() {
      var todaysTime = parseInt(dayjs().format('H'));
      currentDateEl.innerText = todaysTime
      console.log(todaysTime);
      var specificHour = parseInt($(this).attr('id'));
      console.log(specificHour);
      
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
   })});