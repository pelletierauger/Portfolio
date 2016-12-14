//First, we get the list of all the pages we need to make, in order, in pages.list, and
//we also get all the pages that are defined inside the pages.js module, in pages.pages.
var pages = require("./pages/pages.js");
var filenameFormatter = require('./filename-formatter.js');
var codeFormatter = require('./code-formatter.js');
var mathFormatter = require('./math-formatter.js');
mathFormatter.start();

makeIndex(pages, "fr", "./");
makeIndex(pages, "en", "./");
makeIndex(pages, "en", "./en/");

//For each element in the list of pages, the single page is either a property of pages.js module,
//or it's a property of a standalone module.
//Let page be the property pages.list[i] if it exists, otherwise load a standalone module.

for (var i = 0; i <  pages.list.length; i++) {
    var page = (pages.pages[pages.list[i]] || require('./pages/' + pages.list[i]));
    if (!page.link) {
        makePage(page, "fr");
        makePage(page, "en");
    }
}

function makePage(page, language) {
    var fileName = filenameFormatter(page[language].title);
    var header = makeHeader(page, language);
    var navigation = makeNavigation(page, language);
    var content = makeContent(page, language);
    var footer = makeFooter(page, language);
    makeFile(language, fileName, header + navigation + content + footer);
}

function makeHeader(page, language, prefix) {
    //If its a page and it has content, test the content with this regular expression.
    //If there is code embedded in the HTML content,
    //add the code.css stylesheet to the head of the HTML file.
    //Also, the font Inconsolata gets added to the head if there is embedded code.

    var codeCSS = "";
    var codeFont = "";
    if (page && page[language].content) {
        var r = /(<code>)([\S\s]*?)(<\/code>)/g;
        if (page[language].content.match(r)) {
            codeCSS = `<link href="../code.css" rel="stylesheet" type="text/css">`;
            codeFont = "Inconsolata|";
        }
    }

    var title = (page) ? " - " + page[language].title : "";
    prefix = (prefix == "./en/") ? "" : ".";

    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Guillaume Pelletier-Auger${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=4, user-scalable=yes" />
        <link href="${prefix}./style.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=${codeFont}Open+Sans|Sorts+Mill+Goudy:400,400i" rel="stylesheet">
        ${codeCSS}
    </head>`;
}

function makeNavigation(page, language, prefix) {
    prefix = (prefix || "../");
    var nav1 = (language == "fr") ? "Portfolio" : "Portfolio";
    var nav2 = (language == "fr") ? "À propos" : "About";
    var nav3 = (language == "fr") ? "Français &#8594; English" : "English &#8594; Français";

    var liWorks = (page["en"].title == "index") ? `<li class = "selected">` : "<li>";
    var liAbout = (page["en"].title == "About") ? `<li class = "selected">` : "<li>";

    var oppositeLanguage = (language == "fr") ? "en" : "fr";
    var navAbout = (language == "fr") ? "a-propos" : "about";
    var navLang = (language == "fr") ? filenameFormatter(page["en"].title) : filenameFormatter(page["fr"].title);
    navLang = (navLang == "index") ? "" : navLang + ".html";

    return `<body><div id="wrapper">
    <div id="nav">
    <h1><a href="../${language}/">Guillaume Pelletier-Auger</a></h1>
    <ul>
    ${liWorks}<a href="${prefix}${language}/">${nav1}</a></li>
    ${liAbout}<a href="${prefix}${language}/${navAbout}.html">${nav2}</a></li>
    <li><a href="${prefix}${oppositeLanguage}/${navLang}">${nav3}</a></li>
    </ul>
    </div>`;
}

function makeContent(page, language) {
    return `<div id="main">
    <h2>${page[language].title}</h2>
    ${page[language].content}</div>`;
}


function makeFooter(page, language) {
    return `<div id="footer">Guillaume Pelletier-Auger - 2016</div></div>
    </body>
    </html>`;
}

function makeFile(language, fileName, htmlContent) {
    //First, we test if htmlContent contains code. We formatted it if it exists.
    //We modify htmlContent with code-formatter, which is synchronous.
    htmlContent = codeFormatter(htmlContent, fileName);

    //Then, we test if htmlContent contains LaTeX math,
    //whether it is displayed mathematics or in-line mathematics.
    var r = /\\\[|\\\(/g;

    if (htmlContent.match(r)) {
        //If it does, we send the htmlContent to math-formatter.js which will write the file itself.
        //(The MathJax-node module is asynchronous, so it's much simpler if it writes the file itself.)
        console.log(fileName + " contains math.");
        mathFormatter.typeset(language, fileName, htmlContent);
    } else {

        //Else, if htmlContent doesn't contain LaTeX math, we write the file right here.
        var fs = require("fs");
        var prefix = (language) ? './' + language + '/' : "./";
        fs.writeFile(prefix + fileName + '.html', htmlContent, function(err) {
            if (err) {
                return console.error(err);
            } else {
                console.log(fileName + '.html written successfully.');
            }
        });
        // console.log("This is the output of a disabled maker.js");
    }
}

//-----------Indexes-----------------------------------------------------------------------//

function makeIndex(pages, language, prefix) {
    var header = makeHeader(null, null, prefix);
    var navPrefix = (prefix == "./en/") ? "./" : "../";
    var navigation = makeNavigation({
        fr: { title: "index" },
        en: { title: "index" }
    }, language, navPrefix);
    var mosaic = makeMosaic(pages, language, prefix);
    var footer = makeFooter(page, language);
    if (prefix == "./en/") {
        makeFile(null, "index", header + navigation + mosaic + footer);
    } else {
        makeFile(language, "index", header + navigation + mosaic + footer);
    }
}

function makeMosaic(pages, language, prefix) {
    var mosaic = `<div class="mosaic">`;
    for (var i = 0; i < pages.list.length; i++) {
        var page = (pages.pages[pages.list[i]] || require('./pages/' + pages.list[i]));

        //We exclude the "About" page from building an element in the mosaic.
        if (page["en"].title == "About") {
            continue;
        }

        var title = page[language].title;
        var filename = filenameFormatter(page[language].title);
        var thumbnailName = pages.list[i];
        var description = page[language].description;
        var link = (page[language].link || page.link || prefix + filename + ".html");
        var navPrefix = (prefix == "./en/") ? "./" : "../";

        var itemDiv = `
        
        <div class = "portfolio-item">
            <a href="${link}">
            <div class = "thumbnail">
                <img src="${navPrefix}thumbnails/${thumbnailName}.jpg">
            </div>
            <div class = "portfolio-description">
                <h2>${title}</h2><p>${description}</p>
            </div>
            </a>
        </div>
        `;

        mosaic = mosaic + itemDiv;
    }
    mosaic = mosaic + `</div>`;
    return mosaic;
}
