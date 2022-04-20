async function populate() {

    let requestURL = 'https://raw.githubusercontent.com/ikunamana/khulatest/main/js/products.json';
    let request = new Request(requestURL);

    let response = await fetch(request);
    let superHeroes = await response.json();

    populateProduktebi(superHeroes);

}
// პროდუქტების სექციისა და ელემენტების შექმნა, პროდუქტის დივების გამრავლება
function populateProduktebi(obj) {
    var section = document.getElementById('section');
    var produkti = obj['production'];


    for (var komponenti of produkti) {
        var sectionOfIndex = document.getElementById('section')
        var productForm = document.createElement('div');
            productForm.setAttribute('class', 'productform') 
        var innerContent = `
        <div class="productimg">
            <img class="productimg1" src="./images${komponenti.img}" alt="kveli">
        </div>
        <div class="producttext">
            <strong>დასახელება:</strong>
            <p class="shop-item-title" id="${komponenti.id}">${komponenti.name}</p><br>
            <hr><br>
            <strong>ფასი (ც):</strong>
            <h2 class="shop-item-price"> ${komponenti.price} GEL</h2><br><br><br><br>
            <div class="butshekv">
                <button id="shekvetabtn" class="btnshekvetapro">შეკვეთა</button>
            </div>
        
    </div>`
    productForm.innerHTML = innerContent;
    section.append(productForm)
    }

}
populate()