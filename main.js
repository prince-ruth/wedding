const clock = document.getElementById('clock');
const countDown = document.getElementById('count-down');
const weddingDate = new Date('08 june 2019 10:00:00 +1');

function formatTimeNumber(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return `${number}`;
}

function timeToString(hours, minutes, seconds) {
  return `${hours}:${formatTimeNumber(minutes)}:${formatTimeNumber(seconds)}`;
}

function updateClock(clock) {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const timeString = timeToString(hours, minutes, seconds);
  clock.textContent = timeString;
}


function epochSecondsForDate(date) {
  return Math.floor(date.getTime() / 1000);
}

function formatDuration(totalSeconds) {
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / (3600 * 24));
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateCountDown(element, endDate) {
  const currentDate = new Date();
  const currentTime = epochSecondsForDate(currentDate);
  const endTime = epochSecondsForDate(endDate);
  const secondsRemaining = endTime - currentTime;
  element.textContent = formatDuration(secondsRemaining);
}

setInterval(() => {
  updateClock(clock);
  updateCountDown(countDown, weddingDate);
}, 1000);


jQuery(($) => {
  countdownManager.init();
});


$("a[href^='#']").click(function (e) {
  let
    yPos;
  let yInitPos;
  let target = ($(`${$(this).attr('href')}:first`));


  e.preventDefault();

  yInitPos = $(window).scrollTop();


  window.location.hash = $(this).attr('href');


  $(window).scrollTop(yInitPos);


  target = ($(`${$(this).attr('href')}:first`));


  if (target.length == 0) {
    target = ($(`a[name=${$(this).attr('href').replace(/#/gi, '')}]:first`));
  }


  if (target.length == 1) {
    yPos = target.offset().top;


    if (window.matchMedia('(min-width: 1000px)').matches) {
      $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
    } else {
      $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
    }
  }
});


$(document).ready(() => {
  $(window).bind('scroll', () => {
    const navHeight = $(window).height() - 81;
			 if ($(window).scrollTop() > navHeight) {
				 $('.up').addClass('fixed');
      $('#top-anchor').css({ bottom: '30px' });
			 } else {
				 $('.up').removeClass('fixed');
      $('#top-anchor').css({ bottom: '-100px' });
			 }
  });
});


let menu_close = 0;

$('.menu').click(() => {
  if (menu_close == 0) {
		      $('#burgerone').css({ marginTop: '9px', transform: 'rotateZ(45deg)' });
		      $('#burgerthree').css({ marginTop: '9px', transform: 'rotateZ(-45deg)' });
		      $('#burgertwo').css({ opacity: '0' });
    $('nav ul').animate({ left: '0' }, 500);
    menu_close = 1;
  } else {
		      $('#burgerone').css({ transform: 'rotateZ(0deg)', marginTop: '0' });
     		  $('#burgerthree').css({ transform: 'rotateZ(0deg)', marginTop: '18px' });
		      $('#burgertwo').css({ opacity: '1' });
    $('nav ul').animate({ left: '-100%' }, 500);
    menu_close = 0;
  }
});

$('nav li').click(() => {
  $('#burgerone').css({ transform: 'rotateZ(0deg)', marginTop: '0' });
  $('#burgerthree').css({ transform: 'rotateZ(0deg)', marginTop: '18px' });
  $('#burgertwo').css({ visibility: 'visible' });
  $('#burgertwo').css({ opacity: '1' });

  menu_close = 0;
});
