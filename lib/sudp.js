'use strict';

const uuidv4 = require('uuid-v4');
const NodeRSA = require('node-rsa');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

//const datagram = require('dgram');
//
//const emit = require('emit');

module.exports = function SUDP(newOptions,newKeys) {
    // Check Parameters:

    if (newOptions !== undefined){
        if(typeof newOptions !== 'object')
            throw new Error('Option parameter must be Object.');
        

    }
    if( newKeys !== undefined) {
        if(typeof newKeys !== Object) {
            throw new Error('Keys parameter must be Object');
        }
    }

    // Setup Options:
    const options = {
        multiple : false,

    }
    const id = uuidv4();
    const emitter = new MyEmitter();
    const peers = [];   
    // Setup keys:



    // Resolve Options
    



    // Set keys and Keypair

    // Listen:



    /**
     * Connect to other device for handshake
     * @param {String} ip 
     * @param {Number} port 
     * @param {Function} handler 
     */
    function connect(ip, port, handler) {
        let handShakePack = {
            uuid: id,
        };
        peers.push({
            uuid: '',
            ip: ip,
            port: port
        });
    }

    function send(peerIndex) {
        
    }

    function getId() {
        return id;
    }

    return {
        getID : getId
    }

};