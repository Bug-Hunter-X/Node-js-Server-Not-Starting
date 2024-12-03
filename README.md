# Node.js Server Not Starting Bug

This repository demonstrates a common error encountered when running Node.js servers: the `EADDRINUSE` error, which indicates that the specified port is already in use.  The `server.js` file contains the buggy code, while `serverSolution.js` provides a solution.

## Bug

The bug arises when attempting to start a server on a port that is already occupied by another process (e.g., another server instance, or a different application using the same port).

## Solution

The solution involves checking if the port is available before starting the server and implementing a retry mechanism with exponential backoff to handle transient port conflicts.  The improved server will gracefully handle port conflicts and ensure robust startup.

## Usage

1. Clone the repository.
2. Run `node server.js` to observe the error.
3. Run `node serverSolution.js` to see the corrected behavior.