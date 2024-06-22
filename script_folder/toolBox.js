class ToolBox{
  getSheet(sheetName){
      let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      return spreadsheet.getSheetByName(sheetName);
    }
  nullChecker(targetToCheck) {
    if (targetToCheck) {
      Logger.log("nullChecker >>" + targetToCheck.getName() + " 取得成功")
    }
    else {
      Logger.log("nullChecker >>" + targetToCheck.getName() + " 取得失敗")
    }
  }
  /**
   * - 取得済みのSheetと取得したいColumnを指定して単一行の2行目から999行目までを返す。
   * @param {String} sheetName - 行を取得したいシート名
   * @param {String} column - 取得したい列のアルファベット
   * @param {number} startRow - 取得したい範囲の先頭の行番号。デフォルトは3。
   * @param {number} endRow - 取得したい範囲の終端の行番号。デフォルトは999。
   * @param {number} option - 取得するデータを選択。0は指定した範囲のRangeを、1は指定した範囲のValuesを返す。
   * @return {range} 指定シートの指定行の3行目から999行目までを返す。
   */
    gettingSheetData(sheetName, column, startRow = 3, endRow = 999,option = 0) {
      if(option === 0){
        let sheet = sheetName;
        return sheet.getRange(`${column}${startRow}:${column}${endRow}`);
      }
      else if(option === 1){
        let sheet = sheetNamesheet.getRange(`${column}${startRow}:${column}${endRow}`)
        let values = sheet.getValues();
        return values;
      }
  } 

  
  /**
   * 引数で受け取った値が空「""」だった場合、Trueを返す。
   */
    emptyChecker(targetToCheck) {
    if (targetToCheck === "") {
      return true;
    }
  }

  /**
   * 取得済みのSheetと取得したいColumnを指定して単一行の2行目から999行目までを返す。
   * @param {sheet} sourceSheet - 取得したい行が存在するSheetをセット。
   * @param {range} sourceRange - 取得済みのrangeオブジェクトをセット。
   * @param {number} iterCount - forループのループ回数を記録しているiteraterをセット。
   * @param {number} editColumn - 取得したい列のアルファベット。Aは1と対応。Bは2、Cは3と対応。
   */
    getRowOtherItems(sourceSheet, sourceRange, iterCount, editColumn,) {
    let countColumn = sourceRange.getRow() + iterCount;
    let checkedCell = sourceSheet.getRange(countColumn, editColumn)
    return checkedCell;
  }
}