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
