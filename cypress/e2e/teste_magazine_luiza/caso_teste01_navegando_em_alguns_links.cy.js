// Fazendo a verificação do Header da página

/// <reference types="cypress" />

describe('TC01 - Navegando e fazendo busca em alguns links', () => {
  beforeEach(() => {
    cy.visit("https://www.magazineluiza.com.br/");
    cy.viewport(1280, 1080);
    cy.on('uncaught:exception', () => false);
  });

  it('Verificando o se os links do header estão funcionando', () => {
      cy.get('[data-testid="logo-magalu"]').should('be.visible');
      cy.get('.fAXeyr > .bnbGnK > [data-testid="link"]').should('have.text', 'Todos os departamentos');
      cy.get(':nth-child(2) > .sc-dhKdcB > [data-testid="link"]').click();
      cy.get('[data-testid="text-line"]').click();
      cy.get('[data-testid="zipcode-input"]').type('18601-000');
      cy.get('[data-testid="text-line"] > .sc-dhKdcB').should('have.text', 'Botucatu - 18601-000');
  } );

  it('Navegando pelos produtos', () => {
    cy.get(
      '[href="https://www.magazineluiza.com.br/ferramentas/l/fs/"] > [data-testid="image"]'
    ).click();
    cy.get(
      ':nth-child(1) > [data-testid="product-card-container"] > .sc-ijtseF > [data-testid="image"]'
    ).click();
    cy.get('[data-testid="buyButton"]').should("have.text", "Comprar Agora");
    cy.get('[data-testid="mod-t"] > .sc-fqkvVR').should("be.visible");
    cy.get('[data-testid="mod-u"] > .sc-fqkvVR > .sc-kpDqfm').should("be.visible");  
    cy.get('[data-testid="heading-product-title"]').should('be.visible');  
  });

  it('Fazendo busca de produto', () => {
    cy.get('[data-testid="input-container"]').type('Panela de Pressão');
    cy.get('[data-testid="search-submit"]').click();
    cy.get('[data-testid="mod-k"]').should("have.text", "Resultados para Panela de pressão");
  });

});