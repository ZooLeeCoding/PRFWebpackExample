import {Site} from './site';

var site : Site;

document.getElementById("messageArea").innerHTML = 'Halo';

function changeNumField(msg: string) {
    document.getElementById("numberField").innerHTML = msg;
}

module.exports = {
    createSite : function() {
        console.log("creating the Site");
        site = new Site(parseInt((<HTMLInputElement>document.getElementById("ageField")).value), 
        (<HTMLInputElement>document.getElementById("nameField")).value);
    },

    getMessage : function() {
        document.getElementById("messageArea").innerHTML = site.greetings();
        site.promiseMe().then(data => {
            changeNumField(<string>data);
        }).catch(error => {
            changeNumField(<string>error);
        });
        changeNumField("-");  
    }
}

