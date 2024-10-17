document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    renderMessage(appDiv);
});

function renderMessage(element) {
    element.innerHTML = '<p>Hello, welcome to my app!</p>';
}
