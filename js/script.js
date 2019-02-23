
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

try {
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
} catch (err) {
  console.log(err);
}

try {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupWriteUs.classList.contains("modal-active")) {
        evt.preventDefault();
        popupWriteUs.classList.remove("modal-active");
      }
    }
  });
}  catch (err) {
  console.log(err);
}

try {
  closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-active");
    popupWriteUs.classList.remove("modal-error");
  });
} catch (err) {
  console.log(err);
}

var form = document.querySelector(".lead-form");
try {
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
} catch (err) {
  console.log(err);
}

/* map checks */

var linkMap = document.querySelector(".contacts .map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");

try {
  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-active");
  });
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-active");
  });
}  catch (err) {
  console.log(err);
}

try {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-active")) {
        evt.preventDefault();
        popupMap.classList.remove("modal-active");
      }
    }
  });
}  catch (err) {
  console.log(err);
}

/* added product */

var linksBuy = document.querySelectorAll(".buy");
var popupBuy = document.querySelector(".product-added-popup");
var closeBuy = document.querySelector(".product-added-popup .modal-close");
var backToShop = document.querySelector(".product-added-popup .back-to-page");


for (var i = 0; i < linksBuy.length; i++){

  linksBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuy.classList.add("modal-active");
  });
}
closeBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-active");
});
backToShop.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuy.classList.remove("modal-active");
});



try {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupBuy.classList.contains("modal-active")) {
        evt.preventDefault();
        popupBuy.classList.remove("modal-active");
      }
    }
  });
} catch (err) {
  console.log(err);
}







// for (var i=0; i<=linksBuy.length; i++){
//   linksBuy[i].addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popupBuy.classList.add("modal-active");
//   });
// }
//
