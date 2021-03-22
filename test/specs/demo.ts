import registration from '../pageobjects/Registration.page';
import data from '../pageobjects/contants';
import verify from '../pageobjects/Verify';
import {expect} from 'chai';

describe("Regiter in a Websites",function()
{
    it("Enter Email",function()
    {
        browser.url('/'); 
        registration.clickOnLink();
        registration.enterEmail(data.info.email);
        registration.submitButton();
    });

    it("Enter Personal Information",function()
    {
        const title=verify.getTitle();
        expect(data.titles.Login).to.equal(title);
        registration.tickTheTitle();
        registration.enterUserFirstName(data.info.firstname);
        registration.enterUserSecondName(data.info.lastName);
        registration.enterPassword(data.info.password);
        registration.selectday(data.info.date);
        registration.selectMonth(data.info.month);
        registration.selectYear(data.info.year);
        registration.clickOnOffer();
    });

    it("Enter Address Details",function()
    {
        registration.enterCompnayName(data.info.company);
        registration.enterAddress(data.info.address);
        registration.enterAddressLine1(data.info.addressline);
        registration.enterCity(data.info.city);
        registration.enterState();
        registration.enterPinCode(data.info.pincode);
        registration.entercountry();
        registration.enterMobileNUmber(data.info.phoneNo);
        registration.enterAlaisAddress(data.info.Alaisaddress);
        registration.clickOnSubmitButton();
        const title=verify.getTitle();
        expect(data.titles.Regitration).to.equal(title);
    });

    it("Add To the Cart",function()
    {
        registration.clickOnWomen();
        const title=verify.getTitle();
        expect(data.titles.WomenCollction).to.equal(title);
        registration.clickOnselectedress();
        registration.addQuantity();
        registration.addToCart();
    });

    it("Checkout",function()
    {
        registration.clickOnProceed();
        const title=verify.getTitle();
        expect(data.titles.Order).to.equal(title);
        registration.clickOnNext();
        registration.clickOnNextForShipping();
        registration.clickOnTermsAndConditions();
        registration.clickOnPayment();
    });

    it("Payments",function()
    {
        registration.clickOnPayByBankWire();
        const title=verify.getTitle();
        expect(data.titles.Payement).to.equal(title);
        registration.clickOnIConfirmMtOrder();
    });

});