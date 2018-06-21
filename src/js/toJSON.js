
xlsxj = require("xlsx-to-json");
  xlsxj({
    finput: "../../data/example.xls",
    input: "../../data/crash.xls",
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });

