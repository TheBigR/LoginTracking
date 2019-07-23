# LoginTracking

this repo comes to practice a simple node application,


# How to use

In order to use: (windows)
1. clone git repo.
2. run npm install.
3. add to hosts file => {machine local ip address} http://login-tracking.com/
4. open cmd in admin mode.
5. in cmd - netsh interface portproxy add v4tov4 listenport=80 listenaddress={machine local ip address} connectport=5000 connectaddress=127.0.0.1
6. nodemon index
* Either run the postman collection to add pre made entries or
7. open a browser to http://login-tracking.com/.
