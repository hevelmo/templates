<?php
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);

/**
 *
 * [Initial V 1.0]
 *
**/

require_once "core/vendor/autoload.php";
include_once "core/environment/WaxConfigSet.php";

// Medigraf
include_once "core/Medigraf/Bases.php";
include_once "core/Medigraf/Router.php";
include_once "core/Medigraf/Curl.php";
include_once "core/Medigraf/Template.php";
include_once "core/Medigraf/Modelos.php";

// Site
include_once "core/Site/Site.php";

$container = new \Slim\Container();

$container["notFoundHandler"] = function($c) {
    return function($request, $response) use ($c) {
        return $c["response"]
            ->withStatus(404)
            ->withHeader("Content-Type", "text/html")
            ->write((new Control404())->getTemplate()->render());
    };
};

$app = new \Slim\App($container);

/**
 * [ROOM]
**/
	// POST ROUTERS
	$app->get("/", "ControlHome:__invoke");
    $app->get("/financiamiento/modelos/{modelo}", "ControlModelos:__invoke");
	$app->get("/financiamiento/promos/{promo}", "ControlModelosPromo:__invoke");
	$app->get("/financiamiento/audi/a1", "ControlAudiA1:__invoke");
    $app->get("/financiamiento/audi/a3", "ControlAudiA3:__invoke");
	$app->get("/financiamiento/audi/a4", "ControlAudiA4:__invoke");
    $app->get("/financiamiento/audi/q3", "ControlAudiQ3:__invoke");
    $app->get("/registro/audi/q5", "ControlAudiQ5:__invoke");
	$app->get("/financiamiento/audi/accesorios", "ControlAudiAccesorios:__invoke");
	$app->get("/aviso-de-privacidad", "ControlPrivacyNotice:__invoke");
	$app->run();
/**
 *  [CONTROL PARENT CLASS]
 *		Ésta es la clase padre para el manejo general de las rutas de Slim.
 *		Dicha clase provee los métodos necesarios para interactuar con la API
 *		Y para mostrar los templates crados vía Twig.
 *		Esta clase jamás se usará directamente por una ruta Slim,
 *		Sino que cada ruta Slim será manejada por una clase hija de ControlMaster.
**/
	abstract class ControlMaster {
	    // PROPERTIES
	    private $bases;
	    private $router;
	    private $curl;
	    private $template;
	    private $modelos;
        private $site;
	    // CONSTRUCT
	    function __construct($masterConfigArray, $twigConfig, $name) {
	        //BASES
	        $this->bases   = new Bases();
	        //ROUTER
	        $this->router   = new Router();
	        //CURL
	        $this->curl     = new Curl(_HOST . "api/v1/");
	        //TEMPLATE
	        $this->template = new Template(
	            "templates/twig/interfaz",
	            $name,
	            array_merge(
	                array(
	                    "cache" => "cache",
	                    "debug" => "true"
	                ),
	                $twigConfig
	            ),
	            array_merge(
	                $this->bases->getConstants(),
	                $masterConfigArray
	            )
	        );
	        // MODELOS
	        $this->modelos = new Modelos();
            // SITE
            $this->site = new Site();
	    }
	    // GETTERS
	    public function getBases() {
	        return $this->bases;
	    }
	    public function getRouter() {
	        return $this->router;
	    }
	    public function getCurl() {
	        return $this->curl;
	    }
	    public function getTemplate() {
	        return $this->template;
	    }
	    public function getModelos() {
	    	return $this->modelos;
	    }
        public function getSite() {
            return $this->site;
        }
	    // ABSTRACTS
        abstract public function __invoke($request, $response, $args);
	}
