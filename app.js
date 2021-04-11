var venom = require('venom-bot');
var numbersArray = process.argv[2];
venom
    .create()
    .then(function (client) { return sendMessage(client, numbersArray); })["catch"](function (erro) {
    console.log(erro);
});
function sendMessage(client, numbersArray) {
    var numbers = numbersArray.split(',');
    // var numbers = ['918693025340','919702551547','918879387033'];
    var counter = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        console.log(number);
        client.sendText(number + '@c.us', '👋 Hello from bot , by nikhil!').then(function (result) {
            console.log(result); //return object success
            counter++;
            if (counter == i) {
                process.exit();
            }
        })["catch"](function (erro) {
            counter++;
            if (counter == i) {
                //  process.exit();
            }
            //  console.error('Error when sending: ', erro); //return object error
        });
    }
}
function sendImage(client) {
    var numbers = ['918693025340', '919702551547', '918879387033'];
    var count = numbers.length;
    var counter = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        client.sendImage(number + '@c.us', 'https://admin.proweblabs.tech/Vcard/Uploads/20201116135900848386059.jpg', 'image-name', 'Caption text').then(function (result) {
            console.log(result); //return object success
            counter++;
            if (counter == i) {
                process.exit();
            }
        })["catch"](function (erro) {
            counter++;
            if (counter == i) {
                process.exit();
            }
            console.error('Error when sending: ', erro); //return object error
        });
    }
}
