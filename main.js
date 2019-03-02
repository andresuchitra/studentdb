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

 function deleteStudent(id) {
     for(var i=0; i<students.length;i++) {
         if(id === (i+1)) {
             students.splice(i,1);
             console.log('id: '+id)
         }
     }

     fetchItems();
 }