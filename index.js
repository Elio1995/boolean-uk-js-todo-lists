// Today's exercise: Todo Lists

// Repo: boolean-uk-js-todo-lists

// Description
// This is the first try at a common program built by new developers, the todo list. You'll have to use everything we've covered so far in JS to tackle this challenge

// Instructions
// - Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/todo-lists-tr122?from-embed=&file=/index.js
// - Do not code your solution in CodeSandbox
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user 

// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program


/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", users);

// console.log("todos: ", todos);

let string = ""

for (const user of users) {
 string += [user.id + " - " + user.name + " - " + user.address.city + "\n"]
}

alert(string)
const userid = Number(prompt("What is your ID?"));

// - Prompt the user for a user id
// const userid = prompt("What is your ID?")
//  const useridprompt = 1



// - with the username (Step 2)
let theuser = null


for (let i = 0; i < users.length; i++) {
    const user = users[i]
  if(userid === user.id) {
      theuser = user
  }

}

// - all the todos title that belong to that user (Step 3)

const todosoftheuser = []

for (let i=0; i < todos.length; i++) {
    const todo = todos[i]
 if(todo.userId === theuser.id) {
    todosoftheuser.push(todo)
 }
}

// - Display an alert (Step 4)
console.log(theuser.username)
for(let i=0; i < todosoftheuser.length; i++){
    console.log(todosoftheuser[i])
}

// After you select a user, add the option to either show the todos or add a new todo to the list

let option = Number(prompt("Press 2 to see your to do list"))
