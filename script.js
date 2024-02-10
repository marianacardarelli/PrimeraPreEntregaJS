
alert("Vamos a resolver ecuaciones del tipo ax+b=0 donde a y b son números reales y a!=0")
function resolverEcuacion() {
    let coeficientesValidos = false

    while (!coeficientesValidos) {
        let a = prompt("Ingrese el coeficiente principal 'a' de la ecuación lineal:")
        let b = prompt("Ingrese el término independiente 'b' de la ecuación lineal:")
        let aNumber = Number(a)
        let bNumber = Number(b)

        if (!isNaN(aNumber) && !isNaN(bNumber) && aNumber !== 0) {
            let solucion = solucionEcuacion(aNumber, bNumber)
            alert("La solución de la ecuación " + aNumber + "x + " + bNumber + " = 0 es x = " + solucion)
            coeficientesValidos = true
        } else if (isNaN(aNumber) || isNaN(bNumber)) {
            alert("Por favor, ingrese coeficientes válidos (números).")
        } else {
            alert("La ecuación no es lineal ya que a=0")
        }
    }
}

function solucionEcuacion(a, b) {
    if (a === 0) {
        alert("La ecuación no es lineal ya que a=0")
        return
    } else {
        const x = -b / a
        return x
    }
}

resolverEcuacion()