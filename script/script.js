// querySelector
const trash = document.querySelectorAll(".trash-btn")
const sysul = document.querySelector("#system-choise")
const sys_input_a = document.getElementById("genel")
const sys_input_b = document.getElementById("donem")
const sys_input_c = document.getElementById("ders")
const sys_input_d = document.getElementById("harf")
const funct_a = document.querySelector("#funct-a")
const funct_b = document.querySelector("#funct-b")
const funct_c = document.querySelector("#funct-c")
const funct_d = document.querySelector("#funct-d")
const lt_input_a = document.getElementById("aa")
const lt_input_b = document.getElementById("a_plus")
const d_s_a = document.querySelector("#a-dsayisi")
const d_s_b = document.querySelector("#b-dsayisi")
const d_s_c = document.querySelector("#c-dsayisi")
const d_s_d = document.querySelector("#d-dsayisi")
const aul = document.querySelector("#aul")
const bul = document.querySelector("#bul")
const cul = document.querySelector("#cul")
const dul = document.querySelector("#dul")
const c_tk = document.getElementById("c-tkredi")
const c_mo = document.getElementById("c-mort")
const b_tk = document.getElementById("b-tkredi")
const b_mo = document.getElementById("b-mort")
const c_a = document.getElementById("genel-conteiner")
const c_b = document.getElementById("donem-conteiner")
const c_c = document.getElementById("tekrar-conteiner")
const c_d = document.getElementById("harf-conteiner")
const a_ul = document.getElementById("a_ul")
const b_ul = document.getElementById("b_ul")
const c_ul = document.getElementById("c_ul")
const d_ul = document.getElementById("d_ul")
const first = document.getElementById("first-conteiner")
const second = document.getElementById("second-conteiner")

const system_choise = () => {
    if (sys_input_a.checked == true){
        funct_a.classList.add("active");
        funct_b.classList.remove("active");
        funct_c.classList.remove("active");
        funct_d.classList.remove("active")
    }
    if (sys_input_b.checked == true){
        funct_a.classList.remove("active");
        funct_b.classList.add("active");
        funct_c.classList.remove("active");
        funct_d.classList.remove("active");
    }
    if (sys_input_c.checked == true){
        funct_a.classList.remove("active");
        funct_b.classList.remove("active");
        funct_c.classList.add("active");
        funct_d.classList.remove("active");
    }
    if (sys_input_d.checked == true){
        funct_a.classList.remove("active");
        funct_b.classList.remove("active");
        funct_c.classList.remove("active");
        funct_d.classList.add("active");
    }
}

const grade_choise = (gc) => {
    const a_not_1 = document.querySelectorAll(`.a-d-1-${gc}-not`)
    const a_not_2 = document.querySelectorAll(`.a-d-2-${gc}-not`)
    const b_not_1 = document.querySelectorAll(`.b-d-1-${gc}-not`)
    const b_not_2 = document.querySelectorAll(`.b-d-2-${gc}-not`)
    const c_not_1 = document.querySelectorAll(`.c-d-1-${gc}-not`)
    const c_not_2 = document.querySelectorAll(`.c-d-2-${gc}-not`)
    if (lt_input_a.checked == true){
        a_not_1.setAttribute("style", "display: inline-block");
        b_not_1.setAttribute("style", "display: inline-block");
        c_not_1.setAttribute("style", "display: inline-block");
        a_not_2.setAttribute("style", "display: none");
        b_not_2.setAttribute("style", "display: none");
        c_not_2.setAttribute("style", "display: none");
    }
    if (lt_input_b.checked == true) {
        a_not_2.setAttribute("style", "display: inline-block");
        b_not_2.setAttribute("style", "display: inline-block");
        c_not_2.setAttribute("style", "display: inline-block");
        a_not_1.setAttribute("style", "display: none");
        b_not_1.setAttribute("style", "display: none");
        c_not_1.setAttribute("style", "display: none");
    } 

}

const yenile = () => {
    location.reload()
}

const refresh = () => {
    first.classList.add("active")
    second.classList.remove("active")
}

