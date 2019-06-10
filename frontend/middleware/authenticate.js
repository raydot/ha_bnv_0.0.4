import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

import...the 

// authenticate examines the request cookies for a cookie named
// 'token'. If the token cookie exists, is correctly decoded, 
// and hasn't expired then this method will attempt to retrieve
// the session and attach it and the session user to the request
// object for use by downstream filters.
//
export function authenticate(req: Request, res: Response, next: Function) {
    // Default to no user logged in
    (<any>req).session = null;
    req.user = null;
    // Helper method to clear a token and invoke the next middleware
    function clearTokenAndNext() {
        res.clearCookie("token");
        next();
    }
    // Read the cookie named 'token' and bail out if it doesn't exist
    const { token } = req.cookies;
    if (!token) {
        return clearTokenAndNext();
    }
    // Test the validity of the token
    jwt.verify(token, tokenSecret, (err: Error, decodedToken: any) => {
        if (err) {
            return clearTokenAndNext();
        }
        // Compare the token expiry (in seconds) to the current time (in milliseconds)
        // Bail out if the token has expired
        if (decodedToken.exp <= Date.now() / 86400) {
            return clearTokenAndNext();
        }
        // Read the session ID from the decoded token
        // and attempt to fetch the session by ID
        // Note: getSession retrieves the session (e.g. from Redis, Database, etc).
        const { sid: sessionId } = decodedToken;
        getSession(sessionId, (err: Error, session: Session) => {
            if (err) {
                return clearTokenAndNext();
            }
            // Attach the session and user objects to the request
            // (the following steps will access them)
            (<any>req).session = session;
            req.user = session.user;
            next();
        });
    });
};