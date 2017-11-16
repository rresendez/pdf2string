var inspect = require('eyes').inspector({maxLength:20000});
var pdf_extract = require('pdf-extract');
var absolute_path_to_pdf = 'C:/code/scan/test_files/h.pdf'
var options = {
  type: 'ocr' // perform ocr to get the text within the scanned image
}

var processor = pdf_extract(absolute_path_to_pdf, options, function(err) {
  if (err) {
    return callback(err);
  }
});
processor.on('complete', function(data) {

  var str = JSON.stringify(data.text_pages);
//  var arr = str.split(/[\\\/]/);
    var arr = str.split(/\\n/);
  for (var value of arr){

    console.log(value);
    if(value.includes("Norma")){
      console.log("Match found!");
    }
  }



  inspect(data.text_pages, 'extracted text pages');

});
processor.on('error', function(err) {
  inspect(err, 'error while extracting pages');
  return callback(err);
});
