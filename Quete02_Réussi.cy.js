describe("Formualaire Blackmarket",()=>{

    it('visiter un site',function(){
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.contains('Tout refuser').click()
        cy.get('#firstName').type('Nicolas')
        cy.get('#lastName').type('Ribeiro')
        cy.get('#signup-email').type('nicolas@gmail.com')
        cy.get('#signup-password').type('123Motdepass')
        //cy.get('._3wvnh-Qn').check()
        cy.contains('J’accepte de recevoir les meilleurs plan du web et la newsletter par mail.').click()
        cy.contains("Enchantés !").click()


    })
})