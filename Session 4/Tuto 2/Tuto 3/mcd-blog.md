Exercice - MCD

1. Présentation des entités et leurs attributs

VILLE
- id_ville : identifiant de la ville.
- nom_ville : nom de la ville.

AUTEUR
- id_auteur : identifiant de l'auteur.
- nom_auteur : nom de l'auteur.
- prenom_auteur : prénom de l'auteur.
- email_auteur : adresse email de l'auteur.

ARTICLE
- id_article : identifiant de l'article.
- titre_article : titre de l'article.
- contenu_article : contenu de l'article.
- date_publication : date de publication.
- statut_article : statut de l'article.
- image_article : image de l'article.

CATEGORIE
- id_categorie : identifiant de la catégorie.
- nom_categorie : nom de la catégorie.

2. Les relations et les cardinalités

Relation 1 : VILLE - habite - AUTEUR

- Cardinalité VILLE : (0,N)
- Cardinalité AUTEUR : (1,1)

Règles de gestion :
- Une ville peut accueillir zéro ou plusieurs auteurs.
- Un auteur habite obligatoirement dans une seule ville.

Relation 2 : AUTEUR - rédige - ARTICLE

- Cardinalité AUTEUR : (0,N)
- Cardinalité ARTICLE : (1,1)

Règles de gestion :
- Un auteur peut rédiger zéro ou plusieurs articles.
- Un article est rédigé obligatoirement par un seul auteur.

Relation 3 : CATEGORIE - regroupe - ARTICLE

- Cardinalité CATEGORIE : (0,N)
- Cardinalité ARTICLE : (1,1)

Règles de gestion :
- Une catégorie peut regrouper zéro ou plusieurs articles.
- Un article appartient obligatoirement à une seule catégorie.
