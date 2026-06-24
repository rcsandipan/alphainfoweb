// Define the functions in the global scope

 import {app} from "./firebase-config.js";  

import { getDatabase,ref, child, onValue, get, set, update,remove} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
 const db = getDatabase();
window.saveMessage = function ()  {
    const message = document.getElementById('messageInput').value;
   
    if (message) {
        update(ref(db,"scrollmessage"),
                {
                    ScrollMsg: message
                
                    
                }).then(()=>{

                    alert('Message saved!');
                }) 
                .catch((error)=>{
                 alert(error);
            });


        // localStorage.setItem('scrollingMessage', message); // Save to localStorage
        console.log('Message saved:', message); // Debugging
        
        location.reload(); // Refresh the page to display the message
    } else {
        alert('Please enter a message.');
    }
}

 window.RemoveMessage = function() {
    // localStorage.removeItem('scrollingMessage'); // Remove the message from localStorage
    update(ref(db,"scrollmessage"),
    {
        ScrollMsg: ""
    
    }).then(()=>{

        alert('Message saved!');
    }) 
    .catch((error)=>{
     alert(error);
});
    console.log('Message removed from localStorage.'); // Debugging
    alert('Message cleared!');
    location.reload(); // Refresh the page to remove the scrolling message
}

// Function to create and display the scrolling message
window.createScrollingMessage = function () {
    const dbref = ref(db);
    get(child(dbref,"scrollmessage")).then((snapshot)=>{
        
        
            const message = snapshot.val().ScrollMsg;
            //console.log(prabal);
            if (message) {
                 console.log(message);
                // Create a div for the scrolling message
                const marquee = document.createElement('div');
                marquee.id = 'scrolling-message';
                marquee.innerText = message;
        
                // Style the scrolling message
                marquee.style.position = 'fixed';
                marquee.style.top = '0'; // Position at the top of the page
                marquee.style.left = '0';
                marquee.style.width = '100%';
                marquee.style.backgroundColor = '#FF9933';
                marquee.style.color = '#000080'; // White text color
                marquee.style.padding = '7px'; 
                marquee.style.textAlign = 'center';
                marquee.style.whiteSpace = 'nowrap';
                marquee.style.overflow = 'hidden';
                marquee.style.boxSizing = 'border-box';
                marquee.style.fontWeight='bolder';
                marquee.style.fontSize = '20px';
                marquee.style.zIndex = '1000'; // Ensure it stays on top of other content
                marquee.style.animation = 'scroll 20s linear infinite';
        
                // Add CSS for the scrolling animation
                const style = document.createElement('style');
                style.innerHTML = `
                    @keyframes scroll {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                `;
                document.head.appendChild(style);
        
                // Append the scrolling message to the body
                document.body.appendChild(marquee);
            } else {
                console.log('No message found in database.'); // Debugging
            }

        
        
       
    });
    // const message = localStorage.getItem('scrollingMessage');
     //console.log('Retrieved message:', message); // Debugging


}

// Wait for the DOM to load before creating the scrolling message
document.addEventListener('DOMContentLoaded', function () {
    createScrollingMessage();
});