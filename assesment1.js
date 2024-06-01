/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Tokens = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name1, height1, hairColor1, country1) {
const Token = {
"name": name1,
"height": height1,
"hairColor": hairColor1,
"country": country1,
}
Tokens.push(Token);
console.log("Minted: " + name1);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0; i < Tokens.length; i++){
    console.log("\nName: " + Tokens[i].name);
    console.log("\nHeight: " + Tokens[i].height);
    console.log("\nHair Color: " + Tokens[i].hairColor);
    console.log("\nCountry: " + Tokens[i].country);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal No. of NFTs minted: " + Tokens.length);
}

// call your functions below this line
mintNFT("Sarah","167","Black","Russia");
mintNFT("Sam","180","Brown","England");
mintNFT("Fina","170","Blonde","Italy");
mintNFT("Tin","178","Grey","America");
listNFTs();
getTotalSupply();
