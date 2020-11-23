
function Formatter (editor){
    
    // const editor = editor;

    // grabbing the input and parsing it to the token recognizer
    function grabInput(event){
       // console.log(event.target.value);
       let input = event.target.value.toString();
        tokenRecognizer(input);
    }

    
    // token recognizer
    function tokenRecognizer(input){

        let newInputArray;
        inputArray = input.split(' ');
        console.log('token filter',inputArray);

        // check to see if there is a match in the input
       const result = inputArray.find(text => text.match(/@[a-z]+/));
       console.log(result);

       if (!result){

           console.log('waiting to complete typing....');
       }else{
        newInputArray = inputArray.map(eachToken => {
            //TODO: learn regex
            if (eachToken.match(/@[a-z]+/)){
                 eachToken = `h
   ---
    h `;
                 
            }
            return eachToken;
        });

        console.log('new array ', newInputArray);
        showInputAtGivenLine(newInputArray);

       }
        
//         if(token.includes('diff')){
//             const diff = ` h
// ---
//  h `;
//           //  console.log(diff);
//           // showInputAtGivenLine(diff);
//         }
    }

  function  showInputAtGivenLine(inputArray){
        let input = inputArray.join(' ');
        editor.value = input;
        console.log(input);
    }

    editor.addEventListener('input', grabInput);
}

const editor = Formatter(document.querySelector('.editor'));
//formatter(editor);
//console.log(editor);

// TODOS: 
/*
    1. dont forget to remove the event listeners when they are not on focus
 `h
---
 h `   */

 const name = 45454;