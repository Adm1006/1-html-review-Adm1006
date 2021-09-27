<?php

$num =2;
$foo = $num . "To be";
$bar = "or not" .$num ."to be.";

echo $foo ." ". $bar;
echo "\n";
echo $num*$foo*$bar;

$arr = [1,1,2,3,5,8];

$arr2 = [
    "first" => "Tom"
    "second"=> "Bipin"
    "best"  => "DS"
]

if (true) {
    echo "TRUE \n";
} else {
    echo "FALSE \n";
}

while (true) {
    break;
}

echo "</ul>";
foreach ($arr2 as $key => $val) {
    echo "<li>".$key."is".$val."</li>\n;
}
echo "</ul>";
