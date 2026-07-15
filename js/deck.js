// ===============================
// エラッタオリジナリティ
// デッキ管理
// ===============================


let deck = [];



// 制限カード

const limitedCards = [

    "これあげる",
    "小夜峰綾香",
    "シュラフ・アリーナ"

];



// 準制限カード

const semiLimitedCards = [

    "ネズミ3.57864"

];




// カード一覧

let allCards = [];





// cards.json読み込み

fetch("cards.json")

.then(response => response.json())

.then(data => {

    allCards = data;

    showCards();

});







// カード一覧表示

function showCards(){


    const list =
    document.getElementById(
        "card-list"
    );


    if(!list) return;



    list.innerHTML = "";



    allCards.forEach(cardName => {


        const button =
        document.createElement("button");


        button.textContent =
        cardName;



        button.onclick = function(){

            addCard(cardName);

        };



        list.appendChild(button);


    });

}








// 最大枚数取得

function getMaxCopies(cardName){


    if(
        limitedCards.includes(cardName)
    ){

        return 1;

    }



    if(
        semiLimitedCards.includes(cardName)
    ){

        return 2;

    }



    return 3;

}









// カード追加

function addCard(cardName){


    const count =
    deck.filter(
        card => card === cardName
    ).length;



    if(
        count >= getMaxCopies(cardName)
    ){

        alert(
            "このカードはこれ以上入れられません"
        );

        return;

    }



    deck.push(cardName);


    updateDeckDisplay();

}








// カード削除

function removeCard(cardName){


    const index =
    deck.indexOf(cardName);



    if(index !== -1){

        deck.splice(index,1);

    }



    updateDeckDisplay();

}








// デッキ表示更新

function updateDeckDisplay(){


    const list =
    document.getElementById(
        "deck-list"
    );


    const count =
    document.getElementById(
        "deck-count"
    );



    if(!list) return;



    list.innerHTML = "";



    deck.forEach(card => {


        const button =
        document.createElement("button");


        button.textContent =
        card;



        button.onclick = function(){

            removeCard(card);

        };



        list.appendChild(button);


    });



    if(count){

        count.textContent =
        deck.length;

    }

}







// 保存前チェック

function checkDeck(){


    if(deck.length < 35){

        alert(
            "デッキは35枚以上必要です"
        );

        return false;

    }



    if(deck.length > 60){

        alert(
            "デッキは60枚以下です"
        );

        return false;

    }



    return true;

}
