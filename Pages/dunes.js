exports.fr = {
    title: "Les Dunes",
    description: "Une série d'image générées par des fonctions itératives.",
    content: String.raw `
    <div id="page">
    <p>Cette série d'images a été générée par une variété de fonctions itératives.
    J'aime les mathématiques et la programmation, et j'ai décidé de m'en servir pour dessiner. 
    Pour ce projet, j'ai tout d'abord écrit une équation paramétrique dont la courbe ressemble 
    un peu à une méduse.</p>

    <pre><code>function makePage(page, language) {
    var fileName = filenameFormatter(page[language].title);
    makeFile(language, fileName, header + navigation + content + footer);
}</code></pre>

    <img src="../images/dunes/dunes001.jpg">
    <img src="../images/dunes/dunes002.jpg">
    <img src="../images/dunes/dunes003.jpg">

    <pre><code>function makePage(page, language) {
    var fileName = filenameFormatter(page[language].title);
    var header = makeHeader(page, language);
    var navigation = makeNavigation(page, language);
    var content = makeContent(page, language);
    var footer = makeFooter(page, language);
    makeFile(language, fileName, header + navigation + content + footer);
}</code></pre>

    </div>
    `
};

exports.en = {
    title: "Dunes",
    description: "A series of images generated by iterated functions.",
    content: String.raw `
    <div id="page">
    <p>These images were generated by a series of iterated functions.</p>
    <img src="../images/dunes/dunes001.jpg">
    <img src="../images/dunes/dunes002.jpg">
    <div class="math">
    \[
        \begin{align*}
            t &= \frac{i}{10}\\
            x &= \cos(t) \times \sin\bigg(\frac{t}{2}\bigg) \times \bigg(\frac{\sin\big(t\times(2+m)\big)}{4}\bigg) \times 2400 \times \frac{i}{1000}\\
            y &= \sin^3\bigg(\frac{t}{2}\bigg) \times \cos\bigg(\frac{t}{20}\bigg) \times 350
        \end{align*}
    \]
    </div>
    <img src="../images/dunes/dunes003.jpg">
        <pre><code>function makePage(page, language) {
    var fileName = filenameFormatter(page[language].title);
    var header = makeHeader(page, language);
    var navigation = makeNavigation(page, language);
    var content = makeContent(page, language);
    var footer = makeFooter(page, language);
    makeFile(language, fileName, header + navigation + content + footer);
}</code></pre>
    </div>
    `
}

exports.link = null;
