function encrypt(buffer) {
    const kms = new aws.KMS({
        accessKeyId: '', //insert IAM user creds
        secretAccessKey: '', //insert IAM user creds
        region: '' //insert region
    });
    return new Promise((resolve, reject) => {
        const params = {
            KeyId: '', // insert CMK identifier to use for encryption. You can use the key ID or Amazon Resource Name (ARN) of the CMK, or the name or ARN of an alias that refers to the CMK.
            Plaintext: buffer// Target data to encrypt.
        };
        kms.encrypt(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.CiphertextBlob);
            }
        });
    });
}
