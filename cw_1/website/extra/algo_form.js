function verify() {
    console.log("a")
    let a = document.getElementById("a").value;
    console.log(a)

    let res
    if (a < 62) {res = a * a + a * 4 + 5}
    else {res = 1/a + 4 * a + 5}
    check = true;
    document.getElementById("result").value = res;
}

function send() {
    if (check) {
        document.getElementById("user").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
