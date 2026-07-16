// ===============================
// effect.js Part1
// ===============================

function activateEffect(card) {

    switch (card.name) {

        // ======================
        // モンスター
        // ======================

        case "F1":

            specialSummonCost3OrLess();
            break;

        case "いつの日かの飛鉄「佐貫」":

            lowerEnemyMonsterATK(1500);
            break;

        case "イソナ":

            lowerAllEnemyMonsterATK(2000);
            break;

        case "ケニファー":

            player.cost++;
            player.lp += 700;
            drawCardUI();
            break;

        case "マネネ":

            enemy.lp -= 800;
            break;

        case "回福の魔女":

            player.lp += 800;
            drawCard();
            break;

        case "白翼の大天使ラファエル":

            player.lp += 1000;
            drawCard();
            break;

        case "黄泉の渡り鳥アストレア":

            discardFromHand(1);
            drawCard();
            drawCard();
            break;

        case "星読の巫女ミラ":

            lookTopDeck(3);
            break;

        case "墓地送り":

            chooseDeckToGrave();

            destroyEnemyCost7();

            break;

        case "黒き刃":

            destroyEnemyMonster();

            break;

        case "異界の聖槍ロンギヌス":

            destroyEnemyCard();

            break;

        case "狩猟神アルテミス":

            summonHunterToken();
            summonHunterToken();

            break;

        case "機械仕掛けの鳥":

            millDeck(1);

            drawCard();

            sendSelfToGrave(card);

            break;

        case "蓮の葉ハスター":

            player.lp += 500;

            giveTargetProtection();

            break;

        case "シュラフ・アリーナ":

            destroyAllEnemyCards();

            card.negateCount = 2;

            break;

        case "ニャルラトホテプ":

            drawCard();

            drawCard();

            break;

        case "ネズミ3.57864":

            card.sa = true;

            break;

        case "クトゥルフ":

            card.effectImmuneDestroy = true;

            break;

        case "ドラゴン":

            card.cannotSpecialSummon = true;

            card.targetImmune = true;

            break;

        case "堕落マネネ":

            card.blocker = true;

            card.effectImmuneDestroy = true;

            break;

        case "カワウソ":

            card.ignoreBlocker = true;

            break;



        // ======================
        // 魔法
        // ======================

        case "参拝":

            player.lp += 500;

            break;

        case "次回策":

            drawCard();

            drawCard();

            break;

        case "また0から":

            resetBothPlayers();

            break;

        case "やり直し":

            resetOwnField();

            break;

        case "これあげる":

            useKoreAgeru();

            break;

        case "五輪書":

            buffSwordCards(500);

            drawCard();

            break;

        case "仮面は正体を隠すもの":

            player.canFaceDownSummon = true;

            break;

        case "ルルイエ":

            enableRlyeh();

            break;

        case "世界の滅亡":

            worldEndCheck();

            break;

        case "転生の花弁":

            recoverMonsterFromGrave();

            break;

        case "封印の箱パンドラ":

            player.lp += 800;

            disableGraveEffect(2);

            break;

        case "寝る子は育つって誰かが言ってた":

            player.cost += 2;

            endTurn();

            break;

        case "炎輪の祈り":

            summonHalfATK();

            break;

        case "見えざる手の取引":

            useTrade();

            break;

        case "運命に抗う":

            returnOwnCard();

            player.cost++;

            break;

        case "ハッキング":

            controlEnemyMonster();

            break;

        case "氷結の地":

            player.fieldMagic = card;

            break;

        case "冥界の呼び声":

            massRevive();

            break;



        // ======================
        // トラップ
        // ======================

        case "自衛用拳銃":

            break;

        case "光の残響":

            break;

        case "本体はパンダである模様":

            break;

        // ======================
        // モンスター（続き）
        // ======================

        case "一般兵士":

            specialSummonGunCardFromGrave();

            break;

        case "ユリカ":

            specialSummonAnimal();

            break;

        case "ラーツ・グローブ":

            // 墓地へ送られた時に発動
            break;

        case "小夜峰綾香":

            card.costNegate = true;
            card.battleBoost = true;

            break;

        case "気付いたらいたライオン":

            player.cost++;

            break;

        case "書を食らう悪魔バエル":

            card.canPowerUp = true;

            break;

        case "深淵の監視者ネフシュタン":

            if(player.lp < enemy.lp){

                destroyEnemyCard();

                player.lp += 300;

            }

            break;

        case "奔華片名代":

            card.blocker = true;
            card.substituteDestroy = true;

            break;

        case "雲盧之譜アリス":

            card.canUseAliceSkill = true;

            break;

        case "八影月輪":

            specialSummonBladeCard();

            giveAllSA();

            break;

        case "鎖縛の神・バロール":

            lockEnemyMonster();

            break;

        case "永遠の追放者エリシオン":

            // 墓地へ送られた時
            break;

        case "静寂の剣士ジーク":

            card.magicTrapImmune = true;

            break;



        // ======================
        // 魔法（続き）
        // ======================

        case "夢見の狭間":

            player.fieldMagic = card;

            break;



        // ======================
        // トラップ（続き）
        // ======================

        default:

            console.log("未実装：" + card.name);

            break;

    }

    updateUI();

    checkWin();

}
