

// cartLog and cartSign its for cart html down login and signin div
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
    type="password"
    inputmode="numeric"
    placeholder="Password"
    maxlength = "10"
    required
/>
<input type="submit" value="LOGIN">
</form>
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
maxlength="40"
oninput="this.value = this.value.replace(/[^a-zA-Z .]/g, '')"
required />
<input
    type="email"
    placeholder="Email"
    required
/>
<input 
type="password"
placeholder="Password"
maxlength="40"
required />
<input type="submit" value="SIGN UP">
</form>
<p>
    By clicking on Login, I Accept the
    Terms & conditions & Privacy Policy
</p>
</div>`

// cartLog and cartSign its for cart html down login and signin div

const loginContent = `<div class="left-blank"  id="left-blank" onclick="loginClose()"></div>
<div class="signin" id="signin">
    <div class="content">
        <button onclick="loginClose()"><i class="fa fa-close"></i></button>
        <div class="head">
            <h5>Login</h5>
            <p>or <span onclick="signInAndLogIn()">create an account</span></p>
            <img src="images/login.webp" alt="flower image">
        </div>
        <div class="inpField logInC">
            <p id="userMsg"></p>
            <form method="post">
                <input    type="text"
                inputmode="numeric"
                placeholder="Phone number"
                oninput="this.value = this.value.replace(/[^0-9 +]/g, '')"
                minlength = "10"
                maxlength = "14"
                name="number"
                required/>
                <input    type="password"
                placeholder="Password"
                maxlength = "14"
                name="password"
                />
                <input type="submit" onclick="validate_log_form()" value="LOGIN">
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
    <div class="inpField signInC" id="inpField">
    <form method="post">
        <p id="userMsg"></p>
        <input type="text"
        inputmode="numeric"
        name="number"
        placeholder="Phone number"
        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
        maxlength = "10"
        />
        <input type="email" placeholder="Email" name="email" />
        
        <input type="password"
        name = "password"
        placeholder="Password"
        maxlength="40"
         />
        <input type="password"
        name="password2"
        placeholder="Confirm Password"
        maxlength="40"
         />
        <input type="submit" onclick="validate_sign_form()" value="SIGN UP">
    </form>
        <P>By clicking on Login, I Accept the Terms & conditions & Privacy Policy</P>
    </div>
