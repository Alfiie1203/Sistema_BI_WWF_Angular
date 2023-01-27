import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private service: ServiceKoboService, private http: HttpClient) { }
  id = 211787093;
  array = [];



  ngOnInit(): void {
    this.getData()

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
