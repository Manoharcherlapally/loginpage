function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword");
    var number = document.getElementById("number").value;


    if (name == "" || email == "" || password == "") {
        alert("All fields must be filled out");
        return false;
    } else {
        //validate the email
        var regex = /^([a-zA-Z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

        if (!regex.test(email)) {
            alert("Please enter a valid e-mail address");
            return false;
        } else {
            //validate the password
            if (password == "") {
                alert("Password field cannot be empty");
                return false;
            } else if (password.length < 8) {
                alert("Password must contain at least 8 characters");
                return false;
            } else if (password.search(/[A-Z]/) < 0) {
                alert("Password must contain at least one uppercase letter");
                return false;
            } else if (password.search(/[a-z]/) < 0) {
                alert("Password must contain at least one lowercase letter");
                return false;
            }

            //validate the confirm password
            if (password != confirmPassword.value) {
                alert("Passwords do not match");
                return false;
            }

            //validate the mobile number
            var num = parseInt(number);
            if (isNaN(num) || number.length != 10) {
                alert('Please provide a valid Mobile Number');
                return false;
            }

            //If everything is correct return true
            else {
                document.getElementById('form').submit();
                alert("You have successfully registered! Welcome!");
                return true;
            }
        }


    }


}

