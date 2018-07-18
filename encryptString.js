encrypt(new Buffer('string','utf-8')).then(decrypt).then(plaintext => {
    console.log(plaintext.toString('utf-8'));
});
