        var btn_menu1 = document.getElementById("opc01");
        var ptop01 = document.getElementById("opc01_top");
        var pbot01 = document.getElementById("opc01_bottom");
        var btn_menu2 = document.getElementById("opc02");
        var ptop02 = document.getElementById("opc02_top");
        var pbot02 = document.getElementById("opc02_bottom");
        var btn_menu3 = document.getElementById("opc03");
        var ptop03 = document.getElementById("opc03_top");
        var pbot03 = document.getElementById("opc03_bottom");

        var btn1 = document.getElementById("btn_sgt1");
        var btn2 = document.getElementById("btn_sgt2");
        var btn3 = document.getElementById("btn_sgt3");
        var btn4 = document.getElementById("btn_back1");
        var btn5 = document.getElementById("btn_back2");
        var btn6 = document.getElementById("btn_back3");

        var mobst01 = document.getElementById("ba_01");
        var mobst02 = document.getElementById("ba_02");
        var mobst03 = document.getElementById("ba_03");
        var mobstline01 = document.getElementById("lb01");
        var mobstline02 = document.getElementById("lb02");

        var titulo_section = document.getElementById("section_name");
        var menu_inf = document.getElementById("menu_inferior");

        var iframecarga = document.getElementById("modulo_carga");


        function active_state_01() {
            btn_menu1.classList.remove("active");
            btn_menu2.classList.add("active");
            btn_menu3.classList.remove("active");
            btn1.style.display = "none";
            btn4.style.display = "none";
            btn2.style.display = "flex";
            btn5.style.display = "flex";
            ptop01.style.display = "none";
            pbot01.style.display = "none";
            ptop02.style.display = "flex";
            pbot02.style.display = "flex";
            mobst02.classList.add("active_ba");
            mobstline01.classList.add("active_ba");
            titulo_section.innerHTML = "Datos contacto";
            iframecarga.src = "../pages/datos_contacto.html";
        }

        function active_state_02() {
            btn_menu1.classList.remove("active");
            btn_menu2.classList.remove("active");
            btn_menu3.classList.add("active");
            btn2.style.display = "none";
            btn5.style.display = "none";
            btn3.style.display = "flex";
            btn6.style.display = "none";
            ptop02.style.display = "none";
            pbot02.style.display = "none";
            ptop03.style.display = "flex";
            pbot03.style.display = "flex";
            mobst03.classList.add("active_ba");
            mobstline02.classList.add("active_ba");
            titulo_section.innerHTML = "¡Gracias por tu tiempo!";
            menu_inf.style.justifyContent = "center";
            iframecarga.src = "../pages/resumen.html";
        }

        function back_state_01() {
            window.location.href = "https://cl.senegocia.com/";

        }

        function back_state_02() {
            btn_menu1.classList.add("active");
            btn_menu2.classList.remove("active");
            btn_menu3.classList.remove("active");
            btn1.style.display = "flex";
            btn4.style.display = "flex";
            btn2.style.display = "none";
            btn5.style.display = "none";
            ptop01.style.display = "flex";
            pbot01.style.display = "flex";
            ptop02.style.display = "none";
            pbot02.style.display = "none";
            mobst02.classList.remove("active_ba");
            mobstline01.classList.remove("active_ba");
            titulo_section.innerHTML = "Datos empresa";
            iframecarga.src = "../pages/datos_comprador.html";
        }

        function back_state_03() {
            btn_menu1.classList.remove("active");
            btn_menu2.classList.add("active");
            btn_menu3.classList.remove("active");
            btn2.style.display = "flex";
            btn5.style.display = "flex";
            btn3.style.display = "none";
            btn6.style.display = "none";
            ptop02.style.display = "flex";
            pbot02.style.display = "flex";
            ptop03.style.display = "none";
            pbot03.style.display = "none";
            mobst03.classList.remove("active_ba");
            mobstline02.classList.remove("active_ba");
            titulo_section.innerHTML = "Datos contacto";
        }