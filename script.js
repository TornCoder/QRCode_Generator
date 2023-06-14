document.getElementById('generateBtn').addEventListener('click', function () {
    var text = document.getElementById('text').value.trim();

    if (text !== '') {
        var qr = new QRious({
            element: document.getElementById('qrCodeImg'),
            value: text,
            size: 200
        });

        document.getElementById('qrCode').style.display = 'block';
        document.getElementById('downloadBtn').href = document.getElementById('qrCodeImg').src;
    }
});