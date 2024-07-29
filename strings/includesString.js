function checkSpam(s){
    let str=s.toLowerCase();
    if(str.includes("viagra") || str.includes("xxxx")){
      return true;
    }
    else{
      return false
    }
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );