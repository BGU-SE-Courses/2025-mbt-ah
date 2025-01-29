
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

function deleteAssignment(session) {
    // Locate the specific 3-dot menu for "Assignment 1"
    session.click('//li[contains(@class, "modtype_assign") and .//a[contains(@href, "mod/assign/view.php") and contains(.//span, "Assignment 1")]]//i[@class="icon fa fa-ellipsis-vertical fa-fw " and @title="Edit"]');

    // Wait for the dropdown menu to appear, then click the 'Delete' option
    session.click('//li[contains(@class, "modtype_assign") and .//a[contains(@href, "mod/assign/view.php") and contains(.//span, "Assignment 1")]]//a[contains(@class, "editing_delete") and contains(@class, "text-danger")]');

    // Wait for the delete confirmation modal to appear and click the 'Delete' button
    Ctrl.doSleep(1000);
    session.click('//button[@type="button" and @class="btn btn-danger" and @data-action="delete"]');

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
        return true;
    }
}



    function pressSaveChanges(session) {
        with (session) {
            click(xpaths.moodle.student.saveChanges)
        }
    }
