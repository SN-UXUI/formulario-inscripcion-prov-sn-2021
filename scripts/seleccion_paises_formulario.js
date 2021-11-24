var reg = document.getElementById("region");
var reg_st = document.getElementById("reg_state");
var prov = document.getElementById("provincia");
var prov_st = document.getElementById("prov_state");
var comu = document.getElementById("comuna");
var comu_st = document.getElementById("comu_state");
var rut = document.getElementById("rut");
var razon = document.getElementById("razon_social");
var nom_fan = document.getElementById("nombre_fan");
var gir = document.getElementById("giro");

var select_01 = document.getElementById("sel01");
var select_02 = document.getElementById("sel02");
var select_03 = document.getElementById("sel03");

var seleccion_pais = document.getElementById("select_pais");


function listering() {
    var select_valor = document.forms[0].select_pais.value;
    if (select_valor == 1) {
        reg.innerHTML = "Provincia<b>*</b>";
        reg_st.innerHTML = "Seleccione una provincia";
        prov.innerHTML = "Municipio<b>*</b>";
        prov_st.innerHTML = "Seleccione un municipio";
        select_03.style.display = "flex";
        comu.innerHTML = "Ciudad<b>*</b>";
        comu_st.innerHTML = "Seleccione una ciudad";
        rut.innerHTML = "CUIT";
        gir.innerHTML = "Giro <b>*</b>";
        nom_fan.innerHTML = "Nombre comercial<b>*</b>";
    }
    if (select_valor == 2) {
        reg.innerHTML = "Región<b>*</b>";
        reg_st.innerHTML = "Seleccione una región";
        prov.innerHTML = "Provincia<b>*</b>";
        select_03.style.display = "flex";
        prov_st.innerHTML = "Seleccione un provincia";
        comu.innerHTML = "Comuna<b>*</b>";
        comu_st.innerHTML = "Seleccione una comuna";
        rut.innerHTML = "RUT<b>*</b>";
        gir.innerHTML = "Giro<b>*</b>";
        nom_fan.innerHTML = "Nombre fantasía<b>*</b>";
    }
    if (select_valor == 3) {
        reg.innerHTML = "Departamento <b>*</b>";
        reg_st.innerHTML = "Seleccione un departamento";
        prov.innerHTML = "Municipio <b>*</b>";
        prov_st.innerHTML = "Seleccione un municipio";
        select_03.style.display = "none";
        comu.innerHTML = "Comuna <b>*</b>";
        comu_st.innerHTML = "Seleccione una comuna";
        rut.innerHTML = "NIT Empresa <b>*</b>";
        gir.innerHTML = "Actividad comercial<b>*</b>";
        nom_fan.innerHTML = "Nombre comercial<b>*</b>";
    }
    if (select_valor == 4) {
        reg.innerHTML = "Estado<b>*</b>";
        reg_st.innerHTML = "Seleccione un estado";
        prov.innerHTML = "Provincia<b>*</b>";
        select_03.style.display = "flex";
        prov_st.innerHTML = "Seleccione una provincia";
        comu.innerHTML = "Ciudad<b>*</b>";
        comu_st.innerHTML = "Seleccione una ciudad";
        rut.innerHTML = "Identificador Tributario<b>*</b>";
    }
    if (select_valor == 5) {
        reg.innerHTML = "Departamento<b>*</b>";
        reg_st.innerHTML = "Seleccione un departamento";
        prov.innerHTML = "Distrito<b>*</b>";
        select_03.style.display = "flex";
        prov_st.innerHTML = "Seleccione un distrito";
        comu.innerHTML = "Ciudad<b>*</b>";
        comu_st.innerHTML = "Seleccione una ciudad";
        rut.innerHTML = "RUC<b>*</b>";
    }
    if (select_valor == 6) {
        reg.innerHTML = "Departamento<b>*</b>";
        reg_st.innerHTML = "Seleccione un departamento";
        prov.innerHTML = "Provincia<b>*</b>";
        select_03.style.display = "none";
        prov_st.innerHTML = "Seleccione una provincia";
        comu.innerHTML = "Ciudad<b>*</b>";
        comu_st.innerHTML = "Seleccione una ciudad";
        rut.innerHTML = "RUC Empresa<b>*</b>";
        gir.innerHTML = "Actividad comercial<b>*</b>";
        nom_fan.innerHTML = "Nombre comercial<b>*</b>";
    }
}

