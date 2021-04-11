const venom = require('venom-bot');



    venom
      .create()
      
      .then((client) => sucessMessage())
      .catch((erro) => {
        console.log(erro);
      });

      function sucessMessage(){
          process.exit();
      }