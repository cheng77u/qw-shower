var QRCode = require('qrcode');

QRCode.toString('https://cheng77u.github.io/wuziqi/', { type: 'terminal' }, function (err, data) {
  console.log(data);
});