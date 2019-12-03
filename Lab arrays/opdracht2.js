var names = []
Main()
function Main(){
    var vraag = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)", "Hoeveelheid:");
    if (vraag >= 3){
        for (var i = 0; i < vraag; i++) {
            var input =  prompt('Voer naam ' + i + ' in', 'Naam:');
            names.push(input);
            if (i == vraag - 1){
                for (var i = 0; i < names.length; i++) {
                    document.getElementById('namesTitle').innerHTML = "De ingevoerde namen in de array zijn:"
                    document.getElementById('names').innerHTML+=names[i] + ", <br>"
                    names.reverse();
                    document.getElementById('namesReverseTitle').innerHTML = "De ingevoerde namen in de array in omgekeerde volgorde zijn:"
                    document.getElementById('namesReverse').innerHTML+=names[i] + ", <br>" 
                }
            }
        }
    }
    else{
        Main()
    }
}