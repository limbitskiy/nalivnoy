<?php

$json = json_decode(file_get_contents('php://input'));

file_put_contents('config.json', json_encode($json) . $font, LOCK_EX);

?>
