<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Rappi</title>
        <link rel="stylesheet" href="libs/bootstrap-3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="libs/bootstrap-3.3.7/css/bootstrap-theme.min.css">
        
        <link rel="stylesheet" href="libs/bootstrap-3.3.7/css/Simplex.css">
        
        <script src="libs/jquery-ui-1.12.1/external/jquery/jquery.js"></script>
        <script src="libs/bootstrap-3.3.7/js/bootstrap.min.js"></script>        
        <script src="libs/bootbox/bootbox.min.js"></script>        

        <script src="js/script.js"></script>
            
    </head>
    <body>        
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Inicio</a>
                </div>

                <div class="collapse navbar-collapse collapse" id="bs-example-navbar-collapse-1">                    
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown ">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categorías
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu categories"></ul>
                        </li>
                        <li class="dropdown ">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Compras
                                <span class="glyphicon glyphicon-shopping-cart"></span>
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu compras" role="menu">
                                <div class="list-group-item">
                                    <h4 class="list-group-item-heading default">Seleccione un producto</h4>
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form " style="display: block;text-align: center;">
                        <div class="input-group">
                            <input id="buscar" type="text" class="form-control" value="" onkeyup="buscarProducto()">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default" onclick="buscarProducto()">Buscar</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        <div class="row">
            <div class="col-md-12">&nbsp;</div>            
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header text-center">
                        <h1>Rappi&nbsp;&nbsp;<small>Corremos por ti</small></h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 well">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Filtros</h3>
                        </div>
                        <div class="panel-body">
                            <div class="checkbox">
                                <label><input checked type="checkbox" onclick="filtrarProductos(this,'d')">Disponibles</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" onclick="filtrarProductos(this,'a')">Agotados</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" onclick="filtrarProductos(this,'b')">Más Vendidos</label>
                            </div>                                                        
                        </div>
                    </div>
                </div>
                <div class="col-md-8 container-center">
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-left">
                                    <li>
                                        <h3>Categoría:<small class="textCategories">Todas</small></h3></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ordenar Por
                                            <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" onclick="ordenarPor('n')">Nombre</a></li>
                                            <li><a href="#" onclick="ordenarPor('ma')">Mayor Precio</a></li>
                                            <li><a href="#" onclick="ordenarPor('me')">Menor Precio</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-md-2 well">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Precios</h3>
                        </div>
                        <div class="panel-body">
                            <div class="checkbox">
                                <label><input type="checkbox" onclick="filtrarProductos(this,'ma')" value="">Mayor a 30.000</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" onclick="filtrarProductos(this,'me')">Menor a 10.000</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
