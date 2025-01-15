
function pressLogin(session){
    with(session){
        click(xpaths.moodle.login)
    }
}

function typeUsername(session){
    session.writeText(xpaths.moodle.username,TEACHER_USERNAME)
}

function typePassword(session){
    session.writeText(xpaths.moodle.password,PASSWORD)
}

function pressLoginButton(session){
    with(session){
        click(xpaths.moodle.loginButton)
    }
}