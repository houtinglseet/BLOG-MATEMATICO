const entrada = {
    contenido:`
# Factorización I

## 1. Término Común
- **Cómo reconocerlo:** Todos los términos de la expresión comparten coeficientes divisibles por un mismo número (MCD) y/o variables repetidas en cada uno de sus términos.
- **Procedimiento:** Identificamos el máximo común divisor de los coeficientes y las variables comunes elevadas al menor exponente. Dividimos cada término del polinomio original entre este factor común y escribimos el resultado entre paréntesis.
- **Ejemplo resuelto:**
  Factorizar: 6x³y² - 9x²y⁴ + 15x⁴y
  - Factor común: 3x²y
  - Resultado: 3x²y(2xy - 3y³ + 5x²)
- **Comprobación:**
  3x²y(2xy - 3y³ + 5x²) = 6x³y² - 9x²y⁴ + 15x⁴y

---

## 2. Trinomio Cuadrado Perfecto (TCP)
- **Cómo reconocerlo:** Es un trinomio ordenado cuyo primer y tercer término son positivos y tienen raíz cuadrada exacta, mientras que el término central es el doble producto de ambas raíces.
- **Procedimiento:** Calculamos la raíz cuadrada del primer y tercer término. Formamos un binomio con ambas raíces unidas por el signo del término central y elevamos todo el binomio al cuadrado.
- **Ejemplo resuelto:**
  Factorizar: 4x² - 20xy + 25y²
  - Raíz del 1er término: √(4x²) = 2x
  - Raíz del 3er término: √(25y²) = 5y
  - Término central: 2(2x)(5y) = 20xy
  - Resultado: (2x - 5y)²
- **Comprobación:**
  (2x - 5y)² = (2x)² - 2(2x)(5y) + (5y)² = 4x² - 20xy + 25y²

---

## 3. Diferencia de Cuadrados
- **Cómo reconocerlo:** Es un binomio de dos términos restándose donde ambos tienen raíz cuadrada exacta.
- **Procedimiento:** Extraemos la raíz cuadrada de cada término. Escribimos la multiplicación de dos binomios conjugados: en uno sumamos las raíces y en el otro las restamos.
- **Ejemplo resuelto:**
  Factorizar: 49a⁴ - 36b²
  - Raíz del 1er término: √(49a⁴) = 7a²
  - Raíz del 2do término: √(36b²) = 6b
  - Resultado: (7a² + 6b)(7a² - 6b)
- **Comprobación:**
  (7a² + 6b)(7a² - 6b) = (7a²)² - (6b)² = 49a⁴ - 36b²

---

## Ida y Regreso
- **Término Común:** Es el proceso inverso del producto notable de **un monomio por un polinomio** (a(b+c) = ab+ac).
- **Trinomio Cuadrado Perfecto:** Es el proceso inverso del producto notable de un **binomio al cuadrado** ((a ± b)² = a² ± 2ab + b²).
- **Diferencia de Cuadrados:** Es el proceso inverso del producto notable de **binomios conjugados** ((a+b)(a-b) = a² - b²).
`

};