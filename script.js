document.write('Hello world!');
function sayHello(){
    var responese=prompt('What is your name?');
    alert('Hello '+responese+',have a nice day!');
};
//sayHello();

function showTopic(){
    var x=document.getElementById('demo');//找到id为demo的元素
    x.style.fontSize='25px';
    x.style.color='red';
};