// Shared state across all API functions
// Note: Resets on function cold start
let currentMode = null;

module.exports = {
    getMode() {
        if (!currentMode) {
            currentMode = process.env.ADS_MODE || 'redirect';
        }
        return currentMode;
    },
    
    setMode(mode) {
        currentMode = mode;
        return currentMode;
    },
    
    toggleMode() {
        const current = this.getMode();
        currentMode = current === 'redirect' ? 'direct' : 'redirect';
        return currentMode;
    }
};
