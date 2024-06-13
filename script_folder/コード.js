let linkingUltAndUnit = new LinkingUltAndUnit();
function onEdit(e) {
  let editPoint = e.range;
  return editPoint;
}

editedCell = linkingUltAndUnit.selectedParent(onEdit);
editCellRow = linkingUltAndUnit.searchParent(editedCell);
linkingUltAndUnit.setPriority(editCellRow);
