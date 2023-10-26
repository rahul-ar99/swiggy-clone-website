const referCode = `<form>
    <input type="number" placeholder="Phone number"/>
    <input type="text" placeholder="Name"/>
    <input type="email" placeholder="Email" requied/>
    <input type="text" placeholder="Referal Code" requied/>
    <button>SIGN UP</button>
    <P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
    </form>`
const indian_cuisines = ["North Indian", "South Indian", "Punjabi", "Bengali", "Gujarati", "Rajasthani", "Kashmiri", "Hyderabadi", "Kerala", "Maharashtrian", "Goan", "Uttar Pradesh", "Tamil", "Oriya", "Assamese", "Parsi", "Sindhi", "Andhra", "Karnataka", "Chettinad",]

const filterItems = ['filter', 'Sort By', 'Fast Delivery', 'New on Swiggy', 'Rating 4.0', 'Pure Veg', 'Offers', 'Rs.300-Rs.600', 'less than Rs.300']

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
                <input    type="text"
                inputmode="numeric"
                placeholder="Phone number"
                oninput="this.value = this.value.replace(/[^0-9 +]/g, '')"
                minlength = "10"
                maxlength = "14"
                required/>
                <input type="submit" value="LOGIN">
            </form>
            <P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
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
    <div class="inpField" id="inpField">
    <form>
        <input type="text"
        inputmode="numeric"
        placeholder="Phone number"
        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
        maxlength = "10"
        required/>
        <input type="text"
        placeholder="Name"
        maxlength="40"
        oninput="this.value = this.value.replace(/[^a-zA-Z .]/g, '')"
        required />
        <input type="email" placeholder="Email" required/>
        <a href="#" id="referal" onclick="referalFun()"><p id="referal">Have a referal code?</p></a>
        <input type="submit" value="SIGN UP">
    </form>
        <P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
    </div>
</div>
</div>
</form>`


// signin and login function from
var moveBlank = true;
var loginFlag = true;
function signInAndLogIn() {
    if (loginFlag == true) {
        document.getElementById("blank").innerHTML = signupContent
        loginFlag = false
    }
    else {
        loginFlag = true
        document.getElementById("blank").innerHTML = loginContent
    }
    if (moveBlank == true) {
        const b = setTimeout(blankHide, 10);
        moveBlank = false
    }
    // document.getElementById("left-blank").style.width = "62.5vw"
}

function blankHide() {
    document.getElementById("left-blank").style.width = "62.5vw"
}
// blank for login page and signin page right side div
const blank = document.getElementById("blank")
function signInFunction() {
    blank.style.display = "flex"
    blank.innerHTML = loginContent
    document.getElementById("left-blank").style.width = "100vw"
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
    const b = setTimeout(blankHide, 5);
}

// close main login sheet from window
function loginClose() {
    document.getElementById("left-blank").style.width = "100vw"
    const a = setTimeout(asdf, 500)
    function asdf() {
        blank.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "scroll"
    }
    loginFlag = true
}

// add referal input to signin page
function referalFun() {
    document.getElementById("inpField").innerHTML = referCode;
}
let helpOld = 'partnerOnboarding'
function helpButton(btn) {
    // for()
    if (btn == 'partnerOnboarding') {
        document.querySelector(".partnerOnboarding").style.display = "block"
        document.querySelector(".legal").style.display = "none"
        document.querySelector(".faqs").style.display = "none"
        document.querySelector("#legalBtn").style.background= "#eaeaea          "
        document.querySelector("#faqsBtn").style.background= "#eaeaea"
        document.querySelector("#partnerBtn").style.background= "white"


    }
    else if (btn == 'legal') {
        document.querySelector(".partnerOnboarding").style.display = "none"
        document.querySelector(".legal").style.display = "block"
        document.querySelector(".faqs").style.display = "none"
        document.querySelector("#legalBtn").style.background= "white"
        document.querySelector("#faqsBtn").style.background= "#eaeaea"
        document.querySelector("#partnerBtn").style.background= "#eaeaea"
    }
    else if (btn == 'faqs') {
        document.querySelector(".partnerOnboarding").style.display = "none"
        document.querySelector(".legal").style.display = "none"
        document.querySelector(".faqs").style.display = "block"
        document.querySelector("#legalBtn").style.background= "#eaeaea"
        document.querySelector("#faqsBtn").style.background= "white"
        document.querySelector("#partnerBtn").style.background= "#eaeaea"
    }
}


// collapsibles function in help html
var helpHead = document.getElementsByClassName('contentHead');
for(let i=0;i<helpHead.length;i++){
    helpHead[i].addEventListener("click",function(){
        // this.classList.toggle("active");
        // this.addClasse
        var content = this.nextElementSibling;
        if(content.style.display ==="flex"){
            content.style.display = "none";
            helpHead[i] += " active"
            // const list = document.classList
            // const list = document.querySelector(".contentHead i").classList
            document.getElementById("helpArrow").style.rotate = "0deg"
            
            list.style.rotate = "180deg"
            // this.getElementsByTagName(i)
        } else {
            content.style.display = "flex"
            document.getElementById("helpArrow").style.rotate = "180deg"
        }
    })
}

