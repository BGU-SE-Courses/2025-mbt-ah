
function pressLogin(session){
    with(session){
        click(xpaths.moodle.general.login)
    }
}

function typeUsernameTeacher(session){
    session.writeText(xpaths.moodle.general.username,TEACHER_USERNAME)
}

function typeUsernameStudent(session){
    session.writeText(xpaths.moodle.general.username,STUDENT_USERNAME)
}

function typePassword(session){
    session.writeText(xpaths.moodle.general.password,PASSWORD)
}

function pressLoginButton(session){
    with(session){
        click(xpaths.moodle.general.loginButton)
    }
}

function waitThreeSeconds(session) {
    // Perform a sleep using Promises
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function pressMyCourses(session){
    with(session){
        click(xpaths.moodle.general.myCourses)
    }
}

function pressMyFirstCourse(session){
    with(session){
        click(xpaths.moodle.general.myFirstCourse)
    }
}

// for teacher

function pressEditMode(session){
    with(session){
        click(xpaths.moodle.teacher.editMode)
    }
}

function handleTutorial(session) {
    try {
        // Check if the "Skip tour" button is visible in the modal dialog
        const isButtonVisible = session.findElement('//div[@class="modal-dialog" and @role="document" and @data-role="flexitour-step"]//button[@class="btn btn-secondary" and @data-role="end" and text()="Skip tour"]', { wait: false });

        if (isButtonVisible) {
            // If visible, click the button
            session.click('//div[@class="modal-dialog" and @role="document" and @data-role="flexitour-step"]//button[@class="btn btn-secondary" and @data-role="end" and text()="Skip tour"]');
        }
    } catch (error) {
        // console.error("Error handling 'Skip tour' modal:", error);
    }
}


function pressAddActivity(session){
    with(session){
        click(xpaths.moodle.teacher.addActivity)
    }
}

function pressAssignment(session){
    with(session){
        click(xpaths.moodle.teacher.assignment)
    }
}

function typeAssignmentName(session){
    session.writeText(xpaths.moodle.teacher.assignmentName,'Assignment 1')
}

function typeAssignmentDescription(session){
    session.writeText(xpaths.moodle.teacher.assignmentDescription,'Assignment 1 Description')
}

function pressSaveAndReturn(session){
    with(session){
        click(xpaths.moodle.teacher.saveAndReturn)
    }
}

// use case starts here

function pressAssignmentLinkTeacher(session){
    with(session){
        click(xpaths.moodle.teacher.assignmentLink)
    }
}

function pressAssignmentSettings(session){
    with(session){
        click(xpaths.moodle.teacher.assignmentSettings)
    }
}

function pressAssignmentChooseFileType(session){
    with(session){
        click(xpaths.moodle.teacher.assignmentChooseFileType)
    }
}

function pressDocxFileType(session){
    with(session){
        click(xpaths.moodle.teacher.docxFileType)
    }
}

function pressSpecificDocxFileType(session){
    with(session){
        click(xpaths.moodle.teacher.specificDocxFileType)
    }
}

function pressFileTypeSave(session){
    with(session){
        click(xpaths.moodle.teacher.fileTypeSave)
    }
}

// for student

function handleModal(session) {
    try {
        // Attempt to find the "Got it" button
        const gotItButton = session.findElement(
            '//button[@class="btn btn-primary" and @data-role="end" and text()=" Got it "]'
        );

        // If the button exists, click it
        if (gotItButton) {
            session.click('//button[@class="btn btn-primary" and @data-role="end" and text()=" Got it "]');
        } else {
        }
    } catch (error) {
        // Handle any unexpected errors
    }
}



function pressAssignmentLinkStudent(session){
    with(session){
        click(xpaths.moodle.student.assignmentLink)
    }
}

function pressAddSubmission(session){
    with(session){
        click(xpaths.moodle.student.addSubmission)
    }
}

function pressAddButton(session){
    with(session){
        click(xpaths.moodle.student.addButton)
    }
}

function pressUploadAFile(session){
    with(session){
        click(xpaths.moodle.student.uploadAFileButton)
    }
}

function pressUploadFile(session){
    // use this sn.fileUpload(selectors, files)
    session.fileUpload(xpaths.moodle.student.selector, FILE_PATH);
}

// function absulutePathFromRelativePath(relativePath) {
//     // Assuming __dirname is provided by the Provengo environment
//     const basePath = __dirname || '.';
//     return basePath + '/' + relativePath.replace(/\\/g, '/');
// }



function pressUploadThisFile(session){
    with(session){
        click(xpaths.moodle.student.uploadThisFile)
    }
}

function handleDialog(session) {
    // if the ok button is present, click it, else do nothing
    try {
        // Attempt to find the "OK" button
        const okButton = session.findElement(xpaths.moodle.student.dialogOkButton);

        // If the button exists, click it
        if (okButton) {
            session.click(xpaths.moodle.student.dialogOkButton);
            return false;
        } else {
            return true;
        }
    } catch (error) {
        // Handle any unexpected errors
        return false;
    }
}



    function pressSaveChanges(session) {
        with (session) {
            click(xpaths.moodle.student.saveChanges)
        }
    }
