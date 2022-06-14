let word;

export default function setWordFunction () {
    import_csv('./word.csv');
}

const outputCsvEl = document.querySelector(" #output_csv ");



// CSVの読み込み
function import_csv(csv_path)
{
    fetch( csv_path ).then((res) => {

        if(!res.ok) {
            console.log('正常にリクエストを処理できませんでした。');
        }
        return res.text();
    }).then((csv_data) => {
        convert_array(csv_data);
    }) .catch((error) => {
        console.log('エラーが発生しました。');
    })
}


 let data_array = [];//列を保存
// テキストデータを配列に変換
function convert_array(csv_data)
{
   
    const data_string = csv_data.split('\n');//行で保存

    for (let i = 0; i < data_string.length; i++) {
        data_array[i] = data_string[i].split(',');
    }
    console.log("OK");
}
    

export function randomWord(line) {
    var selectWord = Math.floor( Math.random() * (data_array[line].length));
    word = data_array[line][selectWord];
    return word;
}
