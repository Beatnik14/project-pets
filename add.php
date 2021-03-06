<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Pet</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
   
   
    <link href="add.css" rel="stylesheet">
    <link href="index.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous" defer></script>
    <script src="classes.js" defer></script>
    <script src="add.js" defer></script>
    <!-- <script src="index.js" defer></script> -->
</head>

<body>
<?php
    include_once('header.php')
    ?>
    <form class="add-form">
        <h3 class="form-title">Add Statement</h3>
        <div class="form-group">
            <label for="title">Title</label> <br>
            <input type="text" name="title" class="form-control" id="title">
        </div>
        <div class="form-group">
            <label for="image">Image Src</label><br>
            <input type="text" name="image" class="form-control" id="image">
        </div>
        <div class="form-group">
            <label for="description">Description</label><br>
            <textarea name="description" id="description" class="form-control" ></textarea>
        </div>
        <div class="form-group">
            <label for="contactPersonName">Contact Person Name</label><br>
            <input type="text" name="contactPersonName" class="form-control" id="contactPersonName">
        </div>
        <div class="form-group">
            <label for="contactPersonNumber">Contact Person Number</label><br>
            <input type="tel" name="contactPersonNumber" class="form-control" id="contactPersonNumber">
        </div>
        <div class="form-group">
            <input type="file" name="file" id="file" class="inputfile" onchange="loadFile(event)"/>
            <label for="file">Choose a file</label>
        </div>
        <!-- <a href="index.php"> -->
        <button type="button" class="btn btn-primary" id="addBtn">Add</button>
        <!-- </a> -->
    </form>
<!--   
    <div id="inputImage"><img id="output" /></div>

    <script>
    let loadFile = function(event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    </script> -->
   
</body>

</html>