Feature: activities home page
Background:
Given cow project url link
Scenario: activies homepage

And user enter the email in the input field 
And user enter the password in the input field
And user click on the "Login"


When user verify the presence of the "Instructor" 
And user click on the "Instructor" name
And user verify the presence of the "Actividades"  
And user click on the "Actividades" name

# #// fetcha section 

When user verify the presence of the "Fecha" 
And user click on the "Fecha" name
And user select a date "10" ''
And user select another date "20" 
And user click on the "APLICAR" name
And user click on the crossicon '[class="w-[30px] h-[30px]"]'
And user click on the "Última semana" name
And user click on the "APLICAR" name
And user click on the crossicon '[class="w-[30px] h-[30px]"]'
And user click on the "Último mes" name 
And user click on the "APLICAR" name
And user click on the crossicon '[class="w-[30px] h-[30px]"]'
And user click on the "Últimos tres meses" name 
And user click on the "APLICAR" name
And user click on the crossicon '[class="w-[30px] h-[30px]"]'
And user click on the "Último año" name 
And user click on the "APLICAR" name
And user click on the crossicon '[class="w-[30px] h-[30px]"]'
And user click on the "Personalizado" name 
And user click on the "APLICAR" name
And user click on the crossicon '[class="w-[30px] h-[30px]"]'

# # //estatus section

# When user verify the presence of the "Estatus"
# And user click on the "Estatus" name
# And user click on the "Borrador" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "Revisión" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "Promoción" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "En Curso" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "Rendición" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "Cierre" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "Cerrado" name
# And user click on the crossicon '[class="cursor-pointer"]'
# And user click on the "Cancelado" name
# And user click on the crossicon '[class="cursor-pointer"]'


# # And user click on the "Promoción" name
# # And user click on the "Cerrado" name


# #// organiser section

# And user verify the presence of the "Organizados/Enseñados"
# And user click on the "Organizados/Enseñados" name
# And user click on the "Organizados" option
# And user click on the crossicon '[d="M13.0383 12.0127L11.1527 10.127L13.0383 8.24143L12.2841 7.48718L10.3984 9.3728L8.51282 7.48718L7.75857 8.24143L9.64419 10.127L7.75857 12.0127L8.51282 12.7669L10.3984 10.8813L12.2841 12.7669L13.0383 12.0127Z"]'
# And user click on the "Enseñados" option
# And user click on the crossicon '[d="M13.0383 12.0127L11.1527 10.127L13.0383 8.24143L12.2841 7.48718L10.3984 9.3728L8.51282 7.48718L7.75857 8.24143L9.64419 10.127L7.75857 12.0127L8.51282 12.7669L10.3984 10.8813L12.2841 12.7669L13.0383 12.0127Z"]'

# #// advance filter section

# # When user verify the presence of the "Filtro avanzado"
# # And user click on the "Filtro avanzado"
# # When user verify the presence of the "Tipo de actividad"
# # And user click on the "Tipo de actividad"
# # And user click on the "workshop"
# # And user click on the "course"
# # And user click on the "followup"
# # And user click on the "APLICAR FILTRO"
# When user verify the presence of the "Filtro avanzado"
# And user click on the "Filtro avanzado"
# When user verify the presence of the "Tipo de actividad"
# And user click on the "Tipo de actividad"
# And user click on the "course"
# And user click on the "followup"
# And user click on the "APLICAR FILTRO"
# When user verify the presence of the "Filtro avanzado"
# And user click on the "Filtro avanzado"
# And user click on the "Borrar filtros"
# And user click on the "APLICAR FILTRO"
# When user verify the presence of the "Filtro avanzado"
# And user click on the "Filtro avanzado"
# When user verify the presence of the "Nombre de la actividad"
# And user click on the "Nombre de la actividad"
# And user click on the "Art of Breathing"
# And user click on the "Nombre de la actividad"
# And user click on the "Instructor"
# And user click on the "Nagaraju Payyavula" 
# And user click on the crossicon in adavance filter
# And user click on the "Instructor"
# And user click on the "Organizador"
# And user click on the "Jam Bread" 
# And user click on the crossicon in advance filter1
# And user click on the "Organizador"
# And user click on the "Formato"
# And user click on the "Presencial"
# And user click on the "Visibilidad"
# And user click on the "Privado"
# When user verify the presence of the "Estatus"
# And user click on the "Estatus" in the advance filter
# And user click on the "Promoción"
# And user click on the "Tour asociado"
# And user click on the "G0049 - Aakash 2023"
# And user click on the croosicon in advance filter2
# And user click on the "Tour asociado"
# And user click on the "Pais" in the advance filter1
# And user click on the "Bolivia"
# And user click on the crossicon in advance filter3
# And user click on the "Pais"
# And user click on the "Estado/Provincia"
# And user click on the "Alto Paraná"
# And user click on the crossicon in advance filter3
# And user click on the "Estado/Provincia"
# And user click on the "Sede"
# And user click on the "08<#gkDY5b"
# And user click on the crossicon in advance filter3
# And user click on the "Sede" 
# And user click on the "APLICAR FILTRO"
# And user click on the "Filtro avanzado"
# And user click on the "Borrar filtros"
# And user click on the "APLICAR FILTRO"

# # //column section

# And user click on the columnfilter
# When user verify the presence of the "Actividad"
# When user verify the presence of the "Tipo"
# When user verify the presence of the "Estatus"
# When user verify the presence of the "Organizador"

# # // this is menu icon section the activities homepage
# And user click on the menuicon 
# And user click on the "Editar actividad" 
# And user click on the crossicon '[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]'
# And user click on the canselbutton
# And user click on the crossicon '[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]'
# And user click on the closebutton
# And user click on the menuicon
# And user click on the "Duplicar"
# And user click on the crossicon '[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]'
# And user click on the canselbutton
# And user click on the crossicon '[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]'
# And user click on the closebutton
# And user click on the menuicon
# And user click on the "Ver precios y descuentos"
# And user click on the crossicon '[class="flex ml-auto w-[26px] h-[26px] top-[22px] right-[22px] absolute cursor-pointer"]'
# And user click on the menuicon
# And user click on the "Agregar a un funnel "
# And user click on the menuicon
# And user click on the "Cancelar actividad"
# And user click on the "SIGUIENTE"
# And user click on the "SIGUIENTE"
# And user click on the "CANCELAR CURSO"


















# And user click on crossicon
# And user click on the "Enseñados"
# And user click on the crossicon 
# And user remove the selected status by using click on the crossicon
# And user click on the crossicon '[class="pr-1 cursor-pointer ml-[5px]"]'
# And user click on the crossicon '[class="pr-1 cursor-pointer ml-[5px]"]'
# And user click on the "CANCELAR" name 
