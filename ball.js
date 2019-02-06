// Gravity Bouncer Functions
function moveBallHz() {
    // Move & Bounce Ball Horizontally
    ball.x += ball.xSpeed;
    if (ball.x + ball.r > cnv.width || ball.x - ball.r < 0) {
        // Bounce
        ball.xSpeed = -ball.xSpeed;
    }
}

function moveBallVt() {
    // Move & Bounce Ball Vertically
    ball.y += ball.ySpeed;
    ball.ySpeed += ball.a;
    if (ball.y + ball.r > cnv.height) {
        ball.ySpeed = -20;
    }
}

function drawBall() {
    // Draw Bouncing Ball
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.fill();
}