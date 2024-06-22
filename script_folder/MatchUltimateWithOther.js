class MatchUltimateWithOther {
  matchUltimateWithOther(otherSheet, targetColumnOfOtherSheet) {
    let toolBox = new ToolBox();
    let ultimateBacklog = toolBox.getSheet("Ultimate backlog");
    if (toolBox.nullChecker(ultimateBacklog)) {
      let ultValues = toolBox.gettingRange(ultimateBacklog, "A");
    }

    let getedOtherSheet = toolBox.getSheet(otherSheet);
    if (toolBox.nullChecker(otherSheet)) {
      let otherValues = toolBox.gettingRange(
        getedOtherSheet,
        targetColumnOfOtherSheet
      );
    }

    // Ultimate側のループ(外側のループ)
    for (
      let ultIterCount = 0;
      ultIterCount < ultValues.length;
      ultIterCount++
    ) {
      // iterに応じて取り出されたultのValue
      let ultItem = ultValues[iterCount][0];

      // 取り出されたUltのアイテムがUnitにいくつあるかカウントする変数。

      // Cellが空ならループ終了
      if (toolBox.emptyChecker(pickedItem)) {
        break;
      }

      // 比較対象のSheetの各要素を取り出すループ
      for (
        let otherIterCount = 0;
        otherIterCount < otherValues.length;
        otherIterCount++
      ) {
        // iterに応じて取り出されたunitのValue
        let otherItem = otherValues[otherIterCount][0];

        // Cellが空ならループ終了
        if (toolBox.emptyChecker(otherItem)) {
          break;
        }

        if (ultItem === otherItem) {
          //比較対象とUltを使った特定の処理を入れるスペース
        } else {
          continue;
        }
      }
    }
  }
}
