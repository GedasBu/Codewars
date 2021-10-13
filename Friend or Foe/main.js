function friend(friends){
  let friendList = [];
 for (let name of friends){
   
   if (name.length === 4){
    friendList.push(name);
   }
 }
 console.log(friendList);
return(friendList);
}

friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])