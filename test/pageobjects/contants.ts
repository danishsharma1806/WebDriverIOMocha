import Verify from "../pageobjects/Verify";

class Constants 
{
    info= 
    {
        email:Verify.makeRandomEmail(),
        password:"Dan@12",
        firstname:"Danish",
        lastName:"Sharma",
        date:'18',
        month:'6',
        year:'2020',
        company:"Amazon",
        address:"B-252",
        addressline:"Alkapuri" ,
        city:"Ratlam",
        pincode:"00000",
        phoneNo:"5123696984",
        Alaisaddress:"72-Globus City"
    }
    titles=
    {
        Login:"Login - My Store",
        Regitration:"My account - My Store",
        WomenCollction:"Women - My Store",
        Order:"Order - My Store",
        Payement:"My Store"
    }
}
export default new Constants();