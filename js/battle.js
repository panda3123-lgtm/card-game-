// =================================
// エラッタオリジナリティ
// battle.js
// =================================


let cardList = [];


// プレイヤーデータ

let player = {

    lp:8000,

    cost:1,

    hand:[],

    field:[],

    trap:[],

    deck:[]

};



// 相手

let enemy = {

    lp:8000,

    field:[]

};





// cards.json読み込み

fetch("cards.json")

.then(res => res.json())

.then(data => {

    cardList = data;

    startGame();

});





// ゲーム開始

function startGame(){


    player.deck = [...cardList];


    shuffle(player.deck);



    // 初期手札5枚

    for(let i=0;i<5;i++){

        drawCard();

    }


    updateHand();


}






// シャッフル

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j =
        Math.floor(Math.random()*(i+1));


        [array[i],array[j]]
        =
        [array[j],array[i]];

    }

}






// ドロー

function drawCard(){


    if(player.deck.length===0){

        alert("デッキ切れ");

        return;

    }


    player.hand.push(
        player.deck.pop()
    );


}








// 手札表示

function updateHand(){


    const hand =
    document.getElementById(
        "hand-zone"
    );


    hand.innerHTML="";



    player.hand.forEach(card=>{


        let btn =
        document.createElement("button");


        btn.innerHTML =
        card.name;



        btn.onclick = ()=>{

            useCard(card);

        };


        hand.appendChild(btn);


    });


}








// カード使用

function useCard(card){



    if(player.cost < card.cost){

        alert("コスト不足");

        return;

    }




    player.cost -= card.cost;



    // 手札から削除

    player.hand =
    player.hand.filter(
        c=>c !== card
    );





    switch(card.type){



        case "モンスター":

            summon(card);

            break;



        case "魔法":

            magic(card);

            break;



        case "トラップ":

            trap(card);

            break;


    }



    updateHand();


}







// モンスター召喚

function summon(card){


    player.field.push(card);



    let zone =
    document.getElementById(
        "player-monster-zone"
    );



    let div =
    document.createElement("div");


    div.innerHTML =
    `
    <img src="images/${card.image}" width="100">
    <br>
    ${card.name}
    `;



    zone.appendChild(div);



    activateEffect(card);

}






// 魔法

function magic(card){


    console.log(
        card.name+"発動"
    );


    activateEffect(card);

}







// トラップ

function trap(card){


    player.trap.push(card);


    console.log(
        card.name+"セット"
    );


}







// 効果処理入口

function activateEffect(card){



    console.log(
        "効果確認:",
        card.name
    );



    // ここに名前判定を追加していく


}
