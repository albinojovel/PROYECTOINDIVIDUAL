function carga(){
  localStorage.clear();
  if (localStorage['Nombre'] != undefined )
  {
  /*la variable si existe*/
  alert("Bienvenido " + localStorage['Nombre']+ "");
  VISITAS + 1;
  }
  else{
  var name=prompt("Cual es su nombre");
  localStorage['Nombre']=name;
  alert("Hola " + localStorage['Nombre']+ "");
  }
}

function videos() {
          despachado();
	
}

function vida() {
          vidita();
}

function vidita(){
    //////////////////////////////////////DOM//////////////////////////////////////
    var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }

  /////////////////////////////////////////DOM//////////////////////////////////// 
  $("#C").html("<h1 align=center>La vida scout en El Salvador</h1>");    
    $(".DI").html("<img src='imagenes/foto.png'>");  
    $("#V").html("<table width=100% border=0><tbody><tr><br><br></p><p><strong>La vida scout en El Salvador&nbsp;</strong><br>Escrito por Fidel López Eguizábal&nbsp;<br>Sábado, 20 agosto 2011 Editorial La Prensa Gráfica.</p><p>¿Han oído hablar de Robert Baden Powell? Es el fundador del movimiento Scout a escala mundial, asociación que se estableció en El Salvador en 1914. Hay mucha historia que contar ya que hasta expresidentes salvadoreños han vestido el uniforme scout, entre ellos José Napoleón Duarte y Alfredo Cristiani.</p><p>Desde su fundación se ha ayudado a construir una mejor nación a través de sus miembros y por las acciones que realizan. En la Asociación de Scouts de El Salvador se enseña el Método Scout, valores, liderazgo, convivencia, amor a Dios, a la familia y a la naturaleza, empatía y sobre todo la amistad. El movimiento scout es la asociación juvenil más grande del planeta, cuenta alrededor de 28 millones de jóvenes y ha ayudado a más de 300 millones de jóvenes en sus 103 años de fundación. ¿Qué significa ser Scout? Se puede conocer de tres maneras: siendo un miembro scout, como padre de familia y como dirigente. En la última me encuentro yo, pasión que nació al haber asistido a un pequeño campamento en la finca Ecoturística El Espino, en Santa Tecla.</p><p>En una entrevista televisiva, un señor manifestó que los “boy scouts” o scouts se ven pocos en el país, talvez sí, lo que sucede que hay miles de jóvenes que no conocen el movimiento. Ser scout no significa nada más hacer nudos o andar acampando en las montañas, es mucho más. Es necesario que en estos tiempos que impera más los antivalores que las buenas costumbres, los niños y jóvenes se inscriban a los scouts. Uno de los aspectos fundamentales de los scouts es amar a la naturaleza, legado dejado por su fundador. Además se inculca el espíritu de “colaboración”, ejemplo de ello son las colaboraciones que efectúan en recolección de juguetes, en catástrofes, campañas religiosas, etc. La empatía, solidaridad, compañerismo, amor a la naturaleza es parte de la vida scout.</p><p>Se los aseguro que los niños y jóvenes scouts cometen menos errores en su vida. Tienen la oportunidad de tener una educación integral. Se les refuerza lo aprendido en el hogar y la escuela. Recordemos que hoy en día impera más la ociosidad que actividades de provecho. Sobre sus ramas están los lobatos, scouts, caminantes y los rovers. Es una gran experiencia pertenecer al movimiento. A los miembros se les ayuda a formar valores, basados en los principios espirituales, sociales y personales expresados en la Promesa y Ley Scout. En el movimiento, no hay diferencias de razas, posición económica, religión, cultura o política. Todos comparten como hermanos y “siempre listos” para ayudar al prójimo. Deberían las instituciones educativas invitar a niños y jóvenes a pertenecer al movimiento. He corroborado que colegios, escuelas y cuarteles prestan las instalaciones a los miembros scouts para que puedan realizar las reuniones.</p><p>¿Qué se aprende en el escultismo? La clave Morse, lectura de mapas, primeros auxilios, nadar, practicar ecoturismo, cocinar, aprender valores, etcétera. Esto es parte de las actividades que realizan desde niños en los diferentes lugares que se reúnen. Ayuda a formar el carácter, a socializar, a enfrentar la vida de una forma diferente.</p><p>Padre de familia, si usted desea que su hijo o hija aprenda sobre el escultismo, puede inscribir a su hijo en las diferentes sedes del país. He comprobado que niños tímidos, rebeldes y poco sociables cambian, se comparte, se hace amigos, se les enseña a amar la naturaleza, a amar a la familia, al prójimo y a Dios. Poco a poco los miembros van cambiando y haciéndose integrales para poder hacer una sociedad mejor en nuestro querido El Salvador. “Siempre mejor y siempre listos.”</p></td></tr></tbody></table>");
	$(".contenido").hide(function(){
		$(".contenido").show(function(){
		
       });
       });
}

