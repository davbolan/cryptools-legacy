<?php
function consoleLog($data)
{
  if (DEBUG) {
    $output = $data;
    if (is_array($output)) {
      $output = implode(',', $output);
    }
    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
  }
}

function echoParagraphs($paragraphs)
{
  for ($loop = 0; $loop < count($paragraphs); $loop++) {
    echo "<li>" . $paragraphs[$loop] . "</li>";
  }
}

?>