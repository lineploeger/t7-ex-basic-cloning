//This is the object that you should use to "populate" the template
const gitHop = {
  name: "GitHop",
  imgSrc: "githop.png",
  description: "FooBar's Venom Ale",
};

//Step 1: Chose the <template>'s content
const templateElement = document.querySelector("#myBeerTemplate").content;
//Step 2: Make a "clone"
const myClone = templateElement.cloneNode(true);

//Step 3: Change the content of the clone
myClone.querySelector("h1").textContent = "hej med dig";
//use the data from the object above (you can do this when the rest is working)

//Step 4: Chose the new "parent" element
const parentElement = document.querySelector("main");
//Append it to main
parentElement.appendChild(myClone);
//Step 5: Add (Append) the clone to the DOM
