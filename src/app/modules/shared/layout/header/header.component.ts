import { Component, OnInit, Input } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string | undefined;

  array = [1, 2, 3, 4, 5];

  capitalText = 'CAPITAL TEXT';

  isoDate = '2011-10-05T14:48:00.000Z';

  amount = '99';

  num = 56.78;

  birthday: Date = new Date(1988, 3, 15); // april 15, 1988.. we need to have a date formated as 15.03.1988

  version: string | undefined;

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.version = this.versionService.getVersion();
  }
}
