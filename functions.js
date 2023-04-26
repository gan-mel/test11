 function updateProfile() {

 

            document.getElementById("lblLPError").style.visibility = "visible";

            document.getElementById("lblLPError").style.color = "black";

            document.getElementById("lblLPError").innerText = "Update notification sent to LivePerson";


            lpTag.agentSDK.init({});

 

            var onSuccess = function () {

               // document.getElementById("lblLPError").style.color = "black";

               // document.getElementById("lblLPError").innerText = "Notification sent to LivePerson for chat update";

                // Do something with the success

            };

 

            var onError = function (err) {

              //  document.getElementById("lblLPError").style.color = "red";

                //document.getElementById("lblLPError").innerText = "Error occurred in sending notification to LivePerson";

             //   document.getElementById("lblLPError").innerText = err;
             console.log(err)

 

                // Do something with the error

            };

            var phval;

            phval = "bb";

 

            var consumerData = {

                avatarUrl: "",

                backgndImgUri: "",

                email: "",

                firstName: "",

                lastName: "",

                phone: phval

            };

            lpTag.agentSDK.setConsumerProfile(consumerData, onSuccess, onError);

 
}
