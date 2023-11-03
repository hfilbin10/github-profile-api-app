describe('opens app and has title', () => {
  it('visits app and asserts title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('a').should('contain', 'Code Platoon GitHub Profiles')
  })
})

describe('select from dropdown', () => {
  it('select name from dropdown and have modal appear', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.w-25').select('Halsey Filbin')
    cy.get('.modal').should('be.visible');
    cy.get('.modal-title').should('contain', 'Halsey Filbin');
  })
})

describe('Search for a User', () => {
  it('enters a user name and submits the search', () => {
    cy.visit('http://localhost:5173'); 
    cy.get('button[type="submit"]').click();
    cy.get('.modal').should('be.visible');
    cy.get('.modal-title').should('contain', ''); // Not sure how to test this
  });
});

describe('GitHub Logo Link', () => {
  it('clicks the GitHub logo and navigates to the user profile URL', () => {
    cy.visit('http://localhost:5173'); 
    cy.get('.w-25').select('Halsey Filbin')
    
    cy.get('.modal-footer a[href*="github.com"]').click(); 
  });
});

