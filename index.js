//import {area} from './js/area.js';


    const body = document.querySelector('body');
  
    const content = `<div class="wrapper">
    <h1>Виртуальная клавиатура</h1>
    <textarea id="textarea" class="textarea" autofocus></textarea>
    <div id="keyboard">
        <div class="first-row">
            <div class="key letter " id='KeyBackquote'>\`</div>
            <div class="key digit" id="Key1">1</div>
            <div class="key digit" id="Key2">2</div>
            <div class="key digit" id="Key3">3</div>
            <div class="key digit" id="Key4">4</div>
            <div class="key digit" id="Key5">5</div>
            <div class="key digit" id="Key6">6</div>
            <div class="key digit" id="Key7">7</div>
            <div class="key digit" id="Key8">8</div>
            <div class="key digit" id="Key9">9</div>
            <div class="key digit" id="Key0">0</div>
            <div class="key symbol" id="Key-">-</div>
            <div class="key symbol" id="Key=">=</div>
            <div class="key control-key backspace" id="KeyBackspace">backspace</div>
        </div>
        <div class="second-row">
            <div class="key control-key tab" id="KeyTab">tab</div>
            <div class="key letter" data-i18n="q" id="KeyQ">q</div>
            <div class="key letter" data-i18n="w" id="KeyW">w</div>
            <div class="key letter" data-i18n="e" id="KeyE">e</div>
            <div class="key letter" data-i18n="r" id="KeyR">r</div>
            <div class="key letter" data-i18n="t" id="KeyT">t</div>
            <div class="key letter" data-i18n="y" id="KeyY">y</div>
            <div class="key letter" data-i18n="u" id="KeyU">u</div>
            <div class="key letter" data-i18n="i" id="KeyI">i</div>
            <div class="key letter" data-i18n="o" id="KeyO">o</div>
            <div class="key letter" data-i18n="p" id="KeyP">p</div>
            <div class="key letter symbol" data-i18n="[" id="Key[">[</div>
            <div class="key letter symbol" data-i18n="]" id="Key]">]</div>
            <div class="key symbol" id="KeyBackslash">\\</div>
            <div class="key control-key del" id="KeyDelete">del</div>
        </div>
        <div class="third-row">
            <div class="key control-key capslock" id="KeyCapsLock">caps lock</div>
            <div class="key letter"  id="KeyA">a</div>
            <div class="key letter"  id="KeyS">s</div>
            <div class="key letter"  id="KeyD">d</div>
            <div class="key letter"  id="KeyF">f</div>
            <div class="key letter"  id="KeyG">g</div>
            <div class="key letter"  id="KeyH">h</div>
            <div class="key letter"  id="KeyJ">j</div>
            <div class="key letter"  id="KeyK">k</div>
            <div class="key letter"  id="KeyL">l</div>
            <div class="key letter symbol" id="Key;">;</div>
            <div class="key letter symbol" id="Key'">'</div>
            <div class="key control-key enter" id="KeyEnter">enter</div>
        </div>
        <div class="fourth-row">
            <div class="key control-key  shift" id="KeyShiftLeft">shift</div>
            <div class="key letter" data-i18n="z" id="KeyZ">z</div>
            <div class="key letter" data-i18n="x" id="KeyX">x</div>
            <div class="key letter" data-i18n="c" id="KeyC">c</div>
            <div class="key letter" data-i18n="v" id="KeyV">v</div>
            <div class="key letter" data-i18n="b" id="KeyB">b</div>
            <div class="key letter" data-i18n="n" id="KeyN">n</div>
            <div class="key letter" data-i18n="m" id="KeyM">m</div>
            <div class="key letter symbol" data-i18n="comma" id="Key,">,</div>
            <div class="key letter symbol" data-i18n="period" id="Key.">.</div>
            <div class="key symbol" data-i18n="slash" id="Key/">/</div>
            <div class="key control-key arrow-up arrow" id="KeyArrowUp">▲</div>
            <div class="key control-key shift" id="KeyShiftRight">shift</div>
        </div>
        <div class="fifth-row">
            <div class="key control-key control-left" id="KeyControlLeft">ctrl</div>
            <div class="key control-key" id="KeyMetaLeft">win</div>
            <div class="key control-key alt-left" id="KeyAltLeft">alt</div>
            <div class="key big" id="KeySpace"> _ </div>
            <div class="key control-key alt-right" id="KeyAltRight">alt</div>
            <div class="key control-key arrow" id="KeyArrowLeft">◄</div>
            <div class="key control-key arrow" id="KeyArrowDown">▼</div>
            <div class="key control-key arrow" id="KeyArrowRight">►</div>
            <div class="key control-key control-right" id="KeyControlRight">ctrl</div>
        </div>
    </div>
    <div class="addition">
        <p>keyboard created in windows system</p>
        <p>for changing language: left ctrl + left alt</p>
    </div>
</div>`;

body.insertAdjacentHTML('afterbegin', content);

let parent = document.getElementById("keyboard"); 
let input = document.getElementById("textarea");

parent.onclick = e => {  
    if (e.target.innerText === 'backspace'){
        input.value = input.value.slice(0,-1);        
        }else{ 
                if (e.target.innerText === 'tab'){
                    input.value=input.value;        
                    }else{ 
    if (e.target.innerText === 'caps lock'){
       ;        
        }else{ 
    if (e.target.innerText === 'shift'){
        ;        
        }else{            
    if (e.target.innerText === 'ctrl'){
        input.value = input.value.slice(0,-1);        
        }else{ 
    if (e.target.innerText === 'alt'){
        ;        
         }else{ 
    if (e.target.innerText === 'del'){
        input.value = input.value.slice(0,-1);        
        }else{ 
    if (e.target.innerText === 'enter'){
        input.value += '\r\n';        
        }else{
    if (e.target.innerText === '_'){
      input.value += ' ';        
       }else{
            
      
    input.value += e.target.innerText;
} }}}}}}}}}

let textarea = document.getElementById('textarea');
textarea.addEventListener('keydown', (e) => {
    
    if ((e.code ===  'Tab') || (e.code === 'CapsLock') || (e.code === 'Backspace') || (e.code === 'Delete') || (e.code === 'Enter') || (e.code === 'ShiftLeft') || 
 (e.code === 'ControlLeft') ||  (e.code === 'AltLeft') ||  (e.code === 'MetaLeft') || (e.code === 'Space') || (e.code === 'ArrowUp') || (e.code === 'ArrowDown') || 
 (e.code === 'ArrowLeft') || (e.code === 'ArrowRight')  || (e.code === 'Backquote') || (e.code === 'AltRight') || (e.code === 'ControlRight') || (e.code === 'ShiftRight') ||
 (e.code === 'Backslash') ) {
        document.getElementById(`Key${e.code}`).style.background = 'rgba(0, 0, 255, 0.61)';
        setTimeout(function(){document.getElementById(`Key${e.code}`).style.background = 'rgba(0, 0, 0, 0.425)';}, 300);
    }else{
     document.getElementById(`Key${e.key.toUpperCase()}`).style.background = 'rgba(0, 0, 255, 0.61)';
    setTimeout(function(){document.getElementById(`Key${e.key.toUpperCase()}`).style.background = 'rgba(0, 0, 0, 0.425)';}, 300);
 }
  
}) 
