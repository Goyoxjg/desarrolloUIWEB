function eliminarProducto(obj)
{
    var htmlDefault = '<div class="list-group-item"><h4 class="list-group-item-heading">Seleccione un producto</h4></div>';        
    var total = Number($(obj).parents('.list-group-item').find('.badge').text());
    if(total > 1)
    {
        $(obj).parents('.list-group-item').find('.badge').text(--total);
    }
    else
    {
        $(obj).parents('.list-group-item').remove();
    }
    
    if($('.compras .list-group-item').length == 0)
    {
        $('.compras').append(htmlDefault);
    }
}

function comprarProducto(obj)
{
    if($('.compras .list-group-item .default').length)
    {
        $('.compras .list-group-item').eq(0).remove();
    }
    var $obj = $(obj);
    var $producto = $obj.parents('.product').clone();
    $producto.find('p').eq(1).remove();
    
    bootbox.alert({
        title: "Agregar al Carro de Compras",
        message: $producto.html(),
        backdrop: true
    });
    
    
    var datos = {
        name:$producto.attr("name").toUpperCase(),
        price:$producto.attr("price"),
        img:$producto.find('img').attr("src")
    };
    
    var lista = $(".compras").find('.list-group-item-heading');
    
    var c = 1;
    var valorAnterior = c;
    $.each(lista,function(){
       if(datos.name == $(this).text())
       {
           c++;
           $(this).parent().html();
           $(this).parent().find('.badge').text(c);
       }
    });
    
    
    if(valorAnterior == c)
    {
        var html = '<div class="list-group-item"><span class="badge">'+c+'</span>';    
        html += '<h4 class="list-group-item-heading">'+datos.name+'</h4>';
        html += '<p class="list-group-item-text">Precio: '+datos.price+'&nbsp;';
        html += '<button type="button" class="btn btn-default btn-xs" onclick="eliminarProducto(this)">';
        html += '<span class="glyphicon glyphicon-remove " aria-hidden="true"></span></button></p></div>';

        $(".compras").append(html);
    }
}

function buscarProducto()
{
    var texto = $("#buscar").val();
    $.each($(".product .caption h3 .nombre"),function(){       
        var titulo = $(this).text().toLowerCase();
        var re = eval('/'+texto+'/i');        
        var pos = titulo.search(re);
        if(pos < 0)
        {
            $(this).parents('.product').fadeOut("slow");
        }
        else
        {
            $(this).parents('.product').fadeIn("slow");
        }
    });
}


function verPorCategoria(id)
{
    $(".product").fadeIn("slow");
    
    $('.categories li a[categorie="'+id+'"]');
    var categoria = $('.categories li a[categorie="'+id+'"]').text().toUpperCase();
    $('.textCategories').empty();
    $('.textCategories').text(categoria);
    
    $.each($(".product:visible"),function(){       
       var categorias = $(this).attr("categories").split(",");
       id = id.toString();
       if($.inArray(id,categorias))
       {
           $(this).fadeOut("slow");
       }
    });
}

function ordenarPor(caso)
{
    var productos = [];
    
    productos["nombre"] = [];
    productos["precio"] = [];
    productos["precio"]["producto"] = [];
    
    $.each($(".product:visible"),function(){
        var nombre = $(this).attr("name").toLowerCase();
        var precio = Number($(this).attr("price").replace(".",""));
        var elemento = $(this).clone();
        productos.push([nombre,precio,elemento]);
        productos["nombre"].push(nombre);
        productos["nombre"][nombre] = [];
        productos["nombre"][nombre].push(elemento);
        (this).remove();
    });
    
    switch (caso)
    {
        case "n":
            $.each(productos["nombre"].sort(),function(){                
                $(".container-center").append(productos["nombre"][this]);
            });
            break;
        case "ma":
            productos.sort(function(a,b){
                if (a[1] === b[1]) 
                {
                    return 0;
                }
                else 
                {
                    return (a[1] > b[1]) ? -1 : 1;
                }
            });
            $.each(productos,function(){
                $(".container-center").append(this[2]);
            });
            break;
        case "me":
            productos.sort(function(a,b){
                if (a[1] === b[1]) 
                {
                    return 0;
                }
                else 
                {
                    return (a[1] < b[1]) ? -1 : 1;
                }
            });
            $.each(productos,function(){
                $(".container-center").append(this[2]);
            });
            break;
    }
}

function filtrarProductos(obj,caso)
{
    var condicion,buscador = null;    
    var $contenedor = $(".container-center");
    if($(obj).is(':checked'))
    {
        buscador = $contenedor.find(".product:visible");
    }
    else
    {
        buscador = $contenedor.find(".product");
    }
    
    $.each(buscador,function(){
        var precio = Number($(this).attr("price").replace(".",""));
        switch (caso)
        {
            case "d"://Disponible
                condicion = ($(this).attr("available") == "true");            
                break;
            case "a"://Agotados
                condicion = ($(this).attr("available") == "false");
                break;
            case "b"://Best Selle
                condicion = ($(this).attr("best_seller") == "true");
                break;
            case "ma"://Mayor a 30.000
                condicion = (precio >= 30000);
                break;
            case "me"://Menor a 10.000
                condicion = (precio <= 10000);
                break;
        }
                
        if($(obj).is(':checked'))
        {
            if(condicion)
            {
                $(this).fadeIn("slow");
            }
            else
            {
                $(this).fadeOut("slow");
            }
        }
        else
        {            
                $(this).fadeIn("slow");
        }          
    });
}
function createThumbnailPrincipals(datos)
{
    var categorias = datos.categories.join(",");
    var html = '<div class="col-sm-6 col-md-4 product" available="'+datos.available+'" best_seller="'+datos.best_seller+'" categories="'+categorias+'" price="'+datos.price+'" name="'+datos.name+'">';
    html += '<div class="thumbnail">';
    html += '<img data-src="'+datos.img+'" src="'+datos.img+'" alt="'+datos.name+'">';
    html += '<div class="caption"><h3><span class="nombre">'+datos.name+'</span>&nbsp;<span class="badge">'+datos.price+'</span></h3>';
    html += '<p>'+datos.description+'</p>';
    html += '<p><a href="#" class="btn btn-primary" role="button" onclick="comprarProducto(this)">Agregar&nbsp;&nbsp;<span class="glyphicon glyphicon-shopping-cart"></span></a></p>';
    html += '</div></div></div>';
    
    return html;
}

$(function(){    
    var html = '<label for="">Ingrese la url para obtener los datos de los productos.<br>';
    html += 'O use la dta local ubicada en la siguiente ruta: "source/data.json"</label>';
    html += '<input id="url" type="text" class="form-control" value="source/data.json" >';
        bootbox.dialog({ 
            title: "Configuración Inicial",
            message: html,
            buttons: {
                confirm: {
                    label: 'Continuar',
                    className: 'btn-success',
                    callback: function(a) {
                        var url = $("#url").val();
                        $.ajax({
                            url:url,        
                            success:function(datos){
                                var $contenedor = $(".container-center");
                                $.each(datos.categories, function(){
                                    $(".categories").append('<li><a href="#" categorie="'+this.categori_id+'" onclick="verPorCategoria('+this.categori_id+')">'+this.name.toUpperCase()+'</a></li>')
                                });

                                $.each(datos.products, function(){                
                                    $contenedor.append(createThumbnailPrincipals(this));
                                });        

                            }
                        });
                    }
                }
            }
        });
    
});