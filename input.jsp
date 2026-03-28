<!DOCTYPE html>
<html>
<head>
    <title>User Input Form</title>
</head>
<body>
    <h2>Enter Your Details</h2>
    <form action="welcome.jsp" method="POST">
        Name: <input type="text" name="userName" required><br><br>
        Age: <input type="number" name="userAge" required><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>