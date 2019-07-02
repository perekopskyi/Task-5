<?php
$servername = "127.0.0.1:3306";
$database = "test_yevhenii_2019";
$username = "mysql";
$password = "parol1993";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
// echo "Connected successfully";

$name = $_POST['name'];
$surname = $_POST['surname']; 
$login = $_POST['login'];
$password = $_POST['password'];
 
$sql = "INSERT INTO `task5_users`(`name`, `surname`, `login`, `password`) VALUES ('$name', '$surname', '$login', '$password')";
header("refresh: 5; url=../index.html");
if (mysqli_query($conn, $sql)) {
      echo "Новая запись успешно добавлена! \n Вы будете перенаправлены на главную страницу через 5 секунд...";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>