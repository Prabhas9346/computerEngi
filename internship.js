let accountname=document.getElementById('accountname')
console.log(accountname)
let signIn=document.getElementById('signIn');
let button1=document.getElementById('button');
console.log(button1)
let group=document.getElementById('group');
let group2=document.getElementById('group2');
let button2=document.getElementById('button1');
let button3=document.getElementById('button2');
let button4=document.getElementById('button3');
let button5=document.getElementById('button4');
let recommondedgroups=document.getElementById('recommonded-groups')



signIn.onclick=function(Event){

    recommondedgroups.classList.toggle('d-none')
    console.log('hii')
    accountname.textContent=''
    let container=document.createElement('a')
    let image1=document.createElement('img')
    image1.src='Rectangle 6.svg'
    image1.classList.add('m-1')
    accountname.appendChild(container)
    console.log(image1)
    let nameEl=document.createElement('span')
    nameEl.textContent='Siddharth Goyal'
    container.appendChild(image1)
    container.appendChild(nameEl)
    
    button1.classList.remove('btn-primary');

    let image2=document.createElement('img');
    image2.src='Vector (7).png'
    group.textContent=''
    button1.appendChild(image2)
    image2.classList.add('order-1')
    group2.textContent='Leave Group'
    button1.appendChild(group)
    button1.appendChild(group2)
    group.classList.add('m-1')
    

    console.log(button1)




}
button2.onclick=function(){
    button2.textContent='Followed';
    button2.style.backgroundColor='#000000';
    button2.style.color='#FFFFFF';
}
button3.onclick=function(){
    button3.textContent='Followed';
    button3.style.backgroundColor='#000000';
    button3.style.color='#FFFFFF';
}
button4.onclick=function(){
    button4.textContent='Followed';
    button4.style.backgroundColor='#000000';
    button4.style.color='#FFFFFF';
}
button5.onclick=function(){
    button5.textContent='Followed';
    button5.style.backgroundColor='#000000';
    button5.style.color='#FFFFFF';
}

