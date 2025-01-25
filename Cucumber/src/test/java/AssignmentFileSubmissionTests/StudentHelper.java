package AssignmentFileSubmissionTests;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class StudentHelper extends Helper {


    public StudentHelper(){
        super();
    }


    public void submitFile(String fileName) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // 1) Click "Add submission"
        WebElement addSubmissionBtn = driver.findElement(By.xpath("//button[@type='submit' and contains(text(), 'Add submission')]\n"));
        addSubmissionBtn.click();
        System.out.println("Clicked Add submission button successfully");

        // 2) Click the plus icon
        By plusIcon = By.xpath("//i[contains(@class, 'fa-circle-plus')]");
        WebElement loadFile = wait.until(ExpectedConditions.elementToBeClickable(plusIcon));
        loadFile.click();
        System.out.println("Clicked Add file icon successfully");

        // 3) Click "Upload a file" link
        By uploadFileLink = By.linkText("Upload a file");
        WebElement upload = wait.until(ExpectedConditions.elementToBeClickable(uploadFileLink));
        upload.click();
        System.out.println("Clicked 'Upload a file' link successfully");

        // 4) Find the hidden <input type="file"> and send the file path
        //    (Use whichever locator matches your Moodle's input field)
        By fileInputLocator = By.cssSelector("input[type='file']");
        WebElement fileInput = wait.until(ExpectedConditions.presenceOfElementLocated(fileInputLocator));

        // 5) Send the file path (e.g. C:\files\mySubmission.txt or /home/user/mySubmission.txt)
        fileInput.sendKeys(fileName);
        System.out.println("Sent file path to file input successfully: " + fileName);

        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement uploadButton = wait.until(
                ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(), 'Upload this file')]"))
        );
        uploadButton.click();

        // 6) Click "Save changes" (the final step after uploading)
        By saveChangesLocator = By.id("id_submitbutton");  // or your existing XPath
        WebElement saveChangesButton = wait.until(ExpectedConditions.elementToBeClickable(saveChangesLocator));
        saveChangesButton.click();
        System.out.println("Clicked Save changes button successfully");
    }
}
