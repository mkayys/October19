
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function() {
  let completed = [];
  let dogsArr = Object.values(keys);
  for(let i = 0; i < dogsArr.length; i++) {
    let aTag = document.createElement('a');
    aTag.innerHTML = dogArr[i];
    a.href = dogs[dogArr[i]];
    let li = document.createElement('li');
    li.classList.add('dog-link');
    aTag.appendChild(li);
    completed.push(li);
  }
}

const attachDogLinks = function() {
  
}