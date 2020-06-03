var name = 'Ogheneovie Oki-Peter';
var email = 'okipeterovie@gmail.com'
var ID = 'HNG-03714';
var lang = 'JavaScript';

function showProps(myName, myID, myEmail, myLang) {
    var result = ``;

        result += (`Hello World, this is ${myName} with HNGi7 ID ${myID} and email ${myEmail} using ${myLang} for stage 2 task`);
     
    return result;
  }

  console.log (showProps(name, ID, email, lang));