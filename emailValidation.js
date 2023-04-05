function validateEmail(email){
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email)
}

if(validateEmail("ak@gmail.com")){
    console.log("successfully")
}else{
    console.log("error")
}