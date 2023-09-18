const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const nodemailer = require('nodemailer');
app.use(cors());


// MySQL bağlantısı
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 4000, // Corrected to an integer
    password: 'ammar_ib3',
    database: 'react'
  });
  
connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantısı başarısız oldu: ' + err.stack);
    return;
  }
  console.log('MySQL bağlantısı başarıyla kuruldu. Bağlantı kimliği: ' + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/kullanici-ekle', (req, res) => {
  const { email, phone, kullaniciAdi, sifre1 } = req.body;

  // MySQL sorgusu ile kullanıcıyı ekleyin
  const sql = 'INSERT INTO users (email, phone, kullaniciAdi, sifre) VALUES (?, ?, ?, ?)';
  connection.query(sql, [email, phone, kullaniciAdi, sifre1], (err, result) => {
    if (err) {
      console.error('Kullanıcı eklenirken bir hata oluştu: ' + err.stack);
      res.status(500).json({ error: 'Kullanıcı eklenirken bir hata oluştu' });
      return;
    }

    console.log('Kullanıcı başarıyla eklendi.');

    // Kullanıcıya e-posta gönderme işlemi
    const mailOptions = {
      from: 'ammaryasir8088@gmail.com',
      to: email, // Kullanıcının girdiği e-posta adresi
      subject: 'Giriş Bildirimi',
      text: `Merhaba ${kullaniciAdi}, Giriş yaptığınız için teşekkür ederiz.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('E-posta gönderme hatası: ' + error);
      } else {
        console.log('E-posta başarıyla gönderildi: ' + info.response);
      }
    });

    res.status(200).json({ message: 'Kullanıcı başarıyla eklendi' });
  });
});



// E-posta gönderme işlemi için bir transporter oluşturun
const transporter = nodemailer.createTransport({
    service: 'Gmail', // E-posta servis sağlayıcınıza göre ayarlayın
    auth: {
      user: 'ammaryasir8088@gmail.com', // E-posta adresiniz
      pass: 'leoiyrsrltiogyjs' // E-posta şifreniz
    }
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
