// import data from data.js
var tableData = data;

// show data in console 
console.log(tableData);

// define new datum for third entry
var dataToAdd =  {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
    }

// use splice to add specified data into array
tableData.splice(2,0,dataToAdd);


var rowLenght = tableData.length
var myvar = '<table>'+
'<tr>'+
'<th>Date</th>'+
'<th>City</th>'+
'<th>State</th>'+
'<th>Country</th>'+
'<th>Shape</th>'+
'<th>Duration</th>'+
'<th>Comments</th>'+
'</tr>';

for(var i = 0; i < rowLenght; i++){
    myvar += '<tr>'+
    '<td>'+tableData[i].datetime+'</td>'+
    '<td>'+tableData[i].city+'</tD>'+
    '<td>'+tableData[i].state+'</th>'+
    '<td>'+tableData[i].country+'</th>'+
    '<td>'+tableData[i].shape+'</th>'+
    '<td>'+tableData[i].durationMinutes+'</th>'+
    '<td>'+tableData[i].comments+'</th>'+
    '</tr>'     
     }
    
     myvar += '</table>';

     console.log(myvar);
     document.getElementById('myTable').innerHTML = myvar;