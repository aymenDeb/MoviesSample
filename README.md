# MoviesSample

## Installation 

1. npm install : installer les dépendances du projet depuis package Json.

###### Lancer sur Ios 

1. cd ios : se rendre sous le projet ios.
2. pod install : installer les dépendances du projet ios depuis le pod File.
3. npm run ios : lancer l'application sur un simulateur ios.

###### Lancer sur Andoid 

1. Créer un fichier local properties sous le dossier /android.
2. Ajouter le chemin vers le SDK Andoid avec sdk.dir=/users//..../Library/Android/sdk.
3. npm run andoid : lancer l'application sur un simulateur android. (il faut lancer le simulateur manuellement à l'avance ).


## ScreenShots
<img src="https://user-images.githubusercontent.com/47815922/86366380-05a63780-bc7b-11ea-812f-f0da816f85f2.png" alt="alt text" width="180" height="380"> <img src="https://user-images.githubusercontent.com/47815922/86366389-09d25500-bc7b-11ea-8709-6dc6431ec1b8.png" alt="alt text" width="180" height="380"> <img src="https://user-images.githubusercontent.com/47815922/86366391-09d25500-bc7b-11ea-9475-e48de07e7c94.png" alt="alt text" width="180" height="380"> 
<img src="https://user-images.githubusercontent.com/47815922/86366394-0a6aeb80-bc7b-11ea-8ecb-cfc5aab1868e.png" alt="alt text" width="180" height="380"> <img src="https://user-images.githubusercontent.com/47815922/86366397-0b038200-bc7b-11ea-99ec-ec47a27c4b16.png" alt="alt text" width="180" height="380"> <img src="https://user-images.githubusercontent.com/47815922/86366399-0b038200-bc7b-11ea-94d9-79c5b386b7a4.png" alt="alt text" width="180" height="380"> <img src="https://user-images.githubusercontent.com/47815922/86366403-0b9c1880-bc7b-11ea-896e-15cb3b825fa1.png" alt="alt text" width="180" height="380">


## Développement

Pour développer l'application j'ai utilisé les librairies suivante avec la dernière version de react-native 0.62.2 TypeScript :

> react-navigation v5 : pour tout ce qui est naviagtion entre les écrans et la création du bottom tab bar.

> @react-native-community/async-storage : c'est l'équivalent du LocalStorage dans le web. je l'ai utilisé pour stocker les films favoris.

> react-native-splash-screen : J'ai configuré les splash screen pour android et ios nativement, j'ai utilisé cette dépendence pour avoir accès au splash screen dans l'application react native et le cacher une fois le javascript chargé( pour ne pas avoir un écran blanc de chargement du js) .

> moment : pour formater la date de sorti du film dans l'écran détail du film.

> redux : qui permet d'avoir accès au store ( j'ai utilisé le store pour la gestion des films favoris et pour tester sur la connexion internet de l'utilsateur ).

> react-redux : qui donne accès aux fonctions pour pouvoir lire et écrire dans le store.

> redux-thunk : middleware qui permet au lieu dans les actions de pouvoir que retourner un type et un payload de pouvoir retourner une fonction et de dispatcher plusieurs choses à la suite.

## Test

pour lancer les tests unitaires il suffit de lancer la commande : npm run test.

> Jest : Jest pour écrire les conditions des testes unitaires

> enzyme : qui permet de générer comme nos composants pour pouvoir les manipuler sans que ça impact les Childs.






