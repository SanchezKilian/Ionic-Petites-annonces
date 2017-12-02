import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'traPass'})
export class TraPass implements PipeTransform{
    transform(pass : string) : string{
        return pass;
    }
    
}