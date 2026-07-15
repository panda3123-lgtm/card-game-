// ===============================
// エラッタオリジナリティ
// 保存機能
// ===============================




// デッキ保存

function saveDeck(){


    if(
        typeof checkDeck === "function"
    ){

        if(
            !checkDeck()
        ){

            return;

        }

    }




    let name =
    prompt(
        "デッキ名を入力してください"
    );



    if(!name){

        name = "無名デッキ";

    }





    const saveData = {


        name:name,


        cards:deck


    };





    localStorage.setItem(

        "errataDeck",

        JSON.stringify(saveData)

    );



    alert(
        "デッキを保存しました"
    );


}








// デッキ読み込み

function loadDeck(){


    const data =
    localStorage.getItem(
        "errataDeck"
    );



    if(!data){

        alert(
            "保存データがありません"
        );

        return;

    }



    const saveData =
    JSON.parse(data);



    deck =
    saveData.cards;



    updateDeckDisplay();



    alert(

        saveData.name +
        " を読み込みました"

    );


}








// デッキ削除

function deleteDeck(){


    localStorage.removeItem(

        "errataDeck"

    );



    alert(

        "デッキを削除しました"

    );


}
