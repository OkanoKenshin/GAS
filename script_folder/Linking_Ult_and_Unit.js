class LinkingUltAndUnit {
  // Unit backlogの編集されたセルの値を取得して返す。
  selectedParent(editPoint) {
    let editedCell;
    editedSheet = editPoint.getSheet();
    editedColumn = editPoint.getColumn();
    if (editSheet === 'Unit Backlog' && editColumn === 1 /* Column_A*/) {
      // 編集されたA列の値を返す
      editedCell = editPoint.getValue();
    } else {
      pass;
    }
    return editedCell;
  }

  searchParent(editedCell) {
    ultColumnA = sheets.ultimateBacklog.getRange(A2, A999);
    raw = 2;
    for (cellValue in ultimateSheet) {
      if (cellValue === editedCell) {
        let editCellRow = row;
        // 編集があったセルの行番号を返す
        return editCellRow;
      }
      row++;
    }
  }

  setPriority(editCellRow) {
    columnC = 3;
    updateCell = sheet.unitBacklog.getRange(3 /*Column_C */, editCellRow);
    parentPriorityInfo = sheet.ultimateBacklog(2 /*Column_B */, editCellRow);
    updateCell.setValue(parentPriorityInfo);
  }
}
