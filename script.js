// Ex: فانکشنی بنویسید که یک رشته متنی بگیره و چک کنه ببینه چنتا از کلمه مورد نظرمون توش هست.

// Define a variable for target text| paragraph

let text;

// write a function to get paragraph

function myText(paragraph) {
  text = paragraph;
  console.log(text);
}
myText("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد...");

//--------------------------------

// Define a variable for target keyword

let KeyWord;

// write a function to get paragraph

function myKeyWord(word) {
  KeyWord = word;
  console.log(KeyWord);

        //Define an Array and output

      let indexArray = [],
        output;

      // check if text includes keyword

          if (text.includes(KeyWord)) {

              output = text.indexOf(KeyWord);
              
              // while output is not undefined, push output to indexArray and  then find the next output
              while ( output !==-1) {
                  indexArray.push(output);
                  output = text.indexOf(KeyWord, output+1);
                  
              }

              console.log(indexArray);
              console.log(indexArray.length);  
        
        } // if there isn't any show a message
        else {
          console.log("There is no", KeyWord, "in this text!");
        }
}

myKeyWord("مورد نیاز");


  

