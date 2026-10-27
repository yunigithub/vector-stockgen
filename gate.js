// ============================================================
// GERBANG LANDING PAGE — Vector Stock Generator
// GANTI PASSWORD DI BARIS BAWAH INI sebelum publish.
// Caranya: ganti tulisan 'GANTI-DENGAN-PASSWORD-KAMU' dengan password pilihan kamu.
// Satu file ini dipakai semua halaman (Generator, Vector Studio, Pola, Video, Aset).
// ------------------------------------------------------------
// JUJUR SOAL KEAMANAN: password ini terlihat di source code halaman,
// jadi pakai password KHUSUS buat gerbang ini saja, jangan password akun penting.
// Gerbang ini penghalang kasual buat kalangan sendiri (orang awam tidak bisa
// lewat tanpa password), BUKAN pengaman serius. Sekali dibuka di satu tab,
// semua halaman ikut terbuka selama tab itu masih dibuka.
// ============================================================
var GATE_PASSWORD = 'nogratis';

(function(){
  var unlocked = false;
  try { unlocked = window.sessionStorage && sessionStorage.getItem('vsg_unlocked') === '1'; } catch(e){}
  if (unlocked) return;

  var css = '#gate-overlay{position:fixed;inset:0;z-index:99999;background:#0b0c10;display:flex;align-items:center;justify-content:center;padding:20px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}'
    + '.gate-card{width:min(420px,100%);background:#1a1a20;border:1px solid #333;border-radius:16px;padding:32px 28px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.5)}'
    + '.gate-card h1{margin:0 0 8px;font-size:26px;letter-spacing:-.02em;color:#fff}'
    + '.gate-card h1 span{color:#f5a623}'
    + '.gate-card p{margin:0 0 18px;font-size:14px;line-height:1.6;color:#b9b9c4}'
    + '#gate-form{display:flex;flex-direction:column;gap:10px}'
    + '#gate-pass{width:100%;padding:12px 14px;border-radius:10px;border:1px solid #444;background:#101014;color:#fff;font-size:15px;text-align:center;box-sizing:border-box}'
    + '#gate-form button{border:0;border-radius:999px;padding:12px 16px;font-size:15px;font-weight:700;cursor:pointer;background:#f5a623;color:#111}'
    + '#gate-err{min-height:18px;margin:10px 0 0;font-size:13px;color:#ff6b6b}'
    + '.gate-note{margin:14px 0 0;font-size:12px;color:#777}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var ov = document.createElement('div');
  ov.id = 'gate-overlay';
  ov.innerHTML = '<div class="gate-card"><h1>VECTOR <span>STOCK</span> GENERATOR</h1>'
    + '<p>Perkakas stok buat kalangan sendiri. Masukkan password untuk lanjut.</p>'
    + '<form id="gate-form"><input id="gate-pass" type="password" placeholder="Password" autocomplete="off">'
    + '<button type="submit">Masuk</button></form>'
    + '<p id="gate-err"></p>'
    + '<p class="gate-note">Lupa password? Tanya yang punya situs.</p></div>';
  document.body.appendChild(ov);

  var form = document.getElementById('gate-form');
  var input = document.getElementById('gate-pass');
  var err = document.getElementById('gate-err');
  if (input && input.focus) input.focus();
  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    if (input.value === GATE_PASSWORD) {
      try { sessionStorage.setItem('vsg_unlocked', '1'); } catch(e){}
      if (ov.remove) ov.remove();
      else if (ov.parentNode) ov.parentNode.removeChild(ov);
    } else {
      err.textContent = 'Password salah, coba lagi.';
      input.value = '';
      if (input.focus) input.focus();
    }
  });
})();
