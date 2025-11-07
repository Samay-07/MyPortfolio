/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 30, // fewer, larger bubbles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#c77dff", "#e0aaff", "#dec9e9", "#b185db"] // soft purple shades
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5, // semi-transparent for soft look
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.6,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 50, // big bubble size
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false // clean floating bubbles only
    },
    "move": {
      "enable": true,
      "speed": 3.5, // faster floating
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // bubbles move away from cursor
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});
