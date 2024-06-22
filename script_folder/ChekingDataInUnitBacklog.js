class ChekingDataInUnitBacklog {
  chekingDataInUnitBacklog(editRow) {
    if(processingOfchekingDataInUnitBacklog)return
    processingOfchekingDataInUnitBacklog =true;
    let toolBox = new ToolBox();
    let ultimateBacklog = toolBox.getSheet("Ultimate backlog");
    let unitBacklog = toolBox.getSheet("Unit backlog");
    
    // 取得したUlt,Unitのシートの取得確認
    toolBox.nullChecker(ultimateBacklog);
    toolBox.nullChecker(unitBacklog);

    //Ult、UnitそれぞれのA列の取得
    let ultColumnOfA = toolBox.gettingRange(ultimateBacklog, "A")
    // Ult、UnitのA列を配列にして扱うための変換
    let ultValues = ultColumnOfA.getValues();

    for (let ultIterCount = 0; ultIterCount < ultValues.length; ultIterCount++) {
      let ultItem = ultValues[ultIterCount][0];
      if(ultItem === ""){break}
      if (eventRangeValue === ultItem) {
        let parentPriority = toolBox.getRowOtherItems(ultimateBacklog, ultColumnOfA, ultIterCount, 2);
        let unitColumnOfC = 3;
        let cellToSetPriority = unitBacklog.getRange(editRow, unitColumnOfC);
        cellToSetPriority.setValue(parentPriority.getValues());
      }

    }
  }
}

