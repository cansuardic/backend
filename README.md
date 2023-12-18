## Mekanbul Backend
- Projede mongodb cloud adresinden cluster ve database oluşturulma işlemi MongoDB Atlas üzerinden oluşturulmuş ve ilgili kullanıcı adı ve parolasına sahip db uri'ı projeye eklenmiştir.
- DB bağlantısı dünyaya açık (0.0.0.0/0) adresi ile tanımlanmış olup herhangi bir yetki veya IP sınırlaması koyulmamıştır

## Projenin Çalıştırılması
- Projede .gitignore dosyası ile node_modules Git repositorysine gönderilmemiştir, bu sebeple öncelikle `npm i`komutu kullanılarak node_modules yaratılır
- İlgili node_modules yükleme işlemi tamamlandıktan sonra, `npm run start`komutu ile proje çalıştırılır.

Bu komutlar sonrasında "mongo-uri" adrese bağlandı yazısı görüldüğünde proje çalışmaktadır.
