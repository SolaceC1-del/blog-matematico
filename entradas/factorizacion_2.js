contenidoEntrada = `
<section>
    <h2>Factorización II</h2>
    <p>Sigo con la idea de que factorizar es lo contrario de multiplicar: tengo una
    suma o resta de términos y la escribo como una multiplicación de factores. Aquí
    veo cuatro casos más y al final dejo una estrategia para decidir cuál usar.</p>

    <h3>1. Suma de cubos</h3>
    <p><b>Cómo reconocerla:</b> son solo 2 términos, hay una suma entre ellos y los
    dos tienen raíz cúbica exacta.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Saco la raíz cúbica de cada término. A la primera le llamo a y a la segunda b.</li>
        <li>Escribo el binomio (a + b).</li>
        <li>Escribo el trinomio: a<sup>2</sup> − ab + b<sup>2</sup> (los signos van + − +, no se repite el de la suma).</li>
        <li>Resultado: a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)</li>
    </ol>
    <p><b>Ejemplo:</b> 27y<sup>3</sup> + 1000</p>
    <ol>
        <li>Raíz cúbica de 27y<sup>3</sup> = 3y, entonces a = 3y.</li>
        <li>Raíz cúbica de 1000 = 10, entonces b = 10.</li>
        <li>a<sup>2</sup> = (3y)<sup>2</sup> = 9y<sup>2</sup></li>
        <li>ab = 3y · 10 = 30y</li>
        <li>b<sup>2</sup> = 10<sup>2</sup> = 100</li>
        <li>Resultado: (3y + 10)(9y<sup>2</sup> − 30y + 100)</li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b> (3y + 10)(9y<sup>2</sup> − 30y + 100)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>9y<sup>2</sup></th><th>−30y</th><th>+100</th></tr>
        <tr><th>3y</th><td>27y<sup>3</sup></td><td>−90y<sup>2</sup></td><td>300y</td></tr>
        <tr><th>+10</th><td>90y<sup>2</sup></td><td>−300y</td><td>1000</td></tr>
    </table>
    <p>Sumo: 27y<sup>3</sup> − 90y<sup>2</sup> + 90y<sup>2</sup> + 300y − 300y + 1000 = 27y<sup>3</sup> + 1000,
    que es la expresión original (los términos de en medio se cancelan).</p>

    <h3>2. Diferencia de cubos</h3>
    <p><b>Cómo reconocerla:</b> son 2 términos, hay una resta entre ellos y los dos
    tienen raíz cúbica exacta.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Saco la raíz cúbica de cada término (a y b).</li>
        <li>Escribo el binomio (a − b), con la resta.</li>
        <li>Escribo el trinomio: a<sup>2</sup> + ab + b<sup>2</sup> (los signos van todos +).</li>
        <li>Resultado: a<sup>3</sup> − b<sup>3</sup> = (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)</li>
    </ol>
    <p><b>Ejemplo:</b> 729x<sup>3</sup> − 1</p>
    <ol>
        <li>Raíz cúbica de 729x<sup>3</sup> = 9x, entonces a = 9x.</li>
        <li>Raíz cúbica de 1 = 1, entonces b = 1.</li>
        <li>a<sup>2</sup> = (9x)<sup>2</sup> = 81x<sup>2</sup></li>
        <li>ab = 9x · 1 = 9x</li>
        <li>b<sup>2</sup> = 1</li>
        <li>Resultado: (9x − 1)(81x<sup>2</sup> + 9x + 1)</li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b> (9x − 1)(81x<sup>2</sup> + 9x + 1)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>81x<sup>2</sup></th><th>+9x</th><th>+1</th></tr>
        <tr><th>9x</th><td>729x<sup>3</sup></td><td>81x<sup>2</sup></td><td>9x</td></tr>
        <tr><th>−1</th><td>−81x<sup>2</sup></td><td>−9x</td><td>−1</td></tr>
    </table>
    <p>Sumo: 729x<sup>3</sup> + 81x<sup>2</sup> − 81x<sup>2</sup> + 9x − 9x − 1 = 729x<sup>3</sup> − 1,
    que es la expresión original.</p>
    <p><b>Ojo:</b> el trinomio que sale (a<sup>2</sup> ± ab + b<sup>2</sup>) ya no se
    puede factorizar más, ahí me detengo.</p>

    <h3>3. Trinomio de la forma x<sup>2</sup> + bx + c</h3>
    <p><b>Cómo reconocerlo:</b> tiene 3 términos, el que lleva x<sup>2</sup> tiene
    coeficiente 1, y no es un trinomio cuadrado perfecto.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Busco dos números que multiplicados den c (el término sin letra).</li>
        <li>Esos mismos dos números tienen que sumar b (el número que acompaña a x).</li>
        <li>Si esos números son m y n, el resultado es (x + m)(x + n).</li>
    </ol>
    <p><b>Ejemplo:</b> x<sup>2</sup> + 5x − 84</p>
    <ol>
        <li>Busco dos números que multipliquen −84 y sumen +5.</li>
        <li>Pruebo 7 y −12: multiplican −84 pero suman −5, no sirven (el signo quedó al revés).</li>
        <li>Pruebo 12 y −7: multiplican −84 y suman +5, esos sirven.</li>
        <li>Resultado: (x + 12)(x − 7)</li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b> (x + 12)(x − 7)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>x</th><th>−7</th></tr>
        <tr><th>x</th><td>x<sup>2</sup></td><td>−7x</td></tr>
        <tr><th>+12</th><td>12x</td><td>−84</td></tr>
    </table>
    <p>Sumo: x<sup>2</sup> − 7x + 12x − 84 = x<sup>2</sup> + 5x − 84, que es la expresión original.</p>

    <h3>4. Trinomio de la forma ax<sup>2</sup> + bx + c (aspa simple)</h3>
    <p><b>Cómo reconocerlo:</b> tiene 3 términos, pero ahora el número que acompaña
    a x<sup>2</sup> es distinto de 1.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Descompongo el primer término en dos factores (por ejemplo 6x<sup>2</sup> = 3x · 2x).</li>
        <li>Descompongo el último término en dos factores (por ejemplo −10 = −2 · 5).</li>
        <li>Los acomodo en dos filas y multiplico en cruz, formando una X (el aspa).</li>
        <li>Sumo los dos productos en cruz. Si da el término de en medio, acerté. Si no, pruebo otra combinación.</li>
        <li>Los factores se leen en horizontal, fila por fila.</li>
    </ol>
    <p><b>Ejemplo:</b> 6x<sup>2</sup> + 11x − 10</p>
<pre>
 6x²  +  11x  −  10

 3x          −2     →  (2x)(−2) = −4x
 2x          +5     →  (3x)(+5) = +15x
                               ─────────
                                +11x
</pre>
    <ol>
        <li>El producto en cruz de arriba es 2x · (−2) = −4x.</li>
        <li>El producto en cruz de abajo es 3x · 5 = 15x.</li>
        <li>Los sumo: −4x + 15x = 11x, que es el término de en medio.</li>
        <li>Leo las filas: (3x − 2) y (2x + 5).</li>
        <li>Resultado: (3x − 2)(2x + 5)</li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b> (3x − 2)(2x + 5)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>2x</th><th>+5</th></tr>
        <tr><th>3x</th><td>6x<sup>2</sup></td><td>15x</td></tr>
        <tr><th>−2</th><td>−4x</td><td>−10</td></tr>
    </table>
    <p>Sumo: 6x<sup>2</sup> + 15x − 4x − 10 = 6x<sup>2</sup> + 11x − 10, que es la expresión original.</p>

    <h3>Ida y regreso</h3>
    <p>Igual que en Factorización I, cada caso es el inverso de una multiplicación.</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>Caso de factorización (regreso)</th><th>Es el inverso de (ida)</th><th>Ejemplo</th></tr>
        <tr>
            <td>Trinomio x<sup>2</sup> + bx + c</td>
            <td>Binomios con término común</td>
            <td>(x + 12)(x − 7) ↔ x<sup>2</sup> + 5x − 84</td>
        </tr>
        <tr>
            <td>Aspa simple</td>
            <td>Multiplicar dos binomios cuyo primer término no es x solo</td>
            <td>(3x − 2)(2x + 5) ↔ 6x<sup>2</sup> + 11x − 10</td>
        </tr>
        <tr>
            <td>Suma y diferencia de cubos</td>
            <td>Binomio por trinomio</td>
            <td>(9x − 1)(81x<sup>2</sup> + 9x + 1) ↔ 729x<sup>3</sup> − 1</td>
        </tr>
    </table>

    <h2>Estrategia de factorización</h2>
    <p>Cuando me dan un polinomio y no sé por dónde empezar, sigo estos pasos en orden.</p>

    <h3>Paso 1. Busco un factor común</h3>
    <p>Siempre es lo primero. Si todos los términos comparten un número o una letra,
    lo saco afuera. Así lo que queda dentro del paréntesis es más fácil de factorizar.</p>

    <h3>Paso 2. Cuento los términos de lo que quedó</h3>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>Términos</th><th>Me pregunto...</th><th>Caso</th></tr>
        <tr>
            <td rowspan="4">2</td>
            <td>¿Hay una resta y los dos tienen raíz cuadrada exacta?</td>
            <td>Diferencia de cuadrados: (a + b)(a − b)</td>
        </tr>
        <tr>
            <td>¿Hay una suma y los dos tienen raíz cúbica exacta?</td>
            <td>Suma de cubos</td>
        </tr>
        <tr>
            <td>¿Hay una resta y los dos tienen raíz cúbica exacta?</td>
            <td>Diferencia de cubos</td>
        </tr>
        <tr>
            <td>¿Es una suma de cuadrados (a<sup>2</sup> + b<sup>2</sup>)?</td>
            <td>No se puede factorizar con números reales</td>
        </tr>
        <tr>
            <td rowspan="3">3</td>
            <td>¿El primero y el último tienen raíz cuadrada exacta y el de en medio es el doble producto de las raíces?</td>
            <td>Trinomio cuadrado perfecto: (a ± b)<sup>2</sup></td>
        </tr>
        <tr>
            <td>¿El número que acompaña a x<sup>2</sup> es 1?</td>
            <td>Trinomio x<sup>2</sup> + bx + c</td>
        </tr>
        <tr>
            <td>¿El número que acompaña a x<sup>2</sup> es distinto de 1?</td>
            <td>Aspa simple ax<sup>2</sup> + bx + c</td>
        </tr>
    </table>

    <h3>Paso 3. Reviso cada factor que obtuve</h3>
    <p>Muchas veces un factor se puede factorizar otra vez. Repito el proceso hasta
    que ningún factor se pueda separar más.</p>

    <h3>Paso 4. Compruebo</h3>
    <p>Multiplico todos los factores. Si regreso al polinomio del inicio, está bien.</p>

    <p><b>Ejemplo 1:</b> 3x<sup>4</sup> − 48</p>
    <ol>
        <li>Paso 1: el factor común es 3. Queda 3(x<sup>4</sup> − 16).</li>
        <li>Paso 2: dentro hay 2 términos con resta y los dos tienen raíz cuadrada exacta (x<sup>2</sup> y 4). Es diferencia de cuadrados: 3(x<sup>2</sup> + 4)(x<sup>2</sup> − 4).</li>
        <li>Paso 3: x<sup>2</sup> − 4 es otra diferencia de cuadrados, entonces se factoriza otra vez. x<sup>2</sup> + 4 es suma de cuadrados y ahí termina.</li>
        <li>Resultado: 3(x<sup>2</sup> + 4)(x + 2)(x − 2)</li>
        <li>Paso 4: (x + 2)(x − 2) = x<sup>2</sup> − 4, y 3(x<sup>2</sup> + 4)(x<sup>2</sup> − 4) = 3(x<sup>4</sup> − 16) = 3x<sup>4</sup> − 48, que es el polinomio original.</li>
    </ol>

    <p><b>Ejemplo 2:</b> 4x<sup>3</sup> − 4x<sup>2</sup> − 24x</p>
    <ol>
        <li>Paso 1: el factor común es 4x. Queda 4x(x<sup>2</sup> − x − 6).</li>
        <li>Paso 2: dentro hay 3 términos y el número que acompaña a x<sup>2</sup> es 1. Busco dos números que multipliquen −6 y sumen −1: son −3 y 2.</li>
        <li>Resultado: 4x(x − 3)(x + 2)</li>
        <li>Paso 4: (x − 3)(x + 2) = x<sup>2</sup> + 2x − 3x − 6 = x<sup>2</sup> − x − 6, y 4x(x<sup>2</sup> − x − 6) = 4x<sup>3</sup> − 4x<sup>2</sup> − 24x, que es el polinomio original.</li>
    </ol>
</section>`;