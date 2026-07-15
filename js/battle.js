// ===============================
// エラッタオリジナリティ
// バトル処理
// ===============================


let cards = [];



// cards.json読み込み

fetch("cards.json")

.then(response => response.json())

.then(data => {

    cards = data;

    updateHand();

});






// カード情報取得

function getCardData(name){


    return cards.find(

        card => card.name === name

    );


}








// 手札表示

function updateHand(){


    const handZone =
    document.getElementById(
        "hand-zone"
    );


    if(!handZone) return;



    handZone.innerHTML = "";



    player.hand.forEach(card => {


        const button =
        document.createElement("button");



        button.textContent =
        card.name ?? card;



        button.onclick = function(){

            playCard(card);

        };



        handZone.appendChild(button);


    });


}








// カード使用

function playCard(card){



    const cardData =
    typeof card === "string"
    ? getCardData(card)
    : card;



    if(!cardData){

        console.log(
            "カード情報なし",
            card
        );

        return;

    }




    if(player.cost < cardData.cost){


        alert(
            "コスト不足"
        );

        return;

    }





    player.cost -= cardData.cost;



    // 手札から削除

    const index =
    player.hand.indexOf(card);



    if(index !== -1){

        player.hand.splice(
            index,
            1
        );

    }







    if(cardData.type === "monster"){


        summonMonster(
            player,
            cardData
        );


    }



    else if(cardData.type === "magic"){


        activateMagic(
            cardData
        );


    }



    else if(cardData.type === "trap"){


        setTrap(
            player,
            cardData
        );


    }




    updateHand();

    updateScreen();


}









// モンスター召喚

function summonMonster(player,card){



    player.field.push(card);



    const zone =
    document.getElementById(
        "player-monster-zone"
    );



    const view =
    document.createElement("div");



    view.textContent =
    card.name;



    zone.appendChild(view);


}









// 魔法発動

function activateMagic(card){



    console.log(
        card.name+
        "を発動"
    );



    // 後でeffect.jsへ

}









// トラップセット

function setTrap(player,card){



    player.trap.push(card);



    console.log(
        card.name+
        "をセット"
    );


}
