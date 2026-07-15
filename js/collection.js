// ===============================
// カード一覧
// ===============================


fetch("cards.json")

.then(response => response.json())

.then(cards => {


    const list =
    document.getElementById(
        "collection-list"
    );



    cards.forEach(card => {


        const item =
        document.createElement("p");



        item.textContent =
        card;



        list.appendChild(item);


    });


});
