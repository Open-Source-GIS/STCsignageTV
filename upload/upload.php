<?php
$uploads_dir = '../images';
foreach ($_FILES["image"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["image"]["tmp_name"][$key];
        $name = $_FILES["image"]["name"][$key];
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
    }
};

echo "<a href='index.html'>Go Back</a>";
?>
