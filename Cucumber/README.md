# Testing $$*TODO* software name$$ using Cucumber
This directory contains the cucumber files for testing the "student assignment submission" and
"assignment acceptable submission file type editing by teacher" module of the moodle website application.

## Running the tests
Run ```mvn test``` to run all the tests.

## Feature files
The behaviors that we tested are in the feature files that inside the
[resources/AssignmentFileSubmissionTests](resources/AssignmentFileSubmissionTests) 
directory. See the files for a detailed description of the tests.


## Step files
The step files in the [src/test/java/AssignmentFileSubmissionTests](src/test/java/AssignmentFileSubmissionTests) directory contain the code that defines
how each sentence in the feature files is translated to Selenium actions. See the files for a detailed description of
the implementation.


