

//document.getElementById("total").innerHTML=
/*
const table_data = document.getElementById("marksList");
document.getElementById("total").innerHTML = "data : "+table_data;
separator = ' '; 
//alert(separator);
implodedArray = table_data.join(separator); 
alert(implodedArray); 
//alert(reason[0]);
*/


function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

 
  var marks_list = {"student1":85,"student2":95,"student3":75,"student4":65};

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  marks_list_list = Object.entries(marks_list);

  temp_total = 0;
  for (var i = 0; i < 4; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 2; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode(marks_list_list[i][j]));
      //td.appendChild(document.createTextNode(marks[i]));
      tr.appendChild(td);
      
    }
    temp_total = temp_total+marks_list_list[i][1];
    
  }
  
  result_ = {"total":temp_total,"avg":temp_total/4};
  result_list = Object.entries(result_);
  
  myTableDiv.appendChild(table);
  //myTableDiv.appendChild(tr);

  for (var i = 0; i < 2; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 2; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode(result_list[i][j]));
      //td.appendChild(document.createTextNode(marks[i]));
      tr.appendChild(td);
      
    }
}
}


addTable();





/*	---------------------------accessing object keys with values---------------------
for (const [key, value] of Object.entries(obj)) {
  console.log(`key: ${key}, value: ${value}`)
}
*/

//----------------reference-------------------
/*
function tableCreate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
      if (i == 2 && j == 1) {
        break
      } else {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        tr.appendChild(td)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate();

*/