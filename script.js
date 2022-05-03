/*import html2pdf from './node_modules/html2pdf.js/src/index.js';



const pdf = document.querySelector('#toPdf');


pdf.addEventListener('click', () => {
    PDF();
});

function PDF() {
    const e = document.querySelector(".container");
    // Resize
    e.style.maxWidth = "800px";
    e.style.margin = "0";

    //Options
    const opt = {
        filename: 'resume.pdf',
        image: {
            type: "pdf",
            quality: 0.99
        },
        margin: 0,
        jsPDF: {
            unit: "pt",
            format: "letter",
            orientation: "portrait"
        },
        pagebreak: {
            mode: ["avoid all", "legacy"]
        }
    };
    var element = document.querySelector(".container");
    html2pdf(element);
    // html2pdf().set(opt).from(e).save();

    //Resize

    setTimeout(() => { e.style.maxWidth = "1400px"; }, 2000);
}*/