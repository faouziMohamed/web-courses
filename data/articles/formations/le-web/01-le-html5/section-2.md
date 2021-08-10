---
title: 'Le langage du Web : HTML5'
date: '2021-08-09'
author: 'Faouzi Mohamed'
---

## Code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mon Cv en ligne</title>
  </head>
  <body>
    <header id="top">
      <h1>Mon CV</h1>
      <img src="photo.jpg" alt="Ma photo" title="Photo de nom et prenom" />
      <p>
        <strong>Nom:</strong> Mohamed<br />
        <strong>Prenom:</strong> Faouzoudine<br />
        <strong>Email:</strong>
        <a href="mailto:email@exemple.org">email@exemple.org</a>
        <br />
        <strong>Tel:</strong> +33 (0) 6 47 47 47 47
      </p>
    </header>

    <section>
      <h2 id="resume">Résumé</h2>
      <p>
        Je suis enthousiaste, j'aime bien travailler en équipe et je suis
        rigoureux. J'ai fais une parcours d'ingénierie Web. J'ai pris en charge
        plusieurs projets notamment des applications web des système bancaires.
      </p>
      <p>
        J'ai eu à optimiser les système et les sécuriser pour une utilisation
        simple et rapide. J'ai développé des applications web pour autres
        système avec un état d'avancement important.
      </p>
      <p>
        Je tient à m'engager à continuer à travailler sur des projets et
        acquérir de nouveaux compétences avec un but de toucher plusieurs
        domaines avec les Web surtout sur les physiques, mathématiques,
        informatiques, la santé, l'éducation etc.
      </p>
      <p>
        J'ai travaillé sur l'énergie pendant plus de 15 ans sur
        <strong>EroTech</strong> en tant que chef de projet. Et j'ai participer
        sur plusieurs projet Open source.
      </p>
    </section>
    <section>
      <h2 id="competence">Compétences</h2>
      <p>
        C-joint une liste non exhaustive des compétences acquise au cour des
        formations et des expériences
      </p>
      <section>
        <h3 id="web-dev">Developpement Web</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p>Je sais faire:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
        <p>J'ai fait beaucoup de projet:</p>
        <ol>
          <li>Mon CV</li>
          <li><a href="https://google.fr">Banque en ligne</a></li>
          <li>
            <a href="https://github.com/faouziMohamed/web-courses">
              Site de rencontre</a
            >
          </li>
        </ol>
      </section>
    </section>
    <footer>
      <p>
        Tel: +33 (0) 6 47 47 47 47 <br />
        email:<a href="mailto:email@exemple.org">email@exemple.org</a>
      </p>
    </footer>
    <a href="#top">Monter en haut</a>
  </body>
</html>
```
