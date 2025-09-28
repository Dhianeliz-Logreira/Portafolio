
function animacion() {
    let textoAnimacion = [
        ["D", "h", "i", "a", "n", "e"],
        ["D", "e", "s", "a", "r", "r", "o", "l", "l", "a", "d", "o", "r", "a", " ", "W", "e", "b"]
    ];

    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor_text_animacion");

    function colorearTexto(){
        letraContador++;
        contenedorAnimacion.textContent = textoAnimacion[nivelArray].slice(0, letraContador + 1).join("");
        // contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];

        if(letraContador === textoAnimacion[nivelArray].length -1){
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval (() => {
                    // contenedorAnimacion.textContent = "";
                    letraContador--;
                    contenedorAnimacion.textContent = textoAnimacion[nivelArray].slice(0, letraContador + 1).join("");
                    
                    //textoAnimacion[nivelArray].pop();

                    // textoAnimacion[nivelArray].forEach((elemento)=>{
                    //     contenedorAnimacion.textContent += elemento;

                    if(letraContador < 0 ){
                        clearInterval(intervalo);
                        nivelArray++;
                        if (nivelArray > textoAnimacion.length - 1 ) {
                            nivelArray = 0;
                        }
                        intervalo = setInterval(colorearTexto, 150);
 
                    }
                    
                }, 150);

            }, 1000);
        }
    }
    let intervalo = setInterval(colorearTexto, 150);

}
window.addEventListener("load", animacion);





// document.querySelectorAll(".animated").forEach((h2) => {
//     const text = h2.textContent;
//     h2.innerHTML = `
//         <span class="static">${text.slice(0, 2)}</span>
//         ${[...text.slice(2)]
//             .map((char, i) => `<span style="animation-delay: ${i * 0.1}s">${char}</span>`)
//             .join("")}
//          `;    
            
// });

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});