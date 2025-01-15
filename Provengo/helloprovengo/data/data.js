/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

// const URL = 'https://www.google.com/?hl=en';
const URL = 'https://sandbox.moodledemo.net/';
const xpaths = {
  searchWindow: {
    searchInput: '//textarea[@aria-label="Search"]',
    searchButton: '//input[@aria-label="Google Search"]',
    feelingLuckyButton: '//input[@aria-label="I\'m Feeling Lucky"]'
  },
  moodle:{
    login:'//*[@id="usernavigation"]/div[5]/div/span/a'
  }
}

const searchTerm = 'pizza'