// デッキ保存

function saveDeck() {

    const deckData = JSON.stringify(deck);

    localStorage.setItem(
        "errataDeck",
        deckData
    );

    alert("デッキを保存しました");
}



// デッキ読み込み

function loadDeck() {

    const data =
        localStorage.getItem("errataDeck");


    if(data === null){

        alert("保存されたデッキがありません");

        return;

    }


    deck = JSON.parse(data);


    if(typeof updateDeckDisplay === "function"){

        updateDeckDisplay();

    }


    alert("デッキを読み込みました");

}



// デッキ削除

function deleteDeck(){

    localStorage.removeItem(
        "errataDeck"
    );


    alert("デッキデータを削除しました");

}
