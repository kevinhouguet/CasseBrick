

const myPlayerElement = document.querySelector('.player');
let player_x = 360;
let player_y = 250;

myPlayerElement.style.top = player_x + 'px';
myPlayerElement.style.left = player_y + 'px';

const myBallElement = document.querySelector('.ball');
let ball_x = 350;
let ball_y = 295;

myBallElement.style.top = ball_x + 'px';
myBallElement.style.left = ball_y + 'px';

let direction = 'up';
const intervalId = setInterval(() => {
  switch (direction) {
    case 'up':
      ball_x -= 1;
      if(ball_x <= 0){
        direction = 'down'
      }
      break;
    case 'down':
      ball_x += 1;
      if(isTheBallInContactPlayer(ball_x, ball_y)){
        direction = 'up';
      }
      if(ball_x >= 400){
        ball_x = 400;
        direction = 'stop'
      }
      break;
    case 'stop':
      clearInterval(intervalId);
      myBallElement.style.display = "none";
      break;    
  }
  // console.log(ball_x);
  myBallElement.style.top = ball_x + 'px';
}, 10);

function isTheBallInContactPlayer(ball_x, ball_y){
  // console.log(ball_y, player_y);
  if((player_x - 10) === ball_x && (ball_y >= player_y && ball_y <= player_y + 100)){
    return true;
  }
}




document.addEventListener('keydown', (event) =>{
  // console.log(event.key);
  // init position du player
  
  switch (event.key) {
    case 'ArrowRight':
      player_y += 10;
      if(player_y >= 500){
        player_y = 500;
      }
      console.log(player_y);
      myPlayerElement.style.left = player_y + 'px';
    break;
    case 'ArrowLeft':
      player_y -= 10;
      if(player_y <= 0){
        player_y = 0;
      }
      console.log(player_y);
      myPlayerElement.style.left = player_y + 'px';
    break;
    default:
      break;
  }
})

// Start app

