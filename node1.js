const fs=require("fs")
const text=fs.readFileSync("text.txt","utf-8")
text1=text.replace("Lorem","vscode")
console.log(text1)
fs.writeFileSync("text1.txt",text1)
