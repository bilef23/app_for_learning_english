
const firebaseConfig = {
    apiKey: "AIzaSyCGrkAcUxj7CG81S2IGn4orfW3iS51t-nw",
    authDomain: "appforlearningeng.firebaseapp.com",
    databaseURL: "https://appforlearningeng-default-rtdb.firebaseio.com",
    projectId: "appforlearningeng",
    storageBucket: "appforlearningeng.appspot.com",
    messagingSenderId: "68081827037",
    appId: "1:68081827037:web:82616528e2a07c1213ef34"
};
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    //get values
    var name=getInputVal('name');
    var age=getInputVal('age');
    var town=getInputVal('town');
    var surName=getInputVal('surName');
    var message=getInputVal('subject');
    console.log(name);
    saveMessage(name,surName,age,town,message);
    document.querySelector(".content").style.padding="40px";
    document.querySelector('.text').style.display="block";
    setTimeout(function (){
        document.querySelector(".text").style.display="none";
        document.querySelector(".content").style.padding="30px";
    },3000);
    document.getElementById("contactForm").reset();
}
//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
//save messages to firebase
function saveMessage(name,surName,age,town,message){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        surname:surName,
        age:age,
        town:town,
        message:message
    });
}