const Offer = {
    data() {
      return {
        "person": {},
        "offers": [
                {
                    "id": 1,
                    "name": "Jane Student",
                    "offer": 100000,
                    "bonus": 9000,
                    "company": "EY",
                    "offerDate": "2021-10-05"
                },
                {
                    "id": 2,
                    "name": "Jordan Student",
                    "offer": 87000,
                    "bonus": 3000,
                    "company": "IU",
                    "offerDate": "2021-09-25"
                }
            ]
        }
    },
computed {
    prettyBirthday() {
        return dayjs(this.person.dob.date)
        .format('D MMM YYYY');
    }

}
methods: {


}
    created() {
        console.log("A");

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]
            console.log("C");
        })
        .catch( err => {
            console.error(err)
        })

        console.log("B");
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');

//25. just defining a function, called created because its when i want the function to be , attaches to event
//26. print A in console
//28. making request object and returning a promise object that will handle the response
//29. when response shows up, run this function take info from website and try to read it like json
//30. Parsed function is another function
//31. 