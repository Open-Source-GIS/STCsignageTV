<?php
function deletephotos(){
    $files = glob("../images/*.jpg"); 
    foreach($files as $del){
        unlink($del);
    }
};
?>

<html lang="en">
<head profile="http://www.w3.org/2005/10/profile">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<!--CSS-->
<link rel="stylesheet" type="text/css" href="../src/admin.css"></link>
<!--JavaScript-->
<script type="text/javascript" language="javascript" src="../src/jquery-1.7.1.js"></script>
<title>Admin: Upload photos</title>
</head>

<body>

<h1>Admin for Room 233 Signage TV</h1>
<h2>Update slideshow</h2>

<div id="left">
<ol>
<li><form action="index.php" method="post">
<input type="button" value="Delete old photos" name="deletephotos" onclick="<?php deletephotos();?>;" />
</form>
</li>

<li><form enctype="multipart/form-data" action="upload.php" method="post">
Choose photos to upload</br>
<input name="image[]" id="image" type="file" multiple="" onChange="pendingUploadsList()" /><br/></li>
<li>Upload:&nbsp;<input type="submit" value="Upload" name="submit"/>
</form></li>
</ol>
</div>

<div id="right">
<ul id="imageList"><li>No images Selected</li></ul>
</div>
	
<script type="text/javascript">
	function pendingUploadsList() {
		var input = document.getElementById("image");
		var ul = document.getElementById("imageList");
		while (ul.hasChildNodes()) {
			ul.removeChild(ul.firstChild);
		}
		for (var i = 0; i < input.files.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = input.files[i].name;
			ul.appendChild(li);
		}
		if(!ul.hasChildNodes()) {
			var li = document.createElement("li");
			li.innerHTML = 'No Files Selected';
			ul.appendChild(li);
		}
	}
</script>

</body>
</html>
 
