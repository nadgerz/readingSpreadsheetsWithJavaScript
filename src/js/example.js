#!/usr/bin/env node

if (typeof require !== "undefined") XLSX = require("xlsx");

var sheet2arr = function(sheet) {
  console.log("Sheet is: ${sheet.Name}");
  var result = [];
  var row;
  var rowNum;
  var colNum;
  var range = XLSX.utils.decode_range(sheet["!ref"]);
  for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
    row = [];
    for (colNum = range.s.c; colNum <= range.e.c; colNum++) {
      var nextCell = sheet[XLSX.utils.encode_cell({ r: rowNum, c: colNum })];
      if (typeof nextCell === "undefined") {
        row.push(void 0);
      } else row.push(nextCell.w);
    }
    result.push(row);
  }
  return result;
};

var getRange = function(sheet) {
  var range = XLSX.utils.decode_range(sheet["!ref"]);
  console.log(range.s.r);
  console.log(range.e.r);
  console.log(range.s.c);
  console.log(range.e.c);
  return range;
};

const argv = require("yargs")
  .usage("$0 <cmd> [args]")
  .option("f", {
    alias: "file",
    demandOption: true,
    default: "/etc/passwd",
    describe: "x marks the spot",
    type: "string"
  })
  .command(
    "hello [name]",
    "welcome ter yargs!",
    yargs => {
      yargs.positional("name", {
        type: "string",
        default: "Cambi",
        describe: "the name to say hello to"
      });
    },
    function(argv) {
      console.log("hello", argv.name, "welcome to yargs!");
    }
  )
  .help().argv;

console.log(argv);
// console.log(argv.f);
console.log(argv.file);
var workbook = XLSX.readFile(argv.file);
// console.log(workbook);
const sheetNames = workbook.SheetNames;
console.log(sheetNames);

const firstSheet = sheetNames[0];
console.log(firstSheet);
console.log(typeof firstSheet);

const worksheet = workbook.Sheets[firstSheet];
console.log("worksheet <--------------------------------");
// console.log(worksheet);

console.log("workbook.Props <--------------------------------");
// console.log(workbook.Props);

console.log("workbook.Custprops <--------------------------------");
// console.log(workbook.Custprops);

console.log("workbook.Workbook <--------------------------------");
// console.log(workbook.Workbook);

let address_of_cell = "A1";
let desired_cell = worksheet[address_of_cell];

/*
v	raw value (see Data Types section for more info)
w	formatted text (if applicable)
t	type: b Boolean, e Error, n Number, d Date, s Text, z Stub
f	cell formula encoded as an A1-style string (if applicable)
F	range of enclosing array if formula is array formula (if applicable)
r	rich text encoding (if applicable)
h	HTML rendering of the rich text (if applicable)
c	comments associated with the cell
z	number format string associated with the cell (if requested)
l	cell hyperlink object (.Target holds link, .Tooltip is tooltip)
s	the style/theme of the cell (if applicable)
*/

/* Get the value */
let desired_value = desired_cell ? desired_cell.v : undefined;

console.log(desired_cell);
console.log(desired_value);
console.log(desired_value + 64706);

address_of_cell = "A3";
desired_cell = worksheet[address_of_cell];
desired_value = desired_cell ? desired_cell.v : undefined;

console.log(desired_cell);
console.log(desired_value);
console.log(desired_value + 64706);

/*
console.log("worksheet['!cols'] <--------------------------------");
console.log(worksheet["!cols"]);

console.log("worksheet['!rows'] <--------------------------------");
console.log(worksheet["!rows"]);
*/

console.log("2JSON [1] <--------------------------------");
const s2j = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
console.log(s2j);

console.log(s2j[9]);

// console.log("2JSON [2] <--------------------------------");
// console.log(XLSX.utils.sheet_to_json(worksheet));

console.log("2ARRAY <--------------------------------");
sheet2arr(worksheet);
getRange(worksheet);

console.log("COMPLETE <--------------------------------");
