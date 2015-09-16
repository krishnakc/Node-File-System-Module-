/* Creating instance from File System */
var fs = require('fs');

// Helper to modify date to create folder in proper name instead of Tue Sep 15 2015 12:44:22 GMT+0530 (IST)

function formatDate(date) {
    if (date == null) {return "";}
    var m = date.getUTCMonth() + 1;
    return ''+m+'_'+date.getUTCDate()+'_'+date.getUTCFullYear();
}

/* Following code does traversing file system for a given path */
 var traverseFileSystem = function (currentPath) {
    //console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
       var currentFile = currentPath + '/' + files[i];
       console.log(currentFile);
       var stats = fs.statSync(currentFile);
       var date = formatDate(stats.mtime);
   		copyFile(files[i], date);
   }
};

/* Copies file from source to Destination */
function copyFile(file, folderName) {
	fs.mkdir('/Users/kchait/Krishna/Node_Sapient/Final_FileSet/'+folderName, function(folderCB){
		if(folderCB && folderCB.code == "EEXIST") {
			console.log("This folder already exists")
		} else {
			console.log("This folder got crated Now");
		}
		var inputStream = fs.createReadStream('/Users/kchait/Krishna/Node_Sapient/fs/'+file);
		var outputStream = fs.createWriteStream('/Users/kchait/Krishna/Node_Sapient/Final_FileSet/'+folderName+'/'+file);
		//inputStream.pipe(outputStream);
	});	
}


function generateReport() {
	var writeStream = fs.createWriteStream("/Users/kchait/Krishna/Node_Sapient/Final_FileSet/report.xls");
	var header="S No"+"\t"+" File Name"+"\t"+"Date Modified"+"\t"+"Origin Folder"+"\t"+"Copied Folder"+"\n";
	writeStream.write(header);
	writeStream.close(); 
	console.log("connection closed")
}

generateReport();
 
/* Invoking Traverse call for filesystem */
traverseFileSystem('/Users/kchait/Krishna/Node_Sapient/fs');