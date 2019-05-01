﻿import { DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        // Optional Step: Do some stuff with the url if needed.

        // If you lower it in the optional step 
        // you don't need to use "toLowerCase" 
        // when you pass it down to the next function
        return super.parse(url.toLowerCase());
    }
}