const ders_fixer = () => {
    while (aul.childElementCount > 0){
        aul.removeChild(aul.firstChild);
    }
    while (bul.childElementCount > 0){
        bul.removeChild(bul.firstChild);
    }
    while (cul.childElementCount > 0){
        cul.removeChild(cul.firstChild);
    }
    while (dul.childElementCount > 0){
        dul.removeChild(dul.firstChild);
    }
}

const ders_display = () => {
    ders_fixer()
    let a = Number(d_s_a.options[d_s_a.selectedIndex].value);
    let b = Number(d_s_b.options[d_s_b.selectedIndex].value);
    let c = Number(d_s_c.options[d_s_c.selectedIndex].value);
    let d = Number(d_s_d.options[d_s_d.selectedIndex].value);
    if(funct_a.classList.contains("active")){
        for (let i = 1; i < a+1; i++){
            let lia =
                            `
                            <li id="ali-${i}">
                                <label for="a-ders-${i}" style="width: 12%;">
                                    <input type="text" name="Ders ${i}" id="a-ders-${i}" style="width: 230%">
                                </label>
                                <select name="ders-${i}" id="a-d-${i}-kredi">
                                    <option selected="selected" value='0.5'>0,5 kredi</option>
                                    <option value='1'>1 kredi</option>
                                    <option value='1.5'>1,5 kredi</option>
                                    <option value='2'>2 kredi</option>
                                    <option value='2.5'>2,5 kredi</option>
                                    <option value='3'>3 kredi</option>
                                    <option value='3.5'>3,5 kredi</option>
                                    <option value='4'>4 kredi</option>
                                    <option value='4.5'>4,5 kredi</option>
                                    <option value='5'>5 kredi</option>
                                    <option value='5.5'>5,5 kredi</option>
                                    <option value='6'>6 kredi</option>
                                    <option value='6.5'>6,5 kredi</option>
                                    <option value='7'>7 kredi</option>
                                    <option value='7.5'>7,5 kredi</option>
                                    <option value='8'>8 kredi</option>
                                    <option value='8.5'>8,5 kredi</option>
                                    <option value='9'>9 kredi</option>
                                    <option value='9.5'>9,5 kredi</option>
                                    <option value='10'>10 kredi</option>
                                </select>
                                <select name="ders-${i}" id="a-d-1-${i}-not" class="a-d-1-not" style="width: 17%; display: inline-block;">
                                    <option selected="selected" value='4'>AA</option>
                                    <option value='3.75'>BA+</option>
                                    <option value='3.5'>BA</option>
                                    <option value='3.25'>BB+</option>
                                    <option value='3'>BB</option>
                                    <option value='2.75'>CB+</option>
                                    <option value='2.5'>CB</option>
                                    <option value='2.25'>CC+</option>
                                    <option value='2'>CC</option>
                                    <option value='1.75'>DC+</option>
                                    <option value='1.5'>DC</option>
                                    <option value='1.25'>DD+</option>
                                    <option value='1'>DD</option>
                                    <option value='0'>VF</option>
                                    <option value='0'>FF</option>
                                </select>
                                <select name="ders-${i}" id="a-d-2-${i}-not" class="a-d-2-not" style="width: 17%; display:none;">
                                    <option selected="selected" value='4'>A</option>
                                    <option value='3.7'>A-</option>
                                    <option value='3.3'>B+</option>
                                    <option value='3'>B</option>
                                    <option value='2.7'>B-</option>
                                    <option value='2.3'>C+</option>
                                    <option value='2'>C</option>
                                    <option value='1.7'>C-</option>
                                    <option value='1.3'>D+</option>
                                    <option value='1'>D</option>
                                    <option value='0'>F</option>
                                </select>
                            </li>
                            `
                            aul.insertAdjacentHTML("beforeend", lia)
        }
    }
    if(funct_b.classList.contains("active")){
        for (let i = 1; i < b+1; i++){
            let lib =
                            `
                            <li id="bli-${i}">
                                <label for="b-ders-${i}" style="width: 12%;">
                                    <input type="text" name="Ders ${i}" id="b-ders-${i}" style="width: 230%">
                                </label>
                                <select name="ders-${i}" id="b-d-${i}-kredi">
                                    <option selected="selected" value='0.5'>0,5 kredi</option>
                                    <option value='1'>1 kredi</option>
                                    <option value='1.5'>1,5 kredi</option>
                                    <option value='2'>2 kredi</option>
                                    <option value='2.5'>2,5 kredi</option>
                                    <option value='3'>3 kredi</option>
                                    <option value='3.5'>3,5 kredi</option>
                                    <option value='4'>4 kredi</option>
                                    <option value='4.5'>4,5 kredi</option>
                                    <option value='5'>5 kredi</option>
                                    <option value='5.5'>5,5 kredi</option>
                                    <option value='6'>6 kredi</option>
                                    <option value='6.5'>6,5 kredi</option>
                                    <option value='7'>7 kredi</option>
                                    <option value='7.5'>7,5 kredi</option>
                                    <option value='8'>8 kredi</option>
                                    <option value='8.5'>8,5 kredi</option>
                                    <option value='9'>9 kredi</option>
                                    <option value='9.5'>9,5 kredi</option>
                                    <option value='10'>10 kredi</option>
                                </select>
                                <select name="ders-${i}" id="b-d-1-${i}-not" class="b-d-1-not" style="width: 17%; display: inline-block;">
                                    <option selected="selected" value='4'>AA</option>
                                    <option value='3.75'>BA+</option>
                                    <option value='3.5'>BA</option>
                                    <option value='3.25'>BB+</option>
                                    <option value='3'>BB</option>
                                    <option value='2.75'>CB+</option>
                                    <option value='2.5'>CB</option>
                                    <option value='2.25'>CC+</option>
                                    <option value='2'>CC</option>
                                    <option value='1.75'>DC+</option>
                                    <option value='1.5'>DC</option>
                                    <option value='1.25'>DD+</option>
                                    <option value='1'>DD</option>
                                    <option value='0'>VF</option>
                                    <option value='0'>FF</option>
                                </select>
                                <select name="ders-${i}" id="b-d-2-${i}-not" class="b-d-2-not" style="width: 17%; display:none;">
                                    <option selected="selected" value='4'>A</option>
                                    <option value='3.7'>A-</option>
                                    <option value='3.3'>B+</option>
                                    <option value='3'>B</option>
                                    <option value='2.7'>B-</option>
                                    <option value='2.3'>C+</option>
                                    <option value='2'>C</option>
                                    <option value='1.7'>C-</option>
                                    <option value='1.3'>D+</option>
                                    <option value='1'>D</option>
                                    <option value='0'>F</option>
                                </select>
                            </li>
                            `
                            bul.insertAdjacentHTML("beforeend", lib)
        }
    }
    if(funct_c.classList.contains("active")){
        for (let i = 1; i < c+1; i++){
            let lic =
                            `
                            <li id="cli-${i}">
                                <label for="c-ders-${i}" style="width: 12%;">
                                    <input type="text" name="Ders ${i}" id="c-ders-${i}" style="width: 150%;">
                                </label>
                                <select name="ders-${i}" id="c-d-${i}-kredi">
                                    <option selected="selected" value='0.5'>0,5 kredi</option>
                                    <option value='1'>1 kredi</option>
                                    <option value='1.5'>1,5 kredi</option>
                                    <option value='2'>2 kredi</option>
                                    <option value='2.5'>2,5 kredi</option>
                                    <option value='3'>3 kredi</option>
                                    <option value='3.5'>3,5 kredi</option>
                                    <option value='4'>4 kredi</option>
                                    <option value='4.5'>4,5 kredi</option>
                                    <option value='5'>5 kredi</option>
                                    <option value='5.5'>5,5 kredi</option>
                                    <option value='6'>6 kredi</option>
                                    <option value='6.5'>6,5 kredi</option>
                                    <option value='7'>7 kredi</option>
                                    <option value='7.5'>7,5 kredi</option>
                                    <option value='8'>8 kredi</option>
                                    <option value='8.5'>8,5 kredi</option>
                                    <option value='9'>9 kredi</option>
                                    <option value='9.5'>9,5 kredi</option>
                                    <option value='10'>10 kredi</option>
                                </select>
                                <select name="ders-${i}" id="c1-d-1-${i}-not" class="c-d-1-not" style="width: 17%; display: inline-block;">
                                    <option selected="selected" value='4'>AA</option>
                                    <option value='3.75'>BA+</option>
                                    <option value='3.5'>BA</option>
                                    <option value='3.25'>BB+</option>
                                    <option value='3'>BB</option>
                                    <option value='2.75'>CB+</option>
                                    <option value='2.5'>CB</option>
                                    <option value='2.25'>CC+</option>
                                    <option value='2'>CC</option>
                                    <option value='1.75'>DC+</option>
                                    <option value='1.5'>DC</option>
                                    <option value='1.25'>DD+</option>
                                    <option value='1'>DD</option>
                                    <option value='0'>VF</option>
                                    <option value='0'>FF</option>
                                </select>
                                <select name="ders-${i}" id="c1-d-2-${i}-not" class="a-d-2-not" style="width: 17%; display:none;">
                                    <option selected="selected" value='4'>A</option>
                                    <option value='3.7'>A-</option>
                                    <option value='3.3'>B+</option>
                                    <option value='3'>B</option>
                                    <option value='2.7'>B-</option>
                                    <option value='2.3'>C+</option>
                                    <option value='2'>C</option>
                                    <option value='1.7'>C-</option>
                                    <option value='1.3'>D+</option>
                                    <option value='1'>D</option>
                                    <option value='0'>F</option>
                                </select>
                                <select name="ders-${i}" id="c2-d-1-${i}-not" class="c-d-1-not" style="width: 14%; display: inline-block;">
                                    <option selected="selected" value='4'>AA</option>
                                    <option value='3.5'>BA</option>
                                    <option value='3'>BB</option>
                                    <option value='2.5'>CB</option>
                                    <option value='2'>CC</option>
                                    <option value='1.5'>DC</option>
                                    <option value='1'>DD</option>
                                    <option value='0.5'>FD</option>
                                    <option value='0'>FF</option>
                                </select>
                                <select name="ders-${i}" id="c2-d-2-${i}-not" class="a-d-2-not" style="width: 14%; display:none;">
                                    <option selected="selected" value='4'>A</option>
                                    <option value='3.7'>A-</option>
                                    <option value='3.3'>B+</option>
                                    <option value='3'>B</option>
                                    <option value='2.7'>B-</option>
                                    <option value='2.3'>C+</option>
                                    <option value='2'>C</option>
                                    <option value='1.7'>C-</option>
                                    <option value='1.3'>D+</option>
                                    <option value='1'>D</option>
                                    <option value='0'>F</option>
                                </select>
                            </li>
                            `
                            cul.insertAdjacentHTML("beforeend", lic)
        }
    }
    if(funct_d.classList.contains("active")){
        for (let i = 1; i < d+1; i++){
            let lid =
                        `
                        <li id="dli-${i}" style="list">
                            <p>not ${i}</p>
                            <label for="alinan_not_${i}" style="width: 12%;">
                                <input type="number" name="alinan_not_${i}" id="alinan_not_${i}" style="width: 100%">
                            </label>
                            <label for="ortalama_not_${i}" style="width: 12%;">
                                <input type="number" name="ortalama_not_${i}" id="ortalama_not_${i}" style="width: 100%">
                            </label>
                            <label for="std_not_${i}" style="width: 12%;">
                                <input type="number" name="std_not_${i}" id="std_not_${i}" style="width: 100%">
                            </label>
                            <label for="etki_${i}" style="width: 12%;">
                                <input type="number" name="etki_${i}" id="etki_${i}" style="width: 100%">
                            </label>
                        </li>
                        `           
                        dul.insertAdjacentHTML("beforeend", lid)
        }
    }
}

