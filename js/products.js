// json-ის დაკავშირება და ინფორმაციის წამოღება
async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/ikunamana/khulatest/main/js/products.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    populateProduktebi(superHeroes);

}
// პროდუქტების სექციისა და ელემენტების შექმნა, პროდუქტის დივების გამრავლება
function populateProduktebi(obj) {
    const section = document.getElementById('section');
    const produkti = obj['production'];


    for (const komponenti of produkti) {
        // const myDiv = document.createElement('div');
        const firstDiv = document.createElement('div');
        const imgDiv = document.createElement('div');
        const imgOfFirstDiv = document.createElement('img');
        const secondDiv = document.createElement('div');
        const dasaxelebaII = document.createElement('p');
        const nameOfOProductII = document.createElement('p');
        const fasiCharchoII = document.createElement('p');
        const actualPriceII = document.createElement('h2');
        const btnshekvetaII = document.createElement('div');
        const btnshekveta = document.createElement('button');
        const kalataDiv = document.createElement('div');
        const kalata = document.createElement('p');
        const kalataimg = document.createElement('img');


        // myDiv.setAttribute("class", "allproduct");
        firstDiv.setAttribute("class", "productform");
        imgDiv.setAttribute("class", "productimg");
        imgOfFirstDiv.setAttribute("class", "productimg1");
        imgOfFirstDiv.setAttribute("src", `${komponenti.img}`);
        secondDiv.setAttribute("class", "producttext");
        btnshekvetaII.setAttribute("class", "butshekv");
        btnshekveta.setAttribute("class", "btnshekvetapro");
        kalataDiv.setAttribute("class", "cartdiv");
        kalataimg.setAttribute ("class", "cartimg");
        kalataimg.setAttribute("src","../images/cart1.png");

        kalata.innerHTML = "კალათა";
        dasaxelebaII.innerHTML = "<strong>დასახელება:</strong>";
        btnshekveta.innerHTML = "შეკვეთა";
        fasiCharchoII.innerHTML = "<strong>ფასი (ც):</strong>";

    // json-ის ინფორმაციის ჩაშენება html-ში

        // nameOfOProductII.textContent = `${komponenti.name}`;
        // actualPriceII.textContent = `${komponenti.price}`;
        nameOfOProductII.innerHTML =  `${komponenti.name}` + "<br><hr><br><br>";
        actualPriceII.innerHTML = `${komponenti.price}` + " ₾ " + "<br><br><br><br>";

        // myDiv.append(firstDiv);
        firstDiv.append(imgDiv);
        imgDiv.append(imgOfFirstDiv);
        firstDiv.append(secondDiv);
        secondDiv.append(dasaxelebaII);
        secondDiv.append(nameOfOProductII);
        secondDiv.append(fasiCharchoII);
        secondDiv.append(actualPriceII);
        secondDiv.append(btnshekvetaII);
        btnshekvetaII.append(btnshekveta);
        btnshekvetaII.append(kalataDiv);
        kalataDiv.append(kalataimg);
        
        section.append(firstDiv);
    }
}



populate();





