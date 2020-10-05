<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Pets</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="index.css" rel="stylesheet">
    <script src="classes.js" defer></script>
    <script src="index.js" defer></script>
    <!-- <script src="add.js" defer></script> -->
</head>
<body>
    <header class="header">
        <div><p class="title">Paws</p></div>
        <div>
            <nav class="main-nav">
                <a href="index.html"> Home </a>
                <a href="register.php">Register </a>
                <a href="">Contact</a>
                <a href="add.html">Add</a>
            </nav>
        </div>
        <div>
            <form action="">
        <input type="text" class="search-input" id="search" placeholder="Find Pet">
        <button type="button" class="btn">Search</button>
         </form>
    </div>
    </header>

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