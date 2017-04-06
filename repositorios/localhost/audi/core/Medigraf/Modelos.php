<?php 
class Modelos {
	private $modelosArray;
	function __construct() {
		$this->modelosArray = array(
			array(
				'id' => '1',
				'key' => 'a1',
				'name' => 'A1',
				'description' => 'Equipado con motores TFSI, Sistema Start Stop, transmisión S tronic y Audi Drive Select.',
				'image' => '01-A1.png'
			),
			array(
				'id' => '2',
				'key' => 'a3',
				'name' => 'A3',
				'description' => 'Equipado con motores TFSI, transmisión S tronic, Audi Drive Select y nuevo diseño.',
				'image' => '02-A3.png'
			),
			array(
				'id' => '3',
				'key' => 'a4',
				'name' => 'A4',
				'description' => 'Equipado con motores TFSI, tracción quattro, Tablero Virtual Audi, MMI con Audi smartphone Interface y Bang & Olufsen con sonido 3D.',
				'image' => '03-A4.png'
			),
			array(
				'id' => '4',
				'key' => 'a5',
				'name' => 'A5',
				'description' => 'Equipado con Sistma Start Stop con recuperación de energía, Sistema de sonido Bang & Olufsen y MMI navigation plus.',
				'image' => '04-A5.png'
			),
			array(
				'id' => '5',
				'key' => 'a6',
				'name' => 'A6',
				'description' => 'Equipados con tecnología TFSI, faros LED, tracción quattro o front y park assist con cámara de entorno.',
				'image' => '05-A6.png'
			),
			array(
				'id' => '6',
				'key' => 'a7',
				'name' => 'A7',
				'description' => 'Equipado con motores con tecnología TFSI, sistema de sonido BOSE, luces LED y Audi Side Assist.',
				'image' => '06-A7.png'
			),
			array(
				'id' => '7',
				'key' => 'a8',
				'name' => 'A8',
				'description' => 'Equipado con transmisión Triptronic 8 velocidades, MMI touch y tracción quattro.',
				'image' => '07-A8.png'
			),
			array(
				'id' => '8',
				'key' => 'q3',
				'name' => 'Q3',
				'description' => 'Equipado con motores TFSI y TDI, transmisión S tronic, Audi Drive Select, Sistema de sonido BOSE y Sistema de Navegación.',
				'image' => '08-Q3.png'
			),
			array(
				'id' => '9',
				'key' => 'q5',
				'name' => 'Q5',
				'description' => 'Equipado con motores TFSI o TDI, tracción quattro y Sistema de sonido Bang & Olufsen.',
				'image' => '09-Q5.png'
			),
			array(
				'id' => '10',
				'key' => 'q7',
				'name' => 'Q7',
				'description' => 'Equipada con tracción quattro, Sonido BOSE 3D, tablero virtual Audi, faros Matrix LED.',
				'image' => '10-Q7.png'
			),
			array(
				'id' => '11',
				'key' => 'tt',
				'name' => 'TT',
				'description' => 'Equipado con motores TFSI, transmisión S tronic, Audi Drive Select y Sistema de Sonido Audi.',
				'image' => '11-TT.png'
			),
			array(
				'id' => '12',
				'key' => 'r8',
				'name' => 'R8',
				'description' => 'Equipado con motor V10 FSI, transmisión S tronic 7 velocidades, Audi Space Frame y Sonido Bang & Olufsen.',
				'image' => '12-R8.png'
			)/*,
			array(
				'id' => '13',
				'key' => 'a3-sedan',
				'name' => 'A3-SEDAN'
			)*/
		);
	}
	public function getModelosArray() {
		return $this->modelosArray;
	}
	/*public function getPromosDetails($key) {
		$promo = array();
		$condition = false;
		for ($idx = 0; $idx < count($this->promosArray) && $condition == false;  $idx++) {
			$condition = ($key == $this->promosArray[$idx]['key']);
			if ( $condition == true ) {
				$promo = $this->promosArray[$idx];
			}
		}
		return $promo;
	}*/
}