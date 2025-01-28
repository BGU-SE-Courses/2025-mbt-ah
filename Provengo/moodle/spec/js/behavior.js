bthread('Start',function () {
  let s = new SeleniumSession('login');
  s.start(URL);
  pressLogin(s);
  typeUsernameTeacher(s);
  typePassword(s);
  pressLoginButton(s);
  pressMyCourses(s);
  pressMyFirstCourse(s);
  pressEditMode(s);
  handleTutorial(s);

  deleteAssignment(s);
  // Ctrl.doSleep(30000);

  pressAddActivity(s);
  pressAssignment(s);
  typeAssignmentName(s);
  typeAssignmentDescription(s);
  pressSaveAndReturn(s);
  // This indicates the teacher finished creating an assignment
  bp.sync({ request: bp.Event('AssignmentCreated') });

  // Signal the completion of the Start thread
  bp.sync({ request: bp.Event('StartComplete') });
});

// Teacher use case
bthread('Teacher', function () {
  // Wait for the Start thread to complete
  bp.sync({ waitFor: bp.Event('StartComplete') });

  let s = new SeleniumSession('teacher');
  s.start(URL);

  pressLogin(s);
  typeUsernameTeacher(s);
  typePassword(s);
  pressLoginButton(s);
  pressMyCourses(s);
  pressMyFirstCourse(s);
  pressAssignmentLinkTeacher(s);
  pressAssignmentSettings(s);
  pressAssignmentChooseFileType(s);
  pressDocxFileType(s);
  pressSpecificDocxFileType(s);
  // Ctrl.doSleep(3000000);
  pressFileTypeSave(s);
  pressSaveAndReturn(s);
  bp.sync({ request: bp.Event('DocxFileTypeSet') });

});


// Student use case
bthread('Student', function () {
  // Wait for the Start thread to complete
  bp.sync({waitFor: bp.Event('StartComplete')});

  let s = new SeleniumSession('student');
  s.start(URL);
  pressLogin(s);
  typeUsernameStudent(s);
  typePassword(s);
  pressLoginButton(s);
  pressMyCourses(s);
  pressMyFirstCourse(s);
  handleModal(s);
  // Ctrl.doSleep(3000000);
  pressAssignmentLinkStudent(s);
  pressAddSubmission(s);
  pressAddButton(s);
  pressUploadAFile(s);
  pressUploadFile(s);
  pressUploadThisFile(s);
  // var that keeps if dialog is present
    if (handleDialog(s)){
      pressSaveChanges(s);
    }

  bp.sync({ request: bp.Event('StudentSubmission') });
});