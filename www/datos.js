function misdatos(){

var vnombre=document.getElementById("nombre").value;
var vapellido=document.getElementById("apellido").value;
var vfecha=document.getElementById("fecha").value;
var vcorreo=document.getElementById("correo").value;
var vcontraseña=document.getElementById("contraseña").value;
var vnumero=document.getElementById("numero").value;





document.addEventListener("deviceready", onDeviceReady, false);var currentRow;
        // Populate the database
        //
        function populateDB(tx) {
          alert("creando base de datos");
        //	tx.executeSql('DROP TABLE IF EXISTS DEMO2 ');
          alert("drop");
            tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO2 (id INTEGER PRIMARY KEY AUTOINCREMENT, name,ubicacion,coment,tag,fecha,hora,otro)');
          alert("base de datos creada");
        }
        // Query the database
        //
        function queryDB(tx) {
            tx.executeSql('SELECT * FROM DEMO2', [], querySuccess, errorCB);
        }

        function errorCB(err) {
            alert("Error processing SQL: "+err.code+ err.description);
        }

          function successCB() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo2", 200000);
            db.transaction(queryDB, errorCB);
           // alert("successCB");
        }
         // Cordova is ready
        //
        function onDeviceReady() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo2", 200000);
            db.transaction(populateDB, errorCB, successCB);
           // alert("onDeviceReady");
        }

        function goInsert() {
            var db = window.openDatabase("Database", "1.0", "Cordova Demo2", 200000);
            db.transaction(insertDB, errorCB, successCB);

        }
