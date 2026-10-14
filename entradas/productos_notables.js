contenidoEntrada = `
<section>
    <h2>Productos notables</h2>
    <p>Una variedad específica de binomios, de los cuales ya tenemos una forma
    fácil de resolverlos.</p>

    <h3>1. Binomio al cuadrado</h3>
    <p>Es un binomio que está elevado al cuadrado, o sea que se multiplica por
    sí mismo: (a + b)<sup>2</sup> = (a + b)(a + b).</p>

    <p><b>Regla:</b> el primero al cuadrado, más (o menos) el doble del primero por
    el segundo, más el segundo al cuadrado. El signo de en medio es el mismo que
    tiene el binomio.</p>
    <p>(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></p>

    <p><b>Ejemplo:</b> (3x + 5)<sup>2</sup></p>
    <ol>
        <li>El primero es 3x y el segundo es 5.</li>
        <li>Primero al cuadrado: (3x)<sup>2</sup> = 9x<sup>2</sup></li>
        <li>Doble del primero por el segundo: 2 · 3x · 5 = 30x</li>
        <li>Segundo al cuadrado: 5<sup>2</sup> = 25</li>
        <li>Resultado: 9x<sup>2</sup> + 30x + 25</li>
    </ol>

    <p><b>Comprobación con la tabla:</b> (3x + 5)(3x + 5)</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>3x</th><th>+5</th></tr>
        <tr><th>3x</th><td>9x<sup>2</sup></td><td>15x</td></tr>
        <tr><th>+5</th><td>15x</td><td>25</td></tr>
    </table>
    <p>Sumo los términos: 9x<sup>2</sup> + 15x + 15x + 25 = 9x<sup>2</sup> + 30x + 25 ✔</p>

    <h3>2. Binomio al cubo</h3>
    <p>Es un binomio que está elevado al cubo, o sea que se multiplica tres veces
    por sí mismo: (a + b)<sup>3</sup> = (a + b)(a + b)(a + b).</p>

    <p><b>Regla:</b> el primero al cubo, más 3 veces el primero al cuadrado por el
    segundo, más 3 veces el primero por el segundo al cuadrado, más el segundo al
    cubo. Si el binomio tiene resta, los signos van alternando (+ − + −).</p>
    <p>(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></p>

    <p><b>Ejemplo:</b> (2x − 3)<sup>3</sup> (aquí a = 2x y b = −3)</p>
    <ol>
        <li>Primero al cubo: (2x)<sup>3</sup> = 8x<sup>3</sup></li>
        <li>3 · (2x)<sup>2</sup> · (−3) = 3 · 4x<sup>2</sup> · (−3) = −36x<sup>2</sup></li>
        <li>3 · (2x) · (−3)<sup>2</sup> = 3 · 2x · 9 = 54x</li>
        <li>Segundo al cubo: (−3)<sup>3</sup> = −27</li>
        <li>Resultado: 8x<sup>3</sup> − 36x<sup>2</sup> + 54x − 27</li>
    </ol>

    <p><b>Comprobación con la tabla:</b> como es al cubo, primero hago el cuadrado:
    (2x − 3)(2x − 3) = 4x<sup>2</sup> − 12x + 9. Ese resultado lo multiplico otra
    vez por (2x − 3):</p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>4x<sup>2</sup></th><th>−12x</th><th>+9</th></tr>
        <tr><th>2x</th><td>8x<sup>3</sup></td><td>−24x<sup>2</sup></td><td>18x</td></tr>
        <tr><th>−3</th><td>−12x<sup>2</sup></td><td>36x</td><td>−27</td></tr>
    </table>
    <p>Sumo los términos: 8x<sup>3</sup> + (−24x<sup>2</sup> − 12x<sup>2</sup>) + (18x + 36x) − 27
    = 8x<sup>3</sup> − 36x<sup>2</sup> + 54x − 27 ✔</p>

    <h3>3. Binomios con término común</h3>
    <p>Son dos binomios diferentes que tienen un término igual en los dos, por
    ejemplo la x en (x + a)(x + b).</p>

    <p><b>Regla:</b> el término común al cuadrado, más la suma de los otros dos
    términos multiplicada por el común, más el producto de los otros dos términos.</p>
    <p>(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab</p>

    <p><b>Ejemplo:</b> (x + 7)(x − 4) (el común es x, y los otros son 7 y −4)</p>
    <ol>
        <li>Común al cuadrado: x<sup>2</sup></li>
        <li>Suma de los otros: 7 + (−4) = 3, entonces queda 3x</li>
        <li>Producto de los otros: 7 · (−4) = −28</li>
        <li>Resultado: x<sup>2</sup> + 3x − 28</li>
    </ol>

    <p><b>Comprobación con la tabla:</b></p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>x</th><th>−4</th></tr>
        <tr><th>x</th><td>x<sup>2</sup></td><td>−4x</td></tr>
        <tr><th>+7</th><td>7x</td><td>−28</td></tr>
    </table>
    <p>Sumo los términos: x<sup>2</sup> − 4x + 7x − 28 = x<sup>2</sup> + 3x − 28 ✔</p>

    <h3>4. Binomios conjugados</h3>
    <p>Son dos binomios que tienen los mismos términos, pero en uno se suman y en
    el otro se restan: (a + b)(a − b).</p>

    <p><b>Regla:</b> los términos de en medio se cancelan, y queda el primero al
    cuadrado menos el segundo al cuadrado (una diferencia de cuadrados).</p>
    <p>(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></p>

    <p><b>Ejemplo:</b> (4x + 3)(4x − 3)</p>
    <ol>
        <li>Primero al cuadrado: (4x)<sup>2</sup> = 16x<sup>2</sup></li>
        <li>Segundo al cuadrado: 3<sup>2</sup> = 9</li>
        <li>Se restan: 16x<sup>2</sup> − 9</li>
    </ol>

    <p><b>Comprobación con la tabla:</b></p>
    <table class="tabla" border="1" cellpadding="6">
        <tr><th>×</th><th>4x</th><th>−3</th></tr>
        <tr><th>4x</th><td>16x<sup>2</sup></td><td>−12x</td></tr>
        <tr><th>+3</th><td>12x</td><td>−9</td></tr>
    </table>
    <p>Sumo los términos: 16x<sup>2</sup> − 12x + 12x − 9 = 16x<sup>2</sup> − 9 ✔
    (el −12x y el +12x se cancelan)</p>
</section>`;