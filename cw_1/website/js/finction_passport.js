const change = document.getElementById("for_click_change")

function find_edit_all(){
    if (document.getElementsByTagName('div')[3].innerText=='Чернова'){
    document.getElementsByTagName('div')[3].textContent='Chernova'
    document.getElementsByTagName('div')[4].innerHTML='Olga'
    document.getElementsByTagName('div')[5].innerText='Vladimirovna'
    document.getElementsByTagName('div')[6].innerText='fem.'
    document.getElementsByTagName('div')[8].innerText='Moscow'
    document.getElementsByTagName('div')[0].innerText='some kind of serious passport organization'
    } else {
    document.getElementsByTagName('div')[3].innerText='Чернова'
    document.getElementsByTagName('div')[4].innerText='Ольга'
    document.getElementsByTagName('div')[5].innerText='Владимировна'
    document.getElementsByTagName('div')[6].innerText='жен.'
    document.getElementsByTagName('div')[8].innerText='гор.Москва'
    document.getElementsByTagName('div')[0].innerText='УМВД РОССИИ ПО КАЛУЖСКОЙ ОБЛАСТИ'
    }

}
change.addEventListener("click",find_edit_all)