let chekingUltimateBacklog = new ChekingDataInUltimateBacklog();
//chekingUltimateBacklog.chekingDataInUltimateBacklog();
let chekingDataInUnitBacklog = new ChekingDataInUnitBacklog();
let toolBox = new ToolBox();
let clearRow = new ClearRow();
let triggerCtrl = new TriggerCtrl();
function onEdit(e) {
}


function testOnEdit() {
  let toolBox = new ToolBox();
  let sprintBacklog = toolBox.getSheet("Sprint backlog");
  if (sprintBacklog){
    Logger.log("取得成功")
    Logger.log(sprintBacklog.getName())
  }
  else{
    Logger.log("取得失敗")
  }

    // 擬似的なonEditイベントオブジェクトを作成
  let sheet = toolBox.getSheet("Unit backlog");
  let range = sheet.getRange("A2"); // 編集されたセルを指定
  let fakeEvent = {
    range: range,
    value: ""// 編集後の値
  };

  //chekingDataInUnitBacklog.chekingDataInUnitBacklog(fakeEvent);
  clearRow.clearRow(fakeEvent);

}
