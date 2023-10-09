const blank = document.getElementById("blank")
function signInFunction(){
    blank.style.display = "flex"
    blank.innerHTML = loginContent
    document.getElementById("left-blank").style.width = "100vw"
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
    const b = setTimeout(blankHide,5);
}

function loginClose(){
    document.getElementById("left-blank").style.width = "100vw"
    const a = setTimeout(asdf,500)
    function asdf(){
        blank.style.display = "none";
    }
    loginFlag = true
}
const loginContent = `<div class="left-blank"  id="left-blank" onclick="loginClose()"></div>
<div class="signin" id="signin">
<div class="content">
    <button onclick="loginClose()"><i class="fa fa-close"></i></button>
    <div class="head">
        <h5>Login</h5>
        <p>or <span onclick="signInAndLogIn()">create an account</span></p>
        <img src="images/login.webp" alt="flower image">
    </div>
    <div class="inpField">
        <input type="number" placeholder="Phone number" />
        <button>LOGIN</button>
        <P>By clicking on Login, I Accept the Terms & Aconditions & Privacy Policy</P>
    </div>
</div>
</div>`

const signupContent = `<div class="left-blank"  id="left-blank" onclick="loginClose()"></div>
<div class="signin" id="signin">
<div class="content">
    <button onclick="loginClose()"><i class="fa fa-close"></i></button>
    <div class="head">
        <h5>Sign up</h5>
        <p>or <span onclick="signInAndLogIn()">login to your account</span></p>
        <img src="images/login.webp" alt="flower image">
    </div>
    <div class="inpField">
        <input type="number" placeholder="Phone number"/>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email" requied/>
        <p id="referal">Have a referal code?</p>
        <button>SIGN UP</button>
        <P>By clicking on Login, I Accept the Terms & Aconditions & Privacy Policy</P>
    </div>
</div>
</div>`
var moveBlank = true;
var loginFlag = true
function signInAndLogIn(){
    if(loginFlag == true){
        document.getElementById("blank").innerHTML = signupContent
        loginFlag = false
    }
    else{
        loginFlag = true
        document.getElementById("blank").innerHTML = loginContent
    }
    if(moveBlank == true){
        const b = setTimeout(blankHide,10);
        moveBlank = false
    }

    // document.getElementById("left-blank").style.width = "62.5vw"
}
function blankHide(){
    document.getElementById("left-blank").style.width = "62.5vw"
}



function moveRight(){
    const offer_ul = document.getElementById("offer-ul")
    offer_ul.scrollLeft +=400
    // offer_ul.scrollRight += 10
}
function moveLeft(){
    const offer_ul = document.getElementById("offer-ul")
    console.log
    offer_ul.scrollLeft -=400
    offer_ul.scrollTo({
        behavior:'smooth'
    })
    // offer_ul.scrollRight += 10
}