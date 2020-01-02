<?php
	$a = [];
	$b = 'ad';
	$c = 'ac';
	echo 'coalescing operator';
	echo "<br>";
	/*
		if(isset($a[1])){
			echo $a;
		}else{
			echo $b;
		}
	*/
	print_r( $a[1] ?? $b);
	echo "<br>";
	echo "<br>";

	echo "elvis operator";
	echo "<br>";
	/*
		if($a != null){
			echo $b;
		}else{
			echo $c;
		}
	*/
	echo $a ?: $c;
?>