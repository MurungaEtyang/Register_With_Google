import React from 'react';

class Auth2Credentials extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://account.google.com/gsi/client';
        script.onload = this.initializeGoogleSign;
        document.body.appendChild(script);
    }

    initializeGoogleSign() {
        window.google.account.id.initialize({
            client_id: '133248580158-s102mm63eboe24uld8mrk3ol24tikpfm.apps.googleusercontent.com ',
            callback: 'handleGoogleSignIn', // Update this line
        });
    }

    handleGoogleSignIn = (response) => {
        if (response.error) {
            console.log("Google Sign In Error: " + response.error);
        } else if (response.credentials && response.credentials.id_token) {
            const { id_token } = response.credentials;
            console.log("Google Sign In success", id_token);
            // You can perform further actions with the id_token here
        } else {
            console.log("Unexpected response format:", response);
        }
    }


    render() {
        return (
            <div>
                <h1>Auth2Credentials</h1>
                <div
                    id="g_id_onload"
                    data-client_id="133248580158-s102mm63eboe24uld8mrk3ol24tikpfm.apps.googleusercontent.com"
                    data-callback="handleGoogleSignIn" // Update this line
                    data-auto_prompt="false"
                ></div>
                <button id="google-signing-button" onClick={this.handleGoogleSignIn}>Sign With Google</button>
            </div>
        );
    }
}

export default Auth2Credentials;