
        function validateForm(){

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let age = document.getElementById("age").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let nameRegex = /^[A-Za-z\s]{3,30}$/;
        let phoneRegex = /^[6-9]\d{9}$/;
        let ageRegex = /^(1[89]|[2-5][0-9]|60)$/;
        let userRegex = /^[a-zA-Z0-9_]{4,15}$/;
        let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        if(!nameRegex.test(name)){
        alert("Enter valid name");
        return false;
        }

        if(!phoneRegex.test(phone)){
        alert("Enter valid phone number");
        return false;
        }

        if(!ageRegex.test(age)){
        alert("Age must be between 18 and 60");
        return false;
        }

        if(!userRegex.test(username)){
        alert("Username must be 4-15 characters");
        return false;
        }

        if(!passRegex.test(password)){
        alert("Password must contain uppercase, lowercase and number");
        return false;
        }

        return true;

        }
