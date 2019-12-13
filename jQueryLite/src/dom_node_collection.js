class DOMNodeCollection {
    constructor(arr) {
        this.htmlCollection = arr;
    }

    html(string) {
        if(string === undefined) {
            return this.htmlCollection[0].innerHTML;
        } else {
            for (let i = 0; i < this.htmlCollection.length; i++) {
                let ele = this.htmlCollection[i];
                ele.innerHTML = string;
            }
        }
    }

    empty() {
        for (let i=0; i < this.htmlCollection.length; i++) {
            let ele = this.htmlCollection[i];
            ele.innerHTML = "";
        }
    }
}

module.exports = DOMNodeCollection;