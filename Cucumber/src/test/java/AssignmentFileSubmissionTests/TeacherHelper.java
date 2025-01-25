package AssignmentFileSubmissionTests;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.time.Duration;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TeacherHelper extends Helper{

    boolean suc = true;

    public TeacherHelper(){
     super();
    }


    public void navigateToAssignmentSettingPage()
    {

        By settingsLink = By.linkText("Settings");
        WebElement SettingsButton = wait.until(ExpectedConditions.elementToBeClickable(settingsLink));
        SettingsButton.click();
        System.out.println("Clicked 'Settings' link successfully");
    }

    public void updateFileTypeToDocx()
    {
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        By chooseText = By.xpath("//input[@type='button' and contains(@value, 'Choose')]");
        WebElement chooseFileButton = wait.until(ExpectedConditions.elementToBeClickable(chooseText));
        chooseFileButton.click();
        System.out.println("Clicked choose file button successfully");

        By docsList = By.xpath("//div[@data-filetypesbrowserkey=\"document\"]//small[@aria-hidden=\"true\" and @data-filetypesbrowserfeature=\"hideifexpanded\"]//a[text()=\"Expand\"]");
        WebElement docsListExpander = wait.until(ExpectedConditions.elementToBeClickable(docsList));
        docsListExpander.click();

        WebElement word2007Span = driver.findElement(By.xpath("//span[text()='Word 2007 document']"));
        word2007Span.click();
        System.out.println("Clicked choose file button successfully");

        //save changes '//button[@type=\'button\' and @data-action=\'save\']'
        WebElement saveChangesButtonLocator = driver.findElement(
                By.xpath("//button[@type='button' and @data-action='save']"));
        saveChangesButtonLocator.click();
        System.out.println("Clicked saved file type selection successfully");

        ////input[@type='button' and contains(@value, 'Choose')]
    }

    public void clicksSave()
    {
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement saveAndReturnToMedia = driver.findElement(
                By.id("id_submitbutton2"));
        wait.until(ExpectedConditions.elementToBeClickable(saveAndReturnToMedia));
        saveAndReturnToMedia.click();
        System.out.println("Clicked save changes button successfully");

    }

    public void isReturnedToAssignmentPage()
    {
        assertTrue(suc);
    }
}
