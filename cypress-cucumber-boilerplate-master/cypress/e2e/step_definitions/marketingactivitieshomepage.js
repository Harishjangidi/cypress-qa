import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
Given('qa cow project link',()=>{
cy.visit('http://65.1.7.25:3001')
})

//login page step defination calling 
When('user enter the valid email in the input field of loginpage',()=>{
    cy.get("#email").type('jangidiharish07@gmail.com')
})
When('user enter the valid password in the input field of loginpage',()=>{
    cy.get("#password").type('Harish@123')
}) 

// dashboard verify & click step defination get method
When('user verify the presence of the {string} in the dashboard',(name)=>{
    cy.wait(5000)
    cy.contains(name).should('be.visible',name)
})
When('user click on the {string} in the dashboard',(button)=>{
    cy.wait(4000)
    cy.get("#root").contains(button).click()
})
When('user click on the {string} in the page', ()=>{
cy.get('[id="accordian-1"]').click()
})
When('user click on the {string} in the campaign',()=>{
    cy.get('[class="flex items-center pl-[8px] gap-4"]').eq(2).click()
})
When('user click on the {string} in the activities homepage',()=>{
    cy.wait(5000)
    cy.get('[id="parent-drop-down-date"]').click()
    // get('[class="w-auto bg-[#F5F6F7] overflow-y-hidden   "]').scrollTo('bottom',{duration:2000})
    
})
// fetcha filter
When('user selected {string} in the calender one',(selectfirstnumber)=>{
    cy.get('[class="flex flex-col w-auto h-auto py-2 px-6"]').eq(0).contains(selectfirstnumber).click()
})

When('user selected date {string} in the another calander',(selectsecondnumber)=>{
    cy.get('[class="flex flex-col w-auto h-auto py-2 px-6"]').eq(1).contains(selectsecondnumber).click()
})
When('user click on the {string} in the calander',(buttonclick)=>{
        cy.contains(buttonclick).click()
})
When('user click on the crossicon',()=>{
    cy.get('[class="w-[30px] h-[30px]"]').click()
})
When('user mouse over to screen', () =>{
    cy.get('body').trigger('mouseover');
})

// estatus filter
When('user click on the {string} in the activities homepage estatus',(estatusclick)=>{
    cy.wait(5000)
cy.contains(estatusclick).click()
})
When('user click on the crossicon in estatus',()=>{
    cy.get('[class="cursor-pointer"]').click()
})

//advance filter
When('user click on the {string} in the activities homepage advancefilter',(advancefilterclick)=>{
    cy.wait(5000)
    cy.contains(advancefilterclick).click()
})
Then('user verify the presence of the {string} of the homepage', (courseverify) => {
    cy.get('[class="my-[18px]  "]')
      .get('[class="flex flex-row items-center rounded-xl  gap-[3] bg-[white] min-w-full w-fit my-[16px] px-[20px] py-[14px] "]')
      .each(($el) => {
        cy.wrap($el).get('[class="min-w-[95px] flex-[1] text-[#59595B] cursor-pointer text-start pl-[10px]"]').contains(courseverify).should('have.text',courseverify)
      })
  })





























  


