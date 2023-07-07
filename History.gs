function recordHistory() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("Summary");
  var sheet2 = ss.getSheetByName("History");
  var value1 = sheet1.getRange("B1").getValue();
  var value2 = sheet1.getRange("D1").getValue();
  var value3 = sheet1.getRange("F1").getValue();
  var value4 = sheet1.getRange("H1").getValue();
  var value5 = sheet1.getRange("J1").getValue();

  var date = Utilities.formatDate(new Date(), "PDT", "MM/dd/yyyy");
  if(new Date().getDay()>0 && new Date().getDay()<6) {
  sheet2.appendRow([date,value1,value2,value3,value4,value5])
  }
};
