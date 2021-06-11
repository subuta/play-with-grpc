# play-with-grpc
Play with gRPC based communication between client and server.

## Prerequisites

- Node.js (v10.16.3 on my machine)
- Golang (v1.16.4 on my machine)
- `brew install protobuf`

SEE: https://grpc.io/docs/languages/go/quickstart/

Install the protocol compiler plugins for Go using the following commands:

```
$ go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
$ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1
```

Update your PATH so that the protoc compiler can find the plugins:

```
$ export PATH="$PATH:$(go env GOPATH)/bin"
```

SEE: https://github.com/grpc/grpc/tree/master/examples/node/static_codegen

```
$ npm install -g grpc-tools
```

## How to develop

```bash
# Re-generate protobuf files for server(Golang)
protoc --go_out=./server --go_opt=paths=source_relative --go-grpc_out=./server --go-grpc_opt=paths=source_relative api/api.proto

# Re-generate protobuf files for client(Node.js)
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./client --grpc_out=grpc_js:./client api/api.proto

# Dig into server dir
cd server
# Install dependencies
go mod tidy
# Start server
go run .

# Dig into client dir
cd client
# Install dependencies
npm i
# Start client
npm start
```