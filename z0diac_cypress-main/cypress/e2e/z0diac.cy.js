import * as correct from "../helpers/Correct L.P.json"
import * as uncorrect from "../helpers/Uncorrect L.P.json"
import * as validation from "../helpers/Validation.json"

describe('Проверка авторизации', function () {

 beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю, цвет кнопки восст. пароль
           });

afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Проверяю, что "крестик" виден пользователю
            });

 it('Верный Логин и верный пароль', function () {
        cy.get('#mail').type(correct.login);//Ввел верный логин
        cy.get('#pass').type(correct.password);//Ввел верный пароль
        cy.get('#loginButton').click();//Нажал войти
        cy.wait(3000);
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю, что текст виден пользователю
 })


 it('Верный Логин и неверный пароль', function () {
        cy.get('#mail').type(correct.login);//Ввел верный логин
        cy.get('#pass').type(uncorrect.password);//Ввел неверный пароль
        cy.get('#loginButton').click();//Нажал войти
          cy.wait(3000);
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю, что текст виден пользователю
 })

  it('Неверный Логин и верный пароль', function () {
        cy.get('#mail').type(uncorrect.login);//Ввел неверный логин
        cy.get('#pass').type(correct.password);//Ввел верный пароль
        cy.get('#loginButton').click();//Нажал войти
          cy.wait(3000);
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю, что текст виден пользователю
 })

  it('Проверка на строчные буквы в логине', function () {
        cy.get('#mail').type(validation.loginAa);//Ввел логин со строчными буквами
        cy.get('#pass').type(correct.password);//Ввел верный пароль
        cy.get('#loginButton').click();//Нажал войти
          cy.wait(3000);
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю, что текст виден пользователю
 })

  it('Проверка валидации логина "@"', function () {
        cy.get('#mail').type(validation.loginAt);//Ввел логин без "@"
        cy.get('#pass').type(correct.password);//Ввел верный пароль
        cy.get('#loginButton').click();//Нажал войти
          cy.wait(3000);
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю, что текст виден пользователю
 })

  it('Проверка восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();//Нажимаю восстановить пароль
        cy.get('#mailForgot').type(correct.login);//Ввел верный логин
        cy.get('#restoreEmailButton').click();//Нажал Отправить код
          cy.wait(3000);
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Проверяю, что после отправки кода вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверяю, что текст виден пользователю

 })

















})  