function selecion_argentina() {
    reg.innerHTML = "Provincia<b>*</b>";
    reg_st.innerHTML = "Seleccione un provincia";
    prov.innerHTML = "Municipio<b>*</b>";
    prov_st.innerHTML = "Seleccione un municipio";
    select_03.style.display = "flex";
    comu.innerHTML = "Ciudad<b>*</b>";
    comu_st.innerHTML = "Seleccione una ciudad";
    rut.innerHTML = "CUIT";
    gir.innerHTML = "Giro <b>*</b>";
    nom_fan.innerHTML = "Nombre comercial<b>*</b>";
}

function selecion_chile() {
    reg.innerHTML = "Región<b>*</b>";
    reg_st.innerHTML = "Seleccione un región";
    prov.innerHTML = "Provincia<b>*</b>";
    select_03.style.display = "flex";
    prov_st.innerHTML = "Seleccione un provincia";
    comu.innerHTML = "Comuna<b>*</b>";
    comu_st.innerHTML = "Seleccione una comuna";
    rut.innerHTML = "RUT<b>*</b>";
    gir.innerHTML = "Giro<b>*</b>";
    nom_fan.innerHTML = "Nombre fantasía<b>*</b>";
}

function selecion_colombia() {
    reg.innerHTML = "Departamento <b>*</b>";
    reg_st.innerHTML = "Seleccione un departamento";
    prov.innerHTML = "Municipio <b>*</b>";
    prov_st.innerHTML = "Seleccione un municipio";
    select_03.style.display = "none";
    comu.innerHTML = "Comuna <b>*</b>";
    comu_st.innerHTML = "Seleccione una comuna";
    rut.innerHTML = "NIT Empresa <b>*</b>";
    gir.innerHTML = "Actividad comercial<b>*</b>";
    nom_fan.innerHTML = "Nombre comercial<b>*</b>";
}

function selecion_ecuador() {
    reg.innerHTML = "Estado<b>*</b>";
    reg_st.innerHTML = "Seleccione un estado";
    prov.innerHTML = "Provincia<b>*</b>";
    select_03.style.display = "flex";
    prov_st.innerHTML = "Seleccione un provincia";
    comu.innerHTML = "Ciudad<b>*</b>";
    comu_st.innerHTML = "Seleccione una ciudad";
    rut.innerHTML = "Identificador Tributario<b>*</b>";
}

function selecion_paraguay() {
    reg.innerHTML = "Departamento<b>*</b>";
    reg_st.innerHTML = "Seleccione un departamento";
    prov.innerHTML = "Distrito<b>*</b>";
    select_03.style.display = "flex";
    prov_st.innerHTML = "Seleccione un distrito";
    comu.innerHTML = "Ciudad<b>*</b>";
    comu_st.innerHTML = "Seleccione una ciudad";
    rut.innerHTML = "RUC<b>*</b>";
}

function selecion_peru() {
    reg.innerHTML = "Departamento<b>*</b>";
    reg_st.innerHTML = "Seleccione un departamento";
    prov.innerHTML = "Provincia<b>*</b>";
    select_03.style.display = "none";
    prov_st.innerHTML = "Seleccione un provincia";
    comu.innerHTML = "Ciudad<b>*</b>";
    comu_st.innerHTML = "Seleccione una ciudad";
    rut.innerHTML = "RUC Empresa<b>*</b>";
    gir.innerHTML = "Actividad comercial<b>*</b>";
    nom_fan.innerHTML = "Nombre comercial<b>*</b>";
}