import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {

  annulla = false;
  travels: any = [];
  value: any;
  posts: any;
  tipoCarta: String = '';

  constructor(private router: Router ,private http: HttpClient, private elRef: ElementRef) {
    this.tipoCarta = 'VISA';
  }

  ngOnInit() {
  //   this.fetchTravels();
  }

  getValueById(id: number) {
    this.http.get('http://localhost:9002/api/viaggi/' + id).subscribe((response) => {
      this.value = response;
    });
  }

  onAnnulla() {
    this.elRef.nativeElement.querySelector('form').style.display = 'none';
  }

  onAcquisto() {
    this.router.navigate(['success']);
  }

  // private fetchTravels() {
  //   this.http.get<any>('http://localhost:9002/api/viaggi/1')
  //     .subscribe((travels) => {
  //       this.travels = travels;
  //      });
  // }

}
