<?php

require_once 'configure.php';

class controller_base
{
   private $_view_folder_name = '';
   public $title = '';
   public $layout = VIEWS_LAYOUTS_PATH . 'default.php';

   function __construct()
   {
      $this->_view_folder_name = get_class($this);
      $this->_view_folder_name = str_replace('_controller', '', $this->_view_folder_name);
   }

   function __destruct()
   {
      
   }

   private function save(string $content, string $file_name)
   {
      $directory_name = dirname($file_name);

      if (!is_dir($directory_name))
      {
         mkdir($directory_name, 0777, true);
      }

      $file = fopen($file_name, 'w');

      fwrite($file, $content);

      fclose($file);
   }

   public function build(string $view)
   {
      $input = VIEWS_PATH . $this->_view_folder_name . '\\' . $view . Extension::php;
      $output = BUILD_PATH . $this->_view_folder_name . '\\' . $view . Extension::html;

      $title = $this->title;

      ob_start();
      require $input;
      $content = ob_get_contents();
      ob_end_clean();

      ob_start();
      require $this->layout;
      $content = ob_get_contents();
      ob_end_clean();

      $this->save($content, $output);

      print "build $output success \n";
   }
}
