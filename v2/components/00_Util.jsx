const NotFound = () => {
  const { lang, currentLanguage: l } = useContext(Context)
  return <span>{lang.not_found[l]}</span>
}
const DefaultWrapper = (content) => {
  return () => <div className="wrapper_content">{content}</div>
}

function openModal(html = '<h2>Loading...</h2>') {
  $("#modalContent").html(`${html}`)
  $("#modal").show()
}

function closeModal() {
  $("#modal").hide()
}

const isFBApp = (() => {
  const ua = navigator.userAgent || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
})()

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

function load_snow() {
  const canvas = document.getElementById("canvas_snow_falling");
  const ctx = canvas.getContext("2d");

  const W = window.innerWidth;
  const H = window.innerHeight;

  const mp = 1000; //max particles
  const particles = [];
  for (let i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W, //x-coordinate
      y: Math.random() * H, //y-coordinate
      //r: Math.random() * 4 + 1, //radius
      r: Math.random() * 2, //radius //
      d: Math.random() * mp //density
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.beginPath();
    for (let i = 0; i < mp; i++) {
      const p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
  }
  let angle = 0;
  function update() {
    angle += 0.01;
    for (let i = 0; i < mp; i++) {
      const p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle) * 2;
      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) //66.67% of the flakes
        {
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
          } else {
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
          }
        }
      }
    }
  }
  setInterval(draw, 14);
}

function raining() {
  const numberOfRaindrops = 105; // Number of raindrops to create

  for (let i = 0; i < numberOfRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';

    // Randomize position and animation duration
    const leftPosition = i + 95; // percentage (0% - 100%) + 195 for absolute left
    const animationDuration = Math.random() * 2 + 1; // Random duration between 1s and 3s

    raindrop.style.left = `${leftPosition}%`;
    raindrop.style.animationDuration = `${animationDuration}s`;

    document.getElementById('rain_falling').appendChild(raindrop);
  }
}

function spring_falling() {
  const numberOfRaindrops = 100; // Number of raindrops to create

  for (let i = 0; i < numberOfRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.className = 'leaf';

    const leftPosition = i + 200; // percentage (0% - 100%) + 100 for absolute left

    //* Random duration between 4s and 9s */
    const minimumTime = 4
    const maximumTime = 9
    const animationDuration = (Math.random() * (maximumTime - minimumTime + 1)) + minimumTime;

    raindrop.style.left = `${leftPosition}%`;
    raindrop.style.animationDuration = `${animationDuration}s`;

    raindrop.style.background = 'orange'

    if (i % 4 === 0) {
      raindrop.style.background = 'saddlebrown'
    }
    if (i % 9 === 0) {
      raindrop.style.background = '#228B22'
    }

    document.getElementById('spring_falling').appendChild(raindrop);
  }
}

