<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="users.css">
    <title>Document</title>
</head>
<body>
    <div id="tableDiv">
    <table id = "tableid">
        <thead>
            <tr>
                <th>Full Name</th>
                <th>User Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><?php echo $_POST["fullname"]; ?></td>
                <td><?php echo $_POST["user"]; ?></td>
            </tr>
        </tbody>
    </table>
</div>
</body>
</html>