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
      myCourses:'//*[@id="moremenu-6789058307bb6-navbar-nav"]/li[3]/a',
      myFirstCourse:'//*[@id="course-info-container-2-3"]/div/div/a/span[3]/span[2]'
    },
    teacher:{
      editMode:'//*[@id="678905d19a246678905d1855cb8-editingswitch"]',
      addActivity:'//*[@id="coursecontentcollapse0"]/div[2]/div/button/div/span',
      assignment:'//*[@id="all-7"]/div/div[1]/div/a',
      assignmentName:'//*[@id="id_name"]',
      assignmentDescription:'//*[@id="id_introeditor_ifr"]',
      saveAndReturn:'//*[@id="id_submitbutton"]',
      assignmentLink:'//*[@id="yui_3_18_1_1_1737033327907_268"]/div/div/span/a[1]',
      assignmentSettings:'//*[@id="moremenu-678906ab62b85-nav-tabs"]/li[2]/a',
      assignmentChooseFileType:'//*[@id="yui_3_18_1_1_1737033418479_1164"]',
      docxFileType:'//*[@id="yui_3_18_1_1_1737033418479_1214"]',
      fileTypeSave:'//*[@id="yui_3_18_1_1_1737033418479_1239"]'
    },

    student:{
      assignmentLink: '//*[@id="module-7"]/div/div[2]/div[2]/div/div/a',
      addSubmission: '//*[@id="single_button678907c1129358"]',
      uploadFile: '//*[@id="id_filemanager"]',



    }

  }
}

const searchTerm = 'pizza'