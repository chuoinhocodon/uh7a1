<?php

require_once 'core/controller_base.php';

class intro_controller extends controller_base
{
   function __construct()
   {
      parent::__construct();
   }
   function __destruct()
   {
      
   }
   public function index()
   {
      $this->title = 'Giới thiệu';

      $this->build(__FUNCTION__);
   }
}

$controller = new intro_controller();

$controller->index();
