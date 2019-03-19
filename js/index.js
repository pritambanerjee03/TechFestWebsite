particlesJS("particles_snow-js", {
  particles: {
    number: {
      value: 50,

      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#b6eeff"
    },
    shape: {
      type: "polygon",
      // stroke: {
      //   width: 3,
      //   color: "#ffffff"
      // },
      polygon: {
        nb_sides: 8
      },
      // image: {
      //   src:
      //     "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
      //   width: 100,
      //   height: 100
      // }
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: "#ffffff",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.2
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// particlesJS("particles_fire-js", {
//   "particles": {
//     "number": {
//       "value": 50,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": ["#ffffff"]
//     },
//     "shape": {
//       "type": "image",
//       "stroke": {
//         "width": 3,
//         "color": "#ffffff"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.7,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 5,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 20,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 50,
//       "color": "#ffffff",
//       "opacity": 0.6,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 5,
//       "direction": "top",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": true,
//         "rotateX": 300,
//         "rotateY": 1200
//       }
//     }
//   },
//   // "interactivity": {
//   //   "detect_on": "canvas",
//   //   "events": {
//   //     "onhover": {
//   //       "enable": true,
//   //       "mode":  "bubble"
//   //     },
//   //     "onclick": {
//   //       "enable": true,
//   //       "mode": "repulse"
//   //     },
//   //     "resize": true
//   //   },
//   //   "modes": {
//   //     "grab": {
//   //       "distance": 150,
//   //       "line_linked": {
//   //         "opacity": 1
//   //       }
//   //     },
//   //     "bubble": {
//   //       "distance": 200,
//   //       "size": 40,
//   //       "duration": 2,
//   //       "opacity": 8,
//   //       "speed": 3
//   //     },
//   //     "repulse": {
//   //       "distance": 200,
//   //       "duration": 0.2
//   //     },
//   //     "push": {
//   //       "particles_nb": 4
//   //     },
//   //     "remove": {
//   //       "particles_nb": 2
//   //     }
//   //   }
//   // },
//   "retina_detect": true
// });

particlesJS("particles_fire-js", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 3000 } },
    color: { value: ["#fdcf58", "#f27d0c","f07f13"] },
    shape: {
      type: "image",
      image: {
        "src" : "../images/fire.png",
        width: 50,
        height: 50
      }
    },
    
    opacity: {
      value: 1,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 15,
      random: true,
      anim: { enable: true, speed: 5, size_min: 0, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 9,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

/*
particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":400,
            "density":{
                "enable":true,
                "value_area":3000
            }
        },"color":{"value":"#fc0000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":true,"speed":5,"size_min":0,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":7.8914764163227265,"direction":"top","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

*/

//https://github.com/VincentGarreau/particles.js/
