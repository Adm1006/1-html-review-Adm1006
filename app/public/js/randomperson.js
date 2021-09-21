const RandPerson = {
    data() {
      return {
        "person": {},
             }
    },

computed: {
    prettyBirthday() {
        return dayjs(this.person.dob.date).format('D MMM YYYY');
    }
},

Created() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]
            this.picture = this.person.picture.medium
            this.address = this.person.location.street.number + this.person.location.street.name
        })
        .catch( err => {
            console.error(err)
        })
    }
}
  
Vue.createApp(RandPerson).mount('#InfoApp');