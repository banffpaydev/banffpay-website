// NAVBAR DROPDOWNS
const supportBtn = document.querySelector("#supportBtn")
supportBtn.addEventListener("click", () => {
    document.querySelector("#supportBtn_arrow").classList.toggle("flip")
    document.querySelector("#supportBtn_dropdown").classList.toggle("show")
})

const servicesBtn = document.querySelector("#servicesBtn")
servicesBtn.addEventListener("click", () => {
    document.querySelector("#servicesBtn_arrow").classList.toggle("flip")
    document.querySelector("#servicesBtn_dropdown").classList.toggle("show")
})

const languageBtn = document.querySelector("#languageBtn")
languageBtn.addEventListener("click", () => {
    document.querySelector("#language_dropdown").classList.toggle("show")
})

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (
        !event.target.matches(".dropdown-span") &&
        !event.target.matches("#servicesBtn_arrow") &&
        !event.target.matches("#supportBtn_arrow")
    ) {
        let dropdowns = document.querySelectorAll(".dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show")
                openDropdown.previousElementSibling.classList.remove("flip")
            }
        }
    }
}
// NAVBAR MOBILE OVERLAY ACTIONS
const menuBtn = document.querySelector("#openMenu")
function openNav() {
    if (menuBtn.getAttribute("name") === "menu-outline") {
        document.getElementById("myNav").style.width = "100%"
        menuBtn.setAttribute("name", "close-outline")
    } else {
        document.getElementById("myNav").style.width = "0%"
        menuBtn.setAttribute("name", "menu-outline")
    }
}

document.querySelector("#openMenu").addEventListener("click", openNav)
// document.querySelector(".closebtn").addEventListener("click", closeNav)

var dropdown = document.getElementsByClassName("dropdown-btn")

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active")
        var dropdownContent = this.nextElementSibling
        if (dropdownContent.style.display === "flex") {
            dropdownContent.style.display = "none"
        } else {
            dropdownContent.style.display = "flex"
        }
    })
}

document.querySelectorAll(".link-items").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        if (window.location.pathname === "/") {
            const target = item.getAttribute("href").slice(1)
            document.querySelector(target).scrollIntoView({ behavior: "smooth", block: "center" })
            openNav()
        } else {
            window.location.replace(item.getAttribute("href"))
        }
    })
})


// More Features Section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".observer")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const header = entry.target.children[0]
                const paragraph = entry.target.children[1]
                if (entry.isIntersecting) {
                    header.classList.remove("text-gray-300")
                    header.classList.add("text-brand-primary-950")

                    paragraph.classList.remove("text-gray-300")
                } else {
                    header.classList.remove("text-brand-primary-950")
                    header.classList.add("text-gray-300")

                    paragraph.classList.add("text-gray-300")
                }
            })
        },
        { threshold: 0.95 }
    )

    sections.forEach((section) => {
        observer.observe(section)
    })
})
// TERMS & CONDITIONS; PRIVACY POLIVY; AML & KYC POLICY SIDEBAR SCROLL ACTIONS
const listItem = document.querySelectorAll(".link-buttons")
const headings = document.querySelectorAll("h2")

const toggleBackground = (current) => {
    listItem.forEach((item) => {
        item.classList.remove("bg-brand-primary-200", "text-brand-primary-950")
    })

    current.classList.add("bg-brand-primary-200", "text-brand-primary-950")
}

listItem.forEach((item) => {
    item.addEventListener("click", () => {
        toggleBackground(item)

        headings.forEach((heading) => {
            if (heading.id === item.id) {
                // Get the offsetTop of the element
                const offsetTop = heading.offsetTop
                console.log(offsetTop)
                // Calculate the desired scroll position
                const desiredScrollPosition = offsetTop - 100 // Adjust someOffset as needed
                // Scroll to the desired position
                window.scrollTo({
                    top: desiredScrollPosition,
                    behavior: "smooth", // You can change this to 'auto' for instant scrolling
                })
            }
        })
    })
})

// NAVBAR & FOOTER SERVICES SCROLL ACTIONS
const currentYear = new Date().getFullYear()
const curYearEl = document.querySelectorAll(".currentYear")
curYearEl.forEach((element) => (element.textContent = currentYear.toString()))

document.querySelectorAll(".scroll-items").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        if (window.location.pathname === "/") {
            const target = item.getAttribute("href").slice(1)
            document.querySelector(target).scrollIntoView({ behavior: "smooth", block: "center" })
        } else {
            window.location.replace(item.getAttribute("href"))
        }
    })
})