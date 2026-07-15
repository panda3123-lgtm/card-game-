// 現在のデッキ

let deck = [];



// カード追加

function addCard(cardName) {


    // 同名カード制限
    const count =
        deck.filter(
            card => card === cardName
        ).length;


    if(count >= 3){

        alert(
            "同名カードは3枚までです"
        );

        return;

    }


    deck.push(cardName);


    updateDeckDisplay();

}



// カード削除

function removeCard(cardName) {


    const index =
        deck.indexOf(cardName);


    if(index !== -1){

        deck.splice(
            index,
            1
        );

    }


    updateDeckDisplay();

}



// デッキ表示更新

function updateDeckDisplay(){


    const deckList =
        document.getElementById(
            "deck-list"
        );


    const deckCount =
        document.getElementById(
            "deck-count"
        );


    if(deckList){

        deckList.innerHTML = "";


        deck.forEach(card => {


            const item =
                document.createElement(
                    "p"
                );


            item.textContent =
                card;


            item.onclick =
                function(){

                    removeCard(card);

                };


            deckList.appendChild(item);


        });

    }


    if(deckCount){

        deckCount.textContent =
            deck.length;

    }

}
