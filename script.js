function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link = document.getElementById("link");
const link0 = document.getElementById("link0");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link.addEventListener('click', () => {
    scrollToElement('#tophead');
});

link0.addEventListener('click', () => {
    scrollToElement('#tophead');
});

link1.addEventListener('click', () => {
    scrollToElement('#projects');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('#abilities');
});

link3.addEventListener('click', () => {
    scrollToElement('#contacts');
});