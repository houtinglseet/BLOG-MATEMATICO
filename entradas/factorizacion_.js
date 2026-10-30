const entrada = {
    contenido: String.raw`
<section>
    <h2>Factorización II</h2>
    <p>Continuación del estudio de los casos avanzados de factorización y desarrollo de estrategias analíticas para polinomios.</p>

    <h3>Suma y Diferencia de Cubos</h3>
    <p><strong>Cómo reconocerlo:</strong> Dos términos que son cubos perfectos separados por un signo de suma o resta ($a^3 \pm b^3$).</p>
    <p><strong>Procedimiento:</strong> Sacas la raíz cúbica de ambos términos para formar un binomio con el mismo signo central. Luego, construyes un trinomio multiplicando el cuadrado del primer término, el producto de ambos términos con signo cambiado, y sumando el cuadrado del segundo término.</p>
    <p><strong>Ejemplo Resuelto:</strong></p>
    <p>• Problema: $8x^3 + 27$</p>
    <p>• Solución: $(2x + 3)(4x^2 - 6x + 9)$</p>
    <p>• Comprobación: $(2x)(4x^2 - 6x + 9) + 3(4x^2 - 6x + 9) = 8x^3 - 12x^2 + 18x + 12x^2 - 18x + 27 = 8x^3 + 27$.</p>

    <h3>Trinomios $x^2 + bx + c$</h3>
    <p><strong>Cómo reconocerlo:</strong> Un trinomio donde el coeficiente principal del término cuadrático es $1$, el término medio tiene la variable con exponente $1$, y el tercer término es una constante.</p>
    <p><strong>Procedimiento:</strong> Buscas dos números que multiplicados den como resultado el término independiente ($c$) y sumados den como resultado el coeficiente del término lineal ($b$). Se expresa como el producto de dos binomios $(x + m)(x + n)$.</p>
    <p><strong>Ejemplo Resuelto:</strong></p>
    <p>• Problema: $x^2 + 7x + 10$</p>
    <p>• Solución: $(x + 5)(x + 2)$</p>
    <p>• Comprobación: $(x + 5)(x + 2) = x^2 + 2x + 5x + 10 = x^2 + 7x + 10$.</p>

    <h3>Trinomios $ax^2 + bx + c$ (Aspa Simple)</h3>
    <p><strong>Cómo reconocerlo:</strong> Un trinomio donde el coeficiente del término cuadrático es diferente de $1$ ($a \neq 1$).</p>
    <p><strong>Procedimiento:</strong> Descompones el término cuadrático y el término independiente en factores. Utilizas el método del aspa (multiplicación cruzada) de modo que la suma de los productos cruzados coincida exactamente con el término central ($b$).</p>
    <p><strong>Ejemplo Resuelto:</strong></p>
    <p>• Problema: $2x^2 + 7x + 3$</p>
    <p>• Solución: $(2x + 1)(x + 3)$</p>
    <p>• Comprobación: $(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$.</p>

    <h3>Estrategia de Factorización</h3>
    <p><strong>Pasos para decidir qué caso aplicar:</strong></p>
    <p>1. <strong>Factor Común:</strong> Revisa siempre si todos los términos comparten un monomio o polinomio común y extráelo primero.</p>
    <p>2. <strong>Cuenta el número de términos:</strong></p>
    <p>&nbsp;&nbsp;&nbsp;- Si tiene <strong>2 términos</strong>: Verifica si es una <em>Diferencia de Cuadrados</em> ($a^2 - b^2$) o una <em>Suma/Diferencia de Cubos</em> ($a^3 \pm b^3$).</p>
    <p>&nbsp;&nbsp;&nbsp;- Si tiene <strong>3 términos</strong>: Comprueba si es un <em>Trinomio Cuadrado Perfecto</em>, un trinomio simple tipo $x^2 + bx + c$ ($a=1$), o un trinomio general $ax^2 + bx + c$ ($a \neq 1$) resoluble por aspa simple.</p>
    <p>&nbsp;&nbsp;&nbsp;- Si tiene <strong>4 o más términos</strong>: Aplica factorización por <em>Agrupación de Términos</em>.</p>
</section>
`
};