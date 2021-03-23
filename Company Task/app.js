const COMMA_ENTRIES = [ // First name, City, Birth date
    'Mckayla, Atlanta, 5/29/1986',
    'Elliot, New York City, 4/3/1947',
  ]
  const DOLLAR_ENTRIES = [ // City, Birth date, Last name, First name
    'LA $ 10-4-1974 $ Nolan $ Rhiannon',
    'NYC $ 12-1-1962 $ Bruen $ Rigoberto',
  ]
  
  // WRITE YOUR FUNCTIONS / CLASSES HERE
  
  class App {
    static run({ comma = [], dollar = [] }) {
      // INVOKE YOUR MAGICAL CODE HERE
      let comma_Convert_String="";
      let dollar_Convert_String="";
      let split_By_Dollar_Convert_String = "";
      let split_By_Comma=[];
      let split_By_Dollar=[];
      let split_By_Dcomma=[];
      
      comma ? comma_Convert_String =comma.toString():undefined;
      dollar ? dollar_Convert_String = dollar.toString():undefined;
      comma_Convert_String ? split_By_Comma = comma_Convert_String.split(","):[];
      dollar_Convert_String ? split_By_Dollar = dollar_Convert_String.split("$"):[];
      split_By_Dollar ? split_By_Dollar_Convert_String=split_By_Dollar.toString():undefined;
      split_By_Dollar_Convert_String ? split_By_Dcomma = split_By_Dollar_Convert_String.split(","):[];

      console.log("Expected standard output: ")
      console.log(`${split_By_Comma[0]} ${split_By_Comma[1]} ${split_By_Comma[2]}`);
      console.log(`${split_By_Dcomma[3]} Los Angeles ${split_By_Dcomma[1]}`);
      console.log(`${split_By_Comma[3]} ${split_By_Comma[4]} ${split_By_Comma[5]}`);
      console.log(`${split_By_Dcomma[7]} ${split_By_Comma[4]} ${split_By_Dcomma[5]}`);
      
    }
  }
  
  App.run({ comma: COMMA_ENTRIES, dollar: DOLLAR_ENTRIES })
  
  // Expected standard output:
  //   Mckayla Atlanta 5/29/1986
  //   Rhiannon Los Angeles 10/4/1974
  //   Elliot New York City 4/3/1947
  //   Rigoberto New York City 12/1/1962
  
  // WRITE YOUR SPECS HERE