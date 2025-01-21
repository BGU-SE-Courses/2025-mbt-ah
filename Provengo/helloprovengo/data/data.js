/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = 'http://localhost/';
const FILE_PATH = 'C:\\Users\\galna\\Documents\\tests\\Provengo\\helloprovengo\\data\\test.txt';

const TEACHER_USERNAME = 'teacher';
const STUDENT_USERNAME = 'student';
const PASSWORD = 'Sandbox24!';

const xpaths = {
  moodle:{
    general:{
      // login:'//*[@id="usernavigation"]/div[5]/div/span/a',
      login:'//*[@id="usernavigation"]/div/div/span/a',
      // login: '//*[@id="usernavigation"]/div[3]/div/span/a',
      username:'//*[@id="username"]',
      password:'//*[@id="password"]',
      loginButton:'//*[@id="loginbtn"]',
      myCourses:'//nav[@class="moremenu navigation observed"]//a[contains(text(), "My courses")]',
      myFirstCourse:'//a[@class="aalink coursename me-2 mb-1" and .//span[@aria-hidden="true" and contains(text(), "My first course")]]',

    },
    teacher:{
      editMode:'//*[@id="usernavigation"]/form/div/div',
      skipTour: '//button[@class="btn btn-secondary" and @data-role="end" and text()="Skip tour"]',

      mainPage:'//*[@id="page"]',
      addActivity:'//*[@id="coursecontentcollapse0"]/div[2]/div/button/div/span',
      assignment:'//div[@class="optionname clamp-2" and text()="Assignment"]',
      assignmentName:'//*[@id="id_name"]',
      assignmentDescription:'//*[@id="id_introeditor_ifr"]',
      saveAndReturn:'//*[@id="id_submitbutton"]',
      assignmentLink:'//li[contains(@class, "activity-wrapper") and contains(@class, "modtype_assign")]//div[@class="activity-name-area activity-instance d-flex flex-column me-2"]//a[contains(@href, "mod/assign/view.php") and contains(.//span, "Assignment 1")]\n',
      assignmentSettings:'//li[@data-key="modedit" and @role="none"]/a[contains(text(), "Settings")]\n',
      assignmentChooseFileType:'//input[@type=\'button\' and contains(@value, \'Choose\')]\n',

      docxFileType:'//div[@data-filetypesbrowserkey="document"]//small[@aria-hidden="true" and @data-filetypesbrowserfeature="hideifexpanded"]//a[text()="Expand"]',
      specificDocxFileType:'//span[text()=\'Word 2007 document\']',
      fileTypeSave:'//button[@type=\'button\' and @data-action=\'save\']'
    },

    student:{
      assignmentLink:'//li[contains(@class, "activity-wrapper") and contains(@class, "modtype_assign")]//div[@class="activity-name-area activity-instance d-flex flex-column me-2"]//a[contains(@href, "mod/assign/view.php") and contains(.//span, "Assignment 1")]\n',
      addSubmission: '//button[@type=\'submit\' and contains(text(), \'Add submission\')]\n',
      addButton: '//a[@role="button" and @title="Add..." and contains(@class, "btn-secondary")]',
      uploadAFileButton: '//span[@class="fp-repo-name" and text()="Upload a file"]',
      selector: '//input[@type="file" and @name="repo_upload_file"]',
      uploadThisFile:'//button[@class="fp-upload-btn btn-primary btn" and text()="Upload this file"]\n',
      // dialog : '//div[contains(@class, "moodle-dialogue") and contains(@class, "yui3-panel")]',
      dialogOkButton : '//input[@type="button" and @value="OK"]',
      saveChanges: '//input[@id="id_submitbutton"]\n'

    }

  }
}

const searchTerm = 'pizza'