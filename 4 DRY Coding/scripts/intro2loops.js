//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below
let tasks = ['work', 'eat', 'sleep', 'drink', 'study', 'code', 'jog', 'shower', 'garden', 'dance'];

for (i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
};


//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code below
let tasks2 = ['1', '6', '45', '6', '7', '4', '4', '5', '6', '4'];
let total = 0;

for (i = 0; i < tasks2.length; i++) {
    total += parseFloat(tasks2[i]);
};
console.log(total);


//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below
for (i = 0; i < tasks2.length; i++) {
    total = parseFloat(tasks2[i])*15;                   //Not sure about question?
    console.log(total);
};

//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below
let timesTable = []

for (i = 0; i < tasks2.length; i++) {
    total = parseFloat(tasks2[i]) * 15;
    timesTable[i] = total;
};
console.log(timesTable);


//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below
for (i = 0; i < tasks2.length; i++) {
    console.log(timesTable[i]);
};

//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below
let average = timesTable.reduce((total, amount) => total + amount) / timesTable.length;
    console.log(average);

//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below
let average2 = 0;
for (i = 0; i < timesTable.length; i++) {
    average2 += timesTable[i];
};
average2 = average2 / timesTable.length;
console.log(average2);

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below
for (let variable of tasks) {
    console.log(variable);
};
//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below
for (let variable in tasks) {
    console.log(variable);
};//shows the index of each entry. for in is used for objects not arrays
