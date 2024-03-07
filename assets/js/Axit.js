let navMenuMobile = document.getElementById("navMenuMobile");
let li = Array.from(document.querySelectorAll("#navMenuMobile li"));

let counter = 0;

function openNav() {
  if (counter % 2 == 0) {
    navMenuMobile.style.height = "160px";
    navMenuMobile.style.paddingBottom = "15px";
    counter++;
    li.forEach((e) => {
      e.style.display = "block";
    });
    setTimeout(() => {
      li.forEach((e) => {
        e.style.opacity = 1;
      });
    }, 200);
  } else {
    navMenuMobile.style.height = 0;
    navMenuMobile.style.paddingBottom = 0;
    counter++;
    li.forEach((e) => {
      e.style.opacity = 0;
    });
    setTimeout(() => {
      li.forEach((e) => {
        e.style.display = "none";
      });
    }, 100);
  }
}

// Change Context

let taps = Array.from(document.querySelectorAll("#listOfTaps li"));

let tapsSectionH2 = document.querySelector("#tapsSectionText h2");
let tapsSectionParagraph = Array.from(
  document.querySelectorAll("#tapsSectionText p")
);
let tapsSectionImg = document.querySelector("#tapsSection img");
let tapsSectionBtn = document.querySelector("#tapsSection button");

let h2_1 = document.createTextNode("Taps with soft transitioning effect. (1)");
let h2_2 = document.createTextNode("Taps with soft transitioning effect. (2)");
let h2_3 = document.createTextNode("Taps with soft transitioning effect. (3)");

let p_11 = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error fuga laborum beatae quibusdam similique maiores cumque nesciunt repellendus, corporis sapiente, ratione quae eos magnam expedita voluptates necessitatibus! Ipsa, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae officiis ipsum facere. Nemo minima magnam ea ratione, facere quod quasi, sed vero dolores aperiam earum delectus fugiat iure expedita! (1)"
);
let p_12 = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, non repellendus odio cum ipsum in fugit nihil exercitationem, eos corrupti nam consequatur error iste maiores asperiores obcaecati sed voluptatem eligendi! (1)"
);

let p_21 = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error fuga laborum beatae quibusdam similique maiores cumque nesciunt repellendus, corporis sapiente, ratione quae eos magnam expedita voluptates necessitatibus! Ipsa, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae officiis ipsum facere. Nemo minima magnam ea ratione, facere quod quasi, sed vero dolores aperiam earum delectus fugiat iure expedita! (2)"
);
let p_22 = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, non repellendus odio cum ipsum in fugit nihil exercitationem, eos corrupti nam consequatur error iste maiores asperiores obcaecati sed voluptatem eligendi! (2)"
);

let p_31 = document.createTextNode(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error fuga laborum beatae quibusdam similique maiores cumque nesciunt repellendus, corporis sapiente, ratione quae eos magnam expedita voluptates necessitatibus! Ipsa, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae officiis ipsum facere. Nemo minima magnam ea ratione, facere quod quasi, sed vero dolores aperiam earum delectus fugiat iure expedita! (3)"
);
let p_32 = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, non repellendus odio cum ipsum in fugit nihil exercitationem, eos corrupti nam consequatur error iste maiores asperiores obcaecati sed voluptatem eligendi! (3)"
);

let imgs = [
  "./assets/img/im2.png",
  "./assets/img/im2.png",
  "./assets/img/im2.png",
];
let btns = [tapsSectionBtn, tapsSectionBtn, tapsSectionBtn];

taps.forEach((e) => {
  e.addEventListener("click", (_) => {
    taps.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    if (e === taps[0]) {
      tapsSectionH2.textContent = h2_1.nodeValue;
      tapsSectionParagraph[0].textContent = p_11.nodeValue;
      tapsSectionParagraph[1].textContent = p_12.nodeValue;
      tapsSectionImg.src = imgs[0];
      tapsSectionBtn = btns[0];
    } else if (e === taps[1]) {
      tapsSectionH2.textContent = h2_2.nodeValue;
      tapsSectionParagraph[0].textContent = p_21.nodeValue;
      tapsSectionParagraph[1].textContent = p_22.nodeValue;
      tapsSectionImg.src = imgs[1];
      tapsSectionBtn = btns[1];
    } else if (e === taps[2]) {
      tapsSectionH2.textContent = h2_3.nodeValue;
      tapsSectionParagraph[0].textContent = p_31.nodeValue;
      tapsSectionParagraph[1].textContent = p_32.nodeValue;
      tapsSectionImg.src = imgs[2];
      tapsSectionBtn = btns[2];
    }
  });
});

// // Hover Effect

taps.forEach((e) => {
  e.addEventListener("mouseover", (_) => {
    taps.forEach((e) => {
      e.classList.add("opacity");
    });
    e.classList.remove("opacity");
  });
  e.addEventListener("mouseout", (_) => {
    taps.forEach((e) => {
      e.classList.remove("opacity");
    });
  });
});
