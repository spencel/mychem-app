<?

$data = $_POST['strData']; // Get the data from

echo $data;

$dataDir = "../../data";

$fileName = "FlashCardsDatabase.txt";

$filePath = $dataDir . "/" . $fileName;

$myfile = fopen( $filePath, "w" );

fwrite( $myfile, $data );

fclose( $myfile );

?>