const tekrar_ort_hesapla = () => {
    let c_topk = Number(c_tk.value)
    let c_mort = Number(c_mo.value)
    let sum = c_mort * c_topk
    let e_not = sum/c_topk
    e_not = e_not.toFixed(2)
    let c_k = 0
    for (let i = 0; i < cul.childElementCount; i++){
       let kredi = cul.children[i].children[1].value;
       let e_not = cul.children[i].children[2].value;
       let y_not = cul.children[i].children[3].value;
       sum -= kredi * e_not;
       sum += kredi * y_not;
       c_k += kredi
    }
    let not = sum / c_topk
    not = not.toFixed(2)
    window.c_k = c_k
    window.c_ders = cul.childElementCount
    window.e_not = e_not
    window.c_not = not
}

const not_belirle = (t_score, ort) => {
    let note = "Error"
    let not = [27, 29, 32, 34, 37, 39, 42, 44, 47, 49, 52, 54, 57]
    if(80<ort && ort<100){
        if (t_score< not[0]){
            note = "FF"
        }else if(not[0]< t_score && t_score< not[1]){
            note = "DD"
        }else if(not[1]< t_score && t_score< not[2]){
            note = "DD+"
        }else if(not[2]< t_score && t_score< not[3]){
            note = "DC"
        }else if(not[3]< t_score && t_score< not[4]){
            note = "DC+"
        }else if(not[4]< t_score && t_score< not[5]){
            note = "CC"
        }else if(not[5]< t_score && t_score< not[6]){
            note = "CC+"
        }else if(not[6]< t_score && t_score< not[7]){
            note = "BC"
        }else if(not[7]< t_score && t_score< not[8]){
            note = "BC+"
        }else if(not[8]< t_score && t_score< not[9]){
            note = "BB"
        }else if(not[9]< t_score && t_score< not[10]){
            note = "BB+"
        }else if(not[10]< t_score && t_score< not[11]){
            note = "BA"
        }else if(not[11]< t_score && t_score< not[12]){
            note = "BA+"
        }else if(not[12]< t_score){
            note = "AA"
        }
    }else if(70<ort && ort<80){
        if (t_score< not[0]+2){
            note = "FF"
        }else if(not[0]+2< t_score && t_score< not[1]+2){
            note = "DD"
        }else if(not[1]+2< t_score && t_score< not[2]+2){
            note = "DD+"
        }else if(not[2]+2< t_score && t_score< not[3]+2){
            note = "DC"
        }else if(not[3]+2< t_score && t_score< not[4]+2){
            note = "DC+"
        }else if(not[4]+2< t_score && t_score< not[5]+2){
            note = "CC"
        }else if(not[5]+2< t_score && t_score< not[6]+2){
            note = "CC+"
        }else if(not[6]+2< t_score && t_score< not[7]+2){
            note = "BC"
        }else if(not[7]+2< t_score && t_score< not[8]+2){
            note = "BC+"
        }else if(not[8]+2< t_score && t_score< not[9]+2){
            note = "BB"
        }else if(not[9]+2< t_score && t_score< not[10]+2){
            note = "BB+"
        }else if(not[10]+2< t_score && t_score< not[11]+2){
            note = "BA"
        }else if(not[11]+2< t_score && t_score< not[12]+2){
            note = "BA+"
        }else if(not[12]+2< t_score){
            note = "AA"
        }
    }else if(62.5<ort && ort<70){
        if (t_score< not[0]+4){
            note = "FF"
        }else if(not[0]+4< t_score && t_score< not[1]+4){
            note = "DD"
        }else if(not[1]+4< t_score && t_score< not[2]+4){
            note = "DD+"
        }else if(not[2]+4< t_score && t_score< not[3]+4){
            note = "DC"
        }else if(not[3]+4< t_score && t_score< not[4]+4){
            note = "DC+"
        }else if(not[4]+4< t_score && t_score< not[5]+4){
            note = "CC"
        }else if(not[5]+4< t_score && t_score< not[6]+4){
            note = "CC+"
        }else if(not[6]+4< t_score && t_score< not[7]+4){
            note = "BC"
        }else if(not[7]+4< t_score && t_score< not[8]+4){
            note = "BC+"
        }else if(not[8]+4< t_score && t_score< not[9]+4){
            note = "BB"
        }else if(not[9]+4< t_score && t_score< not[10]+4){
            note = "BB+"
        }else if(not[10]+4< t_score && t_score< not[11]+4){
            note = "BA"
        }else if(not[11]+4< t_score && t_score< not[12]+4){
            note = "BA+"
        }else if(not[12]+4< t_score){
            note = "AA"
        }
    }else if(57.5<ort && ort<62.5){
        if (t_score< not[0]+6){
            note = "FF"
        }else if(not[0]+6< t_score && t_score< not[1]+6){
            note = "DD"
        }else if(not[1]+6< t_score && t_score< not[2]+6){
            note = "DD+"
        }else if(not[2]+6< t_score && t_score< not[3]+6){
            note = "DC"
        }else if(not[3]+6< t_score && t_score< not[4]+6){
            note = "DC+"
        }else if(not[4]+6< t_score && t_score< not[5]+6){
            note = "CC"
        }else if(not[5]+6< t_score && t_score< not[6]+6){
            note = "CC+"
        }else if(not[6]+6< t_score && t_score< not[7]+6){
            note = "BC"
        }else if(not[7]+6< t_score && t_score< not[8]+6){
            note = "BC+"
        }else if(not[8]+6< t_score && t_score< not[9]+6){
            note = "BB"
        }else if(not[9]+6< t_score && t_score< not[10]+6){
            note = "BB+"
        }else if(not[10]+6< t_score && t_score< not[11]+6){
            note = "BA"
        }else if(not[11]+6< t_score && t_score< not[12]+6){
            note = "BA+"
        }else if(not[12]+6< t_score){
            note = "AA"
        }
    }else if(52.5<ort && ort<57.5){
        if (t_score< not[0]+8){
            note = "FF"
        }else if(not[0]+8< t_score && t_score< not[1]+8){
            note = "DD"
        }else if(not[1]+8< t_score && t_score< not[2]+8){
            note = "DD+"
        }else if(not[2]+8< t_score && t_score< not[3]+8){
            note = "DC"
        }else if(not[3]+8< t_score && t_score< not[4]+8){
            note = "DC+"
        }else if(not[4]+8< t_score && t_score< not[5]+8){
            note = "CC"
        }else if(not[5]+8< t_score && t_score< not[6]+8){
            note = "CC+"
        }else if(not[6]+8< t_score && t_score< not[7]+8){
            note = "BC"
        }else if(not[7]+8< t_score && t_score< not[8]+8){
            note = "BC+"
        }else if(not[8]+8< t_score && t_score< not[9]+8){
            note = "BB"
        }else if(not[9]+8< t_score && t_score< not[10]+8){
            note = "BB+"
        }else if(not[10]+8< t_score && t_score< not[11]+8){
            note = "BA"
        }else if(not[11]+8< t_score && t_score< not[12]+8){
            note = "BA+"
        }else if(not[12]+8< t_score){
            note = "AA"
        }
    }else if(47.5<ort && ort<52.5){
        if (t_score< not[0]+10){
            note = "FF"
        }else if(not[0]+10< t_score && t_score< not[1]+10){
            note = "DD"
        }else if(not[1]+10< t_score && t_score< not[2]+10){
            note = "DD+"
        }else if(not[2]+10< t_score && t_score< not[3]+10){
            note = "DC"
        }else if(not[3]+10< t_score && t_score< not[4]+10){
            note = "DC+"
        }else if(not[4]+10< t_score && t_score< not[5]+10){
            note = "CC"
        }else if(not[5]+10< t_score && t_score< not[6]+10){
            note = "CC+"
        }else if(not[6]+10< t_score && t_score< not[7]+10){
            note = "BC"
        }else if(not[7]+10< t_score && t_score< not[8]+10){
            note = "BC+"
        }else if(not[8]+10< t_score && t_score< not[9]+10){
            note = "BB"
        }else if(not[9]+10< t_score && t_score< not[10]+10){
            note = "BB+"
        }else if(not[10]+10< t_score && t_score< not[11]+10){
            note = "BA"
        }else if(not[11]+10< t_score && t_score< not[12]+10){
            note = "BA+"
        }else if(not[12]+10< t_score){
            note = "AA"
        }
    }else if(42.5<ort && ort<47.5){
        if (t_score< not[0]+12){
            note = "FF"
        }else if(not[0]+12< t_score && t_score< not[1]+12){
            note = "DD"
        }else if(not[1]+12< t_score && t_score< not[2]+12){
            note = "DD+"
        }else if(not[2]+12< t_score && t_score< not[3]+12){
            note = "DC"
        }else if(not[3]+12< t_score && t_score< not[4]+12){
            note = "DC+"
        }else if(not[4]+12< t_score && t_score< not[5]+12){
            note = "CC"
        }else if(not[5]+12< t_score && t_score< not[6]+12){
            note = "CC+"
        }else if(not[6]+12< t_score && t_score< not[7]+12){
            note = "BC"
        }else if(not[7]+12< t_score && t_score< not[8]+12){
            note = "BC+"
        }else if(not[8]+12< t_score && t_score< not[9]+12){
            note = "BB"
        }else if(not[9]+12< t_score && t_score< not[10]+12){
            note = "BB+"
        }else if(not[10]+12< t_score && t_score< not[11]+12){
            note = "BA"
        }else if(not[11]+12< t_score && t_score< not[12]+12){
            note = "BA+"
        }else if(not[12]+12< t_score){
            note = "AA"
        }
    }else if(ort<42.5){
        if (t_score< not[0]+14){
            note = "FF"
        }else if(not[0]+14< t_score && t_score< not[1]+14){
            note = "DD"
        }else if(not[1]+14< t_score && t_score< not[2]+14){
            note = "DD+"
        }else if(not[2]+14< t_score && t_score< not[3]+14){
            note = "DC"
        }else if(not[3]+14< t_score && t_score< not[4]+14){
            note = "DC+"
        }else if(not[4]+14< t_score && t_score< not[5]+14){
            note = "CC"
        }else if(not[5]+14< t_score && t_score< not[6]+14){
            note = "CC+"
        }else if(not[6]+14< t_score && t_score< not[7]+14){
            note = "BC"
        }else if(not[7]+14< t_score && t_score< not[8]+14){
            note = "BC+"
        }else if(not[8]+14< t_score && t_score< not[9]+14){
            note = "BB"
        }else if(not[9]+14< t_score && t_score< not[10]+14){
            note = "BB+"
        }else if(not[10]+14< t_score && t_score< not[11]+14){
            note = "BA"
        }else if(not[11]+14< t_score && t_score< not[12]+14){
            note = "BA+"
        }else if(not[12]+14< t_score){
            note = "AA"
        }
    }
    window.d_note = note
}

