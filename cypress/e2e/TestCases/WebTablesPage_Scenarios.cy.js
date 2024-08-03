///<reference types="Cypress"/>
import webPage from '../PageObjects/1'
import SignInPage from '../PageObjects/SignInPage';

const loginObj = new SignInPage();
const webPageObj = new webPage();


describe('Address Book Scenarios', () => {
  beforeEach(() => {
      cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/');    


  });
  it('Should Add user ', () =>{
    webPageObj.clickAddUser()
    webPageObj.addNewUserDetails()
  })


})