// bthread('Start',function () {
//   let s = new SeleniumSession('login');
//   s.start(URL);
//   pressLogin(s);
//   typeUsernameTeacher(s);
//   typePassword(s);
//   pressLoginButton(s);
//   pressMyCourses(s);
//   pressMyFirstCourse(s);
//   pressEditMode(s);
//   pressAddActivity(s);
//   pressAssignment(s);
//   typeAssignmentName(s);
//   typeAssignmentDescription(s);
//   pressSaveAndReturn(s);
//     // Signal the completion of the Start thread
//   bp.sync({request: bp.Event('StartComplete')});
// });

// // Teacher use case
// bthread('Teacher', function () {
//   // Wait for the Start thread to complete
//   bp.sync({waitFor: bp.Event('StartComplete')});
//
//   let s = new SeleniumSession('teacher');
//   s.start(URL);
//   pressLogin(s);
//   typeUsernameTeacher(s);
//   typePassword(s);
//   pressLoginButton(s);
//   pressMyCourses(s);
//   pressMyFirstCourse(s);
//   pressAssignmentLinkTeacher(s);
//   pressAssignmentSettings(s);
//   pressAssignmentChooseFileType(s);
//   pressDocxFileType(s);
//   pressSpecificDocxFileType(s);
//   // Ctrl.doSleep(3000000);
//   pressFileTypeSave(s);
//   pressSaveAndReturn(s);
// });


// Student use case
bthread('Student', function () {
  // Wait for the Start thread to complete
  // bp.sync({waitFor: bp.Event('StartComplete')});

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
  // Ctrl.doSleep(3000000);
  pressUploadFile(s);
  // pressSaveChanges(s);
  // pressContinue(s);
});