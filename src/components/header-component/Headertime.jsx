
export const HeaderTime = () => {
  let today = new Date();
  let minute = today.getMinutes()
  let hour = today.getHours();
  let date = today.getDate();
  let month = today.getMonth()+1;
  var minuteWithZero = ( '000' + minute ).slice( -2 );

  return `${month}.${date}   ${hour}:${minuteWithZero}`
}
