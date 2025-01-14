document.addEventListener("DOMContentLoaded", function() {
    // Recuperar los niveles guardados en localStorage o establecer valores por defecto
    const cisterna1Nivel = localStorage.getItem("nivel-cisterna1") || 50;
    const cisterna2Nivel = localStorage.getItem("nivel-cisterna2") || 30;
    const tinaco1Nivel = localStorage.getItem("nivel-tinaco1") || 70;
    const tinaco2Nivel = localStorage.getItem("nivel-tinaco2") || 40;
    const tinaco3Nivel = localStorage.getItem("nivel-tinaco3") || 90;
    const tinacoUnicoNivel = localStorage.getItem("nivel-tinaco-unico") || 60;

    // Establecer los valores iniciales de los controles de rango
    document.getElementById("nivel-cisterna1-control").value = cisterna1Nivel;
    document.getElementById("nivel-cisterna2-control").value = cisterna2Nivel;
    document.getElementById("nivel-tinaco1-control").value = tinaco1Nivel;
    document.getElementById("nivel-tinaco2-control").value = tinaco2Nivel;
    document.getElementById("nivel-tinaco3-control").value = tinaco3Nivel;
    document.getElementById("nivel-tinaco-unico-control").value = tinacoUnicoNivel;

    // Actualizar las visualizaciones
    updateWaterLevel("cisterna1", cisterna1Nivel);
    updateWaterLevel("cisterna2", cisterna2Nivel);
    updateWaterLevel("tinaco1", tinaco1Nivel);
    updateWaterLevel("tinaco2", tinaco2Nivel);
    updateWaterLevel("tinaco3", tinaco3Nivel);
    updateWaterLevel("tinaco-unico", tinacoUnicoNivel);

    // Agregar evento para actualizar los niveles cuando se cambie el control
    document.getElementById("nivel-cisterna1-control").addEventListener("input", function() {
        const nivel = this.value;
        localStorage.setItem("nivel-cisterna1", nivel);
        document.getElementById("nivel-cisterna1-text").textContent = nivel + "%";
        updateWaterLevel("cisterna1", nivel);
    });

    document.getElementById("nivel-cisterna2-control").addEventListener("input", function() {
        const nivel = this.value;
        localStorage.setItem("nivel-cisterna2", nivel);
        document.getElementById("nivel-cisterna2-text").textContent = nivel + "%";
        updateWaterLevel("cisterna2", nivel);
    });

    document.getElementById("nivel-tinaco1-control").addEventListener("input", function() {
        const nivel = this.value;
        localStorage.setItem("nivel-tinaco1", nivel);
        document.getElementById("nivel-tinaco1-text").textContent = nivel + "%";
        updateWaterLevel("tinaco1", nivel);
    });

    document.getElementById("nivel-tinaco2-control").addEventListener("input", function() {
        const nivel = this.value;
        localStorage.setItem("nivel-tinaco2", nivel);
        document.getElementById("nivel-tinaco2-text").textContent = nivel + "%";
        updateWaterLevel("tinaco2", nivel);
    });

    document.getElementById("nivel-tinaco3-control").addEventListener("input", function() {
        const nivel = this.value;
        localStorage.setItem("nivel-tinaco3", nivel);
        document.getElementById("nivel-tinaco3-text").textContent = nivel + "%";
        updateWaterLevel("tinaco3", nivel);
    });

    document.getElementById("nivel-tinaco-unico-control").addEventListener("input", function() {
        const nivel = this.value;
        localStorage.setItem("nivel-tinaco-unico", nivel);
        document.getElementById("nivel-tinaco-unico-text").textContent = nivel + "%";
        updateWaterLevel("tinaco-unico", nivel);
    });
});

// Función para actualizar la visualización del nivel de agua
function updateWaterLevel(id, nivel) {
    const aguaElement = document.getElementById("agua-" + id);
    const nivelPorcentaje = nivel;
    aguaElement.style.height = nivelPorcentaje + "%"; // Ajusta la altura basada en el porcentaje
}
