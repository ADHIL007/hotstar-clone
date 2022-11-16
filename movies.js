let movies = [
  {
    name: "Falcon the winder soldier",

    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elite Veniam      quos est quaerat maxime asperiores eius qui quasi sapiente",

    image: "slider2.png"
  },
  {
    name: "Loki",

    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elite Veniam      quos est quaerat maxime asperiores eius qui quasi sapiente",

    image: "slider1.png"
  },
  {
    name: "Wanda vision",

    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elite Veniam      quos est quaerat maxime asperiores eius qui quasi sapiente",

    image: "slider3.png"
  },
  {
    name: "Raya and the last dragon",

    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elite Veniam      quos est quaerat maxime asperiores eius qui quasi sapiente",

    image: "slider4.png"
  },
  {
    name: "Luca",

    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elite Veniam      quos est quaerat maxime asperiores eius qui quasi sapiente",

    image: "slider5.png"
  }
];
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //tracker
const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //creating DOM elementes
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createslide();
}
setInterval(() => {
  createslide();
}, 3000);

//video cards
const videocards = [...document.querySelectorAll(".video-card")];
videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
