<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon portofolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<header>
    <h1> <?= $nom?></h2>
    <p> <?= $formation?></p>
</header>

<nav>
    <a href="#acceuil">Acceuil</a>
    <a href="#blog">Mon blog</a>
    <a href="#competences">Competences</a>
    <a href="#projets">Projets</a>
    <a href="#contact">Contact</a>
</nav> 

<main>
<section id="acceuile">
<h2> Bienvennue sur mon portofolio .</h2>
<p> Je suis Appranent en developpement web .</p>
</section>

<section id="blog">
<h1> Mon blog</h2>
<img src="blog.png" alt=" mon blog"> 
<p> developeure,Appranent en partager.</p>
</section>

<section id="competences">
<h2> Mes competences .</h2>
<?php  foreach ($competences as $competence):?>
    <h3><strong> <?= $competence["nom"] ?> </strong></h3>
<p><?= $competence["decsription"]?></p>
    <?php endforeach; ?>
</section>

<section id="projets">
<h2> Mon projets.</h2>
<?php  foreach ($projets as $projet):?>
    <h3><strong> <?= $projet["nom"]?> </strong></h3>
<p><?=$projet["description"] ?></p>
    <?php endforeach; ?>
</section>

</main>

<footer id="contact"> 
<h2>Contact.</h2>
<p> <strong>Contactez-moi</strong></p>
<p> @ Salma el korti. </p>
</footer>
</body>
</html>