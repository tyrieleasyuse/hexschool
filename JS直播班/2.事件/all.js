function triggerClick(e){    
    console.log(e);
    // alert(e.target.nodeName);
    // alert('Click:' + e.clientX);
  }
  
  function triggerMouseEnter(){
    alert('enter');
  }
  
  var el = document.querySelector('#btn');
  console.log(el);
  el.addEventListener('click',triggerClick);
  // el.addEventListener('mouseenter',triggerMouseEnter);

  var link = document.querySelector('a');
  console.log(link);
  link.addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target.textContent);
    console.log('你點擊了 ' + e.target.innerHTML);
  });

  let data = [30,40,50];

  data.forEach(function(item,index,array){
    console.log(item,index,array);
    console.log(item,index,array);
  });

  let myData = [{
    name : 'John',
    sex : 'male'
  },{
    name : 'Mary',
    sex : 'female'
  },{
    name : 'Jenny',
    sex : 'female'
  },{
    name : 'Apple',
    sex : 'female'
  }
];

let people = {
  male :[],
  female:[]
}

myData.forEach(function(item){
  if(item.sex == 'male'){
    people.male.push(item);
  }else{
    people.female.push(item);
  }
})
console.log(people);