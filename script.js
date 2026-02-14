function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function submitTest() {

    let score = 0;

    // Múltipla escolha
    if (document.querySelector('input[name="pergunta1"]:checked')?.value === "is") score++;
    if (document.querySelector('input[name="pergunta2"]:checked')?.value === "has") score++;
    if (document.querySelector('input[name="pergunta7"]:checked')?.value === "where") score++;
    if (document.querySelector('input[name="pergunta8"]:checked')?.value === "d") score++;
    if (document.querySelector('input[name="pergunta9"]:checked')?.value === "c") score++;
    if (document.querySelector('input[name="pergunta10"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="pergunta11"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="pergunta12"]:checked')?.value === "b") score++;

    // Checkbox 
    let checkA = document.getElementById("p6a").checked;
    let checkD = document.getElementById("p6d").checked;
    let checkB = document.getElementById("p6b").checked;
    let checkC = document.getElementById("p6c").checked;

    if (checkA && checkD && !checkB && !checkC) score++;

    // Texto - Questão 3
    let p3 = normalize(document.getElementById("p3").value);
    if (p3.includes("estudando ingles") || p3.includes("estudo ingles")) score++;

    // Texto - Questão 4
    let p4 = normalize(document.getElementById("p4").value);
    if (p4.includes("although") || p4.includes("even though")) score++;

    // Texto - Questão 5
    let p5 = normalize(document.getElementById("p5").value);
    if (p5.includes("se eu tivesse mais tempo")) score++;

    localStorage.setItem("resultadoFinal", score);
    window.location.href = "resultado.html";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnEnviar").addEventListener("click", submitTest);
});
