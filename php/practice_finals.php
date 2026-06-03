<?php
$student_deets= array(
    array("name"=>"Divyanshu", "marks"=> 98),
    array("name"=>"anshul", "marks"=> 88),
    array("name"=>"XYZ", "marks"=> 78));

$students = [
    "Rahul"   => 78,
    "Sneha"   => 35,
    "Amit"    => 52
];


echo $students['Rahul'];

foreach ($students as $name => $mark) {
    
    // 3. Evaluate if the mark is equal to or greater than 40
    if ($mark >= 40) {
        // Output format if passed
        echo "Student " . $name . " passed. Score: " . $mark . "<br>";
    } else {
        // Output format if failed
        echo "Student " . $name . " failed. Score: " . $mark . "<br>";
    }
}

?>