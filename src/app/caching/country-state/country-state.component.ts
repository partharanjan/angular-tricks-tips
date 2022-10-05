import { Component, OnInit } from '@angular/core';
import { ICountryState } from '../models/country-state.model';
import { CountryStateService } from '../services/country-state.service';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.scss']
})
export class CountryStateComponent implements OnInit {

  // store state map
  stateMap = new Map<string, ICountryState[]>();

  country!: string
  countries: ICountryState[] = [];
  states: ICountryState[] = [];

  constructor(private service: CountryStateService) { }

  ngOnInit(): void {
    // load all countries
    this.service.countries().subscribe(results => {
      this.countries = results;
    });
  }

  handleOnCountryChanged() {
    this.service.states(this.country).subscribe(results => {
      this.states = results;
    });
  }

  handleOnCountryChangedX() {
    // first we will check that selecte country is exist in map or not
    if (this.stateMap.has(this.country)) {
      // get teh result from the map
      this.states = this.stateMap.get(this.country) as ICountryState[];
    }
    else {
      // country not exist
      // call the api
      this.service.states(this.country).subscribe(results => {
        // set the map
        this.stateMap.set(this.country, results);
        // set the results info states
        this.states = results;
      });
    }

  }

}
