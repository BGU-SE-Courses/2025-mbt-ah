# Testing $$*TODO* software name$$ using Cucumber
This directory contains the cucumber files for testing the "student assignment submission" and
"assignment acceptable submission file type editing by teacher" module of the moodle website application.

## Running the tests

1) before running the test make sure the Teacher has an open assignment named 'Assignment1' with .txt as the allowed
file type for submission.
2) make sure you installed al maven dependencies using ```mvn install```
3)  Run all tests using ```mvn test```.


## Feature files
The behaviors that we tested are in the feature files that inside the
[src/test/resources/AssignmentFileSubmissionTests](src/test/resources/AssignmentFileSubmissionTests) 
directory. See the files for a detailed description of the tests.


## Step files
The step files in the [src/test/java/AssignmentFileSubmissionTests](src/test/java/AssignmentFileSubmissionTests) directory contain the code that defines
how each sentence in the feature files is translated to Selenium actions. See the files for a detailed description of
the implementation.


