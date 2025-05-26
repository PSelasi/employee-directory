fetchUser();

async function fetchUser() {
    const url = "https://randomuser.me/api/?results=20";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);

        
        //   const image = data.results[0].picture.large;
        //   const name = data.results[0].name;
        //   const email = data.results[0].email;
          

          //to clone the template
          const template = document.getElementById('staff-template');
          
        
          for (const elements of data.results) {
            const card = template.content.cloneNode(true);

            //to put the staff details into html tag
            const nameElement = card.querySelector('.staff-name');
            nameElement.textContent = `${elements.name.first} ${elements.name.last}`;
  
            const imageElement = card.querySelector('.staff-image');
            imageElement.src =`${elements.picture.large}`;
            imageElement.alt = "Photo of " + `${elements.name.first}`;
            
            const emailElement = card.querySelector('.email');
            emailElement.textContent = `${elements.email}`;
  
            //to display the staff details
            document.getElementById('staff-directory').appendChild(card);
      
          }
         
        } catch (error) {
        console.error(error.message);
    }
    
}

