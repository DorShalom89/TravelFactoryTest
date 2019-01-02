var app = new Vue({
    el: '#contacts',
    data(){
      return{
        ContactList: [
          {
            name: "John Smith",
            image:"<img src='./assets/john-smith.jpg'>",
            jobTitle: "Graphics Designer",
            company: "Twitter inc",
            companyAddress: "795 Folsom Ave, Suite 600 ",
            companyState: "San Francisco, CA 94107",
            phone: "(123) 456-7890"
          },
          {
            name: "Alex Johnatan",
            image:"<img src='./assets/alex jonathan.jpg'>",
            jobTitle: "CEO",
            company: "Twitter inc",
            companyAddress: "795 Folsom Ave, Suite 600 ",
            companyState: "San Francisco, CA 94107",
            phone: "(123) 456-7890"
          },
          {
            name: "Janeth Carton",
            image:"<img src='./assets/janeth carton.jpg'>",
            jobTitle: "Graphics Designer",
            company: "Twitter inc",
            companyAddress: "795 Folsom Ave, Suite 600 ",
            companyState: "San Francisco, CA 94107",
            phone: "(123) 456-7890"
          },
          {
            name: "Michael Zimber",
            image:"<img src='./assets/michael zimber.jpg'>",
            jobTitle: "CEO",
            company: "Twitter inc",
            companyAddress: "795 Folsom Ave, Suite 600 ",
            companyState: "San Francisco, CA 94107",
            phone: "(123) 456-7890"
          },
          {
            name: "Monica Smith",
            image:"<img src='./assets/monica smith.jpg'>",
            jobTitle: "Graphics Designer",
            company: "Twitter inc",
            companyAddress: "795 Folsom Ave, Suite 600 ",
            companyState: "San Francisco, CA 94107",
            phone: "(123) 456-7890"
          }
        ],
        contactToAdd:{
          id: null,
          name: null,
          image: null,
          jobTitle: null,
          company: null,
          companyAddress: null,
          companyState: null,
          phone: null,
        },
      }
    },
    methods:{
      openForm(){
        document.getElementById("myForm").style.display = "block";
      },
      closeForm(){
        document.getElementById("myForm").style.display = "none";
      },
      addContact(event){
        event.preventDefault();
        if(this.validatePhone()){
          this.ContactList.push({
            name: this.contactToAdd.name,
            image: "<img src='./assets/john-smith.jpg'>",
            jobTitle: this.contactToAdd.jobTitle,
            company: this.contactToAdd.company,
            companyAddress: this.contactToAdd.companyAddress,
            companyState: this.contactToAdd.companyState,
            phone: this.contactToAdd.phone,
            coordinates: this.getGoogleCoords(this.contactToAdd.companyAddress),
          })
          document.getElementById("myForm").style.display = "none";
        }
      },
      validatePhone() {
        var input =  this.contactToAdd.phone;
        var regExp = /^[()+0-9]+$/;
        var match = input.match(regExp);
        if (match){
            return true;
        }else{
            alert("Phone is not valid, you can only input numbers, () ,+");
            return false;
        }
      },
      editContact(name){
        var index = this.ContactList.findIndex(contact=>contact.name==name);
        this.contactToAdd = this.ContactList[index];
        document.getElementById("myEditForm").style.display = "block";
      },
      edit(event){
        document.getElementById("myEditForm").style.display = "none";
      },
      deleteContact(name){
        var index = this.ContactList.findIndex(contact=>contact.name==name)
        alert("delete" + name)
        this.ContactList.splice(index,1);
      },
       getGoogleCoords(address){
        var xmlHttp = new XMLHttpRequest();
        var APIurl = "https://maps.googleapis.com/maps/api/geocode/json?address="+this.contactToAdd.address+"&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8"
        xmlHttp.open( "GET", APIurl, false ); 
        xmlHttp.send( null );
        var responseJson = JSON.parse(xmlHttp.responseText) ;
        var lat = responseJson.results.geometry.location.lat;
        var long = responseJson.results.geometry.location.long;
        return "lat: "+ lat + "long: " + long;
      }
    }
  })  