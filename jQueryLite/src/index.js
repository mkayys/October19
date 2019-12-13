const $l = function(el) {
    let nodeList = document.querySelectorAll(el);
    let nodeArr = Array.from(nodeList);
}

window.$l = $l;