class DOMNodeCollection {
    constructor(arr) {
        this.htmlCollection = arr;
    }

    html(string) {
        if(string === undefined) {
            return this.htmlCollection[0].innerHTML;
        } else {
            for (let i = 0; i < this.htmlCollection.length; i++) {
                let html = this.htmlCollection[i];
                html.innerHTML = string;
            }
        }
    }

    empty() {
        
    }
}

module.exports = DOMNodeCollection;