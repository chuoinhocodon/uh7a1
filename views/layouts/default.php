<?php

require_once 'configure.php';

if (BUILD_TYPE == BuildType::Normal)
   :
   {
      require 'views/layouts/normal.php';
   } elseif (BUILD_TYPE == BuildType::Post)
   :
   {
      
   }

else
   :
   {
      
   }
endif;
