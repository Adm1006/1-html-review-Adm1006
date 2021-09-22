const RandPerson = {
    data() {
      return {
        "person": {
            name:{},
            picture:{},
            dob:{},
            location:{},
        },
             }
    },


created() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]
            this.picture = this.person.picture.large
            this.address = this.person.location.street.number + this.person.location.street.name
        })
        .catch( err => {
            console.error(err)
        })
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date).format('D MMM YYYY');
        }
    },
}

  
Vue.createApp(RandPerson).mount('#RandPersonApp');