const harf_notu_hesapla = () =>{
    let my_notes = []
    let ort =[]
    let std = []
    let etki = []
    for (let i = 1; i <= dul.childElementCount; i++){
        my_notes.push(Number(document.querySelector(`#alinan_not_${i}`).value))
        ort.push(Number(document.querySelector(`#ortalama_not_${i}`).value))
        std.push(Number(document.querySelector(`#std_not_${i}`).value))
        etki.push((Number(document.querySelector(`#etki_${i}`).value)) / 100)        
    }

    let sum = 0
    for (let i = 0; i < std.length; i++){
        let k = std[i]**2 * etki[i]**2;
        sum = sum + k;
    }
    let standart = sum**0.5;
    standart = Number(standart.toFixed(2))

    let my_ort = 0
    for (let i = 0; i < my_notes.length; i++){
        let k = my_notes[i] * etki[i];
        my_ort = my_ort + k;
    }
    my_ort = Number(my_ort.toFixed(2))

    let class_ort = 0
    for (let i = 0; i < ort.length; i++){
        let k = ort[i] * etki[i];
        class_ort = class_ort + k;
    }
    class_ort = Number(class_ort.toFixed(2))
    let t = 10 * ((my_ort - class_ort)/standart) + 50
    t = Number(t.toFixed(2))
    not_belirle(t, class_ort)
    window.d_ort = my_ort;
    window.benimnot = my_notes
    window.ortalama = class_ort
    window.standartsapma = standart
    window.tskor = t

}


