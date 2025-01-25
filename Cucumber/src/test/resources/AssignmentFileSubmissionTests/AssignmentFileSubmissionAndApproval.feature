Feature: Assignment File Submission and Approval

  Scenario: Student submits a valid .txt file
    Given the student is logged into the system
    And in the assignment submission page
    When the student uploads a .txt file and clicks submit
    Then the system should navigate back to assignment page

  Scenario: Teacher changes the approved file type to .docx
    Given the teacher is logged into the system
    And navigates to the assignment settings page
    When the teacher updates the approved file type to .docx
    And clicks save
    Then the system should return to assignment page