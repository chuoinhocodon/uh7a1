<?php

function ruby_tag(string $ruby, string $rt = '', string $rb = '')
{
   echo '<ruby>';
   echo $ruby;

   if ($rt != '')
   {
      echo "<rt>$rt</rt>";
   }

   echo '</ruby>';

   if ($rb != '')
   {
      echo "<rb>$rb</rb>";
   }
}

function v_tag(string $key, string $type)
{
   echo "<span class=\"vocabulary $type\">$key</span>";
}

function vb_tag(string $key, string $type)
{
   echo "<span class=\"vocabulary text bold $type\">$key</span>";
}

function vocabulary(string $type, string $key, bool $jq = false, bool $bold = false)
{
   $classes = $type;
   $before = '';
   $after = '';

   if ($jq)
   {
      $before = $before . '「';
      $after = $after . '」';
   }

   if ($bold)
   {
      $classes = $classes . " text bold";
   }

   echo "<span class=\"vocabulary $classes\" key=\"$key\">$before$key$after</span>";
}

function a0(string $key, bool $jq = false)
{
   vocabulary("a00", $key, $jq);
}

function b0(string $key, bool $jq = false)
{
   vocabulary("b00", $key, $jq);
}

function a0b(string $key, bool $jq = false)
{
   vocabulary("a00", $key, $jq, true);
}

function b0b(string $key, bool $jq = false)
{
   vocabulary("b00", $key, $jq, true);
}
