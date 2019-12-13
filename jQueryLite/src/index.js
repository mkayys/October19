const DOMNodeCollection = require('./dom_node_collection');

const $l = function(el) {
    if (el instanceof HTMLElement) {
        let arr = [el];
        return new DOMNodeCollection(arr);
    } else {

        let nodeList = document.querySelectorAll(el);
        let nodeArr = Array.from(nodeList);
        return new DOMNodeCollection(nodeArr);
    }
}

window.$l = $l;