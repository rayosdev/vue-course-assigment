<template>
<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2>Contact us Form</h2>
            </div>
        </div>
         <div class="row">
            <div class="col-sm-12">
                <br>Name: <br>
                <input type="text" name="firstName" id="firstName">
                <span class="error" id="firstNameError">This field cannot be blank</span>
            </div>
            <div class="col-sm-12">
                <br>Last Name: <br>
                <input type="text" name="lastName" id="lastName">
                <span class="error" id="lastNameError">This field cannot be blank</span>
            </div>
            <div class="col-sm-12">
                <br>Telephone: <br>
                <input type="text" name="phone" id="phone">
                <span class="error" id="phoneError">Please enter a correct phone number</span>
            </div>
            <div class="col-sm-12">
                <br>Email: <br>
                <input type="text" name="email" id="email">
                <span class="error" id="emailError">Please enter a correct email address</span>
            </div>
            <div class="col-sm-12">
                <button type="submit" id="submitContact" class="m-t-30">Submit <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    
}
</script>

