class ChekingDataInUltimateBacklog {
  upDateOfColumnsCAndDOfUlt() {
    //Ult、Unitそれぞれのシート取得
    let toolBox = new ToolBox();
    let ultimateBacklog = toolBox.getSheet("Ultimate backlog");
    let unitBacklog = toolBox.getSheet("Unit backlog");

      // 取得したUlt,Unitのシートの取得確認
      toolBox.nullChecker(ultimateBacklog);
      toolBox.nullChecker(unitBacklog);
      

// TODO GettingSheetDataの周りの変数の整理をする。



      //Ult、UnitそれぞれのA列の取得
    let ultColumnOfA = toolBox.gettingSheetData(ultimateBacklog, "A",option = 1);
    let unitColumnOfA = toolBox.gettingSheetData(unitBacklog, "A",option = 1)

    // Ult、UnitのA列を配列にして扱うための変換
    let ultValues = toolBox.gettingSheetData(ultimateBacklog, "A",)
    let unitValues = unitColumnOfA.getValues();

    // 後で使う変数をスコープ外に宣言
    // Ultimateの各要素を取り出すループ
    for (let ultIterCount = 0; ultIterCount < ultValues.length; ultIterCount++) {
      // 取り出されたUltのアイテムがUnitにいくつあるかカウントする変数。
      let thisRowCountOfUltItem = 0;
      // UnitのD行に、各Parentごとに各Statusのタスクがいくつあるかをカウントする変数3つ。
      // notStartedYet、inProgressItemは作るだけ作ったけど今は利用機能なし。今後追加する可能性アリ。
      let notStartedYetItem = 0;
      let inProgressItem = 0;
      let completedItem = 0;
      // iterに応じて取り出されたultのValue
      let ultItem = ultValues[ultIterCount][0];

      // Cellが空ならループ終了
      if (toolBox.emptyChecker(ultItem)) { break; }

      // Unitの各要素を取り出すループ
      for (let unitIterCount = 0; unitIterCount < unitValues.length; unitIterCount++) {
        // iterに応じて取り出されたunitのValue
        let unitItem = unitValues[unitIterCount][0];

        // Cellが空ならループ終了
        if (toolBox.emptyChecker(unitItem)) {break}
        // 条件に合致する場合、そのItemのStatusをチェックする。
        if (ultItem === unitItem) {
          thisRowCountOfUltItem += 1;
          let uncheckedItem = toolBox.getRowOtherItems(unitBacklog, unitColumnOfA, unitIterCount, 4);
          let uncheckedItemValue = uncheckedItem.getValues()[0][0];

          if (uncheckedItemValue === "ToDo" || uncheckedItemValue === "Ready") {
            notStartedYetItem++;
          }
          else if (uncheckedItemValue === "In progress") {
            inProgressItem++;
          }
          else if (uncheckedItemValue === "Already done" || uncheckedItemValue === "Done") {
            completedItem++;
          }
          else {
            Logger.log("イレギュラーなStatusが入力されてます。")
        }
        // ParentごとにいくつChiledrenがあるかをチェックしてUltのC列に追記
        let countedNumToC = toolBox.getRowOtherItems(ultimateBacklog, ultColumnOfA, ultIterCount, 3);
        countedNumToC.setValue(thisRowCountOfUltItem);

        // Parentに付随するChiledrenの完了率をチェックしてD列に追記
        let countedNumToD = toolBox.getRowOtherItems(ultimateBacklog, ultColumnOfA, ultIterCount, 4);
        let completionRate = completedItem/thisRowCountOfUltItem
        countedNumToD.setValue(completionRate);
        }
        else{
          continue;
        }
      }
    }
  }
}

