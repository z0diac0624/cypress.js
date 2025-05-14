describe('Проверка авторизации', function () {

 it('Покупает случайный аватар', () => {

cy.visit('https://pokemonbattle.ru/login');
cy.get('#k_email').type('USER_LOGIN');//Ввел верный логин

cy.get('#k_password').type('USER_PASSWORD');//Ввел верный логин

cy.get('.MuiButton-root').click();//Нажал войти

cy.wait(2000);

cy.get('.header_card_trainer').click();//Нажал на вкладку "профиль пользователя"

cy.wait(2000);

cy.get('.k_mobile > :nth-child(5)').click();//Нажал на вкладку "смена аватара"

cy.get('.shop__item.available').then(($availableAvatars) => { //Находим все доступные аватары (с классом `.available`)
if ($availableAvatars.length === 0) { // Если нет доступных — завершаем тест
throw new Error('Нет доступных аватаров для покупки!');
}
  
const randomIndex = Math.floor(Math.random() * $availableAvatars.length);//Выбираем случайный аватар из доступных
const randomAvatar = $availableAvatars[randomIndex];

cy.wrap(randomAvatar)//Кликаем на кнопку "Купить" внутри этого аватара
.find('.shop__button')
.click();
});

cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4701272644323999');//Ввожу данные левой карты.
cy.get(':nth-child(1) > .style_1_base_input').type('02/30');//срок действия карты
cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('396');//cvv
cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Robin Black');//Имя
cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();






});


























 
})