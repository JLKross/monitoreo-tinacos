// Función para actualizar el nivel de agua
function actualizarNivel(idControl, idCilindro, idAgua, idTexto) {
    const control = document.getElementById(idControl);
    const cilindro = document.getElementById(idCilindro);
    const agua = document.getElementById(idAgua);
    const texto = document.getElementById(idTexto);

    control.addEventListener('input', function() {
        const porcentaje = control.value;
        const alturaAgua = (porcentaje / 100) * cilindro.offsetHeight;
        agua.style.height = `${alturaAgua}px`;

        texto.textContent = `${porcentaje}%`;
    });
}

// Inicializar niveles de agua
actualizarNivel('nivel-cisterna1-control', 'cilindro-cisterna1', 'agua-cisterna1', 'nivel-cisterna1-text');
actualizarNivel('nivel-cisterna2-control', 'cilindro-cisterna2', 'agua-cisterna2', 'nivel-cisterna2-text');
actualizarNivel('nivel-tinaco1-control', 'cilindro-tinaco1', 'agua-tinaco1', 'nivel-tinaco1-text');
actualizarNivel('nivel-tinaco2-control', 'cilindro-tinaco2', 'agua-tinaco2', 'nivel-tinaco2-text');
actualizarNivel('nivel-tinaco3-control', 'cilindro-tinaco3', 'agua-tinaco3', 'nivel-tinaco3-text');
actualizarNivel('nivel-tinaco-unico-control', 'cilindro-tinaco-unico', 'agua-tinaco-unico', 'nivel-tinaco-unico-text');
