let timeline = new TimelineMax();
let timeline2 = new TimelineMax()
const paragraphElems = document.querySelectorAll(".paragraph");
const featureTitles = document.querySelectorAll(".lp-feature-title");
const imageConts = document.querySelectorAll(".main-image-cont");
const bigTitles = document.querySelectorAll(".lp-big-title");
const circlePath = document.querySelector(".progress-ring__circle");
const clientLogos = document.querySelectorAll(".lp-client-logos-wrapper figure");
const bigNumbers = document.querySelectorAll(".big-number");
const buttons = document.querySelectorAll(".lp-button");

/*
* Animate the main title and main paragraphs
*/
timeline.staggerFrom(".lp-text", 1.5, {
    y: "100%",
    opacity: 1,
    duration: .8,
    delay: .3,
    ease: Power4.easeOut
}, 0.15);

/*
*  Main titles animation
*/

bigTitles.forEach(bigTitle => {
    gsap.to(bigTitle, {
        scrollTrigger: {
            trigger: bigTitle,
            start: "-100px center"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut
    });
})

/*
* Animate the paragraphs
*/

paragraphElems.forEach(paragraph => {
    gsap.to(paragraph, {
        scrollTrigger: {
            trigger: paragraph,
            start: "-100px center"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut
    })
})


/**
 * Feature titles animation
 */
featureTitles.forEach(title => {
    gsap.to(title, {
        scrollTrigger: {
            trigger: title,
            start: "-90px center",
            // markers: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut
    })
})

/**
 * Feature images animation
 */
imageConts.forEach(image => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            start: "-100px center"
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: Back.easeOut
    })
})


/**
 * Circle path animation
 */
gsap.to(circlePath, {
    scrollTrigger: {
        trigger: circlePath,
        start: "-100px center"
    },
    css: {
        "stroke-dashoffset": 240,
        "stroke-dasharray": "800 200"
    },
    duration: 2,
    ease: Back.easeOut
})

/**
 * Client logos timelines
 */
gsap
    .to(".lp-client-logos-wrapper", {
        scrollTrigger: {
            trigger: ".lp-client-logos-wrapper",
            start: "center bottom",
            onEnter: () => {
                gsap.to(clientLogos, {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    ease: Power4.easeOut,
                    stagger: .15,
                    delay: .8
                })
            }
        }
    })

/**
 * big numbers timeline
 */
bigNumbers.forEach(number => {
    gsap.to(number, {
        scrollTrigger: {
            trigger: number,
            start: "-100px center"
        },
        scale: 1,
        opacity: .3,
        duration: .8,
        delay: .5,
        ease: Back.easeOut
    })
})

/**
 * Buttons animation
 */
buttons.forEach(button => {
    gsap.to(button, {
        scrollTrigger: {
            trigger: button,
            start: "-70px center"
        },
        scale: 1,
        opacity: 1,
        duration: .4,
        ease: Power4.easeOut
    })
})

/**
 * Success paragraph animation
 */

gsap.to(".lp-success-message", {
    scrollTrigger: {
        trigger: ".lp-success-message",
        start: "-50px center"
    },
    duration: 1,
    opacity: 1,
    ease: Power4.easeOut
})

/**
 * Form Animation
 */

gsap.to(".lp-form-wrapper", {
    scrollTrigger: {
        trigger: ".lp-form-wrapper",
        start: "50% bottom"
    },
    duration: .7,
    scale: 1,
    opacity: 1,
    ease: Power4.easeOut
})

function scrollToForm() {
    gsap.to(window, { duration: 1.5, ease: Power4.easeOut, scrollTo: { y: "#form", offsetY: 50 } });
}

function getOptions() {
    const options = document.querySelectorAll(".interest-field > option");
    const interestIn = document.getElementById("interestIn");
    let checkboxesItems = ' ';
    let checkboxesHTMLList = ' ';
    options.forEach((option) => {
        checkboxesItems += `
        <li>
            <label class="container">${option.innerHTML}
                <input class="custom-input" onchange="checkboxChanged(event)" type="checkbox" value="${option.value}">
                <span class="checkmark"></span>
            </label>
        </li>`
    })
    checkboxesHTMLList = `<ul class="lp-interest-cont">${checkboxesItems}</ul>`
    interestIn.innerHTML = checkboxesHTMLList
}
getOptions()

const checkboxChanged = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);
    let options = document.querySelectorAll(".interest-field > option");
    for (let option of options) {
        if (e.target.checked && (option.value === e.target.value)) {
            option.selected = true;
            break;
        } else if (!e.target.checked && (option.value === e.target.value)) {
            option.selected = false;
            break;
        }
    }
}

function getMultiselectVal(e) {
    e.preventDefault();
    const select = document.getElementById("00Nf200000DmdEg");
    console.log(select.value)
}

let submitButton = document.getElementById("submitButton");
let message = document.querySelector(".fields-required-message");
function recaptcha_callback() {
    submitButton.removeAttribute('disabled');
    message.style.display = "none"
};
function recaptcha_expires() {
    submitButton.disabled = true;
    message.style.display = "block";
}