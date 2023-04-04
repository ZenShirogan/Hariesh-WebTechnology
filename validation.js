function validate(){
    var a = document.myform.username.value;
    if(a==" ")
    {
        alert("Please Enter your username")
        document.myform.username.focus();
        return false;
    }  
    var d = document.myform.email.value;
    if(d == " ")
    {
        alert("please, Enter your mail id");
        document.myform.email.focus();
        return false;
    }
    var atposition = d.indexOf("@");
    var dotposition = d.lastIndexOf(".");
    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=d.length)
        {
            alert("please enter valid mail");
            return false;
        }
    var p = document.myform.password.value;
    if(p == "")
        {
            alert("please, Enter your password");
            document.myform.pass.focus();
            return false;
        }
    return true;
}
