<pre>
<?php
    $modules = apache_get_modules();
    echo in_array('mod_rewrite', $modules) ? "mod_rewrite module is enabled" : "mod_rewrite module is not enabled";
?>
</pre>