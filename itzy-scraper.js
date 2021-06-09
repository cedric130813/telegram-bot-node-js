const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const vgmUrl= 'https://www.soompi.com/article/1473723wpp/mamamoos-wheein-reported-to-leave-rbw-agency-says-discussions-are-still-ongoing';

got(vgmUrl).then(response => {
    const dom = new JSDOM(response.body);
    console.log(dom.window.document.querySelector('title').textContent);
}).catch(err => {
    console.log(err);
});

// got(vgmUrl).then(response =>{
//     const dom_img = new JSDOM(response.body);
//     const imgSrc = dom_img.window.document.querySelector('.image-wrapper img').getAttribute("data-src");
//     console.log(imgSrc);
// }).catch(err => {
//     console.log(err);
// });