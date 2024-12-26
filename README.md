# Express.js: Handling Empty or Invalid JSON Request Bodies

This repository demonstrates a common issue in Express.js applications where parsing JSON request bodies fails when the body is empty or contains invalid JSON data.  The problem manifests as `req.body` being `undefined` within the request handler. 

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides a solution to correctly handle these scenarios and prevent unexpected behavior.

## Problem

When an empty request body or a request body with malformed JSON is sent to an Express.js server using `express.json()`, the middleware may fail to parse the body correctly.  This can lead to unexpected behavior in the route handler because `req.body` will be undefined. 

## Solution

The solution involves adding middleware to handle these invalid JSON requests gracefully, preventing app crashes and providing informative responses to the client.
