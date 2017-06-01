const fs = require('fs');
const path = require('path');

const codeBlockWithPaths = document.querySelectorAll('code[data-path]');

Array.prototype.forEach.call(codeBlockWithPaths, function (code) {
    const codePath = path.join(__dirname, '..', code.dataset.path);
    const extension = path.extname(codePath);
    code.classList.add('language-' + extension.substring(1));
    code.textContent = fs.readFileSync(codePath);
})