function clan() {
	 //////////////////////////////////////DOM//////////////////////////////////////
         var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }
         $("#C").html("<h1 align=center>CLAN DE ROVERS</h1>");
 $(".DI").html("<img src='imagenes/clan.jpg'>");  
    $("#V").html("<img src=imagenes/logoclan.gif><p>Basado en el Servicio a la sociedad con los conocimientos previos que adquirieron como Scouts, como demuestra <b>su lema, Servir</b>.</p><p>Esta rama se caracteriza por la independencia de sus integrantes respecto al resto del grupo, suelen viajar y hacer proyectos, se preparan un poco con nociones sobre educación o pedagogía para poder ser monitores, y a veces ellos mismos preparan actividades para todo el grupo o para distintas ramas.</p>");
	$(".contenido").hide(function(){
		$(".contenido").show(function(){
		
       });
       });
}

function caminantes() {
    var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }
         $("#C").html("<h1 align=center>CAMINANTES SCOUT</h1>");
         $(".DI").html("<img src='imagenes/caminantes.jpg'>");  
         $("#V").html("<p><img src=imagenes/cami.gif width=71 height=95 align=left vspace=5 hspace=5>En esta rama se adquieren mayores responsabilidades, se potencia el <b>trabajo en equipo</b> sin olvidar la progresión personal. <b>Su lema, Siempre Listos</b>, refleja la intención de que todos estén comprometidos entre ellos, de aquí que los equipos están conformados por afinidad ó amistad.</p><p> Es bueno aclarar, que en algunos países, esta rama se la denomina Tropa Raider. Se propicia principalmente el trabajo en equipo y la hermandad de los miembros, se les suele pedir que elijan una empresa que se trata de una acción muchas veces comprometida con la sociedad, la empresa se prepara y lleva a cabo a lo largo de toda una ronda solar o ciclo.</p><p> La fuerza de la Comunidad de Caminantes radica en que sus equipos no compiten entres sí, sino que buscan superarse a sí mismos y cooperar con los otros equipos buscando el bien común.</p>");
       $(".contenido").hide(function(){
         $(".contenido").show(function(){
        
       });
       });
	
}

function tropa() {
	 var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }
         $("#C").html("<h1 align=center>TROPA SCOUT</h1>");
         $(".DI").html("<img src='imagenes/tropa.jpg'>");  
         $("#V").html("<p> <img src=imagenes/logotropa.gif></p><p>El grupo se subdivide en patrullas de aproximadamente seis a ocho integrantes, estas patrullas toman el nombre de un animal y un lema predeterminados, los posibles nombres vienen dados por los escritos de Baden Powell. Estas patrullas están organizadas de forma que cada integrante tiene una función específica, uno de ellos, es el responsable de la patrulla, llamado guía, otro es el subguía, que ayuda al anterior y en ocasiones le sustituye. A cada integrante, independientemente de su cargo jerárquico (guía, subguia, 1er patrullero) se les confiere otro, por ejemplo guardián de la leyenda, quien es el que mantiene vivas las tradiciones de la patrulla, tesorero, quien mantiene las finanzas de la patrulla, etc.</p><p>La idea de este sistema, descritos en el libro El Sistema de Patrullas de Roland Phillips es dar a cada chico un cargo y hacerlosresponsables de el y si cada integrante cumple su función, la patrulla funcionará correctamente. Otras funciones son enfermero, bodeguero, intendente, etc. se pueden generar tantos cargos como integrantes tenga la patrulla.</p>");
         $(".contenido").hide(function(){
         $(".contenido").show(function(){
        
       });
       });
}

