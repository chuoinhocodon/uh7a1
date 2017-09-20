<!DOCTYPE html>
<html>

   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta charset="utf-8">

      <!-- jquery -->
      <script src="<?php echo HOST ?>/js/jquery-3.2.1.min.js" type="text/javascript"></script>

      <!-- bootstrap -->
      <link href="<?php echo HOST; ?>/css/bootstrap.min.css" 
            rel="stylesheet" type="text/css" />
      <script src="<?php echo HOST; ?>/js/bootstrap.min.js" 
      type="text/javascript"></script>

      <!-- font-awesome -->
      <link href="<?php echo HOST; ?>/css/font-awesome.min.css"
            rel="stylesheet" type="text/css" />

      <!-- <?php echo PROJECT_NAME ?> -->
      <link href="<?php echo HOST; ?>/css/<?php echo PROJECT_NAME; ?>.min.css"
            rel="stylesheet" type="text/css" />
      <script src="<?php echo HOST; ?>/js/<?php echo PROJECT_NAME; ?>.js"
      type="text/javascript"></script>

      <script src="<?php echo HOST; ?>/js/data.min.js"
      type="text/javascript"></script>

      <title id="title"><?php echo $title; ?></title>
   </head>

   <body>
      <div class="uh7a1-chapter">
         <?php
         require VIEWS_PATH . '\\template\\more_info.php';

         echo $content;
         ?>
      </div>
   </body>

</html>
