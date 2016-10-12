<?php
$pasword = '1234567890';
$passSha = hash('sha512', $pasword);
$randomSalt = hash('sha512', uniqid(mt_rand(), TRUE));
$passFinal = hash('sha512', $passSha . $randomSalt);

echo 'SALT: ' . $randomSalt;
echo '<br>';
echo 'PASS: ' . $passFinal;