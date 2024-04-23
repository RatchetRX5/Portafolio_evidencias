function genera_rfc() {
    var cad1 = document.getElementById('name').value;
    cad1 = cad1.substring(0, 1);
    var cad2 = document.getElementById('apa').value;
    cad2 = cad2.substring(0, 2);
    var cad3 = document.getElementById('ama').value;
    cad3 = cad3.substring(0, 1);
    var cad4 = document.getElementById('yr').value;
    cad4 = cad4.substring(2, 4);
    var cad5 = document.getElementById('mnth').value;
    cad5 = cad5.substring(0, 2);
    var cad6 = document.getElementById('day').value;
    cad6 = cad6.substring(0, 2);

    let r = cad2+cad3+cad1+cad4+cad5+cad6;
    r = r.toUpperCase();

    document.getElementById("resul").value = r;
}