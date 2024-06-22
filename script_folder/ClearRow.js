class ClearRow{
  clearRow(e){ 
    if(clearRowIsProcessing)return;
    clearRowIsProcessing = true;
    let editRange = e.range;
    let editRow = editRange.getRow();
    let editColumn = editRange.getColumn();
    let editSheet = editRange.getSheet();
    let editCellValue = e.value;

    let toolBox = new ToolBox();
    let ultimateBacklog = toolBox.getSheet("Ultimate backlog");
    let unitBacklog = toolBox.getSheet("Unit backlog");
    if(editCellValue === ""){
      if(editSheet.getName() === "Ultimate backlog"||editColumn === 1){
        this.editRowClear(editRow,ultimateBacklog)
      }
      else if(editSheet.getName() === "Unit backlog"||editColumn === 1){
        this.editRowClear(editRow,unitBacklog)
      }
    }
    clearRowIsProcessing = false;
  }
  editRowClear(editRow,sheetName){
    let countOfColumn = sheetName.getLastColumn();
    for(let column = 1;column<=countOfColumn;column++){
      let clearCell = sheetName.getRange(editRow,column);
      let clearCellValue = clearCell.getValues()[0][0]
      clearCell.clearContent();
    } 
  }
}
