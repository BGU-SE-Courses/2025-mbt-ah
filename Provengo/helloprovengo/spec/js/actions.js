
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

function handleTutorial(session){
    try {
        if (session.waitForVisibility(xpaths.moodle.teacher.mainPage, 5000)) {
            session.waitForVisibility(xpaths.moodle.teacher.mainPage, 1000);
            session.click(xpaths.moodle.teacher.mainPage);
            return false;
        }
    } catch (error) {
    }
    return true;
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

function pressUploadFile(session){
    // use this sn.fileUpload(selectors, files)
    session.fileUpload(xpaths.moodle.student.selector,'D:\\Gal\\Documents\\GalCo3\\2025-mbt-ah\\Provengo\\helloprovengo\\data\\test.txt')
}

function pressUploadThisFile(session){
    with(session){
        click(xpaths.moodle.student.uploadThisFile)
    }
}

function handleDialog(session) {
    try {
        if (session.waitForVisibility(xpaths.moodle.student.dialog, 5000)) {
            session.waitForVisibility(xpaths.moodle.student.dialogOkButton, 1000);
            session.click(xpaths.moodle.student.dialogOkButton);
            return false;
        }
    } catch (error) {
    }
    return true;
}


    function pressSaveChanges(session) {
        with (session) {
            click(xpaths.moodle.student.saveChanges)
        }
    }