function manada() {
         
          espaciomanada();
	
}
function espaciomanada(){
    //////////////////////////////////////DOM//////////////////////////////////////
    var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }
         $("#C").html("<h1 align=center>MANADA</h1>");
 $(".DI").html("<img src='imagenes/manada.jpg'>");  
    $("#V").html("<p><img src=imagenes/logo.gif width=71 height=95 align=left vspace=5 hspace=5>En esta rama se trabaja bajo el marco simbólico basado en El libro de <b>Las Tierras Vírgenes</b> de <b>Joseph Rudyard Kipling</b>.<br><b>Su lema</b> es <b> Siempre Mejor</b>, que trata de conseguir que los niños se esfuercen en sus tareas.Se les intenta crear una ilusión para que realicen cada día una buena acción.</p><p>Desde los años 1970 progresivamente las Organizaciones Scouts Nacionales han abierto a las niñas la posibilidad de integrar la Rama Lobatos. En algunos de esos países hoy se la llama Rama Lobatos y Lobeznas. En otros países, como en los Estados Unidos, todavía es exclusivamente para niños.</p><p>La Rama Lobatos fue fundada por Robert Baden-Powell en 1916, nueve años después de la fundación del Movimiento Scout, a fin de atender a los muchos niños que aún no habían alcanzado la edad límite para ser Boy Scouts, pero que deseaban tomar parte en el Movimiento Scout.</p>");
	$(".contenido").hide(function(){
		$(".contenido").show(function(){
		
       });
       });
}

function recoger(){
var datos =  new Object();
datos.nombre = document.getElementById('nombre').value;
datos.nis = document.getElementById('NIS').value;
validar(datos);
}

function validar(datos) {
	////////////////////////////EXPRESIONES REGULARES////////////////////////////////////////////

	var exprenis = /[0-9]{4}-[0-9]{1,4}-(0[1-9]|1[012])/;
	var exprenombre = /[A-Z]{1,}/;
    this.nombre = datos.nombre;
    this.nis = datos.nis;

	 

	if(exprenombre.test(nombre)){
         
	}else{
		alert("Nombre incorrecto, debe ser escrito solamente con letras mayúsculas");
	}
	if(exprenis.test(nis)){
         
          imagenes();
	}else{
		alert("NIS incorrecto, el formato debe ser asi: 1994-7-07");
	}
	
	////////////////////////////EXPRESIONES REGULARES////////////////////////////////////////////
}

function despachado(){
	//////////////////////////////////////DOM//////////////////////////////////////
    var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }

  /////////////////////////////////////////DOM////////////////////////////////////      
    $(".DI").html("<h1 align=center>Asi se vive el escultismo en Bolivia</h1><br><video align=center width=640 height=360 controls autoplay preload><source src=video/Scoutsmp4.mp4 type=video/mp4; codecs=avc1,mp4a /></video><br><h1 align=center>SER SCOUT</h1><br><video align=center width=640 height=360 controls preload><source src=video/vide.ogg type=video/ogg; codecs=H264 / On2 VP8 : mp4 / ogg /></video>");
	$(".contenido").hide(function(){
       });
	$(".contenido").show(function(){
       });
}

function albino(){
    //////////////////////////////////////DOM//////////////////////////////////////
    var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
         }

  /////////////////////////////////////////DOM////////////////////////////////////      
    $(".DI").html("<img src=imagenes/albino.jpg>");
    $("#V").html("<h1 align=center>DESCRIPCION</h1><p>Mi nombre es Rafael Albino Jovel Alfaro, tengo 19 años y me gusta mucho la informática he creado este sitio web motivado por mis dos pasiones La informática(En esta ocacion el ámbito web) y ser scout</p><p>A lo largo de este ciclo he aprendido muchas cosas sobre el lenguaje de programacion Javascript y que el entorno web no solo es etructurar etiquetas y nada mas, sino que tambien trae con sigo muchas de las aplicaciones a la vida cotidiana asi como lo tienen en su mayoria los softwares o aplicaciones de escritorio</p><p>Lastimosamente en este ciclo no me ha ido tan bien en esta materia pero en lo personal en este ultimo periodo se ha vuelto mi asignatura favorita ya que me encanta lo increible que es el entorno web y la aplicación que tiene en la cotidianidad de la vida</p><p>Considero que he aprendido lo que se necesitaba aprender sobre esta materia y aun aprendi un poco mas de o que me enseñaron en clases</p><p>Me gusto mucho que al fnal del cilo se interactuo mas con los alumnos para que aprendieramos bien los temas.</p>");
	$(".contenido").hide(function(){
       });
	$(".contenido").show(function(){
       });
}



