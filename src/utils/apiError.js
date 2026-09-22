class apiError extends Error {
    constructor(message, statusCode, error, statck
    ) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        this.data = null
        this.message = message;
        this.success = false;
        this.error = error;
        this.statck = statck;
        
        if (statck) {
            this.statck = statck;
        } else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export {apiError}