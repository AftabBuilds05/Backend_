const asyncHandler = (reqHandler) => (req, res, next) => {
promise.resolve(reqHandler(req, res, next)).
catch(err) => next (err);
}


 export {asyncHandler}

   /* const asyncHandler = (fn) => (req, res, next) => {
        try {
        await fn(req,res,next);
        } catch (error) {
          res.status(500).json({
             sucess: false,
             message: "Internal Server Error" });
        }
        Promise.resolve(fn(req, res, next)).catch(next);
    }
        */