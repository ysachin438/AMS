
//Adding a button to delete a user
const actionButton = document.createElement('button');
actionButton.textContent = "actionButton";


const button = document.getElementById("adduser")
  // Get references to the elements
  const table = document.getElementById('user-list1').getElementsByTagName('tbody')[0];
  const adduserbtn = document.getElementById('adduserbtn');
  
  let rowCount = table.rows.length; // To track the row count and assign IDs
  
  adduserbtn.addEventListener('click', function(){
      const newusername= document.getElementById("username").value
      const newuserpswd = document.getElementById("password").value
      const userrole = document.getElementById('userRole').value
      
      //Creating new row
      const newRow = table.insertRow()
      // Basic validation
      if (!newusername || !newuserpswd) {
          alert("Please enter both userName and Password!");
          return;
        }
        // To track the row count and assign IDs
        let rowCount = table.rows.length; 
        
        // Insert cells for Username and Password
        const usernameCell = newRow.insertCell(0);
        const userroleCell = newRow.insertCell(1);
        const actiontaken = newRow.insertCell(2);
        
        
        // Add values to the cells
        usernameCell.textContent = newusername; 
        userroleCell.textContent = userrole;
        // actiontaken.textContent = 'ActionButton'
        
        
        actiontaken.appendChild(actionButton);
        
        
        
        // Clear input fields after adding the row
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        // Increment rowCount for the next row ID
        rowCount++;
        
        
        
    } )
    
    // Add an event listener for the button's action 
    actionButton.addEventListener('click', function() {
        alert(`Action for row ${rowCount + 1}`);
    });
    
    //For showing class list
    const className = document.getElementById("className")
    const cbutton = document.getElementById("cbutton")
    const table1 = document.getElementById('class-list1').getElementsByTagName('tbody')[0];

cbutton.addEventListener('click', function(){

    const newRow = table1.insertRow()
    
    const newcell = newRow.insertCell(0);
    const actiontaken = newRow.insertCell(1);
    
    // Add values to the cells
    newcell.textContent = className;
    actiontaken.appendChild(actionButton);
    // Clear input fields after adding the row
    document.getElementById('className').value = '';

})

// Sample Data
const users = [
    { username: "john_teacher", role: "teacher" },
    { username: "jane_student", role: "student" }
];

const classes = [
    { className: "Class A" },
    { className: "Class B" }
];

const attendanceRecords = [
    { studentName: "Jane Smith", date: "2023-09-01", status: "Present" },
    { studentName: "John Doe", date: "2023-09-01", status: "Absent" }
];

// Populate User List
// const userTableBody = document.getElementById("userTableBody");
// users.forEach(user => {
//     const row = `<tr>
//                     <td>${user.username}</td>
//                     <td>${user.role}</td>
//                     <td><button class="deleteUser">Delete</button></td>
//                 </tr>`;
//     userTableBody.innerHTML += row;
// });

// Add New User
// document.getElementById("addUserForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const role = document.getElementById("userRole").value;
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     users.push({ username, role });
//     document.getElementById("addUserMessage").innerText = `User ${username} added as ${role}.`;
// })
    // Update user list
