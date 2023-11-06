Feature: course home page
    Background:
        Given cow project url
    Scenario: course homepage 

        When user verify the presence of the "Instructor" name
        And user click on the "Instructor"
        And user verify the presence of the "Actividades" name
        And user click on the "Actividades"
        And user verify the presence of the "Cursos" name
        And user click on the "Cursos"
        And user verify the presence of the "Fecha" name
        And user click on the "Fecha"
        And user select a number "3"
        And user select another number "3"
        And user click on the "APLICAR"
        And user click on the "CANCELAR"
        And user verify the presence of the "Hoy" name
        And user click on the "Hoy"
        And user click on the ""

