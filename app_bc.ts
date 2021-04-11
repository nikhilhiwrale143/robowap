



const venom = require('venom-bot');

 var numbersArray=process.argv[2];
    venom
      .create()
      
      .then((client) => welcome())
      .catch((erro) => {
        console.log(erro);
      });

    function welcome() {
      console.log('logged in successfull');
     
    }




