function previewEmail(){

const nama = document.getElementById("nama").value || "Rey";
const email = document.getElementById("email").value || "reyclouddev@gmail.com";
const username = document.getElementById("username").value || "acuyykernzz";
const game = document.getElementById("game").value || "Drag Drive Simulator";
const produk = document.getElementById("produk").value || "Premium Accessories";
const harga = document.getElementById("harga").value || "Rp6.313";
const status = document.getElementById("status").value;

const invoice = "RCD-" + Math.random().toString(36).substring(2,10).toUpperCase();

let badgeColor = "#3b82f6";
let badgeText = "📦 Sedang Diproses";
let message = "Pesanan kamu sedang diproses. Mohon tunggu beberapa menit.";

if(status === "success"){
badgeColor = "#22c55e";
badgeText = "✅ Pesanan Berhasil";
message = "Pesanan telah berhasil diproses. Terima kasih telah berbelanja di ReyCloudDev.";
}

if(status === "failed"){
badgeColor = "#ef4444";
badgeText = "❌ Pesanan Gagal";
message = "Maaf, pesanan tidak dapat diproses. Silakan hubungi admin.";
}

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;background:#f5f5f5;font-family:Arial;padding:40px;">

<table width="100%">
<tr>
<td align="center">

<table width="620" style="background:white;border-radius:18px;padding:35px;">

<tr>
<td align="center">

<h1 style="color:#22c55e;margin:0;">
⚡ ReyCloudDev
</h1>

<p style="color:#888;">
Top Up Roblox & Digital Store
</p>

</td>
</tr>

<tr>
<td>

<h2>Halo, ${nama} 👋</h2>

<div style="
background:${badgeColor};
color:white;
padding:18px;
border-radius:12px;
font-size:22px;
font-weight:bold;
text-align:center;
">

${badgeText}

</div>

<p style="margin-top:25px;color:#555;">
${message}
</p>

<hr>

<h3>Detail Pesanan</h3>

<table width="100%" cellpadding="10">

<tr>
<td>ID Invoice</td>
<td align="right"><b>${invoice}</b></td>
</tr>

<tr>
<td>Email</td>
<td align="right">${email}</td>
</tr>

<tr>
<td>Username Roblox</td>
<td align="right">${username}</td>
</tr>

<tr>
<td>Game</td>
<td align="right">${game}</td>
</tr>

<tr>
<td>Produk</td>
<td align="right">${produk}</td>
</tr>

<tr>
<td>Total</td>
<td align="right"><b>${harga}</b></td>
</tr>

</table>

<div style="text-align:center;margin-top:35px;">

<a href="#"
style="
display:inline-block;
padding:15px 35px;
background:#22c55e;
border-radius:10px;
text-decoration:none;
color:white;
font-weight:bold;
">

Lihat Detail Pesanan

</a>

</div>

<p style="
margin-top:40px;
font-size:13px;
color:#999;
text-align:center;
">

Email ini dikirim otomatis oleh sistem ReyCloudDev.<br>
Jangan membalas email ini.

</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;

const frame = document.getElementById("previewFrame");

frame.srcdoc = html;

}

previewEmail();
