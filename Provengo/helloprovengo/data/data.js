/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

// const URL = 'https://www.google.com/?hl=en';
const URL = 'https://sandbox.moodledemo.net/';
const TEACHER_USERNAME = 'teacher';
const STUDENT_USERNAME = 'student';
const PASSWORD = 'sandbox24';

const xpaths = {
  moodle:{
    general:{
      login:'//*[@id="usernavigation"]/div[5]/div/span/a',
      username:'//*[@id="username"]',
      password:'//*[@id="password"]',
      loginButton:'//*[@id="loginbtn"]',
      myCourses:'//nav[@class="moremenu navigation observed"]//a[contains(text(), "My courses")]',
      // myFirstCourse:'//*[@id="course-info-container-2-3"]/div/div/a/span[3]/span[2]'
      myFirstCourse:'//*[@id="page-container-1"]/div/div/div[1]/div/a/div',

    },
    teacher:{
      editMode:'//*[@id="usernavigation"]/form/div/div',
      addActivity:'//*[@id="coursecontentcollapse0"]/div[2]/div/button/div/span',
      assignment:'//*[@id="all-6"]/div/div[1]/div/a/div[1]/img',
      assignmentName:'//*[@id="id_name"]',
      assignmentDescription:'//*[@id="id_introeditor_ifr"]',
      saveAndReturn:'//*[@id="id_submitbutton"]',
      assignmentLink:'//div[contains(@class, \'activity-grid\')]//a[contains(@class, \'aalink\') and contains(text(), \'Assignment 1\')]\n',
      //*[@id="module-5"]/div/div[2]/div[2]/div/div/a
      //*[@id="module-5"]/div/div[2]/div[2]/div
      //*[@id="module-5"]/div/div[2]/div[2]
      //*[@id="module-5"]/div/div[2]
      assignmentSettings:'//li[@data-key="modedit" and @role="none"]/a[contains(text(), "Settings")]\n',
      assignmentChooseFileType:'//button[contains(text(), "Choose")]',
      docxFileType:'//*[@id="yui_3_18_1_1_1737033418479_1214"]',
      fileTypeSave:'//*[@id="yui_3_18_1_1_1737033418479_1239"]'
    },

    student:{
      assignmentLink: '//*[@id="module-7"]/div/div[2]/div[2]/div/div/a',
      addSubmission: '//*[@id="single_button678907c1129358"]',
      uploadFile: '//*[@id="filepicker-button-1"]//input[@type="file"]',

    }

  }
}

const searchTerm = 'pizza'