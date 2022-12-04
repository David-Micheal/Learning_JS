// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// 1. add 'Meat' in the beginning of your shopping cart if it has not being already added
const shoppingCart = ['Milk','Coffee','Tea','Honey'];
let meat1 = shoppingCart.unshift("meat");
console.log("**********or**********")
console.log(meat1)
console.log(shoppingCart)
// 2. add sugar at the end of your shopping cart if it has not been already added
let sugar1 = shoppingCart.push("sugar");
console.log(sugar1)
console.log(shoppingCart)
// 3. remove 'Honey' if you are allergic to honey
let Honey1 =shoppingCart.splice(4,1);
console.log(Honey1)
console.log(shoppingCart)
// 4. modify Tea to 'Green Tea'
let greentea1 = shoppingCart.splice(3,1 ,"Green Tea");
console.log(shoppingCart)
// 5. declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 6. Print the array using console.log
console.log(itCompanies)
// 7. Print the numbers of companies in the array
console.log(itCompanies.length)
// 8. Print the first company, middle and last company
let company1 = itCompanies[0];
let company2 = itCompanies[3];
let company3 = itCompanies[6];
console.log(company1,company2,company3)
// 9. Print out each company
let company4 = itCompanies[0];
let company5 = itCompanies[1];
let company6 = itCompanies[2];
let company7 = itCompanies[3];
let company8 = itCompanies[4];
let company9 = itCompanies[5];
let company10 = itCompanies[6];
console.log(company4,company5,company6,company7,company8,company9,company10)
// 10. Change each company name to uppercase one by one and print them out
console.log(company4.toUpperCase())
console.log(company5.toUpperCase())
console.log(company6.toUpperCase())
console.log(company7.toUpperCase())
console.log(company8.toUpperCase())
console.log(company9.toUpperCase())
console.log(company10.toUpperCase())
// 11. Print the array like as a sentence:Facebook,Google,Microsoft,Apple,IBM,Oracle and Amazon are big IT companies
let sentence = itCompanies.concat("are big IT companies")
console.log(sentence.toString())
// 12. Check if a certain company exists in the itCompanies array, if it exist return the company else return a company is not found
// 13. Filter out companies which have more than one 'O' without the filter method
// 14. sort the array using sort() method
let sortout = itCompanies.sort()
console.log(sortout)
// 15. reverse the array using reverse() method
let reverse1 = itCompanies.reverse()
console.log(reverse1)
// 16. slice out the first three company from the array
console.log(itCompanies.slice(0,3))
// 17. slice out the last three company from the array
console.log(itCompanies.slice(-3))
// 18. slice out the middle IT company or companies from the array
console.log(itCompanies.slice())