<?php
/*  uploadindex.php
	php function upload photos
    STC digital signage project
    ITGS HL project by Matt Chan 2011-12 
    Homepage: http://themattchan.com
    Live demo: http://themattchan.com/itgsproject
    GitHub: http://github.com/themattchan/STCsignageTV.git
*/

$uploads_dir = '../images';
foreach ($_FILES["image"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["image"]["tmp_name"][$key];
        $name = $_FILES["image"]["name"][$key];
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
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
<title>Upload Complete</title>
</head>

<body>
<div id="main-container">
<h1>Upload complete!</h1>
<form><input type="button" value="Back" onClick="history.go(-1);return true;"></form>
</div> <!--/main-container-->
</body>
</html>
