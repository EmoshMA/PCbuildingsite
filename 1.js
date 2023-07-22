function openModal(img) {
    // Получаем ссылку на модальное окно
    var modal = document.getElementById("myModal");
  
    // Получаем ссылку на изображение в модальном окне
    var modalImg = document.getElementById("img01");
  
    // Показываем модальное окно
    modal.style.display = "block";
  
    // Устанавливаем изображение в модальное окно
    modalImg.src = img.src;
  }
  
  function closeModal() {
    // Получаем ссылку на модальное окно
    var modal = document.getElementById("myModal");
  
    // Скрываем модальное окно
    modal.style.display = "none";
  }
  
  function toggleList(button) {
    // Получаем ссылку на список
    var list = button.nextElementSibling;
  
    // Показываем/скрываем список
    if (list.style.display === "block") {
      list.style.display = "none";
      button.innerHTML = "Показать список";
      button.classList.remove("hide-list");
      button.classList.add("show-list");
    } else {
      list.style.display = "block";
      button.innerHTML = "Скрыть список";
      button.classList.remove("show-list");
      button.classList.add("hide-list");
    }
  }