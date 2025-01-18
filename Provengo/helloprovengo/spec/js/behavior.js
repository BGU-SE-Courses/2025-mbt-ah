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

// Teacher use case
bthread('Teacher', function () {
  // Wait for the Start thread to complete
  // bp.sync({waitFor: bp.Event('StartComplete')});

  let s = new SeleniumSession('teacher');
  s.start(URL);
  pressLogin(s);
  typeUsernameTeacher(s);
  typePassword(s);
  pressLoginButton(s);
  pressMyCourses(s);
  pressMyFirstCourse(s);
  // Ctrl.doSleep(3000000);
  pressAssignmentLinkTeacer(s);
  pressAssignmentSettings(s);
  // Ctrl.doSleep(3000000);
  pressAssignmentChooseFileType(s);
  pressDocxFileType(s);
  pressFileTypeSave(s);
  pressSaveAndReturn(s);
});