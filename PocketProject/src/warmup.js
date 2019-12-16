
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let pTag = document.createElement('p');
    pTag.innerHTML = string;
    if (htmlElement.children) {
        let children = Array.from(htmlElement.children);
        for (let i=0; i < children.length; i++) {
            htmlElement.removeChild(children[i]);
        }
    }
    htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader);