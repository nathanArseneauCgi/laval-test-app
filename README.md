# Test pour la ville de Laval

## Contexte
En tant qu'utilisateur je veux faire afficher un message dans l'interface web Étant donné un accès à un interface web contenant un bouton
- Lorsque je clique sur le bouton
- Alors une modal s'ouvre avec un message "Bonjour Laval" et un bouton de fermeture
- Lorsque je clique sur le bouton de fermeture
- Alors la modal se ferme

## Couverture de tests
```sh
 ✓ src/components/modal/index.test.tsx (2)
 ✓ src/App.test.tsx (1)

 Test Files  2 passed (2)
      Tests  3 passed (3)
   Start at  15:08:09
   Duration  8.82s (transform 1.87s, setup 3.85s, collect 824ms, tests 123ms)

 % Coverage report from c8

=============================== Coverage summary ===============================
Statements   : 100% ( 43/43 )
Branches     : 100% ( 9/9 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 43/43 )
================================================================================
```