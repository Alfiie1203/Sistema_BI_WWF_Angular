import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Kobo_ApiServiceService } from 'src/app/service/kobo_api-service.service';
import { Observable } from 'rxjs';
import { ServiceKoboService } from 'src/app/service/service-kobo.service';

@Component({
  selector: 'app-respuestas-palm-l1',
  templateUrl: './respuestas-palm-l1.component.html',
  styleUrls: ['./respuestas-palm-l1.component.scss']
})
export class RespuestasPalmL1Component implements OnInit {

  createRegister: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceKoboService) { 
    this.createRegister = this.fb.group({    
        
      //Matriz 1:
      //Pregunta 1
      pyc: ['',Validators.required],
      eba: ['',Validators.required],      
      pi: ['',Validators.required],
      mr: ['',Validators.required],
      mqr: ['',Validators.required],


    })
  }
  id = localStorage.getItem("id_kobotoolbox");
  informacion: any[] = [];

  public downloadPDF() {
    var html1: any = document.getElementById("htmlData")?.clientWidth;
    var html2: any = document.getElementById("htmlData")?.clientHeight;
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', [html2,html1]);
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 1;
      const bufferY = 1;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(
        img, 
        'PNG', 
        bufferX, 
        bufferY, 
        pdfWidth, 
        pdfHeight, 
        undefined, 
        'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date()}_autodiagnostico.pdf`);
    });
  }

  ngOnInit(): void {
    var alto: any = document.getElementById("pdf")?.clientHeight;
    console.log("a" + alto)
    this.getData();
  }


  public getData(){
    this.service.getInformacionById().subscribe(respuesta => {
      for (let index = 0; index < respuesta.length; index++) {
        const element = respuesta[index];
        if (element.id_kobo == this.id) {
          this.informacion.push({
            _id:element._id,
            end:element.end,
            calculation_pc: element.calculation_pc,
            calculation_eb: element.calculation_eb,
            calculation_pi: element.calculation_pi,
            calculation_mr: element.calculation_mr,
            calculation_qr: element.calculation_qr
          })
        }
      }
    })
  }
  


}
