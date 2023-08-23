// // GIÁ TRỊ USER NHẬP
// var A=2;
// var B=1;
// var C=0.5

function tinhDiemKhuVuc(khuVuc){
    var khuVuc;
    if(khuVuc==="khuVucA")return 2;
    else if(khuVuc==="khuVucB")return 1;
    else if(khuVuc==="khuVucC")return 0.5;
    return 0;
        
    
}
function tinhDiemDoiTuong(doiTuong){
    var doiTuong;
    if(doiTuong==="doiTuong1")return 2.5;
    else if (doiTuong==="doiTuong2")return 1.5;
else if (doiTuong==="doiTuong3")return 1;
return 0;


   
    
}
function tongDiem(){
    var tongDiem=0;
    

   const diemChuan=document.getElementById("diemChuan").value*1;
   const doiTuong=document.getElementById("doiTuong").value;
    const khuVuc=document.getElementById("khuVuc").value;
   const diemMon1=document.getElementById("diemMon1").value*1;
   const diemMon2=document.getElementById("diemMon2").value*1;
  const diemMon3=document.getElementById("diemMon3").value*1;
  const diemDoiTuong=tinhDiemDoiTuong(doiTuong);
  const diemKhuVuc=tinhDiemKhuVuc(khuVuc);
  tongDiem=diemMon1+diemMon2+diemMon3+diemKhuVuc+diemDoiTuong;
    if (diemMon1==0||diemMon2==0||diemMon3==0){
        document.getElementById('ket-qua').innerHTML=`Điểm : ${tongDiem} Bạn đã rớt`
    }
    else if (tongDiem>=diemChuan){
        document.getElementById('ket-qua').innerHTML=`Điểm : ${tongDiem} Bạn đã đậu`
    }
    else{
        document.getElementById('ket-qua').innerHTML=` Bạn đã rớt`
    }
}

// tính tiền điện
function tienDien(){
    var soDien=document.getElementById("so-dien").value*1;
    var ten=document.getElementById("ho-ten").value;
    var tongTien;
    if (soDien<=50){
        tongTien=soDien*500;
    }
    else if(soDien<=100){
        tongTien=50*500+(soDien-50)*650;
    }
    else if (soDien<=200){
        tongTien=50*500+50*650+(soDien-100)*850;
    }
    else if(soDien<=350){
        tongTien=50*500+50*650+100*850+(soDien-200)*1100;
    }
    if(soDien>350){
        tongTien=50*500+50*650+100*850+150*1100+(soDien-350)*1300;
    }
    document.getElementById('tong-tien').innerHTML=`${ten} cần thanh toán :${tongTien.toLocaleString()}`;
}
// tiền thuế
function tinhThue(){
    var thuNhap=document.getElementById("thu-nhap").value*1;
    var phuThuoc=document.getElementById("phu-thuoc").value*1;
    var chiuThue=(thuNhap-4-phuThuoc*1.6)
    if(thuNhap<=60000000){
        chiuThue=(thuNhap-4000000-phuThuoc*1600000)*0.05;
    }
    else if(60000000<thuNhap<=120000000){
        chiuThue=(thuNhap-4e+6-phuThuoc*1600000)*0.01;
    }
    else if(120000000<thuNhap<=210000000){
        chiuThue=(thuNhap-4e+6-phuThuoc*1600000)*0.15;
    }
    else if(210000000<thuNhap<=384000000){
        chiuThue=(thuNhap-4e+6-phuThuoc*1600000)*0.2;
    }
    else if(384000000<thuNhap<=624000000){
        chiuThue=(thuNhap-4e+6-phuThuoc*1600000)*0.25;
    }
    else if(624000000<thuNhap<=960000000){
        chiuThue=(thuNhap-4e+6-phuThuoc*1600000)*0.3;
    }
    if(thuNhap>960000000){
        chiuThue=(thuNhap-4e+6-phuThuoc*1600000)*0.35;
    }
    document.getElementById("tinhThue").innerHTML=`Tiền thuế thu nhập cá nhân: ${chiuThue.toLocaleString()}`
}
// tính tiền cáp
