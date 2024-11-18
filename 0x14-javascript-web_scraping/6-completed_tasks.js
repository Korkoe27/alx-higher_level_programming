// Write a script that computes the number of tasks completed by user id.

// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// You must use the module request

const request = require('request');

function  userTasks(){
      request('https://jsonplaceholder.typicode.com/todos', function(error, request, body){
        if(error){
            console.error('Error:', error);
        }

        const data = JSON.parse(body);


        const tasks = data.filter((task)=> task.completed === true);

        const newList  = tasks.reduce(function(sum,tasks){
            sum[tasks.userId]  =   (sum[tasks.userId] ||  0)  +   1;
            return  sum;
        },{});

        console.log(newList);
      });
}

userTasks();