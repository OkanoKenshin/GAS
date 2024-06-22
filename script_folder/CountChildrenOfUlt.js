class countChildrenOfUlt {
  countChildrenOfUlt() {
    let thisRowCountOfSheetValues = 0;
    // ParentごとにいくつChiledrenがあるかをチェックしてUltのC列に追記
    let countedNumToC = toolBox.getRowOtherItems(
      ultimateBacklog,
      ultColumnOfA,
      ultIterCount,
      3 //C列 = 3
    );
    countedNumToC.setValue(thisRowCountOfUltItem);
  }
}