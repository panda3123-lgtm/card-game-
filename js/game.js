// ===============================
// エラッタオリジナリティ
// ゲーム管理
// ===============================


// プレイヤーデータ

let player = {

    lp:8000,

    cost:1,

    maxCost:1,

    deck:[],

    hand:[],

    field:[],

    trap:[]

};



let enemy = {

    lp:8000,

    cost:2,

    maxCost:2,

    deck:[],

    hand:[],

    field:[],

    trap:[]

};




// 現在ターン

let turnPlayer = "player";




// ゲーム開始

function startGame(){


    drawCard(player,5);

    drawCard(enemy,5);


    updateScreen();


}







// ターン開始

function startTurn(target){


    // コスト最大値増加

    if(target.maxCost < 10){

        target.maxCost += 2;


        if(target.maxCost > 10){

            target.maxCost = 10;

        }

    }



    // コスト回復

    target.cost =
    target.maxCost;



    // ドロー

    drawCard(target,1);



    updateScreen();

}







// ドロー

function drawCard(target,amount){


    for(
        let i = 0;
        i < amount;
        i++
    ){


        if(target.deck.length === 0){


            loseGame(target);


            return;

        }



        target.hand.push(
            target.deck.shift()
        );


    }


}








// 敗北処理

function loseGame(target){


    if(target === player){

        alert(
            "デッキ切れ！敗北"
        );

    }
    else{

        alert(
            "相手のデッキ切れ！勝利"
        );

    }


}







// ダメージ

function damage(target,value){


    target.lp -= value;


    if(target.lp <= 0){

        loseByLP(target);

    }


    updateScreen();

}







function heal(target,value){


    target.lp += value;


    if(target.lp > 8000){

        target.lp = 8000;

    }


    updateScreen();

}







function loseByLP(target){


    if(target === player){

        alert("敗北");

    }
    else{

        alert("勝利");

    }

}







// 画面更新

function updateScreen(){


    document.getElementById(
        "player-lp"
    ).textContent =
    player.lp;



    document.getElementById(
        "enemy-lp"
    ).textContent =
    enemy.lp;



    document.getElementById(
        "player-cost"
    ).textContent =
    player.cost;



    document.getElementById(
        "enemy-cost"
    ).textContent =
    enemy.cost;



}
