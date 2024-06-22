class UnitItemStatusChecker {
/**
 *  @param {} ultimateBacklog - 
 *  @param {} ultIterCount - 
 *  @param {} otherSheet - MatchUltimateWithOtherの比較対象のSheet。この場合はUnitがそれにあたる。
 *  @param {} otherIterCount - MatchUltimateWithOtherの内側ループで得られるiter変数。
 *  @param {} column - 
 - 
 */
  unitItemStatusChecker(
    ultimateBacklog,
    ultIterCount,
    otherSheet,
    otherIterCount,
  ) {
    const toolBox = new ToolBox();
    // UnitのD行に、各Parentごとに各Statusのタスクがいくつあるかをカウントする変数3つ。
    // notStartedYet、inProgressItemは作るだけ作ったけど今は利用機能なし。今後追加する可能性アリ。
    let notStartedYetItem = 0;
    let inProgressItem = 0;
    let completedItem = 0;
    const ultColumnOfA = toolBox.gettingRange(ultimateBacklog, "A");
    const unitColumnOfA = toolBox.gettingRange(otherSheet, "A");
    const uncheckedItem = toolBox.getRowOtherItems(
      otherSheet,
      unitColumnOfA,
      otherIterCount,
      4 // D列 = 4
    );
    const uncheckedItemValue = uncheckedItem.getValues()[0][0];

    if (uncheckedItemValue === "ToDo" || uncheckedItemValue === "Ready") {
      notStartedYetItem++;
    } else if (uncheckedItemValue === "In progress") {
      inProgressItem++;
    } else if (
      uncheckedItemValue === "Already done" ||
      uncheckedItemValue === "Done"
    ) {
      completedItem++;
    } else {
      Logger.log("イレギュラーなStatusが入力されてます。");
    }

    // Parentに付随するChiledrenの完了率をチェックしてD列に追記
    let countedNumToD = toolBox.getRowOtherItems(
      ultimateBacklog,
      ultColumnOfA,
      ultIterCount,
      4
    );
    const completionRate = completedItem / thisRowCountOfUltItem;
    countedNumToD.setValue(completionRate);
  }
}
