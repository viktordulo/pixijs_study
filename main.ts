import * as px from 'pixi.js'


const renderer = px.autoDetectRenderer({
    height: 600,
    width: 600,
    backgroundColor: 0x0edc30,
    antialias: true
});

document.body.appendChild(renderer.view);

const stage = new px.Container()


// line
const line = new px.Graphics();

line.lineStyle(10, 0xff0000, 0.85);

line.position.x = renderer.width / 2;
line.position.y = 10;

line.lineTo(0, renderer.height - 20);

// stage.addChild(line);


// circle 
const circle = new px.Graphics();
circle.lineStyle(20, 0x000fff, 1);
circle.drawCircle(renderer.width / 2, renderer.height / 2, 100);
// stage.addChild(circle);

// heart
const heart = new px.Graphics();
heart.moveTo(renderer.width / 2, 140);
heart.beginFill(0xff0000, 0.85);
heart.bezierCurveTo(renderer.width / 2 + 50, 25, 730, 25, renderer.width / 2, renderer.height - 50);
heart.moveTo(renderer.width / 2, 140);
heart.bezierCurveTo(renderer.width / 2 - 50, 25, -130, 25, renderer.width / 2, renderer.height - 50);
heart.endFill();
stage.addChild(heart);


const render = () => {
    renderer.render(stage);
}

render();

