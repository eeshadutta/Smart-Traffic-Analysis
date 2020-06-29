import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent implements OnInit {
  imageslist: Array<string>;
  currentList: Array<string>;
  feature = 'default';
  @Input() state: boolean;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.reload('default');
  }
  reload(feature) {
    console.log('Reload in snapshots called with ' + feature);
    this.feature = feature;
    this.http.get('/api/imageslist/' + feature)
    .subscribe((response) => {
      this.imageslist = response as Array<string>;
      console.log('response received is ', this.imageslist);
    });
  }
}

