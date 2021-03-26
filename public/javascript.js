// ./public/javascript.js

// Get the current username from the cookies
var user = cookie.get('user');
if (!user) {

  // Ask for the username if there is none set already
  user = prompt('Choose a username:');
  if (!user) {
    alert('We cannot work with you like that!');
  } else {
    // Store it in the cookies for future use
    cookie.set('user', user);
  }
}

var socket = io();

// The user count. Can change when someone joins/leaves
socket.on('count', function (data) {
  $('.user-count').html(data);
});

// When we receive a message
// it will be like { user: 'username', message: 'text' }
socket.on('message', function (data) {
  $('.chat').append('<p><strong>' + data.user + '</strong>: ' + data.message + '</p>');
});

// When the form is submitted
$('form').submit(function (e) {
  // Avoid submitting it through HTTP
  e.preventDefault();

  // Retrieve the message from the user
  var message = $(e.target).find('input').val();

  // Send the message to the server
  socket.emit('message', {
    user: cookie.get('user') || 'Anonymous',
    message: message
  });

  // Clear the input and focus it for a new message
  e.target.reset();
  $(e.target).find('input').focus();
});





// AUDIO

function playSound(sampleName) {
  var sample = document.getElementById(sampleName);
  if (sample.paused) {
  	sample.play();
  }else{
  	//sample.pause(); **optional pausing*
  	sample.currentTime=0
  }
  
  document.getElementById("sampleName").innerHTML=sampleName;
}

window.addEventListener('keydown', function (event) {
    var k=event.keyCode;

    if(k===65) playSound('A'); else
    if(k===66) playSound('B'); else
    if(k===67) playSound('C'); else
    if(k===68) playSound('D'); else
    if(k===69) playSound('E'); else
    if(k===70) playSound('F'); else
    if(k===71) playSound('G'); else
    if(k===72) playSound('H'); else
    if(k===73) playSound('I'); else
    if(k===74) playSound('J'); else
    if(k===75) playSound('K'); else
    if(k===76) playSound('L'); else
    if(k===77) playSound('M'); else
    if(k===78) playSound('N'); else
    if(k===78) playSound('O'); else
    if(k===80) playSound('P'); else
    if(k===81) playSound('Q'); else
    if(k===82) playSound('R'); else
    if(k===83) playSound('S'); else
    if(k===84) playSound('T'); else
    if(k===85) playSound('U'); else
    if(k===86) playSound('V'); else
    if(k===87) playSound('W'); else
    if(k===88) playSound('X'); else
    if(k===89) playSound('Y'); else
    if(k===90) playSound('Z'); 
})