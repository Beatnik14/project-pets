<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Pets</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="index.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous" defer></script>
    <script src="classes.js" defer></script>
    <script src="index.js" defer></script>
    <!-- <script src="add.js" defer></script> -->
</head>
<body>
    <?php
    include_once('header.php')
    ?>
    <main>
       
        <div class="pet-list">
           
        </div>
        <div id="deleteInputDiv">
            <form action="">
                <label for="numberInput">Write title of the statement you want to delete</label><br>
                <input type="text" name="numberInput" id="deleteInput">
                <button type="button" id="deleteBtn">Delete</button>
            </form>
        </div>
    </main>
    
</body>
</html>