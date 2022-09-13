import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { image } from 'html2canvas/dist/types/css/types/image';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.scss']
})
export class HtmlToPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleExport() {
    const invoiceContentElement=document.getElementById('invoice_container') as HTMLElement;
    html2canvas(invoiceContentElement,{}).then(canvas=>{
      // is convert the canvas into base64 string url
      const imgData=canvas.toDataURL('image/png');
      // page width
      const pageWidth=210;
      const pageHeight=297;
      // calcuate the image actual height to fit with canvas and pdf
      const height=canvas.height*pageWidth/canvas.width;
      // initialize the PDF
      const pdf=new jsPDF("p","mm","a4");
      // add the image into pdf
      pdf.addImage(imgData,'PNG',0,0,pageWidth,height);

      pdf.save('invoice.pdf');
    })
  }

}
