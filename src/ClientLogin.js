class ClientLogin extends React.Component {

    handleButtonClick() {
        console.log('button clicked');
    }

    render() {
        return (
            <div>
                <h1>Client Login</h1>
                <button onClick={this.handleButtonClick}>Sign In With Google</button>
            </div>
        );
    }
}

export default ClientLogin;