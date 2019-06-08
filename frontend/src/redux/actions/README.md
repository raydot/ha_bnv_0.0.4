# Actions

Most of the thinking for actions and reducers comes from [here](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82).

The goal may or may not be to eventually move to Hooks.  

The general flow for actions:

 - Import dependencies and action definitions from `types.js`
 - Use `axios` to make `HTTPRequests` within a certain action
 - Use `dispatch` to send actions to the reducers.