/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({

    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passwordVar, loginCallback);
    }
});

function loginCallback(error) {
    if(error){
        if(error.error == 403)
            sAlert.warning(error.reason, {position:'top'});
        else
            sAlert.warning("No user found", {position:'top'});
    } else
        Router.go("home");
}
            
/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
    if(Meteor.user())
        Router.go("home");
    console.log("onCreated");

});

Template.Login.onRendered(function () {
        console.log("onCreated");

});

Template.Login.onDestroyed(function () {
        console.log("onDestroyed");

});
