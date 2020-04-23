import uploadBusboy from './uploadBusboy';
import request = require('supertest');
import fs = require('mz/fs');
import path = require('path');
import express = require('express');
const app = express();

app.get('/image/:name', function (req, res, next) {
    var options = {
        root: path.join(__dirname, 'test-images'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    });
});


app.post('/image/:name', function (req, res, next) {
    uploadBusboy(req).start((data)=>{

    })
});

app.post('/ascii/:name', function (req, res, next) {
    uploadBusboy(req, {
        onFile: {
            md5:()=>({md5:'true'})
        }
    }).start((data)=>{

    })
});

test('uploadBusboy a function', () => {
    expect(typeof uploadBusboy).toBe('function');
});

test('Test server sends image', async () => request(app)
        .get('/image/portrait.jpg')
        .expect(200)
        .expect('Content-Type', 'image/jpeg')
);

// TODO, test


