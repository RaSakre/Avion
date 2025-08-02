const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__down-content-menu");
const light = document.querySelector(".light");
const page = document.querySelector(".page");
const water = document.querySelector(".water");
const text = document.querySelector('.hero-section__content-text')
const closeBtn = document.querySelector('#closeBtn')
const notify = document.querySelector('.notify');
const stepperValue = document.querySelector('.stepper__value')
const plusBtn = document.querySelector('.stepper__button--plus')
const minusBtn = document.querySelector('.stepper__button--minus')
const amount = document.querySelector('#amount')
const emailSection = document.querySelector('.email');
const emailContent = document.querySelector('.email__block');
const emailHeading = document.querySelector('.email__heading');
const emailText = document.querySelector('.email__text');
const basket = document.querySelector('#basket');
basket.addEventListener('click', () => {
    window.location.href = 'basket.html'
})


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        video.style.display = "none";
        playPauseBtn.style.display = "none";
    } else {
        video.style.display = "block";
        playPauseBtn.style.display = "block";
    }
});

function updateClass() {
    const element = document.querySelector("#footer__row");
    if (window.innerWidth <= 575) {
        element.classList.add("column-gap-5");
    } else {
        element.classList.remove("column-gap-5");
    }
}

function onOffLight() {
    if (page.classList.contains('theme_light')) {
        page.classList.remove('theme_light');
        page.classList.add('theme_dark');
        water.style.display = 'block';
    } else if (page.classList.contains('theme_dark')) {
        page.classList.remove('theme_dark');
        page.classList.add('theme_light');
        water.style.display = 'none';
    }

    if (light.src.endsWith("yellow.svg")) {
        light.src = "./images/nolight.svg";
    } else if (light.src.endsWith("nolight.svg")) {
        light.src = "./images/yellow.svg";
    }
}

function updateText() {
    if (window.innerWidth <= 575) {
        text.textContent = "With our new collection, view over 400 bespoke pieces from homeware through to furniture today";
    } else {
        text.textContent = 'Shop the new Spring 2022 collection today'
    }
}

function isClosedNotify() {
    closeBtn.addEventListener('click', () => {
        notify.style.display = 'none'
        localStorage.setItem('notify', 'closed')
    })
    if (localStorage.getItem('notify') !== 'closed') {
        notify.style.display = 'flex'
    } else if (localStorage.getItem('notify') === 'closed') {
        notify.style.display = 'none'
    }
}

isClosedNotify()

function changeValue() {
    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(stepperValue.textContent);
        currentValue += 1
        stepperValue.textContent = currentValue.toString()
    })
    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(stepperValue.textContent);
        if (currentValue > 1) {
            currentValue -= 1,
                stepperValue.textContent = currentValue.toString()
        }
    })
}

function checkUrlAndChangeStyles() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('product.html')) {
        emailHeading.style.color = '#2A254B';
        emailText.style.color = '#2A254B';
        emailSection.style = 'padding: 52px 0px 65px 0px;'
        emailContent.style = 'padding: 68px 0px 54px 0px;'
    }
    if (window.innerWidth <= 575) {
        if (currentUrl.includes('product.html')) {
            emailSection.style = 'padding: 0px;'
            emailContent.style = 'padding: 48px 0px 38px 24px;'
        }
    }
}

checkUrlAndChangeStyles()

changeValue()

function changeAmountText() {
    if (window.innerWidth <= 575) {
        amount.textContent = 'Quantity: '
    } else {
        amount.textContent = 'Amount: '
    }
}

function handleWindowEvents() {
    changeAmountText();
    checkUrlAndChangeStyles()
    updateClass();
    updateText();
}


window.addEventListener('load', handleWindowEvents);
window.addEventListener('resize', handleWindowEvents);


light.addEventListener("click", onOffLight);





