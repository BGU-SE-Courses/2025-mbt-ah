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
  deleteAssignment(s);
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
  pressAssignmentLinkStudent(s);
  pressAddSubmission(s);
  pressAddButton(s);
  pressUploadAFile(s);
  pressUploadFile(s);
  pressUploadThisFile(s);
  pressSaveChanges(s);
  bp.sync({ request: bp.Event('StudentSubmission') });
});