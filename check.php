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

$login = $_POST['login'];
$password = $_POST['password'];


$result = mysqli_query($conn, "SELECT * FROM `task5_users` WHERE `login` = '$login' AND `password` = '$password' ");
$name = mysqli_fetch_assoc($result);



header("refresh: 10; url=../index.html");
if ($name) {
    echo 'Здравствуй! ';
    print_r($name);
}
else {
    echo 'Первый раз о Вас слышу.';
}
mysqli_free_result($result); // освобождение памяти
mysqli_close($conn); // закрытие соединения
echo 'Вы будете перенаправлены на главную страницу через 10 секунд...';
?>