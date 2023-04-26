var SDK = lpTag.agentSDK || {};
SDK.init({});

var onSuccess = function() {
    // Do something with the success
    console.log("Success)
};

var onError = function(err) {
    console.log("Error occurred",err)
};


var consumerData = {
    avatarUrl:"",
    backgndImgUri:"",
    emailAddress: "",
    firstName: "",
    lastName: "",
    phone: ""
};

function updateProfile() {
    SDK.setConsumerProfile(consumerData, onSuccess, onError)
}
