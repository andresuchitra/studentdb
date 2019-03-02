var students = [
    {
        firstName: 'Greg',
        lastName: 'Burham',
        ttl: 'Jakarta/11 Juni 1990',
        hobi: ['membaca'],
        address: 'Jl. Manggis no. 1 Jakarta Barat',
        namaAyah: 'Burham',
        namaIbu: 'Betty',
        urlPicture: '',
        nilai: {
            matematika: 80,
            'bahasa indonesia': 70,
            'bahasa arab': 90,
            fisika: 98,
            ekonomi: 60
        }
    },
    {
        firstName: 'Andy',
        lastName: 'Smith',
        ttl: 'Bandung/9 Mei 1989',
        hobi: ['futsal', 'coding'],
        address: 'Bassura City Apartment, Tower 1 09/AB',
        namaAyah: 'Smith John',
        namaIbu: 'Wati',
        urlPicture: '',
        nilai: {
            matematika: 87,
            'bahasa indonesia': 85,
            'bahasa arab': 91,
            fisika: 77,
            ekonomi: 66
        }
    },
    {
        firstName: 'Nancy',
        lastName: 'Han',
        ttl: 'Singapore/8 Februari 1991',
        hobi: ['traveling','membaca'],
        address: 'Jln. Dr. Sutomo No. 14A Depok',
        namaAyah: 'Hugh Han',
        namaIbu: 'Mandy',
        urlPicture: '',
        nilai: {
            matematika: 70,
            'bahasa indonesia': 98,
            'bahasa arab': 94,
            fisika: 99,
            ekonomi: 87
        }
    },
    {
        firstName: 'Silvia',
        lastName: 'Rahmady',
        ttl: 'Surabaya/11 November 1992',
        hobi: ['memasak', 'bersepeda'],
        address: 'Komplek Depok Permai Blok H no. 2 Depok',
        namaAyah: 'Wahyudi',
        namaIbu: 'Melly Dewita',
        urlPicture: '',
        nilai: {
            matematika: 99,
            'bahasa indonesia': 98,
            'bahasa arab': 99,
            fisika: 89,
            ekonomi: 90
        }
    },
    {
        firstName: 'Sutarno',
        lastName: 'Hadikusumo',
        ttl: 'Magelang/5 April 1993',
        hobi: ['futsal','bowling', 'makan'],
        address: 'Jln. Medan Utara No. 4, Bintaro',
        namaAyah: 'Nurmantyas',
        namaIbu: 'Sridawati',
        urlPicture: '',
        nilai: {
            matematika: 99,
            'bahasa indonesia': 97,
            'bahasa arab': 94,
            fisika: 89,
            ekonomi: 77
        }
    },
]


function fetchItems() {
    var tableBody = document.querySelector("#main-table-body");
    tableBody.innerHTML = '';

  for (var i = 0; i < students.length; i++) {
    
    var id = i+1;
    var fname = students[i].firstName;
    var lname = students[i].lastName;
    var ttl = students[i].ttl;
    var address = students[i].address;
    
    tableBody.innerHTML += "<tr class='table-row'>"+
                        "<td class='body-col-id'>"+id+"</td>" +
                        "<td>"+fname+"</td>" +
                        "<td>"+lname+"</td>" +
                        "<td>"+ttl+"</td>" +
                        "<td>"+address+"</td>" +
                        "<td>"+
                        "<button class='btn btn-edit' onClick=editStudent("+id+")>Edit</button>" +
                        "<button class='btn btn-delete' onClick=deleteStudent("+id+")>Delete</button>" +
                        "</td>"+
                        "</tr>"

    console.log('populating ID: '+id+' name: '+fname);
  }
 }

 function addStudent() {
     let allInputs = document.querySelectorAll(".add-student-col-input");
     let input = ''
     let firstName ='', lastName ='', birthPlace = '', dateOfBirth ='', address='', fatherName='', motherName='';
     let hobbies = []

     for(let i=0; i<allInputs.length; i++) {
         input = allInputs[i].children[0]

         if(input.name === 'birthDate') {
            let splitted = input.value.split('-')
            let bulan = '';

            switch(splitted[1]) {
                case '01':
                    bulan = "Januari"
                break;
                case '02':
                    bulan = "Februari"
                break;
                case '03':
                    bulan = 'Maret'
                break;
                case '04':
                    bulan = 'April'
                    break;
                case '05':
                    bulan = 'Mei'
                break;
                case '06':
                    bulan = 'Juni'
                break;
                case '07':
                    bulan = 'Juli'
                break;
                case '08':
                    bulan = 'Agustus'
                break;
                case '09':
                    bulan = 'September'
                break;
                case '10':
                    bulan = 'Oktober'
                break;
                case '11':
                    bulan = 'November'
                break;
                case '12':
                    bulan = 'Desember'
                break;
                default:
                    bulan = 'INVALID_BULAN'
                break;
            }

            dateOfBirth = parseInt(splitted[2])+' '+bulan+' '+splitted[0];
         }
         else if(input.name === 'firstName') {
             firstName = input.value;
        }
        else if(input.name === 'lastName') {
            lastName = input.value;
        }
        else if(input.name === 'birthPlace') {
            birthPlace = input.value;
        }
        else if(input.name === 'fatherName') {
            fatherName = input.value;
        }
        else if(input.name === 'motherName') {
            motherName = input.value;
        }
        else if(input.name === 'address') {
            address = input.value;
        }
         else if(input.name === 'hobbies') {
             let temp = input.value.split(',')
             console.log("hobbies: "+temp)
             for(let i=0; i<temp.length; i++) 
             {
                 hobbies.push(temp[i].trim());
             }
         }
     }

     //create object
     let newStudent = {
        firstName: firstName,
        lastName: lastName,
        ttl: birthPlace+"/"+dateOfBirth,
        hobi: hobbies,
        address: address,
        namaAyah: fatherName,
        namaIbu: motherName,
        urlPicture: '',
        nilai: {
            matematika: 0,
            'bahasa indonesia': 0,
            'bahasa arab': 0,
            fisika: 0,
            ekonomi: 0
        }
     }

     students.push(newStudent)

     //refresh list
     fetchItems();
     closeContainer();
 }

 function closeContainer() {
     let container = document.querySelector('.add-container');
     container.style.display = 'none';
 }

 function addNewStudent() {
     let addStudentContainer = document.querySelector('#add-student-container')
     let addStudentForm = document.querySelectorAll(".add-student-")
     //clear content of the form
     resetFormData(document.querySelectorAll(".add-student-col-input"));
    
     addStudentContainer.style.display = "flex"
 }

 function resetFormData(inputs) {
     for(var i=0; i<inputs.length; i++) {
        input = inputs[i].children[0];
        input.value = ''
        
     }
 }
 function deleteStudent(id) {
     for(var i=0; i<students.length;i++) {
         if(id === (i+1)) {
             students.splice(i,1);
             console.log('id: '+id)
         }
     }

     fetchItems();
 }


/**
 * Drag and move feature for Add Student window
 * credit: https://www.w3schools.com/howto/howto_js_draggable.asp
 */
 
 /* dragElement(document.getElementById("add-student-container"));
 function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (document.querySelector('add-header')) {
    document.querySelector('add-header').onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
} */