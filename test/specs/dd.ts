import registration from '../pageobjects/Registration.page';
import ddd from '../pageobjects/dd.page';
describe("Regiter in a Websites",function()
{
    it("Enter Email",function()
    {
        browser.url('/'); 
        registration.clickOnLink();
        registration.enterEmail("danii@gmail.com");
        registration.submitButton();
        ddd.days();
        browser.pause(10000);
    });
});
