import_csv('./word.csv')

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


// テキストデータを配列に変換
function convert_array(csv_data)
{
    let data_array = [];//列を保存
    const data_string = csv_data.split('\n');//行で保存

    for (let i = 0; i < data_string.length; i++) {
        data_array[i] = data_string[i].split(',');
    }
    var selectWord = Math.floor( Math.random() * 6);
    outputCsvEl.innerText = data_array[3][selectWord];
}


