let section = document.querySelector('section'),
    geristrationButton = document.querySelector('.registration'),
    autorizationButton = document.querySelector('.autorization'),
    logoLink = document.querySelector('.logo');

function showRegistrationPage() {
  section.innerHTML = `
  <div class="container">
    <div class="row justify-content-center">
      <h2>Регистрация</h2>
    </div>
    <div class="row justify-content-center form">
      <form method="post" action="send.php" >
        <label for="name">Имя</label>
        <input id="name" name="name" class="form-control" type="text">
        <label for="surname">Фамилия</label>
        <input id="surname" name="surname" class="form-control" type="text">
        <label for="login">Логин</label>
        <input id="login" name="login" class="form-control" type="text">
        <label for="password">Пароль</label>
        <input id="password" name="password" class="form-control" type="password">
        <button id="bsub" type="submit" class="btn btn-primary btn-round" name="submit">Зарегистрироваться</button>
      </form>
    </div>
  </div>
  `;
}
geristrationButton.addEventListener('click', (e) => {
  e.preventDefault();
  showRegistrationPage();
});

function showAutorizationPage() {
  section.innerHTML = `
  <div class = "container">
    <div class = "row justify-content-center">
      <h2> Авторизация </h2> 
    </div>
    <div class="row justify-content-center form">
      <form method = "post" action = "check.php">
        <label for = "login"> Логин </label>
        <input id="login" name="login" class="form-control" type="text">
        <label for = "password" > Пароль </label>
        <input id="password" name="password" class="form-control" type="password">
        <input class="reg-btn" type="submit" value="Войти" >
      </form>
    </div>
  </div>
  `;
}
autorizationButton.addEventListener('click', (e) => {
  e.preventDefault();
  showAutorizationPage();
});

logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  section.innerHTML = `
  <div class="container">
      <div class="row justify-content-center">
        <h1>Mini-Youtube on JavaScript</h1>
      </div>
      <div class="row justify-content-center welcome-text">
        <p>
          Приветсвую вас. Это страница, которую я сделал для выполнения тестового задания на стажировку.
          Для ускорения верстки данной страницы я использую библиотеку bootstrap
        </p>
      </div>
      <div class="row videos">
        <iframe src="https://www.youtube.com/embed/zw81ihoukKU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/zx9vpIzH1u4" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `;
});