const genel_ort_hesapla = () => {
    let sum = 0
    let t = 0
    for (let i = 0; i < aul.childElementCount; i++){
       sum += Number(aul.children[i].children[1].value) * Number(aul.children[i].children[2].value)
       t += Number(aul.children[i].children[1].value) 
    }
    let not = (sum / t) 
    not = not.toFixed(2)
    window.a_k = t
    window.a_not = not
    window.a_ders = aul.childElementCount
}

const donem_ort_hesapla = () => {
    let b_topk = Number(b_tk.value)
    let b_mort = Number(b_mo.value)
    let sum = b_mort * b_topk
    let d_sum = 0
    let d_k = 0
    for (let i = 0; i < bul.childElementCount; i++){
        sum += Number(bul.children[i].children[1].value) * Number(bul.children[i].children[2].value)
        b_topk += Number(bul.children[i].children[1].value)
        d_sum += Number(bul.children[i].children[1].value) * Number(bul.children[i].children[2].value)
        d_k += Number(bul.children[i].children[1].value)
     }
     let not = (sum / b_topk) 
     not = not.toFixed(2)
     let b_d_not = d_sum/d_k
     b_d_not = b_d_not.toFixed(2)
    

     window.b_ders = bul.childElementCount
     window.b_k = d_k
     window.b_d_not = b_d_not
     window.b_not = not
}

