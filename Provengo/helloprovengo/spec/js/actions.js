
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

function pressAssignmentLinkTeacer(session){
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

function pressFileTypeSave(session){
    with(session){
        click(xpaths.moodle.teacher.fileTypeSave)
    }
}

// for student

function pressAssignmentLink(session){
    with(session){
        click(xpaths.moodle.student.assignmentLink)
    }
}

function pressAddSubmission(session){
    with(session){
        click(xpaths.moodle.student.addSubmission)
    }
}

function pressUploadFile(session){
    // use this sn.fileUpload(selectors, files)
    session.fileUpload(xpaths.moodle.student.uploadFile,'Provengo/helloprovengo/data/test.txt')
}



