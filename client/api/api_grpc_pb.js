// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_api_pb = require('../api/api_pb.js');

function serialize_api_HelloReply(arg) {
  if (!(arg instanceof api_api_pb.HelloReply)) {
    throw new Error('Expected argument of type api.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_HelloReply(buffer_arg) {
  return api_api_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_HelloRequest(arg) {
  if (!(arg instanceof api_api_pb.HelloRequest)) {
    throw new Error('Expected argument of type api.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_HelloRequest(buffer_arg) {
  return api_api_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/api.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: api_api_pb.HelloRequest,
    responseType: api_api_pb.HelloReply,
    requestSerialize: serialize_api_HelloRequest,
    requestDeserialize: deserialize_api_HelloRequest,
    responseSerialize: serialize_api_HelloReply,
    responseDeserialize: deserialize_api_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
