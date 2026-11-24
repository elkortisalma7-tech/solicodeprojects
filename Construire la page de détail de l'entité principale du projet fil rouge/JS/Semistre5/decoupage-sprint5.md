# Découpage du sprint S5 en sous-tâches indépendantes

## 1. Mission globale du sprint

Créer une page PHP modulaire qui charge une liste d’articles stockée dans un tableau et l’affiche proprement dans la page d’accueil.

## 2. Plan de travail : les 4 sous-tâches

| Étape | Action | Fichier cible | Condition de validation |
|:---:|---|---|---|
| 1 | Déclarer le tableau d’articles en PHP | `data/articles.php` | Le fichier contient un tableau `$articles` avec 3 entrées valides. |
| 2 | Écrire la fonction de formatage d’un article | `includes/functions.php` | La fonction prend un article en paramètre et renvoie du HTML propre. |
| 3 | Inclure les données et boucler dans la page | `index.php` | La boucle `foreach` parcourt le tableau sans erreur de syntaxe. |
| 4 | Effectuer la recette visuelle et tester dans le navigateur | Navigateur Web | Les 3 articles apparaissent à l’écran avec leur titre et leur résumé. |

## 3. Ordre logique et dépendances

Les quatre sous-tâches doivent être réalisées dans un ordre chronologique :

1. Préparer les données des articles.
2. Créer la fonction de formatage.
3. Intégrer les données et la fonction dans la page d’accueil.
4. Tester et vérifier le résultat dans le navigateur.

Chaque étape doit être terminée et validée avant de passer à la suivante.

## 4. Vérification finale

La quatrième étape est consacrée à la recette finale.

Je dois ouvrir la page dans le navigateur et vérifier que les trois articles s'affichent correctement, avec leurs titres et leurs résumés, sans erreur PHP.

**Conclusion :** Le découpage du sprint permet d'organiser le travail, de respecter les dépendances et de vérifier chaque étape progressivement.