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
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 6,
      name: "Jessica Garcia",
      email: "jessica@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 7,
      name: "Daniel Rodriguez",
      email: "daniel@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 8,
      name: "Ashley Martinez",
      email: "ashley@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 9,
      name: "Kevin Anderson",
      email: "kevin@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 10,
      name: "Brittany Thomas",
      email: "brittany@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];


  const createLabel=document.getElementsByClassName('search-label');
  const createSearchInput=document.getElementById('search');
  const crateUserList=document.getElementById('userList');


  createSearchInput.addEventListener('search',(event)=>{



    const cardHeader=document.createElement('div');
    cardHeader.classList.add('card-header');

    const userInfo=document.createElement('div');
  userInfo.classList.add('user-info');

   const cardHolder=document.createElement('div');
   cardHolder.classList.add('card-content');


   const id=createDetails('id',1);
   const name=createDetails('name',name);
   const email=createDetails('email',email);
   const avatar=createDetails('avatar',avatar);


   userInfo.appendChild(id);
   userInfo.appendChild(name);
   userInfo.appendChild(email);
   userInfo.appendChild(avatar);

   cardHolder.appendChild(userInfo);
   cardHeader.appendChild(cardHeader);

  }
)


function createDetails(label,value){
    const makeavatar=document.createElement('div');
    makeavatar.classList.add('avatar');
    
    const makeImg=document.createElement('img');
    makeImg.src//fakeimg.pl/150x150;

    makeavatar.appendChild(makeImg);

    const userDetails=document.createElement('div');
    userDetails.classList.add('user-details');

    const makeemail=document.createElement('p');
    makeemail.classList.add('user-email');
    makeemail.textContent=label;

    const userId=document.createElement('p');
    userId.classList.add('p');
    userId.textContent=value;

    userDetails.appendChild(userId);
    userDetails.appendChild(makeemail);


    return userDetails && makeavatar;

}