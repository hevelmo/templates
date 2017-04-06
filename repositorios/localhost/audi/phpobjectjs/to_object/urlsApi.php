<?php

function urlsApi() {
    //Especial Actions
    $get = "get";
    $snd = "send";
    $add = "add";

    //Tables
    $fin = "financiamientos";
    $acs = "accesorios";
    $reg = "registro";

    //Root Api url
    $root = 'api/v1';

    return array(
        //SELECT

        //INSERT
        "add_fin" => "$root/$add/$fin",

        //SEND
        "snd_fin" => "$root/$snd/$fin",
        "snd_fin_acs" => "$root/$snd/$fin/$acs",
        "snd_reg" => "$root/$snd/$reg",
    );
}
