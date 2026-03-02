const state = require('../shared-state');

module.exports = async function (context, req) {
    const mode = state.getMode();
    
    if (mode === 'redirect') {
        // Redirect to Ezoic
        context.res = {
            status: 301,
            headers: {
                'Location': 'https://srv.adstxtmanager.com/19390/simplea.io'
            }
        };
    } else {
        // Return Google AdSense content directly
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'google.com, pub-5816033971207455, DIRECT, f08c47fec0942fa0'
        };
    }
};
