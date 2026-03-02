const state = require('../shared-state');

module.exports = async function (context, req) {
    if (req.method !== 'POST') {
        context.res = {
            status: 405,
            body: 'Method not allowed'
        };
        return;
    }

    const mode = state.toggleMode();
    
    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            mode: mode,
            note: 'Mode persists while function is active. For permanent change, update ads-config.json and redeploy.'
        }
    };
};
