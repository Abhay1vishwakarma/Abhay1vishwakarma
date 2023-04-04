document.cookie="user=hemant"
document.cookie="user2=hemantroy"
document.cookie="user2=hemantbachchan"
console.log(document.cookie)

console.log(document.cookie)
key=prompt("enter your key")
value=prompt("enter your value")
//document.cookie=`${key}=${value}`
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
//decodeURIComponent("%24%25%23%24%25%23%25")