/**
 * [CONTORL CHILD CLASSES]
**/
    // CONTROL 404
    class Control404 extends ControlMaster {
	    function __construct() {
	        parent::__construct(
	            array(
	                "title" => "Página no encontrada",
	                "title_header" => "Página no encontrada"
	            ),
	            array(),
	            "404/_404.twig"
	        );
	    }
	    public function __invoke($request, $response, $args) {
	    }   
	}
	// CONTROL HOME
    class ControlHome extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Audi Guadalajara",
                    "title_header" => "Audi Guadalajara"
                ),
                array(),
                "landing/_home.twig"
            );
        }
        public function __invoke($request, $response, $args) {
        	parent::getRouter()->setRouteParams($request, $response, $args);
        	parent::getTemplate()->addToMasterConfigArray(parent::getRouter()->getArgs());
	        
	        $modelos = parent::getModelos()->getModelosArray();

        	parent::getTemplate()->addToMasterConfigArray('audpa', $modelos);

        	//echo "<pre>", print_r($modelos), "</pre>";
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
            parent::getTemplate()->display();
        }
    }
    // CONTROL HOME
    class ControlModelos extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Financiamiento",
                    "title_header" => "Financiamiento"
                ),
                array(),
                "landing/financiamiento/modelos/_cotiza.twig"
            );
        }
        public function __invoke($request, $response, $args) {
        	parent::getRouter()->setRouteParams($request, $response, $args);
        	parent::getTemplate()->addToMasterConfigArray(parent::getRouter()->getArgs());

            $modelos = parent::getModelos()->getModelosArray();
            parent::getTemplate()->addToMasterConfigArray('audpa', $modelos);

        	//echo "<pre>", print_r($modelos), "</pre>";
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
            parent::getTemplate()->display();
        }
    }
    // CONTROL HOME
    class ControlModelosPromo extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Financiamiento",
                    "title_header" => "Financiamiento"
                ),
                array(),
                "landing/financiamiento/modelos/promo/_cotiza.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getRouter()->setRouteParams($request, $response, $args);
            parent::getTemplate()->addToMasterConfigArray(parent::getRouter()->getArgs());

            $modelos = parent::getRouter()->getArgs('promo');
            $detalle = parent::getSite()->getPromos($modelos);
            parent::getTemplate()->addToMasterConfigArray('audpa', $detalle);

            //echo "<pre>", print_r($modelos), "</pre>";
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
            parent::getTemplate()->display();
        }
    }
    // CONTROL FINANCING
    class ControlAudiA1 extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "",
                    "title_header" => "Audi A1 Sportback 2017"
                ),
                array(),
                "landing/financiamiento/audi/_a1.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getTemplate()->display();
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
        }
    }
    // CONTROL FINANCING
    class ControlAudiA3 extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Familia Audi A3 2017",
                    "title_header" => "Familia Audi A3 2017"
                ),
                array(),
                "landing/financiamiento/audi/_a3.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getTemplate()->display();
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
        }
    }
    // CONTROL HOME
    class ControlAudiA4 extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "",
                    "title_header" => "Audi A4 2017"
                ),
                array(),
                "landing/financiamiento/audi/_a4.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getTemplate()->display();
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
        }
    }
    // CONTROL HOME
    class ControlAudiQ3 extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Audi Q3 2017",
                    "title_header" => "Audi Q3 2017"
                ),
                array(),
                "landing/financiamiento/audi/_q3.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getTemplate()->display();
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
        }
    }
    // CONTROL HOME
    class ControlAudiQ5 extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Audi Q5 2017",
                    "title_header" => "Audi Q5 2017"
                ),
                array(),
                "landing/financiamiento/audi/_q5.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getTemplate()->display();
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
        }
    }
    // CONTROL ACCESORIOS
    class ControlAudiAccesorios extends ControlMaster {    
        function __construct() {
            parent::__construct(
                array(
                    "title" => "Audi Accesorios",
                    "title_header" => "Audi Accesorios"
                ),
                array(),
                "landing/financiamiento/audi/_accesorios.twig"
            );
        }
        public function __invoke($request, $response, $args) {
            parent::getTemplate()->display();
            //echo "<pre>", print_r(parent::getTemplate()->getMasterConfigArray()), "</pre>";
        }
    }
    /*
	// CONTROL HOME
	class ControlHome extends ControlMaster {
	    function __construct() {
	        parent::__construct(
	            array(
	            	"title" => "Camiones y Autobuses",
	                "title_header" => "Camiones y Autobuses"
	            ),
	            array(),
	            "landing/_home.twig"
	        );
	        parent::getTemplate()->makeFacebookTags(
	            "Camiones y Autobuses | Promo Retail", 
	            "Camiones y Autobuses | Promo Retail", 
	            "Camiones y Autobuses | Promo Retail",
	            _HOST . "img/banner/promo.png"
	        );
	        parent::getTemplate()->addToMasterConfigArray("estados", parent::getCurl()->routeGet("get/estados")->mvwpa);
	    }
	    public function __invoke($request, $response, $args) {
        	parent::getRouter()->setRouteParams($request, $response, $args);
        	parent::getTemplate()->addToMasterConfigArray(parent::getRouter()->getArgs());
	        parent::getTemplate()->display();
	    }
	}*/
	// CONTROL PRIVACY NOTICE
	class ControlPrivacyNotice extends ControlMaster {
	    function __construct() {
	        parent::__construct(
	            array(
	                "title" => "Aviso de Privacidad",
	                "title_header" => "Aviso de Privacidad"
	            ),
	            array(),
	            "privacidad/_privacidad.twig"
	        );
	    }
	    public function __invoke($request, $response, $args) {
	        parent::getTemplate()->display();
	    }
	}
