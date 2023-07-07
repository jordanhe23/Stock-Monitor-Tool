function StockAlert() {
   

  var prevmessage = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("AA1");
  var message = "\n";
  var TodayValue = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("B1").getDisplayValue();
  var TotalReturn = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("D1").getDisplayValue();
  var Today = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("J1").getDisplayValue();
  var TodayChange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("H1").getDisplayValue();
  var message = message+"Today Value: "+TodayValue+" Total Return: "+TotalReturn+"\n"+"$Today: "+Today+" %Today: "+TodayChange+"\n"+"\n"; 
  var message1 = message;

  for ( var i=4; i<8; i++) {
  var TickerRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("A"+i);
  var Ticker = TickerRange.getValue();
  var PriceRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("B"+i);
  var Price = PriceRange.getDisplayValue();
  var PctRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("C"+i);
  var Pct = PctRange.getDisplayValue();
  var RSIRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I"+i); 
  var RSI= RSIRange.getDisplayValue();
  var ReturnRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("O"+i); 
  var PctRetun= ReturnRange.getDisplayValue();

  if (RSI < 35 && new Date().getDay()>0 && new Date().getDay()<6 && new Date().getHours()>=9 && new Date().getHours()<=16) {
    var message = message+"\n"+Ticker+"\n"+"Price: "+Price+"; RSI: "+RSI+"; %Return: "+PctRetun; 
  }
  else if (RSI > 75 && new Date().getDay()>0 && new Date().getDay()<6 && new Date().getHours()>=9 && new Date().getHours()<=16) {
    var message = message+"\n"+Ticker+"\n"+"Price: "+Price+"; RSI: "+RSI+"; %Return: "+PctRetun; 
  }
  
  }

  for ( var i=14; i<28; i++) {
  var TickerRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("A"+i);
  var Ticker = TickerRange.getValue();
  var PriceRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("B"+i);
  var Price = PriceRange.getDisplayValue();
  var PctRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("C"+i);
  var Pct = PctRange.getDisplayValue();
  var RSIRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("I"+i); 
  var RSI= RSIRange.getDisplayValue();

  if (RSI < 35 && new Date().getDay()>0 && new Date().getDay()<6 && new Date().getHours()>=9 && new Date().getHours()<=16) {
    var message = message+"\n"+Ticker+"\n"+"Price: "+Price+"; RSI: "+RSI; 
  }
  else if (RSI > 75 && new Date().getDay()>0 && new Date().getDay()<6 && new Date().getHours()>=9 && new Date().getHours()<=16) {
    var message = message+"\n"+Ticker+"\n"+"Price: "+Price+"; RSI: "+RSI; 
  }
  }
  var subject = "Stock Update - "+ new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour12: true });
  var emailAddress = "jordanhe23@gmail.com";
  if(message!= message1) {
  MailApp.sendEmail(emailAddress, subject, message);
  SpreadsheetApp.getActive().getRange("Summary!AA1").setValue(message);
  }
} 