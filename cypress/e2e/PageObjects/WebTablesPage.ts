export default class WebTablesPage {
    elements = {
      addUser : () => cy.get('thead > :nth-child(2) > td > .btn > .icon'),
      firstName : () => cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine'),
      lastName : () => cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine'),
      userName : () => cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine'),
      passWord : () => cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine'),
      customerCompanyAA : () =>cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine'),
      customerCompanyBB : ()=>cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .ng-pristine'),
      role :() =>cy.get('select'),
      email: () =>cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine'),
      cellPhone :() => cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine'),
      closeOption : () =>cy.get('.btn-danger'),
      saveOption : () =>cy.get('.btn-success'),

  
    };  
    clickAddUser(){    

        this.elements.addUser().click()

    }  
    addNewUserDetails(){
        const randomAlphabet1 = generateRandomAlphabetString(10);
        const randomEmail =generateRandomEmail(10)
        this.elements.firstName().type(randomAlphabet1)
        this.elements.lastName().type(randomAlphabet1)
        this.elements.userName().type('user'+randomAlphabet1)
        this.elements.passWord().type('Test@123456')
        this.elements.customerCompanyAA().check()
        this.elements.role().select('Sales Team')
        this.elements.email().type(randomEmail)
        this.elements.cellPhone().type('9900475773')
        this.elements.saveOption().click()
    }



}

function generateRandomAlphabetString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  function generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
  
  function generateRandomEmail(p0?: number) {
    const randomString = generateRandomString(10);
    return `${randomString}@example.com`;
  }

  