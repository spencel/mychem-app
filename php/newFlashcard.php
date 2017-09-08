<?

$data = $_POST['string']; // Get the data from

$dataDir = "../data";

$fileName = "FlashCardsDatabase.txt";

$filePath = $dataDir . "/" . $fileName;

//echo file_get_contents( $filePath );
echo $data;

?>