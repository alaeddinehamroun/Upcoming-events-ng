import { FormControl } from "@angular/forms"

export function restrictedWords(words: any):any{
    return (control: FormControl) =>{
        if(!words) 
            return null
        var invalidWords = words
            .map((w: any) => control.value.includes(w) ? w : null)
            .filter((w: null) => w!= null)
            return invalidWords && invalidWords.length>0
            ? {'restrictedWords': invalidWords.join(', ')}
            :{} 
    }

}