const request = require('request')
const md5 = require('md5')

exports.apiUrl = 'https://api.textnow.me/api2.0/'
exports.signKey = '851a9f2bad15843c1a922890c061830e8ce50e86840575d17e61ef0becdc3576'
exports.userAgent = 'TextNowSwift-Free/8.34.0 (iPhone iOS 12.0 Scale/3.00)'

exports.json = function(query, result){
    result(JSON.parse(query))
}

exports.genSignature = function(method, node, query){
    return md5((exports.signKey + method + node + JSON.stringify(query).slice(1, -1)).replace(/\\/ig, ''))
}

exports.sendReq = function(method, url, sign, data, result){
    if(sign != null){
        var url = url + '&signature=' + sign
    }

    if(method.toUpperCase() == 'POST'){
        if(data != null){
            request.post(url, {
                headers: {
                    'User-Agent': exports.userAgent,
                    'Accept-Language': 'en-USq=1'
                },
                body: JSON.stringify(data).slice(1, -1).replace(/\\/ig, '')
            }, function(error, response, body){
                result(body, error)
            })
        } else {
            request.post(url, {
                headers: {
                    'User-Agent': exports.userAgent
                }
            }, function(error, response, body){
                result(body, error)
            })
        }
    }

    if(method.toUpperCase() == 'PATCH'){
        request.patch(url, {
            headers: {
                'User-Agent': exports.userAgent
            },
            body: JSON.stringify(data)
        }, function(error, response, body){
            result(body, error)
        })
    }

    if(method.toUpperCase() == 'PUT'){
        request.put(url, {
            headers: {
                'User-Agent': exports.userAgent
            },
            body: JSON.stringify(data)
        }, function(error, response, body){
            result(body, error)
        })
    }

    if(method.toUpperCase() == 'GET'){
        request(url, {
            headers: {
                'User-Agent': exports.userAgent
            }
        }, function(error, response, body){
            result(body, error)
        })
    }
}

exports.login = function(username, password, result){
    var node = 'sessions'
    var query = '?client_type=TN_IOS_FREE'

    var loginData = {
        'password': password,
        'username': username,
        'esn': '00000000000000',
        'os_version': '22',
        'app_version': '5.15.0',
        'iccid': '89014103211118510720'
    }
    var jsonData = JSON.stringify(loginData)

    exports.sendReq('POST', exports.apiUrl + node + query, exports.genSignature('POST', node, query + jsonData), jsonData, function(body, error){
        exports.json(body, function(response){
            if(response.id){
                result(true, response.id, response.username)
            } else {
                result(false)
            }
        })
    })
}

exports.getInfoAboutUser = function(token, username, result){
    var node = 'users/' + username
    var query = '?client_type=TN_IOS_FREE&client_id=' + token

    exports.sendReq('GET', exports.apiUrl + node + query, exports.genSignature('GET', node, query), null, function(body, error){
        exports.json(body, function(response){
            result(response)
        })
    })
}

exports.getWallet = function(token, username, result){
    var node = 'users/' + username + '/wallet'
    var query = '?client_type=TN_IOS_FREE&client_id=' + token

    exports.sendReq('GET', exports.apiUrl + node + query, exports.genSignature('GET', node, query), null, function(body, error){
        exports.json(body, function(response){
            result(response)
        })
    })
}

exports.getMessages = function(token, username, result){
    var node = 'users/' + username + '/messages'
    var query = '?client_type=TN_IOS_FREE&client_id=' + token + '&get_all=1&page_size=30&start_message_id=1'

    exports.sendReq('GET', exports.apiUrl + node + query, exports.genSignature('GET', node, query), null, function(body, error){
        exports.json(body, function(response){
            result(response)
        })
    })
}

exports.phone = function(token, username, area_code, result){
    var node = 'users/' + username + '/phone'
    var query = '?idfa=&idfv=&client_id=' + token + '&client_type=TN_IOS_FREE'
    var phoneData = {
        'area_code': parseInt(area_code)
    }
    var jsonData = JSON.stringify(phoneData)

    exports.sendReq('PUT', exports.apiUrl + node + query, exports.genSignature('PUT', node, query + jsonData), jsonData, function(body, error){
        exports.json(body, function(response){
            result(response)
        })
    })
}