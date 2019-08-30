
document.addEventListener("DOMContentLoaded", function() {
    
    var lightBulb = document.getElementById("bulb");
    var onOff = document.getElementById("on-off");
    var timeButton = document.getElementById("time-button");
    var time = document.getElementById("time");
    var buttons = document.getElementsByClassName("start");
    var rocket = document.getElementById("rocket");
    var reset = document.getElementById("reset");
    var displayedTime;
    var promises = [];

    makePromises();
    fetchPromises();

    onOff.addEventListener("click", function() {
        if(onOff.innerHTML == "On") {
            lightBulb.src = "./images/lb-on.jpg";
            onOff.innerHTML = "Off";
        } else {
            lightBulb.src = "./images/lb-off.jpg";
            onOff.innerHTML = "On";
        }
        
    });

    timeButton.addEventListener("click", function(){
        if(timeButton.innerHTML == "Show time") {
            showTime();
            timeButton.innerHTML = "Hide time";
        }else{
            time.innerHTML = "";
            timeButton.innerHTML = "Show time";
            clearInterval(displayedTime);
        }
    })
    
    reset.addEventListener("click", function(){
        rocket.classList.remove("position-2");
        reset.style.display = "none";
        for(var i=0; i<buttons.length; i++) {
            buttons[i].classList.remove("ready");
            buttons[i].classList.add("not-ready");
            buttons[i].innerHTML = "X";
        }
        promises = [];
        makePromises();
        fetchPromises();
    })

    function makePromises() {
        for(var i=0; i<buttons.length; i++) {
            let promise = new Promise(function (resolve, reject) {
                buttons[i].addEventListener("click", (event) => {
                    resolve(console.log("resolved"));
                    var button = event.target;
                    button.innerHTML = "O";
                    button.classList.remove("not-ready");
                    button.classList.add("ready"); 
                })
            })
            promises.push(promise);
        }
    }
    
    function fetchPromises() {
        Promise.all(promises)
            .then(function (results) {
                rocket.classList.add("position-2");
                setTimeout(function(){ reset.style.display = "block" }, 2000);
                ;
            });
    }
    
    function showTime() {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        time.innerHTML = hours + ":" + minutes + ":" + seconds;
        displayedTime = setTimeout(showTime, 1000);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
    }

    // Practicing MAP and REDUCE:

    // Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
    // ex. capitalize('whoop') // => 'WHOOP'
    // ex. capitalize('oh hey gurl') // => "OH HEY GURL"

    var capitalize = function(string){
        return string.split("").map(letter => letter.toUpperCase()).join("");
    }
    console.log(capitalize('whoop'));
    console.log(capitalize("oh hey gurl"));

    // Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
    // function to return a string where every other word is in all caps. 
    // Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
    // ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
    var swapCase = function(string){
        return string.split(" ").map((word, index) => index % 2 != 0 ? word : capitalize(word)).join(" ");
    }
    console.log(swapCase('hey gurl, lets javascript together sometime'));

    // Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
    // alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
    // Ascii code to acomplish this.
    // ex. shiftLetters('hello') // => 'ifmmp'
    // ex. (shiftLetters('abcxyz') // => "bcdyz{"
    var shiftLetters = function(string){
        return string.split("").map(letter => String.fromCharCode(letter.charCodeAt(0)+1)).join("");
    }
    console.log(shiftLetters('hello'));
    console.log(shiftLetters('abcxyz'));
    
    // Write a function that takes a string and returns an object representing the character 
    // count for each letter. Use .reduce to build this object. 
    // ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
    var countLetters = function(string){
        return string.split("").reduce((obj , letter) => {
            obj[letter]= obj[letter] ? obj[letter]+1 : 1;
            // Other solution: obj[letter]= (obj[letter] || 0) + 1;
            return obj;
        },{})
    };
    console.log(countLetters('abbcccddddeeeee'));
    console.log(countLetters('abbbbccddeeeeeeeee'));
    
    // Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
    // .reduce to acomplish this.
    // ex. isPresent('abcd', 'b') // => true
    // ex. isPresent('efghi', 'a') // => false
    var isPresent = function(string, target) {
        return string.split("").reduce((acc,letter, i, array)=>{
            if(letter === target) array.splice(i);
            return letter === target;
        },false)
    }
    console.log(isPresent('abcd', 'b'));
    console.log(isPresent('efghi', 'a'));

    // write a function that takes a string of numbers and returns the sum of the numbers in the string.
    var sum = function(string) {
        return string.split("").reduce((sum, number) => {return sum + Number(number)
        },0)
    }

    console.log(sum("444689936146563731"));
    
    // Write a function decode that will take a string of number sets and decode it using the following rules:
    // When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
    // Convert each set of numbers into a letter and discover the secret message! 
    // Try using map and reduce together to accomplish this task.
    // ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
    // ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
    // => "secret-message"

    var decode = function(string) {
        return string.split(" ").map((group) => {
            return  group.split("").reduce((sum, number) => {
                return sum + Number(number);
            },0)
        }).map((charCode) => String.fromCharCode(charCode)).join("")
    }
    
    console.log(decode("361581732726247521644353 4161492813593986955 84654117917337166147521"));
    console.log(decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681"));
    // Once you successfully write a decoding function, use it to decode this secret message! 
    console.log(decode("444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956"));
    
    function generateRundomNumber() {
        return Math.floor(Math.random() * 9) + 1;  
    }
    function createString(array) {
        return array.map((number)=>{
            return number.toString();
        }).join("")
    }
    function createStringWithSpace(array) {
        return array.map((number)=>{
            return number.toString();
        }).join(" ")
    }
    function createSequence(number) {
        var sum = 0;
        var numberArray = [];
        while(sum < number) {
            var random = generateRundomNumber();
            sum += random;
            numberArray.push(random);
        }
        if(sum - number > 0 ) {
            var lastElement = numberArray[numberArray.length-1];
            var newLastElement = lastElement - (sum - number);
            numberArray.splice(-1, 1, newLastElement);
            return createString(numberArray);
        }
        return createString(numberArray);
    }

    var encode = function(string) {
        return string.split("").map((letter)=>{
            return createSequence( letter.charCodeAt(0));
        }).join(" ");
    }
    console.log(encode("Yah-I-wrote-the-encoding-function!"))
    console.log(decode("1933443854147513463452 8542451569994923471 254659638314731591217124131 949442751 7863394195846 427774356 35121177467349261671398655 98632727312156466299943 4921683116994544793682 812219191484384343721761647 724127882419663438673 8298945 72828391969856115255572 929642841965363822483 2895595426151521697522 84485655 1174228487169278691251 74329731875447533784162 9141689995589286 9998785325785652373 986751844528232547424 56448841856485498224 417287148224369813766425 796547194539864727 73826955 641728635258667428552 834521716236453284341755495 7823697235532911872363341 2428584844744521593271 352871836469312319973772 8817122749166537717922 41736448878925376838 291277965995185122785 3449346"))

    //Practicing async await
    function sleep(amount) {
        return new Promise((resolve, reject) => {
            if(amount <= 300) {
                return reject('That is not enough, go back to sleep!!!!');
            }
            setTimeout(() => resolve(console.log(`Slept${amount}`)), amount);
        });
    }
    
    sleep(500);
    sleep(200);
    sleep(1000);
    sleep(3000);

    async function go() {
        await sleep(5000);
        console.log("this is the async func");
    }
    go();

    function fetchAvatarUrl(userId) {
        return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
        .then(response => response.json())
        .then(data => data.imageUrl);
    }
    const result = fetchAvatarUrl(123);
    console.log(result);

    //Practicing closures
    var me = "Nikoletta";
    function greetMe() {
        console.log("Hello "+ me);
    }
    me = "Michael";
    greetMe();
});
