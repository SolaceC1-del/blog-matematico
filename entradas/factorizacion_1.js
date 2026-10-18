contenidoEntrada = `
<section>
    <h2>Factorización I</h2>
    <p>Factorizar es lo contrario de multiplicar: tengo una suma o resta de
    términos y la escribo como una multiplicación de factores. Aquí veo tres casos.</p>

    <h3>1. Factor común</h3>
    <p><b>Cómo reconocerlo:</b> todos los términos tienen algo en común, ya sea un
    número, una letra o las dos cosas.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Busco el número más grande que divide a todos los coeficientes.</li>
        <li>Busco las letras que están en todos los términos y me quedo con la de menor exponente.</li>
        <li>Eso junto es el factor común. Lo escribo afuera de un paréntesis.</li>
        <li>Divido cada término entre el factor común y lo que sale va dentro del paréntesis.</li>
    </ol>
    <p><b>Ejemplo:</b> 12x<sup>3</sup> + 18x<sup>2</sup> − 6x</p>
    <ol>
        <li>El número más grande que divide a 12, 18 y 6 es 6.</li>
        <li>La letra x está en todos, y el menor exponente es 1, entonces es x.</li>
        <li>El factor común es 6x.</li>
        <li>12x<sup>3</sup> ÷ 6x = 2x<sup>2</sup></li>
        <li>18x<sup>2</sup> ÷ 6x = 3x</li>
        <li>−6x ÷ 6x = −1</li>
        <li>Resultado: 6x(2x<sup>2</sup> + 3x − 1)</li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b></p>
    <ul>
        <li>6x · 2x<sup>2</sup> = 12x<sup>3</sup></li>
        <li>6x · 3x = 18x<sup>2</sup></li>
        <li>6x · (−1) = −6x</li>
    </ul>
    <p>Junto todo: 12x<sup>3</sup> + 18x<sup>2</sup> − 6x ✔ es la expresión original.</p>

    <h3>2. Trinomio cuadrado perfecto</h3>
    <p><b>Cómo reconocerlo:</b> tiene 3 términos. El primero y el último tienen raíz
    cuadrada exacta, y el de en medio es el doble de multiplicar esas dos raíces.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Saco la raíz cuadrada del primer término.</li>
        <li>Saco la raíz cuadrada del último término.</li>
        <li>Compruebo que 2 · raíz1 · raíz2 sea el término de en medio.</li>
        <li>Escribo (raíz1 ± raíz2)<sup>2</sup>, con el signo que tenga el término de en medio.</li>
    </ol>
    <p><b>Ejemplo:</b> 16x<sup>2</sup> − 40x + 25</p>
    <ol>
        <li>Raíz de 16x<sup>2</sup> = 4x</li>
        <li>Raíz de 25 = 5</li>
        <li>Doble producto: 2 · 4x · 5 = 40x ✔ (coincide con el de en medio)</li>
        <li>El de en medio es negativo, entonces el binomio lleva resta.</li>
        <li>Resultado: (4x − 5)<sup>2</sup></li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b> (4x − 5)(4x − 5)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>4x</th><th>−5</th></tr>
        <tr><th>4x</th><td>16x<sup>2</sup></td><td>−20x</td></tr>
        <tr><th>−5</th><td>−20x</td><td>25</td></tr>
    </table>
    <p>Sumo: 16x<sup>2</sup> − 20x − 20x + 25 = 16x<sup>2</sup> − 40x + 25 ✔</p>

    <h3>3. Diferencia de cuadrados</h3>
    <p><b>Cómo reconocerlo:</b> son solo 2 términos, hay una resta entre ellos y los
    dos tienen raíz cuadrada exacta.</p>
    <p><b>Procedimiento:</b></p>
    <ol>
        <li>Saco la raíz cuadrada de cada término.</li>
        <li>Escribo dos paréntesis: en uno las raíces con suma y en el otro las mismas raíces con resta.</li>
    </ol>
    <p><b>Ejemplo:</b> 25x<sup>2</sup> − 81</p>
    <ol>
        <li>Raíz de 25x<sup>2</sup> = 5x</li>
        <li>Raíz de 81 = 9</li>
        <li>Resultado: (5x + 9)(5x − 9)</li>
    </ol>
    <p><b>Comprobación (multiplico de regreso):</b> (5x + 9)(5x − 9)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>5x</th><th>−9</th></tr>
        <tr><th>5x</th><td>25x<sup>2</sup></td><td>−45x</td></tr>
        <tr><th>+9</th><td>45x</td><td>−81</td></tr>
    </table>
    <p>Sumo: 25x<sup>2</sup> − 45x + 45x − 81 = 25x<sup>2</sup> − 81 ✔
    (el −45x y el +45x se cancelan)</p>

    <h3>Ida y regreso</h3>
    <p>Multiplicar y factorizar son el mismo camino en sentidos contrarios. La "ida"
    es multiplicar (de factores a la expresión desarrollada) y el "regreso" es factorizar.</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>Caso de factorización (regreso)</th><th>Es el inverso de (ida)</th><th>Ejemplo</th></tr>
        <tr>
            <td>Trinomio cuadrado perfecto</td>
            <td>Binomio al cuadrado</td>
            <td>(4x − 5)<sup>2</sup> ↔ 16x<sup>2</sup> − 40x + 25</td>
        </tr>
        <tr>
            <td>Diferencia de cuadrados</td>
            <td>Binomios conjugados</td>
            <td>(5x + 9)(5x − 9) ↔ 25x<sup>2</sup> − 81</td>
        </tr>
        <tr>
            <td>Factor común</td>
            <td>Multiplicar un monomio por un polinomio (propiedad distributiva). No es un producto notable.</td>
            <td>6x(2x<sup>2</sup> + 3x − 1) ↔ 12x<sup>3</sup> + 18x<sup>2</sup> − 6x</td>
        </tr>
    </table>
    <p>Por ejemplo, en la ida, (4x − 5)<sup>2</sup> se resuelve con la regla del binomio al
    cuadrado y da 16x<sup>2</sup> − 40x + 25. En el regreso reconozco ese trinomio como
    cuadrado perfecto y vuelvo a (4x − 5)<sup>2</sup>.</p>
</section>`;