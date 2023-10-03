<!DOCTYPE html>
<HTML>
    <head>
        <meta charset="UTF-8">
        <title>QUIZ</title>
        <link rel="stylesheet" href="./style2.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,1000&family=Kanit:wght@400;500;600;700;800;900&family=Montserrat:wght@100;400;900&family=Ubuntu&display=swap" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container pt-3" id="quiz">
            <form action="lideresCSV.php" method="post">
                <?php
                $fname = $_GET['fname'];
                echo('<input type="hidden" name="fname" value="'. $fname .'">');
                $lname = $_GET['lname'];
                echo('<input type="hidden" name="lname" value="'. $lname .'">');
                $genero = $_GET['genero'];
                echo('<input type="hidden" name="genero" value="'. $genero .'">');
                $estado_civil = $_GET['estado_civil'];
                echo('<input type="hidden" name="estado_civil" value="'. $estado_civil .'">');
                ?>
                <!-- Q1 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">¿A que campus asistes?</h2>
                    <div>
                        <!-- <h2>¿A que campus asistes?</h2> -->
                        <input type="radio" class="btn-check" id="east" name="campus" value="East">
                        <label class="btn btn-outline-light" for="east">East</label>
                        <input type="radio" class="btn-check" id="northeast" name="campus" value="Northeast">
                        <label class="btn btn-outline-light" for="northeast">Northeast</label>
                        <input type="radio" class="btn-check" id="west" name="campus" value="West">
                        <label class="btn btn-outline-light" for="west">West</label>
                        <input type="radio" class="btn-check" id="juarez" name="campus" value="Juarez">
                        <label class="btn btn-outline-light" for="juarez">Cd. Juarez</label>
                    </div>
                </div>
                <!-- Q2 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">¿Cual caricatura veias de niño?</h2>
                    <div>
                        <!-- <h2>¿Cual caricatura veias de niño?</h2> -->
                        <input type="radio" class="btn-check" id="cantinflas" name="ageShow" value="50">
                        <label class="btn btn-outline-light" for="cantinflas">Cantinflas Show</label>
                        <input type="radio" class="btn-check" id="gadget" name="ageShow" value="40">
                        <label class="btn btn-outline-light" for="gadget">Inspector Gadget</label>
                        <input type="radio" class="btn-check" id="dragon" name="ageShow" value="30">
                        <label class="btn btn-outline-light" for="dragon">Dragon Ball</label>
                        <input type="radio" class="btn-check" id="adventure" name="ageShow" value="20">
                        <label class="btn btn-outline-light" for="adventure">Adventure Time</label>
                    </div>
                </div>
                <!-- Q3 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">Para una comunidad ¿Que te importa más?</h2>
                    <div>
                        <!-- <h2>Para una comunidad ¿Que te importa más?</h2> -->
                        <input type="radio" class="btn-check" id="closeHome" name="cercania" value="closeHome">
                        <label class="btn btn-outline-light" for="closeHome">Cerca de Casa</label>
                        <input type="radio" class="btn-check" id="gustos" name="cercania" value="gustos">
                        <label class="btn btn-outline-light" for="gustos">Gustos/Valores</label>
                        <?php
                        if($genero == 'Female'){
                            echo('<input type="radio" class="btn-check" id="horario" name="cercania" value="horario">
                                <label class="btn btn-outline-light" for="horario">El horario</label>');
                        }
                        ?>
                    </div>
                </div>
                <!-- Q4 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">¿Que tanto te importa el exito en tus metas?</h2>
                    <div>
                        <!-- <h2>¿Que tanto te importa el exito en tus metas?</h2> -->
                        <input type="radio" class="btn-check" id="notImportant" name="metas" value="notImportant">
                        <label class="btn btn-outline-light" for="notImportant">No importa, lo que importa es vivir</label>
                        <input type="radio" class="btn-check" id="poquito" name="metas" value="poquito">
                        <label class="btn btn-outline-light" for="poquito">Poquito, pero no me estreso</label>
                        <input type="radio" class="btn-check" id="importa" name="metas" value="importa">
                        <label class="btn btn-outline-light" for="importa">Es importante, pero no es todo en la vida</label>
                        <input type="radio" class="btn-check" id="todo" name="metas" value="loEsTodo">
                        <label class="btn btn-outline-light" for="todo">De eso se trata la vida</label>
                    </div>
                </div>
                <!-- Q5 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">¿Que tipo de peliculas sueles ver?</h2>
                    <div>
                        <!-- <h2>¿Que tipo de peliculas sueles ver?</h2> -->
                        <input type="radio" class="btn-check" id="leer" name="hobby" value="leer">
                        <label class="btn btn-outline-light" for="leer">Leer</label>
                        <input type="radio" class="btn-check" id="ejercicio" name="hobby" value="ejercicio">
                        <label class="btn btn-outline-light" for="ejercicio">Hacer ejercicio</label>
                        <input type="radio" class="btn-check" id="ver" name="hobby" value="ver">
                        <label class="btn btn-outline-light" for="ver">Ver TV/Movil</label>
                        <input type="radio" class="btn-check" id="salir" name="hobby" value="salir">
                        <label class="btn btn-outline-light" for="salir">Salir con amigos</label>
                        <input type="radio" class="btn-check" id="aprender" name="hobby" value="aprender">
                        <label class="btn btn-outline-light" for="aprender">Aprender cosas nuevas</label>
                    </div>
                </div>
                <!-- Q6 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">¿Que tipo de peliculas sueles ver?</h2>
                    <div>
                        <!-- <h2>¿Que tipo de peliculas sueles ver?</h2> -->
                        <input type="radio" class="btn-check" id="Docu" name="peli" value="documental">
                        <label class="btn btn-outline-light" for="Docu">Documental</label>
                        <input type="radio" class="btn-check" id="accion" name="peli" value="accion">
                        <label class="btn btn-outline-light" for="accion">Accion</label>
                        <input type="radio" class="btn-check" id="drama" name="peli" value="drama">
                        <label class="btn btn-outline-light" for="drama">Drama</label>
                        <input type="radio" class="btn-check" id="veridica" name="peli" value="veridica">
                        <label class="btn btn-outline-light" for="veridica">Veridica</label>
                    </div>
                </div>
                <!-- Q7 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">De estas comidas ¿Cual eligirias?</h2>
                    <div>
                        <!-- <h2>De estas comidas ¿Cual eligirias?</h2> -->
                        <input type="radio" class="btn-check" id="burger" name="comida" value="burger">
                        <label class="btn btn-outline-light" for="burger">Hamburgesa</label>
                        <input type="radio" class="btn-check" id="Italy" name="comida" value="italian">
                        <label class="btn btn-outline-light" for="Italy">Italiana</label>
                        <input type="radio" class="btn-check" id="Saludable" name="comida" value="saludable">
                        <label class="btn btn-outline-light" for="Saludable">Saludable</label>
                        <input type="radio" class="btn-check" id="Casera" name="comida" value="casera">
                        <label class="btn btn-outline-light" for="Casera">Casera</label>
                        <input type="radio" class="btn-check" id="Mexicana" name="comida" value="mex">
                        <label class="btn btn-outline-light" for="Mexicana">Mexicana</label>
                    </div>
                </div>
                <!-- Q8 -->
                <div class="question">
                    <h2 class="text-uppercase fw-bolder text-white">Si te dan 500 dlls ¿En que los gastarias?</h2>
                    <div>
                        <!-- <h2>Si te dan 500 dlls ¿En que los gastarias?</h2> -->
                        <input type="radio" class="btn-check" id="invertir" name="500" value="invertir">
                        <label class="btn btn-outline-light" for="invertir">Invertir</label>
                        <input type="radio" class="btn-check" id="compras" name="500" value="compras">
                        <label class="btn btn-outline-light" for="compras">Compras</label>
                        <input type="radio" class="btn-check" id="electronicos" name="500" value="tech">
                        <label class="btn btn-outline-light" for="electronicos">Electronicos</label>
                        <input type="radio" class="btn-check" id="ropa" name="500" value="ropa">
                        <label class="btn btn-outline-light" for="ropa">Ropa</label>
                        <input type="radio" class="btn-check" id="experiencia" name="500" value="experiencia">
                        <label class="btn btn-outline-light" for="experiencia">Experiencias</label>
                        <input type="radio" class="btn-check" id="recursos" name="500" value="recursos">
                        <label class="btn btn-outline-light" for="recursos">Recursos</label>
                        <input type="radio" class="btn-check" id="casa" name="500" value="casa">
                        <label class="btn btn-outline-light" for="casa">Casa</label>
                    </div>
                </div>
                <br>
                <div class="text-center" id="exit">
                    <button type="submit" class="btn btn-light btn-lg ">Listo</button>
                </div>
            </form>
        </div>
    </body>
</HTML>