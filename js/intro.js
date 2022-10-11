        
        //Alert popup
        //alert('Alert script')

        //Alert popup, allow typing text or numbers
        //let value = prompt("Gime me a number: ");
        //alert("You typed " + value);
        
        // Diferents types of declare variables and best way its with let
        var a = "TestVarConsoleLog1";
        console.log('Value :>> ', a);
        let b = "TestVarConsoleLog2";
        console.log('Value :>> ', b);
        c = "TestVarConsoleLog3";
        console.log('Value :>> ', c);
        //Its uses when the values not change any more
        const d = "TestVarConsoleLog4";
        console.log('Value :>> ', d);

        // Alt + 96 = ``
        let e = `
        Texto con "espacios"
        y salto de lineas
        `;
        
        console.log('Value :>> ', e);
        console.log('Value length:>> ', e.length);
        console.log('Value MAYUS:>> ', e.toUpperCase());

        // Arrays
        arr = [9,8,7,6,5,4,3,2,1];
        console.log('Array :>> ', arr);

        // For to show all items from array
        arr.forEach(element => {
            console.log('Value :>> ', element);
        });

        // Diccionary of Phyton
        let arr2 = {santander: "Bucaramanga", Boyaca: "Tunja"};
        console.log('Value :>> ', arr2);

        // Functions
        // Las funciones se pueden guardar en una variable
        function myfunction (p1, p2){
            return p1 * p2;
        }
        console.log( myfunction(3,4) );

        // Functions anonimus 
        // Es funcion anonima no por que no tenga nombre, si no por como se define
        // Se usan cuando la funcion se almacene en este momento y se pueda usar mas adelante
        let fun  = function (p1, p2){
            return p1 / p2;
        }
        console.log( fun(3,2) );

        // Aparece despues de 3s
        //setTimeout( function () {
        //    alert('Hello 3s Funcion Anomima');
        //}, 3000 );

        // arrow function/ Funcion flecha
        // Se usa para menos codigo
        let minus = (p1, p2) => {
            return p1 - p2;
        }
        console.log( minus(30,12) );

        // Aparece despues de 3s
        //setTimeout( () => {
        //    alert('Hello 3s Function arrow');
        //}, 3000 );

        let dict = { 
            value: 2, 
            status: true, 
            title: "Value 3",
            temps: [3,2,4,2],
            style: { kind: "button" , active: true },
            persons: [ { name: "Carlos", age: 39  },{ name: "Diana", age: 38  }  ]    
        };
        
        
        
        console.log( dict.status );
        console.log( dict.persons[1] );