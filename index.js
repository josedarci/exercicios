function HelloWorld() {
    console.log('Hello World')
}
const saudacao = () => {
    var data = new Date()
    return data.getHours() <= 12 ? 'Bom dia ': data.getHours() <= 18? "Boa tarde": "Boa Noite"
}
//comentarios 
//TODO fazer isso depois
HelloWorld();
console.log('Á saudacao do mommnento' + saudacao())
teste {
    if (a = b) {
        if (b = c) {
           
        }
    }
}