const display_a = (t, n, a) => {
    c_a.classList.add("active")
    let li = 
    `
    <li>
        <p><b>Toplam Aldığınız Ders: </b></p>
        <p>${a}</p>
    </li>
    <li>
        <p><b>Toplam Aldığınız kredi: </b></p>
        <p>${t}</p>
    </li>
    <li>
        <p><b>Genel Ortalamanız: </b></p>
        <p>${n}</p>
    </li>
    `
    a_ul.insertAdjacentHTML("beforeend", li)
}

const display_b = (ders, kredi, d, n) =>{
    c_b.classList.add("active")
    let li =
    `
    <li>
        <p><b>Dönemde Alınan Ders Sayısı:</b></p>
        <p>${ders}</p>
    </li>
    <li>
        <p><b>Dönemde Alınan Kredi:</b></p>
        <p>${kredi}</p>
    </li>
    <li>
        <p><b>Dönem Not Ortalaması:</b></p>
        <p>${d}</p>
    </li>
    <li>
        <p><b>Yeni Genel Not Ortalaması:</b></p>
        <p>${n}</p>
    </li>
    `
    b_ul.insertAdjacentHTML("beforeend", li)
}

const display_c = (d, k, en, n) => {
    c_c.classList.add("active");
    let li =
    `
    <li>
        <p><b>Tekrar Alınan Ders Sayısı: </b></p>
        <p>${d}</p>
    </li>
    <li>
        <p><b>Tekrar Alınan Kredi Sayısı: </b></p>
        <p>${k}</p>
    </li>
    <li>
        <p><b>Eski Not Ortalamsı: </b></p>
        <p>${en}</p>
    </li>
    <li>
        <p><b>Yeni Not Ortalaması: </b></p>
        <p>${n}</p>
    </li>
    `
    c_ul.insertAdjacentHTML("beforeend", li)
}

