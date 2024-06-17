import { Component } from '@angular/core';

@Component({
  selector: 'app-email-masking',
  templateUrl: './email-masking.component.html',
  styleUrls: ['./email-masking.component.css']
})
export class EmailMaskingComponent {
name: string = "";
  constructor()
  {

  }

  maskEmail()
  {
    var split = this.name.split("@");
    var letter1 = split[0][0];
    var letter2 = split[0][split[0].length-1];
    var first_part = "";
    first_part += letter1;
    // getting the first part
    for(let i=0; i<split[0].length;i++)
    {
      first_part += "*";
    }
    first_part += letter2;
    console.log("This is the first part: "+first_part);
    //getting the second part
    var second_part = "";
    for(let i=0; i<split[1].length; i++)
    {
      second_part += "*"
    }
    
    //getting the remaining statement after the dot
    let index_of_dots:Array<number>  =[]
    for(let i=0; i<this.name.length; i++)
    {
      if(this.name[i] == ".")
      {
        index_of_dots.push(i)
      }

    }
    var last_dot = index_of_dots[index_of_dots.length-1]
    var remaining_statement = this.name.substring(last_dot, this.name.length);
    var result = first_part + "@" + second_part + remaining_statement;
    console.log("This is the result: "+result)
    this.name = result
    
    
    // var dotcount = 0;
    // let index_of_dots:Array<number> = [];
    // for(let i=0; i<split[1].length;i++)
    // {
    //   if(split[1][i] == ".")
    //   {
    //     dotcount++;
    //     index_of_dots.push(i);
    //   }
    // }
    // console.log("Array with all the index numbers of the dots "+index_of_dots);
    // console.log("Total number of dots in the entire string "+dotcount);
    // var last_index = index_of_dots[index_of_dots.length-1];
    // console.log("This is the last index: "+ last_index);
    // var remaining_statement = this.name.substring(last_index, this.name.length);
    // console.log("This is the remaining statement: "+ remaining_statement);
    
  }

  

}

