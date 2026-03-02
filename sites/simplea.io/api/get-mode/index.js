const state = require('../shared-state');

module.exports = async function (context, req) {
    const mode = state.getMode();
    
    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: { mode: mode }
    };
};
