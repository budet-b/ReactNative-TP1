# TP 1

Pour ce premier TP nous allons refaire une partie d'Instagram en utilisant Expo.

![https://media.gqmagazine.fr/photos/5b991004d9e1220011b8a437/4:3/w_808,h_606,c_limit/c_est_quoi_le_probl__me_avec_le_feed_instagram___727.jpeg](https://media.gqmagazine.fr/photos/5b991004d9e1220011b8a437/4:3/w_808,h_606,c_limit/c_est_quoi_le_probl__me_avec_le_feed_instagram___727.jpeg)

#

Vous allez refaire la partie du feed avec la possibilité de "liker" une image, la partager mais aussi clicker dessus pour l'ouvrir dans une autre page.


Les likes doivent utiliser `Random` que vous avez dans la lib Expo (ils doivent tous être différents)

Le projet utilise [Typescript](https://www.typescriptlang.org/) je vous invite à en mettre le plus possible dans ce TP.

#

### Setup

```
git clone https://github.com/budet-b/ReactNative-TP1.git
yarn
yarn start
```

#

### Step by step

1. Afficher une image
Créer un composant dans un nouveau dossier, ce composant s'occupera d'afficher l'image, la caption, les 3 boutons en utilisant du `flex`.

2. Gérer le `like`

3. Générer le nombre de likes en utilisant `Random` d'Expo

4. Le bouton Share doit ouvrir la popup native du téléphone et permettre de partager du texte

5. Afficher toutes les images du JSON avec toutes les captions

Résultat attendu à ce moment du tp:

![tp-1](assets/tp1-1.png)
#

### Suite du TP
⚠️ A partir d'ici changer de mock et utiliser `random-images-2.json` ⚠️

5. Gestion du routing, ajouter la possibilité de naviguer sur une autre page
   
6. Au click sur l'image, passer via params l'id, les likes, l'url

7. Récupérer l'auteur via:
```
https://picsum.photos/id/${id}/info
```
8. Afficher l'auteur en Header de la page

Résultat attendu à ce moment du tp:

![tp-1](assets/tp1-2.png)

### Liens utile

- https://docs.expo.dev/
- https://docs.expo.dev/versions/latest/sdk/random/
- https://reactnative.dev/docs/share
