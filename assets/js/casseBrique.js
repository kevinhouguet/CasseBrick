let app = new PIXI.Application({ width: 640, height: 360 });

const myContainer = document.querySelector('.container');
myContainer.appendChild(app.view);

const player = new PIXI.Sprite(PIXI.Texture.WHITE);
player.position.set((app.screen.width - 100)/2, (app.screen.height - (app.screen.height - 10)/10));
player.width = 100;
player.height = 10;
player.acceleration = new PIXI.Point(0);
player.mass = 1;

console.log(player.x, player.y);

const ball = new PIXI.Sprite(PIXI.Texture.WHITE);
ball.position.set(player.x + 45, player.y - 20)
ball.width = 10;
ball.height = 10;
ball.acceleration = new PIXI.Point(0);
ball.mass = 3;

const keyCoords = { x: 0, y: 0 };
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.on('keydown', (event) => {
  console.log(event)
  keyCoords.x = event.global.x;
  keyCoords.y = event.global.y;
});

app.ticker.add((delta) => {
  // console.log('test')
})


app.stage.addChild(player);
app.stage.addChild(ball);

// let sprite = PIXI.Sprite.from('/img/sample.png');
// app.stage.addChild(sprite);

