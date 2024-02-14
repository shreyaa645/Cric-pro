// Function to hide all player images
function hideAllPlayerImages() {
    const allImages = document.querySelectorAll(".images1 img");
    allImages.forEach(function(image) {
        image.classList.remove("show");
    });
}

// Function to toggle visibility and set timeout to revert after 7 seconds
function toggleAndSetTimeout(element) {
    element.classList.toggle("show");
    setTimeout(function() {
        element.classList.remove("show");
    }, 7000); // 7 seconds
}

// Function for MS Dhoni
const msd = document.querySelector(".msd-button");
const msdimg = document.querySelector(".msd-img");
msd.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(msdimg);
});

// Function for Virendar Sehwag
const seh = document.querySelector(".seh-img");
const sehButton = document.querySelector("td:nth-of-type(1) a");
sehButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(seh);
});

// Function for Sachin Tendulkar
const sac = document.querySelector(".sac-img");
const sacButton = document.querySelector("tr:nth-of-type(2) a");
sacButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(sac);
});

// Function for Gautam Gambhir
const gau = document.querySelector(".gau-img");
const gauButton = document.querySelector("tr:nth-of-type(3) a");
gauButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(gau);
});

// Function for Virat Kohli
const vir = document.querySelector(".vir-img");
const virButton = document.querySelector("tr:nth-of-type(4) a");
virButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(vir);
});

// Function for Yuvraj Singh
const yuv = document.querySelector(".yuv-img");
const yuvButton = document.querySelector("tr:nth-of-type(5) a");
yuvButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(yuv);
});

// Function for Suresh Raina
const rai = document.querySelector(".rai-img");
const raiButton = document.querySelector(".blue a:nth-of-type(1)");
raiButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(rai);
});

// Function for Harbhajan Singh
const har = document.querySelector(".har-img");
const harButton = document.querySelector(".blue a:nth-of-type(2)");
harButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(har);
});

// Function for Zaheer Khan
const zah = document.querySelector(".zah-img");
const zahButton = document.querySelector(".blue a:nth-of-type(3)");
zahButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(zah);
});

// Function for Munaf Patel
const mun = document.querySelector(".mun-img");
const munButton = document.querySelector(".blue a:nth-of-type(4)");
munButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(mun);
});

// Function for S Sreesanth
const sre = document.querySelector(".sre-img");
const sreButton = document.querySelector(".blue a:nth-of-type(5)");
sreButton.addEventListener("click", function() {
    hideAllPlayerImages();
    toggleAndSetTimeout(sre);
});
