import CryptoJS from 'crypto-js'
// /**
//  *加密处理
//  */
// export const encryption = (params) => {
//   const { data, param, key } = params
//   const result = JSON.parse(JSON.stringify(data))
//   param.forEach(ele => {
//     var data = result[ele]
//     result[ele] = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
//     console.log('encryption---', result[ele])

//   })
//   return result
// }
// /**
//  *解密处理
//  */
// export const decryption = (params) => {
//   const { data, param, key } = params
//   const result = JSON.parse(JSON.stringify(data))
//   param.forEach(ele => {
//     const decrypted = CryptoJS.AES.decrypt(result[ele], key)
//     result[ele] = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
//     console.log('CryptoJS---', decrypted)
//   })
//   return result
// }

/**
 *加密处理
 */
export const encryption = (params) => {
  const { data, type, param } = params
  let { key } = params
  const result = JSON.parse(JSON.stringify(data))

  param.forEach(ele => {
    var data = result[ele]
    // key = CryptoJS.enc.Latin1.parse(key)
    // var iv = key
    // // 加密
    // var encrypted = CryptoJS.AES.encrypt(
    //   data,
    //   key, {
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.ZeroPadding
    //   })
    // // result[ele] = encrypted.toString()
    // result[ele] = CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
    // var key = CryptoJS.enc.Utf8.parse("46cc793c53dc451b");

    var srcs = CryptoJS.enc.Utf8.parse(data);

    var encrypted = CryptoJS.AES.encrypt(srcs, key, {

        mode: CryptoJS.mode.ECB,

        padding: CryptoJS.pad.Pkcs7   //和后端pkcs7 一致

    });

    console.log('666---', encrypted.toString())
    result[ele] = encrypted.toString();
  })
  return result
}
/**
 *解密处理
 */
export const decryption = (params) => {
  const { data, type, param } = params
  let { key } = params
  const result = JSON.parse(JSON.stringify(data))
  param.forEach(ele => {
    const data = result[ele]
    console.log('666---', data)
    // key = CryptoJS.enc.Latin1.parse(key)
    // var iv = key
    // // 解密
    // var decrypted = CryptoJS.AES.decrypt(
    //   // decryptedHexStr,
    //   data,
    //   key,
    //   {
    //     iv: iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.ZeroPadding
    //   })
    // console.log('decrypted---', decrypted)
    // result[ele] = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted))
    // var key = CryptoJS.enc.Utf8.parse("46cc793c53dc451b");

    var decrypt = CryptoJS.AES.decrypt(data, key, {

        mode: CryptoJS.mode.ECB,

        padding: CryptoJS.pad.Pkcs7

    });
    console.log('dec===',CryptoJS.enc.Utf8.stringify(decrypt).toString())
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  })
  return result
}