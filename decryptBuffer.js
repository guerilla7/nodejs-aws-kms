function decrypt(buffer) {
    const kms = new aws.KMS({
        accessKeyId: '',// insert access key ID
        secretAccessKey: '',// insert secret key
        region: '' // insert region
    });
    return new Promise((resolve, reject) => {
        const params = {
            CiphertextBlob: buffer// Target data to dencrypt.
        };
        kms.decrypt(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Plaintext);
            }
        });
    });
}