function imagenes(){

    var lugar1 = document.getElementById("C");

         if ( lugar1.hasChildNodes() )
         {
         while ( lugar1.childNodes.length >= 1 )
         {
         lugar1.removeChild( lugar1.firstChild );
         }
         }
         else{
             
         }
    var lugar2 = document.getElementById("V");

         if ( lugar2.hasChildNodes() )
         {
         while ( lugar2.childNodes.length >= 1 )
         {
         lugar2.removeChild( lugar2.firstChild );
         }
         }
         else{
             
}

 var datos  = new Array();
 datos[0] = "imagenes/albino.jpg>";
 datos[1] = "imagenes/tropa.jpg";
 datos[2] = "imagenes/clan.jpg";
 datos[3] = "imagenes/caminantes.jpg>";
 datos[4] = "imagenes/tropa.jpg";
 datos[5] = "imagenes/clan.jpg";

   

    $(".DI").html("<img src="+datos[0]+"  align=center><img src="+datos[1]+" align=center><img src="+datos[2]+" align=center><img src="+datos[3]+" align=center><img src="+datos[4]+" align=center><img src="+datos[5]+" align=center>");
  

    $(".contenido").hide(function(){
       });
    $(".contenido").show(function(){
       });
 


}
//  $(".informacion").html("   <table width=100% border=0><tbody><tr><br><br></p><p><strong>La vida scout en El Salvador&nbsp;</strong><br>Escrito por Fidel López Eguizábal&nbsp;<br>Sábado, 20 agosto 2011 Editorial La Prensa Gráfica.</p><p>¿Han oído hablar de Robert Baden Powell? Es el fundador del movimiento Scout a escala mundial, asociación que se estableció en El Salvador en 1914. Hay mucha historia que contar ya que hasta expresidentes salvadoreños han vestido el uniforme scout, entre ellos José Napoleón Duarte y Alfredo Cristiani.</p><p>Desde su fundación se ha ayudado a construir una mejor nación a través de sus miembros y por las acciones que realizan. En la Asociación de Scouts de El Salvador se enseña el Método Scout, valores, liderazgo, convivencia, amor a Dios, a la familia y a la naturaleza, empatía y sobre todo la amistad. El movimiento scout es la asociación juvenil más grande del planeta, cuenta alrededor de 28 millones de jóvenes y ha ayudado a más de 300 millones de jóvenes en sus 103 años de fundación. ¿Qué significa ser Scout? Se puede conocer de tres maneras: siendo un miembro scout, como padre de familia y como dirigente. En la última me encuentro yo, pasión que nació al haber asistido a un pequeño campamento en la finca Ecoturística El Espino, en Santa Tecla.</p><p>En una entrevista televisiva, un señor manifestó que los “boy scouts” o scouts se ven pocos en el país, talvez sí, lo que sucede que hay miles de jóvenes que no conocen el movimiento. Ser scout no significa nada más hacer nudos o andar acampando en las montañas, es mucho más. Es necesario que en estos tiempos que impera más los antivalores que las buenas costumbres, los niños y jóvenes se inscriban a los scouts. Uno de los aspectos fundamentales de los scouts es amar a la naturaleza, legado dejado por su fundador. Además se inculca el espíritu de “colaboración”, ejemplo de ello son las colaboraciones que efectúan en recolección de juguetes, en catástrofes, campañas religiosas, etc. La empatía, solidaridad, compañerismo, amor a la naturaleza es parte de la vida scout.</p><p>Se los aseguro que los niños y jóvenes scouts cometen menos errores en su vida. Tienen la oportunidad de tener una educación integral. Se les refuerza lo aprendido en el hogar y la escuela. Recordemos que hoy en día impera más la ociosidad que actividades de provecho. Sobre sus ramas están los lobatos, scouts, caminantes y los rovers. Es una gran experiencia pertenecer al movimiento. A los miembros se les ayuda a formar valores, basados en los principios espirituales, sociales y personales expresados en la Promesa y Ley Scout. En el movimiento, no hay diferencias de razas, posición económica, religión, cultura o política. Todos comparten como hermanos y “siempre listos” para ayudar al prójimo. Deberían las instituciones educativas invitar a niños y jóvenes a pertenecer al movimiento. He corroborado que colegios, escuelas y cuarteles prestan las instalaciones a los miembros scouts para que puedan realizar las reuniones.</p><p>¿Qué se aprende en el escultismo? La clave Morse, lectura de mapas, primeros auxilios, nadar, practicar ecoturismo, cocinar, aprender valores, etcétera. Esto es parte de las actividades que realizan desde niños en los diferentes lugares que se reúnen. Ayuda a formar el carácter, a socializar, a enfrentar la vida de una forma diferente.</p><p>Padre de familia, si usted desea que su hijo o hija aprenda sobre el escultismo, puede inscribir a su hijo en las diferentes sedes del país. He comprobado que niños tímidos, rebeldes y poco sociables cambian, se comparte, se hace amigos, se les enseña a amar la naturaleza, a amar a la familia, al prójimo y a Dios. Poco a poco los miembros van cambiando y haciéndose integrales para poder hacer una sociedad mejor en nuestro querido El Salvador. “Siempre mejor y siempre listos.”</p></td></tr></tbody></table>");