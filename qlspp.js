class sanpham {
    constructor(ngay, cholayhang, loaihang, dongia, soluong,tongtien) {
        this.ngay = ngay;
        this.cholayhang = cholayhang;
        this.loaihang = loaihang;
        this.dongia = dongia;
        this.soluong = soluong;
        this.tongtien = tongtien;
    }
}
function hienthisp1(as) {
    let bug = "";
    for (let i = 0; i < as.length; i++) {
        bug += '<tr>' +
        '<td class="ac">'+(i+1)+'</td>'+
        '<td class="ac">'+as[i].ngay+'</td>'+
        '<td class="ac">'+as[i].cholayhang+'</td>'+
        '<td class="ac">'+as[i].loaihang +'</td>'+
        '<td class="ac">'+as[i].dongia+'</td>'+
        '<td class="ac">'+as[i].soluong+'</td>'+
        '<td class="ac">'+as[i].tongtien+'</td>'+
        "<td class='ac'> <button onclick='sua("+i+")'>Edit</button></td>"+
        "<td class='ac'> <button onclick='xoa("+i+")' >Delete</button></td>"+
            "</tr>"
    }
    document.getElementById('result').innerHTML=bug;
}
function demo(){
    document.getElementById("index").value = "";
    document.getElementById("ngaythang").value="";
    document.getElementById("cho").value="";
    document.getElementById("hang").value="";
    document.getElementById("gia").value="";
    document.getElementById("khoiluong").value="";
    document.getElementById("tongtien").value="";
}

function aa(){
    let h4 =document.getElementById("gia").value;
let h5 =document.getElementById("khoiluong").value;
   c = h4 * h5;
   document.getElementById("tongtien").value = c;
}
let luusanpham = [];
function addsp() {
    let h1 =document.getElementById("ngaythang").value;
    let h2 =document.getElementById("cho").value;
    let h3 =document.getElementById("hang").value;
    let h4 =document.getElementById("gia").value;
    let h5 =document.getElementById("khoiluong").value;
    let h6 =document.getElementById("tongtien").value;
    if(h1==""||h2==""||h3==""||h4==""||h5==""||h6==""){
        alert('Chưa nhập đủ thông tin')
    }else{
        var newsp = new sanpham();
    newsp.ngay = h1;
    newsp.cholayhang =h2
    newsp.loaihang = h3
    newsp.dongia = h4
    newsp.soluong = h5
    newsp.tongtien = h6
    luusanpham.push(newsp);
    }
    hienthisp1(luusanpham);
    demo()
}


function xoa(index) {
    luusanpham.splice(index,1)
    hienthisp1(luusanpham);
}

function sua(index){
    document.getElementById("index").value=index;
    document.getElementById("ngaythang").value=luusanpham[index].ngay;
    document.getElementById("cho").value=luusanpham[index].cholayhang;
    document.getElementById("hang").value=luusanpham[index].loaihang;
    document.getElementById("gia").value=luusanpham[index].dongia;
    document.getElementById("khoiluong").value=luusanpham[index].soluong;
    document.getElementById("tongtien").value=luusanpham[index].tongtien;
}
 function capnhatsp(){
    let index = document.getElementById("index").value;
    luusanpham[index].ngay=document.getElementById("ngaythang").value;
    luusanpham[index].cholayhang=document.getElementById("cho").value;
    luusanpham[index].loaihang=document.getElementById("hang").value;
    luusanpham[index].dongia=document.getElementById("gia").value;
    luusanpham[index].soluong=document.getElementById("khoiluong").value;
    luusanpham[index].tongtien=document.getElementById("tongtien").value;
    hienthisp1(luusanpham);
    demo();
 }
function timkiem(){
    let a = document.getElementById("nhaptimkiem").value;
    if(a==''){
        alert('Chưa nhập tên chợ cần tìm')
    }else{
        let dssp=[];
        let index = -1;
        for(i=0;i<luusanpham.length;i++){
            if(a==luusanpham[i].cholayhang){
                dssp.push(luusanpham[i])
                index = i;
            }
        }
        if(index!=-1){
             hienthisp1(dssp);
            }  else {
                alert('Không tìm thấy');
            }   
        }
    }
    function hienthilai(){
        hienthisp1(luusanpham)
    }
    
   

