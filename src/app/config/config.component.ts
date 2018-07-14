import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../services/config.service';
import {Config} from '../Config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: Config;

  error: Error;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = {...data},
        error => this.error = error);
  }

  showConfigReponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
          const keys = resp.headers.keys();
          this.config = { ... resp.body};
        }
      );
  }
}
