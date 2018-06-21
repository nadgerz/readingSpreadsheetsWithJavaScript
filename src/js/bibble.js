// stream rows from the first sheet on the file
var excel = require('excel-stream')
var fs = require('fs')

fs.createReadStream('accounts.xlsx')
  .pipe(excel())  // same as excel({sheetIndex: 0})
  .on('data', console.log)
// stream rows from the sheet named 'Your sheet name'
var excel = require('excel-stream')
var fs = require('fs')

fs.createReadStream('accounts.xlsx')
  .pipe(excel({
     sheet: 'Your sheet name'
  }))
  .on('data', console.log)
