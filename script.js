// Función para actualizar el nivel de agua en el tinaco
function actualizarNivel(tinacoId, aguaId, controlId, textoId) {
    const tinaco = document.getElementById(tinacoId);
    const agua = document.getElementById(aguaId);
    const control = document.getElementById(controlId);
    const texto = document.getElementById(textoId);
    
    // Obtener el valor del control deslizante (0-100)
    const nivel = control.value;
    
    // Actualizar la altura del agua en función del valor del control deslizante
    const maxAltura = tinaco.offsetHeight;  // Altura total del tinaco (cilindro)
    const alturaAgua = (nivel / 100) * maxAltura;  // Calcula la altura del agua
    
    // Establecer la altura de la capa de agua
    agua.style.height = alturaAgua + 'px';
    
    // Mostrar el porcentaje en el texto
    texto.innerHTML = `${nivel}%`;
}

// Asignar eventos de cambio a los controles deslizantes
document.getElementById('nivel-cisterna1-control').addEventListener('input', () => {
    actualizarNivel('cilindro-cisterna1', 'agua-cisterna1', 'nivel-cisterna1-control', 'nivel-cisterna1-text');
});

document.getElementById('nivel-cisterna2-control').addEventListener('input', () => {
    actualizarNivel('cilindro-cisterna2', 'agua-cisterna2', 'nivel-cisterna2-control', 'nivel-cisterna2-text');
});

document.getElementById('nivel-tinaco1-control').addEventListener('input', () => {
    actualizarNivel('cilindro-tinaco1', 'agua-tinaco1', 'nivel-tinaco1-control', 'nivel-tinaco1-text');
});

document.getElementById('nivel-tinaco2-control').addEventListener('input', () => {
    actualizarNivel('cilindro-tinaco2', 'agua-tinaco2', 'nivel-tinaco2-control', 'nivel-tinaco2-text');
});

document.getElementById('nivel-tinaco3-control').addEventListener('input', () => {
    actualizarNivel('cilindro-tinaco3', 'agua-tinaco3', 'nivel-tinaco3-control', 'nivel-tinaco3-text');
});

document.getElementById('nivel-tinaco-unico-control').addEventListener('input', () => {
    actualizarNivel('cilindro-tinaco-unico', 'agua-tinaco-unico', 'nivel-tinaco-unico-control', 'nivel-tinaco-unico-text');
});

// Inicializar con los valores actuales
actualizarNivel('cilindro-cisterna1', 'agua-cisterna1', 'nivel-cisterna1-control', 'nivel-cisterna1-text');
actualizarNivel('cilindro-cisterna2', 'agua-cisterna2', 'nivel-cisterna2-control', 'nivel-cisterna2-text');
actualizarNivel('cilindro-tinaco1', 'agua-tinaco1', 'nivel-tinaco1-control', 'nivel-tinaco1-text');
actualizarNivel('cilindro-tinaco2', 'agua-tinaco2', 'nivel-tinaco2-control', 'nivel-tinaco2-text');
actualizarNivel('cilindro-tinaco3', 'agua-tinaco3', 'nivel-tinaco3-control', 'nivel-tinaco3-text');
actualizarNivel('cilindro-tinaco-unico', 'agua-tinaco-unico', 'nivel-tinaco-unico-control', 'nivel-tinaco-unico-text');
