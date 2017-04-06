<?php 
	class Site {
		private $promosArray;
		function __construct() {
			$this->promosArray = array(
				'a3-sedan' => array(
					'id' => '1',
					'key' => 'a3-sedan',
					'name' => 'Audi A3 Sedán 2.0 TFSI 2017',
					'banner' => 'a3_cotizacion.jpg'
				),
				'a6-2017' => array(
					'id' => '2',
					'key' => 'audi-a6-2017',
					'name' => 'Audi A6 2017',
					'banner' => 'a6_cotizacion.jpg'
				),
				'a7-2017' => array(
					'id' => '3',
					'key' => 'audi-a7-2017',
					'name' => 'Audi A7 2017',
					'banner' => 'a7_cotizacion.jpg'
				),
				'a8-2017' => array(
					'id' => '4',
					'key' => 'audi-a8-2017',
					'name' => 'Audi A8 2017',
					'banner' => 'a8_cotizacion.jpg'
				)
			);
		}
		public function getPromos($key) {
			$promo = array();
			if (array_key_exists($key, $this->promosArray)) {
				$promo = $this->promosArray[$key];
				//echo "<pre>", print_r($promo), "</pre>";
			}
			return $promo;
		}
	}