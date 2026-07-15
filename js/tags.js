// ===============================
// エラッタオリジナリティ
// カードタグ管理
// ===============================



function getCardTags(cardName) {

    let tags = [];



    // 銃

    const gunCards = [

        "マネネ",
        "自衛用拳銃",
        "一般兵士",
        "シュラフ・アリーナ",
        "いつの日かの飛鉄「佐貫」",
        "次回策"

    ];



    if (gunCards.includes(cardName)) {

        tags.push("gun");

    }




    // 刀

    const katanaCards = [

        "小夜峰綾香",
        "ユリカ",
        "カワウソ",
        "奔花片名代"

    ];



    if (katanaCards.includes(cardName)) {

        tags.push("katana");

    }




    // 剣

    const swordCards = [

        "八影月輪",
        "静寂の剣士ジーク",
        "黒き刃",
        "永遠の追放者エリシオン"

    ];



    if (swordCards.includes(cardName)) {

        tags.push("sword");

    }





    // 刃物

    const bladeCards = [

        "氷結の地",
        "異界の聖槍ロンギヌス",
        "ラーツ・グローブ",
        "イソナ",
        "狩猟神アルテミス"

    ];



    if (bladeCards.includes(cardName)) {

        tags.push("blade");

    }




    // 刀・剣は刃物扱い

    if (

        tags.includes("katana") ||

        tags.includes("sword")

    ) {

        tags.push("blade");

    }



    return tags;

}






// タグを持っているか確認

function hasTag(cardName, tag) {


    return getCardTags(cardName)
        .includes(tag);


}
