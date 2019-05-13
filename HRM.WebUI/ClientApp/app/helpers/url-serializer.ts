import { DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common'

@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        // Optional Step: Prserving trailing slash
        //TO DO

        // If you lower it in the optional step 
        // you don't need to use "toLowerCase" 
        // when you pass it down to the next function
        return super.parse(url.toLowerCase());
    }
}

