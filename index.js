var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('connect')();
var oas3Tools = require('oas3-tools'); 
var jsyaml = require('js-yaml');
var serverPort = 8080;