const display_d = (ort, harf) =>{
    c_d.classList.add("active");
    let li =
    `
    <li>
        <p><b>Ortalaman: </b></p>
        <p>${ort}</p>
    </li>
    <li>
        <p><b>Harf Notun: </b></p>
        <p>${harf}</p>
    </li>
    `
    d_ul.insertAdjacentHTML("beforeend", li)
}

const clearBox = (elementID) =>{
    document.getElementById(elementID).innerHTML = "";
}

const calculate = () => {
    first.classList.remove("active")
    second.classList.add("active")
    if(sys_input_a.checked == true){
        clearBox("a_ul")
        clearBox("b_ul")
        clearBox("c_ul")
        clearBox("d_ul")
        genel_ort_hesapla()
        display_a(a_k, a_not, a_ders)
    }
    if(sys_input_b.checked == true){
        clearBox("a_ul")
        clearBox("b_ul")
        clearBox("c_ul")
        clearBox("d_ul")
        donem_ort_hesapla()
        display_b(b_ders, b_k, b_d_not, b_not)
    }
    if(sys_input_c.checked == true){
        clearBox("a_ul")
        clearBox("b_ul")
        clearBox("c_ul")
        clearBox("d_ul")
        tekrar_ort_hesapla()
        display_c(c_ders, c_k, e_not, c_not)
    }
    if(sys_input_d.checked == true){
        clearBox("a_ul")
        clearBox("b_ul")
        clearBox("c_ul")
        clearBox("d_ul")
        harf_notu_hesapla()
        display_d(d_ort, d_note)
    }
}
