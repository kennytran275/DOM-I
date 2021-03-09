const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// TODO display nav bar
const links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// TODO display cta and img
const h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// TODO display main-content and img
const topContentTitles = document.querySelectorAll(".top-content h4");
topContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
topContentTitles[1].textContent = siteContent["main-content"]["about-h4"];

const topContentPara = document.querySelectorAll(".top-content p");
topContentPara[0].textContent = siteContent["main-content"]["features-content"];
topContentPara[1].textContent = siteContent["main-content"]["about-content"];

const bottomContentTitles = document.querySelectorAll(".bottom-content h4");
bottomContentTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentTitles[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentPara = document.querySelectorAll(".bottom-content p");
bottomContentPara[0].textContent =
  siteContent["main-content"]["services-content"];
bottomContentPara[1].textContent =
  siteContent["main-content"]["product-content"];
bottomContentPara[2].textContent =
  siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// TODO display contact
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactPara = document.querySelectorAll(".contact p");
contactPara[0].textContent = siteContent.contact.address;
contactPara[1].textContent = siteContent.contact.phone;
contactPara[2].textContent = siteContent.contact.email;

// TODO display footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// Change nav text to green
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "green";
}

// Adding two links to nav
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
blogLink.style.color = "green";
document.querySelector("nav").appendChild(blogLink);

const homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.href = "#";
homeLink.style.color = "green";
document.querySelector("nav").prepend(homeLink);
