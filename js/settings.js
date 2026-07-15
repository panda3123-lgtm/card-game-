// ===============================
// 設定管理
// ===============================



document
.getElementById("delete-data")
.onclick = function(){


    const result =
    confirm(
        "保存データを削除しますか？"
    );


    if(result){


        localStorage.clear();


        alert(
            "データを削除しました"
        );


    }


};
