// show nav bar 

$('.navbtn').click(function () {
  $('.sideNav').css({ transition: '0.5s all', transform: 'translateX(0%)' })
  console.log("hello")
});

// close nav bar

$('.closebtn').click(function () {
  $('.sideNav').css({ transition: '0.5s all', transform: 'translateX(-100%)' }

  );
});


// singer 

$('.toggle').click(function () {
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});


// countdown

window.onload = function () {
  // Set the date 
  countDownToTime("10 october 2024 9:56:00");
}

function countDownToTime(countTo) {

  let futureDate = new Date(countTo);
  futureDate = (futureDate.getTime() / 1000);

  // Get today's date and time
  let now = new Date();
  now = (now.getTime() / 1000);

  timeDifference = (futureDate - now);

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
  let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
  let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


  $(".days").html(`${days} <b>Days</b>`);
  $(".hours").html(`${hours} <b>Hours</b>`);
  $(".minutes").html(`${mins}  <b>Minutes</b> `);
  $('.seconds').html(`${secs}  <b>Seconds</b>`)


  setInterval(function () { countDownToTime(countTo); }, 1000);
}

// maximam letter 
let maxLength = 100;
$('textarea').keyup(function () {
  let length = $(this).val().length;
  let AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#letters").text("your available character finished");

  }
  else {

    $("#letters").text(AmountLeft);
  }
});
