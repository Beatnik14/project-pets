<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    <div id='main-div'>
        <form action="users.php" method="post" id="form" >
        <p id="sign-up">Sign Up</p>
        <br />
        <p id="advice">It's free and only takes a minute</p>
        <br />
        <input class="inputs"   id="user" type="text" name="user" placeholder="Username" required >    <br>
        <input class="inputs" id="fullname" type="text" name="fullname" placeholder="Full name" required>  <br>
        <input class="inputs" id="password" type="password" name="password" placeholder="Password" required >  <br>
        <input class="inputs" id="confirm-password" type="password" name="confirm-password"  placeholder="Confirm Password" required > <br>
        <input type="submit" name="submit" id="submit" > <br>
    </form>
    </div>
</body>
</html>