/**
 * პირობა იხილეთ HTML ფაილში
 */
const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];


  const subButton=document.getElementById('toggleButton');
  const subUserList=document.querySelector('userList');


  subButton.addEventListener('click',(e)=>{
    
    const cardHolder=document.createElement('div');
    cardHolder.classList.add('card');

    const  userInfo=document.createElement('div');
    userInfo.classList.add('user-info');


    const email=createRow('email',email);
    const userId=createRow('id',id);
    const name=createRow('name',name);
    const avatar=createRow('avatar',avatar);



    userInfo.appendChild(userDetails);
    userInfo.appendChild(avatar);

    cardHolder.appendChild(userInfo);
  })



  function createRow(label,Value){
    const h1=document.createElement('h3');
    h1.classList.add('h3');

    const userEmail=document.createElement('p');
    userEmail.classList.add('user-email');
    userEmail.innerText=label;

    const userId=document.add('p');
    userId.classList.add('user-id');
    userId.textContent=Value;

    const userDetails=document.createElement('div');
    userDetails.classList.add('user-details');


   const cardcontent=document.createElement('div');
   cardHolder.classList.add('card-content');

   cardcontent.appendChild(userId);
   
  userDetails.appendChild(userEmail);


  }