</div>
</div>
</form>`
const filterItems = ['filter', 'Sort By', 'Fast Delivery', 'New on Swiggy', 'Rating 4.0', 'Pure Veg', 'Offers', 'Rs.300-Rs.600', 'less than Rs.300']
const foodHeads = ['Biryani', 'Chinese', 'North_Indian', 'Pizza', 'Burger', 'Noodles', 'Momos', 'Dosa', 'Cakes', 'Kebabs', 'Rolls', 'Pure_Veg', 'Ice_Creams', 'Paratha', 'Rasgulla', 'Desserts', 'Pasta', 'Pav_Bhaji', 'Chole_Bature', 'Pastry']
const indian_states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala"]
const indian_cuisines = ["North Indian", "South Indian", "Punjabi", "Bengali", "Gujarati", "Rajasthani", "Kashmiri", "Hyderabadi", "Kerala", "Maharashtrian", "Goan", "Uttar Pradesh", "Tamil", "Oriya", "Assamese", "Parsi", "Sindhi", "Andhra", "Karnataka", "Chettinad",]
const indian_cities =
    [
        "Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai",
        "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
        "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
        "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
        "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot",
        "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar",
        "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore",
        "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai",
        "Raipur", "Kota", "Chandrapur", "Guwahati", "Solapur",
        "Durgapur", "Bareilly", "Warangal", "Mira-Bhayander", "Guntur",
        "Gorakhpur", "Bhubaneswar", "Thiruvananthapuram", "Jalandhar", "Salem",
        "Tirunelveli", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bhubaneswar",
        "Mangalore", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon",
        "Jamnagar", "Udaipur", "Mehsana", "Mangalore", "Port Blair",
        "Raichur", "Muzaffarpur", "Ambala", "Ahmednagar", "Davanagere",
        "Bilaspur", "Shahjahanpur", "Gandhinagar", "Bathinda", "Erode",
        "Bhilai", "Guna", "Ujjain", "Siliguri", "Panihati",
        "Kamarhati", "Bardhaman", "Patiala", "Secunderabad", "Chinsurah",
        "Hazaribagh", "Panipat", "Darbhanga", "Ratlam", "Kollam",
        "Kottayam", "Thrissur", "Guntur", "Kakinada", "Nizamabad",
        "Dewas", "Pondicherry", "Satna", "Kollam", "Katihar", "Rourkela", "Korba", "Bhagalpur", "Raebareli", "Vizianagaram",
        "Proddatur", "Satara", "Hindupur", "Balurghat", "Nagapattinam",
        "Shimoga", "Guntakal", "Bongaigaon", "Puducherry", "Anand",
        "Palakkad", "Hazaribagh", "Robertsonpet", "Unnao", "Kollam",
        "Kumbakonam", "Bharuch", "Shivpuri", "Naihati", "Etawah",
        "Bhind", "Haridwar", "Hospet", "Secunderabad", "Haldwani",
        "Purnia", "Nadiad", "Sonipat", "Bidar", "Sirsa",
        "Sambhal", "Mau", "Kottayam", "Deoghar", "Ozhukarai",
        "Pudukkottai", "Hazaribagh", "Saharsa", "Hindupur", "Vellore",
        "Puri", "Unnao", "Karaikudi", "Kottayam", "Muzaffarnagar",
        "Dhanbad", "Anantapur", "Shimla", "Nizamabad", "Sambalpur",
        "Darbhanga", "Bahraich", "Jorhat", "Madhyamgram", "Shillong",
        "Khammam", "Eluru", "Munger", "Miryalaguda", "Bhimavaram",
        "Bhilwara", "Farrukhabad", "Bhiwani", "Wardha", "Banswara",
        "Bettiah", "Chandannagar", "Kolar", "Khurja", "Ambala",
        "Madanapalle", "Mango", "Dhule", "Ratnagiri", "Chittorgarh",
        "Pali", "Nandyal", "Nalgonda", "Bhatpara", "Mira-Bhayander",
        "Katni", "Khambhat", "Amravati", "Bhilai", "Bokaro Steel City",
        "Haldia", "Vijayanagaram", "Navi Mumbai", "Bhimavaram", "Kumbakonam",
        "Srikakulam", "Modinagar", "Shimla", "Purnia", "Nadiad",
        "Unnao", "Vasco da Gama", "Sikar", "Jamuria", "Shahjahanpur",
        "Munger", "Panchkula", "Srinagar", "Thoothukudi", "Bhind",
        "Jhunjhunu", "Gonda", "Nizamabad", "Ramagundam", "Mysore",
        "Tiruppur", "Arrah", "Lakhimpur", "Shrirampur", "Hapur",
        "Deoli", "Uluberia", "Hugli-Chinsurah", "Muzaffarpur", "Nagaon",
        "Itanagar", "Tezpur", "Nayagarh", "Phulabani", "Chhindwara",
        "Mahbubnagar", "Kamareddy", "Nirmal", "Dibrugarh", "North Dumdum",
        "Durg", "Banda", "Shantipur", "Barddhaman", "Rishra",
        "Serampore", "Khardaha", "Machilipatnam", "Morena", "Pithampur",
        "Maheshtala", "Sehore", "Hassan", "Madikeri", "Kushalanagar",
        "Somnathpur", "Hubli-Dharwad", "Bidadi", "Bellary", "Chikkamagaluru",
        "Tiruchirappalli", "Tirunelveli", "Nagercoil", "Kanyakumari", "Hosur",
        "Tirupattur", "Pondicherry", "Karaikal", "Mahe", "Yanam",
        "Port Blair", "Tezpur", "Dibrugarh", "Bongaigaon", "North Lakhimpur"
    ]

// blank for login page and signin page right side div
const blank = document.getElementById("blank");
function signInFunction() {
    blank.style.display = "flex";
    blank.innerHTML = loginContent;
    document.getElementById("left-blank").style.width = "100vw";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    const b = setTimeout(blankHide, 5);
}


// its for cart html signin button
function cartSignin() {
    // const blank = document.getElementById("blank")
    document.getElementById("accountBtn").style.display = "none";
    document.getElementById("cartContent").innerHTML = cartSign;
}

// its for cart html login button
function cartLogin() {
    document.getElementById("accountBtn").style.display = "none";
    document.getElementById("cartContent").innerHTML = cartLog;
}


// close main login sheet from window
function loginClose() {
    document.getElementById("left-blank").style.width = "100vw";
    const a = setTimeout(asdf, 500);
    function asdf() {
        blank.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "scroll"
    }
    loginFlag = true;
}

// add referal input to signin page
function referalFun() {
    document.getElementById("inpField").innerHTML = referCode;

}


// signin and login function from
var moveBlank = true;
var loginFlag = true;
function signInAndLogIn() {
    if (loginFlag == true) {
        document.getElementById("blank").innerHTML = signupContent;
        loginFlag = false;
    }
    else {
        loginFlag = true;
        document.getElementById("blank").innerHTML = loginContent;
    }
    if (moveBlank == true) {
        const b = setTimeout(blankHide, 10);
        moveBlank = false;
    }
    // document.getElementById("left-blank").style.width = "62.5vw"
}
function blankHide() {
    document.getElementById("left-blank").style.width = "62.5vw";
}

// horizondal scroll button function

offerScroll = 3000;
function moveRight() {
    const offer_ul = document.getElementById("offer-ul")
    offer_ul.scrollLeft += 400;
    // offer_ul.scrollRight += 10
    offerScroll += 200;
    offer_ul.scrollTo({
        top: 0,
        left: offerScroll,
        behavior: 'smooth'
    })
}
function moveLeft() {
    const offer_ul = document.getElementById("offer-ul")
    offer_ul.scrollLeft -= 400;
    offerScroll -= 500;
    offer_ul.scrollTo({
        top: 0,
        left: offerScroll,
        behavior: 'smooth'
    })
    // offer_ul.scrollRight += 10
}
function rightBtn(scrollDiv) {
    var container = document.getElementById(scrollDiv);
    sideScroll(container, 'right', 4, 600, 10);
}
function leftBtn(scrollDiv) {
    var container = document.getElementById(scrollDiv);
    sideScroll(container, 'left', 4, 600, 10);
}

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == "right") {
            element.scrollLeft -= step;
        }else{
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed)
}         

// filter items add to html
if(document.querySelector("#main-content .sort-items ul")!=null){
    const filter_ = document.querySelector("#main-content .sort-items ul")
    for (let i of filterItems) {
        filter_.innerHTML += `<li>
        <button>
            ${i}<i class="material-icons">arrow_back</i>
        </button>
    </li>`
    }
}


// top-shop item with loop
if(document.getElementById('top-shopul')!=null){
    const topshop = document.getElementById('top-shopul')
    for (let i = 1; i < 20; i++) {
        topshop.innerHTML += `<li>
        <a href="#">
            <div class="topShopImg">
                <img
                    src="images/food${i}.webp"
                    alt="Food image"
                />
    
            </div>
            <div class="topShopImgDet">
                <h6>Domino's Pizza</h6>
                <span class="rating">
                    <img
                        src="images/icons/star-inside-circle(1).png"
                        alt="star icon"
                    />4.3</span
                >
                <p>North Indian, South Indian Burrabazar</p>
            </div>
        </a>
    </li>`
    }
}


// main-content items with loop
if(document.querySelector("#main-content .foods ul") != null){
    const mainFoods = document.querySelector("#main-content .foods ul")
    for (let i = 1; i <= 20; i++) {
        mainFoods.innerHTML += `<li>
        <a href=""><div class="food-img"><img src="images/food${i}.webp" alt="Pastry" /></div><div class="food-details"><h6>${foodHeads[i]}</h6><span class="rating"><img src="images/icons/star-inside-circle(1).png" alt="star icon"/>4.3</span><p>North Indian, Indian Burrabazar</p><p>Kolkata</p></div></a><i class="fa fa-heart like like-icon" id="like-icon"></i></li>`
}
}


// food-items items with loop
if(document.querySelector("#food-items .image")!=null){
    const fooditems = document.querySelector("#food-items .image");
    for (let i of foodHeads) {
        fooditems.innerHTML += `
        <li>
            <a href="#">
                <div>
                    <img
                        src="images/${i}.webp"
                        alt="${i} image"
                    />
                </div>
            </a>
        </li>
        `
    }
}


//statename in bottom-part
if(document.querySelector("#bottom-part .Best-places ul")!=null){
    const bestPlace = document.querySelector("#bottom-part .Best-places ul")
    for (let i of indian_states) {
        bestPlace.innerHTML += `<li>
        <a href="#">Best Restaurants in ${i}</a>
    </li>`
    }
}

if(document.querySelector("#bottom-part .culslnes ul")!=null){
    const culslnes = document.querySelector("#bottom-part .culslnes ul")
    for (let i of indian_cuisines) {
        culslnes.innerHTML += `
        <li>
            <a href="#">${i} Restaurant Near Me</a>
        </li>`
    }
}

if(document.querySelector("#offers .offer-ul")!=null){
    const offerul = document.querySelector("#offers .offer-ul")
    for (let i = 1; i < 9; i++) {
        offerul.innerHTML += `<li>
        <a href="#">
            <div>
                <img
                    src="images/offers${i}.webp"
                    alt="Offer Image"
                />
            </div>
        </a>
    </li>`
    }
}

if(document.querySelector("#other_cities div ul")!=null){
    const indCities = document.querySelector("#other_cities div ul")
    for (let i of indian_cities) {
        indCities.innerHTML += `<li>
        <p>${i}</p>
    </li>`
    }
}

if(document.querySelector("#other_cities")!=null){
    const outDelivery = document.querySelector("footer .deliver button");
    const otherCities = document.querySelector("#other_cities");
    outDelivery.addEventListener("click", function () {
        // document.querySelector("#other_cities").style.display = "none"
        if (otherCities.style.display == "none") {
            otherCities.style.display = "block";
            document.querySelector("footer .deliver button i").style.transform = "rotate(180deg)";
        } else {
            otherCities.style.display = "none";
            document.querySelector("footer .deliver button i").style.transform = "rotate(0deg)";
        };
    })

}


// ------------ wish list -------------------

if ($(".like-icon")) {
    $(".like-icon").click(function(e){
        // console.log(e.currentTarget);
        e.currentTarget.classList.toggle('active')
        // $(this).toggle("active")
    })
}



// likeBtn = document.querySelector("#asd");
// cartItem = 0
// var cart = []
// $(document).ready(function(){
//     if(document.querySelector(".like")!=null){
//         $(".like").click(function(){
//             currentItem = $(this).parent().html();
//             var currntColor = $(this).css("color");
//             if(currntColor === "rgb(181, 181, 181)"){
//                 $(this).css("color","red");
                
//                 cart.push(`${$(this).parent().html()}`);
//                 // console.log(cart.indexOf(currentItem));
//                 // $(this).parent().css("backgroundColor","red");
//                 localStorage.setItem(cartItem,currentItem);
//                 cartItem ++;
//             }
//             else{
//                 localStorage.removeItem(0)
//                 let cartCheck = cart.indexOf($(this).parent().html());
//                 console.log(cartCheck);
//                 cart.splice(cart.indexOf($(this).parent().html()),1);
//                 console.log($(this).parent().html());
//                 console.log(cartCheck);
//                 $(this).css("color","rgb(181, 181, 181)");
//             }
//             if(document.querySelector(".wishLists")!=null){
//                 for(let i of cart){
//                     document.querySelector(".wishLists ul").innerHTML += i
//                 }
//             }
//             console.log(cart);
//         });

//     }
// })

// if(document.querySelector(".wishLists")!=null){
//     for(let i=0;i<20;i++){
//         if(localStorage.getItem(i)!=null){
//             let wishitems = localStorage.getItem(i)
//             document.querySelector(".wishLists ul").innerHTML += `<li>${wishitems} </li>` 
//         }
//     }
// }

user_database = [
    
]


// sign in function 
function validate_sign_form() {

    // assign value from sign in form
    let sign_form = document.querySelector(".signInC form")

    // onclick event on submit
    sign_form.addEventListener("submit",(e)=>{

        // error in automatic site refresh
        e.preventDefault();

        // assign value from user input
        const sNumber = sign_form.number.value;
        const sEmail = sign_form.email.value;
        const sPassword = sign_form.password.value;
        const spassword2 = sign_form.password2.value;

        // checking password is same
        if(sPassword==spassword2){
            // checking user input data is already in database
            alreadyUser = true
            for(let i=0;i<localStorage.length;i++){
                console.log(sNumber,JSON.parse(localStorage.getItem(i)).number)
                if(sNumber==JSON.parse(localStorage.getItem(i)).number){
                    console.log("same")
                    alreadyUser = false
                    break
                }
            }
            // add value to database
            if(alreadyUser==true){
                userObj = {
                    email:sEmail,
                    number:sNumber,
                    password:sPassword
                }
                localStorage.setItem((localStorage.length),JSON.stringify(userObj))
                // user_database.push(userObj)
                location.reload();
            }else{
                document.querySelector("#userMsg").innerText = "phone number is already exist";
            }
        }else{
            document.querySelector("#userMsg").innerText = "password is not same";
            document.querySelector("signInC form").reload()
        } 
        
    })
}



// --------------- login function -----------------

function validate_log_form() {
    // assign value to  login form
    let log_form = document.querySelector(".logInC form");
    
    // onclick event on submit
    log_form.addEventListener("submit", (e) => {
        // error in automatic site refresh
        e.preventDefault();

        // assign values from user input
        const usernumber = log_form.number.value;
        const password = log_form.password.value;

       // check username and password
        const authenticated = authentication(usernumber, password);

        // if authenticated is true return corrct otherwise not correct
        (authenticated==true) ? prompt("correct"): alert("not correct");
    });  
}


function authentication(number,password){
    lenStorage = localStorage.length;
    for(let i=0;i<lenStorage;i++){
        if(number==JSON.parse(localStorage.getItem(i)).number){
            if(password == JSON.parse(localStorage.getItem(i)).password){
                return true
                break;
            }else{
                document.querySelector("#userMsg").innerText = "password is not correct"
            }
        }else{
            document.querySelector("#userMsg").innerText = "number is not registered"
        }
    }
    return false
}

$('')