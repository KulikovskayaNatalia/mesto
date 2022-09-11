// Находим форму в DOM
// Воспользуйтесь методом querySelector()
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');

// Находим поля формы в DOM
// Воспользуйтесь методом querySelector()
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close-button');
let saveButton = formElement.querySelector('.popup__save-button');

let nameInput = document.querySelector('.popup__input_name');
let hobbieInput = document.querySelector('.popup__input_hobbie');

let profile = document.querySelector('.profile');
let profileTitle = profile.querySelector('.profile__title');
let profileHobbie = profile.querySelector('.profile__subtitle');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileTitle.textContent = nameInput.value;
    profileHobbie.textContent = hobbieInput.value;
    popupToggle();

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// Функция открытия и закрытия окна popup
function popupToggle() {
    popup.classList.toggle('popup_opened');
}

//Редактируем поля и сохраняем новые значения
openPopupButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    hobbieInput.value = profileHobbie.textContent;
    popupToggle();
});

//Закрываем popup
closePopupButton.addEventListener('click', () => {
    popupToggle();
});