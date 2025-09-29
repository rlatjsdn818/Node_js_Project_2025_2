const express = require('express');
const fs = require('fs');
const router = express.Router();

//초기 자원 설정

const initalResources = {
    metal : 500,
    crystal : 300,
    deuterirum : 100,
}

//글로벌 플레이어 객체 초기화
global.players = {};

router.post('/register', (req, res) => {
    const {name, password} = req.body;

    if(global.players[name]) {
        return res.status(400).send({message : '이미 등록된 사용자입니다.'});
    }

    global.players[name] = {
        playerName : name,
        password : password,
        resources: {
            metal : 500,
            crystal : 300,
            deuterium : 100
        },
        planets:[]
    };

    saveResources();
    res.send({message : '등록 완료', player:name});
});

router.post('/login', (req, res) => {
    const {name, password} = req.body;

    if(!global.players[name]) {
        return res.status(404).send({message: '플레이어를 찾을 수 없습니다.'});
    }

    const player = global.players[name]; // player 변수 선언 및 할당 추가

    if(password !== player.password) { // player 변수를 사용하여 수정
        return res.status(401).send({message: '비밀번호가 틀렸습니다.'});
    }

    //응답 데이터
    const responsePayload = {
        playerName: player.playerName,
        metal : player.resources.metal,
        crystal : player.resources.crystal,
        deuterium : player.resources.deuterium
    }

    console.log("Login response payload : ", responsePayload);
    res.send(responsePayload);
});

module.exports = router;  //라우터 등록