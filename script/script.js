const blank = document.getElementById("blank")
function signInFunction(){
    blank.style.display = "flex"
    blank.innerHTML = loginContent
    document.getElementById("left-blank").style.width = "100vw"
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
    const b = setTimeout(blankHide,5);
}
function cartSignin(){
    // const blank = document.getElementById("blank")
    document.getElementById("accountBtn").style.display = "none"
    document.getElementById("cartContent").innerHTML = cartSign
}
function cartLogin(){
    document.getElementById("accountBtn").style.display = "none"
    document.getElementById("cartContent").innerHTML = cartLog
}
function loginClose(){
    document.getElementById("left-blank").style.width = "100vw"
    const a = setTimeout(asdf,500)
    function asdf(){
        blank.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "scroll"
    }
    loginFlag = true
}
const cartLog = `<div class="head">
<h5>Login</h5>
<p>
    or
    <span onclick="cartSignin()"
        >create an account</span
    >
</p>
<img
    src="images/login.webp"
    alt="flower image"
/>
</div>
<div class="inpField">
<input
    type="text"
    inputmode="numeric"
    placeholder="Phone number"
    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
    maxlength = "10"
    required
/>
<button>LOGIN</button>
<p>
    By clicking on Login, I Accept the
    Terms & conditions & Privacy Policy
</p>
</div>`
const cartSign = `<div class="head">
<h5>Sign up</h5>
<p>
    or
    <span onclick="cartLogin()"
        >login to your account</span
    >
</p>
<img
    src="images/login.webp"
    alt="flower image"
/>
</div>
<div class="inpField"  id="inpField">
<form>
<input
type="text"
inputmode="numeric"
placeholder="Phone number"
oninput="this.value = this.value.replace(/[^0-9]/g, '')"
maxlength = "10"
required
/>
<input 
type="text"
placeholder="Name"
maxlength="20"
oninput="this.value = this.value.replace(/[^a-z]/g, '')"
required />
<input
    type="email"
    placeholder="Email"
    requied
/>
<a onclick="referalFun()"><p id="referal">Have a referal code?</p></a>
<button>SIGN UP</button>
</form>
<p>
    By clicking on Login, I Accept the
    Terms & conditions & Privacy Policy
</p>
</div>`

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
        <form>
            <input type="number" placeholder="Phone number" max="10" required/>
            <button>LOGIN</button>
            </form>
            <P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
        </div>
    </div>
</div>`

var signupContent = `<div class="left-blank"  id="left-blank" onclick="loginClose()"></div>
<div class="signin" id="signin">
<div class="content">
    <button onclick="loginClose()"><i class="fa fa-close"></i></button>
    <div class="head">
        <h5>Sign up</h5>
        <p>or <span onclick="signInAndLogIn()">login to your account</span></p>
        <img src="images/login.webp" alt="flower image">
    </div>
    <div class="inpField" id="inpField">
    <form>
        <input type="number" placeholder="Phone number"/>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email" requied/>
        <a href="#" id="referal" onclick="referalFun()"><p id="referal">Have a referal code?</p></a>
        <button>SIGN UP</button>
    </form>
        <P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
    </div>
</div>
</div>
</form>`

const referCode = `<form>
<input type="number" placeholder="Phone number"/>
<input type="text" placeholder="Name"/>
<input type="email" placeholder="Email" requied/>
<input type="text" placeholder="Referal Code" requied/>
<button>SIGN UP</button>
<P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
</form>`
// document.getElementById("referal").addEventListener("click",b)
function referalFun(){
    document.getElementById("inpField").innerHTML = referCode;
    // signupContent = referCode

}
var moveBlank = true;
var loginFlag = true;
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


offerScroll = 3000
function moveRight(){
    const offer_ul = document.getElementById("offer-ul")
    offer_ul.scrollLeft +=400
    // offer_ul.scrollRight += 10
    offerScroll+=200
    offer_ul.scrollTo({
        top:0,
        left:offerScroll,
        behavior:'smooth'
    })
}
function moveLeft(){
    const offer_ul = document.getElementById("offer-ul")
    console.log
    offer_ul.scrollLeft -=400
    offerScroll -= 500
    offer_ul.scrollTo({
        top:0,
        left:offerScroll,
        behavior:'smooth'
    })
    // offer_ul.scrollRight += 10
}
function rightBtn(offerul){
    var container = document.getElementById(offerul);
    sideScroll(container,'right',4,600,10);
}
function leftBtn(offerul){
    var container = document.getElementById(offerul);
    sideScroll(container,'left',4,600,10);
}


function sideScroll(element, direction,speed, distance,  step){
    scrollAmount =0;
    var slideTimer = setInterval(function(){
        if(direction == "left"){
            element.scrollLeft -= step;
        }else{
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount>=distance){
            window.clearInterval(slideTimer);
        }
    },speed)
}