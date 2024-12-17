const img_payload = "https://metromanila.politiko.com.ph/wp-content/uploads/2016/11/4-6.jpg";

// Function to replace image sources
function replaceImageSources() {
    const site_imgs = document.querySelectorAll("img");
    for (let i = 0; i < site_imgs.length; i++) {
        site_imgs[i].src = img_payload;
    }
}


const body = document.querySelector("body");
const divs = document.querySelectorAll("div");
const urls = document.querySelectorAll("a");


let count = 0; // Counter to track iterations
const colors = ["white", "black", "red", "blue", "green", "yellow", "purple"];

// Function to toggle background colors
// function toggleBackgroundColor() {
//     const color = colors[Math.floor(Math.random() * colors.length)];
//
//     // Change the body background color
//     body.style.backgroundColor = color;
//
//     // Change the background color of all divs
//     divs.forEach(div => {
//         div.style.backgroundColor = color;
//     });
//
//     count++;
//
//     if (count >= 100) {
//         clearInterval(interval);
//     }
// }

// Run the toggle function every second
// const interval = setInterval(toggleBackgroundColor, 500); // Change every 1 second


// replace urls

function inject_url(){
  urls.forEach(function(anchor){
    anchor.href = "http://127.0.0.1:5000/";
  });
}

// run for first batch ng images assuming dynamic yung site
// and dipa na re-reload lahat ng elements
// replaceImageSources();
// toggleBackgroundColor();
inject_url()
// to check sa mga bagong elements na pumapasok if may img tag dun
const observer = new MutationObserver(() => {
  // replaceImageSources();
  inject_url()

  // toggleBackgroundColor();
});


observer.observe(document.body, { childList: true, subtree: true });
