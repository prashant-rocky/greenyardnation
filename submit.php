<?php
// Database connection
$servername = "localhost";
$username = "root";     // change if needed
$password = "";         // change if needed
$dbname = "greenyardnation";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name    = $_POST['name'];
$email   = $_POST['email'];
$phone   = $_POST['phone'];
$message = $_POST['message'];

// Insert into database
$sql = "INSERT INTO contact (name, email, phone, message) 
        VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    // redirect on success
    header("Location: thankyou.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
