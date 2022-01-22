const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x, y, i, j;
  

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            x = 100 + (w + gap) * i;
            y = 100 + (h + gap) * j;

            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();


            if(Math.random() > 0.5) {
                context.beginPath();
                context.rect(x + 8, y + 8, w - 16, h - 16);
                context.stroke();
            }
        }
    }
  };
};

canvasSketch(sketch, settings);