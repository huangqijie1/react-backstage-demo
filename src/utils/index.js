/**
 *加密处理
 */
// export const encryption = (params) => {
//   const { data, param } = params
//   let { key } = params
//   const result = JSON.parse(JSON.stringify(data))

//   param.forEach(ele => {
//     var data = result[ele]
//     key = CryptoJS.enc.Latin1.parse(key)
//     var iv = key
//     // 加密
//     var encrypted = CryptoJS.AES.encrypt(
//       data,
//       key, {
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.ZeroPadding
//       })
//     result[ele] = encrypted.toString()
//   })
//   return result
// }
// /**
//  *解密处理
//  */
// export const decryption = (params) => {
//   const { data, type, param } = params
//   let { key } = params
//   const result = JSON.parse(JSON.stringify(data))
//   param.forEach(ele => {
//     const data = result[ele]
//     // const decryptedHexStr = CryptoJS.enc.Hex.parse(data)
//     // const srcs = CryptoJS.enc.Base64.stringify(decryptedHexStr)
//     key = CryptoJS.enc.Latin1.parse(key)
//     var iv = key
//     // 解密
//     var decrypted = CryptoJS.AES.decrypt(
//       // decryptedHexStr,
//       data,
//       key,
//       {
//         iv: iv,
//         mode: CryptoJS.mode.CBC,
//         padding: CryptoJS.pad.ZeroPadding
//       })

//     result[ele] = decrypted.toString(CryptoJS.enc.Utf8)
//   })
//   return result
// }