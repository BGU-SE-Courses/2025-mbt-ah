package AssignmentFileSubmissionTests;

import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTrue;

public abstract class Helper {

    protected WebDriver driver;
    protected WebDriverWait wait;
    protected final String baseUrl = "https://sandbox.moodledemo.net/";
    boolean suc = true;

    public Helper() {
            System.setProperty("webdriver.chrome.driver",
                    "C:\\Users\\omer1\\projects\\2025-mbt-ah\\Selenium\\chromedriver.exe");
            this.driver = new ChromeDriver();
            this.wait = new WebDriverWait(driver, Duration.ofSeconds(30));

            // launch website -> localhost
            driver.get("https://sandbox.moodledemo.net/");

            // maximize the window - some web apps look different in different sizes
            driver.manage().window().setPosition(new Point(700, 5));

            System.out.println("Driver setup finished for - " + driver.getTitle());
    }


    public void login(String username, String password) {
        driver.get(baseUrl + "login/index.php");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']"))).sendKeys(username); // Use XPath for username
        driver.findElement(By.xpath("//*[@id='password']")).sendKeys(password); // Use XPath for password
        driver.findElement(By.xpath("//*[@id='loginbtn']")).click(); // Use XPath for login button
        // wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h1[contains(text(), 'Home')]")));
    }
    public void isSubmissionSuccessful() {assertTrue(suc);}


    //*[@id="frontpage-available-course-list"]/div/div[1]
    public void navigates_to_course() {
        // Wait for and click the “My courses” link
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        By myCoursesLocator = By.linkText("My courses");

        WebElement myCoursesLink = wait.until(
                ExpectedConditions.elementToBeClickable(myCoursesLocator)
        );
        myCoursesLink.click();

        // Optionally wait for the resulting page to load
        wait.until(ExpectedConditions.urlContains("/my/courses.php"));

        System.out.println("Successfully clicked 'My courses'");

        By myCourseLocator = By.linkText("My first course");
        WebElement myCourse = wait.until(
                ExpectedConditions.elementToBeClickable(myCourseLocator)
        );
        myCourse.click();
        System.out.println("Successfully navigated to the first course");

    }

    public void NavigatesToAssignmentPage(String assignmentName) {
        // Wait for and click the “My courses” link
        By myCourseLocator = By.linkText(assignmentName);
        WebElement myAssignment = wait.until(
                ExpectedConditions.elementToBeClickable(myCourseLocator)
        );
        myAssignment.click();

    }


}
