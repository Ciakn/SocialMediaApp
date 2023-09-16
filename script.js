// sidebar
const menuItems = document.querySelectorAll(".menu-items");
// message notifications
const messageNotifications = document.querySelector("#massagse-notification");
const messagesBox = document.querySelector(".messages");
const message = messagesBox.querySelectorAll(".message");
const searchBox = document.querySelector("#search-input");
const h5 = document.querySelectorAll(".user-name");
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const sizeChoosing = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorChoosing = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
const changeActiveClass = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveClass();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});
messageNotifications.addEventListener("click", () => {
  messagesBox.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messagesBox.style.boxShadow = "none";
  }, 2000);
  document.querySelector(
    "#massagse-notification .notification-count "
  ).style.display = "none";
});

const messageSearch = () => {
  const val = searchBox.value.toLowerCase();
  console.log(val);
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
const removeSelector = () => {
  sizeChoosing.forEach((size) => {
    size.classList.remove("active");
  });
};
sizeChoosing.forEach((size) => {
  size.addEventListener("click", () => {
    removeSelector();
    let fontsize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontsize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem ");
      root.style.setProperty("----sticky-top-right", "5.4rem ");
    } else if (size.classList.contains("font-size-2")) {
      fontsize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem ");
      root.style.setProperty("----sticky-top-right", "-7rem ");
    } else if (size.classList.contains("font-size-3")) {
      fontsize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem ");
      root.style.setProperty("----sticky-top-right", "-17rem ");
    } else if (size.classList.contains("font-size-4")) {
      fontsize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem ");
      root.style.setProperty("----sticky-top-right", "-25rem ");
    } else if (size.classList.contains("font-size-5")) {
      fontsize = "22 px";
      root.style.setProperty("----sticky-top-left", "-10rem ");
      root.style.setProperty("----sticky-top-right", "-33rem ");
    }
    document.querySelector("html").style.fontSize = fontsize;
  });
  console.log();
});
const removeColorPallte = () => {
  colorChoosing.forEach((color) => {
    color.classList.remove("active");
  });
};
colorChoosing.forEach((color) => {
  color.addEventListener("click", () => {
    removeColorPallte();

    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-hue", primaryHue);
  });
});

// show modal
const showModal = () => {
  themeModal.style.display = "grid";
  document.click;
};
// close model
const closeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
let LightColorLightness;
let WhiteColorLightness;
let DarkColorLightness;
const changeBg = () => {
  root.style.setProperty("--light-color-lightness", LightColorLightness);
  root.style.setProperty("--dark-color-lightness", DarkColorLightness);
  root.style.setProperty("--white-color-lightness", WhiteColorLightness);
};
bg1.addEventListener('click' , ()=>{
 bg1.classList.add('active');
 bg2.classList.remove('active');
 bg3.classList.remove('active');
 window.location.reload();
})

bg2.addEventListener("click", () => {
   DarkColorLightness = "95%";
   WhiteColorLightness = "20%";
   LightColorLightness = "15%";
  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});
bg3.addEventListener("click", () => {
  DarkColorLightness = "95%";
  WhiteColorLightness = "10%";
  LightColorLightness = "0%";
  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});

// functions
searchBox.addEventListener("keyup", messageSearch);
theme.addEventListener("click", showModal);
themeModal.addEventListener("click", closeModal);
