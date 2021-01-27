//constants: 
//http://physics.nist.gov/cgi-bin/cuu/Category?view=html&Universal.x=81&Universal.y=7   
var epsilon0 = 8.854187817e-12; //electric constant F m-1
var z0 = 376.730313461; //ohm, characteristic impedance of vacuum 
var u0 = 12.566370614e-7; // 4 pi, magnetic constant 
var c0 = 299792458; //m.s-1, speed of light in vacuum 
var e = 1.6021766208e-19; //C, elementary charge
var mu = 1.660539040e-27; //kg, atomic mass constant 

var muc2 = 931.4940954; //atomic mass constant energy equivalent in MeV


function circulating_freq_e() {
    var C = document.getElementById("circumference").value;   
    document.getElementById("f_circulating").value = c0/C/1e6;
}

function harmonic_number(){
    circulating_freq_e();
    var cf = document.getElementById("f_circulating").value; 
    var f = document.getElementById("f_main_ring").value;    
    document.getElementById("harmonic_number").value =Math.floor(f/cf);
 
}

function single_bunch_charge(){
    var I_average= document.getElementById("average_current").value; 
    var fill_rate= document.getElementById("fill_rate_main_ring").value; 

    var trans_rate_linac = document.getElementById("linac_transmission_rate").value;
    var trans_rate_booster = document.getElementById("booster_transmission_rate").value;

    
    circulating_freq_e();
    harmonic_number();
    var cf = document.getElementById("f_circulating").value; 
    var h=document.getElementById("harmonic_number").value;

    var Q_booster=I_average*1e-3/(cf*1e6*h*fill_rate*0.01*trans_rate_booster*0.01)*1e9;
    var Q_gun=Q_booster/(trans_rate_linac*0.01);
    document.getElementById("single_bunch_charge_booster").value =Q_booster;
    document.getElementById("single_bunch_charge_gun").value =Q_gun;
    
}

function reset(){
    document.getElementById("circumference").value = 800;
    document.getElementById("f_main_ring").value = 500;
    document.getElementById("fill_rate_main_ring").value = 30;
    document.getElementById("average_current").value = 200;
    document.getElementById("booster_transmission_rate").value = 100;
    document.getElementById("linac_transmission_rate").value = 60;

}