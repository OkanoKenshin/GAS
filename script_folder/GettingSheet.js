class GettingSheet{
  sheetAccessHub() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sprintBacklog = spreadsheet.getActiveSheet("Sprint backlog")
  let ultimateBacklog = spreadsheet.getActiveSheet("Ultimate backlog")
  let unitBacklog = spreadsheet.getActiveSheet("Unit backlog")
  let dailyTaskBacklog = spreadsheet.getActiveSheet("Daily-task backlog")
  let archiveOfTaskLog = spreadsheet.getActiveSheet("[Archive] Task log")
  return{
    sprintBacklog,
    ultimateBacklog,
    unitBacklog,
    dailyTaskBacklog,
    archiveOfTaskLog
  }
  }
  
}