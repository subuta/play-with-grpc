import * as messages from "./api/api_pb";
import * as services from "./api/api_grpc_pb";
import * as grpc from "@grpc/grpc-js";

const client = new services.GreeterClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const request = new messages.HelloRequest();

request.setName("world");

client.sayHello(request, function (err, response) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Greeting:", response.getMessage());
});
