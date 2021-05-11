let ar = document.getElementById("ar");
let fr =document.getElementById("fr");
let title =document.getElementById("title");
let partit1 =document.getElementById("partit1");
let partit2 =document.getElementById("partit2");
let image =document.getElementById("img2");

ar.onclick =()=>{
  lang("ar");
  localStorage.setItem("lgn","ar");
  
};

fr.onclick = ()=>{ 
    lang("fr");
    localStorage.setItem("lgn","fr");
};
    onload=()=>{
    lang(localStorage.getItem("lgn"));
}
function lang(langu){
    if(langu==="ar"){
            title.innerHTML ="الحراك";
            partit1.innerHTML ="<h1>احتفل الحراك ، الاثنين ، 22 شباط 2019 ، بمرور عامين على تأسيسه. أجبر Covid-19 على النوم ، استؤنفت حركة الاحتجاج لهذه المناسبة. اجتمع آلاف الجزائريين في شوارع الجزائر العاصمة. استعراض للقوة لإثبات أن الحراك لم يمت ، كما كتبت تو سير لالجيري. </h1>";
            partit2.innerHTML="<h1>حشد شعبي كبير في عدة ولايات من البلدان ، في 26 فبراير ، آلاف المتظاهرين في الشوارع من الدول لإعادة إطلاق الحراك والمطالبة بالتغيير في الجزائر.</h1> "

   
    }
    else if(langu==="fr"){
        title.innerHTML="el hirak"
        partit1.innerHTML ="<h1>Ce lundi 22 février 2019, le Hirak célébrait ses deux ans. Contraint au sommeil par le Covid-19, le mouvement de contestation a repris pour l’occasion. Des milliers d’Algériens se sont donné rendez-vous dans les rues d’AlgerUne démonstration de force pour prouver que le Hirak n’est pas mort, écrit Tout sur l’Algérie.</h1>";
        partit2.innerHTML="<h1>une grandiose mobilisation populeire dans plusieurs wileyas de pays, le 26 février, les milliers de manifestants dans les rues de pays pour relencer le hirak, et réclemer un changement en algérie.</h1> "
    }
}





