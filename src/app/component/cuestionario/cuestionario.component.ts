import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Kobo_ApiServiceService } from 'src/app/service/kobo_api-service.service';
import { ServiceKoboService } from 'src/app/service/service-kobo.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {
  public today = new Date();

  constructor(private service: ServiceKoboService) { }
  id = 211787093;
  array = [];

  public headers_object = new HttpHeaders;


  ngOnInit(): void {
    this.getData()
    this.headers_object.append('Authorization','Token 5a70d9a7db0b528c4884b11a5ed21a1eab15409e')
  }

  public getData(){
    this.service.getInformacionById().subscribe(respuesta => {
      for (let index = 0; index < respuesta.length; index++) {
        const element = respuesta[index];
        console.log(element)
        if (element._id == this.id) {
          console.log("solo con id " + element.end)
        }
      }      
    })
  }




}
