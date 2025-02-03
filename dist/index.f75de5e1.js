const dataDoAniversario = new Date("Apr 09, 2025 20:00");
const timeStampDoEvento = dataDoAniversario.getTime();
const contaTempo = setInterval(()=>{
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s `;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById("contador").innerHTML = `
        Evento ocorreu no dia 09/04/2025, expirado.
        `;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
