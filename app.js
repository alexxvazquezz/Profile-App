//Problem: We need a simple way to look at a user's badge count and JacaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to pront count

// require https module
const https = require('https');
const username = 'alejandrovazquez3'
//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`
  console.log(message)
}


//Connect to the API URL(https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
if(response.statusCode === 200) {
  console.log('Todo Piola')
}
});
// Read the data
// Parse the data
// Print the data
