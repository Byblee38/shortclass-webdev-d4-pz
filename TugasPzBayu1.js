var cariLagi = true;
while (cariLagi)
{

const negara = ['Indonesia', 'Malaysia', 'Singapura', 'Laos', 'Kamboja', 'Filipina', 'Vietnam', 'Thailand', 'Brunei Darussalam'];
var jawaban;


function cariNegara(keyword)
    {
        var hasil = negara.find(country => country.toLowerCase().includes(keyword.toLowerCase()));
        jawaban = hasil ? 'Ada' : 'Tidak Ada';
    }

cariNegara(prompt('Masukan Nama Negara Yang Anda Cari : '));

alert('Negara Yang Anda Cari ' + jawaban);
cariLagi = confirm('Cari Negara Lain?');
}