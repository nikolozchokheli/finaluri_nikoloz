  // burgir
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");
  const socicon = document.getElementById("socicon");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("open-menu");
      if (socicon) socicon.classList.toggle("open-socicon");
    });
  }

  const containers = document.querySelectorAll(".kursebi-subject-blok");

  if (containers.length < 2) {
    console.error("Not enough containers found!");
    return;
  }

  fetch("https://randomuser.me/api/?results=8")
    .then((res) => {
      if (!res.ok) throw new Error("API error");
      return res.json();
    })
    .then((data) => {
      const users = data.results;

      containers[0].innerHTML = "";
      containers[1].innerHTML = "";

      const icons = [
        "fas fa-microscope",
        "fas fa-vial",
        "fas fa-satellite",
        "fas fa-landmark",
        "fas fa-laptop-house",
        "fas fa-share-alt",
        "fas fa-handshake"
      ];

      for (let i = 0; i < 4; i++) {
        containers[0].appendChild(createTeacherCard(users[i], icons[i % icons.length]));
      }
      for (let i = 4; i < 8; i++) {
        containers[1].appendChild(createTeacherCard(users[i], icons[i % icons.length]));
      }
    })
    .catch((err) => {
      console.error("Failed to fetch team data:", err);
    });

  // cookisebis forma
  const form = document.querySelector(".form-fill");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      document.cookie = `username=${name}; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/`;
      form.submit();
    });
  }
});

// informacia group members
function createTeacherCard(user, iconClass) {
  const div = document.createElement("div");
  div.className = "subject-block zooming shadow-lg p-3 mb-5 bg-body rounded";

  div.innerHTML = `
    <div class="kursebi-subjec-pic">
      <img class="subjeck-pick" src="${user.picture.large}" alt="${user.name.first}">
    </div>
    <div class="kurs-pers-tex">
      <h5 class="subject-name">${user.name.first} ${user.name.last}</h5>
      <p class="kursebi-subject">${user.location.country} — სპეციალისტი</p>
    </div>
    <div class="kursebi-icon border border-5 shadow p-0 mb-5 rounded">
      <i class="${iconClass}"></i>
    </div>
    <p class="more1"><a class="more" href="#">დაწვრილებით</a></p>
  `;

  return div;
}

// psw damalva
const togglePwd = document.getElementById("togglePwd");
const pwdInput = document.getElementById("pwd");
const togglePwdIcon = document.getElementById("togglePwdIcon");

if (togglePwd && pwdInput && togglePwdIcon) {
  togglePwd.addEventListener("click", () => {
    if (pwdInput.type === "password") {
      pwdInput.type = "text";
      togglePwdIcon.classList.remove("fa-eye");
      togglePwdIcon.classList.add("fa-eye-slash");
    } else {
      pwdInput.type = "password";
      togglePwdIcon.classList.remove("fa-eye-slash");
      togglePwdIcon.classList.add("fa-eye");
    }
  });
}

// meti cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const savedName = getCookie("username");
if (savedName) {
  console.log(`Welcome back, ${savedName}!`);
}

document.addEventListener("DOMContentLoaded", () => {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptCookies = document.getElementById("acceptCookies");

  if (!document.cookie.includes("cookieConsentAccepted=true")) {
    cookieConsent.style.display = "block";
  }

  acceptCookies.addEventListener("click", () => {
    document.cookie = "cookieConsentAccepted=true; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    cookieConsent.style.display = "none";
  });
});

// animacia sqrolze
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
});

// magla asqrolva
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (!scrollToTopBtn) {
    console.error("scrollToTopBtn element not found");
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
