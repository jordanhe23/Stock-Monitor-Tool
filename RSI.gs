function RSI() {  
  for ( var i=4; i<8; i++) {
  var TickerRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("A"+i);
  var Ticker = TickerRange.getValue();
  var SelectRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Select Stock").getRange("B1");
      SelectRange.setValue(Ticker);
  var RSIPaste = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I"+i);
      RSIPaste.setFormula("=vlookup(Today(),'Select Stock'!D:L,9,false)");
  var temp = RSIPaste.getValue();
      RSIPaste.setValue(temp.toFixed(0));
  }

  for ( var i=14; i<28; i++) {
  var TickerRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("A"+i);
  var Ticker = TickerRange.getValue();
  var SelectRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Select Stock").getRange("B1");
      SelectRange.setValue(Ticker);
  var RSIPaste = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I"+i);
      RSIPaste.setFormula("=vlookup(Today(),'Select Stock'!D:L,9,false)");
  var temp = RSIPaste.getValue();
      RSIPaste.setValue(temp.toFixed(0));
  }
}