# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [$$*TODO* software name$$](https://address-of-the-project.com).

$$*TODO* Add some general description about the software$$

## Installation
- install cucumber.cli (java plugin is available too)
- follow [README.md](Cucumber/README.md) for more instructions on installation\usage and application of the behavioral 
  tests
- follow [Selenium/README.md](Selenium/README.md) instruction for installing and using Selenium
- follow [README.md](Provengo/README.md) instruction for more instructions on installation and applications of
   model-based-test

## What we tested

We tested the assignment module that allows for creating and submitting and editing of assignments.
We chose to test the following user story: 

***User story:*** Student submit a ".txt"  file to an assignment ;
Teacher changes the approved filetype of the assignment to ".docx".

***Preconditions**:* 
   1) There is a course with a teacher and a student
   2) there is an open assignment with .txt as allowed fileType for submission

***Expected outcome**:*
* the student's .txt file is submitted successfully and the teacher successfully changes the allowed fileType


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory.


