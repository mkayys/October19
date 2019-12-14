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

    append(args) {
        for (let i = 0; i < this.htmlCollection.length; i++) {
            let node = this.htmlCollection[i];
            if(args instanceof DOMNodeCollection) {
                for(let j = 0; j < args.length; j++) {
                    let arg = args[i];
                    node.innerHTML += arg.outerHTML;
                }
            } else if (args instanceof HTMLElement) {
                node.innerHTML += args.outerHTML;
            } else {
                node.innerHTML += args;
            }
        }
    }

    attr(ele) {
        
    }
}

module.exports = DOMNodeCollection;