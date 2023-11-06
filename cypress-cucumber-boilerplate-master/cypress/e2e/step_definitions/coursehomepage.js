import {Given,When} from "@badeball/cypress-cucumber-preprocessor"

Given('cow project url',()=>{
cy.visit('http://65.1.7.25:3001/dashboard')
})
When('user verify the presence of the {string} name',(name)=>{
cy.contains(name).should('be.visible')
})
When('user click on the {string}',(button)=>{
    // cy.wait(5000)
cy.get('button').contains(button).click()
})
When('user select a number {string}',(number)=>{
    cy.get('[class="  h-auto text-[gray] text-[14px] mt-3"]').eq(0).contains(number).click()
})
When('user select another number {string}',(num)=>{
    cy.get('[class="  h-auto text-[gray] text-[14px] mt-3"]').eq(1).contains(num).click()
})
//user verify the presence of the "Instructor" name