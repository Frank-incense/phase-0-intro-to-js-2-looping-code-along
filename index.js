// Code your solutions in this file
function writeCards(names, event) {
    const  l = names.length;
    const thanksMessages = [];
    for (let i = 0; i < l; i++) {
        thanksMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thanksMessages;
}
function countDown(number) {
    while ( number > -1) {
        console.log(number);
        number -= 1;
    }

}