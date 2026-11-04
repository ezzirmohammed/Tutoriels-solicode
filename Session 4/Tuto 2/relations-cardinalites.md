Exercice — Déterminer les relations et les cardinalités

1. VILLE — habite — AUTEUR

- Cardinalité VILLE : 1,N
- Cardinalité AUTEUR : 1,1
- Règle de gestion :
  - Une ville accueille un ou plusieurs auteurs.
  - Un auteur habite dans une seule ville.

2. AUTEUR — rédige — ARTICLE

- Cardinalité AUTEUR : 1,N
- Cardinalité ARTICLE : 1,1
- Règle de gestion :
  - Un auteur rédige un ou plusieurs articles.
  - Un article est rédigé par un seul auteur.

3. CATEGORIE — regroupe — ARTICLE

- Cardinalité CATEGORIE : 1,N
- Cardinalité ARTICLE : 1,1
- Règle de gestion :
  - Une catégorie regroupe un ou plusieurs articles.
  - Un article appartient à une seule catégorie.

4. ARTICLE — possède — TAG

- Cardinalité ARTICLE : 0,N
- Cardinalité TAG : 0,N
- Règle de gestion :
  - Un article peut posséder zéro ou plusieurs tags.
  - Un tag peut être associé à zéro ou plusieurs articles.
