## Dependencies
### Node
``` bash
brew update
brew install node
```
## Steps to run the app
The project uses `Makefile` to simplify the command. Below are the commands and instruction.

```bash
make setup
-- brew update; brew install yarn; brew install watchman

make dep
-- yarn install
-- install node packages specified in package.json

make
-- yarn start
-- start the react app

make
-- yarn test
-- run jest unit tests
```


## Features of this app
### Mobile friendly
This app uses flex design with `bootstrap`, so the layout is responsive to the screen. The top navbar will collapse if the screen width is below `992px`.

### Reactive button
When send request to the backend, the `SEND YOUR MESSAGE` button will be disabled until the the backend response is received. A 'loading' spinner will be displayed in this duration.

### Friendly messages
If the request fails, a firendly mesasge with red background will be shown just below the button. Please try to send **empty** message and then you will see **Please do not send empty message**.

If the request succeeds, a message modal will be toggled showing **Thank you for your feedback!**. Cliking anywhere on the screen will close the modal.

### Register / log in / Auto log in
Customers can register / log in to view the messages they have sent. A form will be opened by licking the `Register`/`Login` button

The app uses cookie (`cammyCookie`) for auto log in. When the app loads, it will send request with cookie to the backend for authentication. So, deleting `cammyCookie` in the browser will force the customer to log out.

After sign in, there will be a link just below the navbar, clicking which will open a modal showing the messages sent by the customer.

#### Future
- Log out
- Salt / Pepper for password encryption
- Hash for cookie encryption
