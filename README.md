# HTTP Header Elucidator
This project is an attempt to get to know better the behavior of
HTTP Headers and provide an easier explanation of what a browser
would do on certain occasions.

## Stack
Stack is simple. We wrote a REST API in Rust and a frontend application
using [create-react-app](https://github.com/facebookincubator/create-react-app).

The API parses the headers and emulates a browser based on the [HTTP/1.1
standard](https://tools.ietf.org/html/rfc2616). It also provides more readable
messages.

## License
MIT
