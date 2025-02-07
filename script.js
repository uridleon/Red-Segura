document.getElementById("colorBtn").addEventListener("click", function() {
    const colores = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffcc99"];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
});
