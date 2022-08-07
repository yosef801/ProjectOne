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

var faqcurrentID = "null";
function faqfun(faqID, faqToShow) {
  const faqPAGEtoSHOW = document.getElementById(faqID);
  faqPAGEtoSHOW.addEventListener("click", function () {
    console.log("FAQ");
    document.getElementById(faqToShow).classList.remove("d-none");
    if (faqcurrentID == faqToShow) {
      document.getElementById(faqToShow).classList.add("d-none");
    }
    faqcurrentID = faqToShow;
  });
}
faqfun("faqONE", "qONE");
faqfun("faqTWO", "qTWO");
faqfun("faqTHREE", "qTHREE");
