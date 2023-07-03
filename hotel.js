let checkIn = document.getElementById("check-in")
let checkOut = document.getElementById("check-out")
let adultCount = document.getElementById("adults-cnt")
let childCount = document.getElementById("child-cnt")
let details = document.getElementById("booking-details")


function display(){
    alert("Booking Successful")
    details.style.display = 'block'
    details.innerHTML = 
    `<p> Check-In date : ${checkIn.value} </p> 
     <p> Check-Out date : ${checkOut.value} </p>
     <p> Adults : ${adultCount.value} </p>
     <p> Children : ${childCount.value} </p>`
     
}

let nameContact = document.querySelector(".nameCom")
let emailContact = document.querySelector(".emailCom")
let mobileContact = document.querySelector(".mobileCom")
let commentContact = document.querySelector(".commentCom")

function commentSubmit(){
    console.log(nameContact.value)
    console.log(emailContact.value)
    console.log(mobileContact.value)
    console.log(commentContact.value)
    clrMessage()
}
function clrMessage(){
    alert("Thank You. Your response has been submitted.")
    nameContact.value = ''
    emailContact.value = ''
    mobileContact.value =''
    commentContact.value = ''
}

 