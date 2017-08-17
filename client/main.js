import app from '../imports/app'

// function request (url, auth) {
//   console.log(auth)
//   // 这里需要处理auth过期自动重发等问题
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${url} request`)

//       resolve(`${url} done`)
//     }, 2000)
//   })
// }
// // 表示缓存auth
// let _auth = null

// async function getAuth () {
//   if (_auth) {
//     return new Promise((resolve) => {
//       _auth.then(resolve)
//     })
//   } else {
//     _auth = request('getAuth').then(_ => {
//       console.log('asdasd')
//       return 'token'
//     })
//     return _auth
//   }
// }
// function fetch (url) {
//   return getAuth().then(auth => request(url, auth))
// }

// fetch('test1').then(console.log)
// fetch('test2').then(console.log)
let res = 'expired'

function request (url, auth) {
  return new Promise((resolve, reject) => {
    console.log(`${url} request`)

    let ret = res
    if (url === 'getAuth') {
      ret = 'token'
    }

    setTimeout(() => {
      if (ret === 'expired') {
        reject('expired')
      } else {
        resolve(`${url} done`)
      }
    }, 2000)
  })
}

let _auth = null

function getAuth () {
  if (_auth == null) {
    _auth = request('getAuth').then(_ => {
      return 'token'
    })
  }
  return _auth
}

function fetch (url) {
  return getAuth().then(auth => {
    return request(url, auth).catch(err => {
      if (err === 'expired') {
        res = 'success'
        _auth = null
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(fetch(url))
          }, 0)
        })
      } else {
        return Promise.reject(err)
      }
    })
  })
}

fetch('test1').then(console.log)
fetch('test2').then(console.log)
