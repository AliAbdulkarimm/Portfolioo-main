document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "Startsida.html";
        }, 1000);
    }, 2000);
});
