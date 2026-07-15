// ===============================
// プロフィール管理
// ===============================


const nameInput =
document.getElementById(
    "player-name"
);



const savedName =
localStorage.getItem(
    "playerName"
);



if(savedName){

    nameInput.value =
    savedName;

}




document
.getElementById("save-profile")
.onclick = function(){


    localStorage.setItem(

        "playerName",

        nameInput.value

    );


    alert(
        "プロフィールを保存しました"
    );


};
