let currentPageId = "home-page";

function makeMenuLinkChangePage(linkId, pageToShow) {
  const pageLinkElement = document.getElementById(linkId);

  pageLinkElement.addEventListener("click", function () {
    console.log("you clicked me");
    if (currentPageId == pageToShow) {
      return 0;
    }
    document.getElementById(pageToShow).classList.remove("d-none");

    document.getElementById(currentPageId).classList.add("d-none");

    currentPageId = pageToShow;
  });
}

makeMenuLinkChangePage("home-page-link", "home-page");
makeMenuLinkChangePage("about-page-link", "about-page");
makeMenuLinkChangePage("media-page-link", "media-page");
makeMenuLinkChangePage("faq-page-link", "faq-page");
makeMenuLinkChangePage("contact-page-link", "contact-page");
makeMenuLinkChangePage("suppliers-page-link", "suppliers-page");

function mediaPMV(mediaID, mediaToShow) {
  const mediaToShowElement = document.getElementById(mediaID);
  mediaToShowElement.addEventListener("click", function () {
    const pM = document.getElementById("divPhotos");
    const pV = document.getElementById("divVideos");
    console.log("test test");
    console.log(mediaToShowElement.value);
    if (mediaToShowElement.value == 1) {
      pM.classList.remove("d-none");
      pV.classList.add("d-none");
    } else {
      pM.classList.add("d-none");
      pV.classList.remove("d-none");
    }
  });
}
mediaPMV("mediaPM", "divPhotos");
mediaPMV("mediaPV", "divVideos");

//FAQ function
var faqcurrentID = "null";
function faqfun(faqID, faqToShow) {
  const faqPAGEtoSHOW = document.getElementById(faqID);
  faqPAGEtoSHOW.addEventListener("click", function () {
    console.log("FAQ");
    document.getElementById(faqToShow).classList.remove("d-none");
    if (faqcurrentID == faqToShow) {
      document.getElementById(faqToShow).classList.add("d-none");
      faqcurrentID = "null";
      return 0;
    }
    faqcurrentID = faqToShow;
  });
}
faqfun("faqONE", "qONE");
faqfun("faqTWO", "qTWO");
faqfun("faqTHREE", "qTHREE");
faqfun("faqFOUR", "qFOUR");
faqfun("faqFIVE", "qFIVE");
faqfun("faqSIX", "qSIX");
faqfun("faqSEVEN", "qSEVEN");
faqfun("faqEIGHT", "qEIGHT");
faqfun("faqNINE", "qNINE");
faqfun("faqTEN", "qTEN");

document.getElementById("btn").addEventListener("click", function () {
  const email = document.getElementById("email");
  if (email.value == "" || email.value.indexOf("@") == -1) {
    email.value = "Enter a valid email address";
    email.style.color = "red";
    $("#prospects_form").submit(function (e) {
      e.preventDefault();
    });
  }
});

/* var suppliersCurrentID = "walkOne";
function suppliersChangePage(suppliersID, suppliersToShow) {
  const suppliersPage = document.getElementById(suppliersID);
  suppliersPage.addEventListener("click", function () {
    console.log("suppliers");
    if (suppliersCurrentID == suppliersToShow) {
      return 0;
    }
    document.getElementById(suppliersToShow).classList.remove("d-none");
    document.getElementById(suppliersCurrentID).classList.add("d-none");

    suppliersCurrentID = suppliersToShow;
  });
}
suppliersChangePage("walkOneLink", "walkOne");
suppliersChangePage("sheartonMallLink", "sheartonMall");
suppliersChangePage("aceHotelLink", "aceHotel");
suppliersChangePage("ritzHotelLink", "ritzHotel");
suppliersChangePage("premiumParkLink", "premiumPark");
suppliersChangePage("lCMMLink", "lCMM");
suppliersChangePage("deathMuseumLink", "deathMuseum");
suppliersChangePage("hauntedMuseumLink", "hauntedMuseum"); */
