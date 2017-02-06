
export class User {
    protected _loggedIn: boolean = false;

    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;

    isLoggedIn(): boolean {
        return this._loggedIn;
    }

    getName(): string {
        return this.firstName + " " + this.lastName.substr(0, 1) + ".";
    }
    logOut() {

    }

    logIn() {

    }
}

export class GoogleUser extends User {
    constructor(googleUser) {
        super();
        const profile = googleUser.getBasicProfile();
        this.email = profile.getEmail();
        this.firstName = profile.getGivenName();
        this.lastName = profile.getFamilyName();
        this.imageUrl = profile.getImageUrl();
        this._loggedIn = true;
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());  
    }

    logOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }


}
export class FacebookUser extends User {
    authToken;
    constructor(fbResponse) {
        super(); // 
        this.authToken = fbResponse.authResponse.accessToken;
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.first_name);
        });
    }

    logOut() {
        FB.logout((response) => {
            this._loggedIn = false;
        });
    }
}