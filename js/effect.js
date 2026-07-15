// =================================
// エラッタオリジナリティ
// カード効果処理
// =================================



function activateEffect(card){


    console.log(
        "効果発動:",
        card.name
    );



    switch(card.name){



        // ----------------
        // LP回復
        // ----------------


        case "参拝":

            player.lp += 500;

            break;



        case "マネネ":

            enemy.lp -= 800;

            break;



        case "ケニファー":

            player.cost += 1;

            player.lp += 700;

            break;



        case "回福の魔女":

            player.lp += 800;

            drawCard();

            break;



        case "白翼の大天使ラファエル":

            player.lp += 1000;

            drawCard();

            break;




        // ----------------
        // ドロー
        // ----------------


        case "次回策":

            drawCard();

            drawCard();

            break;



        case "黄泉の渡り鳥アストレア":

            discardCard();

            drawCard();

            drawCard();

            break;




        // ----------------
        // 召喚時破壊
        // ----------------


        case "黒き刃":

            destroyEnemyMonster();

            break;



        case "異界の聖槍ロンギヌス":

            destroyEnemyCard();

            break;



        case "シュラフ・アリーナ":

            destroyAllEnemyCards();

            break;




        // ----------------
        // 特殊処理
        // ----------------


        case "クトゥルフ":

            card.cannotDestroy = true;

            break;



        case "ルルイエ":

            console.log(
                "クトゥルフ破壊耐性付与"
            );

            break;



        case "蓮の葉ハスター":

            player.lp += 500;

            break;




        default:

            console.log(
                "未実装:",
                card.name
            );

            break;

    }



    updateScreen();

}








// --------------------------
// 汎用処理
// --------------------------



function destroyEnemyMonster(){


    if(enemy.field.length===0){

        return;

    }


    enemy.field.pop();


}






function destroyEnemyCard(){


    if(enemy.field.length===0){

        return;

    }


    enemy.field.pop();


}







function destroyAllEnemyCards(){


    enemy.field=[];


}







function discardCard(){


    if(player.hand.length===0){

        return;

    }


    player.hand.shift();


}
