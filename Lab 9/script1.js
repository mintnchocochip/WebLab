function tempSort(){
    var tempArray = [55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,93,87,80,78,79,72,68,61,59,55,65]
    var HOT = 0;
    var COLD = 0;
    var PLEASANT = 0;
    for (i = 0; i < tempArray.length; i++){
        if(tempArray[i] > 85){
            HOT++;
        }
        else if(tempArray[i] < 60){
            COLD++;
        }
        else{
            PLEASANT++;
        }
    }
    document.write(`<table style = "border: 3px solid black; cellpadding: 10px; cellspacing: 10px; width: 50%;">
        <tr style = "border: 3px solid black">
            <th bgcolor = "gray">HOT</th>
            <th bgcolor = "gray">PLEASANT</th>
            <th bgcolor = "gray">COLD</th>
        </tr>
        <tr style = "border: 3px solid black">
            <td><center>${HOT}</center></td>
            <td><center>${PLEASANT}</center></td>
            <td><center>${COLD}</center></td>
        </tr>
    </table>`)
}