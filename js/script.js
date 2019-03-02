/* Services slider */

function showSlide(n){
  var activeSlide = document.querySelector(".services-slider-active");
  var targetSlide = document.querySelectorAll(".services-slider").item(n);

  if(activeSlide && targetSlide){
    activeSlide.classList.remove("services-slider-active");
    targetSlide.classList.add("services-slider-active");
  } else if (activeSlide && !targetSlide){
    showSlide(n-1);
  }
}

/* Write us checks */

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
var linkWriteUs = document.querySelector(".contacts .button");
var popupWriteUs = document.querySelector(".modal-lead-form");
var closeWriteUs = document.querySelector(".modal-lead-form .modal-close");
var leadName = document.querySelector("#user-name");
var email = document.querySelector("[name=email]");
var text = document.querySelector("[name=text]");

try {
  storageName = localStorage.getItem("leadName");
  storageEmail = localStorage.getItem("leadEmail");
} catch (err) {
  isStorageSupport = false;
}

if (linkWriteUs && popupWriteUs){
  linkWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("modal-active");
    if (storageName && storageEmail) {
      leadName.value = storageName;
      email.value = storageEmail;
      text.focus();
    } else if (!storageName && storageEmail) {
      email.value = storageEmail;
      leadName.focus();
    } else if (storageName && !storageEmail) {
      leadName.value = storageName;
      email.focus();
    } else {
      leadName.focus();
    }
  });
}

if (popupWriteUs){
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupWriteUs.classList.contains("modal-active")) {
        evt.preventDefault();
        popupWriteUs.classList.remove("modal-active");
      }
    }
  });
}

if(closeWriteUs){
  closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-active");
    popupWriteUs.classList.remove("modal-error");
  });
}

var form = document.querySelector(".lead-form");
if(form){
  form.addEventListener("submit", function (evt) {
    if (!leadName.value || !email.value || !text.value) {
      evt.preventDefault();
      popupWriteUs.classList.remove("modal-error");
      popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
      popupWriteUs.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("leadName", leadName.value);
        localStorage.setItem("leadEmail", email.value);
      }
    }
  });
}

/* map checks */

var linkMap = document.querySelector(".contacts .map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");

if(linkMap && popupMap){
  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-active");
  });
}
if(closeMap){
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-active");
  });
}

if(popupMap){
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-active")) {
        evt.preventDefault();
        popupMap.classList.remove("modal-active");
      }
    }
  });
}

/* added product */

var linksBuy = document.querySelectorAll(".buy");
var popupBuy = document.querySelector(".product-added-popup");
var closeBuy = document.querySelector(".product-added-popup .modal-close");
var backToShop = document.querySelector(".product-added-popup .back-to-page");

function addProductToHeaderCart() {
  var headerCart = document.querySelector(".main-header-cart");
  var spanProductsInCart = headerCart.querySelector(".main-header-products-in-cart");

  if(headerCart){
    var productNumber = parseInt(spanProductsInCart.textContent, 10);
    if(!headerCart.classList.contains("cart-active")){
      headerCart.classList.add("cart-active");
    }
    spanProductsInCart.textContent = productNumber + 1;
  }
}

if(linksBuy && popupBuy){
  for (var i = 0; i < linksBuy.length; i++){
    linksBuy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupBuy.classList.add("modal-active");
      addProductToHeaderCart();
    });
  }
}



var addBookmarkButtons = document.querySelectorAll(".bookmark");
var spanHeaderBookmarks = document.querySelector(".main-header-added-bookmarks");
var bookmarksNumber;

if (addBookmarkButtons && spanHeaderBookmarks) {
  bookmarksNumber = parseInt(spanHeaderBookmarks.textContent, 10);
  for (var i=0; i < addBookmarkButtons.length; i++) {
    addBookmarkButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        bookmarksNumber++;
        spanHeaderBookmarks.textContent = bookmarksNumber;
      }
    )
  }
}


if(closeBuy){
  closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.remove("modal-active");
  });
}
if(backToShop){
  backToShop.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.remove("modal-active");
  });
}

if(popupBuy){
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupBuy.classList.contains("modal-active")) {
        evt.preventDefault();
        popupBuy.classList.remove("modal-active");
      }
    }
  });
}

/* Banner */

function showBanner(n){
  var activeBanner = document.querySelector(".slider.active");
  var targetBanner = document.querySelectorAll(".slider").item(n);

  if(activeBanner && targetBanner){
    activeBanner.classList.remove("active");
    targetBanner.classList.add("active");
  } else if (activeBanner && !targetBanner){
    showBanner(n-1);
  }
}

function showNextBanner(){
  var allBanners = document.querySelectorAll(".slider");
  var n;

  if(allBanners) {
    for (i = 0; i < allBanners.length; i++){
      if(allBanners.item(i).classList.contains("active")){
        n = i;
      }
    }
    if(n === allBanners.length-1){
      n = -1;
    }
    switchBanners(n, 1);
  }
}

function showPreviousBanner(){
  var allBanners = document.querySelectorAll(".slider");
  var n;

  if(allBanners) {
    for (i = 0; i < allBanners.length; i++){
      if(allBanners.item(i).classList.contains("active")){
        n = i;
      }
    }
    if(n === 0){
      n = allBanners.length;
    }
    switchBanners(n, -1);
  }
}

function switchBanners(n, direction){
  var radioButtons = document.querySelectorAll(".sliders input");

  showBanner(n + direction);
  for (var j = 0; j < radioButtons.length; j++) {
    radioButtons.item(j).removeAttribute("checked");
  }
  radioButtons.item(n + direction).setAttribute("checked", "");
}
