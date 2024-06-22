class TriggerCtrl{
  constructor(){
    let chekingDataInUltimateBacklog = new ChekingDataInUltimateBacklog();
    let chekingDataInUnitBacklog = new ChekingDataInUnitBacklog();
    let clearRow = new ClearRow();
    this.executionMethodContainer = {
      "Sprint backlog":{
      /**
       * - 最初の値は列を示すナンバー。1はA列と対応。
       * - 二つ目の値はそのSheet,その列が変更された際に走るメソッド。
       */
      },
      "Ultimate backlog": {
        1/*A列 */: chekingDataInUltimateBacklog.chekingDataInUltimateBacklog()
      },
      "Unit backlog": {
        1/*A列 */: this.method // プレースホルダーとしてのコールバック関数
      },
      "Daily-task backlog": {
        1/*A列 */: this.method // プレースホルダーとしてのコールバック関数
      },
      "Archive of task log": {
        1/*A列 */: this.method // プレースホルダーとしてのコールバック関数
      }
    }
  }

  triggerCtrl(e){
    let range = e.range;
    let getedSheet = range.getSheet();
    let getedColumn =range.getColumn();

    this.identifyingEditedPoint(getedSheet,getedColumn)
  }

  identifyingEditedPoint(sheetName,column){
    const callBacksOfSheetName = this.executionMethodContainer[sheetName];

    // sheetNameとonEditが起動したシートが同一かチェック
    if(callBacksOfSheetName === sheetName){
      const callbacksOfColumnNum = this.sheetCallbacks[column];
      if(typeof callBack === "function"&&callBack === getedColumu){
        callback(e)
      }
      else{
        Logger.log("コールバック関数がセットされていないか見つかりません。");
      }
    }
    else{
      Logger.log("callbackOfColumnAtSheet内のKeyに紐づいているデータが関数、メソッドではないようです。\n関数をセットしてから再度試してください。")
    }

  }
}