 function setConsumerProfileOnUpdate() {

 

            document.getElementById("lblLPError").style.visibility = "visible";

            document.getElementById("lblLPError").style.color = "black";

            document.getElementById("lblLPError").innerText = "Update notification sent to LivePerson";

           

            var notificationHandler = function (data) {

                // Do something with the notifications

            };

 

            var focusHandler = function () {

                // Do something when the visitor is focused

                // Assume the visitor is focused to begin with

            };

 

            var blurHandler = function () {

                // Do something when the visitor is blurred

                // Assume the visitor is focused to begin with

            };

 

 

            lpTag.agentSDK.init({

                notificationCallback: notificationHandler,

                visitorFocusedCallback: focusHandler,

                visitorBlurredCallback: blurHandler

            });

 

            var onSuccess = function () {

                document.getElementById("lblLPError").style.color = "black";

                document.getElementById("lblLPError").innerText = "Notification sent to LivePerson for chat update";

                // Do something with the success

            };

 

            var onError = function (err) {

                debugger;

                document.getElementById("lblLPError").style.color = "red";

                //document.getElementById("lblLPError").innerText = "Error occurred in sending notification to LivePerson";

                document.getElementById("lblLPError").innerText = err;

 

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
