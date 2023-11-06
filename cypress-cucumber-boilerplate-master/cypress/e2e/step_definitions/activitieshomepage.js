import {Given,When} from "@badeball/cypress-cucumber-preprocessor"
Given('cow project url link',()=>{
cy.visit('http://65.1.7.25:3001')
})

When('user enter the email in the input field',()=>{
    cy.get("#email").type('jangidiharish07@gmail.com')
})
When('user enter the password in the input field',()=>{
    cy.get("#password").type('Harish@123')
})

When('user verify the presence of the {string}',(name)=>{
    cy.get(80000)
cy.contains(name).should('be.visible',name)
})
When('user click on the {string} name',(button)=>{
    cy.wait(2000)
cy.contains(button).click({force: true})
})
When('user select a date {string}',(number)=>{
    cy.get('[class="  h-auto text-[gray] text-[14px] mt-3"]').eq(0).contains(number).click()
})
When('user select another date {string}',(num)=>{
    cy.get('[class="  h-auto text-[gray] text-[14px] mt-3"]').eq(1).contains(num).click()
})
When('user click on the crossicon {string}',(element)=>{
    cy.get('[class="w-full overflow-x-auto bg-[#F5F6F7] duration-500   min-h-[92vh]  ml-[286px]"]').scrollTo('top',{duration:2000})
    cy.get(element).click()
})
// When('user click on the {string} option',(option)=>{
//     cy.get('[class="p-2 cursor-pointer text-sm font-semibold text-default"]').contains(option).click()
// })
// When('user click on the crossicon',()=>{
// cy.get('[class="w-[25px] h-[25px] text-[#7677F4] cursor-pointer"]').eq(0).click()
// cy.get('[class="w-[25px] h-[25px] text-[#7677F4] cursor-pointer"]').eq(1).click()
// cy.get('[class="w-[25px] h-[25px] text-[#7677F4] cursor-pointer"]').eq(2).click()
// })
// When('user click on the crossicon in adavance filter',()=>{
//     cy.get('[class="ml-auto"]').eq(1).click()
// })
// When('user click on the crossicon in advance filter1',()=>{
//     cy.get('[class="ml-auto"]').eq(1).click()
// })
// When('user click on the {string} in the advance filter',(test)=>{
//     cy.get('[class="pt-[10px]"]').contains(test).click()
// })
// When('user click on the croosicon in advance filter2',()=>{
//     cy.get('[class="ml-auto"]').eq(1).click()
// })
// When('user click on the {string} in the advance filter1',(post)=>{
//     cy.get('[class="pt-[10px]"]').contains(post).click()
// })
// When('user click on the crossicon in advance filter3',()=>{
//     cy.get('[class="ml-auto"]').eq(1).click()
// })
// When('user click on the columnfilter',()=>{
//     cy.wait(2000)
//     cy.get('[class="ml-auto"]').click()
//     cy.get('[class="flex justify-center items-center "]').eq(4).click()
//     // cy.get('[class="cursor-pointer underline decoration-1"]').contains('Cancelar').click()
//     cy.get('[class="flex justify-center items-center "]').eq(5).click()
//     cy.get('[class="flex justify-center items-center "]').eq(6).click()
//     cy.get('[class="flex justify-center items-center "]').eq(7).click()
//     cy.get('[class="flex justify-center items-center "]').eq(8).click()
//     cy.get('[class="flex justify-center items-center "]').eq(9).click()
//     cy.get('[class="flex justify-center items-center "]').eq(10).click()
//     cy.get('[class="flex items-center gap-2 justify-center "]').contains('APLICAR').click()
//     cy.get('[class="ml-auto"]').click()
//     cy.get('[class="cursor-pointer underline decoration-1"]').contains('Borrar selección').click()
//     cy.get('[class="flex items-center gap-2 justify-center "]').contains('APLICAR').click()
// })
// // this is menu icon section the activities homepage
// When('user click on the menuicon',()=>{
//      cy.get('[id="parent-drop-table-1699"]').click()
// })
// When('user click on the canselbutton',()=>{
//     cy.get('[class="px-4 h-[45px] undefined white-btn w-[143.18px] border-[1px] !h-[45px]  "]').click()
// })
// When('user click on the closebutton',()=>{
//     cy.get('[class="px-4 h-[45px] undefined primary-btn w-[143.18px]  !h-[45px]  "]').click()
// })






// When('user click on the crossicon',()=>{
// cy.get('[class="w-[25px] h-[25px] text-[#7677F4] cursor-pointer"]').eq(1).click()
// })
// When('user click on the crossicon',()=>{
// cy.get('[class="w-[25px] h-[25px] text-[#7677F4] cursor-pointer"]').eq(2).click()
// })
//when('user click on the {string} point',(point)=>{
//cy.get('[class="p-2 cursor-pointer text-sm font-semibold text-[#898989]"]').contains(option).eq(1).click()
//})
// When('user click on the crossicon',(svg)=>{
    // cy.get('[xmlns="http://www.w3.org/2000/svg"]')
    // cy.get(svg).click()
// })
//class="p-2 cursor-pointer text-sm font-semibold text-[#898989]"
//When('user remove the selected status by using click on the crossicon',()=>{
    //cy.get('[class="pr-1 cursor-pointer ml-[5px]"]').eq(0).click()
   // cy.get('[class="pr-1 cursor-pointer ml-[5px]"]').eq(1).click()
//})