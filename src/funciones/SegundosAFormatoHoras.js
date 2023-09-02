export function segundosAFormatoHoras(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = Math.floor(segundos % 60);
    var minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    var segundosFormateados = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;
    return minutosFormateados + ":" + segundosFormateados;
}