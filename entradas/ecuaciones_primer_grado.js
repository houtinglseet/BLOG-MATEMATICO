const entrada = {
    contenido: String.raw`
<section>
    <h2>Ecuaciones de Primer Grado</h2>
    <p>Una ecuación de primer grado (o lineal) es una igualdad con una incógnita elevada a la potencia 1. Su forma general es $ax + b = 0$, con $a \neq 0$, y siempre tiene una única solución.</p>

    <h3>Procedimiento general</h3>
    <ol>
        <li><strong>Quitar signos de agrupación:</strong> resuelve paréntesis, corchetes y llaves de adentro hacia afuera, aplicando la propiedad distributiva y cuidando los signos.</li>
        <li><strong>Quitar denominadores:</strong> multiplica ambos lados por el mínimo común múltiplo (MCM) de los denominadores.</li>
        <li><strong>Reducir términos semejantes</strong> en cada lado de la igualdad.</li>
        <li><strong>Transponer términos:</strong> deja los términos con la incógnita de un lado y las constantes del otro (al pasar un término al otro lado, cambia de signo).</li>
        <li><strong>Despejar:</strong> divide ambos lados entre el coeficiente de la incógnita.</li>
        <li><strong>Comprobar:</strong> sustituye el valor encontrado en la ecuación original; ambos lados deben dar el mismo resultado.</li>
    </ol>
    <p>Si algún paso no aplica a la ecuación (por ejemplo, no hay fracciones), simplemente se omite.</p>

    <h3>Ejemplo 1: ecuación entera</h3>
    <p>• Problema: $5x - 3 = 2x + 9$</p>
    <p>• Transponemos: $5x - 2x = 9 + 3$</p>
    <p>• Reducimos: $3x = 12$</p>
    <p>• Despejamos: $x = 4$</p>
    <p>• Comprobación: izquierda $5(4) - 3 = 17$; derecha $2(4) + 9 = 17$. Coinciden, entonces $x = 4$ es correcta.</p>

    <h3>Ejemplo 2: ecuación fraccionaria</h3>
    <p>• Problema: $\frac{x+1}{2} - \frac{x-2}{3} = 2$</p>
    <p>• El MCM de 2 y 3 es 6, multiplicamos todo por 6: $3(x+1) - 2(x-2) = 12$</p>
    <p>• Distribuimos: $3x + 3 - 2x + 4 = 12$</p>
    <p>• Reducimos: $x + 7 = 12$</p>
    <p>• Despejamos: $x = 5$</p>
    <p>• Comprobación: $\frac{5+1}{2} - \frac{5-2}{3} = 3 - 1 = 2$. Coincide con el lado derecho.</p>

    <h3>Ejemplo 3: con signos de agrupación</h3>
    <p>• Problema: $4 - [2x - (x + 3)] = 10$</p>
    <p>• Quitamos el paréntesis interior: $4 - [2x - x - 3] = 10$</p>
    <p>• Reducimos dentro del corchete: $4 - [x - 3] = 10$</p>
    <p>• Quitamos el corchete (el signo menos cambia los signos de adentro): $4 - x + 3 = 10$</p>
    <p>• Reducimos: $7 - x = 10$, entonces $-x = 3$, entonces $x = -3$</p>
    <p>• Comprobación: $2(-3) - (-3 + 3) = -6 - 0 = -6$, y $4 - [-6] = 10$. Coincide.</p>

    <h3>Ejemplo 4: ecuación literal (despejar $x$)</h3>
    <p>• Problema: $3(x - a) = 2x + b$</p>
    <p>• Distribuimos: $3x - 3a = 2x + b$</p>
    <p>• Transponemos: $3x - 2x = b + 3a$</p>
    <p>• Despejamos: $x = b + 3a$</p>
    <p>• Comprobación: izquierda $3(b + 3a - a) = 3b + 6a$; derecha $2(b + 3a) + b = 3b + 6a$. Coinciden.</p>

    <h3>Problema de planteamiento propio</h3>
    <p><strong>Enunciado:</strong> Quiero publicar mi blog y comparo dos planes de hosting. El Plan A cobra 120 pesos de instalación más 45 pesos al mes. El Plan B no cobra instalación, pero cuesta 65 pesos al mes. ¿Después de cuántos meses cuestan lo mismo?</p>
    <p><strong>1. Incógnita:</strong> $x$ = número de meses.</p>
    <p><strong>2. Traducción:</strong> Plan A: $120 + 45x$. Plan B: $65x$. "Cuestan lo mismo" significa que ambas expresiones son iguales.</p>
    <p><strong>3. Ecuación:</strong> $120 + 45x = 65x$</p>
    <p><strong>4. Solución:</strong> $120 = 65x - 45x$, entonces $120 = 20x$, entonces $x = 6$.</p>
    <p><strong>5. Validación contra el enunciado:</strong> a los 6 meses el Plan A cuesta $120 + 45(6) = 390$ pesos y el Plan B cuesta $65(6) = 390$ pesos. Cuestan lo mismo, así que la respuesta es correcta: a los <strong>6 meses</strong>. Antes de eso conviene el Plan B, y después el Plan A.</p>
</section>
`
};