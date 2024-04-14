const handelTitle = (title) => {
    document.title = title
}

function Addshrink() {
    let RelBanner = document.querySelector('.classy-nav-container');

    window.addEventListener("scroll", e => {
        if(window.pageYOffset > 86){
          RelBanner.classList.add("sticky");
        }else
        {
            RelBanner.classList.remove("sticky");
        }
    });
}

const addActiveClass = () => {
    let NavToggler = document.querySelector('.navbarToggler');
    if (NavToggler.classList.contains('active')) {
      NavToggler.classList.remove("active");
      OpenMenu()
    }else{
      NavToggler.classList.add("active");
      OpenMenu()
    }
}

const OpenMenu = () => {
    let NavToggler = document.querySelector('.navbarToggler');
    let ClassyMenu = document.querySelector('.classy-menu');
    if (NavToggler.classList.contains('active')) {
      ClassyMenu.classList.add("menu-on");
    }else{
      ClassyMenu.classList.remove("menu-on");
    }
}

const moveSmooth = () => {
  window.scrollTo({
    behavior: "smooth"
  });
};

function loader() {
    let fadeTarget = document.getElementById("preloader");

    function fadeOutEffect() {
        
        var fadeEffect = setInterval(function () {
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.style.display = 'none'
            }
        }, 100);
    }

    window.onload = setTimeout(fadeOutEffect , 1000)
}

export {
    handelTitle,
    Addshrink,
    addActiveClass,
    OpenMenu,
    moveSmooth,
    loader
};
