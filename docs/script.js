// Missatge de control
console.log("FoodLogistic Web carregada correctament!");

// Animació d'il·luminació temporal quan es fa scroll
document.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.style.boxShadow = "0 0 15px rgba(30, 62, 117, 0.4)";
            setTimeout(() => {
                card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }, 800);
        }
    });
});
