// ===============================
// エラッタオリジナリティ
// バトル処理
// ===============================





// 手札表示

function updateHand(){


    const handZone =
    document.getElementById(
        "hand-zone"
    );



    handZone.innerHTML = "";



    player.hand.forEach(card => {


        const button =
        document.createElement("button");



        button.textContent =
        card;



        button.onclick = function(){

            playCard(card);

        };



        handZone.appendChild(button);


    });


}








// カード使用

function playCard(cardName){


    const index =
    player.hand.indexOf(cardName);



    if(index === -1){

        return;

    }



    // カードデータ取得予定

    const card =
    getCardData(cardName);



    if(
        player.cost < card.cost
    ){

        alert(
            "コスト不足"
        );

        return;

    }





    player.cost -= card.cost;



    player.hand.splice(
        index,
        1
    );






    if(card.type === "monster"){


        summonMonster(
            player,
            card
        );


    }



    else if(card.type === "magic"){


        activateMagic(
            player,
            card
        );


    }



    else if(card.type === "trap"){


        setTrap(
            player,
            card
        );


    }



    updateScreen();


}









// モンスター召喚

function summonMonster(target,card){


    target.field.push(card);



    if(target === player){


        const zone =
        document.getElementById(
            "player-monster-zone"
        );



        const cardView =
        document.createElement(
            "button"
        );


        cardView.textContent =
        card.name;



        zone.appendChild(
            cardView
        );


    }


}









// トラップセット

function setTrap(target,card){


    target.trap.push(card);


    alert(
        card.name+
        "をセットしました"
    );


}








// 魔法発動

function activateMagic(target,card){


    activateEffect(
        card.name
    );


}








// 攻撃

function attack(attacker){


    // 後で実装

}






// ターン終了

document
.getElementById("end-turn")
.onclick=function(){


    if(turnPlayer==="player"){


        turnPlayer="enemy";


    }
    else{


        turnPlayer="player";


    }


};
