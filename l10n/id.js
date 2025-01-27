OC.L10N.register(
    "user_ldap",
    {
    "The Base DN appears to be wrong" : "Base DN tampaknya salah",
    "Testing configuration…" : "Melakukan test konfigurasi",
    "Configuration incorrect" : "Konfigurasi salah",
    "Configuration incomplete" : "Konfigurasi tidak lengkap",
    "Configuration OK" : "Konfigurasi Oke",
    "Select groups" : "Pilih grup",
    "Select object classes" : "Pilik kelas obyek",
    "Please check the credentials, they seem to be wrong." : "Mohon periksa kredensial, nampaknya ada kesalahan.",
    "Please specify the port, it could not be auto-detected." : "Mohon tentukan port karena tidak terdeteksi secara otomatis.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN tidak terdeteksi secara otomatis, mohon periksa kembali kredensial, host dan port.",
    "Could not detect Base DN, please enter it manually." : "Tidak dapat mendeteksi Base DN, mohon masukkan secara manual.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "Tidak ada obyek ditemukan di Base DN yang diberikan. Mohon diperiksa kembali.",
    "More than 1,000 directory entries available." : "Lebih dari 1000 entri direktori tersedia",
    " entries available within the provided Base DN" : "entri tersedia didalam Base DN yang diberikan",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Terjadi kesalahan. Silakan periksa Base DN, serta pengaturan sambungan dan kredensial.",
    "Do you really want to delete the current Server Configuration?" : "Apakan Anda ingin menghapus Konfigurasi Server saat ini?",
    "Confirm Deletion" : "Konfirmasi Penghapusan",
    "Mappings cleared successfully!" : "Pemetaan berhasil dibersihkan!",
    "Error while clearing the mappings." : "Kesalahan saat membersihkan pemetaan.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Bind anonim tidak diizinkan. Mohon berikan sebuah User DN dan Password.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Kesalahan Operasi LDAP. Bind anonim tidak diizinkan.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Menyimpan gagal. Mohon pastikan basis data di Operasi. Muat Ulang sebelum melanjutkan.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Beralih modus akan mengaktifkan kueri LDAP secara otomatis. Hal ini memerlukan beberapa saat tergantung pada ukuran LDAP Anda. Apakah Anda tetap ingin beralih modus?",
    "Mode switch" : "Beralih modus",
    "Select attributes" : "Pilih atribut",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Pengguna tidak ditemukan. Mohon periksa atribut login dan nama pengguna Anda. Penyaring efektif (salin dan tempel berikut untuk validasi baris perintah):\n<br/>",
    "User found and settings verified." : "Pengguna ditemukan dan pengaturan terverifikasi.",
    "An unspecified error occurred. Please check the settings and the log." : "Terjadi kesalahan yang tidak disebutkan. Mohon periksa pengaturan dan log.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Penyaring pencarian tidak sah, kemungkinan karena masalah sintaks seperti jumlah kurung buka dan tutup tidak sama. Mohon diperiksa.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Terjadi kesalahan sambungan ke LDAP / AD, mohon periksa host, port dan kredensial.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Placeholder %uid tidak ada. Placeholder akan digantikan dengan nama login saat melakukan kueri LDAP / AD.",
    "Please provide a login name to test against" : "Mohon berikan nama login untuk mengujinya kembali",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Kotak grup telah dinonaktifkan, karena server LDAP / AD tidak mendukung keanggotaan.",
    "Server" : "Server",
    "Users" : "Pengguna",
    "Login Attributes" : "Atribut Login",
    "Groups" : "Grup",
    "The configuration is invalid: anonymous bind is not allowed." : "Konfigurasi tidak sah: bind anonim tidak diizinkan",
    "The configuration is valid and the connection could be established!" : "Konfigurasi valid dan koneksi dapat dilakukan!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Konfigurasi valid, tetapi Bind gagal. Silakan periksa pengaturan server dan kredensial.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Konfigurasi tidak sah. Silakan lihat log untuk rincian lebih lanjut.",
    "Failed to delete the server configuration" : "Gagal menghapus konfigurasi server",
    "Failed to clear the mappings." : "Gagal membersihkan pemetaan.",
    "No data specified" : "Tidak ada data yang ditetapkan",
    " Could not set configuration %s" : "Tidak dapat menyetel konfigurasi %s",
    "Action does not exist" : "Tidak ada tindakan",
    "_%s group found_::_%s groups found_" : ["%s grup ditemukan"],
    "_%s user found_::_%s users found_" : ["%s pengguna ditemukan"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Tidak mendeteksi atribut nama tampilan pengguna. Silakan menentukannya sendiri di pengaturan ldap lanjutan.",
    "Could not find the desired feature" : "Tidak dapat menemukan fitur yang diinginkan",
    "Invalid Host" : "Host tidak sah",
    "Test Configuration" : "Uji Konfigurasi",
    "Help" : "Bantuan",
    "Groups meeting these criteria are available in %s:" : "Grup yang memenuhi kriteria ini tersedia di %s:",
    "Only these object classes:" : "Hanya kelas obyek berikut:",
    "Only from these groups:" : "Hanya dari grup berikut:",
    "Search groups" : "Pencarian grup",
    "Available groups" : "Grup tersedia",
    "Selected groups" : "Grup terpilih",
    "Edit LDAP Query" : "Sunting Kueri LDAP",
    "LDAP Filter:" : "Penyaring LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Penyaring menentukan grup LDAP mana yang memiliki akses ke %s.",
    "Verify settings and count groups" : "Verifikasi setelan dan hitung grup",
    "When logging in, %s will find the user based on the following attributes:" : "Pada saat login, %s akan menemukan pengguna berdasarkan atribut berikut:",
    "LDAP / AD Username:" : "Nama pengguna LDAP / AD:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Izinkan login dengan nama pengguna LDAP / AD, baik berupa uid atau samaccountname, mereka akan terdeteksi.",
    "LDAP / AD Email Address:" : "Alamat Email LDAP / AD:",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Izinkan login dengan atribut email. Mail dan mailPrimaryAddress diperbolehkan.",
    "Other Attributes:" : "Atribut Lain:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Tetapkan penyaring yang akan diterapkan saat mencoba login. %%uid akan mengganti nama pengguna saat melakukan login. Contoh: \"uid=%%uid\"",
    "Test Loginname" : "Test Loginname",
    "Verify settings" : "Verifikasi setelan",
    "1. Server" : "1. Server",
    "%s. Server:" : "%s. Server:",
    "Add a new and blank configuration" : "Tambah konfigurasi kosong yang baru",
    "Copy current configuration into new directory binding" : "Salin konfigurasi saat ini kedalam direktori baru",
    "Delete the current configuration" : "Hapus konfigurasi saat ini",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Anda dapat mengabaikan protokol, kecuali Anda membutuhkan SSL. Lalu jalankan dengan ldaps://",
    "Port" : "Port",
    "Detect Port" : "Deteksi Port",
    "User DN" : "Pengguna DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN dari klien pengguna yang dengannya tautan akan diterapkan, mis. uid=agen,dc=contoh,dc=com. Untuk akses anonim, biarkan DN dan kata sandi kosong.",
    "Password" : "Sandi",
    "For anonymous access, leave DN and Password empty." : "Untuk akses anonim, biarkan DN dan Kata sandi kosong.",
    "One Base DN per line" : "Satu Base DN per baris",
    "You can specify Base DN for users and groups in the Advanced tab" : "Anda dapat menetapkan Base DN untuk pengguna dan grup dalam tab Lanjutan",
    "Detect Base DN" : "Deteksi Base DN",
    "Test Base DN" : "Uji Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Mencegah permintaan LDAP otomatis. Berguna untuk setelan yang lebih besar, tapi memerlukan beberapa pengetahuan LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Masukkan penyaring LDAP secara manual (direkomendasikan untuk direktori yang besar)",
    "%s access is limited to users meeting these criteria:" : "%s akses dibatasi untuk pengguna yang memenuhi kriteria berikut:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Kelas obyek yang umum untuk pengguna adalah organizationalPerson, person, user, dan inetOrgPerson. Jika Anda tidak yakin kelas obyek mana yang akan dipilih, silakan konsultasi dengan admin direktori Anda.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Penyaring menentukan pengguna LDAP mana yang memiliki akses ke %s.",
    "Verify settings and count users" : "Verifikasi setelan dan jumlah pengguna",
    "Saving" : "Menyimpan",
    "Back" : "Kembali",
    "Continue" : "Lanjutkan",
    "LDAP" : "LDAP",
    "Expert" : "Lanjutan",
    "Advanced" : "Lanjutan",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Peringatan:</b> Aplikasi user_ldap dan user_webdavauth tidak kompatibel. Anda mungkin akan mengalami perilaku yang tidak terduga. Silakan minta administrator Anda untuk menonaktifkan salah satunya.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Peringatan:</b> Modul LDAP PHP tidak terpasang, perangkat tidak akan bekerja. Silakan minta administrator sistem untuk memasangnya.",
    "Connection Settings" : "Pengaturan Koneksi",
    "Configuration Active" : "Konfigurasi Aktif",
    "When unchecked, this configuration will be skipped." : "Jika tidak dicentang, konfigurasi ini akan dilewati.",
    "Backup (Replica) Host" : "Cadangkan (Replika) Host",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Berikan pilihan host cadangan. Harus merupakan replika dari server LDAP/AD utama.",
    "Backup (Replica) Port" : "Cadangkan (Replika) Port",
    "Disable Main Server" : "Nonaktifkan Server Utama",
    "Only connect to the replica server." : "Hanya terhubung ke server replika.",
    "Turn off SSL certificate validation." : "Matikan validasi sertifikat SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Tidak dianjurkan, gunakan ini hanya untuk percobaan! Jika koneksi hanya bekerja dengan opsi ini, impor sertifikat SSL milik server LDAP kedalam server %s Anda.",
    "Cache Time-To-Live" : "Cache Time-To-Live",
    "in seconds. A change empties the cache." : "dalam detik. perubahan mengosongkan cache",
    "Directory Settings" : "Pengaturan Direktori",
    "User Display Name Field" : "Bidang Tampilan Nama Pengguna",
    "The LDAP attribute to use to generate the user's display name." : "Atribut LDAP digunakan untuk menghasilkan nama tampilan pengguna.",
    "2nd User Display Name Field" : "Field tampilan nama user ke-2",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "Satu Pengguna Base DN per baris",
    "User Search Attributes" : "Atribut Pencarian Pengguna",
    "Optional; one attribute per line" : "Pilihan; satu atribut per baris",
    "Group Display Name Field" : "Bidang Tampilan Nama Grup",
    "The LDAP attribute to use to generate the groups's display name." : "Atribut LDAP digunakan untuk menghasilkan nama tampilan grup.",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "Satu Grup Base DN per baris",
    "Group Search Attributes" : "Atribut Pencarian Grup",
    "Group-Member association" : "Asosiasi Anggota-Grup",
    "Nested Groups" : "Grup Bersarang",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Ketika dihidupkan, grup yang berisi grup akan didukung. (Hanya bekerja jika atribut anggota grup berisi DN.)",
    "Paging chunksize" : "Paging chunksize",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Chunksize digunakan untuk pencarian paged LDAP yang mengembalikan hasil secara massal seperti enumerasi pengguna dan grup. (Atur dengan nilai 0 untuk menonaktifkan pencarian paged LDAP dalam situasi tersebut.)",
    "Special Attributes" : "Atribut Khusus",
    "Quota Field" : "Kolom Kuota",
    "Quota Default" : "Kuota Baku",
    "Email Field" : "Kolom Email",
    "User Home Folder Naming Rule" : "Aturan Penamaan Folder Home Pengguna",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Biarkan nama pengguna kosong (default). Atau tetapkan atribut LDAP/AD.",
    "Internal Username" : "Nama Pengguna Internal",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Secara default, nama pengguna internal akan dibuat dari atribut UUID. Hal ini untuk memastikan bahwa nama pengguna agar unik dan karakter tidak perlu dikonversi. Nama pengguna internal memiliki batasan hanya karakter ini yang diizinkan: [ a-zA-Z0-9_.@- ]. Karakter selain itu akan diganti dengan korespondensi ASCII mereka atau akan dihilangkan. Pada nama yang bentrok, sebuah angka akan ditambahkan dan ditingkatkan. Nama pengguna internal ini digunakan untuk mengenali sebuah nama secara internal. Itu juga dipakai sebagai nama folder home default, serta sebagai bagian dari URL remote untuk semua instansi layanan *DAV. Dengan pengaturan ini, perilaku default dapat diganti. Untuk mewujudkan perilaku seperti sebelum ownCloud 5, masukkan atribut nama tampilan pengguna di bidang isian berikut. Tinggalkan kosong untuk menggunakan perilaku default. Perubahan hanya akan terlihat untuk pengguna LDAP yang baru dipetakan (ditambahkan).",
    "Internal Username Attribute:" : "Atribut Nama Pengguna Internal:",
    "Override UUID detection" : "Timpa deteksi UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Secara default, atribut UUID akan secara otomatis terdeteksi. Atribut UUID ini digunakan untuk mengidentifikasi pengguna dan grup LDAP yang diragukan. Nama pengguna internal juga akan dibuat berdasarkan UUID jika belum ditetapkan di atas. Anda dapat mengganti pengaturan dan meluluskan atribut pilihan Anda. Anda harus memastikan bahwa atribut pilihan Anda dapat diambil untuk pengguna dan grup, serta haruslah unik. Biarkan kosong untuk perilaku default. Perubahan akan berpengaruh hanya pada pengguna dan grup LDAP yang baru dipetakan (ditambahkan).",
    "UUID Attribute for Users:" : "Atribut UUID untuk Pengguna:",
    "UUID Attribute for Groups:" : "Atribut UUID untuk Grup:",
    "Username-LDAP User Mapping" : "Pemetaan Pengguna LDAP-Nama pengguna",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Nama pengguna digunakan untuk menyimpan dan menetapkan (meta) data. Dalam rangka untuk mengidentifikasi dan mengenali pengguna secara tepat, setiap pengguna LDAP akan memiliki nama pengguna internal. Hal ini memerlukan sebuah pemetaan dari nama pengguna ke pengguna LDAP. Nama pengguna yang dibuat akan dipetakan pada UUID pengguna LDAP. Selain itu, DN akan di cache untuk mengurangi interaksi LDAP, tetapi tidak digunakan untuk identifikasi. Jika DN berubah, perubahan akan ditemukan. Nama pengguna internal digunakan secara menyeluruh. Membersihkan pemetaan akan mempengaruhi semua konfigurasi LDAP! JANGAN PERNAH MENGHAPUS PEMETAAN PADA LINGKUNGAN PRODUKSI, hanya gunakan dalam tahap uji coba dan pengujian.",
    "Clear Username-LDAP User Mapping" : "Bersihkan Pemetaan Pengguna LDAP-Nama pengguna",
    "Clear Groupname-LDAP Group Mapping" : "Bersihkan Pemetaan Grup LDAP-Nama grup"
},
"nplurals=1; plural=0;");
