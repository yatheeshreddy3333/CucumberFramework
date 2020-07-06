package StepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ContactsStepDefinition {
	
	public WebDriver driver;
	
	@Before ("@Second")
	  public void beforeScenario(){
			WebDriverManager.chromedriver().setup();
		    driver = new ChromeDriver();
		    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		    driver.manage().window().maximize();
	  }
		
	  @After ("@Second")
	  public void afterScenario(){
	  	driver.close();
	  }
    
	@Given("^user is in login page3$")
	public void user_is_in_login_page3(){
		driver.get("https://ui.freecrm.com/");
	    }
		
		@When("^title of the login page is FreeCRM3$")
		public void title_of_the_login_page_is_FreeCRM3() {
			String title = driver.getTitle();
			System.out.println(title);
			//Assert.assertEquals(title, "ui.freecrm.com");
		}
		
		@Then("^user Logins3$")
		public void user_Logins3(DataTable credentials) {
			for(Map<String, String> usercredentials : credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(usercredentials.get("username"));
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(usercredentials.get("password"));
			driver.findElement(By.xpath("//div[text()='Login']")).click();
		}
		}
	
		@And ("click on Contacts and Validate page3$")
		public void click_on_Contacts_and_Validate_page3() {
			driver.findElement(By.xpath("//span[text()='Contacts']")).click();
			String Contacts = driver.findElement(By.xpath("//div[text()='Contacts']")).getText();
			System.out.println(Contacts);
			Assert.assertEquals(Contacts, "Contacts");
		}
		
		@And("^create Contact$")
		public void create_Contact(DataTable contactDetails) {
			for(Map<String, String> userContactDetails : contactDetails.asMaps(String.class, String.class)) {
			driver.findElement(By.xpath("//span[text()='Contacts']")).click();
			driver.findElement(By.xpath("//button[text()='New']")).click();
			driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(userContactDetails.get("FirstName"));
			driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(userContactDetails.get("LastName"));
			driver.findElement(By.xpath("//button[text()='Save']")).click();
			}
		}

}
