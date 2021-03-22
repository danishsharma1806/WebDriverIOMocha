class VerifyAssert
{
    getTitle()
    {
        return browser.getTitle();
    }
    makeRandomEmail() 
    {
        var emailValues="abcdefghijklmnopqsrtuvwxyz1234567890.";
        var emailValue1="abcdefghijklmnopqrstuvwxyz";
        var Email="";
        var temp;
        for (var i=0;i<10;i++) 
        {
            temp=emailValues.charAt(Math.round(emailValues.length*Math.random()));
            Email=Email+temp;
        }
        temp="";
        Email=Email+"@";
        for (var j=0;j<5;j++) 
        {
            temp=emailValue1.charAt(Math.round(emailValue1.length*Math.random()));
            Email=Email+temp;
        }
        Email=Email+".com";
        return Email;
    }
}
export default new VerifyAssert()