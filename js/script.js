
/**
 * Variables
 */
let timeline = new TimelineMax();
const paragraphElems = document.querySelectorAll(".paragraphs-cont");
const featureTitles = document.querySelectorAll(".lp-feature-title");
const imageConts = document.querySelectorAll(".main-image-cont");
const bigTitles = document.querySelectorAll(".lp-big-title");
const circlePath = document.querySelector(".progress-ring__circle");
const clientLogos = document.querySelectorAll(".lp-client-logos-wrapper figure");
const buttons = document.querySelectorAll(".lp-button");
const mainBackground = document.querySelector(".main-background");


/**
 * Call the method to create the checkboxes
 */
getOptions()

const invertElems = document.querySelectorAll("p:not(.not-invert), h2:not(.not-invert), label, .container");

/**
 * register the ScrollTrigger plugin from gsap
 */
gsap.registerPlugin(ScrollTrigger);

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


gsap.to(".lp-logo", {
    opacity: 1,
    duration: 2,
    delay: .8,
    ease: Power4.easeOut
})

gsap.to(".lp-getdemo-button", {
    opacity: 1,
    duration: 2,
    delay: 1,
    ease: Power4.easeOut
})


/*
*  Main titles animation
*/

bigTitles.forEach(bigTitle => {
    gsap.to(bigTitle, {
        scrollTrigger: {
            trigger: bigTitle,
            start: "-100px center",
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
            start: "-100px center",
        },
        y: 0,
        stagger: .5,
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
            start: "-100px center",
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

const tl = gsap.timeline();
gsap.to(circlePath, {
    scrollTrigger: {
        trigger: circlePath,
        start: "-100px center",
        onEnter: () => {
            tl.to(circlePath, {
                css: {
                    "stroke-dashoffset": 240,
                    "stroke-dasharray": "800 200"
                },
                duration: 2.5,
                ease: Back.easeOut
            }).to(circlePath, {
                css: {
                    "stroke-dashoffset": 800,
                    "stroke-dasharray": "0 800",
                    "stroke-width": 0
                },
                duration: 2,
                ease: Back.easeOut
            })
        }
    }
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
                    delay: .8,
                    onComplete: () => ScrollTrigger.refresh()
                })
            }
        },
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

/**
 * Dark section transition for all background
 */

gsap.to(".lp-dark-section", {
    scrollTrigger: {
        trigger: ".lp-dark-section",
        start: "30% bottom",
        end: "bottom 130px",
        scrub: true,
        onEnter: () => backToBlack(),
        onEnterBack: () => backToBlack(),
        onLeaveBack: () => backToWhite(),
        onLeave: () => backToWhite()
    }
})

/**
 * Method to invert colors on background transition
 * @param {boolean} isInvert Determines if method should invert colors
 */
const invertRevert = (isInvert) => {
    for (let elem of invertElems) {
        gsap.to(elem, {
            css: {
                "filter": isInvert ? "invert(1)" : "initial"
            },
            duration: .5,
        })
    }
}

/**
 * Method to turn the background into black
 */
const backToBlack = () => {
    gsap.to(mainBackground, {
        css: {
            "background-color": "#2B2F38"
        },
        duration: .5,
    })

    gsap.to(".progress-ring__circle.bigger", {
        css: {
            "stroke": "#000"
        },
        duration: .5
    })

    invertRevert(true)
}

/**
 * Method to turn the background into white
 */
const backToWhite = () => {
    gsap.to(mainBackground, {
        css: {
            "background-color": "#fff"
        },
        duration: .5,
    })
    gsap.to(".progress-ring__circle.bigger", {
        css: {
            "stroke": "#dddbda"
        },
        duration: .5
    })
    invertRevert(false)
}

/**
 * Method to scroll to form
 */
function scrollToForm() {
    gsap.to(window, { duration: 1.5, ease: Power4.easeOut, scrollTo: { y: "#form", offsetY: 50 } });
}

/**
 * Gets the options from the multiselect and creates the checkboxes
 */
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

/**
 * Method to handle the change of the checkboxes
 * - It selectes the values of the multiselect picklist
 * @param {object} e The change event
 */
const checkboxChanged = (e) => {
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