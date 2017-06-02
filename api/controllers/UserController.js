/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
	  res.view('login', {
	    guess: 'guess again'
    });
  },
  list: function(req, res) {
    res.view('list', {
      "result": {
        "songCount": 916,
        "songs": [
          {
            "id": 469104548,
            "name": "HUMBLE.",
            "artists": [
              {
                "id": 37995,
                "name": "Kendrick Lamar",
                "picUrl": null
              }
            ],
            "album": {
              "id": 35297768,
              "name": "HUMBLE.",
              "artist": {
                "id": 0,
                "name": "",
                "picUrl": null
              },
              "picUrl": "http://p1.music.126.net/9bIIwES14NfP9yoFVypxVw==/18560855790342963.jpg"
            },
            "audio": "http://m2.music.126.net/tet046uVAeay29t0Ju-V_Q==/18528969953153089.mp3",
            "djProgramId": 0,
            "page": "http://music.163.com/m/song/469104548"
          },
          {
            "id": 472045054,
            "name": "HUMBLE.",
            "artists": [
              {
                "id": 37995,
                "name": "Kendrick Lamar",
                "picUrl": null
              }
            ],
            "album": {
              "id": 35338681,
              "name": "DAMN.",
              "artist": {
                "id": 0,
                "name": "",
                "picUrl": null
              },
              "picUrl": "http://p1.music.126.net/8nVM-63PB9vsdRgRReq7_w==/18508079232231489.jpg"
            },
            "audio": "http://m2.music.126.net/Ti9YJQm1HFn7vjgoWgHzEw==/19038043835026692.mp3",
            "djProgramId": 0,
            "page": "http://music.163.com/m/song/472045054"
          },
          {
            "id": 472085848,
            "name": "HUMBLE.",
            "artists": [
              {
                "id": 0,
                "name": "Pop_Leading",
                "picUrl": null
              }
            ],
            "album": {
              "id": 0,
              "name": "[DJ节目]Pop_Leading的DJ节目 第1226期",
              "artist": {
                "id": 0,
                "name": "Pop_Leading",
                "picUrl": null
              },
              "picUrl": "http://p1.music.126.net/tw0LsKOE0YC4piAvjBhcSA==/19075427230367349.jpg"
            },
            "audio": "http://m2.music.126.net/hmZoNQaqzZALvVp0rE7faA==/0.mp3",
            "djProgramId": 904402637,
            "page": "http://music.163.com/m/song/472085848"
          },
          {
            "id": 473973854,
            "name": "HUMBLE.",
            "artists": [
              {
                "id": 0,
                "name": "山屾",
                "picUrl": null
              }
            ],
            "album": {
              "id": 0,
              "name": "[DJ节目]山屾的DJ节目 第22期",
              "artist": {
                "id": 0,
                "name": "山屾",
                "picUrl": null
              },
              "picUrl": "http://p1.music.126.net/dzg1T-CqTPk5oE3BEQED2A==/18905002928073620.jpg"
            },
            "audio": "http://m2.music.126.net/hmZoNQaqzZALvVp0rE7faA==/0.mp3",
            "djProgramId": 904617227,
            "page": "http://music.163.com/m/song/473973854"
          },
          {
            "id": 479986903,
            "name": "HUMBLE.",
            "artists": [
              {
                "id": 0,
                "name": "lIIMatt",
                "picUrl": null
              }
            ],
            "album": {
              "id": 0,
              "name": "[DJ节目]lIIMatt的DJ节目 第60期",
              "artist": {
                "id": 0,
                "name": "lIIMatt",
                "picUrl": null
              },
              "picUrl": "http://p1.music.126.net/hJf68vTl_EVwTz4x6-a3gA==/18785156161952126.jpg"
            },
            "audio": "http://m2.music.126.net/hmZoNQaqzZALvVp0rE7faA==/0.mp3",
            "djProgramId": 905776084,
            "page": "http://music.163.com/m/song/479986903"
          }
        ]
      },
      "code": 200
    })
  }
};

