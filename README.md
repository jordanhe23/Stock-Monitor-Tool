# Stock Alert Script for Google Sheets
This Google Apps Script named **'StockAlert'** collects certain stock market data from a Google Spreadsheet and sends email notifications when the Relative Strength Index (RSI) of tracked stocks crosses predefined thresholds.

**Overview**

The script interacts with a Google Spreadsheet that must contain a sheet named "Summary". It fetches market data such as Ticker, Price, Percentage, RSI (Relative Strength Index), and Return values.

The function triggers alerts when:

The RSI of a stock is less than 35 or more than 75.
The current day is a weekday (from Monday to Friday).
The current time is between 9 AM and 4 PM.
The alert comprises the stock's Ticker, Price, and RSI and is sent via email to a specified email address.

**Usage**

Open your Google Spreadsheet containing stock data.
Open the Script Editor (Extensions > Apps Script).
Copy and paste the 'StockAlert' function into the script editor.
Adjust the 'emailAddress' variable with your desired email address for receiving the stock alerts.
Set the script to run periodically by adding a time-driven trigger in the script editor (Edit > Current project's triggers > Add Trigger).
Note: This script assumes the "Summary" sheet follows a specific structure and contains required market data. Be sure to adjust your spreadsheet and the script according to your specific needs.

# Script: Record History
In addition to the Stock Alert script, the project also includes a recordHistory function that logs certain data from the "Summary" sheet into the "History" sheet.

**Usage**

Ensure that your Google Spreadsheet contains the "Summary" and "History" sheets.
Copy and paste the **'recordHistory'** function into the script editor.
To record the history automatically, set up a time-driven trigger in the script editor to run this function (Edit > Current project's triggers > Add Trigger).
This function takes the values from the "B1", "D1", "F1", "H1", and "J1" cells of the "Summary" sheet and appends them as a new row in the "History" sheet, along with the current date (formatted as "MM/dd/yyyy" and using Pacific Daylight Time). The history is recorded only on weekdays.
