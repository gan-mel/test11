var SDK = lpTag.agentSDK || {};
SDK.init({});

var onSuccess = function() {
    // Do something with the success
};

var onError = function(err) {
    // Do something with the error
};


var consumerData = {
    avatarUrl:"",
    backgndImgUri:"",
    emailAddress: "testing@test.com",
    firstName: "NEW",
    lastName: "NEW",
    phone: "testing"
};

function updateProfile() {
    SDK.setConsumerProfile(consumerData, onSuccess, onError)
}
