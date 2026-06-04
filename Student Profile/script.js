const themes = [

"linear-gradient(135deg,#0f172a,#1e3a8a,#7c3aed)",

"linear-gradient(135deg,#134e4a,#0f766e,#14b8a6)",

"linear-gradient(135deg,#7f1d1d,#dc2626,#f97316)",

"linear-gradient(135deg,#4c1d95,#9333ea,#ec4899)"
];

let current = 0;

function changeTheme(){

    current++;

    if(current >= themes.length){
        current = 0;
    }

    document.body.style.background = themes[current];
}