function btc_falling() {
  const numberOfRaindrops = 100; // Number of raindrops to create

  for (let i = 0; i < numberOfRaindrops; i++) {

    if (i % 2 === 0) {
      continue
    }

    const raindrop = document.createElement('div');
    raindrop.className = 'btc';

    const leftPosition = i + 295; // percentage (0% - 100%) + 295 for absolute left
    const animationDuration = Math.random() * 10 + 1;

    raindrop.style.left = `${leftPosition}%`;
    raindrop.style.animationDuration = `${animationDuration}s`;

    /** Hardcode SVG */
    raindrop.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73" width="100%" height="100%">
    <path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"/>
    <path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"/>
 </svg>`

    document.getElementById('btc_falling').appendChild(raindrop);
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/** Format for input is MM/DD/YYYY */
function getAge(fromdate = '11/01/2000', todate) {
  const age = { year: 0, month: 0, day: 0 };

  if (todate) {
    todate = new Date(todate);
  } else {
    todate = new Date(); //today
  }

  let fromdate2 = new Date(fromdate),
    y = [todate.getFullYear(), fromdate2.getFullYear()],
    ydiff = y[0] - y[1],
    m = [todate.getMonth(), fromdate2.getMonth()],
    mdiff = m[0] - m[1],
    d = [todate.getDate(), fromdate2.getDate()],
    ddiff = d[0] - d[1];

  if (mdiff < 0 || (mdiff === 0 && ddiff < 0))
    --ydiff;
  if (mdiff < 0)
    mdiff += 12;
  if (ddiff < 0) {
    fromdate2.setMonth(m[1] + 1, 0);
    ddiff = fromdate2.getDate() - d[1] + d[0];
    --mdiff;
  }
  if (ydiff > 0) age.year = ydiff
  if (mdiff > 0) age.month = mdiff
  if (ddiff > 0) age.day = ddiff
  return age
}

// SVG Cast https://convertio.co/

const FastLogoSVG = (props) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.000000 84.000000"
    preserveAspectRatio="xMidYMid meet" {...props}>
    <g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)">
      <path d="M313 795 c-10 -11 -5 -13 27 -10 25 2 43 -2 48 -10 4 -8 14 -10 27
 -4 19 7 19 8 -2 8 -12 1 -25 6 -28 11 -4 6 -11 8 -16 5 -5 -4 -9 -1 -9 6 0 9
 -3 9 -14 0 -8 -7 -16 -8 -18 -2 -1 5 -8 3 -15 -4z"/>
      <path d="M196 785 c10 -8 23 -15 28 -15 6 0 1 7 -10 15 -10 8 -23 15 -28 15
 -6 0 -1 -7 10 -15z"/>
      <path d="M244 788 c10 -6 22 -6 26 -2 5 5 -3 10 -18 11 -22 1 -24 0 -8 -9z" />
      <path d="M450 790 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4
 -4 -4 -10z"/>
      <path d="M82 784 c3 -3 21 -7 39 -9 18 -3 37 -9 43 -15 13 -13 26 -13 26 0 0
 6 -3 9 -7 8 -5 -1 -21 4 -36 10 -29 12 -75 17 -65 6z"/>
      <path d="M472 767 c-6 -7 -7 -19 -3 -26 6 -9 10 -5 13 13 6 30 5 31 -10 13z" />
      <path d="M50 740 c-10 -6 -3 -13 25 -24 21 -9 39 -15 40 -14 1 2 -10 13 -24
 25 -18 14 -32 18 -41 13z"/>
      <path d="M500 744 c0 -13 18 -39 24 -34 2 3 -2 14 -10 24 -8 11 -14 16 -14 10z" />
      <path d="M135 730 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
 -8 -4 -11 -10z"/>
      <path d="M60 679 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5
 -10 -11z"/>
      <path d="M500 668 c0 -4 6 -8 14 -8 8 0 17 4 20 8 2 4 -4 8 -15 8 -10 0 -19
 -4 -19 -8z"/>
      <path d="M70 652 c0 -7 -7 -12 -15 -12 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10
 17 0 32 27 21 37 -3 4 -6 1 -6 -5z"/>
      <path d="M193 633 c-27 -40 -26 -192 1 -222 27 -29 43 -26 62 12 36 68 13 237
 -31 237 -8 0 -23 -12 -32 -27z"/>
      <path d="M343 633 c-25 -38 -25 -178 0 -216 42 -64 82 -10 82 108 0 119 -41
 172 -82 108z"/>
      <path d="M56 583 c5 -23 2 -32 -9 -35 -14 -2 -13 -7 4 -28 18 -22 19 -23 9 -2
 -7 15 -7 22 0 22 13 0 13 40 0 60 -7 11 -8 6 -4 -17z"/>
      <path d="M536 587 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" />
      <path d="M530 550 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0 -16
 -4 -16 -10z"/>
      <path d="M530 510 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3 -15
 1 -15 -4z"/>
      <path d="M90 433 c0 -6 9 -21 21 -34 l20 -24 -17 30 c-24 39 -24 40 -24 28z" />
      <path d="M487 407 l-17 -32 20 24 c17 20 26 41 18 41 -2 0 -11 -15 -21 -33z" />
      <path d="M210 360 c0 -14 29 -20 93 -20 58 0 100 12 81 22 -15 9 -174 7 -174
 -2z"/>
      <path d="M422 340 c-75 -50 -182 -49 -248 3 l-26 20 -21 -22 c-12 -11 -16 -21
 -10 -21 6 0 9 -9 6 -20 -9 -34 18 -110 52 -146 41 -43 91 -64 142 -59 97 9
 158 73 172 180 l7 50 16 -30 c10 -16 17 -25 18 -19 0 10 -56 94 -63 94 -1 0
 -21 -14 -45 -30z m47 -60 c1 -49 -37 -120 -78 -147 -41 -28 -108 -30 -158 -6
 -60 28 -103 117 -88 182 l6 30 42 -22 c63 -33 170 -31 223 4 44 30 52 24 53
 -41z"/>
      <path d="M531 173 c0 -13 -13 -30 -27 -40 -25 -16 -27 -16 -40 2 -15 20 -18
 17 -8 -9 16 -42 93 6 81 51 -4 14 -5 13 -6 -4z"/>
      <path d="M71 160 c-1 -26 29 -60 53 -60 23 0 37 18 35 43 0 7 -4 2 -9 -10 -15
 -37 -51 -27 -69 17 -5 14 -10 18 -10 10z"/>
      <path d="M182 68 c-2 -38 2 -49 17 -58 24 -12 78 -13 85 -1 3 4 -6 6 -19 3
 -14 -2 -36 -1 -49 2 -21 5 -25 13 -29 54 l-3 47 -2 -47z"/>
      <path d="M432 68 c-2 -42 -5 -48 -27 -54 -14 -3 -36 -4 -50 -2 -13 3 -22 1
 -19 -3 8 -14 68 -11 88 4 13 10 16 23 13 57 l-4 45 -1 -47z"/>
      <path d="M292 50 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
      <path d="M322 50 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
    </g>
  </svg>
)

const FastDarkModeSVG = (props) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.000000 51.000000"
    preserveAspectRatio="xMidYMid meet" {...props}>
    <g transform="translate(0.000000,51.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M240 480 c0 -23 4 -30 20 -30 16 0 20 7 20 30 0 23 -4 30 -20 30 -16
0 -20 -7 -20 -30z"/>
      <path d="M81 427 c-8 -11 -7 -18 8 -31 15 -14 20 -14 30 -3 8 11 7 18 -8 31
-15 14 -20 14 -30 3z"/>
      <path d="M407 422 c-11 -12 -13 -22 -7 -32 8 -13 12 -12 30 6 18 17 19 22 7
32 -11 9 -17 8 -30 -6z"/>
      <path d="M216 390 c-66 -20 -115 -103 -100 -167 10 -40 41 -81 74 -98 38 -19
103 -19 141 0 87 45 93 185 11 243 -34 25 -87 34 -126 22z m44 -140 c0 -70 -4
-110 -10 -110 -26 0 -71 33 -86 62 -28 54 -3 126 51 149 44 17 45 14 45 -101z"/>
      <path d="M0 250 c0 -16 7 -20 30 -20 23 0 30 4 30 20 0 16 -7 20 -30 20 -23 0
-30 -4 -30 -20z"/>
      <path d="M460 250 c0 -15 7 -20 25 -20 18 0 25 5 25 20 0 15 -7 20 -25 20 -18
0 -25 -5 -25 -20z"/>
      <path d="M86 101 c-12 -13 -13 -20 -4 -29 9 -9 16 -8 30 5 22 19 23 29 4 36
-8 3 -21 -2 -30 -12z"/>
      <path d="M395 109 c-4 -5 1 -19 11 -30 13 -15 20 -16 31 -8 11 10 11 15 -3 30
-19 22 -30 24 -39 8z"/>
      <path d="M240 25 c0 -18 5 -25 20 -25 15 0 20 7 20 25 0 18 -5 25 -20 25 -15
0 -20 -7 -20 -25z"/>
    </g>
  </svg>

)

const SVG_ArrowUp = (props) => (
  <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" />
  </svg>
)

const SVG_MobileApp = (props) => (
  <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 71.3 122.88" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path d="M12.46,0h46.38c3.43,0,6.56,1.4,8.81,3.65c2.25,2.25,3.65,5.38,3.65,8.81v97.96c0,3.43-1.4,6.56-3.65,8.81 c-2.25,2.25-5.38,3.65-8.81,3.65H12.46c-3.43,0-6.56-1.4-8.81-3.65C1.4,116.98,0,113.85,0,110.42V12.46C0,9.03,1.4,5.9,3.65,3.65 C5.9,1.4,9.03,0,12.46,0L12.46,0z M52.66,45.2h7.16c1.8,0,3.26,1.47,3.26,3.26v7.16c0,1.8-1.47,3.26-3.26,3.26h-7.16 c-1.8,0-3.26-1.47-3.26-3.26v-7.16C49.4,46.67,50.87,45.2,52.66,45.2L52.66,45.2z M32.07,45.2h7.16c1.8,0,3.26,1.47,3.26,3.26v7.16 c0,1.8-1.47,3.26-3.26,3.26h-7.16c-1.8,0-3.26-1.47-3.26-3.26v-7.16C28.81,46.67,30.27,45.2,32.07,45.2L32.07,45.2z M11.48,45.2 h7.16c1.8,0,3.26,1.47,3.26,3.26v7.16c0,1.8-1.47,3.26-3.26,3.26h-7.16c-1.8,0-3.26-1.47-3.26-3.26v-7.16 C8.21,46.67,9.68,45.2,11.48,45.2L11.48,45.2z M52.66,24.73h7.16c1.8,0,3.26,1.47,3.26,3.26v7.16c0,1.8-1.47,3.26-3.26,3.26h-7.16 c-1.8,0-3.26-1.47-3.26-3.26v-7.16C49.4,26.2,50.87,24.73,52.66,24.73L52.66,24.73z M32.07,24.73h7.16c1.8,0,3.26,1.47,3.26,3.26 v7.16c0,1.8-1.47,3.26-3.26,3.26h-7.16c-1.8,0-3.26-1.47-3.26-3.26v-7.16C28.81,26.2,30.27,24.73,32.07,24.73L32.07,24.73z M11.48,24.73h7.16c1.8,0,3.26,1.47,3.26,3.26v7.16c0,1.8-1.47,3.26-3.26,3.26h-7.16c-1.8,0-3.26-1.47-3.26-3.26v-7.16 C8.21,26.2,9.68,24.73,11.48,24.73L11.48,24.73z M32.79,86.71c-0.05-0.03-0.12-0.06-0.17-0.1c-0.68-0.54-1.43-1.14-2.07-1.67 c-0.94-0.77-2.02-1.66-2.78-2.29c-0.51-0.42-1.1-0.72-1.66-0.84c-0.36-0.06-0.68-0.06-0.94,0.04c-0.21,0.09-0.39,0.26-0.5,0.51 c-0.15,0.35-0.23,0.84-0.19,1.5c0.04,0.59,0.24,1.23,0.51,1.86c0.4,0.91,0.95,1.76,1.36,2.3c0.03,0.04,0.05,0.06,0.06,0.1 l7.8,11.14h20.5c1.27-2.08,2.35-3.92,2.48-6.52l-0.08-3.65c-0.01-0.05-0.01-0.1-0.01-0.15c0-0.05,0-0.4,0.01-0.86 c0.03-2.42,0.06-5.4-2.15-5.77h-1.43c-0.01,0.68-0.05,1.38-0.09,2.04c-0.04,0.6-0.08,1.17-0.08,1.72c0,0.59-0.48,1.07-1.07,1.07 c-0.59,0-1.07-0.48-1.07-1.07c0-0.55,0.04-1.2,0.08-1.86c0.14-2.28,0.31-4.88-1.5-5.21h-1.41c-0.08,0-0.15-0.01-0.23-0.03 c0.01,0.82-0.04,1.67-0.09,2.49c-0.04,0.6-0.08,1.17-0.08,1.72c0,0.59-0.48,1.07-1.07,1.07c-0.59,0-1.07-0.48-1.07-1.07 c0-0.55,0.04-1.2,0.08-1.86c0.14-2.28,0.31-4.88-1.5-5.21h-1.41c-0.1,0-0.19-0.01-0.28-0.04v4.15c0,0.59-0.48,1.07-1.07,1.07 c-0.59,0-1.07-0.48-1.07-1.07V69.12c0-1.86-0.76-3.05-1.74-3.53c-0.36-0.18-0.75-0.27-1.12-0.27c-0.37,0-0.76,0.09-1.12,0.27 c-0.96,0.49-1.71,1.67-1.71,3.59v19.52c0,0.59-0.48,1.07-1.07,1.07c-0.59,0-1.07-0.48-1.07-1.07v-1.98H32.79L32.79,86.71z M31.67,99.28l-6.95-9.94l-0.04-0.04c-0.48-0.63-1.12-1.62-1.61-2.71c-0.36-0.82-0.63-1.71-0.69-2.58 c-0.06-1.04,0.08-1.86,0.37-2.52c0.36-0.81,0.95-1.34,1.66-1.62c0.66-0.27,1.4-0.31,2.15-0.15c0.9,0.18,1.83,0.63,2.61,1.28 c0.64,0.54,1.72,1.41,2.78,2.28L32.82,84V69.18c0-2.84,1.26-4.67,2.89-5.49c0.66-0.33,1.36-0.5,2.08-0.5c0.72,0,1.43,0.17,2.08,0.5 c1.63,0.82,2.92,2.66,2.92,5.45v4.91l-0.03-0.01c0.09-0.03,0.18-0.04,0.28-0.04h1.48c0.08,0,0.17,0.01,0.24,0.03 c1.97,0.31,2.85,1.45,3.21,2.94c0.14-0.06,0.3-0.1,0.45-0.1h1.48c0.08,0,0.17,0.01,0.24,0.03c2.12,0.33,2.97,1.63,3.28,3.28 c0.05-0.01,0.1-0.01,0.17-0.01h1.48c0.08,0,0.17,0.01,0.24,0.03c4.06,0.63,4.01,4.67,3.97,7.92v0.85l0.09,3.75v0.12 c-0.13,2.66-1.02,4.54-2.15,6.46h11.08V19.21H2.99v80.08l0,0H31.67L31.67,99.28z M28.94,113c-0.81,0-1.51-0.66-1.51-1.51 c0-0.81,0.66-1.51,1.51-1.51h13.71c0.81,0,1.51,0.66,1.51,1.51c0,0.81-0.66,1.51-1.51,1.51H28.94L28.94,113z M27.65,7.15 c1.33,0,2.4,1.07,2.4,2.4c0,1.33-1.07,2.4-2.4,2.4c-1.33,0-2.4-1.07-2.4-2.4C25.25,8.22,26.32,7.15,27.65,7.15L27.65,7.15z M35.65,7.15c1.33,0,2.4,1.07,2.4,2.4c0,1.33-1.07,2.4-2.4,2.4c-1.33,0-2.4-1.07-2.4-2.4C33.25,8.22,34.32,7.15,35.65,7.15 L35.65,7.15z M43.65,7.15c1.33,0,2.4,1.07,2.4,2.4c0,1.33-1.07,2.4-2.4,2.4c-1.33,0-2.4-1.07-2.4-2.4 C41.26,8.22,42.32,7.15,43.65,7.15L43.65,7.15z M68.32,102.27H2.99v8.11c0,2.62,1.07,4.98,2.8,6.67c1.73,1.73,4.09,2.8,6.67,2.8 h46.38c2.62,0,4.98-1.07,6.67-2.8c1.73-1.73,2.8-4.09,2.8-6.67V102.27L68.32,102.27L68.32,102.27z M2.99,16.19h65.33v-3.72 c0-2.62-1.07-4.98-2.8-6.67c-1.73-1.73-4.09-2.8-6.67-2.8H12.46c-2.62,0-4.98,1.07-6.67,2.8c-1.73,1.73-2.8,4.09-2.8,6.67V16.19 L2.99,16.19L2.99,16.19z" />
    </g>
  </svg>
)

const SVG_BTC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73" {...props}>
    <path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z" />
    <path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z" />
  </svg>
)
