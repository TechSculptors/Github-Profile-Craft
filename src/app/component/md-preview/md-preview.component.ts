import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-preview',
  templateUrl: './md-preview.component.html',
  styleUrls: ['./md-preview.component.scss'],
})
export class MdPreviewComponent implements OnInit {
  @Input() userDetails: any;
  constructor() {}

  ngOnInit() {}
}
