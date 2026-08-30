<?php
// Establish a connection to MySQL database
$servername = "sethu";
$username = "root";
$password = "30062005@17@Aa";
$dbname = "sethu";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement using a prepared statement to prevent SQL injection
$sql = "INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

// Bind parameters to the prepared statement
$stmt->bind_param("ssss", $name, $email, $phone, $message);

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Execute the prepared statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
