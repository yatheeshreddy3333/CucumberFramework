package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefinition {

	public WebDriver driver;
	
	@Before ("@First")
  public void beforeScenario(){
		WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.manage().window().maximize();
  }
	
  @After ("@First")
  public void afterScenario(){
  	driver.close();
  }
	
	@Given("^navigate to Login page \"(.*)\"$")
	public void navigate_to_Login_page(String url){
		driver.get(url);
	    }
		
		@When("^user is in login page$")
		public void user_is_in_login_page() {
			String title = driver.getTitle();
			System.out.println(title);
			//Assert.assertEquals(title, "ui.freecrm.com");
		}
		
		@Then("^user logins using valid credentials \"(.*)\" and \"(.*)\"$")
		public void user_logins_using_valid_credentials(String username, String password) {
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
			driver.findElement(By.xpath("//div[text()='Login']")).click();
		}
		
		@Then("^user logins using invalid \"(.*)\" and \"(.*)\"$")
		public void user_logins_using_invalid(String username, String password) {
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
			driver.findElement(By.xpath("//div[text()='Login']")).click();
		}
		
		@And("^home page should be displayed$")
		public void home_page_should_be_displayed() {
			String homepage = driver.findElement(By.xpath("//span[text()='Home']")).getText();
			System.out.println(homepage);
			Assert.assertEquals(homepage, "Home");
		}
		
		@But ("^user should not be able to login$")
		public void user_should_not_be_able_to_login() {
			driver.findElement(By.xpath("//div[text()='Something went wrong...']")).isDisplayed();
		}
	
}
