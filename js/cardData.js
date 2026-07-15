// ===============================
// エラッタオリジナリティ
// カード情報管理
// ===============================


let cardDatabase = [];




// cards.json読み込み

fetch("cards.json")

.then(response => response.json())

.then(data => {

    cardDatabase = data;

});





// カード情報取得

function getCardData(cardName){


    const card =
    cardDatabase.find(
        card => card.name === cardName
    );



    if(!card){

        console.error(
            "カードが見つかりません:",
            cardName
        );


        return null;

    }



    return card;


}
