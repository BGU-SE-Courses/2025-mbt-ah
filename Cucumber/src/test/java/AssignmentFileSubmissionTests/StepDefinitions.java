package AssignmentFileSubmissionTests;
import io.cucumber.java.en.*;
import java.nio.file.Path;
import java.nio.file.Paths;

public class StepDefinitions {

    private static StudentHelper studentHelper;
    private static TeacherHelper teacherHelper;

    public void initStudent() {
        System.out.println("initializing student");
        studentHelper = new StudentHelper();

    }
    public void initTeacher() {
        System.out.println("initializing teacher");
        teacherHelper = new TeacherHelper();

    }

    @Given("the student is logged into the system")
    public void theStudentIsLoggedIntoTheSystem() {
        System.out.println("trying to log the student into the system");
        initStudent();
        studentHelper.login("student", "sandbox24");
        System.out.println("the student is logged into the system");
    }

    @And("in the assignment submission page")
    public void navigatesToTheAssignmentSubmissionPage() {
        System.out.println("navigating to the assignment submission page");
        studentHelper.navigates_to_course();
        studentHelper.NavigatesToAssignmentPage("Assignment1");
        System.out.println("navigated to the assignment submission page");
    }

    @When("the student uploads a .txt file and clicks submit")
    public void theStudentUploadsATxtFileAndClicksSubmit() {
        System.out.println("student uploading a .txt file and clicking submit");
        Path myPath  = Paths.get(System.getProperty("user.dir"),"src","test", "java", "AssignmentFileSubmissionTests", "a.txt");
        studentHelper.submitFile(myPath.toString());
        System.out.println("student submitted the assignment");
    }

    @Then("the system should navigate back to assignment page")
    public void theSystemShouldDisplayAMessage() {studentHelper.isSubmissionSuccessful();}

    @Given("the teacher is logged into the system")
    public void theTeacherIsLoggedIntoTheSystem() {

        System.out.println("trying to log the teacher into the system");
        initTeacher();
        teacherHelper.login("teacher", "sandbox24");
        System.out.println("the teacher is logged into the system");
    }

    @And("navigates to the assignment settings page")
    public void navigatesToTheAssignmentSettingsPage() {
        System.out.println("Teacher navigating to the assignment settings page");
        teacherHelper.navigates_to_course();
        teacherHelper.NavigatesToAssignmentPage("Assignment1");
        System.out.println("Teacher navigated to the assignment page");
        teacherHelper.navigateToAssignmentSettingPage();
        System.out.println("Teacher navigated to the assignment Settings page");

    }

    @When("the teacher updates the approved file type to .docx")
    public void theTeacherUpdatesTheApprovedFileTypeToDocx() {
        System.out.println("teacher updating the approved file type to .docx");
        teacherHelper.updateFileTypeToDocx();
        System.out.println("updated the approved file type to .docx");
    }

    @And("clicks save")
    public void clicksSave() {
        System.out.println("teacher clicking save");
        teacherHelper.clicksSave();
        System.out.println("saved the settings");
    }

    @Then("the system should return to assignment page")
    public void theSystemShouldReturnToAssignmentPage() {
        teacherHelper.isReturnedToAssignmentPage();

    }


}
