document.addEventListener("DOMContentLoaded", () => {
    // Vänta 5 sekunder innan övergången startar
    setTimeout(() => {
        // Lägg till 'fade-out'-klass för smidig övergång
        document.body.classList.add('fade-out');

        // Vänta på övergången innan du laddar nästa sida
        setTimeout(() => {
            window.location.href = "Startsida.html"; // Byt till din portfolios startsida
        }, 1000); // Matchar övergångstiden i CSS
    }, 2000); // Vänta 2 sekunder innan övergången startar
});
