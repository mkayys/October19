
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let pTag = document.createElement('p');
    pTag.innerHTML = string;
    htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader);