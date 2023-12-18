let name = "John Doe";
console.log("substring:", name.substring(5,1));
console.log("slice:", name.slice(0, 4))
console.log("charAt:", name.charAt(0));
console.log("toUpperCase:", name.toUpperCase());
console.log("slice:", name.slice(3,6))
console.log("indexOf:", name.indexOf("k"))
console.log("incudes:", name.includes("Doe"))
console.log("replace:", name.replace("Doe", "Moe"))
console.log("replace:", name.replace("O", "l"))
console.log("replace:", name.replace(" ", ""))
console.log("trim:", name.trim())
console.log("split:", name.split(" "))
console.log("splice:", name.splice(3,4))


// Notes::
// if the argument in replace() method has multiple existence, then this method would work only for the first element.