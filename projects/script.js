$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Govind Bharne";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
  const glassImages = [
    "./assets/images/Glass.png",
    "./assets/images/Glass2.png"
  ];
  let currentGlass = 0;

  const glassPopup = document.getElementById("glassPopup");
  const glassImage = document.getElementById("glassImage");

  function openGlassPopup() {
    glassPopup.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scroll when popup open
    showGlassImage();
  }

  function closeGlassPopup() {
    glassPopup.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function showGlassImage() {
    glassImage.style.opacity = 0;
    setTimeout(() => {
      glassImage.src = glassImages[currentGlass];
      glassImage.style.opacity = 1;
    }, 200);
  }

  function nextGlass() {
    currentGlass = (currentGlass + 1) % glassImages.length;
    showGlassImage();
  }

  function prevGlass() {
    currentGlass = (currentGlass - 1 + glassImages.length) % glassImages.length;
    showGlassImage();
  }

  // Close popup when clicked outside the image
  glassPopup.addEventListener("click", (e) => {
    if (e.target === glassPopup) closeGlassPopup();
  });
  function openPopup(src) {
  const modal = document.getElementById("popupModal");
  const popupImg = document.getElementById("popupImg");
  modal.style.display = "block";
  popupImg.src = src;
}

function closePopup(event) {
  const modal = document.getElementById("popupModal");
  if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
}
function openVideoPopup(src) {
  const modal = document.getElementById("videoPopupModal");
  const popupVideo = document.getElementById("popupVideo");
  modal.style.display = "block";
  popupVideo.src = src;
  popupVideo.play();
}

function closeVideoPopup(event) {
  const modal = document.getElementById("videoPopupModal");
  const popupVideo = document.getElementById("popupVideo");
  if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
    modal.style.display = "none";
    popupVideo.pause();
    popupVideo.src = "";
  }
}

function openCertificate(src) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("certificateImg");
  const modalPdf = document.getElementById("certificatePdf");

  modal.style.display = "block";

  // Reset display states
  modalImg.style.display = "none";
  modalPdf.style.display = "none";

  if (src.endsWith(".pdf")) {
    modalPdf.src = src;
    modalPdf.style.display = "block";
  } else {
    modalImg.src = src;
    modalImg.style.display = "block";
  }
}

function closeCertificate(event) {
  const modal = document.getElementById("certificateModal");
  if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
    modal.style.display = "none";
  }
}
// WhatsApp Redesign Popup Logic
let whatsappImages = [
  "./assets/images/whatsapp1.png",
  "./assets/images/whatsapp2.png"
];
let currentWhatsAppIndex = 0;

function openWhatsAppPopup() {
  document.getElementById("whatsappPopup").style.display = "block";
  document.getElementById("whatsappImage").src = whatsappImages[currentWhatsAppIndex];
}

function closeWhatsAppPopup() {
  document.getElementById("whatsappPopup").style.display = "none";
}

function changeWhatsAppImage(n) {
  currentWhatsAppIndex += n;
  if (currentWhatsAppIndex < 0) currentWhatsAppIndex = whatsappImages.length - 1;
  if (currentWhatsAppIndex >= whatsappImages.length) currentWhatsAppIndex = 0;
  document.getElementById("whatsappImage").src = whatsappImages[currentWhatsAppIndex];
}

// Close popup when clicking outside the image
window.onclick = function(event) {
  const popup = document.getElementById("whatsappPopup");
  if (event.target === popup) {
    closeWhatsAppPopup();
  }
}